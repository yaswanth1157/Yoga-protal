import React from 'react';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import ProfilePage from '../pages/ProfilePage';
import YogaTrainer from '../pages/YogaTrainer';
import CourseList from '../pages/CourseList';
import LogoutPage from '../pages/LogOut';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, link: '/home' },
    { text: 'About', icon: <InfoIcon />, link: '/about' },
    { text: 'Login', icon: <LoginIcon />, link: '/login' },
    { text: 'Sign in', icon: <PersonIcon />, link: '/sign-in' },
    { text: 'ProfilePage', icon: <ProfileIcon />, link: '/profilepage' },
    { text: 'YogaTrainer', icon: <ProfileIcon />, link: '/yogatrainer' }, 
    // { text: 'CourseList', icon: <ProfileIcon />, link: '/yogatrainer' },
    { text: 'LogOut', icon: <ProfileIcon />, link: '/logout' }, 
  ];

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="xs">
      <DialogContent>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} component={Link} to={item.link} onClick={onClose}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          {/* Include YogaTrainerList component in the Sidebar */}
          <YogaTrainer />
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default Sidebar;
