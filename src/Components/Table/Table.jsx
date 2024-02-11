import '../Table/Table.css';
import {useState, useEffect} from 'react';
import Users from '../Users/Users';
import Pagination from '../Pagination/Pagination';

function Table() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchUser, setSearchUser] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);

    useEffect(() => {
        fetch('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        setUsers(data);
    })
    .catch((err) => {
        console.log(err.message);
        alert('Ошибка при получении данных')
    }) .finally(() => setLoading(false))
    }, [])

    const onChangeSearchUser = (event) => {
        setSearchUser(event.target.value);
    }

    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex - usersPerPage;
    const currentUser = users.slice(firstUserIndex, lastUserIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const removeUser = (id) => {
        setDeleteUser(console.log('hi', id))
    }
    return (
        <div>
            <div className='dataList_data'>
                <Users
                onChangeSearchUser={onChangeSearchUser}
                searchUser={searchUser}
                items={currentUser}
                loading={loading}
                />
                </div>
                <div>
                    <Pagination
                    usersPerPage={usersPerPage}
                    totalUsers={users.length}
                    paginate={paginate}
                    />
                </div>
        </div>
    )
}

export default Table
