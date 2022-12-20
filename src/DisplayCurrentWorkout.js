import React, { useState } from "react";
import CompletedLifts from "./CompletedLifts";
// import { v4 as uuidv4 } from 'uuid'

export default function DisplayCurrentWorkout({
  workouts,
  handleAddSet,
  completed,
}) {
  // let workingComplete = [{
  //         id: uuidv4(),
  //         set: 1,
  //         reps: 0,
  //         weight: 0
  //       }
  // ]

  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  function handleReps(e) {
    setReps(e.target.value);
  }

  function handleWeight(e) {
    setWeight(e.target.value);
  }

  return (
    <>
      {workouts.map((el, i) => {
        return (
          <div key={el.id}>
            <h1>{el.templateName}</h1>
            <h2>Exercise: {el.exercise[i].name}</h2>
            <div key={el.id+1}>
              <h3 htmlFor="exSet">
                Set: {el.exercise[i].logged[i].set}
              </h3>
              <input
                type="text"
                id="exReps"
                onChange={handleReps}
                value={reps}
              />
              <span>Reps @</span>
              <input
                type="text"
                id="exWeight"
                onChange={handleWeight}
                value={weight}
              />
              <button onClick={() => handleAddSet(reps, weight)}>
                Add Set
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <h2>Completed</h2>
        <CompletedLifts completed={workouts} />
      </div>
      </>
  );
}
