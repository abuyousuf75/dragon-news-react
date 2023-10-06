import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import NewsHome from "../Pages/NewsHome";


const HomeNews = () => {
  const {homeNews} = useContext(AuthContext);
    const news = homeNews.slice(0,10)
    return (
        <div className=" md:col-span-2 border ">
           {
                news.map(newsData => <NewsHome key={newsData._id} newsData={newsData}></NewsHome>)
           }
        </div>
       
    );
};

export default HomeNews;