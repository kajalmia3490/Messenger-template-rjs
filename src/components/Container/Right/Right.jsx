import React from 'react';

const sendClick = () => {
    alert("It's done by click")

};

const Right = () => {
    return (
        <div className='col w-100 bg-dark position-relative' style={{
            height: '530px'
        }}>
            <div className='top'>
                <h1 className='h1 text-white-50 mt-5 fw-bold'>
                    Chating with your peoples
                </h1>
                <p className='h3 text-white-50 fw-bold'>No Active Peoples</p>
                <h1 className='h1 text-white-50'>☹️☹️☹️</h1>
            </div>

            <div className='position-absolute w-100' style={{
                bottom: '20px'
            }}>
                <input type='text' placeholder='Send a messaage' className='w-75 p-2 rounded' />
                <button onClick={sendClick} className='btn btn-primary ms-2'>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Right;