import "./input.css"
import "./font.scss"
import "./theme.scss"
import "./app.scss"

// RESOURCES IMPORT
import { 
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate
} from "react-router-dom";

// PAGES IMPORT
import Mainpage from "../src/pages/Mainpage"
import About from "./pages/About";
import Hobbies from "./pages/Hobbies";
import Other from "./pages/Other";
import Tech from "./pages/Tech";


export default function App() {
  return (
    <div className="App w-auto h-[100dvh]">
      <Router>
        <Routes>
          <Route path = "/" element={<Navigate to = "/christian/about"/>} />
          <Route path="/christian" element={<Mainpage />}>
            <Route path="/christian/about" element = {<About />} />
            <Route path="/christian/hobbies" element = {<Hobbies />} />
            <Route path="/christian/other" element = {<Other />} />
            <Route path="/christian/tech" element = {<Tech />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

