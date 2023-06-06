import React, { useState } from 'react';

const Accordion = ({ heading, children }) => {
  const [isAccordionOpen, setAccordionOpen] = useState(true);
  
  const handleAccordionToggle = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div>
      <h2 onClick={handleAccordionToggle}>{heading}</h2>
      {isAccordionOpen && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;