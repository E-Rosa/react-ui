import { useContext } from "react"
import { ModalContext } from "./modal"

function ModalChild() {
  const modalContext = useContext(ModalContext);
  return (
    <div className="cflex">
       <button className="cButton" onClick={()=>{modalContext.setActive(true)}}>{"setActive()"}</button>
       <button className="cButton" onClick={()=>{modalContext.setAlignment('center')}}>{"setAlignment('center')"}</button>
       <button className="cButton" onClick={()=>{modalContext.setAlignment('bottom-right')}}>{"setAlignment('bottom-right')"}</button>
       <button className="cButton" onClick={()=>{modalContext.setTransparent(true)}}>{"setTransparent(true)"}</button>
       <button className="cButton" onClick={()=>{modalContext.setTransparent(false)}}>{"setTransparent(false)"}</button>
    </div>
  )
}

export default ModalChild