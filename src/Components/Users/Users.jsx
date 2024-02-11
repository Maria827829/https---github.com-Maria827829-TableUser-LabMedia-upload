import '../Users/Users.css';
import User from '../User/User';

function Users( { items, loading, searchUser, onChangeSearchUser }){

    return (
    <div className='main'>
    <h1 className='title'>Список пользователей</h1>
    <div className='input_container'>
        <button className='input_button'><img className="search_icon" src="src\assets\search.png"></img></button>
        <i className="icon_input" aria-hidden="true"></i>
        <input className='input'
        value={searchUser}
        onChange={onChangeSearchUser}
        type="text"
        placeholder="Поиск по имени или e-mail" />
    </div>
    <div className='sort'>
                <p>Сортировка:</p>
                <p className='sort_option'>Дата регистрации</p>
                <p className='sort_option'>Рейтинг</p>
    </div>
    <div className='dataList'>
    <div className='dataList_headers'>
    <h2 className='dataList_header'>Имя пользователя</h2>
            <h2 className='dataList_header'>E-mail</h2>
            <h2 className='dataList_header'>Дата регистрации</h2>
            <h2 className='dataList_header'>Рейтинг</h2>
            </div>
            </div>
    {loading ? (
        <h2 className='loading'>Loading...</h2>
    ) : (
        <div>
        {
            items.filter(obj => {
                const userName = obj.username.toLowerCase();
                const eMail = obj.email.toLowerCase();
                if (userName.includes(searchUser.toLowerCase()) || eMail.includes(searchUser.toLowerCase())) {
                    return true;
                }
            })
            .map((obj) =>
            <User
            {... obj}
            /> )
        }
        </div>
    )}
    </div>
    )
}

export default Users