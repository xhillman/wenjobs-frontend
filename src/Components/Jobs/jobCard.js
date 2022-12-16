import React from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";



const JobCard = () => {
    let selectedJob = useSelector((state) => state.jobs.selectedJob);
    return (
        <Card bordered={false} bodyStyle={{ overflowY: 'auto', height: '29.5rem', padding: '1rem'}}>
            <h2>{ selectedJob.title}</h2>
            <p>{selectedJob.details}</p>

        </Card>

    );
}

export default JobCard;