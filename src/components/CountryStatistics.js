import React, { useEffect } from "react";
import { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { Table, Tag, Space } from "antd";
import { Select } from "antd";
import { Input } from "antd";

import {
  getAllDataMiddleware,
  getSpecificCountryMiddleware,
} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

function CountryStatistics() {
  const { Option } = Select;
  const { Search } = Input;
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.data.allCountries);
  const specificCountry = useSelector((state) => state.data.specificCountry);
  const [option, setOption] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(allData);
  });
  useEffect(() => {
    dispatch(getAllDataMiddleware(option));
  }, [option]);

  useEffect(() => {
    dispatch(getSpecificCountryMiddleware(name));
    setData([specificCountry]);
    console.log("specific country :", specificCountry);
    console.log("data now :", data);
  }, [name]);

  // console.log("specificCountry", specificCountry);
  function handleOptionChange(value) {
    setOption(value);
  }
  const handleNameChange = (value) => {
    setName(value);
  };

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
        onChange={(e) => handleNameChange(e.target.value)}
        style={{ width: 200 }}
      />
      <Table
        dataSource={name.length !== 0 ? [specificCountry] : allData}
        // dataSource={data}
        columns={columns}
      />
    </div>
  );
}

export default CountryStatistics;
