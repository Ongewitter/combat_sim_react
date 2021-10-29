import React from "react";
import styled from 'styled-components';

import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import TableRow from '../TableRow';
import Button from '../Button';

function CharacterTable({characters, onDelete}) {
  function onMove(){
    // Show move arrows or drag'n'drop
  }
  function onEdit(){
    // Open character editing
  }
  function handleDelete(id){
    // TODO: Move to a service (and Redux later)
    const character = {
      id: id
    };
    fetch(`${process.env.REACT_APP_BACKEND_URL}/characters`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    })
      .then(response => response.json())
      .then(character => {
        onDelete(character);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function renderCharacters(){
    return characters.map(character => {
      return (<TableRow key={character.id}>
        <td>{character.name}</td>
        <td>{character.hp}</td>
        <td>{character.armor}</td>
        <td>{character.toHit}</td>
        <td>{character.damage.amount} 🎲  {character.damage.die}</td>
        <td>{character.bonusDamage.amount} 🎲  {character.bonusDamage.die}</td>
        <td>{character.team}</td>
        <td>
          <S.ButtonWrapper>
            <Button onClick={onMove}>Move</Button>
            <Button onClick={onEdit}>Edit</Button>
            <Button onClick={handleDelete(character.id)}>Delete</Button>
          </S.ButtonWrapper>
        </td>
      </TableRow>) 
    });
  }

  return (
    <S.table>
      <TableHeader>
        <tr>
          <td>Name</td>
          <td>HP</td>
          <td>Armor</td>
          <td>toHit</td>
          <td>Damage</td>
          <td>Bonus Damage</td>
          <td>Team</td>
          <td></td>
        </tr>
      </TableHeader>
      <TableBody>
        { renderCharacters() }
      </TableBody>
    </S.table>
  );
}

export default CharacterTable;

const S = {};
S.table = styled.table`
  position: relative;
  left: 20%;
  width: 60%;
`;
S.ButtonWrapper = styled.div`
  display: inline-block;
`
