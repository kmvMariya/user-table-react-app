import React from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Row from "./Row";
import TableHeader from "./TableHeader";
import { RootState } from "../store/store";

interface UserTableProps {
    columns: Column[];
}

interface Column {
    fieldName: string;
    label: string;
}

interface User {
    id: number;
    [key: string]: any;
}

interface FilterState {
    [key: string]: string;
}

function UserTable({ columns }: UserTableProps) {
    const filterUser = useSelector((state: RootState) => state.filter as FilterState);
    const users = useSelector((state: RootState) => state.users.users as User[]);

    const filteredUsers = users.filter((user) =>
        Object.keys(filterUser).every((key) => {
            const userValue = user[key]?.toString().toLowerCase() || "";
            const filterValue = filterUser[key]?.toString().toLowerCase() || "";
            return !filterValue || userValue.includes(filterValue);
        })
    );

    if (!filteredUsers.length) {
        return <h2 className="loading-message">There are no users that match the filters</h2>;
    }

    return (
        <Table className="custom-table">
            <TableHeader columns={columns} />
            <tbody>
                {filteredUsers.map((user) => (
                    <Row key={user.id} user={user} columns={columns} />
                ))}
            </tbody>
        </Table>
    );
}

export default UserTable;
