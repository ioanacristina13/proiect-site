import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"; // Pentru iconițele de rețele sociale
import "./DespreNoi.css"; // CSS-ul specific pentru această pagină

const DespreNoi = () => {
  return (
    <div className="despre-noi-container">
      <h1 className="title">Despre Noi</h1>
      <p className="history">
        Bun venit la "Rețete Delicioase"! Suntem o echipă pasionată de gătit, cu
        scopul de a aduce bucurie și savoare în fiecare masă. Începând cu rețete
        tradiționale, am evoluat și am integrat influențe din diverse culturi
        pentru a crea combinații unice de arome.
      </p>

      <p className="contact-info">
        <strong>Contact:</strong> <br />
        Telefon: 0700 111 222 <br />
        Email: retele@delicioase.com
      </p>

      <div className="social-icons">
        <Button
          variant="link"
          href="https://facebook.com"
          target="_blank"
          className="social-icon"
        >
          <FaFacebook size={30} color="gold" />
        </Button>
        <Button
          variant="link"
          href="https://instagram.com"
          target="_blank"
          className="social-icon"
        >
          <FaInstagram size={30} color="gold" />
        </Button>
        <Button
          variant="link"
          href="https://tiktok.com"
          target="_blank"
          className="social-icon"
        >
          <FaTiktok size={30} color="gold" />
        </Button>
      </div>
    </div>
  );
};

export default DespreNoi;
