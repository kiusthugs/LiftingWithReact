import React, { useState, useContext } from "react";
import TemplateList from "./TemplateList";
import { v4 as uuidv4 } from "uuid";
import { ExerciseContext } from "./App";

export default function InputTemplate() {
  const { handleTemplate } = useContext(ExerciseContext);

  const [tempExercise, setTempExercise] = useState();
  const [tempName, setTempName] = useState();
  const [exerciseArr, setExerciseArr] = useState([]);

  let exerciseObj = {
    id: uuidv4(),
    name: "Bench",
    logged: [
      // {
      //   id: uuidv4(),
      //   set: 1,
      //   reps: 0,
      //   weight: 0,
      // },
      {id: uuidv4()}
    ],
  };

  function addExerciseList(exercise) {
    setExerciseArr([...exerciseArr, exercise]);
  }

  return (
    <div>
      <h1>Template Maker</h1>
      <h2>Workout Template Name</h2>
      <input
        type="text"
        id="templateInput"
        placeholder="Example: Leg Day"
        onChange={(e) => {
          setTempName(e.target.value);
        }}
      />
      <h2>Exercise Selection</h2>
      <input
        type="text"
        id="templateSelection"
        onChange={(e) => {
          setTempExercise(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          exerciseObj.name = tempExercise;
          addExerciseList(exerciseObj);
        }}
      >
        +
      </button>
      <br />
      <TemplateList exerciseList={exerciseArr} tempName={tempName} />
      <button
        onClick={() => {
          handleTemplate(exerciseArr, tempName)
          setExerciseArr([])
        }}
      >
        Save
      </button>
    </div>
  );
}
