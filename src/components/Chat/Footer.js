import { AttachFile, EmojiEmotionsOutlined, Mic } from "@mui/icons-material"
import { Box, InputBase, styled } from "@mui/material"

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 2px 15px;
    & > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    background-color: #FFFFFF;
    border-radius: 18px;
    width: calc(94% - 100%);
`;

const InputField = styled(InputBase)`
    width: 100%
`;

const Footer = () => {
    return (
        <Container>
            <EmojiEmotionsOutlined />
            <AttachFile />
            <Box>
                <InputBase placeholder="Type a message"/>
            </Box>
            <Mic />
        </Container>
    )
}

export default Footer;