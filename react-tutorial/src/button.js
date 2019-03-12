import React, { Component } from 'react';


class App extends Component {
    constructor(){
      super();
      this.state = {
        members : [],
        b: null ,
      
    }
   this.handleClick = this.handleClick.bind(this);
  }
  
    handleClick(file,e){
     console.log(file);
     fetch(file,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }})
      .then((res) => res.json())
      .then((data) => {console.log(data); this.setState({members:data});console.log(this.state.members); var a = this.state.members.map(function (item, key) {

        return (
              <tr>
                   <td>{item.name}</td>
                   <td>{item.class}</td>
                   <td>{item.roll}</td>
               </tr>
            )
      })
     console.log(a);
      var b=<div className="container">           
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>name</th>
            <th>class</th>
            <th>roll</th>
          </tr>
        </thead>
        <tbody>
          {a}
        </tbody>
      </table>
    </div>;
    this.setState({b:b});
  

});
}

render(){
  let file1="/class1.json";
  let file2="/class2.json"
  return(<div>
   <button  onClick={(e) => this.handleClick(file1, e)}> b1</button>
   <button onClick={(e) => this.handleClick(file2, e)}> b2</button>
   <h1>{this.state.b}</h1>
  </div>)
}
}
export default App;

