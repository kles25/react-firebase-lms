import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home/Home';
import HomeStudent from './pages/dashboardstudent/homestudent/HomeStudent';
import DashboardStudent from './pages/dashboardstudent/dashboardstudent/DashboardStudent';
import CourseStudent from './pages/dashboardstudent/coursestudent/CourseStudent';
import AssignmentStudent from './pages/dashboardstudent/assignmentstudent/AssignmentStudent';
import QuizStudent from './pages/dashboardstudent/quizstudent/QuizStudent';
import TestStudent from './pages/dashboardstudent/teststudent/TestStudent';
import GradesStudent from './pages/dashboardstudent/gradesstudent/GradesStudent';
import AttendanceStudent from './pages/dashboardstudent/attendancestudent/AttendanceStudent';
import ProgressStudent from './pages/dashboardstudent/progressstudent/ProgressStudent';
import ProfileStudent from './pages/dashboardstudent/profilestudent/ProfileStudent';
import SADashboard from './pages/superadmin/sadashboard/SADashboard';
import User from './pages/superadmin/user/User';
import SALogin from './pages/superadmin/salogin/SALogin';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {

  const { currentUser } = useContext(AuthContext)



  const RequireAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to="/adminx/login" />
  };

  console.log(currentUser);


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/student' element={<DashboardStudent />}>
        <Route path='/student/home' element={<HomeStudent />} />
        <Route path='/student/course' element={<CourseStudent />} />
        <Route path='/student/assignment' element={<AssignmentStudent />} />
        <Route path='/student/quiz' element={<QuizStudent />} />
        <Route path='/student/test' element={<TestStudent />} />
        <Route path='/student/grades' element={<GradesStudent />} />
        <Route path='/student/attendance' element={<AttendanceStudent />} />
        <Route path='/student/progress' element={<ProgressStudent />} />
        <Route path='/student/profile' element={<ProfileStudent />} />
      </Route>
      <Route path='/adminx' element={
        <RequireAuth>
          <SADashboard />
        </RequireAuth>
      }>
        <Route path='/adminx/user' element={<User />} />
      </Route>
      <Route path='/adminx/login' element={<SALogin />}></Route>
    </Routes>
  );
}

export default App;
