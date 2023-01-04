import "../App.css"
import React, {useState} from "react"
// import profile from "./images/defaultprofile.jpeg";
import DisplayCurrentWorkout from "./DisplayCurrentWorkout";
import InputTemplate from "./InputTemplate"
import DisplayTemplateLibrary from "./DisplayTemplateLibrary"
import { v4 as uuidv4 } from 'uuid'

export const ExerciseContext = React.createContext()

function App() {

  // const createdWorkouts = [{
  //   id: uuidv4(),
  //   templateName: "Push Day",
  //   exercise: [{
  //     id: uuidv4(),
  //     name: "Bench",
  //     logged: [{
  //       id: uuidv4(),
  //       set: 1,
  //       reps: 0,
  //       weight: 0
  //     },
  //     {
  //       id: uuidv4(),
  //       set: 2,
  //       reps: 0,
  //       weight: 0
  //     }
  //     ],
  //   }, {
  //     id: uuidv4(),
  //     name: "Tricep Pushdown",
  //     logged: [{
  //       id: uuidv4(),
  //       set: 1,
  //       reps: 0,
  //       weight: 0
  //     },
  //     {
  //       id: uuidv4(),
  //       set: 2,
  //       reps: 0,
  //       weight: 0
  //     }
  //     ],
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "Shoulder Press",
  //     logged: [{
  //       id: uuidv4(),
  //       set: 1,
  //       reps: 0,
  //       weight: 0
  //     },
  //     {
  //       id: uuidv4(),
  //       set: 2,
  //       reps: 0,
  //       weight: 0
  //     }
  //     ],
  //   }
  // ]
  // }]

  const [completed, setCompleted] = useState([])
  const [templateLibrary, setTemplateLibrary] = useState()
  const [temp, setTemp] = useState([])
  const exerciseContextValue = {
    handleAddSet,
    handleTemplate,
    handleTemplateSelected,
    handleClearSave
  }

  function handleTemplate(arr, tempName) {
    const newTemplateObj = [{
      id: uuidv4(),
      templateName: tempName,
      exercise: [...arr],
    }]

    const newTemp = newTemplateObj[0]

    setTemplateLibrary(() => {
      if(templateLibrary) {
        return [...templateLibrary, newTemp]
      } else {
        return newTemplateObj
      }
    })
  }

  function handleTemplateSelected(e, template){
    if (e.target.closest("[data-template]")) {
      setTemp([template])
      setCompleted([template])
    }
  }

  function handleClearSave() {
    console.log("clicked")
    // for (let i = 0; i <= temp.length; i++) {
    //   console.log("1st")
    //   for (let j = 0; j < temp[i].exercise.length; j++) {
    //     for (let k = 0; k < temp[i].exercise[j].logged.length; k++) {
    //       if (temp[i].exercise[j].logged.length > 1) {
    //         console.log("here")
    //         console.log(temp[i].exercise[j].logged.length)
    //         console.log(temp[i].exercise[j].logged[k])
    //         temp[i].exercise[j].logged.pop()
    //       }
    //     }
    //   }
    // }

    console.log(temp)
  }

  function handleAddSet(r, w, list, id) {
    const matchExercise = completed[0].exercise.filter((el) => el.id === id)

    const newCompleteLog = {
        id: uuidv4(),
        set: list.logged.length,
        reps: r,
        weight: w
    }

    matchExercise[0].logged.push(newCompleteLog)

    const updateCompleted = [{
      ...completed[0]
    }]
    
    setCompleted(updateCompleted)
  }

  return (
    <ExerciseContext.Provider value={exerciseContextValue}>
      <DisplayCurrentWorkout workouts={completed} handleAddSet={handleAddSet}/>
      <InputTemplate />
      {templateLibrary && <DisplayTemplateLibrary templateLibrary={templateLibrary}/>}
    </ExerciseContext.Provider>
  );
}


export default App;
