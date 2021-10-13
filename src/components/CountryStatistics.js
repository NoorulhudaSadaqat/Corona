import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { Table, Tag, Space } from "antd";
import { Select } from "antd";
import { Input } from "antd";

function CountryStatistics() {
  const { Option } = Select;
  const { Search } = Input;
  const [data, setData] = useState([]);
  const [option, setOption] = useState("");
  const [originalData,setOrginalData]=useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://corona.lmao.ninja/v2/countries?yesterday=&sort=${option}`
        );
        setData(response.data);
        setOrginalData(response.data);
        console.log("Response after sorting :" + response.data);
      } catch {
        console.log("data nhi arha bhai sahb!");
      }
    }
    fetchData();
  }, [option]);
  const columns = [
    {
      title: "updated",
      dataIndex: "updated",
      key: "updated",
    },
    {
      title: "country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "cases",
      dataIndex: "cases",
      key: "cases",
    },
    {
      title: "todayCases",
      dataIndex: "todayCases",
      key: "todayCases",
    },
    {
      title: "deaths",
      dataIndex: "deaths",
      key: "deaths",
    },
    {
      title: "todayDeaths",
      dataIndex: "todayDeaths",
      key: "todayDeaths",
    },
    {
      title: "recovered",
      dataIndex: "recovered",
      key: "recovered",
    },
    {
      title: "todayRecovered",
      dataIndex: "todayRecovered",
      key: "todayRecovered",
    },
    {
      title: "active",
      dataIndex: "active",
      key: "active",
    },
    {
      title: "critical",
      dataIndex: "critical",
      key: "critical",
    },
    {
      title: "casesPerOneMillion",
      dataIndex: "casesPerOneMillion",
      key: "casesPerOneMillion",
    },
    {
      title: "deathsPerOneMillion",
      dataIndex: "deathsPerOneMillion",
      key: "deathsPerOneMillion",
    },
    {
      title: "tests",
      dataIndex: "tests",
      key: "tests",
    },
    {
      title: "testsPerOneMillion",
      dataIndex: "testsPerOneMillion",
      key: "testsPerOneMillion",
    },
    {
      title: "population",
      dataIndex: "population",
      key: "population",
    },
    {
      title: "continent",
      dataIndex: "continent",
      key: "continent",
    },
    {
      title: "oneCasePerPeople",
      dataIndex: "oneCasePerPeople",
      key: "oneCasePerPeople",
    },
    {
      title: "oneDeathPerPeople",
      dataIndex: "oneDeathPerPeople",
      key: "oneDeathPerPeople",
    },
    {
      title: "oneTestPerPeople",
      dataIndex: "oneTestPerPeople",
      key: "oneTestPerPeople",
    },
    {
      title: "activePerOneMillion",
      dataIndex: "activePerOneMillion",
      key: "activePerOneMillion",
    },
    {
      title: "recoveredPerOneMillion",
      dataIndex: "recoveredPerOneMillion",
      key: "recoveredPerOneMillion",
    },
    {
      title: "criticalPerOneMillion",
      dataIndex: "criticalPerOneMillion",
      key: "criticalPerOneMillion",
    },
  ];
  function handleOptionChange(value) {
    console.log("value", value);
    setOption(value);
  }
  const handleNameChange = async (event) => {
    const name=event.target.value+"";
    console.log("length",name.length);
    const responseData = await axios.get(
        `https://corona.lmao.ninja/v2/countries/${name}`
    ).then((res) => {
        console.log('res', res)
        const array = [res.data]
        setData(array)
    }).catch(err => {
        console.log(err)
        setData(data)
    })
    if(name.length===0){
        console.log("Original data :",originalData)
        setData(originalData)
        console.log("data",data)
    }
  }
  return (
    <div>
      <Select
        defaultValue="cases"
        style={{ width: 120 }}
        onChange={handleOptionChange}
      >
        <Option value="updated">updated</Option>
        <Option value="cases">cases</Option>
        <Option value="todayCases">todayCases</Option>
        <Option value="deaths">deaths</Option>
        <Option value="todayDeaths">todayDeaths</Option>
        <Option value="recovered">recovered</Option>
        <Option value="active">active</Option>
        <Option value="critical">critical</Option>
        <Option value="tests">tests</Option>
      </Select>
      <Search
        placeholder="search by name"
        onChange={handleNameChange}
        style={{ width: 200 }}
      />
      <Table dataSource={data} columns={columns} />
    </div>
  );
}

export default CountryStatistics;
