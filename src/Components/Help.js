import React, { useState,useEffect } from 'react'
import { HELP_URL } from '../utils/constants';
import Section from '../utils/Section';
import { FAQ } from '../../config';


const Help = () => {
    const [visibleSection, setVisibleSection] = useState("");
    // const [question,setQuestion]=useState([])
    // useEffect(()=>fetchData(),[])
    // const fetchData=()=>async ()=>
    // {
    //     const data=await fetch("https://www.swiggy.com/mapi/support/v3/issues/faq?");
    //     const json=await data.json();
    //     setQuestion(json?.data?.issues?.data) 
    //     console.log(json.data)
    // }
    console.log(FAQ)
    
  return (
    <div className="container">
      <div className="card-container">
      <h1 className="card-container-title pb-5">FAQ</h1>
    {FAQ.map((question) => {return(
        < Section key={question?.id} id={question?.id} title={question?.title} description={question?.description}
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