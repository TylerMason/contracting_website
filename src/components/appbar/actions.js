import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PersonIcon from "@mui/icons-material/Person"
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, AppbarContainer, AppbarHeader } from "../../styles/appbar";




export default function Actions() {

    const Component = matches 
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;


    return (
        <MyList type="row">
            <ListItemButton
                sx={{
                    justifyContent: "center",
                }}       
            >
                <ListItemIcon
                    sx={{
                        display: "flex",
                        justifyContent: 'center'
                    }}
                
                >
                    <ShoppingCartIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
                sx={{
                    justifyContent: "center",
                }}       
            >
                <ListItemIcon
                    sx={{
                        display: "flex",
                        justifyContent: 'center'
                    }}
                
                >
                    <FavoriteIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
                sx={{
                    justifyContent: "center",
                }}
            >
                <ListItemIcon
                    sx={{
                        display: "flex",
                        justifyContent: 'center'
                    }}
                >
                    <PersonIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
        </MyList>

    )
}