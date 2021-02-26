import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = ({ children }) => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Live Score</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
