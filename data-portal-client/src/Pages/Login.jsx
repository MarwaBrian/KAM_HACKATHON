import { Link } from 'react-router-dom';
import GoogleLogo from '../assets/Google.webp';
import FacebookLogo from '../assets/Facebook.png';
import LinkedInLogo from '../assets/linked.png';
import TwitterLogo from '../assets/Twitter.png';

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col lg:flex-row max-w-4xl w-full">
        
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Welcome back!</h2>
          <p className="text-center mb-6">Sign in with your account.</p>

          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-2 md:p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 md:p-3 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 md:p-3 rounded-md font-bold"
            >
              SIGN IN
            </button>
          </form>

          <div className="text-center mt-4">
            <a href="#" className="text-blue-500">Forgot Password?</a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-center">
          <button className="w-full bg-blue-500 text-white p-2 md:p-3 rounded-md flex items-center justify-center mb-3">
            <img src={GoogleLogo} alt="Google" className="mr-2 h-6 w-6" />
            Google
          </button>
          <button className="w-full bg-blue-800 text-white p-2 md:p-3 rounded-md flex items-center justify-center mb-3">
            <img src={FacebookLogo} alt="Facebook" className="mr-2 h-6 w-6" />
            Facebook
          </button>
          <button className="w-full bg-blue-600 text-white p-2 md:p-3 rounded-md flex items-center justify-center mb-3">
            <img src={LinkedInLogo} alt="LinkedIn" className="mr-2 h-6 w-6" />
            LinkedIn
          </button>
          <button className="w-full bg-gray-800 text-white p-2 md:p-3 rounded-md flex items-center justify-center">
            <img src={TwitterLogo} alt="Twitter" className="mr-2 h-6 w-6" />
            Twitter
          </button>
        </div>
      </div>

      <div className="mt-12 lg:mt-16 text-center w-full">
        <p className="text-sm md:text-base">
          New to Kenya Association Of Manufacturers Data Portal?{' '}
          <Link to="/signup" className="text-blue-500">Register now.</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
