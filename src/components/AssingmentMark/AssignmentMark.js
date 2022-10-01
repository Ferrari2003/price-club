import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const AssignmentMark = () => {
    const data = [
        {
            name: 'page A',
            marks :2390,
            quiz:3800,
            amt:2500,
        },
        {
            name: 'page A',
            marks :2790,
            quiz:3500,
            amt:2300,
        },
        {
            name: 'page A',
            marks :2890,
            quiz:1800,
            amt:2900,
        },
        {
            name: 'page A',
            marks :2990,
            quiz:3200,
            amt:2800,
        },
        {
            name: 'page A',
            marks :1390,
            quiz:6800,
            amt:2540,
        },
        {
            name: 'page A',
            marks :2790,
            quiz:8800,
            amt:2560,
        },
        {
            name: 'page A',
            marks :6390,
            quiz:3840,
            amt:7700,
        },
    ]
    return (
        <div>
            <LineChart width={500} height={400} data={data}>
            <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
            <XAxis dataKey="name" />
           <YAxis />
           <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default AssignmentMark;