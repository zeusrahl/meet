import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const colors = ['#d0427f', '#f8a01f', '#528272', '#f15f4b', '#7dbeb8', '#5c69a0', '#fff000']; // change last color to match color palatte
  useEffect(() => { 
    setData(() => getData());
  }, [events]); // eslint-disable-line react-hooks/exhaustive-deps

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS', 'Angular'];
    const data = genres
      .reduce(
        (xs, genre) => {
          const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
          if (value > 0 ){
            xs.push({ name: genre, value: value });
          }
          return xs;
        },
          []
        );
    return data;
  };

  return (
    <ResponsiveContainer height={400} >
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenre;