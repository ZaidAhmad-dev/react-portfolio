import { useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CourseContext } from '../../Contexts/CourseContext';

const Search = () => {
    const { searchValue, setSearchValue } = useContext(CourseContext);

    return (
        <div className="col-12 search-wrapper">
            <form className="form-inline justify-content-end">
                <div className='input-group'>
                    <input className="search" type="text" placeholder="Find a course" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button className='search-button' type="submit"><AiOutlineSearch /></button>
                </div>
            </form>
        </div>
    )
}

export default Search