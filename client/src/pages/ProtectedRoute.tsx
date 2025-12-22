import { NavLink, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

  
  if (!localStorage.getItem('token')) {
    return (
      <div className='unauthorized'>
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to='/login'>Login</NavLink> to gain access
        </span>
      </div>
    )
  }

  return <Outlet />
}
export default ProtectedRoute