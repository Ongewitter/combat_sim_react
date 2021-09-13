import React from "react";
import styled from 'styled-components';

import InputWithLabel from '../components/InputWithLabel';
import TextInput from '../components/TextInput';

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
          Name:
          <input type="text" name="name" />
        </InputWithLabel>
        <InputWithLabel>
          HP:
          <input type="number" name="hp" />
        </InputWithLabel>
        {/* TODO Should toggle depending on ruleset */}
        <InputWithLabel>
          Armor:
          <input type="number" name="armor" />
        </InputWithLabel>
        <InputWithLabel>
          toHit:
          <input type="number" name="toHit" />
        </InputWithLabel>
        <InputWithLabel>
          Main attack damage die:
          <input type="number" name="damage_amount" /> d <input type="number" name="damage_die" />
        </InputWithLabel>
        <InputWithLabel>
          Once-per-turn bonus damage:
          <input type="number" name="damage_amount" /> d <input type="number" name="damage_die" />
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
