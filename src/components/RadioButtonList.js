import React from "react";
import styled from 'styled-components';

function RadioButtonList({children}) {
  return (
    <S.RadioButtonList>
      {children}
    </S.RadioButtonList>
  );
}

export default RadioButtonList;

const S = {};
S.RadioButtonList = styled.div`
  input, label {
    display: inline-block;
  } 
`;
