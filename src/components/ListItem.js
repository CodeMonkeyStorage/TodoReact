import React from 'react';
import ShiftButtons from './ShiftButtons';
import DeleteButton from './DeleteButton';
import CheckBox from './CheckBox';
import PropTypes from 'prop-types';
import '../App.css';

function ListItem(props) {
    const findIndex = (id) => {
        for(let i = 0; i < props.todoList.length; i++){
            if(id === props.todoList[i].id.toString()){
              id = i;
              break;
            }
        }
        return id;
    }

    const swap = (index1, index2) => {
        let newList = props.todoList.slice();
        const item1 = newList[index1];
        const item2 = newList[index2];
        newList[index1] = item2;
        newList[index2] = item1;

        return newList;
    }

    const allowDrop = (event) => {
        event.preventDefault();
    }
      
    const drag = (event) => {
        event.dataTransfer.setData("text", event.target.id);
    }
      
    const drop = (event) => {
        event.preventDefault();
        const index1 = findIndex(event.dataTransfer.getData("text"));
        const index2 = findIndex(props.listItem.id.toString());
        const newList = swap(index1, index2);
        
        props.update(newList);
    }

    return(
        <div className="itemContainer">
            <div id={props.listItem.id} className="listItem" draggable="true" onDragStart={drag} onDragOver={allowDrop} onDrop={drop}>
                <ShiftButtons findIndex={findIndex} swap={swap} update={props.update} listItem={props.listItem} todoList={props.todoList}/>
                <CheckBox update={props.update} findIndex={findIndex} todoList={props.todoList} listItem={props.listItem}/>
                <div className="listContainer">
                    {!props.listItem.complete ? <p>{props.listItem.task}</p> : <p><s>{props.listItem.task}</s></p>}
                </div>
                <DeleteButton findIndex={findIndex} update={props.update} todoList={props.todoList} listItem={props.listItem}/>
            </div>
            <div className="date">
                <p>Date Created: {props.listItem.date}</p>
            </div>
        </div>
    );
}

ListItem.propTypes = {
    update: PropTypes.func.isRequired,
    todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    listItem: PropTypes.object.isRequired
}

export default ListItem;