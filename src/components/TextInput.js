import React from "react";
import styled from 'styled-components';

function TextInput({name, onChange}) {
  return (
    <S.Input type="text" name={name} onChange={onChange} />
  );
}

export default TextInput;

const S = {};
S.Input = styled.input``;
