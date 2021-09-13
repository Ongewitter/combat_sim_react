import React from "react";
import styled from 'styled-components';

function InputWithLabel(props) {
  return (
    <S.Label>
      {props.children}
    </S.Label>
  );
}

export default InputWithLabel;

const S = {};
S.Label = styled.label`
  display: block;
`;
