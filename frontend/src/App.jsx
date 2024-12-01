import './App.css'
import OneVsOne from './pages/OneVsOne'
import Main from './pages/Main'
import Tournament from './pages/Tournament'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/one-vs-one" element={<OneVsOne/>}/>
        <Route path="/tournaments" element={<Tournament/>}/>
      </Routes>
    </Router>
  )
}

export default App
