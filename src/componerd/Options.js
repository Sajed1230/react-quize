function Options ({question,answer,dispatch}){
const handlanswer=answer !== null;
return <div>
            <div className="options" >
        {question.options.map((option,index)=><button className={`btn btn-option ${index === answer ? 'answer':""}${handlanswer?index === question.correctOption ? "correct" :"wrong":""}`}
        
        onClick={()=>dispatch({type:"newAnswer",payload:index})}  disabled={handlanswer} key={option}>{option}</button>)}
    </div>

    </div>

}
export default Options