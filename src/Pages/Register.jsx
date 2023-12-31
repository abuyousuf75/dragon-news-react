
import Navbar from "../components/sharedComponents/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";




const Register = () => {
  
  const {creteUser}  = useContext(AuthContext)
 
    // hadel form
  const handelform  = (e) =>{
    e.preventDefault();
    // get user info
    const userName = e.target.name.value;
    const userImg = e.target.photo.value;
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    console.log(userName,userImg,userEmail,userPassword);
    // crete user via name and email

    creteUser(userEmail,userPassword)
    .then(result => console.log(result.user))
    .catch(err => console.error(err))
  }






    return (
        <div className="mt-10 mb-10">
        <Navbar></Navbar>
        <div className="hero mt-20 md:w-1/2 m-auto shadow-2xl bg-base-100">
<div className="hero-content flex-col w-full ">
<div className="text-center lg:text-center">
  <h1 className="text-3xl font-bold mt-10">Register your account</h1>
  
</div>
<div className="card  flex-shrink-0 md:w-full  max-w-sm">
  <form onSubmit={handelform} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text text-xl text-[#403F3F] font-semibold">Name</span>
      </label>
      <input  name="name" type="text" placeholder="Enter your Name" className="input input-bordered px-8 py-4 bg-[#F3F3F3] rounded-md border-0" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-xl text-[#403F3F] font-semibold">Photo Url</span>
      </label>
      <input  name="photo" type="text" placeholder="Photo Url" className="input input-bordered px-8 py-4 bg-[#F3F3F3] rounded-md border-0" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-xl text-[#403F3F] font-semibold">Email address</span>
      </label>
      <input  name="email" type="email" placeholder="Enter your email address" className="input input-bordered px-8 py-4 bg-[#F3F3F3] rounded-md border-0" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-xl text-[#403F3F] font-semibold">Password</span>
      </label>
      <input name="password" type="password" placeholder="Enter your password" className="input input-bordered px-8 py-4 bg-[#F3F3F3] rounded-md border-0" required />
    </div>
    <div className="form-control mt-6">
      <button className="btn text-white btn-success border-0 rounded-md bg-[#403F3F] capitalize">Register</button>
    </div>
  </form>
  
</div>
</div>
</div>
    </div>

    );
};

export default Register;