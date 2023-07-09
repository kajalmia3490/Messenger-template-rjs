import React from 'react';
import Left from './Left/Left';
import Right from './Right/Right';

const Container = () => {
    return (
        <div className='row text-center'>
            <Left />
            <Right />
        </div>
    );
};

export default Container;