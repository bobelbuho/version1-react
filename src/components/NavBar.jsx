import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  background-color: #FFF; // Adaptez cette valeur à votre palette de couleurs
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 78px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2); // Ajoute une ombre subtile pour un effet de profondeur
`;

const Logo = styled.img`
  height: auto;
  width: auto; // Adaptez la taille en fonction de votre design
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; // Ajoute de l'espace entre les éléments
`;

const SearchButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const PublishButton = styled.button`
  background-color: #000; // Adaptez cette valeur à votre palette de couleurs
  color: #FFF;
  border: none;
  padding: 10px 15px;
  border-radius: 4px; // Adaptez selon le style de vos boutons
  cursor: pointer;
`;

const ProfileButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const NavBarComponent = () => {
  return (
    <NavBar>
      <Logo src="chemin-vers-votre-logo.png" alt="Jeppey" />
      <NavItems>
        <SearchButton>
          <img src="chemin-vers-icone-recherche.png" alt="Rechercher" />
          Rechercher
        </SearchButton>
        <PublishButton>
          <img src="chemin-vers-icone-ajouter.png" alt="Publier" />
          Publier un trajet
        </PublishButton>
        <ProfileButton>
          <img src="chemin-vers-icone-profile.png" alt="Profil" />
        </ProfileButton>
      </NavItems>
    </NavBar>
  );
};
