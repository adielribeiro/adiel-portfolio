import styled from "@emotion/styled"
import { AppBar, MenuItem,Toolbar } from "@mui/material"
import { Link} from "react-scroll";



const NavBar = () => {

  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-between",
    textDecoration:"none",
    
  }))


  return (
    <>
      <AppBar position="fixed" className="nav-itens">
        <StyledToolbar>
          <MenuItem ><Link to="hero">Home</Link></MenuItem>
          <MenuItem ><Link to="about">About</Link></MenuItem>
          <MenuItem ><Link to="skills">Skills</Link></MenuItem>
          <MenuItem ><Link to="projects">Projects</Link></MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  )
}

export default NavBar
