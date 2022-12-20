import React from 'react'

export default function CompletedLifts({completed}) {
    const workoutLog = completed[0].exercise[0].logged
    // console.log(workoutLog)
    // const oof = completed.map(el => el)
    // console.log(oof)
  return (
    workoutLog.map((el,i) => {
        // console.log(completed)
        // console.log(el.exercise[i].logged[i].id)
        return (
        <li key={el.id}>Set {el.set}: {el.reps} Reps @ {el.weight} lbs</li>
        )
    })
  )
}
