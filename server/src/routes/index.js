import authRouter from './auth'

const initRouter = (app) => {
    app.use('/api/v1/auth', authRouter)
    return app.use('/', (req, res) => {
        res.send('server on ...')
    })
}
export default initRouter