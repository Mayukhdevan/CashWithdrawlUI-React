import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value =>
    this.setState(prevState =>
      prevState.balance >= value ? {balance: prevState.balance - value} : null,
    )

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-body">
        <div className="bg-container">
          <div className="profile-section">
            <div className="profile-img">
              <p>S</p>
            </div>
            <p className="profile-name">Sarah Williams</p>
          </div>

          <div className="balance-section">
            <p>Your Balance</p>
            <div className="amount-container">
              <p className="amount">{balance}</p>
              <p className="in-rupees-text">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denomination={eachItem}
                debitAmount={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
