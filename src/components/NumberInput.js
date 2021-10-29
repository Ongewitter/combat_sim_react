import React from "react";
import styled from 'styled-components';

function NumberInput({name, value, onChange}) {
  return (
    <S.Input type="number" name={name} value={value} onChange={onChange} />
  );
}

export default NumberInput;

const S = {};
S.Input = styled.input``;
