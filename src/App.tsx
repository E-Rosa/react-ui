import "./App.css";
import { FeedbackProvider } from "./components/feedbackProvider/feedbackProvider";
import { useState } from "react";
import MyComponent from "./components/feedbackProvider/feedbackConsumer";

function App() {
  const [isActive, setIsActive] = useState(true)
  return (
    <div className="halfscreen">
      <FeedbackProvider>
        <MyComponent />
      </FeedbackProvider>
    </div>

  );
}

export default App;
