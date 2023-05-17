
//1.Import Area
import React from 'react';
import ReactDOM from 'react-dom/client';


//every component can have its own data/states

class A extends React.Component {
  //1.
  state;

  //2.constructor

  constructor() {
    super();
    this.state = { name: "yogesh", surname: "Gaikwad", address: "Nagar" }


  }

  //3 Method

  render() {

    this.setState({
      ...this.state,//spraed operator
      name: "Santosh"
    })
    return <>
      <h1>{this.state.name}{this.state.surname}</h1>
      <h1>{this.state.address}</h1>
      <h6>{this.props.name}</h6>
      <h4>{this.props.surname}</h4>
      <h5>{this.props.children}</h5>


    </>

  }

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<A name="Swati" surname="Patil">Kolhapur</A>);

