import styled from 'styled-components';

export default styled.div`
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  min-width: 200px;
  flex: 0 0 47%;
  @media screen and (min-width: 768px) {
    flex: 0 0 32%;
  }
`;
