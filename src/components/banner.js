import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  CloudDownload,
  CloudDownloadFill,
  Download,
} from "react-bootstrap-icons";
import headerImg from "../assets/img/sword-heart.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;
  const toRotate = [
    "Web Developer",
    "UI/UX Designer",
    "BackEnd Developer",
    "DB Developer",
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    // Determine whether to add or delete characters
    let newText;
    if (isDeleting) {
      newText = fullText.substring(0, text.length - 1);
    } else {
      newText = fullText.substring(0, text.length + 1);
    }

    setText(newText);

    // Adjust speed based on adding or deleting characters
    if (isDeleting) {
      setDelta(period / 10); // Speed up when deleting
    } else {
      setDelta(200); // Adjust speed as needed when adding characters
    }

    // Update states based on text length and animation state
    if (!isDeleting && newText === fullText) {
      setIsDeleting(true);
      setDelta(period); // Delay before starting delete
    } else if (isDeleting && newText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1); // Move to the next text in rotation
    }

    // Increment index for the next text in rotation
    setIndex((prevIndex) => (prevIndex + 1) % toRotate.length);
  };

  const handleDownload = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/Kelvin Lie-resume.pdf`;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Kelvin Lie - CV.pdf"; // The name the file will be downloaded as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>{"Hi! I'm Kelvin Lie"} </h1>
            <Row>
              <h1 className="typing-container">
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Web Developer", "BackEnd Developer", "UI/UX Designer", "DB Developer"]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
            </Row>
            <Row>
              <p>
                Bachelor's Degree in Information Systems from{" "}
                <b>Universitas Kristen Duta Wacana</b>, I'm passionate about{" "}
                <b>Web Development, BackEnd, Databases, and UI/UX Design</b>.
                I'm also a <b>Fullstack Web Developer at KPN CORP</b>, {" "}
                <b>UI/UX Apprentice</b> at MyEduSolve, and {" "}
                <b>PKM-PM Funding Awardee from DIKTI.</b> I thrive on creative
                problem-solving and eager to contribute to innovative tech
                projects.
              </p>
            </Row>
            <button className="cv" onClick={() => handleDownload()}>
              <u>See more in CV</u> <CloudDownloadFill size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img draggable="false" alt="Header Img" src={headerImg} />
          </Col>
        </Row>
      </Container>
      {/* <img
        className=""
        src={bgBalls}
        alt="background"
      /> */}
    </section>
  );
};
