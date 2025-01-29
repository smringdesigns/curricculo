import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsLetter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Subscription successful!");
    reset();
  };

  return (
    <>
      <section className="NewsLetter" data-aos="fade-up">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center text-center flex-column">
            <h4>Suscríbete a nuestro boletín</h4>
            <p>Obtenga las últimas noticias y actualizaciones</p>
            <form
              className="d-flex align-items-center justify-content-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="email"
                placeholder="Enter your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                autoComplete="true"
              />
              <button type="submit" className="hover3">
                Subscribe
              </button>
            </form>
            {errors.email && (
              <p className="text-danger p-0 pt-2 text-start">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
