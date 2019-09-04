import React, {Component} from 'react';
import './App.css';
import ItemForm from './components/ItemForm';
import DisplayList from './components/DisplayList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {todoList: []}
  }

  update = (newList) => {
    localStorage.setItem("ItemList", JSON.stringify(newList));
    this.setState({todoList: newList});
  }

  componentDidMount(){
    const list = JSON.parse(localStorage.getItem("ItemList"));
    if(list != null)
      this.setState({todoList: list});
  }
  
  render() {
    return(
      <div>
        <div className="toDo">
          <h1>Todo List Application</h1>
          <ItemForm update={this.update} todoList={this.state.todoList}/>
        </div>
        <DisplayList todoList={this.state.todoList} update={this.update}/>
      </div>
    );
  }
}

export default App;