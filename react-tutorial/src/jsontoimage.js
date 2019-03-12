import React, { Component } from 'react';

class App extends Component {
  state = {
    members: []
  };

  componentDidMount() {
    fetch('http://localhost:5007/data')
      .then(res => res.json())
      .then(data => {this.setState({ members: data[0]["data"] })});
  }

  render() {

    var AttrList = (props) => {
      const numbers = props.attributes;
      var ta = "";
      const listItems = numbers.map((number) =>
        ta = ta + " " + number
      );
      return (
        ta
      );
    }

    var a = this.state.members.map(function (item, key) {
      return (
        <div className="col-sm-3 ">
          <div className="thumbnail">
            <div className="text-center">
              <a href={item.image}>
                <figure className="figure">
                  <img src={item.image} className="img-fluid" style={{ width: 'auto', height: '195px' }} alt="A generic square placeholder image with rounded corners in a figure."></img>
                  <figcaption className="figure-caption"><AttrList attributes={item.attribute} /></figcaption>
                </figure>
              </a>
            </div>
          </div>
        </div>

      )
    })

    return (<div className="container-fluid"  >
      <div className="row">
        {a}
      </div>
    </div>

    )
  }
}
export default App;

