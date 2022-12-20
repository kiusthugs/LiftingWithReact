import React, { useContext, useState } from "react";
import { ExerciseContext } from "./App";

export default function InputLifts({ selected}) {
  const { handleAddSet } = useContext(ExerciseContext);

  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  function handleReps(e) {
    setReps(e.target.value);
  }

  function handleWeight(e) {
    setWeight(e.target.value);
  }


  return (
    <div>
      <input type="text" id="exReps" onChange={handleReps} />
      <span>Reps @</span>
      <input type="text" id="exWeight" onChange={handleWeight} />
      <button
        className="addBtn"
        onClick={() => {
          handleAddSet(reps, weight, selected.id);
        }}
      >
        Add Set
      </button>
    </div>
  );
}
