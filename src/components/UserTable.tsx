import React from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Row from "./Row";
import TableHeader from "./TableHeader";
import { RootState } from "../store/store";
import { IUser, IColumn,  IFilterState} from '../types/interfaces';

interface IUserTableProps {
    columns: IColumn[];
}

function UserTable({ columns }: IUserTableProps) {
    const filterUser = useSelector((state: RootState) => state.filter as IFilterState);
    const users = useSelector((state: RootState) => state.users.users as IUser[]);

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
