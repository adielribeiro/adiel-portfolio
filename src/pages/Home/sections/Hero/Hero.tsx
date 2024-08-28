import { Box, Button, Container, Grid2, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems:"center"
  }))


  const StyledImage = styled("img")(() => ({
    width: "85%",
    borderRadius: "70%"
  }))

  return (
    <>
      <StyledHero>

        <Container>

          <Grid2 container spacing={2}>

            <Grid2 size={{ xs: 12, md: 4 }}>
              <Box position={"relative"}>
                <Box position="absolute" width={"100%"} top={-100} right={0} >
                  <AnimatedBackground />
                </Box>
                <Box position={"relative"} textAlign={"center"}>
                  <StyledImage src={Avatar} />
                </Box>
              </Box>
              
            </Grid2>

            <Grid2 size={{ xs: 12, md: 7 }}>
              <Typography color="primary.contrastText" variant="h1" textAlign={"center"} pb={2}>Adiel Vale</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>I'm a Software Developer</Typography>

              <Grid2 container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>

                <Grid2 size={{ xs: 12, md: 4}} display={"flex"} justifyContent={"center"}>                  
                    <StyledButton>
                      <CloudDownloadIcon/>  
                       <Typography>Download CV</Typography>
                    </StyledButton>
                </Grid2>

                <Grid2 size={{ xs: 12, md: 4}} display={"flex"} justifyContent={"center"}>
                  <StyledButton>
                    <MarkEmailReadIcon/>
                    <Typography>Contact me</Typography>
                  </StyledButton>
                </Grid2>

              </Grid2>

          </Grid2>

        </Grid2>


      </Container>

    </StyledHero >  
      </>
    )
  }

export default Hero
