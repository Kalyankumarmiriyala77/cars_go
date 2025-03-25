import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './UserDashboard.module.css';
import { VscAccount } from "react-icons/vsc";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user details using session
        const response = await axios.get('http://localhost:8080/api/user', {
          withCredentials: true, // ✅ Sends JSESSIONID cookie
        });
  
        // ✅ Log the received data to inspect its structure
        console.log('Fetched user data:', response.data);
  
        if (response.data) {
          setUser(response.data);
        } else {
          navigate('/login'); // Redirect if session is missing
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login'); // Redirect on error
      }
    };
  
    fetchUserData();
  }, [navigate]);
  
  const handleLogout = async () => {
    try {
      // ✅ Ensure backend handles session invalidation
      await axios.post('http://localhost:8080/api/logout', {}, { withCredentials: true });
      navigate('/login'); // Redirect after logout
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed. Try again.');
    }
  };

  if (!user) return <p>Loading user data...</p>;

  return (
    <div className={styles.dashboardContainer}>
    {/* Navbar */}
    <nav className={styles.navbar}>
      <div className={styles.logo}>Cars-Go</div>
      <div className={styles.profileMenu}>
        <button
          className={styles.profileButton}
          onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
        >
           <VscAccount />
        </button>
        {profileDropdownOpen && (
          <ul className={styles.dropdownMenu}>
            <li><strong>Name:</strong> {user.name}</li>
            <hr></hr>
            <li><strong>Email:</strong>{user.email}</li>
            <hr></hr>
            <li onClick={handleLogout} className={styles.logoutOption}>Logout</li>
          </ul>
        )}
      </div>
    </nav>
   
  </div>
    );
};

export default UserDashboard;
