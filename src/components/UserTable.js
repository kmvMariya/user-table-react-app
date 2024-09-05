import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Row from "./Row";
import TableHeader from "./TableHeader";

function UserTable({ columns }) {

    const filterUser = useSelector((state) => state.filter);
    const users = useSelector((state) => state.users.users);
  
    const filteredUsers = users.filter((user) =>
        Object.keys(filterUser).every((key) => {
            const userValue = user[key].toString().toLowerCase();
            const filterValue = filterUser[key].toString().toLowerCase();
            return !filterUser[key] || userValue.includes(filterValue);
        })
    );

    if (!filteredUsers.length) {
        return <h2 className="loading-message">There are no users match the filters</h2>;
    }

    return (
        <Table className="custom-table" striped bordered hover>
            <TableHeader 
                columns={columns} 
            />
            <tbody>
                {filteredUsers.map((user) => (
                    <Row key={user.id} user={user} columns={columns} />
                ))}
            </tbody>
        </Table>
    );
}

UserTable.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserTable;