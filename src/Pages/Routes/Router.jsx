import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Components/Home/Home';
import About from '../../Components/About/About'; // About import korte hobe

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // "Component" er bodole "element" use kora valo
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default router;