import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();
  const role = user?.role;

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-brand">
          <svg className="sidebar-header-icon" viewBox="0 0 32 32" aria-label="Deloitte logo" role="img">
            <path d="M16 2L28 14L16 26L4 14L16 2Z" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinejoin="round"/>
            <path d="M16 7L23 14L16 21L9 14L16 7Z" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinejoin="round"/>
            <path d="M16 11.5L19.4 14.9L16 18.3L12.6 14.9L16 11.5Z" fill="#FFFFFF"/>
          </svg>
          <div className="sidebar-header-copy">
            <span className="sidebar-header-brand-name">Deloitte</span>
            <span className="sidebar-header-subtitle">Resource Portal</span>
          </div>
        </div>
      </div>
      <nav className="sidebar-nav">
        {(role === 'admin' || role === 'senior_associate') && (
          <>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
              <span>📊</span> Dashboard
            </NavLink>
            <NavLink to="/resources" className={({ isActive }) => isActive ? 'active' : ''}>
              <span>👥</span> Resources
            </NavLink>
          </>
        )}
        {role === 'admin' && (
          <NavLink to="/admin" className={({ isActive }) => isActive ? 'active' : ''}>
            <span>⚙️</span> Administration
          </NavLink>
        )}
        <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
          <span>👤</span> My Profile
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;