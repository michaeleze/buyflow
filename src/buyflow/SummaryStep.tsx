import React from 'react';
import { Link } from 'react-router-dom';

interface SummaryStepProps {
    collectedData: {
      user: {
        firstName?: string | undefined;
        lastName?: string | undefined;
      }
        email: string,
        age: number,
    },
};

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
    return (
      <>
          <div>First Name: {props.collectedData.user?.firstName}</div>
          <div>Last Name: {props.collectedData.user?.lastName}</div>
          <div>Email: {props.collectedData.email}</div>
          <div>Age: {props.collectedData.age}</div>
          <div><Link to='/purchased=dev_ins'>Purchase</Link></div>
      </>
    );
};

export default SummaryStep;
