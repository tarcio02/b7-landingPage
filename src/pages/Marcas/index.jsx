import { Container, LogosTrack, LogoWrapper, DuplicatedTrack } from "./styles";
import ecopower from "../../assets/images/ecopower.png";
import rizodent from "../../assets/images/rizodent.png";
import sadia from "../../assets/images/sadia.png";
import atacadaodoe from "../../assets/images/atacadaodoe.png";
import lemont from "../../assets/images/lemont.png";
import viaarea from "../../assets/images/viaaerea.png";
import odontocompany from "../../assets/images/odontocompany.png";
import protemax from "../../assets/images/protemax.png";

const Marcas = () => {
  const logos = [
    ecopower,
    rizodent,
    sadia,
    atacadaodoe,
    lemont,
    viaarea,
    odontocompany,
    protemax,
  ];

  return (
    <Container>
      <LogosTrack>
        <DuplicatedTrack>
          {logos.map((logo, index) => (
            <LogoWrapper key={`1-${index}`}>
              <img src={logo} alt={`Logo ${index}`} />
            </LogoWrapper>
          ))}
          {logos.map((logo, index) => (
            <LogoWrapper key={`2-${index}`}>
              <img src={logo} alt={`Logo duplicada ${index}`} />
            </LogoWrapper>
          ))}
        </DuplicatedTrack>
      </LogosTrack>
    </Container>
  );
};

export default Marcas;
