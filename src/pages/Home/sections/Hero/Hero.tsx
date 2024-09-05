import { Box,  Container, Grid2, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import { useState } from "react";
import saveAs from "file-saver";
import Modal from "../../../../components/Modal/Modal";
import Contact from "../../../../components/Contact/Contact";
import { useNavigate } from "react-router-dom";


const Hero = () => {

  const [pdfUrl] = useState(
    "/src/assets/docs/Adiel_Ribeiro_CV.pdf"
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();


  const handleDownload = () => {
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "Adiel_Vale_CV.pdf");
      })
      .catch((error) => {
        console.error("Erro ao baixar o arquivo:", error);
      });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/hero"); // Redirect to Hero page
  };



  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "90vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {

      paddingTop: "100px",
    },
    [theme.breakpoints.up('md')]: {

      paddingTop: "0",
    }
  }))

  const StyledImage = styled("img")(() => ({
    width: "75%",
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

                <Grid2 size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                  <StyledButton onClick={handleDownload} >
                    <CloudDownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>

                  <Grid2>
                    <Modal isOpen={isModalOpen}>
                      <Contact handleCloseModal={handleCloseModal} />
                    </Modal>
                  </Grid2>
                </Grid2>

                <Grid2 size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                  <StyledButton onClick={handleOpenModal}>
                    <MarkEmailReadIcon />
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
