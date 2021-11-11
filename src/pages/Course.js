import React from 'react'
import styled from 'styled-components'

import { BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { PieChart, Pie } from 'recharts';
import red from '../images/red.jpg'
const chata = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const DOLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];
const mata = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const data = [
  {
    name: 'Webdev',
    value: 400,

  },
  {
    name: 'Gamedev',
    value: 300,
 
  },
  {
    name: 'AI',
    value: 200,
  
  },
  {
    name: 'Other Courses',
    value: 278,

  },
  
];

function Course() {
    return (
      <MainContainer>
        <Data> Students Enrolled</Data>
      <ResponsiveContainer width="95%" aspect={3}>
        <BarChart
          width={100}
          height={400}
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 15,
          }}
        >
              <XAxis dataKey="name" fill="#fff" />
              <YAxis />
              <Bar dataKey="value" fill="chocolate" />
        </BarChart>
      </ResponsiveContainer>
      <Data1>Some Stats</Data1>
      <Content>
      
      <PieChart width={800} height={400} >
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={mata}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {mata.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
      </PieChart>
     
      <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
        <PieChart width={400} height={400}>
          <Pie
            data={chata}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={DOLORS[index % DOLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </Content>
      </MainContainer>
    );

}

export default Course;
export const MainContainer = styled.div`
margin-top: 5rem;
background-image:url(${red});
`
export const Content = styled.div`
 display: grid;
        grid-template-columns: repeat(3, 2fr);
        grid-gap: 0.01rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       

`
export const Data=styled.div`
margin-left: 45%;
color: lightcyan;
font-weight: bold;
font-size:30px;


`
export const Data1=styled.div`
margin-left: 47.5%;
color: lightcyan;
font-weight: bold;
font-size:30px;
`
