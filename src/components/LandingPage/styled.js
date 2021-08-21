import styled from "styled-components";


export const StyledLandingPage = styled.div`
    display: flex;
    justify-content: space-around;   
    align-items: center;
    letter-spacing: 0.1em;
    margin-top: 4rem;
    @media screen and (max-width: 1024px){
        flex-direction: column;
        overflow: scroll;
        letter-spacing: 0;
        .title{          
            padding-top: 1.5rem;
            p{
                font-size: 2.6rem;   
            }        
        }
    }            
    .title{
        background-color: transparent;
        font-size:2.8rem;
        text-align: center;    
        border:none;    
        p{            
            padding-top: 5.5rem;
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
        }
    p{
        font-size: 2.2rem;
    }
    input{
        width: 100%;
    }
    
}
`