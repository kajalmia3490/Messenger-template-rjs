import React, { useState } from 'react';
import './Header.css';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { MdManageAccounts } from 'react-icons/md';
import { header, msgIcon, pointer, rightIcon } from './HeaderObj.js';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const Header = () => {

    const [modelIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const pageReload = () => {
        window.location.reload();
    };

    return (
        <div style={header} className='header d-flex justify-content-between align-items-center px-4'>
            <div onClick={() => pageReload()} style={pointer}>
                <h1 className='h3 fw-bold'>
                    <BsFillChatDotsFill className='me-2' style={msgIcon} />
                    Messenger
                </h1>
            </div>

            <div>
                <a href='#'>
                    <AiFillHome onClick={pageReload} className='text-dark rounded-pill bg-white p-1' style={rightIcon} />
                </a>
                <a className='ms-3' href='#'>
                    <IoMdNotifications className='text-dark rounded-pill bg-white p-1' style={rightIcon} />
                </a>
                <a className='ms-3' href='#' onClick={openModal}>
                    <MdManageAccounts className='text-dark rounded-pill bg-white p-1' style={rightIcon} />
                </a>
                <Modal
                    isOpen={modelIsOpen}
                    onRequestClose={closeModal}
                    contentLabel='This is a pop up msg!'
                >
                    <ul type='none' className='text-dark'>
                        <li>
                            <a className='text-dark fs-5 text-decoration-none' href='#'>+ Add Account</a>
                        </li>
                        <li>
                            <a className='text-dark fs-5 text-decoration-none' href='#'>Privacy & Policy</a>
                        </li>
                        <li>
                            <a className='text-dark fs-5 text-decoration-none' href='#'>Settings</a>
                        </li>
                    </ul>
                    <div>
                        <button className='btn border rounded bg-danger text-light' onClick={closeModal}>
                            Back Page
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Header;