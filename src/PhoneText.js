import React from 'react';

const PhoneText = ({phoneText}) => {
    let code = '';
    const input = phoneText.replace(/\D/g, '');

    if(phoneText){
        code = '+1';
    }

    return (
        <div>
            Value: {code}{input}
        </div>
    );
};

export default PhoneText;