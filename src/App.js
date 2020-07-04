import React from 'react';
import './App.css';
import PayeeCard from './PayeeCard';
import PageBtnNext from './PageBtnNext';
import PayeeSelect from './PayeeSelect';
import PageBtnLast from './PageBtnLast';
import PageBtnFirst from './PageBtnFirst';
import PageBtnPrev from './PageBtnPrev';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      PaymentData: null,
      currentPage: 0,
      pagesStart: 0,
      pagesEnd: 3
    };

    //this.btnNextPage = this.btnNextPage.bind(this);
  }

  getAllData = async () => {
    fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(data => {
        //console.log(data);
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

  componentWillMount() {
    this.getAllData()
  }

  btnNextPage = () => {
    if (this.state.currentPage < this.state.PaymentData.length - 1) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  }

  btnPrevPage = () => {
    if (this.state.currentPage >= 1) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  }

  goToStart = () => {
    if (this.state.currentPage !== 0) {
      this.setState({ currentPage: 0 })
    }
  }

  goToEnd = () => {
    if (this.state.currentPage !== this.state.PaymentData.length - 1) {
      this.setState({ currentPage: this.state.PaymentData.length - 1 })
    }
  }

  goToSelected = (val) => {
    this.setState({ currentPage: val });
  }

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
            <PageBtnFirst
              handleClick={this.goToStart}
              checkCurrentPage={this.checkCurrentPage}
              operation='<<'
            />
            <PageBtnPrev
              handleClick={this.btnPrevPage}
              checkCurrentPage={this.checkCurrentPage}
              operation='<'
            />
            <p className='pageBtns'>Page {this.state.currentPage + 1} of {this.state.PaymentData.length}</p>
            <PageBtnNext
              handleClick={this.btnNextPage}
              checkCurrentPage={this.checkCurrentPage}
              operation='>' />
            <PageBtnLast
              handleClick={this.goToEnd}
              checkCurrentPage={this.checkCurrentPage}
              operation='>>'
            />
          </div>
        </div>)
    }
  }

}
export default App;
