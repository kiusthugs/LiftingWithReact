import React, {useState, useEffect} from "react";
import CompletedLifts from "./CompletedLifts";
import InputLifts from "./InputLifts";
import WorkoutHistory from "./WorkoutHistory"

export default function DisplayExercise({
  workouts,
  handleReps,
  handleWeight,
}) {

  const [items, setItems] = useState()
  const [history, setHistory] = useState(false)
  // const [storageData, setStorageData] = useState([])

  useEffect(() => {
      const storage = JSON.parse(localStorage.getItem('liftingWithReact'))
      console.log(storage)
    // setStorageData(storage)
  }, [items])

  useEffect(() => {
  console.log(items)
  if(items) {
    localStorage.setItem('liftingWithReact', JSON.stringify(items))
  }
  }, [items])


  const currentExercise = workouts[0].exercise;

  function workoutStorage(workouts) {
    console.log(workouts)
    console.log(items)
    // const originalItem = [...items, ]
    
    function workoutName() {
      return workouts[0].templateName
    }

    if (items) {
      console.log(items)
      if (items.some(workoutName) || items.templateName === workoutName) {
        console.log("same same")
        console.log(items)
        //replace
        const copyItems = items
        const idx = items.findIndex(item => item.templateName === workouts[0].templateName)

        copyItems[idx] = workouts[0]
        console.log(copyItems)
        setItems(...items)
        setHistory(true)
        return
      } 
      else {
        console.log("else")
        console.log(items)
        console.log(workouts)
        setItems(...items, workouts)
        setHistory(true)
        return
      }
    }

    setItems(workouts)
    setHistory(true)
    // console.log(storageData)
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
          );
          j = currentExercise[i].logged.length;
        }
      }
    }
    return content;
  };

  return <>
  {getExerciseContent(currentExercise)}
  <button onClick={() => workoutStorage(workouts)}>Save</button>
  {history === true && <h1>History</h1>}
  {history === true && <WorkoutHistory history={workouts}/>}
  </>
}
