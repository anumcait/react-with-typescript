import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';



export interface IState{
  people:{
    name:string,
    age:number,
    url:string,
    note?:string

  }[]
}

function App() {
  const [people,setPeople]=useState<IState["people"]>([
    {
      name:"Aliveni",
      age:36,
      url:"https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
      note:"this is my first image"
    }
  ])

  return (
    <div className="App">
      <h1>People Data </h1>
      <List  people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
     
    </div>
  );
}

export default App;
