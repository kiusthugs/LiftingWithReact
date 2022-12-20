import "./App.css";
import React, {useState} from "react"
// import profile from "./images/defaultprofile.jpeg";
import DisplayCurrentWorkout from "./DisplayCurrentWorkout";
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
  }

  function handleAddSet(r, w, id) {
    // console.log(id)
    const matchExercise = completed[0].exercise.filter((el) => el.id === id)
    console.log(completed)

    const newCompleteLog = {
        id: uuidv4(),
        set: 2,
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

    console.log(updateCompleted)
    
    setCompleted(updateCompleted)
  }

  return (
    <ExerciseContext.Provider value={exerciseContextValue}>
      <DisplayCurrentWorkout workouts={completed} handleAddSet={handleAddSet}/>
    </ExerciseContext.Provider>
  );
}


export default App;
