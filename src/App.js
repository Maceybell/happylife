import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import AuthScreen from './screens/AuthScreen';
import AdminScreen from './screens/AdminScreen';

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import TheProcess from './screens/TheProcess';
import UserProfile from './screens/UserProfile';


function App() {
  const admin = useSelector(state => state.isAdmin)
  const userId = useSelector(state => state.userId)

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/auth" element={!userId ? <AuthScreen /> : <Navigate to='/product' />}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/product" element= {!admin ? <UserProfile /> : <Navigate to ='/admin' />} />
        <Route path="/admin" element={admin ? <AdminScreen /> : <Navigate to ="/" />}></Route>
        <Route path="/process" element={<TheProcess />}></Route>
      </Routes>
    </div>
  );
}

export default App;
