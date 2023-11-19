import './App.css';
// import { useContext } from 'react';
import { userInputs } from './FormSource';
// import { AuthContext } from './context/AuthContext';
import { Routes, Route } from "react-router-dom";
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
import DashboardTeacher from './pages/dashboardteacher/dashboardteacher/DashboardTeacher';
import HomeTeacher from './pages/dashboardteacher/hometeacher/HomeTeacher';
import CourseTeacher from './pages/dashboardteacher/courseteacher/CourseTeacher';
import AssignmentTeacher from './pages/dashboardteacher/assignmentteacher/AssignmentTeacher';
import QuizTeacher from './pages/dashboardteacher/quizteacher/QuizTeacher';
import TestTeacher from './pages/dashboardteacher/testteacher/TestTeacher';
import GradesTeacher from './pages/dashboardteacher/gradesteacher/GradesTeacher';
import AttendanceTeacher from './pages/dashboardteacher/attendanceteacher/AttendanceTeacher';
import ProgressTeacher from './pages/dashboardteacher/progressteacher/ProgressTeacher';
import ProfileTeacher from './pages/dashboardteacher/profileteacher/ProfileTeacher';
import HomeAdmin from './pages/dashboardadmin/homeadmin/HomeAdmin';
import DashboardAdmin from './pages/dashboardadmin/dashboardadmin/DashboardAdmin';
import CourseAdmin from './pages/dashboardadmin/courseadmin/CourseAdmin';
import UsersAdmin from './pages/dashboardadmin/usersadmin/UsersAdmin';
import ClassesAdmin from './pages/dashboardadmin/classesadmin/ClassesAdmin';
import AddUser from './components/dashboardcomponents/admincomponents/adduser/AddUser';
import UserDetails from './pages/dashboardadmin/usersadmin/UserDetails';


function App() {

  // const { currentUser } = useContext(AuthContext)

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? (children) : <Navigate to="/adminx/login" />
  // };




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
      <Route path='/teacher' element={<DashboardTeacher />}>
        <Route path='/teacher/home' element={<HomeTeacher />} />
        <Route path='/teacher/course' element={<CourseTeacher />} />
        <Route path='/teacher/assignment' element={<AssignmentTeacher />} />
        <Route path='/teacher/quiz' element={<QuizTeacher />} />
        <Route path='/teacher/test' element={<TestTeacher />} />
        <Route path='/teacher/grades' element={<GradesTeacher />} />
        <Route path='/teacher/attendance' element={<AttendanceTeacher />} />
        <Route path='/teacher/progress' element={<ProgressTeacher />} />
        <Route path='/teacher/profile' element={<ProfileTeacher />} />
      </Route>
      <Route path="admin" element={<DashboardAdmin />}>
        <Route path="home" element={<HomeAdmin />} />
        <Route path="course" element={<CourseAdmin />} />
        <Route path="users" element={<UsersAdmin />} />
        <Route path=":userId" element={<UserDetails />} />


        <Route path="classes" element={<ClassesAdmin />} />
        <Route path="adduser" element={<AddUser inputs={userInputs} title="Add New User" />} />
      </Route>

      <Route path='/adminx' element={

        <SADashboard />

      }>
        <Route path='/adminx/user' element={<User />} />
      </Route>
      <Route path='/adminx/login' element={<SALogin />}></Route>
    </Routes>
  );
}

export default App;
