import { useContext } from 'react';
import { LiveDataContext } from '../context/LiveDataContext';
import '../PriceDisplay.css'

function PriceDisplay() {
    const {price, loading, error} = useContext(LiveDataContext);
    // if (loading) {
    //     return <h2>Loading...</h2>;
    // } else if (error){
    //     return <h2> You are experiencing an {error} error </h2> 
    // }

    return (
     <>
     <div className="top">
        {loading ? ( <h2>Loading...</h2>) 
        : 
        error ? (
            <h2>You are experiencing a "{error}" error</h2>) 
        : (
            <h2>Bitcoin Price: ${price}</h2>)
        }
      </div>
     </>
    )
}
export default PriceDisplay