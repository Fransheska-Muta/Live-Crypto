import { useEffect, useState, createContext } from 'react';
const LiveDataContext = createContext();

function LiveData({ children }) {
    const [price, setPrice] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        function GetPrice() {
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
            .then(response => response.json())
            .then(data => { setPrice(data.bitcoin.usd);
                setLoading(false);
                setError()
            })
            .catch(() => {
                setLoading(false);
                setError("Failed to load the data")
            })
    }
    GetPrice();
        const timer = setInterval(() => {
            GetPrice()
        }, 10000)
    return () => { 
        clearInterval(timer)}
    },[]);

    return (
      <>
        <LiveDataContext.Provider
            value={{price, loading, error}}>
            {children}
        </LiveDataContext.Provider>
    </>
    )
}

export default LiveData;
export { LiveDataContext }