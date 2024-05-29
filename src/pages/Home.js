import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

function BankApp() {
  const [balance, setBalance] = useState(190000);
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleTransactionTypeChange = (event) => {
    setTransactionType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      alert('Please enter a valid amount');
      return;
    }
    if (transactionType === 'deposit') {
      setBalance(balance + parsedAmount);
    } else {
      setBalance(balance - parsedAmount);
    }
    setAmount('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.balance}>Your available Balance: {balance} KWD</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label>
            <input
              type="radio"
              value="deposit"
              checked={transactionType === 'deposit'}
              onChange={handleTransactionTypeChange}
            />
            Deposit
          </label>
          <label>
            <input
              type="radio"
              value="withdraw"
              checked={transactionType === 'withdraw'}
              onChange={handleTransactionTypeChange}
            />
            Withdraw
          </label>
        </div>
        <div>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Amount"
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  balance: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'inline-block',
    textAlign: 'left',
  },
  input: {
    width: '200px',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Home