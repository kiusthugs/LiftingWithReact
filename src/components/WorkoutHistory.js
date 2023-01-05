import React, {useContext} from 'react'
import HistoryList from './HistoryList'
import { ExerciseContext } from "./App";

export default function WorkoutHistory({storageLifts}) {
    // Display last session lift
    // Display history dependent on current workout template selected
    const { selectedTemplate } = useContext(ExerciseContext);
  //setSelectedTemplate
    // const historyData = history[0].exercise
    const template = selectedTemplate.templateName
    // const storage = JSON.parse(localStorage.getItem('PullDay'))
    // console.log(storage)

    if(storageLifts) {
      let matchWorkoutObj = storageLifts.find(o => o.templateName === template)
      return (
          // return(
          // <div key={ele.id}>
          //   <h4>{ele.name}</h4>
          //   <HistoryList exerciseComplete={ele.logged}/>
          // </div>
          // ))
          <div key={matchWorkoutObj.id}>
            <h4>{matchWorkoutObj.templateName}</h4>
            <HistoryList exercises={matchWorkoutObj.exercise}/>
          </div>
      )
    }
    
    // const data = (el) => {
    //   console.log("here")
      // let content = []
      // for (let i = 0; i < el.length; i++) {
      //   for (let j = 0; j < el[i].exercise.length; j++) {
      //     content.push(
            // <div>
            //   <h3>{el[i].templateName}</h3>
            //   <HistoryList exerciseComplete={el[i].exercise[j]}/>
            // </div>
      //     )
      //   }
      // }
    // }
  // return (
  //   <>{data(history[0].exercise)}</>
  // )
}
