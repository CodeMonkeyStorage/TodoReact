import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function ItemForm(props) {
  const handleForm = (event) => {
    event.preventDefault();
    if(event.target.task.value !== "") {
      let newList = props.todoList.slice();
      const date = new Date();
      const fullDate = (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();
      newList[newList.length] = {task: event.target.task.value, id: Date.now(), complete: false, date: fullDate};
      event.target.task.value = "";
      props.update(newList);
    }
  }

  return(
    <form onSubmit={handleForm} className="itemForm">
      <input type="text" name="task" className="item" placeholder="Add item to list..." maxLength="250" autoComplete="off"/>
      <input type="submit" value="Submit" className="submitButton"/>
    </form>
  );
}

ItemForm.propTypes = {
  update: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ItemForm;