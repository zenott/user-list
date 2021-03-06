import React from 'react';
import SelectOrder from './SelectOrder';
import styled from 'styled-components';
import Button from './common/Button';
import { useDispatch } from 'react-redux';

const ControlDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 460px) {
    flex-direction: column-reverse;

    > button {
      margin-top: 20px;
    }
  }
`;

export default function Controls() {
  const dispatch = useDispatch();

  return (
    <ControlDiv>
      <Button
        text="Add User"
        onClick={() => dispatch({ type: 'SELECT_USER', user: null })}
      />
      <SelectOrder />
    </ControlDiv>
  );
}
