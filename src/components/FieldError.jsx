import React from 'react';

const FieldError = ({ message }) => {
    return <p className='text-sm text-red-400 mt-2 ml-1'>{message}</p>
};

export default FieldError;