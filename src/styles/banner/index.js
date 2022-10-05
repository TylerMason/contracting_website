import {styled} from '@mui/material/styles';
import {Box, Typography} from '@mui/material';
import { Colors } from '../theme';

// This is basically a standard CSS style of a container for our specific banner. This can probably just be reused for a lot of things that we want to "contain"

export const BannerContainer = styled(Box)(({theme}) => ({

    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0px 0px',
    backgroundColor: Colors.light_gray,
    
    //WHAT DOES THIS DO?

    /* The breakpoints refer to the screen WIDTH, So when we switch to the mobile "width" of 
        of the screen then we are going to go in a "column" direction and center it so it looks
        better on a mobile phone. THIS ONLY TRIGGERS WHEN WE HIT OUR MOBILE PHONE SCREEN WIDTH "BREAKPOINT"
    */
    
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

export const BannerImage = styled('img')(({src, theme}) => ({
    src: `url(${src})`,
    width: '500px',

    // this is for tablet size?
    [theme.breakpoints.down('md')]: {
        width: '350px'
    },

    // this is for mobile phone size?
    [theme.breakpoints.down('sm')]: {
        width: '320px',
        height: '300px'
    }
}))

export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 420,
    padding: '30px'
}))

export const BannerTitle = styled(Typography)(({theme}) => ({
    lineHeight: 1.5,
    fontSize: '72px',
    marginBottom: '20px',

    // this is for mobile phone size?
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px'
    }

}))

export const BannerDescription = styled(Typography)(({theme}) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: '3em',

    // this if for tablet size?
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em',
    }

}))