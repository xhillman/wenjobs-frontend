import React from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";



const JobCard = () => {
    let selectedJob = useSelector((state) => state.jobs.selectedJob);
    return (
        <Card  bodyStyle={{ overflowY: 'auto', height: '67.5vh' }}>
            <h2>{selectedJob.title}</h2>
            <p>{selectedJob.details}</p>

        </Card>

    );
}

export default JobCard;