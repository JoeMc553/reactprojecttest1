import './App.css'
import Navbar from "./components/Navbar"
import Createn from "./components/Createn"
import studylogosmaller from './assets/studylogosmaller.png'
function App() {

  return (
    <>

<a><img src={studylogosmaller}/></a>

    <Navbar/>
    <form>
    <h1>enter email</h1>
    <br /><input type="text" style={{fontSize: "30px" }}/>
    <h1>enter password</h1>
    <br /><input type="text" style={{fontSize: "30px" }}/>
    </form>
    <Createn/>
    </>
  )
}

export default App
