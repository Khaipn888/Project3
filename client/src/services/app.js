import axiosDefault from 'axios';


export const apiGetProvinceOnline = () => new Promise( async (resolve, reject) => {
    try {
        const response = await axiosDefault({
            method: 'get',
            url: 'https://vapi.vnappmob.com/api/province/'
        })
       
        resolve(response);

    } catch (error) {
        reject(error)
    }
})

export const apiGetDistrictOnline = (province_id) => new Promise( async (resolve, reject) => {
    try {
        const response = await axiosDefault({
            method: 'get',
            url: `https://vapi.vnappmob.com/api/province/district/${province_id}`
        })
       
        resolve(response);

    } catch (error) {
        reject(error)
    }
})

export const apiGetWardOnline = (district_id) => new Promise( async (resolve, reject) => {
    try {
        const response = await axiosDefault({
            method: 'get',
            url: `https://vapi.vnappmob.com/api/province/ward/${district_id}`
        })
       
        resolve(response);

    } catch (error) {
        reject(error)
    }
})