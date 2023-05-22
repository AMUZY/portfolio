import "./input.css"
import "./font.scss"
import "./theme.scss"
import "./app.scss"

import all_links from "./links.json"

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

export const links = all_links;

export default function App() {
  return (
    <div className="App w-auto h-[100dvh]">
      <Router>
        <Routes>
          <Route path = "/" element={<Navigate to = "/about"/>} />
          <Route path="/" element={<Mainpage />}>
            <Route path="/about" element = {<About />} />
            <Route path="/hobbies" element = {<Hobbies />} />
            <Route path="/other" element = {<Other />} />
            <Route path="/tech" element = {<Tech />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

