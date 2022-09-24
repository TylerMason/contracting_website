import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";



export default function AppbarDesktop({ matches }) {
    
    
    
    
    return (
        
        /*
        Appbar container
        Header
        List
        

        */

       <AppbarContainer>
            <AppbarHeader>My bags</AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Categories" />
                <ListItemText primary="Products" />
                <ListItemText primary="Contact Us" />
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon/>
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions/>
       </AppbarContainer>

    )
}

