import styled from "styled-components";
import img from '../../assets/LandingPage.jpg'

export const StyledLandingPage = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 991px){
        flex-direction: column;
    }
    color:white;
    align-items: center;
    background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${img});  
    position: fixed;
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;          
    font-family: 'Bangers', regular;
    font-weight: 400;    
    p{
        font-size: 2.5rem;
    }
.login {
    flex-direction: column;
    color: white;
    background-color: rgb(247, 247, 247,0.4);
    border:solid rgba(0, 0, 0, 0.6);
    box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.5);
    text-align: center;
    margin: 50px;
    padding: 50px;
    border-radius: 10px;
    max-width: 500px;
    input{
        width: 100%;
    }
}
`