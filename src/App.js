import "./App.css";
import React, {useState} from "react"
// import profile from "./images/defaultprofile.jpeg";
import DisplayCurrentWorkout from "./DisplayCurrentWorkout";
import InputTemplate from "./InputTemplate"
import { v4 as uuidv4 } from 'uuid'

export const ExerciseContext = React.createContext()

function App() {

  const createdWorkouts = [{
    id: uuidv4(),
    templateName: "Push Day",
    exercise: [{
      id: uuidv4(),
      name: "Bench",
      logged: [{
        id: uuidv4(),
        set: 1,
        reps: 0,
        weight: 0
      },
      {
        id: uuidv4(),
        set: 2,
        reps: 0,
        weight: 0
      }
      ],
    }, {
      id: uuidv4(),
      name: "Tricep Pushdown",
      logged: [{
        id: uuidv4(),
        set: 1,
        reps: 0,
        weight: 0
      },
      {
        id: uuidv4(),
        set: 2,
        reps: 0,
        weight: 0
      }
      ],
    }]
  }]

  const [completed, setCompleted] = useState(createdWorkouts)

  const exerciseContextValue = {
    handleAddSet,
    handleTemplate
    // setTemplateState,
    // templateState
  }

  function handleTemplate(arr, tempName) {
    console.log(createdWorkouts)
    const newTemplateObj = [{
      id: uuidv4(),
      templateName: tempName,
      exercise: [...arr]
    }]
    console.log(newTemplateObj)
    setCompleted(newTemplateObj)
  }

  function handleAddSet(r, w, list, id) {
    // console.log(id)
    console.log(list)
    const matchExercise = completed[0].exercise.filter((el) => el.id === id)

    const newCompleteLog = {
        id: uuidv4(),
        set: list.logged.length + 1,
        reps: r,
        weight: w
    }

    matchExercise[0].logged.push(newCompleteLog)

    // const updateCompleted = [{
    //   ...completed[0],
    //   exercise: [
    //     {...completed[0].exercise[0], logged: [...completed[0].exercise[0].logged, matchExercise]}, {...completed[0].exercise[1]}
    //   ]
    // }]

    const updateCompleted = [{
      ...completed[0]
    }]

    // console.log(updateCompleted)
    console.log(completed)
    
    setCompleted(updateCompleted)
  }

  return (
    <ExerciseContext.Provider value={exerciseContextValue}>
      <DisplayCurrentWorkout workouts={completed} handleAddSet={handleAddSet}/>
      <InputTemplate />
    </ExerciseContext.Provider>
  );
}


export default App;
