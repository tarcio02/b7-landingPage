import { Container, LogosTrack, LogoWrapper, DuplicatedTrack } from "./styles";
import atacadaoE from "../../assets/images/atacadaodoesporte.png";
import ecopower from "../../assets/images/ecopower.png";
import rizodent from "../../assets/images/rizodent.png";
import sadia from "../../assets/images/sadia.png";

const Marcas = () => {
  const logos = [atacadaoE, ecopower, rizodent, sadia];

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
