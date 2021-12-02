import React from "react";

const FilterBtn = ({ name, index, item, task, setPageNumber }) => {
  return (
    <div>
      <style>
        {`
      .x:checked + label{
        background-color: #0b5ed7;
        color: white
      }
        input[type='radio']{
          display: none;
        }
      `}
      </style>
      <div className="form-check">
        <input
          onClick={() => {
            setPageNumber(1);
            task(item);
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
