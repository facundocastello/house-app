import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getToDos, createToDo } from '../store/to-do';

import Card from '../components/Card';

const ToDosPage = ({ createToDo, toDos, getToDos }) => {
  const [newTodo, setNewTodo] = useState({expirated: false, done: false, done_by:2});
  useEffect(() => {
    getToDos();
  }, [getToDos]);

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
        <div onClick={() => createToDo(newTodo)}>button</div>
      </div>
      {renderToDos()}
    </div>
  );
};

const mapStateToPops = (state) => ({ toDos: state.toDo.toDos });

const mapDispatchToProps = { createToDo, getToDos };

export default connect(mapStateToPops, mapDispatchToProps)(ToDosPage);
