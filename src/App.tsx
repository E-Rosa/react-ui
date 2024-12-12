import { FeedbackProvider } from "./components/feedbackProvider/feedbackProvider";
import "./App.css";
import Consumer from "./Consumer";
import "./standards.css";

function App() {
  return (
    <div className="halfscreen">
      <FeedbackProvider>
        <Consumer />
      </FeedbackProvider>
    </div>
  );
}

export default App;
