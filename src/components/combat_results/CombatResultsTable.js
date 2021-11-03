import React from "react";
import styled from 'styled-components';

import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import TableRow from '../TableRow';

function CombatResultsTable({combatResults}) {
  function renderResults(){
    return combatResults.map(result => {
      return (<TableRow key={result.id}>
        <td>{result.name}</td>
        <td>{result.hp}</td>
        <td>{result.damageDealt}</td>
        <td>{result.attacks}</td>
        <td>{result.hits}</td>
        <td>{result.status}</td>
      </TableRow>) 
    });
  }

  return (
    <S.table>
      <TableHeader>
        <tr>
          <td>Name</td>
          <td>HP</td>
          <td>Damage dealt</td>
          <td>Attacks</td>
          <td>Hits</td>
          <td>Status</td>
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
