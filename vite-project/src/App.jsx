import IpInfo from "./Components/Ipinfo";
import BlogPost from "./Components/BlogPost";
import {Routes, Route, Link} from "react-router-dom"

function App() {
  return (
  <>
    <div className="text-3xl text-center my-20">
      <Link to="/ipinfo" className="text-white hover:text-yellow-500 transition duration-300 mr-10">See your ipinfo</Link>
      <Link to="/blogpost" className="text-white hover:text-yellow-500 transition duration-300">See posts</Link>
    </div>
    <Routes>
    <Route path="/ipinfo" element={<IpInfo />}/>
    <Route path="/blogpost" element={<BlogPost />}/>
    </Routes>
  </>);

  // return(<BlogPost />);
}

export default App;
