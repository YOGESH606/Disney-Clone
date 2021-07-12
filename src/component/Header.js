import React, {useEffect} from 'react'
import styled from 'styled-components'
import {auth,provider} from '../firebase';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin, userLogout } from '../redux/actions/movies.actions';

function Header() {
    const dispatch = useDispatch();
    const userName=useSelector(state=>state.userReducer.name)
    const userPhoto=useSelector(state=>state.userReducer.photo)
    const history=useHistory();
    /* eslint-disable */
    useEffect(() => {
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(userLogin(user))
            }
        })
        history.push('/')
    }, [])
    /* eslint-enable */
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispatch(userLogin(result.user))
        })
        history.push('/')
    }

    const signOut=()=>{
        auth.signOut()
        .then(()=>{
            dispatch(userLogout())
            history.push("/login")
        })
    }
    
    
    return (
        <Nav>
            <Logo src='/images/logo.svg' />
            {
                !userName ?
                <LoginContainer>
                        <Login onClick={signIn}>Login</Login>
                </LoginContainer>:
                <>
                    <NavMenu>
                        <a href="/">
                            <img src='/images/home-icon.svg' alt="nav-icon"/>
                            <Link to="/">
                                <span>HOME</span>
                            </Link>
                        </a>
                        <a href="/">
                            <img src='/images/search-icon.svg' alt="nav-icon"/>
                            <span>SEARCH</span>
                        </a>
                        <a href="/">
                            <img src='/images/watchlist-icon.svg' alt="nav-icon"/>
                            <span>WATCHLIST</span>
                        </a>
                        <a href="/">
                            <img src='/images/original-icon.svg' alt="nav-icon"/>
                            <span>ORIGINALS</span>
                        </a>
                        <a href="/">
                            <img src='/images/movie-icon.svg' alt="nav-icon"/>
                            <span>MOVIES</span>
                        </a>
                    </NavMenu >

                    <UserImg src={userPhoto} onClick={signOut} />
                </>

            }
        </Nav>
    )
}

export default Header;

const Nav = styled.nav`
    height: 70px;    
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px ;
    overflow-x: hidden;
`;
const Logo = styled.img`
    width: 80px;
`;
const LoginContainer=styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;
const Login = styled.button`
    border:1px solid #F9F9F9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }

`;

const NavMenu = styled.div`
    display: flex;
    flex:1;
    margin-left: 25px;
    align-items: center;

    a{
        display: flex;
        align-items:center;
        padding: 0 12px;
        cursor:pointer; 

        img{
            height: 20px ;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            color:white;

            &:after{
                content: "";
                height: 2px;
                background:white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform:scaleX(0);
                transform-origin:left center;
                transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        } 
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`;
const UserImg=styled.img`
     height: 35px;
     border-radius: 45%;
`;



