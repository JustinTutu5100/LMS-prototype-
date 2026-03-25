import express from 'express';
import { addLesson, getLessons, markCompleted } from '../controllers/lessonController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', auth(['admin']), addLesson);
router.get('/:courseId', auth(), getLessons);
router.post('/complete', auth(), markCompleted);

export default router;