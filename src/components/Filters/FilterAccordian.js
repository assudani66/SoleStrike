import React, { useState } from 'react';
import "./FilterAccordian.css"
const Accordion = ({ heading, children }) => {
  const [isAccordionOpen, setAccordionOpen] = useState(true);
  
  const handleAccordionToggle = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className='accordian'>
    <div className='accordianHeading'>
      <h4 onClick={handleAccordionToggle}>{heading}</h4>
    </div>
      {isAccordionOpen && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;