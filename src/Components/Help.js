import React, { useState,useEffect } from 'react'
import { HELP_URL } from '../utils/constants';
import useSection from '../utils/useSection';


const Help = () => {
    const [visibleSection, setVisibleSection] = useState("");
    const [question,setQuestion]=useState([])
    useEffect(()=>fetchData(),[])
    const fetchData=()=>async ()=>
    {
        const data=await fetch(HELP_URL);
        const json=await data.json();
        setQuestion(json?.data?.issues?.data) 
        console.log(json.data)
    }
  return (
    <div className="container">
      <div className="card-container">
      <h1 className="card-container-title pb-5"></h1>
    {question.map((question) => {return(
        <useSection key={question?.id} id={question?.id} title={question?.title} description={question?.description}
        isVisible={visibleSection === question?.id }
        setIsVisible={(display) => {
          if(display) {
            setVisibleSection(question?.id);
          } else {
            setVisibleSection(" ");
          }
        }
        } />)
    }
    )}
    </div>
  </div>
  )
}

export default Help;