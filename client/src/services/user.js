import axiosConfig from '../axiosConfig';


export const apiGetCurrent = () => new Promise( async (resovle, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/user/get-current',
            
        })
        resovle(response)
    } catch (error) {
        reject(error)
    }
})