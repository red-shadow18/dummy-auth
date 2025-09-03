// src/components/Dashboard.jsx
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Dashboard = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <h2>Welcome to your dashboard!</h2>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
