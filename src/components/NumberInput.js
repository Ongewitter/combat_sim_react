import React from "react";
import styled from 'styled-components';

function NumberInput(props) {
  return (
    <S.Input type="number" name={props.name} />
  );
}

export default NumberInput;

const S = {};
S.Input = styled.input``;
