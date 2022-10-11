import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const QS = ({ qs }) => {
    const { options, correctAnswer } = qs;
    console.log(qs)
    const handleQsAns = (option) => {
        if (correctAnswer === option) {
            alert('correct')
        }
        else {
            alert('incorrect')
        }
    }
    const rightAns = (correctAnswer) => {
        if (correctAnswer) {
            alert(correctAnswer)
        }
    }
    return (
        <div className='border p-5 grid-cols-2'>
            <div className='display: flex'>
                <h1>{qs.question}</h1>
                <FontAwesomeIcon icon={faEye} className='ml-10' onClick={() => rightAns(correctAnswer)}></FontAwesomeIcon>
            </div>
            <div>
                {
                    options.map(option => <p onClick={() => handleQsAns(option)}>{option}</p>)
                }

            </div>

        </div>
    );
};

export default QS;