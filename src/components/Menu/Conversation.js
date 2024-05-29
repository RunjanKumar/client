import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../AccountProvider";
import { setConversation } from "../../Service/api";

const Component = styled(Box)`
    display: flex;
    height: 60px;
    padding: 13px 0;
    cursor: pointer;
`;

const Image = styled('img')({
    width: 65,
    height: 40,
    borderRadius: '50%',
    padding: '0 14px',
});


const Conversation = ({ user }) => {

    const { setPerson, account } = useContext(AccountContext)
    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub , receiverId: user.sub });
    };
    return (<>
        <Component onClick={() => getUser()}>
            <Box>
                <Image src={user.picture} alt="dp" />
            </Box>
            <Box>
                <Box>
                    <Typography>
                        {user.name}
                    </Typography>
                </Box>

            </Box>
        </Component>
    </>)
}

export default Conversation;