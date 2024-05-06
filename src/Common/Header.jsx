import { useNavigate } from "react-router-dom"
import { netflix } from "../assets/png"

function Header(props) {
  const navigate =   useNavigate()
  return (
    <div>
       <div className=" xs:px-2 md:px-[4rem] w-full flex flex-row justify-between items-center absolute top-8 ">
        <img src={netflix} className=" lg:h-[5rem] "/>
        <button onClick={()=>navigate(props.login?"/login":"/signup")} className="text-white cursor-pointer text-[18px] rounded bg-[#e50914]  md:p-2 font-bold " >{props.login ?"Log In":"Sign Up"}</button>
        </div> 
    </div>
  )
}

export default Header