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

  function handleAddSet(r, w, id) {

    const newCompleteLog = {
        id: uuidv4(),
        set: 2,
        reps: r,
        weight: w
    }

    const updateCompleted = [{
      ...completed[0],
      exercise: [
        {...completed[0].exercise[0], logged: [...completed[0].exercise[0].logged, newCompleteLog]}, {...completed[0].exercise[1]}
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
