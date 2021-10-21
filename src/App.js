import React from "react";
import styled from 'styled-components';

import CharacterCreate from './character/Create';
import Button from './components/Button';
import RightPanel from "./components/RightPanel";
import CharacterTable from './components/character/CharacterTable';

function App() {
  // const [data, setData] = React.useState(null);
  const [creating, setCreating] = React.useState(false);
  const [characters, setCharacters] = React.useState([]);

  // React.useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BACKEND_URL}/combat`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data.fun));
  // }, []);
  
  function handleCreateCharacter() {
    setCreating(!creating);
  };

  function onSubmit(character){
    characters.push(character)
    setCharacters(characters);
    setCreating(!creating);
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
      {(characters.length > 0) ? <CharacterTable characters={characters} /> : ''}
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  text-align: center;
`;
