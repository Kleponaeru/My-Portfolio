import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CloudDownload, CloudDownloadFill, Download } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;
  const toRotate = ["Web Development", "UI/UX Design", "BackEnd Development", "DB Development"];

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

  return (
    <section className="banner" id="home">
      <Container>
        <Row class="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>{"Hi! I'm Kelvin Lie"} </h1>
            <Row>
              <h1>
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Web Development", "BackEnd Development", "UI/UX Design", "DB Development]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
            </Row>
            <Row>
              <p>
                Undergraduate Information Systems student at{" "}
                <b>Universitas Kristen Duta Wacana</b>, I'm passionate about{" "}
                <b>Web Development, BackEnd, Databases and UI/UX Designer</b>.
                I'm also a UI/UX Apprentice at MyEduSolve and a PKM-PM Funding
                Awardee from DIKTI. I thrive on creative problem-solving and am
                eager to contribute to innovative tech projects.
              </p>
            </Row>
            <button classname="cv" onClick={() => console.log("connect")}>
              <u>See more in CV</u> <CloudDownloadFill size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img alt="Header Img" src={headerImg} />
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="background"/>
    </section>
  );
};
