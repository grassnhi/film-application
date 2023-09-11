import React, {Component} from 'react';
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Props from './components/Props';
import Message from './components/Message';
import Counter from './components/Counter';
import Destructure from './components/Destructure';
import FunctClick from './components/FunctClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import EventBind1 from './components/EventBind1';
import EventBind2 from './components/EventBind2';
import EventBind3 from './components/EventBind3';
import EventBind4 from './components/EventBind4';
import ParentCom1 from './components/ParentCom1';
import ParentCom2 from './components/ParentCom2';
import UserGreet from './components/UserGreet';
import NameList from './components/NameList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGreet/>
        <NameList/>
        {/* <ParentCom1/>
        <ParentCom2/> */}
        {/* <EventBind/> */}
        {/* <EventBind1/>
        <EventBind2/>
        <EventBind3/>
        <EventBind4/> */}
        {/* <FunctClick/>
        <ClassClick/>
        <Counter/>
        <Greet/>
        <Welcome />
        <Hello/>
        <Props name = "Nhi" heroName="Grass">
          <p>This is children props.</p>
        </Props>
        <Props name = "Props" heroName="props" >
          <button>Action</button>
        </Props>
        <Props name = "Functional Component"/>
        <Welcome name = "props" heroName="class">
          <button>Action</button>
        </Welcome>
        <Message />
        <Destructure name="Nhi" heroName={"props"}/> */}
      </div>
    );
  }
}

export default App;
