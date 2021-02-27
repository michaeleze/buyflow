import React, {useState} from 'react';
import {CallbackProps} from "./Buyflow";

const inputData = [
  {name: 'First Name', value: 'firstName'},
  {name: 'Last Name', value: 'lastName'},
]

const UserInfoStep: React.FC<CallbackProps> = (props) => {
  const [user, setUser] = useState<any>({
    firstName: null as any as string,
    lastName: null as any as string
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [event.target.name]: event.target.value});
  };

  const handleClick = () => {
    if (user.firstName && user.lastName) {
      props.cb('user', user)
    }
    else {
      alert('First Name and Last Name is required');

      return;
    }
  }

  return (
    <>
      {inputData.map(item => (
          <p key={item.value}>
            {item.name}: <input type='email' onChange={handleChange} name={item.value}></input>
          </p>
        )
      )}
      <button onClick={handleClick}>Next</button>
    </>
  );
};

export default UserInfoStep;
