import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SearchCard from '../Cards/SearchCard';
import ReactPaginate from 'react-paginate';
import Search from './Search';
import StyledSearch from './styled';

const SearchHero = () => {
    const store = useSelector(state => state);
    const [pageNumber, setPageNumber] = useState(0);
    const pageCount = Math.ceil(store.heroes.length / 8);

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
                <h1>Inicia sesion</h1>
                : <div>
                    <div className="search">
                        <Search />
                    </div>
                    {store.loading ?
                        <div className="spinner">
                            <Spinner animation="border" variant="warning" />
                        </div>
                        :
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
                                {store.heroes && store.heroes.slice((pageNumber * 8), (pageNumber * 8) + 8).map(hero =>
                                    <SearchCard id={hero.id} name={hero.name} image={hero.image.url} hero={hero} />
                                )}
                            </div>
                        </>
                    }
                </div >
            }
        </StyledSearch >
    )
};

export default SearchHero;