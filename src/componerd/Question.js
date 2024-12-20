import Options from "./Options";

function Question({dispatch ,answer,question}){
    return<div>
    
    <h4>{question.question}</h4>
   <Options question={question} dispatch={dispatch} answer={answer}/>
    </div>

    
}

export default Question;