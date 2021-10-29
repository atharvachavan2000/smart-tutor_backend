import mongoose from 'mongoose';
import mongooseautopopulate from 'mongoose-autopopulate'

const Schema = mongoose.Schema;

const Chapter = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'Auth',
    },
    text: {
        type: String,
    },
    notes: {
        type: String
    },
    recommendations:
        [{ type: String }]

});


Chapter.plugin(mongooseautopopulate);

const chapter = mongoose.model("Chapter", Chapter);
export default chapter
