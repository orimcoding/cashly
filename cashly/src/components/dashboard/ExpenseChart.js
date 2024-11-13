import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

function ExpenseChart({ data }) {
    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
            />
            <Tooltip />
        </PieChart>
    );
}

export default ExpenseChart;
