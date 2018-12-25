import React from "react";
import store from "../store";
const ButtonGroup = ({ technologies }) => (
  <div>
    {technologies.map((tech, i) => (
      <button
        data-tech={tech}
        key={`btn-${i}`}
        className="hello-btn"
        on-onClick={dispatchBtnAction}
      >
        {tech}
      </button>
    ))}
  </div>
);


function dispatchBtnAction(e) {
  const tech = e.target.dataset.tech;
  store.dispatch(setTechnology(tech));
}

// eslint-disable-next-line
const setTechnology=text=>{return {type:"SET_TECHNOLOGY", tech: text}}

export default ButtonGroup;