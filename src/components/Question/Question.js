import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { handleAddQuiz } from '../../loaders/handleQuiz';
import './Question.css'

const Question = ({ question }) => {
    const { name, logo, total, id } = question;
    return (
        <div className='question-container p-10 rounded-md'>

            <div>
                <img className='bg-black rounded-md' src={logo} alt="" />

            </div>
            <div className='display: flex justify-between mt-2'>
                <div>
                    <h1>{name}</h1>
                    <p>Total:{total}</p>
                </div>
                <div>
                    <button onClick={() => handleAddQuiz(id)} className='bg-pink-600 p-2 text-white rounded-md '>
                        Start Practice
                        <FontAwesomeIcon className='ml-3' icon={faArrowAltCircleRight}></FontAwesomeIcon>

                    </button>
                </div>
            </div>

        </div>
    );
};

export default Question;