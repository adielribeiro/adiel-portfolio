import {Typography } from "@mui/material";
import { ReactNode } from "react";

interface StyledTypographyProps {
    children: ReactNode

}
const StyledTypography: React.FC<StyledTypographyProps> = ({ children }) => (
    <>
        <Typography 
            sx={{
                color:"white",
                transform: "translateY(20px)",
                transition: "0.6s",
                '&:hover': {
                    transform: "translateY(0px)",
                }}}
        >

            {children}
        </Typography>

    </>
);

export default StyledTypography
