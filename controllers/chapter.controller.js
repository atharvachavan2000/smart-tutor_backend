import Chapter from "../models/chapter.model.js";

export const addChapter = async (req, res) => {
    let chapter;
    try {
        chapter = new Chapter({
            ...req.body
        });
        await chapter.save();
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Something went wrong!"
        })
    }
    res.status(200).json({
        success: true,
        chapter: chapter
    })
}


export const getAllChapters = async (req, res) => {
    res.status(200).json(res.advancedResults);
}

export const getChapterById = async (req, res) => {
    let chapter;
    try {
        chapter = await Chapter.findOne({ _id: req.params.id }).populate({ path: 'user', model: 'Auth' });

    } catch {
        res.status(500).json({
            success: false,
            error: "Something went wrong"
        })
    }

    res.status(200).json({
        success: true,
        chapter: chapter
    })
}