import express from "express";
const router = express.Router();
import {
    addChapter,
    getAllChapters,
    getChapterById
} from '../controllers/chapter.controller.js';
import advancedResults from "../middlewares/advancedResults.js";
import Chapter from "../models/chapter.model.js";

router.get('/',advancedResults(Chapter, [{
    path: 'user',
    model: 'Auth',
    select: 'username'
}]), getAllChapters);

router.get('/:id', getChapterById)
router.post('/', addChapter);


export default router;
