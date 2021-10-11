import React from "react";
import styled from 'styled-components';

import CharacterCreate from './character/Create';
import Button from './components/Button';
import RightPanel from "./components/RightPanel";
import CharacterList from './components/character/CharacterList.js';

function App() {
  // const [data, setData] = React.useState(null);
  const [creating, setCreating] = React.useState(false);
  const [characterList, setCharacterList] = React.useState([]);

  // React.useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BACKEND_URL}/combat`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data.fun));
  // }, []);
  
  function handleCreateCharacter() {
    setCreating(!creating);
  };

  function onSubmit(character){
    console.log(character);
    setCharacterList(characterList.push(character));
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
      <CharacterList
        charactersList={characterList}
      >
      </CharacterList>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  text-align: center;
`;
