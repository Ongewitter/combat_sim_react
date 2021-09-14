import React from "react";
import styled from 'styled-components';

function TextInput(props) {
  return (
    <S.Input type="text" name={props.name} onChange={props.onChange} />
  );
}

export default TextInput;

const S = {};
S.Input = styled.input``;
