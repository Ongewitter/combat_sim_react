import React from "react";
import styled from 'styled-components';

function DiceInput({onChange, value, ...props}) {
  const [amount, setAmount] = React.useState(0);
  const [die, setDie] = React.useState(0);

  function amountChanged(value) {
    setAmount(value)
    onChange({
      amount: amount,
      die: die
    });
  }

  function dieChanged(value) {
    setDie(value)
    onChange({
      amount: amount,
      die: die
    });
  }

  return (
    <S.DiceDiv>
      <S.Input
        type="number"
        name={props.name + '_amount'}
        value={value.amount}
        onChange={(e) => amountChanged(e.target.value)}/> 🎲  <S.Input
                  type="number"
                  value={value.die}
                  name={props.name + '_die'}
                  onChange={(e) => dieChanged(e.target.value)} />
    </S.DiceDiv>
  );
}

export default DiceInput;

const S = {};
S.Input = styled.input``;
S.DiceDiv = styled.div``;
