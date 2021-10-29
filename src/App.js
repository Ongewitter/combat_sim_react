import { useState, useEffect } from "react";
import styled from 'styled-components';

import CharacterCreate from './character/Create';
import Button from './components/Button';
import RightPanel from "./components/RightPanel";
import CharacterTable from './components/character/CharacterTable';
import CombatResultsTable from './components/combat_results/CombatResultsTable';

function App() {
  // const [data, setData] = useState(null);
  const [creating, setCreating] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [combatResults, setCombatResults] = useState([]);
  const [showCharacterTable, setShowCharacterTable] = useState(false);
  const [showCombatResultsTable, setShowCombatResultsTable] = useState(false);

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BACKEND_URL}/combat`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data.fun));
  // }, []);

  useEffect(() => {
    if (combatResults.length > 0) {
      setShowCharacterTable(false);
      setShowCombatResultsTable(true);
    }
  }, [combatResults]);

  useEffect(() => {
    setShowCharacterTable(characters.length > 0 && !showCombatResultsTable);
  }, [characters.length, showCombatResultsTable]);
  
  function handleCreateCharacter() {
    setCreating(!creating);
  };

  function handleCombat(){
    fetch(`${process.env.REACT_APP_BACKEND_URL}/characters/combat`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(characters => {
        setCombatResults(characters)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function onSubmit(character){
    characters.push(character)
    setCharacters(characters);
    setCreating(!creating);
  };

  function onDelete(character){
    characters.splice(characters.indexOf(character), 1)
    setCharacters(characters);
  };

  return (
    <AppWrapper>
      <Button onClick={() => handleCreateCharacter()}>
        Create a character
      </Button>
      The user is <b>{creating ? 'creating' : 'not creating'}</b> a character.
      {creating ?
        <RightPanel>
          <CharacterCreate
            onSubmit={onSubmit}
          />
        </RightPanel>
        : ''
      }
      <Button onClick={() => handleCombat()}>
        Test your might!
      </Button>
      { (showCharacterTable) ? <CharacterTable characters={characters} onDelete={onDelete}/> : '' }
      { (showCombatResultsTable) ? <CombatResultsTable combatResults={combatResults}/> : '' }
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  text-align: center;
`;
