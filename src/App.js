import React, {useState} from 'react';
import './App.css';
import Person from './person/person';
import  InputText from './person/input.jsx';
import Output from './person/output.jsx'

function App() {
  const [setperson,changeperson]  = useState ({
    person:[
      {name:'muthulaksmi', age:"47"},
      {name:'dharmadurai', age:"25"},
      {name:'logu', age:"20"}
     
    ],
    personShow:false
  });
 

   function toggleFun() {
     const show = setperson.personShow;
     changeperson({person : [...setperson.person],personShow:!show});
  };
  return (
    <div className='App'>
      <button className='button' onClick={toggleFun}>change</button>

     { setperson.personShow === true ?
     <div>

      <Person name = {setperson.person[0].name}
        age = {setperson.person[0].age}
        
        />

        <Person name = {setperson.person[1].name}
        age = {setperson.person[1].age}
        />

        <Person name = {setperson.person[2].name}
        age = {setperson.person[2].age}
        />

     </div>:null}
      
    
  
    </div>
  );
};
export default App;

//this methos is class type conponent
/* class App extends Component {
  state = {
    person:[
      {name:'dharmadurai', age:"25"},
      {name:'lohisal', age:"20"},
      {name:'muthulaksmi', age:"47"}
    ]
  };
  changeState = () => {
   this.setState({
    person:[
      {name:'dharmadurai', age:"24"},
      {name:'muthulaksmi', age:"45"},
      {name:'lohisal', age:"19"}
    ]
   });
  };
  

  render(){
    return (
      <div className="App">
        <h1>hello</h1>
        <button onClick={this.changeState}>i can change the default state</button>
        <Person name ={this.state.person[0].name}age ={this.state.person[0].age}/>
        <Person name={this.state.person[1].name}age ={this.state.person[1].age}/>
        <Person name={this.state.person[2].name}age ={this.state.person[2].age}/>
        {console.log(this.changeState)}
      </div>
    );
  
  };
};
export default App;
 */