import axiosConfig from '../axiosConfig';


export const apiRegister = (payload) => new Promise( async (resovle, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/auth/register',
            data: payload
        })
        
        resovle(response)
    } catch (error) {
        reject(error)
    }
})

export const apiLogin = (payload) => new Promise( async (resovle, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/auth/login',
            data: payload
        })
        resovle(response)
    } catch (error) {
        reject(error)
    }
})