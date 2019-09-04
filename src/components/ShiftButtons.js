import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function ShiftButtons(props) {
    const moveEvent = (event) => {
        const index = props.findIndex(props.listItem.id.toString());
        let newList;
        event.target.name === "Up" ? newList = props.swap(index, index - 1) : newList = props.swap(index, index + 1);
        props.update(newList);
    }

    const itemIndex = props.findIndex(props.listItem.id.toString());
    let upButton;
    let downButton;
    
    if(itemIndex !== 0)
        upButton = <button onClick={moveEvent} name="Up" title="Move Item Up" className="arrows">&#8593;</button>
    if(itemIndex !== props.todoList.length - 1)
        downButton = <button onClick={moveEvent} name="Down" title="Move Item Down" className="arrows">&darr;</button>

    return(
        <div className="arrowButtons">
            {upButton}
            {downButton}
        </div>
    );
}

ShiftButtons.propTypes = {
    update: PropTypes.func.isRequired,
    findIndex: PropTypes.func.isRequired,
    listItem: PropTypes.object.isRequired,
    todoList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ShiftButtons;