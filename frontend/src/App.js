import {useEffect} from "react";
import './App.css';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import {useDispatch} from "react-redux";
import { setUser } from "./redux/features/authSlice";
import Service from "./components/Service";
import About from "./components/About";
import AddEditTour from "./pages/AddEditTour";
import SingleTour from "./pages/SingleTour";
import Dashbord from "./pages/Dashbord";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import TagTours from "./pages/TagTours";
import Contact from "./components/Contact";
import Camping from "./components/Camping";
import Adventure from "./components/Adventure";
import Road from "./components/Road";
import Guide from "./components/Guide";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
     dispatch(setUser(user));
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/tours/search' element={<Home />}/>
          <Route path='/tours/tag/:tag' element={<TagTours />}/>
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>}/>
          <Route path='/login' element= {<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/camping' element={<Camping />} />
          <Route path='/adventure' element={<Adventure />} />
          <Route path='/road' element={<Road />} />
          <Route path='/guide' element={<Guide />} />
          <Route 
            path='/addTour' 
            element={
            <PrivateRoute>
              <AddEditTour />
            </PrivateRoute>
          } 
          />
          <Route 
            path='/editTour/:id' 
            element={
              <PrivateRoute>
                <AddEditTour />
              </PrivateRoute>
            } 
          />
          <Route path='/tour/:id' element={<SingleTour />} />
          <Route 
            path='/dashboard' 
            element={
              <PrivateRoute>
                <Dashbord />
              </PrivateRoute>
            } 
          />
          <Route  path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
