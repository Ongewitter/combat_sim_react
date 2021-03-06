import { useState } from "react";
import styled from 'styled-components';

import Button from '../components/Button';
import InputLabel from '../components/InputLabel';
import NumberInput from "../components/NumberInput";
import TextInput from '../components/TextInput';
import DiceInput from "../components/DiceInput";
import RadioButtonInput from "../components/RadioButtonInput";
import RadioButtonList from "../components/RadioButtonList";

function Create({ onSubmit }) {
  const [ruleset, setRuleset] = useState('DnD');
  const [name, setName] = useState('');
  const [hp, setHp] = useState(1);
  const [armor, setArmor] = useState(10);
  const [toHit, setToHit] = useState(0);
  const [damage, setDamage] = useState({damage: 0, die: 0});
  const [bonusDamage, setBonusDamage] = useState({damage: 0, die: 0});
  const [team, setTeam] = useState('');


  function handleSubmit(event) {
    event.preventDefault();

    const character = {
      name: name,
      hp: hp,
      armor: armor,
      toHit: toHit,
      damage: damage,
      bonusDamage: bonusDamage,
      team: team,
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

  function setRandomValues(){
    setRuleset(getRandomFromArray(['DnD']));
    setName(getRandomFromArray(['Jeff', 'Bob', 'Fred', 'Ann', 'Rose', 'Gina', 'Dark Lord Zu\'ul', 'Orc', 'Gobbo']));
    setHp(getRandom(100));
    setArmor(getRandom(30));
    setToHit(getRandom(15));
    setDamage({amount: getRandom(10), die: getRandom(10)});
    setBonusDamage({amount: getRandom(10), die: getRandom(10)});
    setTeam(getRandomFromArray(['Wunder', 'Zunder']));
  }

  function getRandom(max){
    return Math.floor(Math.random() * max);
  }
  function getRandomFromArray(array){
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <CreateWrapper>
      <CreateHeader>
        Add a new character
      </CreateHeader>
      <form onSubmit={handleSubmit}>
        <RadioButtonList>
          <InputLabel
            name="ruleset"
            onChange={(e) => setRuleset(e.target.value)}>
            DnD
            <RadioButtonInput
              id="radio-DnD"
              name="ruleset"
              value="DnD"
              checked="checked"
              onChange={(e) => setRuleset(e.target.value)} />
          </InputLabel>
          <InputLabel name="ruleset" onChange={(e) => setRuleset(e.target.value)}>
            Let's pretend this is a different ruleset (it's not)
            <RadioButtonInput
              id="other-ruleset"
              name="ruleset"
              value="DnD"
              onChange={(e) => setRuleset(e.target.value)} />
          </InputLabel>
        </RadioButtonList>
        <InputLabel>
          Name:
          <TextInput name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </InputLabel>
        <InputLabel>
          HP:
          <NumberInput name="hp" value={hp} onChange={(e) => setHp(e.target.value)}/>
        </InputLabel>
        {/* TODO Should toggle depending on ruleset */}
        <InputLabel>
          Armor:
          <NumberInput name="armor" value={armor} onChange={(e) => setArmor(e.target.value)}/>
        </InputLabel>
        <InputLabel>
          toHit:
          <NumberInput name="toHit" value={toHit} onChange={(e) => setToHit(e.target.value)}/>
        </InputLabel>
        <InputLabel>
          Main attack damage die:
          <DiceInput name="damage" value={damage} onChange={setDamage}/>
        </InputLabel>
        <InputLabel>
          Once-per-turn bonus damage:
          <DiceInput name="bonus_damage" value={bonusDamage} onChange={setBonusDamage}/>
        </InputLabel>
        <InputLabel>
          Team name:
          <TextInput name="team" value={team} onChange={(e) => setTeam(e.target.value)}/>
        </InputLabel>
        <Button type='button' onClick={() => setRandomValues()}>
          Random values
        </Button>
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
