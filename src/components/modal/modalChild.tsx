import { useContext } from "react"
import { ModalContext } from "./modal"

function ModalChild() {
  const modalContext = useContext(ModalContext);
  return (
    <div className="flex">
        <button onClick={()=>{modalContext.setActive(true)}}>{"setActive()"}</button>
        <button onClick={()=>{modalContext.setAlignment('center')}}>{"setAlignment('center')"}</button>
        <button onClick={()=>{modalContext.setAlignment('bottom-right')}}>{"setAlignment('bottom-right')"}</button>
        <button onClick={()=>{modalContext.setTransparent(true)}}>{"setTransparent(true)"}</button>
        <button onClick={()=>{modalContext.setTransparent(false)}}>{"setTransparent(false)"}</button>
    </div>
  )
}

export default ModalChild