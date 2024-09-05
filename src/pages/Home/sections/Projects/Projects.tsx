import { Container, Grid2, styled, Typography } from "@mui/material"
import StyledBox from "../../../../components/StyledBox/StyledBox"
import pc from "../../../../assets/images/pc.jpg"
import bpm from "../../../../assets/images/bpm.png"
import tecno from "../../../../assets/images/tecno.jpg"


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
        color: "darkgrey"

    }))

    const StyledImageProjects = styled("img")(() => ({

        width:"100%",
        backgroundSize:"cover",
        backgroundPosition:"center",
        objectFit:"cover"
       
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
                                <Grid2 height={"100%"} width={"100%"} container justifyContent={"center"} >
                                    <StyledImageProjects src={pc}/>
                                </Grid2>

                                <Grid2 container justifyContent={"center"} >
                                    <Typography color="primary.contrastText" paddingBottom={"10px"} align="center">
                                        Rick and Morty API
                                    </Typography>
                                    <Typography color="primary.contrastText" paddingBottom={"10px"}>
                                        API     que    busca informações da animação Rick an Morty, ulizando    a rickandmortyapi.com e salvando em um banco de dados SQL.
                                    </Typography>
                                    <StyledSkillsButton>
                                        <StyledA href="https://github.com/adielribeiro/RickAndMortyApi">Ver projeto</StyledA></StyledSkillsButton>
                                </Grid2>

                            </StyledBox>

                            <StyledBox>

                                <Grid2 height={"100%"} width={"100%"} container justifyContent={"center"} >
                                     <StyledImageProjects src={bpm}/>
                                </Grid2>
                                <Grid2 container justifyContent={"center"} zIndex={0}>
                                    <Typography color="primary.contrastText" paddingBottom={"10px"} align="center">
                                        Ramal Digital
                                    </Typography>
                                    <Typography color="primary.contrastText" paddingBottom={"10px"} >
                                        Sistema que mostra uma lista com ramais, telefones e e-mails, também       é  possível editar e adicionar dados em um banco de dados SQL.
                                    </Typography>
                                    <StyledSkillsButton ><StyledA href="https://github.com/adielribeiro/RamalDigitalLaravel09">Ver Projeto</StyledA></StyledSkillsButton>
                                </Grid2>
                            </StyledBox>

                            <StyledBox>

                                <Grid2 height={"100%"} width={"100%"} container justifyContent={"center"} >
                                <StyledImageProjects src={tecno}/>
                                </Grid2>

                                <Grid2 container justifyContent={"center"} >
                                    <Typography color="primary.contrastText" paddingBottom={"10px"} align="center">
                                        My Portfolio
                                    </Typography>
                                    <Typography color="primary.contrastText" paddingBottom={"10px"} >
                                        Uma Landing Page moderna para usar como portfólio, design "Mobile-First", usando as tecnologias: React, Material UI e TypeScrispt.
                                    </Typography>
                                    <StyledSkillsButton ><StyledA href="https://github.com/adielribeiro/my-portfolio">Ver Projeto</StyledA></StyledSkillsButton>
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

