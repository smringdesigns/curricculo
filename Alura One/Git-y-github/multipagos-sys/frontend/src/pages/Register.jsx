import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import axios from "axios";
import Cookies from "js-cookie";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:9999/api/users/register",
        {
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          password: data.password,
        }
      );

      const { token } = response.data;
      Cookies.set("token", token);
      toast.success("Usuario creado correctamente");
      navigate("/multipagos");
    } catch (error) {
      toast.error("Registro falló, intente nuevamente");
    }
    reset();
  };

  const inputStyle = {
    padding: "12px",
    border: "none",
    borderBottom: "1px solid #6C8DA4",
    background: "transparent",
    color: "#A8C1D2",
    fontSize: "14px",
    marginBottom: "10px",
    width: "100%",
  };

  const errorStyle = {
    color: "#ff0000",
    fontSize: "12px",
  };

  const buttonStyle = {
    padding: "12px 24px",
    backgroundColor: "#2589AC",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%",
  };

  const labelStyle = {
    color: "#A8C1D2",
    marginBottom: "5px",
    fontSize: "14px",
  };

  return (
    <>
      <Header />
      <section className="Register">
        <div className="container pt-5">
          <div className="row gy-md-0 gy-4">
            <div className="col-md-4">
              <div className="d-flex flex-column h-100" data-aos="flip-left">
                <div>
                  <h4 className="text-white">Registrarse</h4>
                  <p className="pt-lg-2 text-white">
                    Por favor complete el formulario a continuación para crear
                    una cuenta.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="m-0 h-100 p-2" data-aos="flip-left">
                {/* <h4>CREAR CUENTA</h4> */}
                <form
                  className="d-flex flex-column"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="d-flex flex-column flex-md-row">
                    <div className="flex-grow-1 me-md-2 mb-3 mb-md-0">
                      <label style={labelStyle} htmlFor="firstName">
                        Nombre
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Nombre"
                        {...register("firstName", {
                          required: "Nombre es requerido",
                        })}
                        style={inputStyle}
                      />
                      {errors.firstName && (
                        <span style={errorStyle}>
                          {errors.firstName.message}
                        </span>
                      )}
                    </div>
                    <div className="flex-grow-1 ms-md-2">
                      <label style={labelStyle} htmlFor="lastName">
                        Apellido
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Apellido"
                        {...register("lastName", {
                          required: "Apellido es requerido",
                        })}
                        style={inputStyle}
                      />
                      {errors.lastName && (
                        <span style={errorStyle}>
                          {errors.lastName.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row">
                    <div className="flex-grow-1 me-md-2 mb-3 mb-md-0">
                      <label style={labelStyle} htmlFor="email">
                        Correo Electrónico
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Correo Electrónico"
                        {...register("email", {
                          required: "Correo Electrónico es requerido",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message:
                              "Por favor ingrese un correo electrónico válido",
                          },
                        })}
                        style={inputStyle}
                      />
                      {errors.email && (
                        <span style={errorStyle}>{errors.email.message}</span>
                      )}
                    </div>
                    <div className="flex-grow-1 ms-md-2">
                      <label style={labelStyle} htmlFor="password">
                        Contraseña
                      </label>
                      <input
                        id="password"
                        type="password"
                        placeholder="Contraseña"
                        {...register("password", {
                          required: "Contraseña es requerida",
                          minLength: {
                            value: 6,
                            message:
                              "La contrase��a debe tener al menos 6 caracteres",
                          },
                        })}
                        style={inputStyle}
                      />
                      {errors.password && (
                        <span style={errorStyle}>
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* <button style={buttonStyle}>Registrar</button> */}
                  <button className="hover1 w-100 mt-4">Registrar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
