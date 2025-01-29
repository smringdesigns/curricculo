import React from "react";

const Accordion = ({ data }) => {
  return (
    <div className="accordion" id="accordionExample" data-aos="fade-up">
      {data.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h6 className="accordion-header">
            <button
              className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse${index}`}
            >
              {item.question}
            </button>
          </h6>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
