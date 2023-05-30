import { Route, Routes } from 'react-router-dom';
import Login from './components/User/Login';
import SignUp from './components/User/Signup';
import Reviews from './components/Reviews/Reviews';
import UpdatePassword from './components/User/UpdatePassword';
import UpdateUsername from './components/User/UpdateUsername';
import DeleteUser from './components/User/DeleteUser';
import CreateReview from './components/Reviews/CreateReview';
import UpdateReview from './components/Reviews/UpdateReview';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/Logout" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/review/update/:id" element={<UpdateReview />} /> 
        <Route path="/Create Review" element={<CreateReview />} /> 
        <Route path="/Change Username" element={<UpdateUsername />} /> 
        <Route path="/Change Password" element={<UpdatePassword />} /> 
        <Route path="/Delete Account" element={<DeleteUser />} /> 
      </Routes>   
  );
}

export default App;
