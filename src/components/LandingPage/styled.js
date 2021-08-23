import styled from "styled-components";


export const StyledLandingPage = styled.div` 
    justify-content: space-around;   
    display: flex;
    align-items: center;
    text-align:center;
    margin-top: 10rem;
    letter-spacing: 0.1em;
    height: 100%;    
    @media screen and (max-width: 1024px){
        margin-top: 1rem;
        flex-direction: column;
        overflow: scroll;
        letter-spacing: 0;
        .title{          
            p{
                font-size: 2.6rem;   
            }        
        }
    }            
    .title{
        background-color: transparent;
        font-size:3rem;  
        border:none;
        p{
            padding-bottom: 4rem;
        }
        img{
            height: 60vh;
        }    

    } 
    .title:hover{
        transform: scale(1.01);
    }
    .start{
        padding-bottom: 4rem;
        background-color: transparent;
        font-size:3rem;   
        p{
            padding-bottom: 4rem;
        }       
        img{
            height: 40vh;
        }    
    }
    .start:hover{
        transform: scale(1.02);
    }
    .card-img-overlay{
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .login {
        flex-direction: column;
        background-color: rgb(247, 247, 247,0.4);
        border:solid rgba(0, 0, 0, 0.6);
        box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.5);
        text-align: center;
        margin: 3rem;
        padding: 3rem;
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