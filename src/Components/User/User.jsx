import '../User/User.css';
import { useState } from 'react';

function User( { id, username, email, registration_date, rating }) {
    const [modal, setModal] = useState(false);

    return (
    <>
    <div key={id} className="container">
    <div className='container_div_username'>{username}</div>
            <div className='container_div'>{email}</div>
            <div className='container_div'>{registration_date}</div>
            <div className='container_div'>{rating}</div>
            <div className="container_button">
                <button className='delete_button'  onClick={() => setModal(!modal)}>
                    <img className="img_cancel" src="src\assets\cancel.png"></img>
                </button>
                {!modal ? '' : (
                <div className='modal'>
                <div className='modal_container'>
                    <div className='modal_content'>Вы уверены, что хотите удалить пользователя?</div>
                    <div className='modal_buttons'>
                    <button className='modal_button'>Да</button>
                <button className='modal_button' onClick={() => setModal(!modal)}>Нет</button>
                </div>
            </div>
            </div>
            )}
            </div>
            </div>
    </>
    )
}

export default User