import React from 'react'
import HistoryList from './HistoryList'


export default function WorkoutHistory({history}) {
    // Display last session lift
    // Display history dependent on current workout template selected
    console.log("History")
    console.log(history)

    const historyData = history[0].exercise

    return (
      historyData.map((ele) => {
        console.log(ele)
        return(
        <div key={ele.id}>
          <h4>{ele.name}</h4>
          <HistoryList exerciseComplete={ele.logged}/>
        </div>
        )
      })
    )
    
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
