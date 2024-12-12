import { ReactNode, createContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./feedbackProvider.css";
import { closeIcon } from "../modal/modal";
import { v4 } from "uuid";
//responsibility:
//provide setError and setSuccess context to its children
//define error and success components and display dinamically

export const FeedbackProviderContext = createContext({
  setError: (message?: string) => {
    message;
  },
  setSuccess: (
    message?: string,
    opts?: {
      isPermanent?: boolean,
      durationMilliseconds?: number
    }
  ) => {
    message;
    opts;
  },
  setLoading: (state: boolean) => {
    state;
  },
});
export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [isErrorActive, setIsErrorActive] = useState(false);
  const [isLoadingActive, setIsLoadingActive] = useState(false);
  const [feedbackMessage, setfeedbackMessage] = useState("");
  const [successMessages, setSuccessMessages] = useState<
    { id: string; message?: string; opts?: { isPermanent?: boolean, durationMilliseconds?: number } }[]
  >([]);
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
  const loader = <div className="loader"></div>;

  return (
    <>
      <AnimatePresence>
        {isErrorActive && (
          <motion.div
            className="floatingContainer errorContainer"
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
        <motion.div className="floatingParentContainer">
          {successMessages.map((successMessage, index) => {
            return (
              <motion.div
                className="successContainer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                key={index}
              >
                {successIcon}
                {successMessage.message != "" && (
                  <span className="break-all">{successMessage.message}</span>
                )}
                {successMessage.opts?.isPermanent && <div
                  className="closeButtonContainer"
                  onClick={() => {
                    setSuccessMessages(
                      successMessages.filter((_, i) => i != index)
                    );
                  }}
                >
                  {closeIcon}
                </div>}
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {isLoadingActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="floatingContainer loadingContainer"
          >
            {loader}
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
            }, 4000);
          },
          setSuccess: (
            message?: string,
            opts?: {
              isPermanent?: boolean,
              durationMilliseconds?: number,
            }
          ) => {
            const id = v4();
            setSuccessMessages((prevSuccessMessages) => {
              return [...prevSuccessMessages, { id, message, opts }];
            });
            if (!opts?.isPermanent) {
              setTimeout(() => {
                setSuccessMessages((prevSuccessMessages) => {
                  return prevSuccessMessages.filter(
                    (successMessage) => successMessage.id != id
                  );
                });
              }, opts?.durationMilliseconds ? opts.durationMilliseconds : 4000);
            }
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
