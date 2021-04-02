import React from 'react';

import { 
    Container, 
    Retweeted,
    RetweetIcon,
    Body,
    Avatar, 
    Content,
    Header,
    Dot,
    Time,
    Description,
    ImageContent,
    Icons, 
    Status,
    CommentIcon,
    LikeIcon
} from './styles';


const Tweet = () => {
    return (
        <Container>
            <Retweeted>
                <RetweetIcon />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <strong>Developer</strong>
                        <span> developer</span>
                        <Dot />
                        <Time>20 de Jan</Time>
                    </Header>

                    <Description>Aprimorando o desenvolvimento</Description>
                    
                    <ImageContent />
                    
                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            32
                        </Status>
                        <Status>
                            <LikeIcon />
                            55
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}

export default Tweet;
