
import { backgroundImage } from "../assets/png"
function BackgroundImage() {
  return (
   <div className="w[100vw] h[100vh]">
    <img src={backgroundImage} className="w-full h-full object-contain"/>
   </div>
  )
}

export default BackgroundImage