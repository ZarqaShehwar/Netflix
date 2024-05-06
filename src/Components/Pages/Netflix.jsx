import { NavBar } from "../../Common/index";
import { useState, useEffect,useCallback } from "react";
import { home, homeTitle } from "../../assets/png/index";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addGeneres, addAllMovies } from "../../Redux/MovieSlice";
import { fetchData, fetchMovieData } from "../../Utils/Api";
import Slider from "../CardSlider/Slider";



function Netflix() {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector(state => state.Movies);
  const Geners = useSelector(state => state.Geners);
  console.log("Geners",Geners)
  const [isScrolled, setisScrolled] = useState(false);
  useEffect(() => {
   
    if (!movies.length) {
      handleMovieData()
    }
    handleGeneresData();



    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  const handleScroll =useCallback(() => {
    setisScrolled(window.scrollY !== 0);
  }, []);
  const handlePlayScreen = () => {
    navigator("/play");
  }
  const handleGeneresData = async () => {
    const {data:{genres}} = await fetchData();
    dispatch(addGeneres(genres));

  }
  const handleMovieData = async () => {
    
    const response = await fetchMovieData(Geners);
    dispatch(addAllMovies(response));

  }
  return (
    <>
      <NavBar isScrolled={isScrolled} />

      <div className="hero ">
        <div className="relative">
          <img className="background_img " src={home} alt="" />
          <div className="absolute bottom-[5rem]  ml-10 ">
            <div className="">
              <img src={homeTitle} alt="" />
            </div>
            <div className="flex justify-center items-center gap-4 mt-4">
              <div className="font-semibold text-[16px] text-black   bg-white w-[100px] h-[30px]  text-center cursor-pointer border-none  rounded-sm outline-none" onClick={handlePlayScreen} >
                Play</div>
              <div className="font-semibold text-[16px] text-black bg-white  w-[100px] h-[30px] text-center  cursor-pointer border-none  rounded-sm outline-none" onClick={handlePlayScreen} >More info</div>
            </div>
          </div>
        </div>

        <Slider movies={movies}/>
      </div>
    </>
  );
}

export default Netflix;
