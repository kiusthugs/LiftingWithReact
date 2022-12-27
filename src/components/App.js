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
  const exerciseContextValue = {
    handleAddSet,
    handleTemplate,
    handleTemplateSelected
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
    // setTemplateLibrary([...templateLibrary, newTemp])
    console.log(templateLibrary)
    // setCompleted(newTemplateObj)
  }

  function handleTemplateSelected(e, template){
    console.log(e)
    console.log(template)
    if (e.target.closest("[data-template]")) {
      setCompleted([template])
    }
  }

  function handleAddSet(r, w, list, id) {
    // console.log(id)
    console.log(list)
    const matchExercise = completed[0].exercise.filter((el) => el.id === id)

    console.log(list.logged)
    const newCompleteLog = {
        id: uuidv4(),
        set: list.logged.length,
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
      {templateLibrary && <DisplayTemplateLibrary templateLibrary={templateLibrary}/>}
    </ExerciseContext.Provider>
  );
}


export default App;
