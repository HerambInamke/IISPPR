import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import Projects from '../pages/Projects';
import Testimonials from '../pages/Testimonials';
import Reports from '../pages/Reports';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'projects', element: <Projects /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'reports', element: <Reports /> }, 

      { path: '*', element: <NotFound /> }
    ]
  }
]);

export default router;
