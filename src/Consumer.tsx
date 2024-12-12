import { useContext } from "react";
import { FeedbackProviderContext } from "./components/feedbackProvider/feedbackProvider";

interface ConsumerProps {}

function Consumer(_: ConsumerProps) {
  const feedback = useContext(FeedbackProviderContext);
  return (
    <>
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
    </>
  );
}

export default Consumer;
