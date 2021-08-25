import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SearchCard from '../Cards/SearchCard';
import ReactPaginate from 'react-paginate';
import Search from './Search';
import StyledSearch from './styled';
import err from '../../assets/error.png'

const SearchHero = () => {
    const store = useSelector(state => state);
    const [pageNumber, setPageNumber] = useState(0);
    const pageCount = store.heroes.length && Math.ceil(store.heroes.length / 8);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    return (
        <StyledSearch>
            {!window.localStorage.superHero ?
                <div className="err" >
                    <img src={err} alt="" />
                    <h1>I'm sorry<br />Log in with your account to start using the app</h1>
                    <Button variant="warning">➡ Log In</Button>
                </div>
                : <div>
                    <div className="search">
                        <Search />
                    </div>
                    {store.loading ?
                        <div className="spinner">
                            <Spinner animation="border" variant="warning" />
                        </div>
                        :
                        store.heroes[0] && store.heroes[0].err ?
                            <div className="err" >
                                <img src={err} alt="" />
                                <h1>Error!<br />Hero name not found</h1>
                            </div> : (
                                <>
                                    {
                                        store.heroes.length > 8 && (
                                            <div className="paginate">
                                                <ReactPaginate
                                                    previousLabel={"Prev"}
                                                    nextLabel={"Next"}
                                                    pageCount={pageCount}
                                                    onPageChange={changePage}
                                                    containerClassName={"paginationBtn"}
                                                    previousLinkClassName={"previousBtn"}
                                                    nextLinkClassName={"nextBtn"}
                                                    disabledClassName={"paginationDisable"}
                                                    activeClassName={"paginationActive"}
                                                    hrefBuilder={() => toTop()}
                                                />
                                            </div>
                                        )
                                    }
                                    < div className="heroes">
                                        {store.heroes.length && store.heroes.slice((pageNumber * 8), (pageNumber * 8) + 8).map(hero =>
                                            <SearchCard id={hero.id} name={hero.name} image={hero.image.url} hero={hero} />
                                        )}
                                    </div>
                                </>)
                    }
                </div >
            }
        </StyledSearch >
    )
};

export default SearchHero;