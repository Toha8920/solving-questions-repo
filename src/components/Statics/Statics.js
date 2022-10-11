import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const Statics = () => {
    const data = useLoaderData();

    console.log(data);
    return (
        <div>
            <LineChart width={350} height={400} data={data.data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total"></YAxis>
            </LineChart>

        </div>
    );
};

export default Statics;