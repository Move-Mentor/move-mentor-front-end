import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryCard from './CategoryCard';

const api = process.env.REACT_APP_BACKEND_URL

export const CategoryFetch = () => {
  const [moves, setMoves] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  // Fetching categories data from moves
  useEffect(() => {
    axios.get(`${api}/moves/categories`)
    .then((response) => response.data)
    .then((moves) => {
      setMoves(moves);
    });
  }, []);

  // Creating a set to store unique categories
  useEffect(() => {
    const categorySet = new Set();
    moves.forEach((move) => {
      categorySet.add(move.moveCategory);
    });
    // Convert the set back to an array and store it in state
    setUniqueCategories(Array.from(categorySet));
  }, [moves])

  return (
    <div>
      {uniqueCategories.map((category) => (
        <CategoryCard key={category} category={category} />
      ))}
    </div>
  )
}