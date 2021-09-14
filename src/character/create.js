import React from "react";
import styled from 'styled-components';

import InputWithLabel from '../components/InputWithLabel';
import NumberInput from "../components/NumberInput";
import TextInput from '../components/TextInput';
import DiceInput from "../components/DiceInput";

function Create() {
  return (
    <CreateWrapper>
      <CreateHeader>
        Add a new character
      </CreateHeader>
      <form>
        <InputWithLabel>
          Name:
          <TextInput name="name"/>
        </InputWithLabel>
        <InputWithLabel>
          HP:
          <NumberInput name="hp" />
        </InputWithLabel>
        {/* TODO Should toggle depending on ruleset */}
        <InputWithLabel>
          Armor:
          <NumberInput name="armor" />
        </InputWithLabel>
        <InputWithLabel>
          toHit:
          <NumberInput name="toHit" />
        </InputWithLabel>
        <InputWithLabel>
          Main attack damage die:
          <DiceInput name="damage" />
        </InputWithLabel>
        <InputWithLabel>
          Once-per-turn bonus damage:
          <DiceInput name="bonus_damage" />
        </InputWithLabel>
        <input type="submit" value="Add character" />
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
