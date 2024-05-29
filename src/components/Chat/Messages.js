import { Box, styled } from "@mui/material"
import Footer from "./Footer";

const Wrapper = styled(Box)`
    background-image: url(${'https://media.istockphoto.com/id/1403848173/vector/vector-online-chatting-pattern-online-chatting-seamless-background.jpg?s=612x612&w=0&k=20&c=W3O15mtJiNlJuIgU6S9ZlnzM_yCE27eqwTCfXGYwCSo='});
    background-size: 50%;
    color: rgb(0,0,0,0.4);
`;

const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;  
`;

const Messages = () => {
    return (
        <Wrapper>
            <Component>

            </Component>
            <Footer />
        </Wrapper>
    )
}

export default Messages;