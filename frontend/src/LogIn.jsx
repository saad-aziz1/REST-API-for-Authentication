import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();

  // User ka data (aap isay props ya context se bhi le sakte hain)
  const user = {
    name: "User",
    username: "@alixyz",
    profilePic: null // Agar image ho to yahan link aayega
  };

  const handleLogout = () => {
    // Logout logic yahan handle karein
    navigate('/signup'); 
  };

  return (
    <div className="min-h-screen bg-[#212121] flex flex-col items-center justify-center p-4">
      
      {/* Welcome Container */}
      <div className="bg-[#2a2a2a] w-full max-w-md p-8 rounded-3xl shadow-2xl border border-gray-800 text-center relative overflow-hidden">
        
        {/* Top Glow Decoration */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#00ffcc] opacity-5 blur-3xl rounded-full"></div>
        
        {/* Profile Section (Matching SignUp's Round Box) */}
        <div className="flex justify-center mb-6">
          <div className="w-28 h-28 rounded-full border-4 border-[#00ffcc] p-1 shadow-[0_0_25px_rgba(0,255,204,0.15)] bg-[#2d2d2d] flex items-center justify-center overflow-hidden">
            {user.profilePic ? (
              <img src={user.profilePic} alt="Profile" className="w-full h-full object-cover rounded-full" />
            ) : (
              <span className="text-4xl font-bold text-[#00ffcc]">
                {user.name.charAt(0)}
              </span>
            )}
          </div>
        </div>

        {/* Text Content */}
        <h4 className="text-gray-400 font-medium tracking-widest uppercase text-xs mb-2">
          Success! You are logged in
        </h4>
        <h1 className="text-white text-3xl font-extrabold mb-1">
          Hello, <span className="text-[#00ffcc]">{user.name}</span>
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Welcome to your personal space. Everything looks good today!
        </p>

        
        {/* Status Indicators */}
        <div className="mt-8 flex justify-center items-center gap-4 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-[#00ffcc] rounded-full animate-pulse"></span>
            System Active
          </div>
          <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
          <div>Ver 2.0.26</div>
        </div>
      </div>

    </div>
  );
};

export default LogIn;