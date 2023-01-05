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

  // function workoutStorage(workouts) {
  //   console.log(workouts)
  //   console.log(items)
    
  //   function workoutName() {
  //     return workouts[0].templateName
  //   }

  //   if (items) {
  //     console.log(items)
  //     if (items.some(workoutName) || items.templateName === workoutName) {
  //       console.log("same")
  //       console.log(items)
  //       const copyItems = items
  //       const idx = items.findIndex(item => item.templateName === workouts[0].templateName)

  //       copyItems[idx] = workouts[0]
  //       console.log(copyItems)
  //       setItems(...items)
  //       setHistory(true)
  //       return
  //     } 
  //     else {
  //       console.log("else")
  //       console.log(items)
  //       console.log(workouts)
  //       setItems(...items, workouts)
  //       setHistory(true)
  //       return
  //     }
  //   }

  //   setItems(workouts)
  //   setHistory(true)
  // }

  function workoutStorage() {
    // console.log(items)
    // console.log(storageLifts)
    function checkArrMatch() {
      console.log("fucntioning")
      console.log(storageLifts)
      console.log(workouts)
      for (let i = 0; i < storageLifts.length; i++) {
        if(storageLifts[i].templateName === workouts[0].templateName) {
          console.log("name")
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
      setItems(checkArrMatch)
      setHistory(true)
    } else {
      console.log("else")
      console.log(workouts)
      setItems(workouts)
      setHistory(true)
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
  {history === true && <WorkoutHistory history={workouts} storageLifts={storageLifts}/>}
  </>
}
