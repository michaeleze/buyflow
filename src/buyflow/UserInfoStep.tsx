import React, { useState } from 'react';

interface UserInfoStepProps {
    cb: (field: string, value: string) => void,
}

interface IUser {
  firstName: string;
  lastName: string;
}

const UserInfoStep: React.FC<UserInfoStepProps> = (props) => {
    const [user, setUser] = useState<IUser>({
      firstName: null as any as string,
      lastName: null as any as string
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(user)
      setUser({...user, [event.target.name]: event.target.value});
    };

    return <>
        <p>
          First Name: <input type='email' onChange={handleChange} name="firstName"></input>
        </p>
        <p>
          Last Name: <input type='email' onChange={handleChange} name="lastName"></input>
        </p>
        <button onClick={() => props.cb('user', 'user')}>Next</button>
    </>;
};

export default UserInfoStep;
