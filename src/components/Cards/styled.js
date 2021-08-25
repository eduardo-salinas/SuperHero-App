import styled from 'styled-components';


export const StyledTeam = styled.div`  
.title{
    text-align:center;
    padding:.2rem;
}
.stats{
    display:flex;
    .total{
        margin:2rem 0 0 2rem;
        display:flex;
        justify-content: center;
        align-items: center;
        width: 5rem;
        height: 5rem;
        border-radius:50%;
        background-color: #DF2E2E;
        border:solid black;
        font-size:2rem;
    }
}
.hero{
    border-radius:.5rem;
    background-color: rgb(247, 247, 247,0.4); 
}          
    img{
        height: 50vh;
    }
.remove-button{
    display:flex;
    justify-content: flex-end;
    align-items: flex-start;
    button{
        width:3rem;
        height: 3rem;
        border-radius:50%;
    }
}
`
export const StyledSearch = styled.div`
.hero{        
      border-radius:.5rem;
      background-color: rgb(247, 247, 247,0.6);        
  }
  img{
      height: 50vh;
  }
.add-button{
  display:flex;
  justify-content: flex-end;
  align-items: flex-start;
}
`
export const StyledAdd = styled.div`
  .add-card{        
        border-radius:.5rem;
        background-color: rgb(247, 247, 247,0.6); 
        height: 60vh;
        display:flex;
        justify-content: center;
        align-items: center;        
    } 
`
export const StyledDetail = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin:.5rem;
    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
    .hero{
        height: 45rem;
        width: 35rem;
    }
    .detail{
        text-align:center;
        background-color: rgb(247, 247, 247,0.6);  
        height: 45rem;
        width: 35rem;
        font-size:1.2rem;
        .title-bad{
            background-color: #DF2E2E;
            border:solid black;
            width: 100%;
            font-size:2.5rem;
        }
        .title-good{
            background-color: #64C9CF;
            border:solid black;
            width: 100%;
            font-size:2.5rem;
        }
        .end{
            display:flex;
    justify-content: space-around;
    align-items: center;
        }
.bad-detail{
    display:flex;
        justify-content: center;
        align-items: center;           
        flex-direction: column;
        width: 6rem;
        height: 6rem;
        border-radius:50%;
        border:solid black;
        background-color: #DF2E2E;  
        img{
            width:2rem;
        }
}
.good-detail{
    display:flex;
        justify-content: center;
        align-items: center;   
        flex-direction: column;
        width: 6rem;
        height: 6rem;
        border-radius:50%;
        border:solid black;
        background-color: #64C9CF;
        img{
            width:2rem;
        }
}
.add-detail{
    border-radius:.2rem;
    border:solid black;
}
}
`
