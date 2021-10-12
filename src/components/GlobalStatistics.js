import "antd/dist/antd.css";
import "./GlobalStatistics.css";
import React, { useEffect } from 'react'
import axios from "axios"
import {useState} from "react"
import { Table, Tag, Space } from 'antd';


function GlobalStatistics() {
  const [data, setData]=useState([])
    useEffect(()=>{
    async function fetchData(){  
        try{
            const response=await axios.get("https://corona.lmao.ninja/v2/countries?yesterday=&sort=")   
            setData(response.data)
        }
        catch{
            console.log("data nhi arha bhai sahb!")
        }
    }
    fetchData()
    }, [])
    console.log(data)
    const columns = [
      {
        title: 'updated',
        dataIndex: 'updated',
        key: 'updated',
      },
      {
        title: 'country',
        dataIndex: 'country',
        key: 'country',
      },
      {
        title: 'cases',
        dataIndex: 'cases',
        key: 'cases',
      },
      {
        title: 'todayCases',
        dataIndex: 'todayCases',
        key: 'todayCases',
      },
      {
        title: 'deaths',
        dataIndex: 'deaths',
        key: 'deaths',
      },
      {
        title: 'todayDeaths',
        dataIndex: 'todayDeaths',
        key: 'todayDeaths',
      },
      {
        title: 'recovered',
        dataIndex: 'recovered',
        key: 'recovered',
      },
      {
        title: 'todayRecovered',
        dataIndex: 'todayRecovered',
        key: 'todayRecovered',
      },
      {
        title: 'active',
        dataIndex: 'active',
        key: 'active',
      },
      {
        title: 'critical',
        dataIndex: 'critical',
        key: 'critical',
      },
      {
        title: 'casesPerOneMillion',
        dataIndex: 'casesPerOneMillion',
        key: 'casesPerOneMillion',
      },
      {
        title: 'deathsPerOneMillion',
        dataIndex: 'deathsPerOneMillion',
        key: 'deathsPerOneMillion',
      },
      {
        title: 'tests',
        dataIndex: 'tests',
        key: 'tests',
      },
      {
        title: 'testsPerOneMillion',
        dataIndex: 'testsPerOneMillion',
        key: 'testsPerOneMillion',
      },
      {
        title: 'population',
        dataIndex: 'population',
        key: 'population',
      },
      {
        title: 'continent',
        dataIndex: 'continent',
        key: 'continent',
      },
      {
        title: 'oneCasePerPeople',
        dataIndex: 'oneCasePerPeople',
        key: 'oneCasePerPeople',
      },
      {
        title: 'oneDeathPerPeople',
        dataIndex: 'oneDeathPerPeople',
        key: 'oneDeathPerPeople',
      },
      {
        title: 'oneTestPerPeople',
        dataIndex: 'oneTestPerPeople',
        key: 'oneTestPerPeople',
      },
      {
        title: 'activePerOneMillion',
        dataIndex: 'activePerOneMillion',
        key: 'activePerOneMillion',
      },
      {
        title: 'recoveredPerOneMillion',
        dataIndex: 'recoveredPerOneMillion',
        key: 'recoveredPerOneMillion',
      },
      {
        title: 'criticalPerOneMillion',
        dataIndex: 'criticalPerOneMillion',
        key: 'criticalPerOneMillion',
      },
    ];
    return (
        <div>
            <Table dataSource={data} columns={columns} />;
        </div>
    )
}

export default GlobalStatistics;
