import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '..http.js';

const places = localStorage.getItem('places');

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setavailablePlaces] = useState([]);
  const [error, setError] = useState();

  // INFINITE LOOP

  // fetch('http://localhost:3000/places')
  // .then((response) =>{
  //   return response.json()
  // })
  // .then((resData) => {
  //   setavailablePlaces(resData.places);
  // });

  // USEEFFECT SOLVES THE INFINITE LOOP

  // EXCECUTES IMEDIATELY AFTER THE COMPONENT FUNCTION
  // BUT ONLY IF THE DEPENDENCIES CHANGED

  // useEffect(() => {
  //   fetch('http://localhost:3000/places')
  //   .then((response) =>{
  //     return response.json()
  //   })
  //   .then((resData) => {
  //     setavailablePlaces(resData.places);
  //   });
  // }, []);

  // USE ASYNC AND AWAIT

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {

        const places = await fetchAvailablePlaces();

        // const response = await fetch('http://localhost:3000/places')
        // const resData = await response.json();
  
        // // TRUE 200, 300 - FALSE 400, 500
        // if (!response.ok) {
        //   throw new Error('Failed to fetch places');
        // }

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places, 
            position.coords.latitude, 
            position.coords.longitude
          );
        setavailablePlaces(sortedPlaces);
        setIsFetching(false);
        });

      } catch (error) {
        // EXCECUTE CODE IF THERE IS AN ERROR...
        setError({message: error.message || 'Could not fetch places, try again later.'
        });
        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);

  if(error) {
   return <Error title = "An error occured!" message = {error.message}/>;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading = {isFetching}
      loadingText = "Fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
