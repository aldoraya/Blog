"use client"

import React from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const Dashboard = () => {

  const session = useSession()

  console.log(session);

  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);

  return (
    <div className="pt-24 px-44">test</div>
    );
};

export default Dashboard;
