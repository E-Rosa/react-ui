import { ReactNode, createContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import App from "./App";
export const Test = App;
//responsibility:
//provide setError and setSuccess context to its children
//define error and success components and display dinamically

export const FeedbackProviderContext = createContext({
  setError: (message?: string) => {},
  setSuccess: (message?: string) => {},
  setLoading: (state: boolean) => {},
});
export default function FeedbackProvider({
  children,
}: {
  children: ReactNode;
}) {
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
