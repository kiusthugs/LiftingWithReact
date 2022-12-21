import React from "react";
import CompletedLifts from "./CompletedLifts";
import InputLifts from "./InputLifts";

export default function DisplayExercise({ workouts, handleReps, handleWeight }) {
  const currentExercise = workouts[0].exercise;
  console.log(workouts)
  return (
    <>
      {currentExercise.map((el, i) => {
        return (
          <div key={el.logged[i].id}>
            <h2>Exercise: {el.name}</h2>
            <h3>Set: {el.logged[i].set}</h3>
            <InputLifts selected={el} handleReps={handleReps} handleWeight={handleWeight}/>
            <h2>Completed</h2>
            <CompletedLifts selected={el}/>
          </div>
        );
      })}
    </>
  );
}
