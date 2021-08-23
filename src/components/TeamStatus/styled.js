import styled from 'styled-components';


const StyledStatus = styled.div`
.status{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size:1.5rem;
    background-color: rgb(247, 247, 247,0.6); 
    border-radius: 1rem;
    border:solid black;
    box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.5);
    padding:.5rem;
    margin:1rem;
}
.total-power{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 5rem;
        height: 5rem;
        border-radius:50%;
        background-color: #DF2E2E;
        border:solid black;
}
.height{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 5rem;
        height: 5rem;
        border-radius:50%;
        background-color: #297F87;
        border:solid black;
}
`
export default StyledStatus;