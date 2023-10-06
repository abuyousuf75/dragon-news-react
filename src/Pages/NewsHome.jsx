import { Link } from "react-router-dom";


const NewsHome = ({newsData}) => {
    const {_id} = newsData;
    return (
        <div className="p-4">
            <div className="card card-compact  p-4 bg-base-100 border-b">
                <h2 className="text-[#403F3F] text-xl font-bold mb-4">{newsData.title}</h2>
           <figure><img src={newsData?.image_url} alt="Shoes" /></figure>
        <div className="card-body">
            {
                newsData.details && <p>{newsData.details.slice(0,200)}....
                <h2 className="pt-4 text-[#fe8749] font-bold">  <Link to ={`/news/${_id}`}>Read More</Link></h2>
                </p>
            }
           
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </div>
    );
};

export default NewsHome;