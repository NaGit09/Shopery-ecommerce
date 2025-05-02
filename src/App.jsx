import './App.css'
import Header from './components/Header.jsx'
import {Routes , Route} from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import Shop from './pages/Shop.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
function App() {

  return (
<div>
<Header/>
<Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/shop" element={<Shop/>} />
  <Route path="/SignIn" element={<SignIn/>} />
  <Route path="/SignUp" element={<SignUp/>} />
  </Routes>
</div>
  )
}

export default App
