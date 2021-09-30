import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../../Components/NavBar/Nav'
import PlansScreen from '../../Components/Plans/PlansScreen'
import { logout, selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import './profile.css'

function Profile() {
    const dispatch = useDispatch()

    const user = useSelector(selectUser)

    return (
        <div className="profileScreen">
        <Nav/>
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img src="/assets/avatar.png" alt="" />
                <div className="profileScreen__details">
                <h2>{user.email}</h2>
                <div className="profileScreen__plans">
                    <h3>Plans</h3>
                    <PlansScreen/>
                    <button onClick={()=> auth.signOut()} className="profileScreen_signout">Sign Out</button>
                </div>
            </div>
            </div>
            
        </div>
            
        </div>
    )
}

export default Profile
