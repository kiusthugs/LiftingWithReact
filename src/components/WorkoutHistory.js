import React from 'react'
import HistoryList from './HistoryList'


export default function WorkoutHistory({history}) {
    // Display last session lift
    // Display history dependent on current workout template selected

    const historyData = history[0].exercise
    // const storage = JSON.parse(localStorage.getItem('PullDay'))
    // console.log(storage)

    return (
      historyData.map((ele) => {
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
