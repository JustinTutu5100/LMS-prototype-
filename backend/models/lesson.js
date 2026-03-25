// backend/models/Lesson.js
import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  title: { type: String, required: true },
  contentType: { type: String, enum: ['text','video'], required: true },
  content: { type: String, required: true },
});

export default mongoose.model('Lesson', lessonSchema);