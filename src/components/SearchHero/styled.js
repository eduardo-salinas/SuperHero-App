import styled from 'styled-components';


const StyledSearch = styled.div`
    display:flex;
    justify-content: center;
.search{
    display:flex;
    justify-content: center;
    margin-top: 2rem;
}
.heroes{
    @media screen and (max-width: 1280px){
        grid-template-columns: repeat(3,1fr);
    }
    @media screen and (max-width: 1024px){
        grid-template-columns: repeat(2,1fr);
        grid-gap: 0.2rem;
    } @media screen and (max-width: 600px){
        grid-template-columns: repeat(1,1fr);
    }
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align:center;
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 1rem;
    align-content: center;
    .hero{        
        border-radius:.5rem;
        background-color: rgb(247, 247, 247,0.6);        
    }
    img{
        height: 50vh;
    }
}
.paginate{
    .paginationBtn{
        list-style:none;
        display:flex;
        li{
            cursor:pointer;
            padding: .5rem;
            background-color: rgb(247, 247, 247,0.6);
            border-radius:.5rem;
            margin: .2rem;
        }
        .paginationDisable{
            background-color:gray;
            visibility:hidden;
        }
    }
}
.add-button{
    display:flex;
    justify-content: flex-end;
    align-items: flex-start;
}
`
export default StyledSearch;