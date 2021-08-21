import styled from "styled-components";
import img from '../../assets/LandingPage.jpg'

export const StyledLandingPage = styled.div`
 @media screen and (max-width: 991px){
        flex-direction: column;
        overflow: scroll;
        letter-spacing: 0;
        .title{          
            margin-top: 20rem;
            padding-top: 1rem;
            p{
                font-size: 2.6rem;   
            }        
        }
    }
    background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${img});  
    background-position: center;
    background-size: cover;          
    display: flex;
    justify-content: space-around;
   
    letter-spacing: 0.1em;
    color:white;
    align-items: center;
    position: fixed;
	width: 100%;
	height: 100%;
    font-family: 'Bangers', regular;
    color:#F6D167;
    text-shadow: 0 8px 10px #231e23, 3px -2px 1px #231e23;
    .title{
        background-color: transparent;
        font-size:3rem;
        text-align: center;    
        border:none;    
        p{            
            padding-top: 5rem;
        }
    } 
    .title:hover{
        transform: scale(1.02);
    }
    .login {
        flex-direction: column;
        background-color: rgb(247, 247, 247,0.4);
        border:solid rgba(0, 0, 0, 0.6);
        box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.5);
        text-align: center;
        margin: 50px;
        padding: 50px;
        border-radius: 10px;
        max-width: 500px;
        .alert-danger{
            border-color:#DF2E2E;
            color:#231e23;
            text-shadow:none;
        }
    p{
        font-size: 2.5rem;
    }
    input{
        width: 100%;
    }
    
}
`