import authRouter from './auth'
import postRouter from './post'
import userRouter from './user'


const initRouter = (app) => {
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/post', postRouter)
    app.use('/api/v1/user', userRouter)



    return app.use('/', (req, res) => {
        res.send('server on ...')
    })
}
export default initRouter