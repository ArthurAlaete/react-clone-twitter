import React from 'react';

import { 
    Container, 
    Avatar, 
    Banner, 
    ProfileData, 
    Followage, 
    LocationIcon, 
    CakeIcon,
    EditButton
} from './styles';


const ProfilePage = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                <EditButton outlined>Editar Perfil</EditButton>

                <h1>Arthur Alaete</h1>
                <h2>@arthur_alaete</h2>

                <p>
                    Developer at Arthur Alaete Lopes Pires
                </p>
                <ul>
                    <li>
                        <LocationIcon />
                        Rio Grande do Norte, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 27 de Outubro de 1994
                    </li>
                </ul>
                <Followage>
                    <span>
                        seguindo <strong>94</strong>
                    </span>
                    <span>
                        <strong>672</strong> seguidores
                    </span>
                </Followage>
            </ProfileData>
        </Container>    
    );
}

export default ProfilePage;
