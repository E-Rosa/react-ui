import { useContext } from "react"
import { CarouselContext } from "./carousel"

function CarouselItem() {
    const carouselContext = useContext(CarouselContext)
  return (
    <>
    <div>CarouselItem</div>
   <button className="cButton" onClick={()=>{carouselContext.addPage(<span>added page</span>);}}>Add item</button>
    </>
  )

}

export default CarouselItem