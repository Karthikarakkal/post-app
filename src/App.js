import logo from './logo.svg';
import './App.css';
import AddPost from './Components/AddPost';
import DeletePost from './Components/DeletePost';
import NavBar from './Components/NavBar';
import SearchPost from './Components/SearchPost';
import ViewPost from './Components/ViewPost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddPost/>}/>
    <Route path='/delete' element={<DeletePost/>}/>
    <Route path='/search' element={<SearchPost/>}/>
    <Route path='/view' element={<ViewPost/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
