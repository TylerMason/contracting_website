import { Typography } from "@mui/material";
import {Box, styled} from "@mui/system";
import { Colors } from "../theme";

export const PromotionsContainer = styled(Box)(({theme}) => ({

    [theme.breakpoints.up('md')]: {
        padding: '40px 0px 40px 0px'
    },

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 20px 0px',

    // this PREVENTS the display of scroll bars so it can look better
    overflow: 'hidden',
    background: Colors.secondary
}))

export const MessageText = styled(Typography)(({theme}) => ({
    fontFamily: '"Montez", "cursive"',
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
    color: Colors.white,
    fontSize: '1.5rem',
}))