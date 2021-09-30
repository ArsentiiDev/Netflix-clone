import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth'
import React, { useRef } from 'react'
import { auth } from '../../firebase'
import './signup.css'

function SignUp() {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)



    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
            ).then((authUser)=> {
                console.log(authUser)

            }).catch(e=>{
                alert(e.message)
            })
    }

    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
            ).then((authUser)=> {
                console.log(authUser)

            }).catch(e=>{
                alert(e.message)
            })
    }

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef}   placeholder="Email" type="email"/>
                <input ref={passwordRef}  placeholder="Password" type="password"/>
                <button onClick={signIn} className="signupScreen__button" type="submit">Sign In</button>
                <h4>
                <span className="signupScreen__gray">New to Netflix? </span>
                <span onClick={register} className="signupScreen__link">Sign up now.</span></h4>
            </form>
        </div>
    )
}

export default SignUp
