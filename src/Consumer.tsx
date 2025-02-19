import { useContext } from "react";
import { FeedbackProviderContext } from "./components/feedbackProvider/feedbackProvider";

interface ConsumerProps {}

function FeedbackConsumer(_: ConsumerProps) {
  const feedback = useContext(FeedbackProviderContext);
  return (
    <div>
  
      <button className="btn"
        onClick={() => {
          feedback.setSuccess("permanent success", { isPermanent: true });
        }}
      >
        permanent success
      </button>
      <button className="btn"
        onClick={() => {
          feedback.setSuccess("temporary success");
        }}
      >
        temporary success
      </button>
      <button className="btn" 
        onClick={() => {
          feedback.setSuccess("success!", { durationMilliseconds: 1000 });
        }}
      >
        1 second success
      </button>
      <button className="btn"
        onClick={() => {
          feedback.setSuccess("success!", { durationMilliseconds: 10000 });
        }}
      >
        10 second success
      </button>
      <button className="btn"
        onClick={() => {
          feedback.setSuccess(
            <div className="cflexColumn">
              <span className="cButton">custom jsx</span>
              <span className="cButton">custom jsx</span>
            </div>,
            { isPermanent: true }
          );
        }}
      >
        JSX success
      </button>
    </div>
  );
}

export default FeedbackConsumer;
