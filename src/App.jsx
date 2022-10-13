import './App.css';
// import { Header } from './modules/header';
// import { Post } from './modules/posts/post';
import { Landing } from './modules/landing/landing';
import { Form } from './modules/form/form';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Posts } from './modules/posts';

function App() {
  // debugger
  return (
    <div>
      <BrowserRouter>
        {/* <Landing /> */}
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/posts' element={<Posts />}></Route>
          <Route path='/inputform' element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
