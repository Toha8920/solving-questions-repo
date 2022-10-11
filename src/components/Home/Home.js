import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Home.css'

const Home = () => {
    const questions = useLoaderData();

    return (
        <div>
            <div className=' mt-5'>
                <img className='mx-auto w-96' src="https://media.istockphoto.com/photos/thinking-business-woman-with-many-questions-in-bubbles-above-picture-id479189577?k=20&m=479189577&s=612x612&w=0&h=YMDf-j9qMN8DFZGZJoPCl-kldYVtNN7aPo2p6z7Lkx0=" alt="" />
            </div>
            <h1 className='text-2xl'>This site is used for solving questions. You can find the right answer in this. Even you clicked a wrong you can also know the right answer</h1>
            <div className='grid'>
                {
                    questions.data.map(question => <Question question={question} key={question.id}></Question>)
                }
            </div>
        </div>
    );
};

export default Home
    ;
