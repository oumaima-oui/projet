import express from "express";
const router = express.Router();


import {signin, signup, googleSignIn} from "../controllers/user.js";

//login
router.post("/signup", signup);
//register
router.post("/signin", signin);
//google signIN
router.post("/googleSignIn", googleSignIn);

export default router;