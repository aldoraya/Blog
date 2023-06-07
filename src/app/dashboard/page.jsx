import React, { useState } from "react";
import { useSWR } from "swr";

const Dashboard = () => {

  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);

  return (
    <div className="">test</div>
    );
};

export default Dashboard;
