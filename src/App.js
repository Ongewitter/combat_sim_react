import React from "react";
import styled from 'styled-components';

import logo from './logo.svg';
import CharacterCreate from './character/create';
import Button from './components/Button';

function App() {
  const [data, setData] = React.useState(null);
  const [creating, setCreating] = React.useState(false);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/combat`)
      .then((res) => res.json())
      .then((data) => setData(data.fun));
  }, []);
  
  function handleCreateCharacter() {
    setCreating(!creating);
  };

  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </AppHeader>
      <div>
        <Button onClick={() => handleCreateCharacter()}>
          Create a character
        </Button>
        The user is <b>{creating ? 'creating' : 'not creating'}</b> a character.
        {creating ? <CharacterCreate/> : ''}
      </div>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;
