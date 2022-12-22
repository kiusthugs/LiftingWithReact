import React from 'react'
import StoredExerciseList from "./StoredExerciseList"


export default function DisplayTemplateLibrary({templateLibrary}) {
    console.log(templateLibrary)
    const getExerciseContent = (templateLibrary) => {
        let content = [];
        console.log(templateLibrary[0][0])
        for (let i = 0; i < templateLibrary.length; i++) {
            for (let j = 0; j < templateLibrary[i].exercise.length; j++) {
                console.log("here")
              content.push(
              <div key={templateLibrary[i].exercise[j].id}>
                <h2>{templateLibrary[i].templateName}</h2>
                <StoredExerciseList templateExercises={templateLibrary[i].exercise}/>
              </div>
              );
              j = templateLibrary[i].exercise.length;
            }
        }
        return content;
      };

      return <>{getExerciseContent(templateLibrary)}</>;
//   return (
//     <div>
//         {/* {templateLibrary.map((el, i) => {
//             console.log(el)
//             return <li key={el[i].id}>{el[i].templateName}</li>
//         })} */}
//     </div>
//   )
}
