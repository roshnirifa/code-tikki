
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Ide from './pages/IDE/Ide';
import Header from './pages/Home/Header/Header';
import Problem from './pages/Problem/Problem';
import ProblemCore from './pages/Problem/ProblemCore/ProblemCore';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Solution from './pages/Problem/Solution/Solution';
import DifficultLevel from './pages/Problem/DifficultLevel/DifficultLevel';
import Problems from './pages/Problem/Problems/Problems';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Blog from './pages/Home/Blog/Blog';
import Slove from './pages/Home/ProblemsOfTheDay/Slove';
import UserProfile from './pages/UserProfile/UserProfile';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/ide' element={<Ide></Ide>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/userProfile' element={<UserProfile></UserProfile>}></Route>
        <Route path='/slove' element={<Slove></Slove>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signin' element={<Register></Register>}></Route>
        <Route path='/problem' element={<Problem></Problem>}>
          <Route path='problems' element={<Problems></Problems>}></Route>
          <Route path='problemCore' element={<ProblemCore></ProblemCore>}>
          </Route>
          <Route path='difficultLevel' element={<DifficultLevel></DifficultLevel>}>
          </Route>
          <Route path='solution' element={<Solution></Solution>}>
          </Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />


    </div>
  );
}

export default App;
