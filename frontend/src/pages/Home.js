import React, {useEffect} from 'react';
import TourApp from '../components/TourApp';
import {MDBCol, MDBContainer, MDBRow, MDBTypography} from "mdb-react-ui-kit";
import {useDispatch, useSelector} from "react-redux";
import { getTours, setCurrentPage } from '../redux/features/tourSlice';
import CardTour from '../components/CardTour';
import Slider from "../components/Slider";
import Spinner from "../components/Spinner";
import Pagination from '../components/Pagination';
import { useLocation } from "react-router-dom";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}


const Home = () => {
  const {tours, loading, currentPage, numberOffPages} = useSelector(
    (state) => ({
      ...state.tour,
    }))
  const dispatch = useDispatch();
  const query = useQuery();
  const searchQuery = query.get("searchQuery");
  const location = useLocation();


  useEffect(()=>{
    dispatch(getTours(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps

  },[currentPage]);

  if(loading) {
    return<Spinner />;
  }
  return (
    <div>
     <Slider />
      <div style={{
        padding: "5px",
        maxWidth: "1000px",
        alignContent:"center"
      }}>
        <MDBRow className='mt-5'>
          {tours.length === 0 && location.pathname === "/" && (
            <MDBTypography className='text-center mb-0' tag="h2">
                 No Tours found
            </MDBTypography>
          )}
           {tours.length === 0 && location.pathname !== "/" && (
            <MDBTypography className='text-center mb-0' tag="h2">
                 we coulden't find any matches for {searchQuery}""
            </MDBTypography>
          )}
        
          <MDBCol>
             <MDBContainer>
               <MDBRow className='row-cols-1 row-cols-md-3 g-2'>
                 {tours && tours.map((item) =>(<CardTour key={item._id} {...item}/>))}
               </MDBRow>
             </MDBContainer>
          </MDBCol>
        </MDBRow>
        {tours.length > 0 && !searchQuery && (
          <Pagination 
          setCurrentPage={setCurrentPage}
          numberOffPages={numberOffPages}
          currentPage={currentPage}
          dispatch={dispatch}
          />

        )}
      </div>
      <TourApp />
    </div>
  )
}

export default Home