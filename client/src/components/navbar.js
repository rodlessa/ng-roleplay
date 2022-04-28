import * as React from 'react';
import { AppBar,Box,Toolbar, Typography,IconButton,MenuItem } from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";
const pages = [
  {
    to: '/',
    name: 'Home'
  },
  {
    to: '/create',
    name: 'Create'
  }

];
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NG+ Roleplay Classes
          </Typography>
          {pages.map((page) => (
                <MenuItem key={page} >
                  <Typography textAlign="right"><a href={page.to}>{page.name}</a></Typography>
                </MenuItem>
              ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}