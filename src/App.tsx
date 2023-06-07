import {Carousel} from "./carousel";
import CarouselItem from "./carouselItem";
import "./App.css";

function App() {
  return (
    <div className="halfscreen">
      <Carousel>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <CarouselItem />
        <span>5</span>
      </Carousel>
    </div>
  );
}

export default App;
