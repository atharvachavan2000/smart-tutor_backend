import express from "express";
const router = express.Router();
import {
    addChapter,
    generateNotes,
    getAllChapters,
    getChapterById,
    generateRecommendations,
    generateQna
} from '../controllers/chapter.controller.js';
import advancedResults from "../middlewares/advancedResults.js";
import Chapter from "../models/chapter.model.js";

router.get('/',advancedResults(Chapter, [{
    path: 'user',
    model: 'Auth',
    select: 'username'
}]), getAllChapters);

router.get('/:id', getChapterById)
router.get('/notes/:id', generateNotes)
router.get('/recommend/:id', generateRecommendations)
router.get('/qna/:id', generateQna)

router.post('/', addChapter);


export default router;
