import React from 'react'
import styled from 'styled-components'
function Login() {
    return (
        <Container>
            <CTA>
                <CTAlogoOne src='images/cta-logo-one.svg'/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    get the primer Aceess to Raya and Dragon for with disney subscription. as 0f 3 aug 2019 the price and the disney bundle wiil increase by 20 $.
                </Description>
                <CTAlogoTwo src='images/cta-logo-two.png' />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position:relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: top;

    &::before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        opacity: 0.7 ;
        background: url('images/login-background.jpg'); 
    }
`;
const CTA=styled.div`
    max-width: 650px;
    padding:80px 40px;    
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;

`;
const CTAlogoOne=styled.img`
`;
const CTAlogoTwo=styled.img`  
    width: 90%;
`;
const SignUp=styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bol;
     padding:17px 0;
     color: #f9f9f9;
     border-radius: 4px;
     text-align:center;
     font-size: 18px;
     cursor: pointer;
     transition: all 250ms;
     letter-spacing: 1.5px;
     margin:8px 0 12px 0;

     &:hover{
         background:#0483ee;
         color:white;
         text-decoration:none;
     }
`;
const Description=styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align:center;
    line-height: 1.5;
`;

