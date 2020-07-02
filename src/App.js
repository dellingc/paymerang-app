import React from 'react';
import logo from './logo.svg';
import './App.css';
import PayeeCard from './PayeeCard';
import PayeeList from './PayeeList';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = { Payments: null};
  }

  getAllData = async () => {
    fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let tempArray = [];
        for(let i = 0; i < data.length; i++){
          console.log(data[i])
          tempArray.push(data[i]);
        }
        this.setState({Payments: tempArray})
        console.log(this.state)
      })
  }

  getIndPayment = async (index) => {
    fetch(`http://localhost:8000/${index}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        //this.setState({Payee: tempArray})
      })
  }

  componentWillMount(){
    this.getAllData()
  }


render() {
  if(this.state.Payments === null){
    return(
      <div className="App">Loading...</div>
    )
  } else {
    let elements = [];
    let payeesArr = [];
    for(let i = 0; i < this.state.Payments.length; i++){
      elements.push(<PayeeCard 
        payee={this.state.Payments[i].Payee} 
        payment={this.state.Payments[i].Payment}
      />)
      payeesArr.push(this.state.Payments[i].Payee.Name)
    }
      return (
        <div className="App">
          <PayeeList payees={payeesArr}/>
          {elements}
        </div>)
        }
}

}
export default App;
