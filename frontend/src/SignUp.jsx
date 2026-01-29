import { useContext, useState } from "react";
import { dataContext } from "./Context/UserContext";
import axios from 'axios'


const SignUp = () => {
  
  // Input fields Classes
  const inputStyle = "mt-1 block w-full bg-[#2d2d2d] border border-gray-600 rounded-md shadow-sm p-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffcc] focus:border-transparent transition-all";

  let {serverUrl} = useContext(dataContext)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async (e) => {
    e.preventDefault()

    const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    alert("Please Enter Correct Name");
    return;
  }

    try {
      const data = await axios.post(serverUrl + "/api/signup",{
        firstName,lastName,userName,email,password
      },{withCredentials:true})
      console.log(data.data);
       
    } catch (error) {
      alert(error.response.data.message);
      
    }
  }

  return (
    <div className="min-h-screen bg-[#212121] flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-[#00ffcc] tracking-tight">
          Create Account
        </h2>
      </div>

      <form className="mt-6 sm:mx-auto sm:w-full sm:max-w-md" onSubmit={handleSignUp}>
        <div className="bg-[#2a2a2a] py-8 px-4 shadow-2xl rounded-2xl sm:px-10 border border-gray-800">

          <div className="space-y-4">

            {/* Round Picture Box */}
            <div className="flex flex-col items-center justify-center pb-4">
              <div className="relative w-24 h-24">
                <div className="w-full h-full rounded-full border-2 border-dashed border-gray-500 overflow-hidden flex items-center justify-center bg-[#2d2d2d] cursor-pointer hover:border-[#00ffcc] transition-colors">
                  <span className="text-gray-500 text-xs text-center px-1">Add Photo</span>
                </div>
                {/* Neon Plus Badge */}
                <div className="absolute bottom-0 right-0 bg-[#00ffcc] w-7 h-7 rounded-full flex items-center justify-center border-2 border-[#2a2a2a]">
                  <span className="text-[#212121] font-bold text-lg">+</span>
                </div>
              </div>
            </div>

            {/* First & Last Name Row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-400">First Name</label>
                <input type="text"
                  placeholder="First Name"
                  className={inputStyle}
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400">Last Name</label>
                <input type="text"
                  placeholder="Last Name"
                  className={inputStyle}
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)} />
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-400">Username</label>
              <input type="text"
                placeholder="User Name"
                className={inputStyle} 
                value={userName}
                  onChange={(e)=>setUserName(e.target.value)}
                />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-400">Email Address</label>
              <input type="email"
                placeholder="example@example.com"
                className={inputStyle} 
                value={email}
                  onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-400">Password</label>
              <input type="password"
                placeholder="password"
                className={inputStyle}
                value={password}
                  onChange={(e)=>setPassword(e.target.value)} />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button className="w-full py-3 rounded-md shadow-lg text-sm font-bold text-[#212121] bg-[#00ffcc] hover:bg-[#00e6b8] transition-all active:scale-95">
                SIGN UP
              </button>
            </div>



          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;