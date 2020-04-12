import React, {useState, useContext} from 'react';

import { GlobalContext } from '../context/GlobalState'

export default function AddTransaction() {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const {addTransaction} = useContext(GlobalContext)

  const handleSubmit = (e) =>{
    e.preventDefault()

    let id = Math.floor(Math.random() * 100000000);
    const newTransaction = {
      id,
      text,
      amount: +amount
    }
  
    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="htmlForm-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." 
          value={text}
          onChange={(e) =>{
            setText(e.target.value)
          }}
          />
        </div>
        <div className="htmlForm-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..."
          value={amount}
          onChange={(e) =>{
            setAmount(e.target.value)
          }}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
