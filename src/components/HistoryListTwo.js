import React from 'react'

export default function HistoryListTwo({currentLog}) {

    console.log(currentLog)
  return (
    <>
    <li key={currentLog.id}>Set {currentLog.set}: {currentLog.reps} Reps @ {currentLog.weight}lbs</li>
    </>
  )
}
