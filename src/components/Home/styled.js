import styled from 'styled-components';


const StyledHome = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 1rem;
.team{
    @media screen and (max-width: 1024px){
        grid-template-columns: repeat(2,1fr);
    } @media screen and (max-width: 600px){
        grid-template-columns: repeat(1,1fr);
    }
    margin-top:1rem;
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1rem;
    .card{        
        border-radius:.5rem;
        background-color: rgb(247, 247, 247,0.6); 
        height: 50vh;
        display:flex;
        justify-content: center;
        align-items: center;        
    }
}
`

export default StyledHome;