import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';


const QS = ({ qs }) => {
    const { options, correctAnswer } = qs;

    const handleQsAns = (option) => {
        if (correctAnswer === option) {


            toast.success('Your answer is correct')
        }
        else {
            toast.error('Your ans wrong')
        }
    }
    const rightAns = (correctAnswer) => {
        toast(`Your ans is: ${correctAnswer}`)
    }
    return (
        <div className='border p-5 shadow-lg'>
            <div className='display: flex justify-center'>
                <h1 className='text-2xl'> {qs.question}</h1>
                <FontAwesomeIcon icon={faEye} className='ml-10 mt-3' onClick={() => rightAns(correctAnswer)}></FontAwesomeIcon>
            </div>
            <div className='grid-cols-2'>
                {
                    options.map(option => <li className='text-1xl ' key={option.toString()} onClick={() => handleQsAns(option)}>{option}</li>)
                }

            </div>
            <Toaster />
        </div>
    );
};

export default QS;