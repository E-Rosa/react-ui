import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./feedbackProvider.css";
import { closeIcon } from "../modal/modal";
import { v4 } from "uuid";
import { FeedbackSuccessEventPayload } from "../../observers/events/FeedbackEvents";
import { EventEmitter } from "../../observers/emitters/EventEmitter";
import { errorIcon, successIcon } from "../../assets/icons";

export type SuccessEvent = {
  message?: string | JSX.Element;
  opts?: {
    isPermanent?: boolean;
    durationMilliseconds?: number;
  };
};

export type ErrorEvent = {
  message?: string;
};

export type LoadingEvent = {
  isLoading: boolean;
};

const successEventEmitter = new EventEmitter<SuccessEvent>();
const errorEventEmitter = new EventEmitter<ErrorEvent>();
const loadingEventEmitter = new EventEmitter<LoadingEvent>();

/**
 * Emits a success event. Listeners will respond right away if they exist.
 */
export const emitSuccess = (payload: SuccessEvent) => {
  successEventEmitter.emit({
    payload: payload,
  });
};

/**
 * Emits an error event. Listeners will respond right away if they exist.
 */
export const emitError = (payload: ErrorEvent) => {
  errorEventEmitter.emit({ payload: payload });
};

/**
 * Emits a loading event. Listeners will respond right away if they exist.
 */
export const emitLoading = (payload: LoadingEvent) => {
  loadingEventEmitter.emit({ payload: payload });
};

export const FeedbackProviderContext = createContext({
  setError: (message?: string) => {
    message;
  },
  setSuccess: (
    message: string | JSX.Element,
    opts?: {
      isPermanent?: boolean;
      durationMilliseconds?: number;
    }
  ) => {
    message;
    opts;
  },
  setLoading: (state: boolean) => {
    state;
  },
});

export function useFeedback() {
  return useContext(FeedbackProviderContext);
}

export function FeedbackProvider({ children }: { children: ReactNode }) {
  type ErrorMessage = {
    message: string;
    id: string;
  };
  const [errorMessages, setErrorMessages] = useState<ErrorMessage[]>([]);
  const [isLoadingActive, setIsLoadingActive] = useState(false);
  const [successMessages, setSuccessMessages] =
    useState<FeedbackSuccessEventPayload>([]);

  useEffect(() => {
    const errorEmitterId = errorEventEmitter.addListener({
      callback: (payload) => {
        setError(payload.message);
      },
    });

    const successEmitterId = successEventEmitter.addListener({
      callback: (payload) => {
        setSuccess(
          payload.message ? payload.message : "Success!",
          payload.opts
            ? payload.opts
            : {
                durationMilliseconds: 4000,
                isPermanent: false,
              }
        );
      },
    });

    const loadingEmitterId = loadingEventEmitter.addListener({
      callback: (payload) => {
        setLoading(payload.isLoading);
      },
    });
    return () => {
      errorEventEmitter.removeListener(errorEmitterId);
      successEventEmitter.removeListener(successEmitterId);
      loadingEventEmitter.removeListener(loadingEmitterId);
    };
  }, []);

  const setSuccess = (
    message: string | JSX.Element,
    opts?: {
      isPermanent?: boolean;
      durationMilliseconds?: number;
    }
  ) => {
    const id = v4();
    setSuccessMessages((prevSuccessMessages) => {
      return [...prevSuccessMessages, { id: id, message: message, opts: opts }];
    });
    if (!opts?.isPermanent) {
      setTimeout(
        () => {
          setSuccessMessages((prevSuccessMessages) => {
            return prevSuccessMessages.filter(
              (successMessage) => successMessage.id != id
            );
          });
        },
        opts?.durationMilliseconds ? opts.durationMilliseconds : 4000
      );
    }
  };
  const setError = (message?: string) => {
    const id = v4();

    setErrorMessages((prevMessages) => {
      return message
        ? [...prevMessages, { message: message, id: id }]
        : [...prevMessages, { message: "Error!", id: id }];
    });

    setTimeout(() => {
      setErrorMessages((prevMessages) => {
        return prevMessages.filter((prevMessage) => {
          return prevMessage.id != id;
        });
      });
    }, 4000);
  };

  const setLoading = (state: boolean) => {
    setIsLoadingActive(state);
  };

  const loader = (
    <div className="loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  return (
    <>
      <motion.div className="floatingParentContainer">
        <AnimatePresence>
          {errorMessages.length > 0 &&
            errorMessages.map((message, key) => {
              return (
                <motion.div
                  className="floatingChildContainer errorContainer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                  key={key}
                >
                  {errorIcon}
                  <span className="break-all">{message.message}</span>
                </motion.div>
              );
            })}
        </AnimatePresence>
        <AnimatePresence>
          <AnimatePresence>
            {successMessages.map((successMessage, index) => {
              return (
                <motion.div
                  className="floatingChildContainer successContainer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                  key={index}
                >
                  {successIcon}
                  {successMessage.message != "" && (
                    <div className="break-all">{successMessage.message}</div>
                  )}
                  {successMessage.opts?.isPermanent && (
                    <div
                      className="closeButtonContainer"
                      onClick={() => {
                        setSuccessMessages(
                          successMessages.filter((_, i) => i != index)
                        );
                      }}
                    >
                      {closeIcon}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </AnimatePresence>
        <AnimatePresence>
          {isLoadingActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
              className="floatingChildContainer loadingContainer"
            >
              {loader}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <FeedbackProviderContext.Provider
        value={{
          setError: (message?: string) => {
            setError(message);
          },
          setSuccess: (
            message: string | JSX.Element,
            opts?: {
              isPermanent?: boolean;
              durationMilliseconds?: number;
            }
          ) => {
            setSuccess(message, opts);
          },
          setLoading: (state: boolean) => {
            setLoading(state);
          },
        }}
      >
        {children}
      </FeedbackProviderContext.Provider>
    </>
  );
}
