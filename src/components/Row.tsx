import React from "react";

interface Column {
    fieldName: string;
    label: string;
}

interface User {
    id: number;
    [key: string]: any;
}

interface RowProps {
    user: User;
    columns: Column[];
}

const Row: React.FC<RowProps> = ({ user, columns }) => {
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
