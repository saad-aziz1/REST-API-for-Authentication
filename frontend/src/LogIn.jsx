import { useContext,useState } from "react";
import { dataContext } from "./Context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// bad me keep me login awr forget password wali functional dalna hy(giminai)
const LogIn = () => {
  // Common styling
  const inputStyle = "mt-1 block w-full bg-[#2d2d2d] border border-gray-600 rounded-md shadow-sm p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffcc] focus:border-transparent transition-all";

  const {serverUrl} = useContext(dataContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e)=>{
      e.preventDefault()
      try {
      const data = await axios.post(serverUrl + "/api/login",{
        email,password
      },{withCredentials:true})
        console.log(data);
        
      } catch (error) {
        alert(error.response.data.message);
        
      }
    }
  

  return (
    <div className="min-h-screen bg-[#212121] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Icon */}
        <div className="mx-auto w-16 h-16 rounded-2xl border-2 border-[#00ffcc] flex items-center justify-center bg-[#2d2d2d] mb-6 shadow-[0_0_15px_rgba(0,255,204,0.1)]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#00ffcc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        </div>
        
        <h2 className="text-center text-3xl font-black text-white tracking-tight">
          Login
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Welcome back to the portal
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#2a2a2a] py-10 px-4 shadow-2xl rounded-3xl sm:px-10 border border-gray-800">
          
          <form className="space-y-6" onSubmit={handleLogin}>
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-1">
                Email Address
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter your email" 
                className={inputStyle} 
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-1">
                Password
              </label>
              <input 
                type="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter your password" 
                className={inputStyle} 
              />
            </div>

            {/* Login Button */}
            <button type="submit" className="w-full py-3.5 bg-[#00ffcc] text-[#212121] font-black rounded-xl hover:bg-[#00e6b8] transition-all transform hover:scale-[1.01] active:scale-95 shadow-[0_10px_20px_rgba(0,255,204,0.15)] cursor-pointer mt-4">
              SIGN IN
            </button>
              <h1 className="text-center">Create a new Account? <span className="text-[#7dfccd] font-semibold cursor-pointer" onClick={()=>navigate("/signup")}>SignUp</span></h1>
          </form>

        </div>
      </div>
    </div>
  );
};

export default LogIn;