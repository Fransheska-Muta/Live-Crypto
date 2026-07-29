import { useContext } from 'react';
import { LiveDataContext } from "../context/LiveDataContext";

function PriceDisplay() {
    const {price, loading, error} = useContext(LiveDataContext);

    if (loading) {
        return <h2>Loading...</h2>;
    } else if (error){
        return <h2> You are experiencing an {error} error </h2> 
    }

    return (
      <>
        <h2>Bitcoin Price</h2>
        <h3>${price}</h3>
      </>
    )
}
export default PriceDisplay