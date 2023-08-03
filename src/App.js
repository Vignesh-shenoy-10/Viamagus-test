import './App.css';
import DisplayPosts from './Containers/displayPosts';
import Createpost from './Containers/createPosts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Containers/home';
import Detailpost from './Containers/detailPost';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>

           <Route index element={<Home/>} />
           <Route path="details" element={<Detailpost />} />
          <Route path="displayposts" element={<DisplayPosts />} />
          <Route path="createpost" element={<Createpost />} />
         
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
