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

export const apiCreateNewPost = (payload) => new Promise( async (resovle, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: "/api/v1/post/create-new-post",
            data: payload
        })
        resovle(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPosts = () => new Promise( async (resovle, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: "/api/v1/post/all",
        
        })
        resovle(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPostsLimit = (page, limit) => new Promise( async (resovle, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/post/limit?page=${page}&limit=${limit}`,
        
        })
        resovle(response)
    } catch (error) {
        reject(error)
    }
})


