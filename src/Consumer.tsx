import { useContext } from "react";
import { FeedbackProviderContext } from "./components/feedbackProvider/feedbackProvider";

interface ConsumerProps {}

function Consumer(_: ConsumerProps) {
  const feedback = useContext(FeedbackProviderContext);
  return (
    <div>
      <button
        onClick={() => {
          feedback.setSuccess("permanent success", { isPermanent: true });
        }}
      >
        permanent success
      </button>
      <button
        onClick={() => {
          feedback.setSuccess("temporary success");
        }}
      >
        temporary success
      </button>
      <button
        onClick={() => {
          feedback.setSuccess("success!", {durationMilliseconds: 1000});
        }}
      >
        1 second success
      </button>
      <button
        onClick={() => {
          feedback.setSuccess("success!", {durationMilliseconds: 10000});
        }}
      >
        10 second success
      </button>
    </div>
  );
}

export default Consumer;
