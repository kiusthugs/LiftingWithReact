import React from "react";
// import CompletedLifts from "./CompletedLifts";
import DisplayExercise from "./DisplayExercise"
// import { v4 as uuidv4 } from 'uuid'

export default function DisplayCurrentWorkout({
  workouts,
}) {
//   const workoutExercises = workouts[0].exercise;

  return (
    <>
      {workouts.map((el) => {
        return (
        <div key={el.id}>
        <h1>{el.templateName}</h1>
        <DisplayExercise workouts={workouts}/>
        </div>
        )
      })}
    </>
  );
}
