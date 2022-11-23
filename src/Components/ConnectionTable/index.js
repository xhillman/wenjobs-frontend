
const CompanyTable = () => {


    // const addJobsData = async () => {
    //     console.log(jobData)
    //     const batch = writeBatch(db);

    //     try {
    //         if (jobData) {
    //             jobData.jobs.forEach(job => {
    //                 let ref = doc(db, "jobs", job.key);
    //                 batch.set(ref,
    //                     {
    //                         "job": job.job,
    //                         "company": job.company,
    //                         "location": job.location,
    //                         "post_date": job.post_date,
    //                         "link": job.link,
    //                         "key": job.key,
    //                         "details": job.details,
    //                         "tags": job.tags
    //                     });
    //             });
    //         }

    //         await batch.commit();


    //     } catch (e) {
    //         console.error('Error adding document: ', e);
    //     }


    // }


    return (
        <>

            {/* <Table className='connectionsTableWrapper' dataSource={connectionsData}>
                <Column title='First Name' dataIndex='First Name' key={Math.random()} />
                <Column title='Last Name' dataIndex='Last Name' key={Math.random()} />
                <Column title='Email Address' dataIndex='Email Address' key={Math.random()} />
                <Column title='Company' dataIndex='Company' key={Math.random()} />
                <Column title='Position' dataIndex='Position' key={Math.random()} />
                <Column title='Connected On' dataIndex='Connected On' key={Math.random()} />
            </Table>
            <div className='uploadSectionWrapper'>
                <Upload customRequest={handleFile}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                <Button onClick={addConnectionsData}>add all connections to DB</Button>
                <Button onClick={readConnectionsData}>read all client from DB</Button>
            </div> */}
        </>
    );
}

export default CompanyTable;
