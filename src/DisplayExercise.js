import React from "react";
import CompletedLifts from "./CompletedLifts";
import InputLifts from "./InputLifts";

export default function DisplayExercise({ workouts }) {
  const currentExercise = workouts[0].exercise;
  return (
    <>
      {currentExercise.map((el, i) => {
        return (
          <div key={el.logged[i].id}>
            <h2>Exercise: {el.name}</h2>
            <h3>Set: {el.logged[i].set}</h3>
            <InputLifts selected={el}/>
            {/* <h3 htmlFor="exSet">Set: {el.logged[i].set}</h3>
            <input type="text" id="exReps"/>
            <span>Reps @</span>
            <input type="text" id="exWeight"/> */}
            {/* <button
              className="addBtn"
              id={workoutExercises[i].id}
              onClick={() => {
                handleAddSet(reps, weight, workoutExercises[i].id);
              }}
            >
              Add Set
            </button> */}
            <CompletedLifts selected={el}/>
            {/* <div>
              <h2>Completed</h2>
              <CompletedLifts
                completed={filteredList(workoutExercises, el.id)}
              />
            </div> */}
          </div>
        );
      })}
    </>
  );
}
