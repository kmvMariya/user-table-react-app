import React from "react";
import { IUser, IColumn } from '../types/interfaces';

interface IRowProps {
    user: IUser;
    columns: IColumn[];
}

function Row({ user, columns } : IRowProps) {
    return (
        <tr>
            {columns.map((column) => (
                <td key={column.fieldName}>
                    {user[column.fieldName]}
                </td>
            ))}
        </tr>
    );
}

export default Row;
