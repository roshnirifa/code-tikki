
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Ide from './pages/IDE/Ide';
import Header from './pages/Home/Header/Header';
import Problem from './pages/Problem/Problem';

import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';



import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Blog from './pages/Home/Blog/Blog';

import UserProfile from './pages/UserProfile/UserProfile';
import CodeDetail from './pages/Problem/CodeDetail/CodeDetail';
import Footer from './pages/Footer/Footer';
import Slove from './pages/Home/ProblemsOfTheDay/Slove';
import ProblemStatement from './pages/Problem/CodeDetail/ProblemStatement/ProblemStatement';
import Submission from './pages/Problem/CodeDetail/Submission/Submission';
import DificultyLevel from './pages/Problem/CodeDetail/DificultyLevel/DificultyLevel';
import Solution from './pages/Problem/CodeDetail/Solution/Solution';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/ide' element={<Ide></Ide>}></Route>

        <Route path='/codeDetail/:codeDetailCode' element={
          <CodeDetail></CodeDetail>
        }>

          <Route path='problemStatement' element={<ProblemStatement></ProblemStatement>}></Route>
          <Route path='submission' element={<Submission></Submission>}>
          </Route>
          <Route path='difficultLevel' element={<DificultyLevel></DificultyLevel>}>
          </Route>
          <Route path='solution' element={<Solution></Solution>}>
          </Route>
        </Route>

        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/userProfile' element={<UserProfile></UserProfile>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signin' element={<Register></Register>}></Route>
        <Route path='/problem' element={<Problem></Problem>}></Route>
        <Route path='/slove' element={<Slove></Slove>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />


    </div>
  );
}

export default App;
