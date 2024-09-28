import React from 'react'
import AnimationWrapper from './AnimationWrapper'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../services/operations/AUTH_API';


const UserNavigationPanel = ({ username }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickHandler = (e) => {
        console.log(e);
        console.log("hello");
        dispatch(logout(navigate));
    }
    
    return (
        <AnimationWrapper
            className="absolute right-0 z-50"
            transition={{ duration: 0.2 }}
        >
            <div className='w-60 duration-200 bg-white absolute right-0 border border-grey'>
                <Link to={'/editor'} className='flex gap-2 link md:hidden pl-8 py-4'>
                    <i className="fi fi-rr-file-edit"></i>
                    <p>Write</p>
                </Link>

                <Link to={`/user/${username}`} className='link pl-8 py-4'>
                    Profile
                </Link>

                <Link to={`/dashboard/blogs`} className='link pl-8 py-4'>
                    Dashboard
                </Link>

                <Link to={`/settings/edit-profile`} className='link pl-8 py-4'>
                    Settings 
                </Link>
                
                <span className='absolute border-t border-grey w-[100%]'></span>

                <button className='text-left p-4 hover:bg-grey w-full pl-8 py-4' onClick={onClickHandler}>
                    <h1 className='text-xl font-bold mb-1'>Sign Out</h1>
                    <p className='text-dark-grey'>@{username}</p>
                </button>
            </div>

        </AnimationWrapper>
    )
}

export default UserNavigationPanel;
