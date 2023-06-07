import { useContext } from "react"
import { CarouselContext } from "./carousel"

function CarouselItem() {
    const carouselContext = useContext(CarouselContext)
  return (
    <>
    <div>CarouselItem</div>
    <button onClick={()=>{carouselContext.addPage(<span>4</span>); carouselContext.goToPage(6)}}>Add item</button>
    </>
  )

}

export default CarouselItem