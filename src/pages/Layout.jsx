import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <Link to='/signup'> Signup</Link>
        <Link to='/login'> Login</Link>
        <Link to='/contact'> Contact</Link>
        <Link to='/'>Home</Link>
      </nav>
      <main>
        <h1>React Forms with Formik and Yup</h1>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
