import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { SingleMoveCard } from "./SingleMoveCard";

const api = process.env.REACT_APP_DATABASE_URL

// Function to fetch specific moves
export const SingleMoveFetch = () => {
  const { id } = useParams();
  const [moveData, setMoveData] = useState(null);

  useEffect(() => {
    axios.get(`${api}/moves/${encodeURIComponent(id)}`)
    .then((response) => {
      setMoveData(response.data);
      console.log(response.data); // log received data in the console for testing
    })
    .catch((error) => {
      console.error('Error fetching move data:', error);
      setMoveData([]);
    });
  }, [id]);

  if (moveData === null) {
    return <div>Loading...</div>; // Display a loading message while waiting for the API response
  }

  return (
    <div>
      <SingleMoveCard move={moveData} />
    </div>
  );
};