import { createGlobalStyle } from 'styled-components';
import img from './assets/LandingPage.jpg'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Bangers', cursive;
    color:#F6D167;
    letter-spacing: 0.1em;
}
a{
    text-shadow: 0 8px 10px #231e23, 3px -2px 1px #231e23;
    text-decoration:none;
    color:#F6D167;
}
a:hover{
    color:rgb(247, 247, 247);
}

button:hover{
    color:rgb(247, 247, 247);
}
h1{
    text-shadow: 0 8px 10px #231e23, 3px -2px 1px #231e23;
    font-size:3.4rem; 
}
p{
    text-shadow: 0 8px 10px #231e23, 3px -2px 1px #231e23;
}
label{
    text-shadow: 0 8px 10px #231e23, 3px -2px 1px #231e23;
}
body{
    width: 100%;
    height: 100%;
    background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${img});
    background-size: cover;    
    background-position: center;
    background-attachment: fixed;    
    background-repeat: no-repeat;
}
.swal-button {
  color:#231e23;
  background-color: #F6D167;  
}
.swal-button:hover{
    color: #231e23 !important;
    background-color: #FFF7AE !important;
}
.spinner{
    display:flex;
    justify-content: center;
    margin-top: 10rem;
}
.btn-success{
    width: 3rem;
    height: 3rem;
    border-radius:50%;
}
.link{
    color: #231e23;
    text-shadow:none;
}
.nav-link{
    text-shadow: none;
    text-decoration:none;
    font-weight: bold;
    color:#231e23;
    font-size:1rem;
}
.nav-link:hover{
    color:rgb(247, 247, 247);
}
.alg{
    display:flex;
  justify-content:space-between;
  img{
      height: 2rem;
  }
}
.good{
        display:flex;
        justify-content: center;
        align-items: center;   
        width: 3rem;
        height: 3rem;
        border-radius:50%;
        border:solid black;
        background-color: #64C9CF;
        text-align:center;     
        text-shadow: none;
    }
    .bad{
        display:flex;
        justify-content: center;
        align-items: center;   
        width: 3rem;
        height: 3rem;
        border-radius:50%;
        border:solid black;
        background-color: #DF2E2E;
        text-align:center;     
        text-shadow: none;
    }
    .err{
        margin-top:2rem;
        text-align:center;
        img{
            height: 40vh;
        }
    }
`


export default GlobalStyle;