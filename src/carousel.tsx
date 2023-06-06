import { createContext, useState } from "react";
import { motion } from "framer-motion";

export const CarouselContext = createContext({
  nextPage: () => {},
  previousPage: () => {},
  goToPage: (page: number) => {},
});
function Carousel({ children }: { children: JSX.Element[] }) {

  const [activeViewKey, setActiveViewKey] = useState(0);
  const paginationButtons = children.map((_, key) => {
    const highlighted = activeViewKey == key;
    return (
      <button
        className={highlighted ? "btn-circle btn-xs border btn-neutral" : "btn-circle btn-xs border btn-outline"}
        key={key}
        onClick={() => {
          setActiveViewKey(key);
        }}
      >
        {key + 1}
      </button>
    );
  });
  const views = children.map((view, key) => {
    return (
      <>
        {activeViewKey == key && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={key}
          >
            {view}
          </motion.div>
        )}
      </>
    );
  });
  return (
    <motion.div
      className="p-7 pb-4 rounded-xl border border-black flex flex-col gap-2 items-center justify-center bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CarouselContext.Provider
        value={{
          nextPage: () => {
            setActiveViewKey((prev) => prev + 1);
          },
          previousPage: () => {
            setActiveViewKey((prev) => prev - 1);
          },
          goToPage: (page: number) => {
            setActiveViewKey(page);
          },
        }}
      >
        {views}
      </CarouselContext.Provider>
      <div className="flex gap-1 self-end">{paginationButtons}</div>
    </motion.div>
  );
}

export default Carousel;
