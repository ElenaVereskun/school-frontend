import { React } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch,
    searchValue,
    handleChangeSearch,
    isShort,
    handleChek,
    onClickCheckbox }) {

    function handleSubmit(e) {
        e.preventDefault();
        onSearch();
    };
    return (
        <section>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='search-form__quest'>
                    <input className='search-form__input'
                        value={searchValue}
                        name="search"
                        onChange={handleChangeSearch}
                        placeholder="Фильм" />
                    <span ></span>
                    <button className='search-form__button'>Поиск</button>
                </div>
                <div className='search-form__short'>
                    <FilterCheckbox
                        onClickCheckbox={onClickCheckbox}
                        isShort={isShort}
                        handleChek={handleChek} />
                    <p className='search-form__short-text'>Короткометражки</p>
                </div>
            </form>
        </section>
    )
}
export default SearchForm;