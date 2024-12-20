import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./modal.css"

export type ModalAlignment = "center" | "bottom-right";

export const closeIcon = (
  <svg
    width="26"
    height="26"
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
  setActive: (b: boolean) => {b},
  setAlignment: (mode: ModalAlignment) => {mode},
  setTransparent: (b: boolean) => {b},
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
    if (alignment == "center"){

      return "centeredModal";}
    if (alignment == "bottom-right"){

      return "bottomRightModal";}
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
            setIsActive(false)
            setAlignment(mode);
            setTimeout(()=>{setIsActive(true)}, 300)
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
              <div className="modalContentContainer">
               <button 
                  className={"cButton " + "closeButton"}
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
