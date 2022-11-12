import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import { 
    createTour, 
    deleteTour, 
    getRelatedTours, 
    getTour, 
    getTours, 
    getToursBySearch, 
    getToursByTag, 
    getToursByUser, 
    likeTour, 
    updateTour 
} from "../controllers/tour.js";

//getTourSearch
router.get("/search", getToursBySearch);
//get tours
router.get("/", getTours);
//get tours
router.get("/:id", getTour);
//get userTours
router.get("/userTours/:id", auth,getToursByUser);
//deleteTour
router.delete("/:id", auth, deleteTour);
//updateTour
router.patch("/:id", auth, updateTour);
//create tour
router.post("/",auth, createTour);
//getTourByTag
router.get("/tag/:tag",getToursByTag);
//getRelatedTours
router.post("/relatedTours",getRelatedTours);
//getToursLike
router.patch("/like/:id", auth, likeTour);


export default router;