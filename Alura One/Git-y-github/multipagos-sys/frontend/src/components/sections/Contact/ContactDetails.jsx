import {
  RiHome8Fill,
  RiMailFill,
  RiPhoneFill,
  RiTimeFill,
} from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactData } from "../../../mockData/contactData";

const ContactDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Form submitted successfully!");
    reset();
  };

  return (
    <section className="ContactDetails">
      <div data-aos="zoom-in-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36692.198056712055!2d-122.45744662978882!3d37.77022795386011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1716969660518!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container">
        <div className="row gy-md-0 gy-4">
          <div className="col-md-6">
            <div className="d-flex flex-column h-100" data-aos="flip-left">
              <div>
                <h4>¿CÓMO PODEMOS AYUDAR?</h4>
                <p className="pt-lg-2">
                Estamos aquí para simplificar tus operaciones financieras. Ofrecemos soluciones rápidas y seguras para pagos, recaudos y trámites, eliminando barreras y asegurando accesibilidad a servicios esenciales desde cualquier lugar. ¡Cuenta con nosotros para mejorar tu experiencia financiera!
                </p>
              </div>
              <div>
                <Link>
                  <div className="d-flex  align-items-center">
                    <figure>
                      <RiHome8Fill />
                    </figure>
                    <div>
                      <p>{contactData.address.line1}</p>
                      <p>{contactData.address.line2}</p>
                    </div>
                  </div>
                </Link>
                <Link>
                  <div className="d-flex align-items-center">
                    <figure>
                      <RiPhoneFill />
                    </figure>
                    <p>{contactData.phone}</p>
                  </div>
                </Link>
                <Link>
                  <div className="d-flex align-items-center">
                    <figure>
                      <RiMailFill />
                    </figure>
                    <p>{contactData.email}</p>
                  </div>
                </Link>
              </div>
              <div>
                <h6>OPERATING HOURS</h6>
                <Link>
                  <div className="d-flex align-items-center">
                    <figure>
                      <RiTimeFill />
                    </figure>
                    <div>
                      <p>{contactData.operatingHours.days}</p>
                      <p>{contactData.operatingHours.hours}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="m-0 h-100" data-aos="flip-left">
              <h4>EMAIL US</h4>
              <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                    />
                    {errors.firstName && (
                      <span>{errors.firstName.message}</span>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                    />
                    {errors.lastName && <span>{errors.lastName.message}</span>}
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      {...register("phone", {
                        required: "Phone Number is required",
                      })}
                    />
                    {errors.phone && <span>{errors.phone.message}</span>}
                  </div>
                </div>
                <textarea placeholder="Message" rows={12}></textarea>
                <button className="hover1 w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
