import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getData, createData } from '../store/dataManager';

import Card from '../components/Card';
import CardContainer from '../components/CardContainer';

const TasksPage = ({ createData, tasks, getData }) => {
  const [newTodo, setNewTodo] = useState({
    expirated: false,
    done: false,
    done_by: 2,
    task: 1,
  });
  useEffect(() => {
    getData('tasks');
  }, [getData]);

  const renderTasks = () => tasks.map((task) => <Card>
    <div>{task.title}</div>
    <div>{task.description}</div>
    <div>{task.created_by.username}</div>
    </Card>);

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
        <div onClick={() => createData('tasks', newTodo)}>button</div>
      </div>
      <CardContainer>{renderTasks()}</CardContainer>
    </div>
  );
};

const mapStateToPops = (state) => ({ tasks: state.dataManager.tasks });

const mapDispatchToProps = { createData, getData };

export default connect(mapStateToPops, mapDispatchToProps)(TasksPage);
