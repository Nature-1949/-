import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import MyPlan from './pages/MyPlan';
import Maintenance from './pages/Maintenance';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/my-plan" element={<MyPlan />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
