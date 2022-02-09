import React from 'react';
import './Pass.css';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

const Pass = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/')
        }, 7000);
        return () => clearTimeout(timer)
    },[navigate])

    return (
        <div>
            <div className='border-bottom border-primary p-4'>
                <h1 className="text-center header-text p-3">Congratulations !!!</h1>
            </div>
            <div className='mt-5 pt-5'>
                <i className="fas fa-thumbs-up pass-icon mt-5 pt-5"></i>
                <h1 className="text-center pass-text mt-5 pt-5">The test is over. You have been admitted to the theory test.</h1>
            </div>
        </div>
    )
}

export default Pass;