import React, { useState } from 'react';

const SignUp = () => {
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });

  // Image Handling
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit with Image:", { ...formData, profilePic: preview });
    alert("Sign Up Successful!");
  };

  const inputStyle = "mt-1 block w-full bg-[#2d2d2d] border border-gray-600 rounded-md shadow-sm p-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffcc] focus:border-transparent transition-all";

  return (
    <div className="min-h-screen bg-[#212121] flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-[#00ffcc] tracking-tight">
          Create Account
        </h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#2a2a2a] py-8 px-4 shadow-2xl rounded-2xl sm:px-10 border border-gray-800">
          <form className="space-y-4" onSubmit={handleSubmit}>
            
            {/* Round Picture Upload Section */}
            <div className="flex flex-col items-center justify-center pb-4">
              <div className="relative w-24 h-24">
                <div className="w-full h-full rounded-full border-2  border-[#7dfccd] overflow-hidden flex items-center justify-center bg-[#2d2d2d]">
                  {preview ? (
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-400 text-xs text-center px-1">Upload Photo</span>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  title="Upload Profile Picture"
                />
                {/* Plus Icon Badge */}
                <div className="absolute bottom-0 right-0 bg-[#00ffcc] w-7 h-7 rounded-full flex items-center justify-center border-2 border-[#2a2a2a]">
                  <span className="text-[#212121] font-bold text-lg">+</span>
                </div>
              </div>
            </div>

            {/* First & Last Name */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-300">First Name</label>
                <input name="firstName" type="text" placeholder="first Name" required className={inputStyle} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Last Name</label>
                <input name="lastName" type="text" placeholder="last Name" required className={inputStyle} onChange={handleChange} />
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Username</label>
              <input name="username" type="text" placeholder="User Name" required className={inputStyle} onChange={handleChange} />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input name="email" type="email" placeholder="example@email.com" required className={inputStyle} onChange={handleChange} />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input name="password" type="password" placeholder="Enter Password" required className={inputStyle} onChange={handleChange} />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 rounded-md shadow-lg text-sm font-bold text-[#212121] bg-[#00ffcc] hover:bg-[#00e6b8] transition-all transform hover:scale-[1.01]"
              >
                COMPLETE REGISTRATION
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;