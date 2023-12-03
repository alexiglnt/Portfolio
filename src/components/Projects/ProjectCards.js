import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

function ProjectCards({ data, id }) {
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
              <h2> {data.name} </h2>
              <span><center> {data.date} </center></span><br />
              <p><b>But du jeu :</b> {data.but} </p>
              <p><b>Description :</b> {data.description} </p>
              <p><b>Technologies :</b> {data.technologies} </p>
              <p><b>Type de projet :</b> {data.project_type} </p>
            </div>
          </div>
          <div className="div_download_btn">
            <a className="download_btn" href={data.github} target="_blank" rel="noreferrer" >
              <AiOutlineGithub style={{ fontSize: "20px", marginRight: "6px", marginBottom: "2px" }} />
              Plus d'informations
            </a>
          </div>
        </>

      ) : (
        <>
          <div className="text_show">

            <div className="project_text">
              <h2> {data.name} </h2>
              <span><center> {data.date} </center></span><br />
              <p><b>But du jeu :</b> {data.but} </p>
              <p><b>Description :</b> {data.description} </p>
              <p><b>Technologies :</b> {data.technologies} </p>
              <p><b>Type de projet :</b> {data.project_type} </p>
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
            <a className="download_btn" href={data.github} target="_blank" rel="noreferrer" >
              <AiOutlineGithub style={{ fontSize: "20px", marginRight: "6px", marginBottom: "2px" }} />
              Plus d'informations
            </a>
          </div>
        </>
      )
      }
    </>

  );
}
export default ProjectCards;