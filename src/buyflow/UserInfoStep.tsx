import React, { useState } from 'react';
import { CallbackProps } from "./Buyflow";

const UserInfoStep: React.FC<CallbackProps> = (props) => {
    const [user, setUser] = useState<any>({
      firstName: null as any as string,
      lastName: null as any as string
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUser({...user, [event.target.name]: event.target.value});
    };

    return <>
        <p>
          First Name: <input type='email' onChange={handleChange} name="firstName"></input>
        </p>
        <p>
          Last Name: <input type='email' onChange={handleChange} name="lastName"></input>
        </p>
        <button onClick={() => props.cb('user', user)}>Next</button>
    </>;
};

export default UserInfoStep;
