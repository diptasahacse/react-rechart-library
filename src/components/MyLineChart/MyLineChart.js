import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const studentsRecord = [
        {
          name: 'A1',
          marks: 60
          
        },
        {
          name: 'A2',
          marks: 60
          
        },
        {
          name: 'A3',
          marks: 60
          
        },
        {
          name: 'A4',
          marks: 45
          
        },
        {
          name: 'A5',
          marks: 60
          
        },
        {
          name: 'A6',
          marks: 56
          
        },
        {
          name: 'A7',
          marks: 60
          
        },
      ];
    return (
        <div>
            <LineChart width={800} height={400} data={studentsRecord}>
                <Line type="monotone" dataKey={"marks"}></Line>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis dataKey={"marks"}></YAxis>
                <Tooltip></Tooltip>

            </LineChart>
            
        </div>
    );
};

export default MyLineChart;