import {  Container, Grid2, Typography, styled } from "@mui/material"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { IconContext } from "react-icons";


const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        width: "100%",
        display: "flex",
        alignItems: "center",

        [theme.breakpoints.up('xs')]: {

            paddingTop: "50px",
            height: "75vh",
        },
        [theme.breakpoints.up('md')]: {

            paddingTop: "5px",
            padding: "5rem 15rem",
            height: "100%"
        }

    }))

    return (
        <>
            
            <StyledAbout>   
                <Container>
                    <Grid2 size={{ xs: 12, md: 7 }}>
                        <Grid2>
                            <Typography color="primary.contrastText" variant="h6" >
                                Olá a todos! Meu nome é Adiel Vale e sou um apaixonado por tecnologia. Nos últimos  12   anos,     tive    a oportunidade de trabalhar em diversos projetos desafiadores     na área   de tecnologia,    e nos     últimos 3 anos, tenho me dedicado intensamente    ao     desenvolvimento de software. Sou   um entusiasta    da programação e adoro  transformar  ideias em soluções digitais inovadoras.
                            </Typography>
                            <Grid2 container>
                                <Typography color="primary.contrastText" variant="subtitle1" justifyContent={"center"}  >
                                    <Typography fontSize={"17px"} paddingTop={"5px"}>
                                        Me siga na redes sociais
                                    </Typography>
                                    <Grid2 display={"flex"} gap={"15px"} fontSize={"20px"} textAlign={"right"} paddingTop={"8px"}>
                                        <IconContext.Provider value={{ color: "white" }}>
                                            <a href="https://www.linkedin.com/in/adiel-ribeiro-do-vale-j%C3%BAnior-b5094574/" color="disable" >
                                                <FaLinkedinIn />
                                            </a>
                                            <a href="https://github.com/adielribeiro">
                                                <FaGithub cursor={"pointer"} />
                                            </a>
                                            <a href="https://www.instagram.com/junior.do.vale/">
                                                <FaInstagram cursor={"pointer"} />
                                            </a>
                                        </IconContext.Provider>
                                    </Grid2>
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Container>
            </StyledAbout>
        </>
    )
}

export default About
