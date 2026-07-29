import LiveDataContext from "./context/LiveDataContext";
import PriceDisplay from "./components/PriceDisplay";
import AlertStatus from "./components/AlertStatus";

function App() {
    return (
     <>
        <LiveDataContext>
            <PriceDisplay />
            <AlertStatus />
        </LiveDataContext>
     </>
    )
}

export default App