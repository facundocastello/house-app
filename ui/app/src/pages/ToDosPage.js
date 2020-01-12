import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getData, createData } from '../store/dataManager';

import Card from '../components/Card';
import CardContainer from '../components/CardContainer';

const ToDosPage = ({ createData, toDos, getData }) => {
  const [newTodo, setNewTodo] = useState({
    expirated: false,
    done: false,
    done_by: 2,
    task: 1,
  });
  useEffect(() => {
    getData('toDos');
  }, [getData]);

  const renderToDos = () => toDos.map((toDo) => <Card>{toDo.title}</Card>);

  return (
    <div>
      <div>
        <input
          onChange={(event) =>
            setNewTodo({ ...newTodo, title: event.target.value })
          }
          placeholder='title'
          type='text'
        />
        <input
          onChange={(event) =>
            setNewTodo({ ...newTodo, description: event.target.value })
          }
          placeholder='description'
          type='text'
        />
        <input
          onChange={(event) =>
            setNewTodo({ ...newTodo, done: event.target.checked })
          }
          type='checkbox'
        />
        <input
          onChange={(event) =>
            setNewTodo({ ...newTodo, expirated: event.target.checked })
          }
          type='checkbox'
        />
        <div onClick={() => createData('toDos', newTodo)}>button</div>
      </div>
      <CardContainer>{renderToDos()}</CardContainer>
    </div>
  );
};

const mapStateToPops = (state) => ({ toDos: state.dataManager.toDos });

const mapDispatchToProps = { createData, getData };

export default connect(mapStateToPops, mapDispatchToProps)(ToDosPage);
