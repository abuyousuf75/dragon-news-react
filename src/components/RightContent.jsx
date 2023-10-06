import { FaGoogle,FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import './right.css'
import qz1 from '../assets/qZone1.png'
import qz2 from '../assets/qZone2.png'
import qz3 from '../assets/qZone3.png'
import bg1 from '../assets/bg1.png'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const RightContent = () => {
    const {googleLogin, githubLogin} = useContext(AuthContext);
    console.log(googleLogin)
   // google login
    const handelGoogleLogin = () =>{
    
        googleLogin()
        .then(result => {
            console.log(result.user)
        })
        .catch(err =>{
            console.error(err)
        })
    }
   // github login
    const handelGithubLogin = () =>{
    
        githubLogin()
        .then(result => {
            console.log(result.user)
        })
        .catch(err =>{
            console.error(err)
        })
    }


    return (
        <div className=" md:grid md:col-span-1 absolute right-0 ">
           <div className="right-heading ">
           <h1 className="text-xl font-semibold text-[#403F3F]">Login With</h1>
           </div>
           <div className="mt-2 mb-2">
                <button onClick={handelGoogleLogin} className="btn md:w-full btn-outline text-[#3666cc]"> <FaGoogle></FaGoogle>Login with Google</button>
           </div>
           <div>
                <button onClick={handelGithubLogin} className="btn md:w-full btn-outline"> <FaGithub></FaGithub>Login with Github</button>
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
        <div className="mt-2 mb-4 bg-[#F3F3F3] p-6">
            <h2 className="text-xl text-[#403F3F] font-semibold mb-6">Q Zone</h2>
           <div>
           <img src={qz1} alt="qz1" />
            <img src={qz2} alt="qz2" />
            <img src={qz3} alt="qz3" />
           </div>
           <div className="mt-10">
                <div className="bg-img relative" style={{backgroundImage: `url(${bg1})`}}>
                    <div className="bg-overlay absolute">
                        <h2 className="text-3xl text-white font-bold text-center mt-16 mb-5">Create an Amazing Newspaper</h2>
                        <p className=" text-white font-medium pr-4 pl-4 text-center mb-12">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                       <div className="flex justify-center items-center">
                       <button className="bg-[#D72050] text-white font-bold px-6 py-3 text-center">Learn More</button>
                       </div>
                    </div>
                </div>
           </div>
        </div>

        </div>
    );
};

export default RightContent;