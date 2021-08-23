import styled from 'styled-components';


const StyledHome = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: 1rem 0 1rem;
.team{
    @media screen and (max-width: 1024px){
        grid-template-columns: repeat(2,1fr);
    } @media screen and (max-width: 600px){
        grid-template-columns: repeat(1,1fr);
    }
    margin-top:1rem;
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 3rem;
  
}
`

export default StyledHome;