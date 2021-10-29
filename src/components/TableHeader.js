import React from "react";
import styled from 'styled-components';

function CharacterTable({ children }) {
  return (
    <S.thead>
      {children}
    </S.thead>
  );
}

export default CharacterTable;

const S = {};
S.thead = styled.thead`
  border: 1px solid black;
`;
