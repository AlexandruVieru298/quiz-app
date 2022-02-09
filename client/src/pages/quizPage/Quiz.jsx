import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import './Quiz.css';
import Timer from '../../components/Timer/Timer';
import { getQuizData } from '../../services/api';
import { useLocation, useNavigate } from 'react-router-dom';


const Quiz = () => {

    const [quizData, setQuizData] = useState([]);
    const [quizIndex, setQuizIndex] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.search.split("=")[1];


    useEffect(() => {
        async function fetchData() {
            const res = await getQuizData();

            if (res.status === 200) {
                const filteredByCategory = res.data.filter(quiz => quiz.category === category);
                setQuizData(filteredByCategory);
            }
        }
        try {
            fetchData();
        }
        catch (error) {
            console.error('Something went wrong, please try again later.')
        }
    }, [category]);


    const handleSubmit = () => {
        setQuizIndex(prev => prev + 1);
        if (quizData.length - (quizIndex + 1) === 0) {
            navigate('/Pass');
        }
    }


    return (
        <div>
            {quizData?.length > 0 ? <>
                <Container>
                    <Row className="mt-3">
                        <Col className='border'>
                            <div className='line-height-05'>
                                <p className='text-center mt-3'>{quizData.length}</p>
                                <p className='text-center'>Initial questions</p>
                            </div>
                        </Col >
                        <Col className='border'>
                            <div className='line-height-05'>
                                <p className='text-center mt-3'>{quizData.length - (quizIndex + 1)}</p>
                                <p className='text-center line-height-05'>Questions left</p>
                            </div>
                        </Col>
                        <Col className='border'>
                            <div>
                                <h2 className='text-center mt-3'><Timer /></h2>
                            </div>
                        </Col>
                        <Col className='border'>
                            <div className='line-height-05'>
                                <p className='text-center mt-3 correct-answer'>%i</p>
                                <p className='text-center'>Correct answers</p>
                            </div>
                        </Col>
                        <Col className='border'>
                            <div className='line-height-05'>
                                <p className='text-center mt-3 incorrect-answer'>%i</p>
                                <p className='text-center'>Incorrect answers</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className='mt-5'>
                            <h1 className="text-center question-text mx-auto mt-5">{quizData[quizIndex].q}</h1>
                        </div>
                    </Row>
                    <Container className="mt-5">
                        <Row className="d-flex align-items-center">
                            <Col className="col-8">
                                {Object.keys(quizData[quizIndex].answers).map((k, index) => (
                                    <div key={`quizData ${index}`} className="container d-flex mt-5 pt-4">
                                        <button className='button me-4'>{k}</button>
                                        <p className='fs-4 font-weight-bold mt-2'>{quizData[quizIndex].answers[k]}</p>
                                        {console.log(quizData[quizIndex].q)}
                                    </div>
                                ))}
                            </Col>
                            <Col className="col-4 ">
                                {<img style={{ width: "100%", height: "auto" }} src={`quiz-images/${quizData[quizIndex].images}`} alt="" />}
                            </Col>
                        </Row>
                    </Container>
                    <Row className='pt-4'>
                        <Col className='mt-4 pt-4'>
                            <button className='ms-5 skip-question-btn'><i className="fas fa-forward"></i> Answer Later</button>
                        </Col>
                        <Col className='mt-4 pt-4 ms-5'>
                            <button className='ms-5 edit-answer-btn'><i className="fas fa-times-circle"></i> Edit Answer</button>
                        </Col>
                        <Col className='mt-4 pt-4 ms-5'>
                            <button className='ms-5 correct-answer-btn' onClick={handleSubmit}><i className="fas fa-check-circle"></i> Submit Answer</button>
                        </Col>
                    </Row>

                </Container>
            </> :
                <div className='center-container'>
                    <span className="sr-only">Loading...</span>
                    <Spinner animation="border" className="ms-3 mt-3" variant="dark" role="status"></Spinner>
                </div>}
        </div>
    )
}

export default Quiz;