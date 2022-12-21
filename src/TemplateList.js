import React from 'react'

export default function TemplateList({exerciseList, tempName}) {

  return (
    <div>
        {exerciseList.map((el) => {
            return(
                <li key={el.id}>{el.name}</li>
            )
        })}
    </div>
  )
}
