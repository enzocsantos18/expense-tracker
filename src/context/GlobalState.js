import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'


//Initial State
let initialState = []
const local = localStorage.getItem('transactions')

if (local !== null) {
  if (local !== "undefined") {
    initialState = JSON.parse(local)
  }
}


initialState = {
  transactions: initialState
}

//Create Context

export const GlobalContext = createContext(initialState)



//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
      {children}
    </GlobalContext.Provider>
  )
}
