import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8000"});

API.interceptors.request.use((req) =>{
    if(localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }
    return req;
});

//login
export const signIn = (FormData) => API.post("/users/signin", FormData);
//registet
export const signUp = (FormData) => API.post("/users/signup", FormData);
//googleSignIn
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);
//tour
//createTour
export const createTour = (tourData) => API.post("/tour",tourData);
//get tours
export const getTours = (page) => API.get(`/tour?page=${page}`);
//get tour
export const getTour = (id) => API.get(`/tour/${id}`);
//getToursByUser
export const getToursByUser = (userId) => API.get(`/tour/userTours/${userId}`);
//deleteTour
export const deleteTour = (id) => API.delete(`/tour/${id}`);
//updateTour
export const updateTour = (updatedTourData,id) => API.patch(`/tour/${id}`,updatedTourData);
//getTourSearch
export const getToursBySearch = (searchQuery) =>API.get(`/tour/search?searchQuery=${searchQuery}`);
//getToursByTags
export const getTagTours = (tag) => API.get(`/tour/tag/${tag}`);
//getRelatedTours
export const getRelatedTours = (tags) => API.post(`/tour/relatedTours`, tags);
//getTourLike
export const likeTour = (id) => API.patch(`/tour/like/${id}`);