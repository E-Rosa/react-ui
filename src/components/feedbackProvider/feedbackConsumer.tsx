import { useContext } from "react"
import { FeedbackProviderContext } from "./feedbackProvider"

function MyComponent() {
    const feedbackContext = useContext(FeedbackProviderContext)
  return (
    <div style={{marginTop:"90px"}}>
        <button onClick={()=>{feedbackContext.setError("something went wrong!")}}>setError</button>
        <button onClick={()=>{feedbackContext.setSuccess("all ok!")}}>setSuccess</button>
        <button onClick={()=>{feedbackContext.setLoading(true)}}>setLoading(true)</button>
        <button onClick={()=>{feedbackContext.setLoading(false)}}>setLoading(false)</button>
    </div>
  )
}

export default MyComponent