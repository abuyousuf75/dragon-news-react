import { FaGoogle,FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const RightContent = () => {
    return (
        <div className=" md:grid md:col-span-1 ">
           <div className="right-heading ">
           <h1 className="text-xl font-semibold text-[#403F3F]">Login With</h1>
           </div>
           <div className="mt-2 mb-2">
                <button className="btn md:w-full btn-outline text-[#3666cc]"> <FaGoogle></FaGoogle>Login with Google</button>
           </div>
           <div>
                <button className="btn md:w-full btn-outline"> <FaGithub></FaGithub>Login with Github</button>
           </div>
           <div className="right-heading mt-4 mb-4">
           <h1 className="text-xl font-bold ">Find Us On</h1>
           </div>
            <div className="mb-10">
            <div className="facebook border rounded-t-lg p-4">
                <div className="flex  items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F3F3F3] flex justify-center items-center">
                    <a href=""> <FaFacebook className="text-2xl text-[#3B599C] text-center  "></FaFacebook></a>
                   
                    </div>
                    <div className="">
                    <p className="font-medium text-center ">Facebook</p>
                    </div>
                </div>
            </div>
            <div className="twitter border p-4">
            <div className="flex  items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F3F3F3] flex justify-center items-center">
                    <a href=""> <FaTwitter className="text-2xl text-[#3B599C] text-center  "></FaTwitter></a>
                   
                    </div>
                    <div className="">
                    <p className="font-medium text-center ">Twitter</p>
                    </div>
                </div>
            </div>
            <div className="instragram border rounded-b-lg p-4">
            <div className="flex  items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F3F3F3] flex justify-center items-center">
                    <a href=""> <FaInstagram className="text-2xl text-[#3B599C] text-center "></FaInstagram></a>
                   
                    </div>
                    <div className="">
                    <p className="font-medium text-center ">Instargram</p>
                    </div>
                </div>
               </div>
            </div>
          {/* q zone start here */}
        <div className="mt-2 mb-4 bg-[#F3F3F3]">
            <h2 className="text-xl ">Q zone</h2>
        </div>

        </div>
    );
};

export default RightContent;