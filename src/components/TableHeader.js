import PropTypes from "prop-types";
import SearchField from "./SearchField";

function TableHeader({ columns }) {

    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.fieldName}>
                        <SearchField 
                            column={column} 
                        />
                    </th>
                ))}
            </tr>
        </thead>
    );
}

TableHeader.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableHeader;