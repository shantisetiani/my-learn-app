import React, { useEffect } from "react";
import { api } from "api";
import { useParams } from "react-router-dom";

const ClassDetail = () => {
  const params = useParams();

  useEffect(() => {
    getClassDetail();
  }, []);

  const getClassDetail = async () => {
    const data = await api.class.getClassDetail(Number(params.id));
    console.log(data);
  };

  return <div>Class Detail</div>;
};

export default ClassDetail;
