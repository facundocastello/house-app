import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getToDos } from '../store/to-do';

import Title from '../components/Title';

const ToDosPage = ({ toDos, getToDos }) => {
  const [recipe, setRecipe] = useState('recipe');
  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    // getToDos()
    setTimeout( () => getToDos(), 1000)
  }, []);

  const renderToDos = () => toDos.map((toDo) => <Title>{toDo.title}</Title>);

  return (
    <div>
      <div onClick={() => setShowTitle(true)}> button </div>
      {renderToDos()}
    </div>
  );
};
const mapStateToPops = (state) => ({ toDos: state.toDo.toDos });

const mapDispatchToProps = { getToDos };

export default connect(mapStateToPops, mapDispatchToProps)(ToDosPage);
