import { useParams } from "react-router-dom";
import RightContent from "../../components/RightContent";
import Header from "../../components/sharedComponents/Header";
import Navbar from "../../components/sharedComponents/Navbar";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";



const DetailsNews = () => {
    const {homeNews} = useContext(AuthContext);
    const [detailsNews,SetDetailsNews] = useState([]);
    const {id} = useParams();

 useEffect(()=>{
    const newsItems = homeNews.find((item) => item._id === id )
    SetDetailsNews(newsItems)
 },[homeNews,id])


console.log(detailsNews.details)
    return (
        <div>
           <Header></Header>
           <Navbar></Navbar>
           <div className="grid md:grid-cols-4 relative">
            <div className="col-span-3">
            <div className="p-4">
            <div className="card card-compact  p-4 bg-base-100 border-b">  
           <figure><img src={detailsNews?.image_url} alt="Shoes" /></figure>
           <h2 className="text-[#403F3F] text-xl font-bold mt-4">{detailsNews.title}</h2>
        <div className="card-body">
            {
               <p>{detailsNews.details}</p>
            }
           
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </div>
            </div>
            <div className="col-span-1">
                <RightContent></RightContent>
            </div>
           </div>
        </div>
    );
};

export default DetailsNews;