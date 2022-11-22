import React from "react";
import axios from "axios";

const data = async () => {
  try {
    let data = await axios.get('https://wen-jobs-server-deploy-prod.onrender.com/updateJobs');
    let sanitizedData = data.data;
    console.log(sanitizedData);
  } catch (err) {
    console.error(err);
  }
}

export default function Description(){
  return (
    <>
      <div>Descriptions box</div>
    </>
  )
}