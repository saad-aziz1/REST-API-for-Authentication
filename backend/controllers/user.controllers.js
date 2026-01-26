import generateToken from "../config/token.js"
import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'

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