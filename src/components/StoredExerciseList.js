import React from 'react'

export default function StoredExerciseList({templateExercises}) {
    console.log(templateExercises)
  return (
    templateExercises.map((exercise) => {
        return <li key={exercise.id}>{exercise.name}</li>
    })
  )
}
