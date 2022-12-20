import React, { useState } from "react";
import CompletedLifts from "./CompletedLifts";
// import { v4 as uuidv4 } from 'uuid'

export default function DisplayCurrentWorkout({ workouts, handleAddSet, handleExerciseSelect }) {
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
//   const [selectedId, setSelectedId] = useState()
//   const selectedExercise = workouts.find(el => el.id === selectedExerciseId )
//   console.log(selectedExercise)

//   function handleExerciseSelect(id) {
//     setExerciseRecipeId(id)
//   }

  function handleReps(e) {
    setReps(e.target.value);
  }

  function handleWeight(e) {
    setWeight(e.target.value);
  }

  const workoutExercises = workouts[0].exercise;

  //   const orderedExercises = useRef(null)

  //   useEffect(() => {
  //     orderedExercises.current = document.getElementsByClassName('addBtn')
  //   })

  return (
    <>
      {workouts.map((el, i) => {
        return (
          <div key={el.id}>
            <h1>{el.templateName}</h1>
            {/* <h2>Exercise: {el.exercise[i].name}</h2> */}
            {workoutExercises.map((el, i) => {
              return (
                <div key={el.logged[i].id}>
                  <h2>Exercise: {el.name}</h2>
                  <h3 htmlFor="exSet">Set: {el.logged[i].set}</h3>
                  <input type="text" id="exReps" onChange={handleReps} />
                  <span>Reps @</span>
                  <input type="text" id="exWeight" onChange={handleWeight} />
                  <button
                    className="addBtn"
                    id={workoutExercises[i].id}
                    onClick={()=> {handleAddSet(reps, weight, workoutExercises[i].id)}
                    }
                  >
                    Add Set
                  </button>
                  <div>
                    <h2>Completed</h2>
                    <CompletedLifts
                      completed={workoutExercises}
                    />
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
