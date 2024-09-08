import React from "react";
import SearchField from "./SearchField";
import { IColumn } from '../types/interfaces';

interface ITableHeaderProps {
    columns: IColumn[];
}

function TableHeader({ columns }: ITableHeaderProps) {
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