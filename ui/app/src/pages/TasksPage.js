import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getData, createData } from '../store/dataManager';

import Card from '../components/Card';
import CardContainer from '../components/CardContainer';
import CenterDiv from '../components/CenterDiv';
import CardItem from '../components/CardItem';
import Form from '../components/Form';

const TasksPage = ({ createData, tasks, getData }) => {
  const [NewTask, setNewTask] = useState({
    expirated: false,
    done: false,
    done_by: 2,
    task: 1,
  });
  const [showAddTask, setShowAddTask] = useState(true);
  const [showFilters, setShowFilters] = useState(true);

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
        <CardItem column={2} fontLg>
          {task.description}
        </CardItem>
        <CardItem column={2}>{task.created_by.username}</CardItem>
      </Card>
    ));

  return (
    <div>
      <CenterDiv>
        <Form
          fields={[
            {
              onChange: (event) =>
                setNewTask({ ...NewTask, title: event.target.value }),
              placeholder: 'Title',
            },
            {
              onChange: (event) =>
                setNewTask({ ...NewTask, description: event.target.value }),
              placeholder: 'Description',
              type: 'textarea',
            },
            {
              onChange: (event) =>
                setNewTask({ ...NewTask, done: event.target.checked }),
              checked: NewTask.done,
              placeholder: 'Done',
            },
            {
              onChange: (event) =>
                setNewTask({ ...NewTask, expirated: event.target.checked }),
              checked: NewTask.expirated,
              placeholder: 'Expirated',
            },
          ]}
          title={`Add To Do`}
          showContent={showAddTask}
          triggerContent={() => setShowAddTask(!showAddTask)}
        />
      </CenterDiv>
      <CardContainer>{renderTasks()}</CardContainer>
    </div>
  );
};

const mapStateToPops = (state) => ({ tasks: state.dataManager.tasks });

const mapDispatchToProps = { createData, getData };

export default connect(mapStateToPops, mapDispatchToProps)(TasksPage);
