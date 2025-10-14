import React from "react";
import { AiOutlineGithub, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function ProjectCards({ data, id }) {
  const { t } = useTranslation();

  return (
    <>
      {id % 2 === 0 ? (
        <>
          <div className="text_show">
            <div className="show_project">
              <div className="image-container">
                <img src={data.img1} alt="projet" className="first-image" />
              </div>
              <div className="image-container">
                <img src={data.img2} alt="projet" className="half-image half-top" />
                <img src={data.img3} alt="projet" className="half-image half-bottom" />
              </div>
            </div>

            <div className="project_text">
              <h2>{data.name}</h2>
              <span><center>{data.date}</center></span><br />
              <p><b>{t('labels.goal')} :</b> {data.but}</p>
              <p><b>{t('labels.description')} :</b> {data.description}</p>
              <p><b>{t('labels.technologies')} :</b> {data.technologies}</p>
              <p><b>{t('labels.type')} :</b> {data.project_type}</p>
              <a className="github-icon-btn-card" href={data.github} target="_blank" rel="noreferrer">
                <AiOutlineGithub style={{ fontSize: "30px", marginRight: "6px", marginBottom: "2px" }} />
              </a>
            </div>
          </div>
          <div className="div_download_btn">
            <a className="download_btn" href={`/project/${data.id}`} target="_blank" rel="noreferrer">
              <AiOutlineFundProjectionScreen style={{ fontSize: "20px", marginRight: "6px", marginBottom: "2px" }} />
              {t('labels.more')}
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="text_show">
            <div className="project_text">
              <h2>{data.name}</h2>
              <span><center>{data.date}</center></span><br />
              <p><b>{t('labels.goal')} :</b> {data.but}</p>
              <p><b>{t('labels.description')} :</b> {data.description}</p>
              <p><b>{t('labels.technologies')} :</b> {data.technologies}</p>
              <p><b>{t('labels.type')} :</b> {data.project_type}</p>
              <a className="github-icon-btn-card" href={data.github} target="_blank" rel="noreferrer">
                <AiOutlineGithub style={{ fontSize: "30px", marginRight: "6px", marginBottom: "2px" }} />
              </a>
            </div>

            <div className="show_project">
              <div className="image-container">
                <img src={data.img1} alt="projet" className="first-image" />
              </div>
              <div className="image-container">
                <img src={data.img2} alt="projet" className="half-image half-top" />
                <img src={data.img3} alt="projet" className="half-image half-bottom" />
              </div>
            </div>
          </div>
          <div className="div_download_btn">
            <a className="download_btn" href={`/project/${data.id}`} target="_blank" rel="noreferrer">
              <AiOutlineFundProjectionScreen style={{ fontSize: "20px", marginRight: "6px", marginBottom: "2px" }} />
              {t('labels.more')}
            </a>
          </div>
        </>
      )}
    </>
  );
}
export default ProjectCards;
