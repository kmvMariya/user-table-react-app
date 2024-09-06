import React from "react";
import SearchField from "./SearchField";

interface Column {
    fieldName: string;
    label: string;
}

interface TableHeaderProps {
    columns: Column[];
}

function TableHeader({ columns }: TableHeaderProps) {
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

export default TableHeader;