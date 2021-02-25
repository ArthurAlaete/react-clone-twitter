import React from 'react';

import ProfilePage from '../ProfilePage/index';

import { Container, 
    Header, 
    BackIcon, 
    ProfileInfo, 
    BottomMenu, 
    HomeIcon, 
    SearchIcon, 
    BellIcon, 
    EmailIcon 
} from './styles';

const Main: React.FC = () => {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>

                <ProfileInfo>
                    <strong>Arthur Alaete</strong>
                    <span>613 Tweets</span>
                </ProfileInfo>
            </Header>

            {/* <ProfilePage /> */}


            <BottomMenu>
                <HomeIcon />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottomMenu>
        </Container>
    )
}

export default Main;