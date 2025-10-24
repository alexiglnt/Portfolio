import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import jsonProjects from "../../jsons/projects.json";
import { AiOutlineGithub } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { localizeProject } from "../../utils/i18nProjects";

const ProjectDetails = () => {
    const { t, i18n } = useTranslation(['common', 'projects']);
    const { projectID } = useParams();
    const [data, setData] = useState(null);

    // 🧭 synchroniser la langue au mount
    useEffect(() => {
        try {
            const params = new URLSearchParams(window.location.search);
            const urlLng = params.get('lng');
            const cached = localStorage.getItem('i18nextLng');
            const target = urlLng || cached || 'fr';

            if (target && i18n.language !== target) {
                i18n.changeLanguage(target);
            }
        } catch { }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // une seule fois suffit

    useEffect(() => {
        const p = jsonProjects.projects.find((p) => p.id === projectID);
        if (p) setData(localizeProject(t, p));
    }, [projectID, t]);

    if (!data) return null;

    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    <strong className="purple">{data.name}</strong>&nbsp;
                    <a style={{ color: "white" }} href={data.github} rel="noreferrer">
                        <AiOutlineGithub style={{ fontSize: "50px", marginRight: "6px", marginBottom: "2px" }} />
                    </a>
                </h1>

                <br /><br />

                <div className='container-project-details'>
                    {data.video && (
                        <video className='video-project-details' src={`/${data.video}`} title={data.name} frameBorder="0" controls>
                            <source src={`/${data.video}`} type="video/mp4" />
                        </video>
                    )}

                    <h2 className="purple">{t('labels.description')}</h2><br />
                    {data?.project_details?.description?.map((item, index) => (
                        <React.Fragment key={index}>
                            <p>{item}</p>
                            <br />
                        </React.Fragment>
                    ))}

                    <br />

                    <h2 className="purple">{t('labels.technologies')}</h2><br />
                    <div style={{ display: "flex", justifyContent: "space-around", background: "white", padding: "25px", borderRadius: ".5em" }}>
                        {data?.project_details?.techno?.map((item, index) => (
                            <React.Fragment key={index}>
                                <img src={`/${item}`} alt="tech" width={70} />
                            </React.Fragment>
                        ))}
                    </div>

                    <br /><br />
                </div>
            </Container>
        </Container>
    );
};

export default ProjectDetails;
