import generateToken from "../config/token.js"
import User from "../models/user.model.js"
import bcrypt, { truncates } from 'bcryptjs'

export const signUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password, userName } = req.body
        const exsitUser = await User.findOne({ email })
        if (!firstName || !lastName || !email || !password || !userName) {
            return res.status(400).json({ message: "Please send all details" })
        }
        if (exsitUser) {
            return res.status(400).json({ message: "User already exist" })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
            userName
        })

        const token = generateToken(newUser._id)

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(201).json({
            message: "User register successfully",
            user: {
                firstName,
                lastName,
                email,
                userName
            }
        })

        } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}

export const logIn = async (req,res) => {
    try {
    const {email, password} = req.body
    const existUser = await User.findOne({email})
    if(!existUser){
        return res.status(400).json({message:"Email does not exist or invalid email"})
    }
    
    const matchPass = await bcrypt.compare(password,existUser.password)
    if(!matchPass){
        return res.status(400).json({message:"Incorrect Password"})
    }

    const token = generateToken(existUser._id)

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            message: "User LogIn successfully",
            user: {
                firstName: existUser.firstName,
                lastName: existUser.lastName,
                email: existUser.email,
                userName: existUser.userName
            }
        })


    } catch (error) {
      console.log(error)
      return res.status(500).json({
      message:"Internal Server Error",
      error:error.message
      })
        
    }
} 

export const logOut = async (req,res) => {
   try {
    res.clearCookie('token');
   return res.status(200).json({message:"Logout successfully"})
   } catch (error) {
    console.log(error)
      return res.status(500).json({
      message:"Internal Server Error",
      error:error.message
      })
   }
}