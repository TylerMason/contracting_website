import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import { Typography } from '@mui/material'
import "@fontsource/montez"



export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'

}));

// header style

export const AppbarHeader = styled(Typography)(() => ({

    padding: '4px',
    flexGrow: 1,
    fontSize: '4em',
    fontFamily: '"Montez", "cursive"',
    color: Colors.secondary

}));