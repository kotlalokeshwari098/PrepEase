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

const routes = createBrowserRouter(
  createRoutesFromElements(
      <Route>
         <Route path='/signup' element={<Signup />}/>
         <Route path='/login' element={<Login />}/>

        <Route path="/" element= {<AppLayout />}>
          <Route index element={<Home />}/>
          <Route path='/questions' element={<ExploreQuestions />}/>
          <Route path='/questions/:subject' element={<SubjectQuestions />}/>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App