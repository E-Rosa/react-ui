import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

//Carousel--------------------------------------------------------------------------------------------------------------------------*
export const CarouselContext = createContext({
  nextPage: () => {},
  previousPage: () => {},
  goToPage: (page: number) => {
    page;
  },
});
export function Carousel({ children }: { children: JSX.Element[] }) {
  const [activeViewKey, setActiveViewKey] = useState(0);
  const paginationButtons = children.map((_, key) => {
    const highlighted = activeViewKey == key;
    return (
      <button
        className={
          highlighted
            ? "btn-circle btn-xs border btn-neutral"
            : "btn-circle btn-xs border btn-outline"
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

//FeedbackProvider-----------------------------------------------------------------------------------------------------------/
export const FeedbackProviderContext = createContext({
  setError: (message?: string) => {
    message;
  },
  setSuccess: (message?: string) => {
    message;
  },
  setLoading: (state: boolean) => {
    state;
  },
});
export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [isErrorActive, setIsErrorActive] = useState(false);
  const [isSuccessActive, setIsSuccessActive] = useState(false);
  const [isLoadingActive, setIsLoadingActive] = useState(false);
  const [feedbackMessage, setfeedbackMessage] = useState("");
  const errorIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-exclamation-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
    </svg>
  );

  const successIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-check-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
    </svg>
  );

  return (
    <>
      <AnimatePresence>
        {isErrorActive && (
          <motion.div
            className="alert alert-error shadow-lg max-w-max flex-row flex items-center justify-center fixed inset-0 flex-wrap max-h-max z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            {errorIcon}
            {feedbackMessage != "" && (
              <span className="break-all">{feedbackMessage}</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isSuccessActive && (
          <motion.div
            className="alert alert-success shadow-lg flex-row max-w-max flex items-center justify-center fixed inset-0 flex-wrap max-h-max z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            {successIcon}
            {feedbackMessage != "" && (
              <span className="break-all">{feedbackMessage}</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isLoadingActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="alert shadow-lg flex-row max-w-max flex items-center justify-center fixed inset-0 flex-wrap max-h-max z-50"
          >
            <div className=" w-5 h-5 border-8 border-accent rounded-full animate-spin p-3 border-t-white"></div>
          </motion.div>
        )}
      </AnimatePresence>
      <FeedbackProviderContext.Provider
        value={{
          setError: (message?: string) => {
            message ? setfeedbackMessage(message) : setfeedbackMessage("");
            setIsErrorActive(true);
            setTimeout(() => {
              setIsErrorActive(false);
            }, 2000);
          },
          setSuccess: (message?: string) => {
            message ? setfeedbackMessage(message) : setfeedbackMessage("");
            setIsSuccessActive(true);
            setTimeout(() => {
              setIsSuccessActive(false);
            }, 2000);
          },
          setLoading: (state: boolean) => {
            setIsLoadingActive(state);
          },
        }}
      >
        {children}
      </FeedbackProviderContext.Provider>
    </>
  );
}

//Modal------------------------------------------------------------------------------------------------------------------------/
export type ModalAlignment = "center" | "bottom-right";
export const closeIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
      fill="currentColor"
    />
  </svg>
);
export const ModalContext = createContext({
  setActive: (b: boolean) => {
    b;
  },
  setAlignment: (mode: ModalAlignment) => {
    mode;
  },
  setTransparent: (b: boolean) => {
    b;
  },
});
export function Modal({
  children,
  setIsActive,
  isActive,
  defaultAlignment = "center",
  defaultTransparent = false,
}: {
  children: ReactNode;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  isActive: boolean;
  defaultAlignment?: ModalAlignment;
  defaultTransparent?: boolean;
}) {
  const [alignment, setAlignment] = useState(defaultAlignment);
  const getAlignmentClass = () => {
    if (alignment == "center")
      return "justify-center items-center flex-col absolute w-screen h-screen flex inset-0 z-40";
    if (alignment == "bottom-right")
      return "justify-end items-end p-3 flex-col absolute flex right-0 bottom-0 z-40 h-min";
  };
  const [isTransparent, setIsTransparent] = useState(defaultTransparent);
  const transparentClass = isTransparent ? "transparent" : "bg-white";
  return (
    <>
      <ModalContext.Provider
        value={{
          setActive: (b: boolean) => {
            setIsActive(b);
          },
          setAlignment: (mode: ModalAlignment) => {
            setAlignment(mode);
          },
          setTransparent: (b: boolean) => {
            setIsTransparent(b);
          },
        }}
      >
        <AnimatePresence>
          {isActive && (
            <motion.div
              className={getAlignmentClass() + " " + transparentClass}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex flex-col">
                <button
                  className="btn-sm flex justify-center items-center self-end btn-ghost btn-circle relative z-10"
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  {closeIcon}
                </button>
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ModalContext.Provider>
    </>
  );
}
