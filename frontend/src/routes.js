import Home from './pages/homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

import PricingPlans from './pages/PricingPlans';
import Login from './pages/Login';
import Registration from './pages/Registration';
import UserDashboard from './pages/UserDashboard';
import StartTest from './pages/StartTest';
import Profile from './pages/Profile'; // Import the Profile component


const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/About', component: <About /> },
  { path: '/Contact', component: <Contact /> },
  { path: '/FAQ', component: <FAQ /> },
  { path: '/PricingPlans', component: <PricingPlans /> },
  { path: '/login', component: <Login /> },
  { path: '/registration', component: <Registration /> },
  { path: '/Dashboard', component: <UserDashboard /> },
  { path: '/Start-Test', component: <StartTest /> },
  { path: '/Profile', component: <Profile /> },
];

export default routes;