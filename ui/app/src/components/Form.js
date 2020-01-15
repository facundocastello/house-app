import React from 'react';

import BoxContainer from './BoxContainer';
import SpaceAroundDiv from './SpaceAroundDiv';
import InputsContainer from './InputsContainer';
import Input from './Input';
import Checkbox from './Checkbox';
import Button from './Button';

export default ({ fields }) => {
  const renderInputs = () =>
    fields.map((field) => {
      const Component = field.checked !== undefined ? Checkbox : Input;

      return <Component {...field} />;
    });
  return (
    <BoxContainer>
      <SpaceAroundDiv style={{ alignItems: 'center', marginBottom: '10px' }}>
        <h2>Add To Do</h2>
      </SpaceAroundDiv>
      <InputsContainer>{renderInputs()}</InputsContainer>

      <SpaceAroundDiv style={{ alignItems: 'center', margin: '10px 0px' }}>
        <Button onClick={() => createData('toDos', newTodo)}>Add To Do</Button>
      </SpaceAroundDiv>
    </BoxContainer>
  );
};
