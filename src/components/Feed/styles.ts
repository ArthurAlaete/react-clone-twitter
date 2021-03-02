import styled from 'styled-components';
import { Retweet } from '../../styles/icons';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RetweetIcon = styled(Retweet)`
    width: 50px;
    height: 50px;
`;

export const Tab = styled.div`
    margin-top: 10px;
    padding: 11px 0 15px;

    font-weight: bold;
    font-size: 15px;
    text-align: center;

    outline: 0;
    cursor: pointer;
    border-bottom: 2px solid var(--twitter);

    &:hover {
        background: var(--twitter-dark-hover);
    }

`;


export const Tweets = styled.div`
    display: flex;
    flex-direction: column;
    
    flex-shrink: 0;
`;