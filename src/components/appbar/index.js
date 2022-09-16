import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";



export default function Appbar() {

    
    const theme = useTheme();
    // if matches is true then that means we are mobile, else we are on desktop
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {matches ? <AppbarMobile/> : <AppbarDesktop/> }
        </>
    );
}