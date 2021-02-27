import React, {useState} from 'react';
import AgeStep from './AgeStep';
import EmailStep from './EmailStep';
import SummaryStep from './SummaryStep';
import UserInfoStep from "./UserInfoStep";

interface BuyflowProps {
  productId: ProductIds,
};

export interface CallbackProps {
  cb: (field: string, value: string) => void,
}

export enum ProductIds {
  devIns = 'dev_ins'
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState('userInfo');
  const [collectedData, updateData] = useState({
    user: {
      firstName: null as any as string,
      lastName: null as any as string
    },
    email: '',
    age: 0,
  });

  const getStepCallback = (nextStep: string) => (
    (field: string, value: any) => {
      updateData({...collectedData, [field]: value});
      setStep(nextStep);
    }
  );

  return <>
    <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
    {(currentStep === 'userInfo' && <UserInfoStep cb={getStepCallback('email')}/>)
    || (currentStep === 'email' && <EmailStep cb={getStepCallback('age')}/>)
    || (currentStep === 'age' && <AgeStep cb={getStepCallback('summary')}/>)
    || (currentStep === 'summary' && <SummaryStep collectedData={collectedData}/>)
    }
  </>;
};

export default Buyflow;
