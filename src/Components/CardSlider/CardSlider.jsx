import {  AiOutlineLeft } from "react-icons/ai"
import Card from "../../Common/Card/Card"
import React ,{ useRef, useState,memo } from "react"


const CardSlider=memo(function CardSlider({ movies, title })
{
    const [isControls,setIsControls]=useState(false);
    const [sliderPosition,setSliderPosition] = useState(0)
  const listref=  useRef()

    const handleDirection=(direction)=>{
        const listElement = listref.current;
        if (listElement) {
          const distance = listElement.getBoundingClientRect().x ;
          console.log(distance);
          if(direction ==="left" && sliderPosition>0)
      {
        listref.current.style.transform = `translateX(${230+distance}px)`
        setSliderPosition(sliderPosition-1)
      }
      if(direction ==="right" && sliderPosition<4)
      {
        listref.current.style.transform = `translateX(${-230 + distance}px)`
        setSliderPosition(sliderPosition+1)
      }
        }
  
    }
    return (
        <>
            <div className="pl-1 mt-2 mb-4 ">
                <div className="font-bold text-xl py-2 ml-[2rem] text-white">
                    <h4>{title}</h4>
                </div>
                <div onMouseEnter={()=>setIsControls(true)} onMouseLeave={()=>setIsControls(false)} className="flex relative  w-full " >
                <div className={`z-[99] absolute top-12 left-0 cursor-pointer  ${isControls ? '' : 'hidden'}`}   >
                        <AiOutlineLeft color="white" size={22} onClick={()=>handleDirection("left")}/>
                    </div>
                <div  ref={listref} className="flex gap-[1rem] translate-x-[0px] 3s ease-in-out ml-[2rem]" >
                    {
                        movies ?
                            movies.map(movie => (
                                <Card key={movie.id} image={movie.image} title={movie.name} genres={movie.genres} />
                            )) : <div></div>
                    }
                </div>
                <div className={`z-[99] absolute top-12 right-0 cursor-pointer ${isControls ? '' : 'hidden'}`}   >
                        <AiOutlineLeft color="white" size={22} onClick={()=>handleDirection("right")}/>
                    </div>
                </div>
            </div>
        </>
    )
}, (prevProps, nextProps) => {
    // Here you define a comparison function for props.
    // Return true if the component should not be re-rendered, false otherwise.
    // You can customize this according to your component's requirements.
    return prevProps.movies === nextProps.movies && prevProps.title === nextProps.title;
});

export default CardSlider