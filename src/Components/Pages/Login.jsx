
import { BackgroundImage,Header } from "../../Common"
function Login() {
  return (
    <div className="relative " >
        <BackgroundImage/>
        <Header/>
  <div className="flex  items-center justify-center  w-full  absolute top-[30%]   ">
  <div className="h-[35vh] w-[20%]  py-2 bg-[rgba(0,0,0,0.5)]">
  <div className="flex flex-col  items-center justify-evenly gap-1 w-full">

    <p className="text-white text-[1.2rem] font-bold  text-center">Login</p>
  
    <div className="grid grid-rows-[1fr,1fr,1fr] gap-4 ">
        <input type="text"  placeholder="Enter Email" className="p-2 text-black text-[16px] border border-solid border-black "/>
        <input type="text"  placeholder="Enter Password" className="p-2 text-black text-[16px] border border-solid border-black"/>   
         <button  className="text-white cursor-pointer text-[18px] rounded bg-[#e50914]  md:p-2 font-bold " >Log In</button>
         </div>
         </div>
         

  </div>
    </div>
    </div>


  )
}

export default Login