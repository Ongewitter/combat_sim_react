import React from "react";
import styled from 'styled-components';

function CharacterTable() {
  return (
    <S.thead>
      <tr>
        <td>Name</td>
        <td>HP</td>
        <td>Armor</td>
        <td>toHit</td>
        <td>Damage</td>
        <td>Bonus Damage</td>
        <td></td>
      </tr>
    </S.thead>
  );
}

export default CharacterTable;

const S = {};
S.thead = styled.thead`
  border: 1px solid black;
`;
