import React from "react";
import styled from 'styled-components';

function RadioButtonInput({id, name, value, checked, onChange}) {
  return (
    <S.Input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}/>
  );
}

export default RadioButtonInput;

const S = {};
S.Input = styled.input``;
