import { Link } from "react-router-dom";
import Navbar from "../components/sharedComponents/Navbar";


const Login = () => {
    return (
       
            <div className="mt-10 mb-10">
            <Navbar></Navbar>
            <div className="hero mt-20 md:w-1/2 m-auto shadow-2xl bg-base-100">
  <div className="hero-content flex-col w-full ">
    <div className="text-center lg:text-center">
      <h1 className="text-3xl font-bold mt-10">Login your account</h1>
      
    </div>
    <div className="card  flex-shrink-0 md:w-full  max-w-sm">
      <form className="card-body">
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
          <button className="btn text-white btn-success border-0 rounded-md bg-[#403F3F] capitalize">Login</button>
        </div>
      </form>
      <div className="p-3 text-center mb-10">
      <h2>Dont’t Have An Account ? <Link to='/register'><span className="text-[#f8615d]">Register</span></Link></h2>
      </div>
    </div>
  </div>
</div>
        </div>
    
        
    );
};

export default Login;