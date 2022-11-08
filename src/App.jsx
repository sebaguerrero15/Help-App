import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from "react-router";


function App() {
  return (
    <>
    <NavBar />
      <Main />
      <Outlet />
    <Footer/>
    </>
  );
}

export default App;