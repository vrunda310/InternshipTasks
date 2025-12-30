import { useState } from "react";
import "./TransactionForm.css";

export default function TransactionForm(){

    const curruntDate = new Date();

    let [formData,setFormData]=useState({
        transactionId:"",
        amount:"",
        paymentMode:"",
        date:curruntDate,
        Time:"",
        description:""
    });

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const [submittedData, setSubmittedData] = useState(null);
     const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.amount <= 0) {
      alert("Amount must be a positive number.");
      return;
    }

    const curruntTime = new Date().toTimeString().split(" ")[0].slice(0, 5);

    const dataToSubmit = {
      ...formData,
      Time: curruntTime
    };

    setSubmittedData(dataToSubmit); 
    alert("Transaction Submitted: " + JSON.stringify(dataToSubmit));
    setFormData({
      transactionId: "",
      amount: "",
      paymentMode: "",
      date: curruntDate,
      Time: "",
      description: ""
    });
  };
    return(
        <div className ="transaction-form-container">
        <form onSubmit={handleSubmit}>
            <h3>Transaction Form</h3>
            <input 
            name="transactionId" 
            type="text"
            placeholder="Enter Transaction ID"
            value={formData.transactionId}
            onChange={handleChange}
            required
            />
            <input
            name="amount"
            type="number"   
            placeholder="Enter Amount"
            value={formData.amount}
            onChange={handleChange}
            required
            />
            <select name="paymentMode" value={formData.paymentMode} onChange={handleChange} required >       
                <option value="">Select Payment Mode</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Net Banking">Net Banking</option>
                <option value="UPI">UPI</option>
                <option value="Cash">Cash</option>
                <option value="other">Other</option>
            </select>
            <input 
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            />
            <input 
            name="description"
            type="text"
            placeholder="Enter Description"
            value={formData.description}
            onChange={handleChange}
            />
            <button type="submit">Add Transaction</button>
        </form>
        </div>
    )
}