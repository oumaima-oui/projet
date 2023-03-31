import mongoose from "mongoose";


const tourSchema = mongoose.Schema({
    title:String,
    description:String,
    name:String,
    creator:String,
    tags:[String],
    imageFile:String,
    createAt: {
        type: Date,
        default: new Date(),
    },
    likes: {
        type: [String],
        default: [],
    },
});
const TourModel = mongoose.model("Tour", tourSchema);

export default TourModel;