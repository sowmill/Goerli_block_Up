import './App.css';
import { ChainId, DAppProvider } from "@usedapp/core"
import Navigation from "./components/Navigation"
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <DAppProvider config={{
        supportedChains: [ChainId.Rinkeby],
        notifications: {
          expirationPeriod: 1000,
          checkInterval: 1000
        }
      }}>
        <Navigation />
      </DAppProvider>
    </Router>
  );
}

export default App;
