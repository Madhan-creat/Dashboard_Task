import React from 'react'
import 
{RiExchangeDollarFill} from 'react-icons/ri'
import {BsFileText,BsHandbagFill,BsDatabase,BsArrowUpShort} from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis,PieChart, Pie,Label, ResponsiveContainer, Sector, YAxis } 
 from 'recharts';
import Tablebasic from './Table';
 
 const data02 = [
   { name: 'A1', value: 100 },
   { name: 'A2', value: 300 },
   { name: 'B1', value: 100},
 ]
 
function Home() {

  
  
    const data = [
        {
          name: 'Jan',
          val:700,
        },
        {
          name: 'Feb',
          val:500
        },
        {
          name: 'Mar',
          val:100
        },
        {
          name: 'Apr',
          val:800
        },
        {
          name: 'May',
          val:900 
        },
        {
          name: 'Jun',
          val:400
     
        },
        {
          name: 'Jul',
          val:900
          
        },
        {
          name: 'Aug',
          val:1000
        },
        {
          name: 'Sep',
          val:900
        },
        {
          name: 'Oct',
          val:800
        },
        {
          name: 'Nov',
          val:700
         
        },
        {
          name: 'Dec',
          val:800
          
        },
      ];
     

  return (
    <main className='main-container'>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                  <div className='card-icon1'>
                    <RiExchangeDollarFill size={50} color='#2da832' />
                  </div>
                  <div className='card-content'>
                    <h5>Earning</h5>
                    <h1>$198k</h1>
                    <h6><span>37.8%</span> this month</h6>
                  </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                   <div className='card-icon2'>
                    <BsFileText size={40} color='#905ec4' />
                  </div>
                  <div className='card-content'>
                    <h5>Orders</h5>
                    <h1>$2.4k</h1>
                    <h6><span><BsArrowUpShort size={15}/>2%</span> this month</h6>
                  </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                   <div className='card-icon3'>
                     <BsDatabase size={40} color='#3530ba'/>
                  </div>
                  <div className='card-content'>
                    <h5>Balance</h5>
                    <h1>$2.4k</h1>
                    <h6><span><BsArrowUpShort size={15}/>2%</span> this month</h6>
                  </div>
                </div>
              
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <div className='card-icon4'>
                      <BsHandbagFill size={40} color='#d4427c'/>
                  </div>
                  <div className='card-content'>
                    <h5>Total Sales</h5>
                    <h1>$89k</h1>
                    <h6><span><BsArrowUpShort size={15}/>11%</span> this month</h6>
                  </div>
                </div>
               
            </div>
        </div>

        <div className='charts'>
          
            <ResponsiveContainer width="100%" height="100%">
            
            <BarChart
           
            width={400}
            height={200}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            className='bar'
            >
            
                <XAxis dataKey="name" />
               
  <YAxis label={{ value: 'Month Earning', angle:0, position: 'insideTop', color:"#000000" }} />
                <Bar dataKey="val" fill="#8838a8"/>
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400} className='pie'>

          <Pie data={data02} dataKey="value" cx="50%" cy="50%" name='madhan' innerRadius={50} outerRadius={70} fill='#8838a8' label={{ value: 'Month Earning', angle:0, position: 'center'}} />
        </PieChart>
      </ResponsiveContainer>
            

        </div>
        <br/><br/>
       <Tablebasic/>
    </main>
     
  )
}

export default Home