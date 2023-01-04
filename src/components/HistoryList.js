import React from 'react'

export default function HistoryList({exerciseComplete}) {

    console.log(exerciseComplete)
    const log = exerciseComplete
  return (
    <div>
    <ul>
        {log.map((el) => {
            let listItem
            if (el.weight){
                listItem = <li key={el.id}>Set {el.set}: {el.reps} Reps @ {el.weight}lbs</li>
            }
            return listItem
        })}
    </ul>
    </div>
  )
}
