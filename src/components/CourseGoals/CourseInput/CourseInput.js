import React, { useState } from "react";
// import styled from "styled-components";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`

//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => (props.invalid ? 'rgb(246, 68, 37)' : 'black')}
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? 'rgb(246, 68, 37)' : '#ccc')};
//   background : ${props => (props.invalid ? 'lightsalmon' : 'transparent')}
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// &.invalid input {
//   border-color: rgb(246, 68, 37);
//   background: lightsalmon;
// }

// &.invalid label {
//   color: rgb(246, 68, 37);
// }

// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid ? 'invalid': ''}`}> */}
      {/* <FormControl invalid={!isValid}> */}
      {/* <FormControl className={`${!isValid ? 'invalid': ''}`}> */}
      <div className={`${styles['form-control']} ${!isValid && styles['invalid']}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/* </FormControl> */}
      {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{ borderColor: !isValid ? "red" : "#ccc",
          background :!isValid ? "salmon" : "transparent"  }}
        /> */}
      {/* </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
