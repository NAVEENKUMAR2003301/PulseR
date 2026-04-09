import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MemberManagement from './pages/MemberManagement';
import BiometricAttendance from './pages/BiometricAttendance';
import SchedulingClasses from './pages/SchedulingClasses';
import PaymentsBilling from './pages/PaymentsBilling';
import TrainerStaff from './pages/TrainerStaff';
import AnalyticsReporting from './pages/AnalyticsReporting';
import CommunicationMarketing from './pages/CommunicationMarketing';
import InventoryEquipment from './pages/InventoryEquipment';
import AIWorkoutDiet from './pages/AIWorkoutDiet';
import ProgressTracking from './pages/ProgressTracking';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/features/member-management" element={<MemberManagement />} />
        <Route path="/features/biometric-attendance" element={<BiometricAttendance />} />
        <Route path="/features/scheduling-classes" element={<SchedulingClasses />} />
        <Route path="/features/payments-billing" element={<PaymentsBilling />} />
        <Route path="/features/trainer-staff" element={<TrainerStaff />} />
        <Route path="/features/analytics-reporting" element={<AnalyticsReporting />} />
        <Route path="/features/communication-marketing" element={<CommunicationMarketing />} />
        <Route path="/features/inventory-equipment" element={<InventoryEquipment />} />
        <Route path="/features/ai-workout-diet" element={<AIWorkoutDiet />} />
        <Route path="/features/progress-tracking" element={<ProgressTracking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
