import React, { useState } from 'react';

export default function({ alguna }) {
  const [recipe, setRecipe] = useState('recipe');

  return <div>{recipe}</div>;
}
