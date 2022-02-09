import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
    
    const [category, setCategory] = useState('A')

    const chosenCategory = (cat) => {
        setCategory(cat);
    }

    return (
        <div>
            <div className='border-bottom border-primary p-4'>
                <h1 className="text-center header-text p-3">Welcome to the Auto Exam</h1>
            </div>
            <div className='mt-5 pt-5'>
                <h1 className="text-center header-text mt-5 pt-5">Select your exam category</h1>
            </div>
            <div className='button-container'>
                <button onClick={() => chosenCategory('A')} className={`button-category ${category === 'A' ? 'active' : ''}`}>A, A1, A2, AM</button>
                <button onClick={() =>chosenCategory('B')} className={`button-category ${category === 'B' ? 'active' : ''}`}>B, B1</button>
            </div>
            <div className='button-container mt-5 pt-5'>
                <button className='start-btn'><Link to={`/Quiz?category=${category}`} className="start-btn">START</Link></button>
            </div>
        </div>
    )
}

export default Home;