import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getData, createData } from '../store/dataManager';

import Card from '../components/Card';
import CardContainer from '../components/CardContainer';
import CenterDiv from '../components/CenterDiv';
import SpaceAroundDiv from '../components/SpaceAroundDiv';
import InputsContainer from '../components/InputsContainer';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Button from '../components/Button';
import BoxContainer from '../components/BoxContainer';
import CardItem from '../components/CardItem';

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

  const renderTasks = () =>
    tasks.map((task) => (
      <Card
        primaryButton='Edit'
        dangerButton='Remove'
        key={`tasks-${task.task_id}`}
      >
        <CardItem column={1} center bold fontLg>
          {task.title}
        </CardItem>
        <CardItem column={2} fontLg>{task.description}</CardItem>
        <CardItem column={2}>{task.created_by.username}</CardItem>
      </Card>
    ));

  return (
    <div>
      <CenterDiv>
        <BoxContainer>
          <SpaceAroundDiv
            style={{ alignItems: 'center', marginBottom: '10px' }}
          >
            <h2>Add To Do</h2>
          </SpaceAroundDiv>
          <InputsContainer>
            <Input
              onChange={(event) =>
                setNewTodo({ ...newTodo, title: event.target.value })
              }
              placeholder='Title'
              type='text'
            />
            <Input
              onChange={(event) =>
                setNewTodo({ ...newTodo, description: event.target.value })
              }
              placeholder='Description'
              type='text'
            />
            <Checkbox
              checked={newTodo.done}
              placeholder='Done'
              onChange={(event) =>
                setNewTodo({ ...newTodo, done: event.target.checked })
              }
            />
            <Checkbox
              checked={newTodo.expirated}
              placeholder='Expirated'
              onChange={(event) =>
                setNewTodo({ ...newTodo, expirated: event.target.checked })
              }
            />
          </InputsContainer>

          <SpaceAroundDiv style={{ alignItems: 'center', margin: '10px 0px' }}>
            <Button onClick={() => createData('tasks', newTodo)}>
              Add To Do
            </Button>
          </SpaceAroundDiv>
        </BoxContainer>
      </CenterDiv>
      <CardContainer>{renderTasks()}</CardContainer>
    </div>
  );
};

const mapStateToPops = (state) => ({ tasks: state.dataManager.tasks });

const mapDispatchToProps = { createData, getData };

export default connect(mapStateToPops, mapDispatchToProps)(TasksPage);
