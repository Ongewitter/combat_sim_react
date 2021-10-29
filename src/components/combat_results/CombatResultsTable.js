import React from "react";
import styled from 'styled-components';

import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import TableRow from '../TableRow';

function CombatResultsTable({combatResults}) {
  function renderResults(){
    return combatResults.map(result => {
      return (<TableRow key={result.id}>
        <td>{result.status}</td>
        <td>{result.name}</td>
        <td>{result.hp}</td>
        <td>{result.damage_dealt}</td>
        <td>{result.damage_taken}</td>
      </TableRow>) 
    });
  }

  return (
    <S.table>
      <TableHeader>
        <tr>
          <td>Status</td>
          <td>Name</td>
          <td>HP</td>
          <td>Damage taken</td>
          <td>Damage dealt</td>
        </tr>
      </TableHeader>
      <TableBody>
        { renderResults() }
      </TableBody>
    </S.table>
  );
}

export default CombatResultsTable;

const S = {};
S.table = styled.table`
  position: relative;
  left: 20%;
  width: 60%;
`;
