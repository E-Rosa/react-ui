import {Carousel} from "./carousel";
import CarouselItem from "./carouselItem";
import "./App.css";
import { Modal } from ".";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(true)
  return (
    <div className="halfscreen">
      <Modal isActive={isActive} setIsActive={setIsActive} defaultAlignment="center">
      <Carousel>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <CarouselItem />
        <span>5</span>
      </Carousel>
      </Modal>
      <span>Content outside modal</span>
    </div>

  );
}

export default App;
