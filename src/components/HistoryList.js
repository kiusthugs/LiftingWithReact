import React from 'react'

export default function HistoryList({exercises}) {

    console.log(exercises)
    // const liftInputs = exercises.logged
    // console.log(liftInputs)


    const historyLogList = (exer, i) => {
      let content = []
      for (let j = 0; j < exer[i].logged.length; j++) {
        if(exer[i].logged[j].weight) {
          content.push(<li key={exer[i].logged[j].id}>Set {exer[i].logged[j].set}: {exer[i].logged[j].reps} reps @ {exer[i].logged[j].weight} lbs</li>)
        }
      }
      return content
    }

    // const historyLog = (exer) => {
    //   let content = []
    //   for (let i = 0; i < exer.length; i++) {
    //     content.push(<div key={exer[i].id}>
    //     <h5>{exer[i].name}</h5>
    //     {historyLogList(exercises)}
    //     </div> 
    //     )
    //   }
    //   return content
    // }

    const historyLog = (exer) => {
      let content = []
      for (let i = 0; i < exer.length; i++) {
        content.push(<div key={exer[i].id}>
        <h5>{exer[i].name}</h5>
        {historyLogList(exercises, i)}
        </div>)
      }
      return content
    }

  return (
    <>
    {historyLog(exercises)}
    </>
    // <div>
    // <ul>
    //     {liftInputs.map((el) => {
    //         let listItem
    //         if (el.logged.weight){
    //             listItem = <li key={el.id}>Set {el.set}: {el.reps} Reps @ {el.weight}lbs</li>
    //         }
    //         return (listItem)
    //     })}
        
    // </ul>
    // </div>
  )
}
