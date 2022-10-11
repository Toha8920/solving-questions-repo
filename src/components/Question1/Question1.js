import { queries } from '@testing-library/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QS from '../QS/QS';

const Question1 = () => {
    const questions = useLoaderData();

    console.log(questions.data, 'quesladkjflksadjf')
    return (
        <div>
            {
                questions.data.questions.map(qs => <QS key={qs.id} qs={qs}></QS>)
            }

        </div>
    );
};

export default Question1;