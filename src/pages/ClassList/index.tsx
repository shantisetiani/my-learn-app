import React, { useEffect } from "react";
import { api } from "api";

const ClassList = () => {
  useEffect(() => {
    getAvailableClasses();
  }, []);

  const getAvailableClasses = async () => {
    const data = await api.class.getAvailableClasses();
    console.log(data);
  };

  return <div>Class List</div>;
};

export default ClassList;
