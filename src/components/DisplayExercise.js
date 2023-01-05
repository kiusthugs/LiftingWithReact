import React, {useState, useEffect, useContext} from "react";
import CompletedLifts from "./CompletedLifts";
import InputLifts from "./InputLifts";
import WorkoutHistory from "./WorkoutHistory"
import { ExerciseContext } from "./App";

export default function DisplayExercise({
  workouts,
  handleReps,
  handleWeight,
}) {

  const { handleClearWorkout } = useContext(ExerciseContext);
  //not working yet

  const [items, setItems] = useState()
  const [history, setHistory] = useState(false)
  // const [storageData, setStorageData] = useState([])


  useEffect(() => {
  console.log(items)
  if(items) {
    localStorage.setItem('liftingWithReact', JSON.stringify(items))
  }
  }, [items])

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('liftingWithReact'))
    setStorageLifts(storage)
    console.log(storage)
  // setStorageData(storage)
}, [items])

  const [storageLifts, setStorageLifts] = useState(JSON.parse(localStorage.getItem('liftingWithReact')))


  const currentExercise = workouts[0].exercise;

  function workoutStorage() {
    // console.log(items)
    // console.log(storageLifts)

    function checkArrMatch() {
      console.log("functioning")
      console.log(storageLifts)
      console.log(workouts)
      for (let i = 0; i < storageLifts.length; i++) {
        if(storageLifts[i].templateName === workouts[0].templateName) {
          console.log("same name")
          storageLifts[i] = workouts[0]
          console.log(storageLifts)
          return storageLifts
        } 
      }
      console.log("no matching after loop")
      storageLifts.push(workouts[0])
      setItems(storageLifts)
    }


    if(storageLifts) {
      console.log("storage exists")
      setItems(checkArrMatch)
      setHistory(true)
      // handleClearWorkout(workouts)
    } else {
      console.log("else")
      console.log(workouts)
      setItems(workouts)
      setHistory(true)
      // handleClearWorkout(workouts)
    }
  }

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
          )
          j = currentExercise[i].logged.length
        }
      }
    }
    return content;
  };

  return <>
  {getExerciseContent(currentExercise)}
  <button onClick={() => workoutStorage(workouts)}>Save</button>
  {history === true && <h1>History</h1>}
  {history === true && <WorkoutHistory storageLifts={storageLifts}/>}
  </>
}
