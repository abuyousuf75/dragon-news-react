import Header from "../components/sharedComponents/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../components/sharedComponents/Navbar";
import LeftContetnt from "../components/sharedComponents/LeftContetnt";
import HomeNews from "../components/HomeNews";
import RightContent from "../components/RightContent";

const Home = () => {
    return (
      <div>
         <Header></Header>
       <div className="heading-news flex bg-[#F3F3F3] p-4 gap-4 ">
            <div >
            <button className=" py-3 px-6 bg-[#D72050] capitalize text-white ">Latest</button>
            </div>
            <div className="text-center flex justify-center items-center">
                <p  className="font-semibold text-[#403F3F] cursor-pointer"><Marquee speed={80} pauseOnHover={true}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee></p>
            </div>
       </div>
       <div className="mt-6">
       <Navbar></Navbar>
       </div>
       <div className="grid gap-6 md:grid-cols-4 mt-10">
            <LeftContetnt></LeftContetnt>
            <HomeNews></HomeNews>
            <RightContent></RightContent>
       </div>
      </div>
    );
};

export default Home;