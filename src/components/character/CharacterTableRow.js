import React from "react";
import styled from 'styled-components';

function CharacterTableBody({character}) {
  return (
    <S.tr>
      <td>{character.name}</td>
      <td>{character.hp}</td>
      <td>{character.armor}</td>
      <td>{character.toHit}</td>
      <td>{character.damage.amount} 🎲  {character.damage.die}</td>
      <td>{character.bonusDamage.amount} 🎲  {character.bonusDamage.die}</td>
    </S.tr>
  );
}

export default CharacterTableBody;

const S = {};
S.tr = styled.tr``;
