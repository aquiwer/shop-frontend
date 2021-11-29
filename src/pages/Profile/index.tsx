import React, {useState} from 'react';
import "./styles/style.scss"
import pencil from '../../assets/icons/pencil.svg'
import add from '../../assets/icons/add.svg'
import arrow from '../../assets/icons/arrowRight.svg'
import discount from '../../assets/icons/discount.svg'
import delivery from '../../assets/icons/delivery.svg'
import support from '../../assets/icons/support.svg'
import {ImgCard} from "../../components/ImgCards";
import {useTypedSelector} from "../../utils/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {userChangeDataThunk} from "../../store/thunks/user-thunk";
import {log} from "util";

export const Profile = () => {
    const [editMode, setEditMode] = useState(false);
    const userData = useTypedSelector(state => state.userReducer.user)
    const dispatch = useDispatch();
    const [username, setUserName] = useState(userData.username);
    const [password, setPassword] = useState(userData.password);
    const [email, setEmail] = useState(userData.email);
    const [isEditingPhoto, setIsEditingPhoto] = useState(false);

    const setNewData = (e: any) => {
        e.preventDefault();
        setEditMode(false)
        dispatch(userChangeDataThunk({
            _id: userData._id,
            login: userData.login,
            username: username && username.trim().length ? username : userData.username,
            password: password && password.trim().length ? password : userData.password,
            email: email && email.trim().length ? email : userData.email
        }))
    }


    return (
        <article className="profile-container">`
            <section className='profile-edit-elems'>

                    <figure>
                {
                        isEditingPhoto ?
                            <div className="profile-file-input"  onMouseLeave={() => setIsEditingPhoto(false)}>
                                <input
                                    onChange={(e) => console.log(e.currentTarget)}
                                    type="file"
                                    name="file-input"
                                    id="file-input"
                                    className="profile-file-input__input"
                                />
                                <label className="profile-file-input__label" htmlFor="file-input">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="upload"
                                        className="svg-inline--fa fa-upload fa-w-16"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                                        ></path>
                                    </svg></label
                                >
                            </div>
                        : <div onMouseEnter={() => setIsEditingPhoto(true)}
                                                             className="profile-user-avatar">{userData.username[0].toUpperCase()}</div>
                }
                    </figure>


                <section>
                    <div>
                        <form className='profile-edit-elems-form'>
                            <fieldset>
                                {
                                    editMode ?
                                        <section className='profile-edit-data-container'>
                                            <div><input onChange={(e) => setUserName(e.currentTarget.value)}
                                                        placeholder="Your new name" className='profile-edit-field'
                                                        type="text"/></div>
                                            <div>
                                                <button onClick={(e) => setNewData(e)}>
                                                    <img src={arrow} alt="arrow"/>
                                                </button>
                                            </div>
                                        </section>
                                        :
                                        <section className='profile-edit-data-container'>
                                            <div>
                                                <p className='profile-edit-elem'>{userData.username}</p>
                                            </div>
                                            <div>
                                                <button onClick={(e) => {
                                                    e.preventDefault()
                                                    setEditMode(true)
                                                }
                                                }><img
                                                    className='profile-edit-elem-icon' src={pencil} alt=""/></button>
                                            </div>
                                        </section>
                                }
                            </fieldset>
                        </form>
                    </div>
                    <div>
                        <form className='profile-edit-elems-form'>
                            <fieldset><p className='profile-edit-elem'>Virtual-coin: {userData.balance}</p></fieldset>
                            <fieldset>
                                <button><img className='profile-edit-elem-icon' src={add} alt="add"/></button>
                            </fieldset>
                        </form>
                    </div>
                </section>
            </section>
            <section className='profile-data-wrapper'>
                <form className='profile-data-form'>
                    <fieldset>
                        {
                            editMode ?
                                <section className='profile-edit-data-container'>
                                    <div><input onChange={(e) => setEmail(e.currentTarget.value)}
                                                placeholder="Your new email" className='profile-edit-field'
                                                type="text"/></div>
                                    <div>
                                        <button onClick={(e) => setNewData(e)}>
                                            <img src={arrow} alt="arrow"/>
                                        </button>
                                    </div>
                                </section>
                                :
                                <section className='profile-edit-data-container'>
                                    <div>
                                        <p className='profile-data'>Email: {userData.email}</p>
                                    </div>
                                    <div>
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            setEditMode(true)
                                        }
                                        }><img
                                            className='profile-edit-elem-icon' src={pencil} alt=""/></button>
                                    </div>
                                </section>
                        }
                    </fieldset>
                    <fieldset>
                        {
                            editMode ?
                                <section className='profile-edit-data-container'>
                                    <div>
                                        <input onChange={(e) => setPassword(e.currentTarget.value)}
                                               placeholder="Your new password" className='profile-edit-field'
                                               type="password"/></div>
                                    <div>
                                        <button onClick={(e) => setNewData(e)}>
                                            <img src={arrow} alt="arrow"/>
                                        </button>
                                    </div>
                                </section>
                                :
                                <section className='profile-edit-data-container'>
                                    <div>
                                        <p className='profile-data'>Password: ***********</p>
                                    </div>
                                    <div>
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            setEditMode(true)
                                        }
                                        }><img
                                            className='profile-edit-elem-icon' src={pencil} alt=""/></button>

                                    </div>
                                </section>
                        }
                    </fieldset>
                </form>
            </section>
            <section className='profile-peculiarities-wrapper'>
                <section className='profile-peculiarities'>
                    <picture><img className="profile-peculiarities-image" src={discount} alt="discount"/></picture>
                    <div><h3 className='profile-peculiarities-title'>Discount system</h3></div>
                    <div><p className='profile-peculiarities-describe'>Nam libero tempore, cum soluta nobis est eligendi
                        optio, cumque nihil impedit, quo minus id, quod maxime placeat</p></div>
                </section>
                <section className='profile-peculiarities'>
                    <picture><img className="profile-peculiarities-image" src={delivery} alt="delivery"/></picture>
                    <div><h3 className='profile-peculiarities-title'>Free delivery</h3></div>
                    <div><p className='profile-peculiarities-describe'>Nam libero tempore, cum soluta nobis est eligendi
                        optio, cumque nihil impedit, quo minus id, quod maxime placeat</p></div>
                </section>
                <section className='profile-peculiarities'>
                    <picture><img className="profile-peculiarities-image" src={support} alt="support"/></picture>
                    <div><h3 className='profile-peculiarities-title'>Support 24/7</h3></div>
                    <div><p className='profile-peculiarities-describe'>Nam libero tempore, cum soluta nobis est eligendi
                        optio, cumque nihil impedit, quo minus id, quod maxime placeat</p></div>
                </section>
            </section>
            <section className='profile-cards-wrapper'>
                {
                    [1, 2, 3].map(i => <ImgCard key={i}/>)
                }
            </section>
        </article>
    );
};
