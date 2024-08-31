import { Container, Grid2, styled, Typography } from "@mui/material"
import StyledBox from "../../../../components/StyledBox/StyledBox"
import StyledTypography from "../../../../components/StyledTypography/StyledTypography"


const Skills = () => {


    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        minHeight: "20vh",
        position: "relative",

        [theme.breakpoints.up('xs')]: {

            paddingTop: "5px",
            height: "100%",
        },
        [theme.breakpoints.up('md')]: {

            paddingTop: "5px",
            padding: "5rem 15rem",
            height: "100%"
        }

    }))

    


    return (
        <>
            
            <StyledSkills>
                <Container>
                    <Grid2>
                        <Typography align="center" color="primary.contrastText" fontSize={"30px"} paddingBottom={"5px"}>
                            Minhas principais Skills!
                        </Typography>
                    </Grid2>
                    <Grid2 container columns={{ xs: 3, md: 3 }} maxWidth={"1200px"} maxHeight={"100%"} flexWrap={"wrap"} zIndex={1}>
                        <StyledBox>
                            <StyledTypography>
                                <Grid2 container justifyContent={"center"}><h1>BPMS</h1></Grid2>
                                <h4>Desenvolvimento de processos utlizando ferramentas como a SoftExpert para o criação de Formulários e WorkFlows automatizandos e com integrações.</h4>
                            </StyledTypography>
                        </StyledBox>

                        <StyledBox>
                            <StyledTypography >
                            <Grid2 container justifyContent={"center"}><h1>Back-End</h1></Grid2>
                                <h4>Desenvolvimento de APIs para a utilzação em processos de integração, usando como base linguagem C#, EntytiFramework e SQL</h4>
                            </StyledTypography>
                        </StyledBox>
                        <StyledBox>
                            <StyledTypography>
                            <Grid2 container justifyContent={"center"}> <h1>Front-End</h1></Grid2>  
                                <h4>Desenvolvimento de designs responsivos e modernos, utlizando bibliotecas como React.JS, Material UI, Node.Js e outros.</h4>
                            </StyledTypography>
                        </StyledBox>
                    </Grid2>
                </Container>
            </StyledSkills>
            
        </>
    )
}

export default Skills
