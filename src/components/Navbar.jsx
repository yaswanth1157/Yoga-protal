import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

const pages = ['Home', 'About', 'Login', 'Signup','Profile', 'YogaTrainer','CourseList','LogOut'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDashboardMenuClick = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleDashboardMenuClose = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar disableGutters>
          {<Typography
            component={Link}
            to="/home"
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            YOGA Academy
          </Typography> }

          {/* {pages.map((page) => (
            <Typography
              key={page}
              component={Link}
              to={`/${page.toLowerCase()}`}
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {page}
            </Typography>
          ))} */}

          

          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ marginLeft: 'auto' }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
              >
                {page}
              </MenuItem>
            ))}
           
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
