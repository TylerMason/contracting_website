import { Typography /*useMediaQuery*/ } from "@mui/material";
//import { useTheme } from "@mui/material";
import { BannerContainer, BannerTitle, BannerContent, BannerDescription, BannerImage } from "../../styles/banner";

export default function Banner() {

    //const theme = useTheme();
    // if matches is true then that means we are mobile, else we are on desktop
    //const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src="./images/banner/banner.png"/>
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">
                    New Bags
                </BannerTitle>
                <BannerDescription variant="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
        
    )


}