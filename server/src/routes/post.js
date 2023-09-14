import express from 'express';
import * as postController from '../controller/post';
import verifyToken from '../middlewares/verifyToken'
const router = express.Router();

router.get('/all', postController.getPosts);
router.use(verifyToken)
router.post('/create-new-post',postController.createNewPost)
export default router;