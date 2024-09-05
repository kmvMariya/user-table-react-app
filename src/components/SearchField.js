import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, clearFilter } from "../store/filterSlice";
import search from '../images/search.png';

function SearchField({ column }) {
    const filterUser = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const handleFilterUser = (e) => {
        dispatch(setFilter({ name: e.target.name, value: e.target.value }));
    };

    const handleClearText = () => {
        dispatch(clearFilter(column.fieldName));
    };

    const isFilter = Boolean(filterUser[column.fieldName]);

    return ( 
        <div id="searchSection">
            <label htmlFor={column.fieldName} id="searchLabel">
                {column.label}
            </label>
            <div id="container">
                <input
                    name={column.fieldName}
                    type="text"
                    placeholder={`Filter by ${column.label}`}
                    id={column.fieldName}
                    value={filterUser[column.fieldName]}
                    onChange={handleFilterUser}
                />
                <img id="searchIcon" src={search} alt="Search" />
            </div>
            {isFilter && (
                <button 
                    onClick={handleClearText}  
                    className="clear-button"
                >
                    &times;
                </button>
            )}
        </div>
    );
}

SearchField.propTypes = {
    filterUser: PropTypes.arrayOf(PropTypes.object),
    column: PropTypes.object.isRequired,
};

export default SearchField;