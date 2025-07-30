import React from "react";
import "../css/WalletBankCard.css";
import { useState } from "react";

const WalletBankCard: React.FC = () => {
 const [selected, setSelected] = useState(true);

  const toggleSelection = () => {
    setSelected(!selected);
  };

  return (
    <div className="wallet-bank-container">
        <div className="wallet-bank-banner">
             <h2 className="wallet-bank-banner-text">Wallet</h2>
          </div>
    <div className="wallet-bank-card">
      <div className="wallet-bank-left">
        <img src="/images/walletBankCard.png" alt="icon" className="wallet-bank-icon" />
      </div>


      <div className="wallet-bank-right">
        <div className="wallet-bank-options-container">
        <div className="wallet-bank-option" onClick={toggleSelection}>
      <div className="wallet-bank-top">
        <img src="/images/masterCard.png" alt="Card Icon" className="wallet-bank-image" />
        {selected && (
          <span className="wallet-bank-tick">✔</span>
        )}
      </div>
      <div className="wallet-bank-label">Bank Card</div>
    </div>

  <div className="wallet-bank-option1" onClick={toggleSelection}>
      <div className="wallet-bank-top1">
        <img src="/images/gpay.png" alt="Card Icon" className="wallet-bank-image1" />
        {selected && (
          <span className="wallet-bank-tick1">✔</span>
        )}
      </div>
    </div>

    </div>
    <input placeholder="Card Holder Name" className="wallet-bank-input" />
    <input placeholder="Card Number" className="wallet-bank-input" />
    <div className="wallet-bank-date-container">
       <input placeholder="Expiration date" className="wallet-bank-input1" />
      <input placeholder="CVV" className="wallet-bank-input1 wallet-bank-cvv" />
 </div>
      <p className="wallet-bank-amount">Total Amount</p>
        <p className="wallet-bank-finalamount">OMR 500.000</p>
        <div className="wallet-bank-button-container">
            <button className="wallet-bank-cancelbutton">Cancel</button>
          <button className="wallet-bank-paybutton">Pay Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WalletBankCard;
