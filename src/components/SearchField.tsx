import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, clearFilter } from "../store/filterSlice";
import search from '../images/search.png';
import { RootState, AppDispatch } from "../store/store";

interface Column {
    fieldName: string;
    label: string;
}

interface SearchFieldProps {
    column: Column;
}

interface FilterState {
    [key: string]: string;
}

function SearchField({ column }: SearchFieldProps) {
    const filterUser = useSelector((state: RootState) => state.filter as FilterState);
    const dispatch = useDispatch<AppDispatch>();

    const handleFilterUser = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                    value={filterUser[column.fieldName] || ''}
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

export default SearchField;
