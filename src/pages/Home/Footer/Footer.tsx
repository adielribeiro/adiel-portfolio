
import { Grid2, styled, Typography } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {

    const StyledFooter = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up('xs')]: {

            padding: "3rem"
        },
        [theme.breakpoints.up('md')]: {

            padding: "3rem",

        }
    }))



    return (
        <>
            <StyledFooter>
                <Grid2
                    container
                    className="footer-section"
                    columns={{ xs: 1, md: 3 }}
                    maxWidth={"1200px"}
                    maxHeight={"100%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Grid2 display={"flex"} gap={2}>
                        <Grid2>
                            <Typography color="primary.contrastText" fontSize={"17px"}>
                                Developed by Adiel Vale
                            </Typography>
                        </Grid2>
                        <Grid2>
                            <a href="https://w.app/72qTNX">
                                <WhatsAppIcon fontSize={"medium"} cursor={"pointer"} color="success" />
                            </a>
                        </Grid2>
                    </Grid2>

                </Grid2>
            </StyledFooter>
        </>
    )
}

export default Footer




