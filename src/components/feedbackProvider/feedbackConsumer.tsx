import { useContext } from "react"
import { FeedbackProviderContext } from "./feedbackProvider"

function MyComponent() {
    const feedbackContext = useContext(FeedbackProviderContext)
  return (
    <div style={{marginTop:"90px"}}>
       <button className="cButton" onClick={()=>{feedbackContext.setError("something went wrong!")}}>setError</button>
       <button className="cButton" onClick={()=>{feedbackContext.setSuccess("all ok!")}}>setSuccess</button>
       <button className="cButton" onClick={()=>{feedbackContext.setLoading(true)}}>setLoading(true)</button>
       <button className="cButton" onClick={()=>{feedbackContext.setLoading(false)}}>setLoading(false)</button>
    </div>
  )
}

export default MyComponent