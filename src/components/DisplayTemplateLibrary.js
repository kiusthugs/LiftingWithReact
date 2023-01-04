import React, {useContext} from 'react'
import StoredExerciseList from "./StoredExerciseList"
import { ExerciseContext } from "./App";


export default function DisplayTemplateLibrary({templateLibrary}) {
    const { handleTemplateSelected } = useContext(ExerciseContext);

    const getExerciseContent = (templateLibrary) => {
        let content = [];
        for (let i = 0; i < templateLibrary.length; i++) {
            for (let j = 0; j < templateLibrary[i].exercise.length; j++) {
              content.push(
              <div key={templateLibrary[i].exercise[j].id} data-template={templateLibrary[i].exercise[j].id} onClick={(e) => handleTemplateSelected(e,templateLibrary[i])}>
                <h2>{templateLibrary[i].templateName}</h2>
                <ul>
                <StoredExerciseList templateExercises={templateLibrary[i].exercise}/>
                </ul>
              </div>
              );
              j = templateLibrary[i].exercise.length;
            }
        }
        return content;
      };

      return <><h1>Template Libary</h1>{getExerciseContent(templateLibrary)}</>;
}
