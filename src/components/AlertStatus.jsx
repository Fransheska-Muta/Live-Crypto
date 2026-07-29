import { useContext } from "react";
import { LiveDataContext } from "../context/LiveDataContext";

function AlertStatus() {
    const { price } = useContext(LiveDataContext);

 return (
    <>
      <h2> {price < 100000 ? "WARNING! Price is below $100,000" : "GREAT! Price is above $100,000"} </h2>
    </>
 )
}

export default AlertStatus