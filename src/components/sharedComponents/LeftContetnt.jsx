import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftContetnt = () => {
    const [newsCaterogy, setCaterogy] = useState([]);

    // load data via effect
    useEffect(()=>{
        fetch('./categories.json')
        .then(res => res.json())
        .then (data => setCaterogy(data))
    },[])
    return (
        <div className=" md:col-span-1 ">
            <h1 className="text-xl text-[#403F3] font-semibold">All Caterogy</h1>
           <div className="p-8 ">
            <div className="bg-[#e7e7e7] rounded px-10 py-4 mb-10 "><h2 className="text-xl text-[#403F3] font-semibold">National News</h2></div>
           {
                newsCaterogy.map(news =><Link  to={`/caterogy/${news.id}`} className="block mb-6 text-[#9F9F9F] font-semibold" key={news.id}>{news.name}</Link>)
            }
           </div>
        </div>
    );
};

export default LeftContetnt;