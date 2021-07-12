import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { setMovies } from '../redux/actions/movies.actions';

function Home() {
    const dispatch=useDispatch();
    /* eslint-disable */
    useEffect(() => {
       db.collection("movies").onSnapshot( (snapshot)=>{
            var tempMovies=snapshot.docs.map((doc)=>{
                return {id:doc.id, ...doc.data()}
            })
           dispatch(setMovies(tempMovies));
       })            
    }, [])  
    /* eslint-enable */

    return (
        <Container>
                        <ImgSlider />
                        <Viewers />
                        <Movies /> 
        </Container>
    )
}

export default Home

const Container = styled.div`
     min-height:calc(100vh - 70px);
     padding: 0 calc(3.5vw + 5px);
     position: relative;
     overflow-x:hidden; 

     &:before{
         background:url('/images/home-background.png') center center / cover no-repeat fixed;
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         bottom: 0;
         right: 0;
         z-index: -1;
        
     }
`;