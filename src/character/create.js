import React from "react";

function Create() {
  return (
    <div>
      <header>
        Add a new character
      </header>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          HP:
          <input type="number" name="hp" />
        </label>
        {/* TODO Should toggle depending on ruleset */}
        <label>
          Armor:
          <input type="number" name="armor" />
        </label>
        <label>
          toHit:
          <input type="number" name="toHit" />
        </label>
        <label>
          Main attack damage die:
          <input type="number" name="damage_amount" /> d <input type="number" name="damage_die" />
        </label>
        <label>
          Once-per-turn bonus damage:
          <input type="number" name="damage_amount" /> d <input type="number" name="damage_die" />
        </label>
        <input type="submit" value="Add character" />
      </form>
    </div>
  );
}

export default Create;
