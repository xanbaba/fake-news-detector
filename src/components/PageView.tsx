import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PricingPage from './pages/PricingPage'
import FeaturesPage from './pages/FeaturesPage'
import AboutUsPage from './pages/AboutUsPage'
import GetStarted from './pages/GetStarted'
import CompleteSignIn from './pages/CompleteSignIn'

export default function PageView() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/complete-signin" element={<CompleteSignIn />} />
    </Routes>
  )
}
