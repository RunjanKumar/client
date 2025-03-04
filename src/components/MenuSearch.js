import { Box, styled } from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material";
import { InputBase } from "@mui/material";


const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    width: 100%;
    margin: 0 13px;
    width: 100%;
    border-radius: 10px;
`;

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 3px 10px;
    color: #919191;
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    padding-left: 55px;
    height: 15px;
    font-size: 14px;
`;

const Component = styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    align-items: center;
`;
const MenuSearch = ({setText}) => {
    return (
        <Component>
        <Wrapper>
            <Icon>
                <SearchIcon fontSize="small"/>
            </Icon>
            <InputField placeholder="Search or start new chat"
                onChange={(e) => setText(e.target.value)}
            />
        </Wrapper>
        </Component>
    )
}

export default MenuSearch;