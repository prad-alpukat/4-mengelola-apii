// misc 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import pages
import Home from "./pages/Home";
import AddProduct from './pages/AddProduct';

export default function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />

      </Routes>

    </Router>
  )
}