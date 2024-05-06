import { useState } from 'react'
import { IoPlayCircleSharp } from 'react-icons/io5'
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri'
import { BsCheck } from 'react-icons/bs'





function Card({ image, title, generes }) {
  const [ishovered, setIshovered] = useState(false);

  return (
    <div className="cursor-pointer  relative min-w-[10rem] " onMouseEnter={() => setIshovered(true)} onMouseLeave={() => setIshovered(false)}>
      <img className="w-full h-full object-cover z-[10]" src={`https://image.tmdb.org/t/p/w500${image}`} alt='Movie'></img>
      {
        ishovered ? (
          <div className='w-full max-h-fit z-[100] absolute top-[-8vh] rounded-[0.2rem] bg-[#181818]'>
            <img className=" rounded-[0.2rem] w-full  z-[4] " src={`https://image.tmdb.org/t/p/w500${image}`} />
            <div className='flex flex-col gap-[0.3rem] px-1'>

              <h3 className='text-[14] font-medium text-white leading-[1.2rem] ml-[0.2rem] '>{title}</h3>

              <div className='flex justify-between'>
                <div className='flex gap-[0.2rem] '>
                  <IoPlayCircleSharp title='play' color='white' size="1.4rem" />
                  <RiThumbUpFill title='play' color='white' size="1.4rem" />
                  <RiThumbDownFill title='play' color='white' size="1.4rem" />
                </div>
                <div>
                  <BsCheck title='play' color='white' size="1.4rem" />
                </div>
              </div>
              <div className='flex justify-center '>

              </div>
            </div>

          </div>
        ) : <div></div>
      }

    </div>
  )
}

export default Card