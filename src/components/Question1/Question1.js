import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QS from '../QS/QS';

const Question1 = () => {
    const questions = useLoaderData();


    return (
        <div>
            <h1 className='text-3xl text-center '>Quiz of  {questions.data.name}</h1>
            {
                questions.data.questions.map(qs => <QS key={qs.id} qs={qs}></QS>)
            }

        </div>
    );
};

export default Question1;