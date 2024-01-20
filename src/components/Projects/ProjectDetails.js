import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import jsonProjects from "../../jsons/projects.json"
import { AiOutlineGithub } from "react-icons/ai";



const ProjectDetails = () => {
    const { projectID } = useParams();
    const [data, setData] = useState({});
    const [video, setVideo] = useState({});

    useEffect(() => {

        jsonProjects.projects.map((project, index) => {
            if (project.id === projectID) {
                setData(project)
                console.log("Details", data)
                setVideo(project.video)
            }
        })
    }, []);

    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>

                <h1 className="project-heading">
                    <strong className="purple"> {data.name} </strong> &nbsp;
                    <a style={{color: "white"}} href={data.github} rel="noreferrer" >
                        <AiOutlineGithub style={{ fontSize: "50px", marginRight: "6px", marginBottom: "2px" }} />
                    </a>
                </h1>

                <br></br> <br></br>

                <div className='container-project-details' >

                    {/* {data.video && (
                        <iframe style={{ borderRadius: ".5em", marginBottom: "50px" }} width="560" height="315" src={data.video} title={data.name} frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    )} */}

                    {data.video && (
                        <video style={{ borderRadius: ".5em", marginBottom: "50px" }} width="560" height="315" src={`/${data.video}`} title={data.name} frameBorder="0" controls>
                            <source src={`/${video}`} type="video/mp4" />
                        </video>

                    )}


                    <h2 className="purple"> Description </h2> <br />

                    {data?.project_details?.description.map((item, index) => (
                        <React.Fragment key={index}>
                            <p> {item} </p>
                            <br></br>
                        </React.Fragment>
                    ))}

                    <br></br>

                    <h2 className="purple"> Technologies </h2> <br />

                    <div style={{ display: "flex", justifyContent: "space-around", background: "white", padding: "25px", borderRadius: ".5em" }} >
                        {
                            data?.project_details?.techno?.map((item, index) => (
                                <React.Fragment key={index}>
                                    <img src={`/${item}`} alt="projet" width={70} />
                                    <br></br>
                                </React.Fragment>
                            ))
                        }
                    </div>

                    <br></br> <br></br>


                </div>


            </Container>
        </Container>


    );
};

export default ProjectDetails;
