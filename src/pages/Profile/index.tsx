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

export const Profile = () => {
    const [editMode, setEditMode] = useState(false);
    const userData = useTypedSelector(state => state.userReducer.user)
    const dispatch = useDispatch();
    const [username, setUserName] = useState(userData.username);
    const [password, setPassword] = useState(userData.password);
    const [email, setEmail] = useState(userData.email);

    const setNewData = (e: any) => {
        e.preventDefault();
        setEditMode(false)
        dispatch(userChangeDataThunk({login: userData.login, username:userData.username, password: userData.password, email:userData.email}))
    }


    return (
        <article className="profile-container">
            <section className='profile-edit-elems'>
                <figure>{
                    //@ts-ignore
                   <div className="profile-user-avatar">{userData.username[0]}</div>}</figure>
                <section>
                    <div>
                        <form className='profile-edit-elems-form'>
                            <fieldset>
                                {
                                    editMode ?
                                        <section className='profile-edit-data-container'>
                                            <div><input onChange={(e) => setUserName(e.currentTarget.value)} placeholder="Your new name" className='profile-edit-field' type="text"/></div>
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
                                    <div><input onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Your new email" className='profile-edit-field' type="text"/></div>
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
                                        <input onChange={(e) => setPassword(e.currentTarget.value)} placeholder="Your new password" className='profile-edit-field' type="password"/></div>
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
                    [1,2,3].map(i => <ImgCard key={i}/>)
                }
            </section>
        </article>
    );
};
