import React from 'react';
import logo from './logo.svg';
import './App.css';
import PayeeCard from './PayeeCard';
import PayeeList from './PayeeList';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = { 
      Payments: null,
      currentPage: 1
    };

    this.btnNextPage = this.btnNextPage.bind(this);
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
        tempArray.sort(function(a, b){
          var nameA = a.Payee.Name;
          var nameB = b.Payee.Name;
          if(nameA < nameB){
            return -1
          }
        })
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

  btnNextPage = () => {
    if(this.state.currentPage < this.state.Payments.length - 1){
      this.setState({currentPage: this.state.currentPage + 1});
    } else {
      this.disabled = true;
    }
  }

  btnPrevPage = () => {
    if(this.state.currentPage > 1){
      this.setState({currentPage: this.state.currentPage - 1});
    } else {
      this.disabled = true;
    }
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
          <PayeeCard payee={this.state.Payments[this.state.currentPage].Payee}/>
          <button onClick={this.btnPrevPage}>Previous Page</button>
          <button onClick={this.btnNextPage}>Next Page</button>
        </div>)
        }
}

}
export default App;
