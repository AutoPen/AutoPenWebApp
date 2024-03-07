import Home from './pages/homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import FAQPage from './pages/FAQPage';
import PricingPlans from './pages/PricingPlans';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/About', component: <About /> },
  { path: '/Contact', component: <Contact /> },
  { path: '/FAQ', component: <FAQ /> },
  { path: '/PricingPlans', component: <PricingPlans /> },
  { path: '/FAQPage', component: <FAQPage /> },
];

export default routes;