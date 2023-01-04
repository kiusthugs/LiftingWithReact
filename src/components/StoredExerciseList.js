import React from 'react'

export default function StoredExerciseList({templateExercises}) {
  return (
    templateExercises.map((exercise) => {
        return <li key={exercise.id}>{exercise.name}</li>
    })
  )
}
