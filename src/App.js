import "./App.css";
import React, {useState} from "react"
// import profile from "./images/defaultprofile.jpeg";
import DisplayCurrentWorkout from "./DisplayCurrentWorkout";
import { v4 as uuidv4 } from 'uuid'

function App() {
  const createdWorkouts = [{
    id: uuidv4(),
    templateName: "Push Day",
    exercise: [{
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

  function handleAddSet(r, w) {
    const newCompleteLog = {
        id: uuidv4(),
        set: 2,
        reps: r,
        weight: w
    }

    const updateCompleted = [{
      ...completed,
      exercise: [
        {...completed[0].exercise[0], logged: [...completed[0].exercise[0].logged, newCompleteLog]}
      ]
    }]
    
    setCompleted(updateCompleted)
    console.log(completed)
  }

  return (
    <div>
      <DisplayCurrentWorkout workouts={completed} handleAddSet={handleAddSet}/>
    </div>
  );
}


export default App;
