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
a:hover{
    color:rgb(247, 247, 247);
}
button:hover{
    color:rgb(247, 247, 247);
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
`


export default GlobalStyle;