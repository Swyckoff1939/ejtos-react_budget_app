import React, { useContext } from "react";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
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
        <FaPlusCircle
          size="2.5em"
          color="#56A0D3"
          onClick={(event) => increaseAllocation(props.name)}
        ></FaPlusCircle>
      </td>
      <td>
        <FaMinusCircle
          size="2.5em"
          color="#7C2327"
          onClick={(event) => decreaseAllocation(props.name)}
        ></FaMinusCircle>
      </td>
      <td>
        <TiDelete size="2.0em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
