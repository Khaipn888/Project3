import db from '../models/index'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
require('dotenv').config()


const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

export const registerService = ({email, password}) => new Promise( async (resolve, reject) => {
    try {
        const response = await db.User.findOrCreate({
            where: {email},
            defaults: {
                email,
                password: hashPassword(password),
                id: v4()
            }
        })
        const token = response[1] && jwt.sign({id: response[0].id, email: response[0].email}, process.env.KEY, {expiresIn: '2d'})
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Register is successfully!' : 'email existed!',
            token: token || null
        })

    } catch (error) {
        reject(error)
    }
})


export const loginService = ({email, password}) => new Promise( async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: {email},
            raw: true
        })
        const checkPassword = response && bcrypt.compareSync(password, response.password)
        const token = checkPassword && jwt.sign({id: response.id, email: response.email}, process.env.KEY, {expiresIn: '2d'})
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Login is successfully!' : response ? 'Password incorrect!' : 'Email not found!',
            token: token || null
        })

    } catch (error) {
        reject(error)
    }
})