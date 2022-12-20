import React, {useContext} from "react";
import {ExerciseContext} from './App'

export default function InputLifts({ selected }) {
    const {handleAddSet} = useContext(ExerciseContext)
  return (
    <div>
      <input type="text" id="exReps" />
      <span>Reps @</span>
      <input type="text" id="exWeight" />
      <button
        className="addBtn"
        onClick={() => {
          handleAddSet(250, 250, selected.id);
        }}
      >
        Add Set
      </button>
    </div>
  );
}
