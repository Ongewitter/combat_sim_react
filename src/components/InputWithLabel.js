import React from "react";
import styled from 'styled-components';

function Input(props) {
  return (
    <S.Input>
      {props.children}
    </S.Input>
  );
}

export default Input;

const S = {};
S.Input = styled.input``;
