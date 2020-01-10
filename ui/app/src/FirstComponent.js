import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getToDos } from './store/to-do';

const firstComponent = ({ toDos, getToDos }) => {
  const [recipe, setRecipe] = useState('recipe');
  useEffect(() => {
    getToDos();
  }, []);

  const renderToDos = () => (
    toDos.map(toDo => <div>{toDo.title}</div> )
  )

  return <div>{renderToDos()}</div>;
};
const mapStateToPops = (state) => ({ toDos: state.toDo.toDos });

const mapDispatchToProps = { getToDos };

export default connect(mapStateToPops, mapDispatchToProps)(firstComponent);
