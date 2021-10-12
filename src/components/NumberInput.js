import React from "react";
import styled from 'styled-components';

function NumberInput({name, onChange}) {
  return (
    <S.Input type="number" name={name} onChange={onChange} />
  );
}

export default NumberInput;

const S = {};
S.Input = styled.input``;
