import logo from '../../assets/logo.png';
import moment from 'moment';


const Header = () => {
    return (
        <div className='p-4'>
          <div className="text-center">
            <img className='m-auto' src={logo} alt="logo" />
            <p className='mt-2 mb-2 text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-[#403F3F]'>{moment().format("dddd, MMMM D, YYYY")}</p>
          </div>
        </div>
    );
};

export default Header;