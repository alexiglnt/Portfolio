import React from "react";

function ExperienceCard({title, company, date, description, location, logo}) {

  return (
    <>

      <div>
        <div class="card-exp mb-3 aos-animate" data-aos="fade-right" data-aos-delay="100">
          <div class="card-header px-3 py-2">
            <div class="d-flex justify-content-between  ">
              <div>
                <h3 class="h5 mb-1"> {title} </h3>
                <div class="text-muted text-small"> {company} <small> ({date}) </small></div>
              </div><img src="isitecc_logo.png" width="48" height="48"
                alt="ui-ux" />
            </div>
          </div>
          <div class="card-body px-3 py-2">

            {description.map((item) => (
              <> <p>{item}</p> <br/> </>
            ))}

            <p class="text-muted text-small"> {location} </p>
          </div>
        </div>
      </div>
    </>

  );
}

export default ExperienceCard;



