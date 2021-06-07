import React, { useState } from 'react';
import './style.css';
const Login = () => {
    const [account, setAccount] = useState({
        id: '',
        password: ''
    })
    const onChangeAccount = (e) => {
        // account 상태에 input 값 저장
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitAccount = async () => {
        console.log(account);
    }

    const onSubmitGoogleAccount = async () => {

    }
    return (
        <div className="login-container">
            <h1 className="login-title">Mini Notion 💖</h1>
            <form>
                <div>
                    <input type="text" id="id" name="id" placeholder="아이디" onChange={onChangeAccount}></input>
                </div>
                <div>
                    <input type="password" name="password" placeholder="비밀번호" onChange={onChangeAccount}></input>
                </div>
                <div>
                    <button type="button" className="login-button" onClick={onSubmitAccount}>
                        계정으로 로그인
                    </button>
                </div>
                <div>
                    <button type="button" className="login-button-google" onClick={onSubmitGoogleAccount}>
                        <img src={require('../Assets/img/google.png').default} width="20px" alt="google"></img>&nbsp;Google 계정으로 로그인
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;