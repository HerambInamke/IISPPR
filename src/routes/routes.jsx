import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery1 from '../pages/Gallery.jsx';
import Projects from '../pages/Projects';
import Testimonials from '../pages/Testimonials';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'gallery',
        element: <Gallery1 />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'testimonials',
        element: <Testimonials />
      }
    ]
  }
]);

export default router; 