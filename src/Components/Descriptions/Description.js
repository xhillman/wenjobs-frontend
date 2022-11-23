import React, { useEffect, useState } from "react";
import { Card } from 'antd';
import axios from "axios";


export default function Description(){

  return (
    <>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>{}</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </>
  )
}