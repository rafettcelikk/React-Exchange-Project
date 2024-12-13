import { useState } from "react";
import "../css/currency.css";
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_FZ7vWw71s3OkvcBDi0Iy1xH6EWHfjfydvzZzgdqN";
function Currency(){
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
      const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
      const result = (response.data.data[toCurrency] * amount).toFixed(2);
      setResult(result);
    }
    return (
        <div className="currency-div">
             <div style={{width : '100%', fontFamily : 'arial', backgroundColor : 'black', color : '#fff', textAlign : 'center'}}>
                <h3 >Döviz Kuru Uygulaması</h3>
             </div>
             <div style={{marginTop : '25px'}}>
             <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className="amount" />
            <select onChange={(e) => setFromCurrency(e.target.value)} className="from-currency-option">
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
            </select>

            <FaArrowRight style={{fontSize : "25px" , marginRight : "10px", marginTop : "5px"}}/>

            <select onChange={(e) => setToCurrency(e.target.value)} className="to-currency-option">
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
            </select>

            <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className="result" />
             </div>
             <div>
                <button onClick={exchange} className="exchange-button">Çevir</button>
             </div>
            
        </div>
    )
}

export default Currency  