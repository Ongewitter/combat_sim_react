import React from "react";
import styled from 'styled-components';
import CharacterTableHeader from './CharacterTableHeader';
import CharacterTableBody from './CharacterTableBody';

function CharacterTable({characters}) {
  return (
    <S.table>
      <CharacterTableHeader/>
      <CharacterTableBody characters={characters}/>
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
