
import {BsArrowLeft} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

function PlayScreen() {
    const navigator=useNavigate();
    const handlebackpage=()=>{
        navigator(-1)
    }
  return (
    <div>
        <div className='absolute z-[1] mt-[1rem] ml-[2rem] cursor-pointer ' onClick={handlebackpage}>
<BsArrowLeft size={30} color='white'/>
        </div>
        <div >
            <video className='w-[100vw] h-[100vh] ' autoPlay loop controls muted>
                {}
            </video>
        </div>
    </div>
  )
}

export default PlayScreen