import React from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import '../App.css';

function DisplayList(props) {
    const pushItems = (todoList) => {
        const listItems = todoList.map((item) => {
            return(<ListItem  key={item.id} listItem={item} update={props.update} todoList={props.todoList}/>);
        });
        return listItems;
    }
    
    const list = pushItems(props.todoList);
    let title;
    list.length > 0 ? title = <h2>Task List</h2> : title = undefined;
  
    return(
        <div className="container">
            {title}
            {list}
        </div>
    );
}

DisplayList.propTypes = {
    update: PropTypes.func.isRequired,
    todoList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DisplayList;