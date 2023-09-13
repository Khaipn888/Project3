import db from '../models'

export const getPostsService = () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Ok' : 'Getting posts is faild',
            response
        })
    } catch (error) {
        reject(error)
    }
})