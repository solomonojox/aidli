import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';

function App() {

  return (
    <Routes>
      {/* <Route path="/" element={<UpgradePage />} /> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<LandingPage />} />
    </Routes>
  )
}

export default App
