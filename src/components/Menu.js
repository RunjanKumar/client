import { Box } from "@mui/material";
import MenuHeader from "./MenuHeader";
import MenuSearch from "./MenuSearch";
import Conversations from "./Menu/Conversations";
import { useState } from "react";



const Menu = () => {
    const [text, setText] = useState('');
    return(
        <Box>
            <MenuHeader />
            <MenuSearch setText={setText} />
            <Conversations text= {text}/>
        </Box>
    )
}

export default Menu;