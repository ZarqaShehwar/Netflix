import { useState } from "react"
import { BackgroundImage,Header } from "../../Common"
function SignUp() {
const[showPassword,setShowPassword] = useState(false);
  return (
  <>
     <div className="relative" >
        <BackgroundImage/>
        <Header/>
  <div className="flex flex-col  items-center  w-full absolute top-[30%] pl-10  gap-[1rem]">
    <div className="flex flex-col  items-center justify-center gap-[0.8rem]">
    <p className="text-white text-[2.6rem] font-bold tracking-[1.5px] leading-[4rem]">Unlimited movies, TV <br/><span  className="pl-[1.9rem]">shows & more</span></p>
    <p className="text-white text-[1.7rem] font-semibold tracking-[1px] leading-5 ">Watch anywhere.Cancel anytime</p>
    <p className="text-white text-[1.1rem] font-semibold tracking-[0.6px]">Ready to watch?Enter your Email to create & restart membership</p>
    </div>
    <div className={`grid ${showPassword ? "grid-cols-[1fr,1fr]" : "grid-cols-[2fr,1fr]"} w-[60%]`}>
        <input type="text"  placeholder="Enter Email" className={` outline-none p-3 text-black text-[16px] ${showPassword?"border border-solid border-black":""}`}/>
       {showPassword? <input type="text"  placeholder="Enter Password" className=" outline-none p-3 text-black text-[16px] border border-solid border-black "/> :     
         <button onClick={()=>setShowPassword(true)} className="text-white cursor-pointer text-[18px] rounded bg-[#e50914]  md:p-2 font-bold " >Get Started</button>}
         </div>
<button className="text-white cursor-pointer text-[18px] rounded bg-[#e50914]  md:p-2 font-bold mt-2 w-[100px]">Log In</button>


    </div>

  </div>
   
  </>
  )
}

export default SignUp