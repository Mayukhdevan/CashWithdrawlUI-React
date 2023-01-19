import './index.css'

const DenominationItem = props => {
  const {denomination, debitAmount} = props
  const {value} = denomination
  const withDraw = () => debitAmount(value)

  return (
    <li>
      <button type="button" onClick={withDraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
