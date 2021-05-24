import React, { useState } from 'react';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        id: "",
        password: "",
    });
    const onChange = e => {
        const { value, name } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        })
    }
    
    const handleLogin = () => {
        console.log(userInfo);
        console.log('잘 됨')
    }

    return (
        <div>
            <div>
                id: <input type="text" name="id" value={userInfo.id} onChange={onChange}></input>
            </div>    
            <div>
                pw: <input type="password" name="password" value={userInfo.pw} onChange={onChange}></input>
            </div>
            <p>
                <button name="loginBtn" onClick={handleLogin}>로그인</button>
            </p>
        </div>
    )
};

export default Login;