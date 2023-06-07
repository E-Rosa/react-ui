import { createContext, useState } from "react";
import { motion } from "framer-motion";
import "./carousel.css";

export const CarouselContext = createContext({
  nextPage: () => {},
  previousPage: () => {},
  goToPage: (page: number) => {
    page;
  },
  addPage: (page: JSX.Element) => {
    page;
  },
});

export function Carousel({ children }: { children: JSX.Element[] }) {
  const [addedViews, setAddedViews] = useState<JSX.Element[]>();
  const [activeViewKey, setActiveViewKey] = useState(0);
  const views = () => {
    const fromChildren = children.map((view, key) => {
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
    if (addedViews) {
      const fromAddedViews = addedViews.map((addedView, key) => {
        const newKey = key + children.length;
        return (
          <>
            {activeViewKey == newKey && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={newKey}
              >
                {addedView}
              </motion.div>
            )}
          </>
        );
      });
      return fromChildren.concat(fromAddedViews);
    }
    return fromChildren;
  };
  const paginationButtons = () => {
    const fromChildren = children.map((_, key) => {
      const highlighted = activeViewKey == key;
      return (
        <button
          className={
            highlighted
              ? "paginationButtonHighlighted"
              : "paginationButton"
          }
          key={key}
          onClick={() => {
            setActiveViewKey(key);
          }}
        >
          {key + 1}
        </button>
      );
    });
    if (addedViews) {
      const fromAddedViews = addedViews.map((_, key) => {
        const newKey = key + children.length;
        const highlighted = activeViewKey == newKey;
        return (
          <button
            className={
              highlighted
                ? "paginationButtonHighlighted"
                : "paginationButton"
            }
            key={newKey}
            onClick={() => {
              setActiveViewKey(newKey);
            }}
          >
            {newKey + 1}
          </button>
        );
      });
      return fromChildren.concat(fromAddedViews);
    }
    return fromChildren;
  };
  return (
    <motion.div
      className="carousel"
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
            setActiveViewKey(page - 1);
          },
          addPage: (page: JSX.Element) => {
            if (addedViews == undefined) {
              setAddedViews([page]);
            } else {
              setAddedViews((prev) => {
                if (prev) return [...prev, page];
              });
            }
          },
        }}
      >
        {views()}
      </CarouselContext.Provider>
      <div className="paginationButtonsContainer">{paginationButtons()}</div>
    </motion.div>
  );
}
