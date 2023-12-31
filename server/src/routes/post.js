import express from 'express';
import * as postController from '../controller/post';
import verifyToken from '../middlewares/verifyToken';
const router = express.Router();

router.get('/all', postController.getPosts);
router.get('/limit', postController.getPostsLimit);
router.post('/create-new-post',postController.createNewPost);
export default router;