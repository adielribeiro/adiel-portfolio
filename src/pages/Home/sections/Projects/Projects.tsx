import {  Container, Grid2, styled, Typography } from "@mui/material"
import StyledBox from "../../../../components/StyledBox/StyledBox"


const Projects = () => {

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up('xs')]: {

            paddingTop: "100px",
        },
        [theme.breakpoints.up('md')]: {

            paddingTop: "0",
        }
    }))

    const StyledSkillsButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        textAlign: "center",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main
        }

    }))

    const StyledA = styled("a")(() => ({

        textDecoration: "none",
        color:"darkgrey"

    }))



    return (
        <>
           
            <StyledProjects>
                <Container>
                    <Grid2 container alignContent={"center"} >
                        <Grid2 size={{ xs: 12, md: 7 }} alignItems={"center"} justifyItems={"center"} justifyContent={"center"}>
                            <Typography fontSize={"25px"} color="primary.contrastText" paddingTop={"10px"} align="center">
                                Veja alguns dos meus projetos!
                            </Typography>
                        </Grid2>

                        <Grid2 columns={{ xs: 2, md: 2 }} container display={"flex"} justifyContent={"center"} spacing={2}   >
                            <StyledBox >
                                <Grid2 height={"100%"} width={"100%"} container justifyContent={"center"} sx={{
                                    backgroundImage: 'url(/src/assets/images/bpm.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: 0.5,
                                    filter: 'blur(0.1px)'
                                }} />


                                <Grid2 container justifyContent={"center"} >
                                    <Typography color="primary.contrastText" paddingBottom={"10px"} align="center">
                                        <h1>Rick and Morty API</h1>
                                    </Typography>
                                    <Typography color="primary.contrastText" paddingBottom={"10px"}>
                                        API     que    busca informações da animação Rick an Morty, ulizando    a rickandmortyapi.com e salvando em um banco de dados SQL.
                                    </Typography>
                                    <StyledSkillsButton>
                                        <StyledA href="https://github.com/adielribeiro/RickAndMortyApi">Ver projeto</StyledA></StyledSkillsButton>
                                </Grid2>

                            </StyledBox>

                            <StyledBox>

                            <Grid2 height={"100%"} width={"100%"} container justifyContent={"center"} sx={{
                                    backgroundImage: 'url(/src/assets/images/pc.jpg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: 0.5,
                                    filter: 'blur(0.1px)',
                                    borderRight:'20px'
                                }} />

                                <Grid2 container justifyContent={"center"} >
                                    <Typography color="primary.contrastText" paddingBottom={"10px"} align="center">
                                        <h1>Ramal Digital</h1>
                                    </Typography>
                                    <Typography color="primary.contrastText" paddingBottom={"10px"} >
                                        Sistema que mostra uma lista com ramais, telefones e e-mails, também       é  possível editar e adicionar dados em um banco de dados SQL.
                                    </Typography>
                                    <StyledSkillsButton ><StyledA href="https://github.com/adielribeiro/RamalDigitalLaravel09">Ver Projeto</StyledA></StyledSkillsButton>
                                </Grid2>
                            </StyledBox>

                        </Grid2>
                    </Grid2>
                </Container>
            </StyledProjects>

        </>
    )
}

export default Projects

