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
          {[...Array(SkillDetails.length)].map((item, index) => (
            <div>{SkillDetails[index]}</div>
          ))}
        </div>
      );
    };

    const Experience = (experienceDetails) => {
      return (
        <div className="portfolio-experienceDetails">
          <h2>
            {experienceDetails.Company} : {experienceDetails.Years}
          </h2>
          {experienceDetails?.Desc?.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      );
    };

    const Education = (educationDetails) => {
      return (
        <div className="portfolio-educationDetails">
          {[...Array(Object.keys(educationDetails).length)].map(
            (item, index) => (
              <li>
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
            <div>{languageDetails[index]}</div>
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
          {websiteDetails?.["Website-Desc"]?.Desc?.map((item) => (
            <li>{item}</li>
          ))}
        </div>
      );
    };

    const Certification = (certificateDetails) => {
      return (
        <div className="portfolio-certificateDetails">
          {[...Array(certificateDetails.length)].map((item, index) => (
            <li>{certificateDetails[index]}</li>
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
            {data?.["Website-Desc"]?.Desc?.map((item) => (
              <li>{item}</li>
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
