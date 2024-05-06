import CardSlider from "./CardSlider";
import{ memo } from "react"


const Slider = memo(function Slider({movies}) 
{
 const getMovies= (from,to)=>{
  if(movies){
    return movies.slice(from,to);
  }
 }
console.log(movies)


  return (
    <>
    <div className="bg-black ">
   <CardSlider title={"Trending Now"} movies={getMovies(0,10)}/>
   <CardSlider title={"New Releases"} movies={getMovies(10,20)}/>
   <CardSlider title={"Blockbuster Movies"} movies={getMovies(20,30)}/>
   <CardSlider title={"Popular on Netflix"} movies={getMovies(30,40)}/>
   <CardSlider title={"Action Movies"} movies={getMovies(40,50)}/>
   <CardSlider title={"Romentic Movies"} movies={getMovies(50,60)}/>
   </div>
   </>
  )


});

export default Slider