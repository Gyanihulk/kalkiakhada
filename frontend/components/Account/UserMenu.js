import styled from 'styled-components'
import { useMutation } from '@apollo/client'

import Link from 'next/link'
import IconUser from '../Icons/User'
import SvgChevron from '../Icons/ChevronRight'

import { END_USER_SESSION } from 'lib/user/mutations'
import { CURRENT_USER_QUERY } from './useUser'

function UserSlideoutNavigation({ isUserMenuOpen, setIsUserMenuOpen, height }) {
  const [signout] = useMutation(END_USER_SESSION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    onCompleted: () => {
      setIsUserMenuOpen(false)
    },
  })
  return (
    <UserSlideoutNavigationContainer height={height} isUserMenuOpen={isUserMenuOpen}>
      <Link href="/">
        <NavItem>
          <Avatar>
            <IconUser width={35} height={35} />
          </Avatar>
          <NavTitleContainer>
            <NavItemTitle>Switch profile</NavItemTitle>
            <SubTitle>First Last</SubTitle>
          </NavTitleContainer>
          <SvgChevron />
        </NavItem>
      </Link>
      <Link href="/">
        <NavItem>
          <Avatar>
            <IconUser width={35} height={35} />
          </Avatar>
          <NavTitleContainer>
            <NavItemTitle>View/edit profile</NavItemTitle>
            <SubTitle>First Last</SubTitle>
          </NavTitleContainer>
          <SvgChevron />
        </NavItem>
      </Link>
      <Link href="/">
        <NavItem>
          <NavTitleContainer>
            <NavItemTitle>Messages</NavItemTitle>
            <SubTitle>n messages</SubTitle>
          </NavTitleContainer>
          <SvgChevron />
        </NavItem>
      </Link>
      <Link href="/">
        <NavItem>
          <NavTitleContainer>
            <NavItemTitle>Alerts</NavItemTitle>
            <SubTitle>n alerts</SubTitle>
          </NavTitleContainer>
          <SvgChevron />
        </NavItem>
      </Link>
      <Link href="/">
        <NavItem>
          <NavTitleContainer>
            <NavItemTitle>Posts</NavItemTitle>
            <SubTitle>n posts</SubTitle>
          </NavTitleContainer>
          <SvgChevron />
        </NavItem>
      </Link>
      <Link href="/">
        <NavItem>
          <NavTitleContainer>
            <NavItemTitle>Listings</NavItemTitle>
            <SubTitle>n listings</SubTitle>
          </NavTitleContainer>
          <SvgChevron />
        </NavItem>
      </Link>
      <Link href="/">
        <NavItem>
          <NavTitleContainer>
            <NavItemTitle>Groups</NavItemTitle>
            <SubTitle>n groups</SubTitle>
          </NavTitleContainer>
          <SvgChevron />
        </NavItem>
      </Link>
      <Link href="/">
        <NavItem>
          <NavTitleContainer>
            <NavItemTitle>Interests</NavItemTitle>
            <SubTitle>n interests</SubTitle>
          </NavTitleContainer>
          <SvgChevron />
        </NavItem>
      </Link>
      <Link href="/">
        <NavItem>
          <NavTitleContainer>
            <NavItemTitle>Favorites</NavItemTitle>
            <SubTitle>n saved favorites</SubTitle>
          </NavTitleContainer>
          <SvgChevron />
        </NavItem>
      </Link>
      <Link href="/">
        <NavItem>
          <NavTitleContainer>
            <NavItemTitle>Saved</NavItemTitle>
            <SubTitle>n saved posts</SubTitle>
          </NavTitleContainer>
          <SvgChevron />
        </NavItem>
      </Link>
      <Link href="/">
        <NavItem>
          <NavTitleContainer>
            <NavItemTitle>Settings</NavItemTitle>
          </NavTitleContainer>
          <SvgChevron />
        </NavItem>
      </Link>
      <NavItemButton type="button" onClick={signout}>
        <NavTitleContainer>
          <NavItemTitle>Log out</NavItemTitle>
        </NavTitleContainer>
        <SvgChevron />
      </NavItemButton>
    </UserSlideoutNavigationContainer>
  )
}

const Avatar = styled.div`
  width: 35px;
  height: 35px;
`

const NavTitleContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const SubTitle = styled.div`
  font-weight: 500;
  font-size: 11px;
  line-height: 11px;
  color: var(--cb--gray-01);
`

const NavItemTitle = styled.h3`
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  color: var(--cb--black-03);
`

const NavItemButton = styled.button`
  display: flex;
  align-items: center;
  height: 52px;
  cursor: pointer;
  gap: 8px;
  background: unset;
  outline: 0;
  border: unset;
  border-bottom: 1px solid var(--cb--light-gray-03);
  text-align: left;
  padding: 0;

  svg {
    color: var(--cb--black-03);
  }

  &:hover {
    text-decoration: none;
  }
`

const NavItem = styled.a`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--cb--light-gray-03);
  height: 52px;
  cursor: pointer;
  gap: 8px;

  svg {
    color: var(--cb--black-03);
  }

  &:hover {
    text-decoration: none;
  }
`

const UserSlideoutNavigationContainer = styled.div`
  position: fixed;
  overflow-x: hidden;
  inset: ${({ height }) => `${height} 0 65px 0`};
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: ${({ height }) => `calc(100vh - 65px - ${height})`};
  background: white;
  padding: 0 20px;
  transition: all 250ms ease-out;
  transform: translateX(${({ isUserMenuOpen }) => (isUserMenuOpen ? '0%' : '100%')});
`

export default UserSlideoutNavigation
