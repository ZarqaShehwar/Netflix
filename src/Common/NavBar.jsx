import { netflix } from "../assets/png";
import { NavBarLinks } from "../Dummy/Data/Data";
import { Link } from "react-router-dom";

function NavBar({ isScrolled }) {
  return (
    <>
    <div className="absolute  top-0">
      <div className={`fixed  flex justify-around items-center z-10 w-full h-10vh ${isScrolled ? "bg-black" : "bg-[transparent]"}`}>
        <div>
          <img src={netflix} className="lg:h-[5rem]" alt="Netflix Logo" />
        </div>
        <div className="">
          <ul className="flex justify-center items-center gap-6">
            {NavBarLinks.map((li, index) => (
              index === 6 ? (
                <div key={index} className="text-white w-[100px] h-[40px] cursor-pointer text-[18px] rounded bg-[#e50914] text-center pt-1 font-bold">
                  <Link to={li.link}>{li.name}</Link>
                </div>
              ) : (
                <li className={`text-white font-semibold text-[14] list-none `} key={index}>
                  <Link to={li.link}>{li.name}</Link>
                </li>
              )
            ))}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}

export default NavBar;
