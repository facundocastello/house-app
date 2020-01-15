import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getData, createData } from '../store/dataManager';

import Card from '../components/Card';
import CardContainer from '../components/CardContainer';
import CenterDiv from '../components/CenterDiv';
import BoxContainer from '../components/BoxContainer';
import CardItem from '../components/CardItem';
import Form from '../components/Form';
import Button from '../components/Button';

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

  const renderToDos = () =>
    toDos.map((toDo) => (
      <Card
        key={`todos-${toDo.to_do_id}`}
        successButton='mark as done'
        dangerButton='delete'
      >
        <CardItem column={1} center bold>
          {toDo.title}
        </CardItem>
        <CardItem column={1}>{toDo.description}</CardItem>
      </Card>
    ));

  return (
    <div>
      <CenterDiv style={{ flexDirection: 'column' }}>
        <Form
          fields={[
            {
              onChange: (event) =>
                setNewTodo({ ...newTodo, title: event.target.value }),
              placeholder: 'Title',
            },
            {
              onChange: (event) =>
                setNewTodo({ ...newTodo, description: event.target.value }),
              placeholder: 'Description',
              type: 'textarea',
            },
            {
              onChange: (event) =>
                setNewTodo({ ...newTodo, done: event.target.checked }),
              checked: newTodo.done,
              placeholder: 'Done',
            },
            {
              onChange: (event) =>
                setNewTodo({ ...newTodo, expirated: event.target.checked }),
              checked: newTodo.expirated,
              placeholder: 'Expirated',
            },
          ]}
        />
        <BoxContainer padding='10px'>
          <CenterDiv>
            <Button>done</Button>
            <Button>not done</Button>
            <Button>other filter</Button>
          </CenterDiv>
        </BoxContainer>
      </CenterDiv>
      <CardContainer>{renderToDos()}</CardContainer>
    </div>
  );
};

const mapStateToPops = (state) => ({ toDos: state.dataManager.toDos });

const mapDispatchToProps = { createData, getData };

export default connect(mapStateToPops, mapDispatchToProps)(ToDosPage);
