import React from 'react'

export default function CompletedLifts({selected}) {
    const workoutLog = selected.logged
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
