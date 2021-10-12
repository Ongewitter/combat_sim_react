import React from "react";
import styled from 'styled-components';

function List() {
  return (
    <S.ul>
      <S.header>
        Name
      </S.header>
      <S.li>
        Nenoam
      </S.li>
    </S.ul>
  );
}

export default List;

const S = {};
S.ul = styled.ul`
  display: block;
`;

S.header = styled.header`
  display: block;
`;

S.li = styled.li`
  display: block;
`;
