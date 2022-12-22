import React from "react";
import CompletedLifts from "./CompletedLifts";
import InputLifts from "./InputLifts";

export default function DisplayExercise({
  workouts,
  handleReps,
  handleWeight,
}) {
  const currentExercise = workouts[0].exercise;
  console.log(currentExercise);

  const getExerciseContent = (currentExercise) => {
    let content = [];
    for (let i = 0; i < currentExercise.length; i++) {
      if (currentExercise[i].logged) {
        for (let j = 0; j < currentExercise[i].logged.length; j++) {
          content.push(
            <div key={currentExercise[i].logged[j].id}>
              <h2>Exercise: {currentExercise[i].name}</h2>
              <h3>Input Set:</h3>
              <InputLifts
                selected={currentExercise[i]}
                handleReps={handleReps}
                handleWeight={handleWeight}
              />
              <h2>Completed</h2>
              <CompletedLifts selected={currentExercise[i]} />
            </div>
          );
          j = currentExercise[i].logged.length;
        }
      }
    }
    return content;
  };

  return <>{getExerciseContent(currentExercise)}</>;

  // return <ul>{getAnimalsContent(animals)}</ul>;
  // return (
  //   <>
  //     {currentExercise.map((el, i) => {
  //       return (
  //         <div key={el.logged[i].id}>
  //           <h2>Exercise: {el.name}</h2>
  //           <h3>Set: {el.logged[i].set}</h3>
  //           {/* change to Input Set: */}
  //           <InputLifts selected={el} handleReps={handleReps} handleWeight={handleWeight}/>
  //           <h2>Completed</h2>
  //           <CompletedLifts selected={el}/>
  //         </div>
  //       )
  //     })}
  //   </>
  // );
}
