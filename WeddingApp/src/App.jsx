import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  const appInfo = {
    appName: "Wedding App",
    year: "2023",
  };

  return (
    <>
    <Router>
    <Header name={appInfo.appName} year={appInfo.year}></Header>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/home" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
