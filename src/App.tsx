import { FeedbackProvider } from "./components/feedbackProvider/feedbackProvider";
import "./App.css";
import FeedbackConsumer from "./Consumer";
import "./standards.css";
import Demo from "./components/demo/Demo";
import "./index.css"


function App() {
  return (
    <div className="halfscreen">
      <FeedbackProvider>
        <FeedbackConsumer />
        <Demo />
      </FeedbackProvider>
    </div>
  );
}

export default App;
