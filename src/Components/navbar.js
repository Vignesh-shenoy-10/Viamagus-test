import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Test
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Link className="Nav__createpost" to="/">
          <MenuItem>Home</MenuItem>
          </Link>
          <Link className="Nav__createpost" to="/createpost">
          <MenuItem>Create a post</MenuItem>
          </Link>
          <Link className="Nav__createpost" to="/displayposts">
          <MenuItem>View posts</MenuItem>
          </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default Navbar;
