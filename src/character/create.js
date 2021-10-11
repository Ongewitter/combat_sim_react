import React from "react";
import styled from 'styled-components';

import Button from '../components/Button';
import InputWithLabel from '../components/InputWithLabel';
import NumberInput from "../components/NumberInput";
import TextInput from '../components/TextInput';
import DiceInput from "../components/DiceInput";

function Create({ onSubmit }) {
  const [ruleset, setRuleset] = React.useState('DnD');
  const [name, setName] = React.useState('');
  const [hp, setHp] = React.useState(1);
  const [armor, setArmor] = React.useState(10);
  const [toHit, setToHit] = React.useState(0);
  const [damage, setDamage] = React.useState({damage: 0, die: 0});
  const [bonusDamage, setBonusDamage] = React.useState({damage: 0, die: 0});


  function handleSubmit(event) {
    event.preventDefault();

    const character = {
      name: name,
      hp: hp,
      armor: armor,
      toHit: toHit,
      damage: damage,
      bonusDamage: bonusDamage,
      ruleset: ruleset,
    }
    fetch(`${process.env.REACT_APP_BACKEND_URL}/characters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    })
      .then(response => response.json())
      .then(character => {
        onSubmit(character);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <CreateWrapper>
      <CreateHeader>
        Add a new character
      </CreateHeader>
      <form onSubmit={handleSubmit}>
        <InputWithLabel>
          Name:
          <TextInput name="name" onChange={(e) => setName(e.target.value)}/>
        </InputWithLabel>
        <InputWithLabel>
          HP:
          <NumberInput name="hp" onChange={(e) => setHp(e.target.value)}/>
        </InputWithLabel>
        {/* TODO Should toggle depending on ruleset */}
        <InputWithLabel>
          Armor:
          <NumberInput name="armor" onChange={(e) => setArmor(e.target.value)}/>
        </InputWithLabel>
        <InputWithLabel>
          toHit:
          <NumberInput name="toHit" onChange={(e) => setToHit(e.target.value)}/>
        </InputWithLabel>
        <InputWithLabel>
          Main attack damage die:
          <DiceInput name="damage" onChange={setDamage}/>
        </InputWithLabel>
        <InputWithLabel>
          Once-per-turn bonus damage:
          <DiceInput name="bonus_damage" onChange={setBonusDamage}/>
        </InputWithLabel>
        <Button type='submit' onClick={() => {}}>
          Add character
        </Button>
      </form>
    </CreateWrapper>
  );
}

export default Create;

const CreateWrapper = styled.div`
  text-align: center;
`;

const CreateHeader = styled.header`
  font-size: 1.5em;
`;
