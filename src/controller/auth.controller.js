import {
    accessTokenSing,
    comparePass,
    hashPassword,
    otpGenerate,
    refreshTokenSing,
    sendMail,
} from "../utils/index.js"
import {
    googleValidation,
    loginValidation,
    otpValidation,
    userValidation,
} from "../validator/index.js"
import {
    createOtp,
    createUserService,
    deleteOtpService,
    getOtpService,
    getUserByEmailService,
    updateUserService,
} from "../service/index.js"
import { logger } from "../utils/logger.js"
import { cartItemRouter } from "../router/cart_item.routes.js"

export const googlePassportRegisterController = async (req, res, next) => {
    try {
        const { error } = googleValidation(req.user)
        if (error) {
            return res.status(400).send("Malumotlarni togri kiriting")
        }
        const { firstname, lastname, email, googleId } = req.user
        const currentUser = await getUserByEmailService(email)
        if (currentUser.length !== 0) {
            return res.status(409).send("Bu eamil oldin ham royhatan otilgan")
        }
        const user = await createUserService({
            firstname,
            lastname,
            email,
            google_id: googleId,
            is_active: true,
        })
        const payload = {
            id: user[0].id,
            sub: email,
            role: user[0].role,
        }
        const accessToken = await accessTokenSing(payload)
        const refreshToken = await refreshTokenSing(payload)

        return res.status(200).send({ accessToken, refreshToken })
    } catch (error) {
        console.log(error)
        logger.error(error)
        next(error)
    }
}

export const registerController = async (req, res, next) => {
    try {
        const { error } = userValidation(req.body)
        if (error) {
            return res.status(400).send("Malumotlarni togri kiriting")
        }
        const { email, password } = req.body
        const currentUser = await getUserByEmailService(email)
        if (currentUser.length !== 0) {
            return res.status(409).send("Bu eamil oldin ham royhatan otilgan")
        }
        const otp = otpGenerate()
        sendMail(
            email,
            "OTP",
            `
            <h1>
                This Your otp: 
                <h2 style="background: yellow;color: rgb(0, 0, 0);width: 7%;">${otp}</h2>
            </h1>
            `,
        )
        const hashPass = await hashPassword(password)
        const user = await createUserService({
            ...req.body,
            password: hashPass,
        })
        const otp_db = await createOtp({
            user_id: user[0].id,
            email: user[0].email,
            otp_code: otp,
        })
        return res.status(201).send("Created")
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const loginController = async (req, res, next) => {
    try {
        const { error } = loginValidation(req.body)
        if (error) {
            return res.status(400).send("Malumotlarni Togri Kiriting")
        }
        const { email, password } = req.body
        const currentUser = await getUserByEmailService(email)
        if (currentUser.length === 0) {
            return res.status(404).send("User Topilmadi")
        }
        if (currentUser[0].is_active === false) {
            return res.status(403).send("User is No Active")
        }
        const isEqual = await comparePass(password, currentUser[0].password)

        if (!isEqual) {
            return res.status(403).send("Eamil Yoki Parol hato")
        }
        const payload = {
            id: currentUser[0].id,
            sub: email,
            role: currentUser[0].role,
        }

        const accessToken = await accessTokenSing(payload)
        const refreshToken = await refreshTokenSing(payload)

        return res.status(200).send({ accessToken, refreshToken })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const verifyTokenController = async (req, res, next) => {
    try {
        const { error } = otpValidation(req.body)
        if (error) {
            return res.status(400).send("Malumotlarni gori tartibdda kiriting")
        }
        const { otp, email } = req.body
        const currentUser = await getUserByEmailService(email)
        if (currentUser.length === 0) {
            return res.status(404).send("Malumot topilmadi")
        }
        const currentOtp = await getOtpService(email)
        if (new Date() > currentOtp[0].expires_at) {
            await deleteOtpService(currentOtp[0].id)
            return res.status(403).send("Sixni Otp Codingizni Vohti tuganag")
        }
        if (currentOtp[0].otp_code !== otp) {
            return res.status(401).send("Otp code Xato")
        }
        await deleteOtpService(currentOtp[0].id)
        await updateUserService(currentUser[0].id, { is_active: true })
        return res.status(200).send("User Is Active")
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
