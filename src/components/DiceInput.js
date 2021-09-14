import React from "react";
import styled from 'styled-components';

function DiceInput(props) {
  return (
    <S.DiceDiv>
      <S.Input type="number" name={props.name + '_amount'} /> 🎲 <S.Input type="number" name={props.name + '_die'} />
    </S.DiceDiv>
  );
}

export default DiceInput;

const S = {};
S.Input = styled.input``;
S.DiceDiv = styled.div``;
