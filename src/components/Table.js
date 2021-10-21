import React from "react";
import styled from 'styled-components';

function Table({children}) {
  return (
    <S.ul>
      {children}
    </S.ul>
  );
}

export default Table;

const S = {};
S.ul = styled.table`
  display: block;
`;
