import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  //get current global state
  const { currency, dispatch } = useContext(AppContext);

  //state hook update our component
  const [isOpen, setIsOpen] = useState(false);

  //update currency in global state
  const setCurrencyHandler = (currency) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: currency,
    });
  };

  //  '£' '€' '$' '₹'

  const currencyLabel = () => {
    switch (currency) {
      case "$":
        return "$ Dollar";
      case "£":
        return "£ Pound";
      case "€":
        return "€ Euro";
      case "₹":
        return "₹ Ruppee";
      default:
        return "";
    }
  };

  return (
    <div id="currency-menu" className="dropdown" style={{ cursor: "pointer" }}>
      <button
        id="currency-menu-button"
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ backgroundColor: "#F88379", color: "#fff" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Currency {"("}
        {currencyLabel()}
        {")"}
      </button>
      <ul className={`custom-menu dropdown-menu ${isOpen ? "show" : ""} `}>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler("$")}
            style={{ backgroundColor: "#F88379", color: "#fff" }}
          >
            $ Dollar
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler("£")}
            style={{ backgroundColor: "#F88379", color: "#fff" }}
          >
            £ Pound
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler("€")}
            style={{ backgroundColor: "#F88379", color: "#fff" }}
          >
            € Euro
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler("₹")}
            style={{ backgroundColor: "#F88379", color: "#fff" }}
          >
            ₹ Ruppee
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Currency;
