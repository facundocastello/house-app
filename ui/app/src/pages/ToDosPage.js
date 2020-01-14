import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getData, createData } from '../store/dataManager';

import Card from '../components/Card';
import CardContainer from '../components/CardContainer';
import Input from '../components/Input';
import CenterDiv from '../components/CenterDiv';
import BoxContainer from '../components/BoxContainer';
import Button from '../components/Button';
import SpaceAroundDiv from '../components/SpaceAroundDiv';
import Checkbox from '../components/Checkbox';
import InputsContainer from '../components/InputsContainer';
import CardItem from '../components/CardItem';

const ToDosPage = ({ createData, toDos, getData }) => {
  const [newTodo, setNewTodo] = useState({
    expirated: true,
    done: false,
    done_by: 2,
    task: 1,
  });
  useEffect(() => {
    getData('toDos');
  }, [getData]);

  const renderToDos = () =>
    toDos.map((toDo) => (
      <Card>
        <CardItem column={1} center bold>
          {toDo.title}
        </CardItem>
        <CardItem column={1}>{toDo.description}</CardItem>
      </Card>
    ));

  return (
    <div>
      <CenterDiv>
        <BoxContainer width='95%' widthLG='50%'>
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
              onChange={(event) =>
                setNewTodo({ ...newTodo, done: event.target.checked })
              }
            />
            <Checkbox
              checked={newTodo.expirated}
              onChange={(event) =>
                setNewTodo({ ...newTodo, expirated: event.target.checked })
              }
            />
          </InputsContainer>

          <SpaceAroundDiv style={{ alignItems: 'center', margin: '10px 0px' }}>
            <Button onClick={() => createData('toDos', newTodo)}>
              Add To Do
            </Button>
          </SpaceAroundDiv>
        </BoxContainer>
      </CenterDiv>
      <CardContainer>{renderToDos()}</CardContainer>
    </div>
  );
};

const mapStateToPops = (state) => ({ toDos: state.dataManager.toDos });

const mapDispatchToProps = { createData, getData };

export default connect(mapStateToPops, mapDispatchToProps)(ToDosPage);
