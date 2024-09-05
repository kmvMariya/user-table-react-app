import React from "react";
import PropTypes from 'prop-types';

function Row({user, columns}) {
    return (  
        <tr>
            {columns.map((column) => (
                 <td key={column.fieldName}>
                    {user[column.fieldName]}
                 </td>
            ))}
        </tr>
    )
}

Row.propTypes = {
    user: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Row