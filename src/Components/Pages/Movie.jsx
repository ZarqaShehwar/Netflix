import { NavBar } from "../../Common/index";
import { useState, useEffect,useCallback } from "react";
import { home, homeTitle } from "../../assets/png/index";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addGeneres, addAllMovies } from "../../Redux/MovieSlice";
import { fetchData, } from "../../Utils/Api";
import Slider from "../CardSlider/Slider";


export const Movie = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const movies = useSelector(state => state.Movies);
    const Geners = useSelector(state => state.Geners);
    const [isScrolled, setisScrolled] = useState(false);
    const [selectedGeneres, setSelectedGeneres] = useState("");

  const handleSelect=(e)=>{
    console.log(e.target.value)
    setSelectedGeneres(e.target.value)
    
  }
    useEffect(()=>{
      handleGeneresData()
        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        }

    })
    const handleGeneresData = async () => {
      const {data:{genres}} = await fetchData();
      dispatch(addGeneres(genres));
  
    }
    const handleScroll =useCallback(() => {
        setisScrolled(window.scrollY !== 0);
      }, []);

      useEffect(()=>{
        handleGeneres();
      },[selectedGeneres])
      const handleGeneres = async () => {
        // const {data:{results}} = await fetchDataByGenre(Geners,"movie");
    
      }
  return (
<>
      <NavBar isScrolled={true} />
<div className="mt-[6em]">
 
    <select onChange={handleSelect}>

    {
       Geners&&Geners.map((gener,index)=>(
       
            <option key={index} >{gener.name}</option>
       ))
    }
   
   </select>
      
<Slider movies={movies}/>

</div>
      
    </>
  )
}
