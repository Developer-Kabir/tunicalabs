import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Components/Pages/Dashboard';
import ViewStudet from './Components/Pages/ViewStudet';
import AddStudent from './Components/Pages/AddStudent';
import Header from './Components/Shared/Header';
import Register from './Components/User/Register';
import Login from './Components/User/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>

        <Route path='/' element={<Dashboard></Dashboard>}>
          <Route index element={<ViewStudet></ViewStudet>}></Route>
          <Route path='/addStudent' element={<AddStudent></AddStudent>}></Route>
          
        </Route>
        <Route path='/signup' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
