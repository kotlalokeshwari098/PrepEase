import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ExploreQuestions from "./pages/ExploreQuestions";
import SubjectQuestions from "./pages/SubjectQuestions";
import Dashboard from "./pages/Dashboard";
import Toast from "./components/Toast";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import AppInit from "./pages/AppInit";

const routes = createBrowserRouter(
  createRoutesFromElements(
      <Route>
         <Route path="/" element={<Home />}/>
         <Route path='/signup' element={<Signup />}/>
         <Route path='/login' element={<Login />}/>
        <Route element= {<AppLayout />}>         
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/questions' element={<ExploreQuestions />}/>
            <Route path='/questions/:subject' element={<SubjectQuestions />}/>
          </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div>
      <AppInit/>
      <RouterProvider router={routes} />
      <Toast/>
    </div>
  );
}

export default App