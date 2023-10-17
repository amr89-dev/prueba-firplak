import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { saveUser } = useAuth();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      if (res.accessToken && res.refreshToken) {
        saveUser(res);
        setFormData({
          email: "",
          password: "",
        });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout>
      <h2 className="text-2xl text-center mt-4 mb-2 font-semibold text-gray-700 ">
        Inicie Sesión
      </h2>
      <form
        className=" max-w-lg mx-auto p-8  flex flex-col shadow-xl rounded-lg "
        onSubmit={onSubmit}
      >
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-black  rounded-md mb-2 h-8"
          onChange={(e) => {
            onChange(e);
          }}
          value={formData.email}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          id="password"
          className="border border-black  rounded-md mb-2 h-8"
          onChange={(e) => {
            onChange(e);
          }}
          value={formData.password}
        />

        <button
          type="submit"
          className="bg-gray-700 rounded-lg p-1 mt-2 text-white hover:bg-gray-500s"
        >
          Iniciar Sesión
        </button>
      </form>
      <p className="mx-auto w-fit mt-4">
        <Link to="/sign-up">¿No tienes cuenta? Has click y Registrate</Link>
      </p>
    </Layout>
  );
};

export default SignIn;
