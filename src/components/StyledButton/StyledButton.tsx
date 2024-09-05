import { styled } from "@mui/material";
import React, { ReactNode} from "react";
import { saveAs } from "file-saver";

interface StyledButtonProps {
  children: ReactNode;
  onClick: () => void;
}


const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  
  const StyledButton = styled("button")(({ theme }) => ({
    // Your styles here
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  }), []);

  return (
    <>
      <StyledButton onClick={onClick}>
        {children}
      </StyledButton>
    </>
  );
};


export default StyledButton;