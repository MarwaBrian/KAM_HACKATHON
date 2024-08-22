

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>
        
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Last name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-600">Minimum password length is 6 characters.</p>
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              SIGN UP
            </button>
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">
              I agree with <a href="#" className="text-blue-500">Terms and Conditions</a> and I have read the <a href="#" className="text-blue-500">Privacy Policy</a>.
            </span>
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 text-white p-3 rounded-md w-full mr-2 flex items-center justify-center">
              <img src="google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
              Google
            </button>
            <button className="bg-blue-800 text-white p-3 rounded-md w-full ml-2 flex items-center justify-center">
              <img src="facebook-icon.svg" alt="Facebook" className="w-5 h-5 mr-2" />
              Facebook
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button className="bg-blue-600 text-white p-3 rounded-md w-full mr-2 flex items-center justify-center">
              <img src="linkedin-icon.svg" alt="LinkedIn" className="w-5 h-5 mr-2" />
              LinkedIn
            </button>
            <button className="bg-gray-800 text-white p-3 rounded-md w-full ml-2 flex items-center justify-center">
              <img src="knoema-icon.svg" alt="Knoema" className="w-5 h-5 mr-2" />
              Knoema
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;


