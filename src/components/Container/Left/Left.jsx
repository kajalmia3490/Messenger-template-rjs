import { RxBorderDotted } from 'react-icons/rx';
import { BiSolidVideoPlus } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
import { peopleClick } from '../list-click-func/click.js';

const bgColor = {
    backgroundColor: 'gainsboro'
};

const outline = {
    outline: 'none',
    border: '1px solid gainsboro'
}

const imgObj = {
    width: '50px',
    borderRadius: '50%'
}

const scrollList = {

}

const Left = () => {

    const peoplesData = {
        first: {
            id: '1',
            name: 'Kajal',
            text: 'Welcome to my inbox',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEEX4vqF8tnxjTYFDP8neQS6b9lMa-JSG8ZuVawfJ0Q&s'
        },
        second: {
            id: '2',
            name: 'Atiqur',
            text: 'Welcome to my inbox',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEEX4vqF8tnxjTYFDP8neQS6b9lMa-JSG8ZuVawfJ0Q&s',
        },
        third: {
            id: '3',
            name: 'Rahman',
            text: 'Welcome to my inbox',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEEX4vqF8tnxjTYFDP8neQS6b9lMa-JSG8ZuVawfJ0Q&s'
        },
        fourth: {
            id: '4',
            name: 'Robert',
            text: 'Welcome to my inbox',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEEX4vqF8tnxjTYFDP8neQS6b9lMa-JSG8ZuVawfJ0Q&s'
        },
        fifth: {
            id: '5',
            name: 'Bruce',
            text: 'Welcome to my inbox',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEEX4vqF8tnxjTYFDP8neQS6b9lMa-JSG8ZuVawfJ0Q&s'
        },
        sixth: {
            id: '6',
            name: 'Light Pro',
            text: 'welcome to my inbox',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEEX4vqF8tnxjTYFDP8neQS6b9lMa-JSG8ZuVawfJ0Q&s'
        },
        seventh: {
            id: '7',
            name: 'Chicago',
            text: 'welcome to my inbox',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEEX4vqF8tnxjTYFDP8neQS6b9lMa-JSG8ZuVawfJ0Q&s'
        }
    };

    return (
        <div className='left-side text-start col-3 bg-light mx-2 p-3 border border-top-0 border-start-0 border-bottom-0'>
            <div className='d-flex justify-content-between'>
                <h1 className='h4 fw-bold'>
                    Chats
                </h1>

                <div>
                    <a href='#' className='text-dark fw-bold fs-5 p-2 rounded-pill' style={bgColor}>
                        <RxBorderDotted />
                    </a>
                    <a href='#' className='text-dark ms-3 fs-5 p-2 rounded-pill' style={bgColor}>
                        <BiSolidVideoPlus />
                    </a>
                    <a href='#' className='text-dark ms-3 fs-5 p-2 rounded-pill' style={bgColor}>
                        <BsPencilSquare />
                    </a>
                </div>
            </div>

            <div>
                <p>
                    <input className='w-100 rounded my-2 p-1' style={outline} type='search' placeholder='Search Messenger' />
                </p>

                <p>
                    <a href='#' className='text-decoration-none p-2 rounded text-primary me-3' style={bgColor}>
                        Inbox
                    </a>

                    <a href='#' className='text-decoration-none p-2 rounded text-dark me-3' style={bgColor}>
                        Communities
                    </a>
                </p>
            </div>

            <div className='peopleList' style={scrollList}>

                <li onClick={peopleClick} type='none' className='btn cursor-pointer w-100 text-start p-2 border rounded'>
                    <img src={peoplesData.first.img} alt='...' style={imgObj} />
                    <span className='ms-2'>{peoplesData.first.name}</span>
                </li>

                <li onClick={peopleClick} type='none' className='btn cursor-pointer w-100 text-start p-2 border rounded'>
                    <img src={peoplesData.first.img} alt='...' style={imgObj} />
                    <span className='ms-2'>{peoplesData.second.name}</span>
                </li>

                <li onClick={peopleClick} type='none' className='btn cursor-pointer w-100 text-start p-2 border rounded'>
                    <img src={peoplesData.first.img} alt='...' style={imgObj} />
                    <span className='ms-2'>{peoplesData.third.name}</span>
                </li>

                <li onClick={peopleClick} type='none' className='btn cursor-pointer w-100 text-start p-2 border rounded'>
                    <img src={peoplesData.first.img} alt='...' style={imgObj} />
                    <span className='ms-2'>{peoplesData.fourth.name}</span>
                </li>

                <li onClick={peopleClick} type='none' className='btn cursor-pointer w-100 text-start p-2 border rounded'>
                    <img src={peoplesData.first.img} alt='...' style={imgObj} />
                    <span className='ms-2'>{peoplesData.fifth.name}</span>
                </li>

                <li onClick={peopleClick} type='none' className='btn cursor-pointer w-100 text-start p-2 border rounded'>
                    <img src={peoplesData.first.img} alt='...' style={imgObj} />
                    <span className='ms-2'>{peoplesData.fifth.name}</span>
                </li>

                <li onClick={peopleClick} type='none' className='btn cursor-pointer w-100 text-start p-2 border rounded'>
                    <img src={peoplesData.first.img} alt='...' style={imgObj} />
                    <span className='ms-2'>{peoplesData.fifth.name}</span>
                </li>

                <li onClick={peopleClick} type='none' className='btn cursor-pointer btn:bg-secondary w-100 text-start p-2 border rounded'>
                    <img src={peoplesData.first.img} alt='...' style={imgObj} />
                    <span className='ms-2'>{peoplesData.fifth.name}</span>
                </li>

            </div>

        </div>
    );
};

export default Left;