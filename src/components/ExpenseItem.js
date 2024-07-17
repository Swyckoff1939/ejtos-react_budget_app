import React, { useContext } from "react";

import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  //get current global state
  const { currency, dispatch } = useContext(AppContext);

  //update global state
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  //increase allocation found
  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  //decrease allocation found
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <FaPlusSquare
          size="3.0em"
          color="#56A0D3"
          onClick={(event) => increaseAllocation(props.name)}
        ></FaPlusSquare>
      </td>
      <td>
        <FaMinusSquare
          size="3.0em"
          color="#7C2327"
          onClick={(event) => decreaseAllocation(props.name)}
        ></FaMinusSquare>
      </td>
      <td>
        <TiDelete size="3.0em" color="#00008B" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
