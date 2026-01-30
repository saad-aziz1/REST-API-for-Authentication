import { useContext, useRef, useState } from "react";
import { dataContext } from "./Context/UserContext";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  
  // Input fields Classes
  const inputStyle = "mt-1 block w-full bg-[#2d2d2d] border border-gray-600 rounded-md shadow-sm p-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffcc] focus:border-transparent transition-all";

  let {serverUrl} = useContext(dataContext)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const imageUpload = useRef(null)


   const handleSignUp = async (e) => {
    e.preventDefault()

    const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    alert("Please Enter Correct Name");
    return;
  }

    try {
      //image ko post krny liy add kiya ja raha baqi sary form ky sath
      const formData = new FormData()
      formData.append("firstName",firstName)
      formData.append("lastName",lastName)
      formData.append("userName",userName)
      formData.append("email",email)
      formData.append("password",password)
      //Profile image
      if(backendimage){
        formData.append("profileImage",backendimage)
      }

      const response = await axios.post(serverUrl + "/api/signup",formData,{withCredentials:true,headers:{"Content-Type":"multipart/form-data"}
      })
      
      console.log("Success Response:",response.data);
      alert("SignUP Successfully")
      
       
    } catch (error) {
      alert(error.response.data.message);
      
    }
  }
  
  const [frontendimage, setFrontendImage] = useState();
  const [backendimage, setBackendImage] = useState(null);

  const handleImage = (e)=>{
    const file = e.target.files[0]
    setBackendImage(file)
    const image = URL.createObjectURL(file)
    setFrontendImage(image)
    };
  

  return (
    <div className="min-h-screen bg-[#212121] flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-[#00ffcc] tracking-tight">
          Create Account
        </h2>
      </div>

      <form className="mt-6 sm:mx-auto sm:w-full sm:max-w-md" onSubmit={handleSignUp}>
        <input type="file" hidden ref={imageUpload} onChange={handleImage} />
        <div className="bg-[#2a2a2a] py-8 px-4 shadow-2xl rounded-2xl sm:px-10 border border-gray-800">

          <div className="space-y-4">

            {/* Prfile Image Box */}
            <div className="flex flex-col items-center justify-center pb-4">
              <div className="relative w-24 h-24">
                <div className="w-full h-full rounded-full border-2 border-gray-500 overflow-hidden flex items-center justify-center bg-[#2d2d2d] cursor-pointer hover:border-[#00ffcc] hover:border-4 transition-colors"onClick={()=>{imageUpload.current.click()}}>
                  {
                    frontendimage ?(
                      <img src={frontendimage} alt="Profile Image" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-500 text-xs text-center px-1">Add Photo</span>
                    )
                  }
                  
                </div>
                {/* Plus  */}
                <div className="absolute top-0 bg-[#00ffcc] w-7 h-7 rounded-full flex items-center justify-center border-2 border-[#2a2a2a]">
                  <span className="text-[#212121] font-bold text-lg">+</span>
                </div>
              </div>
            </div>

            {/* First awr Last Name  */}
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

            {/* username */}
            <div>
              <label className="block text-sm font-medium text-gray-400">Username</label>
              <input type="text"
                placeholder="User Name"
                className={inputStyle} 
                value={userName}
                  onChange={(e)=>setUserName(e.target.value)}
                />
            </div>

            {/* email */}
            <div>
              <label className="block text-sm font-medium text-gray-400">Email Address</label>
              <input type="email"
                placeholder="example@example.com"
                className={inputStyle} 
                value={email}
                  onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            {/* password */}
            <div>
              <label className="block text-sm font-medium text-gray-400">Password</label>
              <input type="password"
                placeholder="password"
                className={inputStyle}
                value={password}
                  onChange={(e)=>setPassword(e.target.value)} />
            </div>

            {/* botton */}
            <div className="pt-4">
              <button className="w-full py-3 rounded-md shadow-lg text-sm font-bold text-[#212121] bg-[#00ffcc] hover:bg-[#00e6b8] transition-all active:scale-95">
                SIGN UP
              </button>
            </div>

              <h1 className="text-center">Already have an Account? <span className="text-[#7dfccd] font-semibold cursor-pointer" onClick={()=>navigate("/login")}>Login</span></h1>

          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;