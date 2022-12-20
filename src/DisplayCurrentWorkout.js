import React, { useState } from "react";
import CompletedLifts from "./CompletedLifts";
// import { v4 as uuidv4 } from 'uuid'

export default function DisplayCurrentWorkout({ workouts, handleAddSet }) {
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  function handleReps(e) {
    setReps(e.target.value);
  }

  function handleWeight(e) {
    setWeight(e.target.value);
  }

  const workoutExercises = workouts[0].exercise;
  return (
    <>
      {workouts.map((el, i) => {
        // console.log(workouts)
        // console.log(workouts[0].exercise)
        // console.log(el)

        return (
          <div key={el.id}>
            <h1>{el.templateName}</h1>
            {/* <h2>Exercise: {el.exercise[i].name}</h2> */}
            {workoutExercises.map((el, i) => {
              return (
                <div key={el.logged[i].id}>
                  <h2>Exercise: {el.name}</h2>
                  <h3 htmlFor="exSet">Set: {el.logged[i].set}</h3>
                  <input
                    type="text"
                    id="exReps"
                    onChange={handleReps}
                  />
                  <span>Reps @</span>
                  <input
                    type="text"
                    id="exWeight"
                    onChange={handleWeight}
                  />
                  <button onClick={() => handleAddSet(reps, weight, workouts.id)}>
                    Add Set
                  </button>
                  <div>
                    <h2>Completed</h2>
                    <CompletedLifts completed={workoutExercises} />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
