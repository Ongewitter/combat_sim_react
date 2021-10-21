import React from "react";
import styled from 'styled-components';
import CharacterTableRow from './CharacterTableRow';

function CharacterTableBody({characters}) {
  return (
    <S.tbody>
      {characters.map(character => <CharacterTableRow key={character.id} character={character} />)}
    </S.tbody>
  );
}

export default CharacterTableBody;

const S = {};
S.tbody = styled.tbody``;
