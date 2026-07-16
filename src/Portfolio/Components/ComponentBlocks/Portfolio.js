import React, { useState } from "react";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Portfolio = (props) => {
  const { Data } = props;

  const [selectedPortfolioCard, setSelectedPortfolioCard] =
    useState("Career Objective");

  const handlePortfolio = (title) => {
    setSelectedPortfolioCard(title === selectedPortfolioCard ? null : title);
  };

  const accordion = (title, details) => {
    return (
      <>
        <div className="portfolio-accordion">
          <Accordion
            defaultExpanded={title === "Career Objective" ? true : false}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="accordion-title">{title}</div>
            </AccordionSummary>
            <AccordionDetails>{details}</AccordionDetails>
          </Accordion>
        </div>
        <div className="portfolio-accordion-mobile">
          <Accordion
            expanded={selectedPortfolioCard === title}
            defaultExpanded={title === "Career Objective" ? true : false}
            onChange={() => handlePortfolio(title)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="accordion-title">{title}</div>
            </AccordionSummary>
            <AccordionDetails>{details}</AccordionDetails>
          </Accordion>
        </div>
      </>
    );
  };

  const PortfolioData = Data.Portfolio;

  const Portfolio = [...Array(Object.keys(PortfolioData).length)].map(
    (item, index) => ({
      title: Object.keys(PortfolioData)[index],
      details: Object.values(PortfolioData)[index],
    })
  );

  const PortfolioDetails = (title, details) => {
    const CareerObj = (Careerdetails) => {
      return <div className="portfolio-careerDetails">{Careerdetails}</div>;
    };

    const Skills = (SkillDetails) => {
      return (
        <div className="portfolio-skillsDetails">
          {typeof SkillDetails === 'object' && !Array.isArray(SkillDetails) ? (
            Object.entries(SkillDetails).map(([category, skills], index) => (
              <div key={index} className="skill-category">
                <h4>{category}</h4>
                <div className="skill-tags">
                  {Array.isArray(skills) ? skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  )) : <span className="skill-tag">{skills}</span>}
                </div>
              </div>
            ))
          ) : Array.isArray(SkillDetails) ? (
            SkillDetails.map((item, index) => (
              <div key={index}>{item}</div>
            ))
          ) : (
            <div>{SkillDetails}</div>
          )}
        </div>
      );
    };

    const Experience = (experienceDetails) => {
      const calculateExperience = (startDate) => {
        const start = new Date(startDate);
        const now = new Date();
        const diffTime = Math.abs(now - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const years = (diffDays / 365.25).toFixed(1);
        return `${years} Years`;
      };

      const years = experienceDetails?.StartDate 
        ? calculateExperience(experienceDetails.StartDate)
        : experienceDetails?.Years || '';

      return (
        <div className="portfolio-experienceDetails experience-card">
          <div className="experience-header">
            <h3 className="experience-company">{experienceDetails?.Company}</h3>
            <span className="experience-years">{years}</span>
          </div>
          <div className="experience-body">
            {experienceDetails?.Desc?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      );
    };

    const Education = (educationDetails) => {
      return (
        <div className="portfolio-educationDetails">
          {[...Array(Object.keys(educationDetails).length)].map(
            (item, index) => (
              <li key={index}>
                {Object.keys(educationDetails)[index]} :{" "}
                {Object.values(educationDetails)[index]}
              </li>
            )
          )}
        </div>
      );
    };

    const Languages = (languageDetails) => {
      return (
        <div className="portfolio-languageDetails">
          {[...Array(languageDetails.length)].map((item, index) => (
            <div key={index}>{languageDetails[index]}</div>
          ))}
        </div>
      );
    };

    const Website = (websiteDetails) => {
      return (
        <div className="portfolio-projectDetails">
          <h3>
            {websiteDetails?.Website?.Title}:{" "}
            <a
              href={websiteDetails?.Website?.Link}
              target="_blank"
              className="linkColor"
              rel="noreferrer"
            >
              {websiteDetails?.Website?.Name}
            </a>
          </h3>
          <h4>{websiteDetails?.["Website-Desc"]?.["Desc-Title"]} :</h4>
          {websiteDetails?.["Website-Desc"]?.Desc?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      );
    };

    const Certification = (certificateDetails) => {
      return (
        <div className="portfolio-certificateDetails">
          {[...Array(certificateDetails.length)].map((item, index) => (
            <li key={index}>{certificateDetails[index]}</li>
          ))}
        </div>
      );
    };

    const Projects = (projectDetails) => {
      const displayData = (data) => {
        return (
          <>
            <h3>
              {data?.Website?.Title}: {data?.Website?.Name}
            </h3>
            <h4>{data?.["Website-Desc"]?.["Desc-Title"]} :</h4>
            {data?.["Website-Desc"]?.Desc?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </>
        );
      };

      return (
        <div className="portfolio-projectDetails">
          {displayData(projectDetails[0])}
          {displayData(projectDetails[1])}
        </div>
      );
    };

    return (
      <>
        {
          {
            "Career Objective": accordion(title, CareerObj(details)),
            Skills: accordion(title, Skills(details)),
            Experience: accordion(title, Experience(details)),
            Projects: accordion(title, Projects(details)),
            Website: accordion(title, Website(details)),
            Languages: accordion(title, Languages(details)),
            Education: accordion(title, Education(details)),
            Certification: accordion(title, Certification(details)),
          }[title]
        }
      </>
    );
  };

  return (
    <div className="home">
      <div className="home-info">
        <div className="portfolio" id="Creater">
          <div className="portfolio-details">
            <div>
              <img
                src={PortfolioData["Personal-Details"].Img}
                className="portfolio-img"
                alt=""
              />
            </div>
            <div className="portfolio-texts">
              <div className="portfolio-name">
                {PortfolioData["Personal-Details"].Name}
              </div>
              <div className="portfolio-role">
                {PortfolioData["Personal-Details"].Role}
              </div>
              <div className="portfolio-role">
                {PortfolioData["Personal-Details"].Designation}
              </div>
              <p className="portfolio-info">
                <li>
                  <h3>
                    {PortfolioData["Personal-Details"]["WebsiteTitle"]}:{" "}
                    <a
                      href={PortfolioData["Personal-Details"]["Website-Link"]}
                      target="_blank"
                      className="linkColor"
                      rel="noreferrer"
                    >
                      {PortfolioData["Personal-Details"]["Website-Name"]}
                    </a>
                  </h3>
                </li>
                <li>
                  <PhoneAndroidRoundedIcon />{" "}
                  {PortfolioData["Personal-Details"]["Mobile-No"]}
                </li>
                <li>
                  <MailOutlinedIcon /> {PortfolioData["Personal-Details"].Gmail}
                </li>
                <li>
                  <a href={PortfolioData["Personal-Details"]["LinkedIn-Link"]}>
                    <LinkedInIcon />{" "}
                    {PortfolioData["Personal-Details"]["LinkedIn-Name"]}
                  </a>
                </li>
                <li>
                  <HomeOutlinedIcon />{" "}
                  {PortfolioData["Personal-Details"].Address}
                </li>
              </p>
            </div>
          </div>
          <div className="portfolio-accordionCards">
            <div className="portfolio-careerAccordion">
              {Portfolio.map((item) =>
                item.title === "Career Objective"
                  ? PortfolioDetails(item.title, item.details)
                  : ""
              )}
            </div>
            <div className="portfolio-detailsAccordion">
              {Portfolio.map((item) =>
                item.title !== "Career Objective"
                  ? PortfolioDetails(item.title, item.details)
                  : ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
