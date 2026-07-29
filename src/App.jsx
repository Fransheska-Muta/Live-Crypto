import LiveData from "./context/LiveDataContext";
import PriceDisplay from "./components/PriceDisplay";
import AlertStatus from "./components/AlertStatus";

function App() {
    return (
     <>
        <LiveData>
            <PriceDisplay />
            <AlertStatus />
        </LiveData>
     </>
    )
}

export default App