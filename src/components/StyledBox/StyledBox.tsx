import { Box } from "@mui/material";
import { ReactNode } from "react";

interface StyledBoxProps {
    children: ReactNode

}
const StyledBox: React.FC<StyledBoxProps> = ({ children }) => (
    <>
        <Box
            position={"relative"}
            width={"300px"}
            margin={"10px"}
            height={"300px"}
            boxShadow={"20px 20px 50px rgba(0,0,0,0.5)"}
            display={"flex"}
            borderRadius={"15px"}
            overflow={"hidden"}
            justifyContent={"center"}
            alignItems={"center"}
        >

            {children}
        </Box>

    </>
);

export default StyledBox
