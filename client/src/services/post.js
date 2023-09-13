import axiosConfig from '../axiosConfig';
import axios from 'axios';


export const apiUploadImages = (images) => new Promise( async (resovle, reject) => {
    try {
        const response = await axios({
            method: 'post',
            url: "https://api.cloudinary.com/v1_1/djcot4hrp/image/upload",
            data: images
        })
        resovle(response)
    } catch (error) {
        reject(error)
    }
})

