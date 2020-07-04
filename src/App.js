import React from 'react';
import './App.css';
import PayeeCard from './PayeeCard';
import PayeeSelect from './PayeeSelect';
import PageBtn from './PageBtn';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      PaymentData: null,
      currentPage: 0
    };
  }

  //fetch the data from the server, sort it, and store it in state
  getAllData = async () => {
    fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(data => {
        let tempArray = [];
        for (let i = 0; i < data.length; i++) {
          tempArray.push(data[i]);
        }
        tempArray.sort(function (a, b) {
          var nameA = a.Payee.Name;
          var nameB = b.Payee.Name;
          if (nameA < nameB) {
            return -1
          }
        })
        this.setState({ PaymentData: tempArray })
      })
  }

  //Fetch the data after component mounts
  componentDidMount() {
    this.getAllData()
  }

  //Function to change pages
  changePage = (current, total, btnType) => {
    if(current < total && btnType === 'next'){
      this.setState({ currentPage: this.state.currentPage + 1 });
    } else if (current > 0 && btnType === 'prev'){
      this.setState({ currentPage: this.state.currentPage - 1 });
    } else if (current > 0 && btnType === 'first'){
      this.setState({ currentPage: 0 });
    } else if (current !== total - 1 && btnType === 'last'){
      this.setState({ currentPage: total - 1 });
    }
  }

  //Function to go to the page selected in the dropdown box
  goToSelected = (val) => {
    this.setState({ currentPage: val });
  }

  //Function that passes the current page number to the page buttons
  checkCurrentPage = () => {
    return this.state.currentPage;
  }

  render() {
    if (this.state.PaymentData === null) {
      return (
        <div className="App">Loading...</div>
      )
    } else {
      return (
        <div className="App">
          <div className='selectDiv'>
          <span><strong>Select Payee: </strong></span>
            <PayeeSelect paymentData={this.state.PaymentData} handleChange={this.goToSelected} />
          </div>
          <PayeeCard
            payee={this.state.PaymentData[this.state.currentPage].Payee}
            payment={this.state.PaymentData[this.state.currentPage].Payment}
            remittance={this.state.PaymentData[this.state.currentPage].Remittance}
          />
          <div className='pageControls'>
            <PageBtn
              handleClick={this.changePage}
              total={this.state.PaymentData.length}
              btnType='first'
              checkCurrentPage={this.checkCurrentPage}
              operation='<<'
            />
            <PageBtn
              handleClick={this.changePage}
              checkCurrentPage={this.checkCurrentPage}
              btnType='prev'
              total={this.state.PaymentData.length}
              operation='<'
            />
            <p className='pageBtns'>Page {this.state.currentPage + 1} of {this.state.PaymentData.length}</p>
            <PageBtn
              handleClick={this.changePage}
              checkCurrentPage={this.checkCurrentPage}
              total={this.state.PaymentData.length}
              btnType='next'
              operation='>' />
            <PageBtn
              handleClick={this.changePage}
              checkCurrentPage={this.checkCurrentPage}
              btnType='last'
              total={this.state.PaymentData.length}
              operation='>>'
            />
          </div>
        </div>)
    }
  }

}
export default App;
