import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function CheckBox(props) {
    const handleCheck = (event) => {
        const index = props.findIndex(event.target.name);
    
        let newList = props.todoList.slice();
        !newList[index].complete ? newList[index].complete = true : newList[index].complete = false;
        props.update(newList);
    }

    return(
        <div className="completeButton">
            <input type="checkbox" title="Mark as Done" onClick={handleCheck} name={props.listItem.id} className="check"/>
        </div>
    );
}

CheckBox.propTypes = {
    update: PropTypes.func.isRequired,
    findIndex: PropTypes.func.isRequired,
    listItem: PropTypes.object.isRequired,
    todoList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CheckBox;