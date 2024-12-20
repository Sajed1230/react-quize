import { useEffect } from "react"

function Timer({dispatch,secondsRenaining}){
const mins=Math.floor(secondsRenaining /60)
const seconds= secondsRenaining %60;   

useEffect(function(){
  const id =setInterval(function(){
    dispatch({type:'tick'})
},1000);
return ()=> clearInterval(id);

    },[dispatch])
return (

<div className="timer">{mins <10 &&"0"}{mins}:{seconds <10 &&"0"}{seconds}</div>


)

}
export default Timer