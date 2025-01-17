import React, { useContext, useRef, useState } from 'react';
import google from '../../../assets/google.webp';
import logo from '../../../assets/logoGaia.webp';
import { Input } from '../../Input/Input';
import { Button } from '../../Button/Button';
import { Header } from '../../Layouts/Header/Header';
import { json, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import Swal from 'sweetalert2';
import { WindowLoad } from '../../WindowModals/WindowLoad/WindowLoad';
import { data } from 'autoprefixer';
import ContraseñaModal from '../../WindowModals/ContraseñaModal/ContraseñaModal';

export const Login = () => {
  const loginContext = useContext(AuthContext);
  const [lSuccessfull, setLSuccessfull] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const dataLogin = useRef({
    correo: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    dataLogin.current[e.target.name] = e.target.value;
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: '' })); // Limpiar error al cambiar el valor
  };

  const handleSubmit = async (e) => {

    
    e.preventDefault();
    
    const loginEnd = { ...dataLogin.current };

    const newErrors = {};
    Object.keys(loginEnd).forEach((key) => {
      if (!loginEnd[key]) {
        newErrors[key] = 'Este campo es obligatorio';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    let data = '';

    setIsLoading(true); // Mostrar el símbolo de carga
    try {
      const response = await fetch('https://gaiavet-back.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginEnd),
        
      });

      data = await response.json()


      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data || data.message || 'Error interno, intenta otra vez mas tarde',
        });
       
        throw new Error('Error en la solicitud');
      } else {
        localStorage.setItem('token', data.token);
        loginContext.setAuthToken(data.token);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Bienvenido a GaiaVet',
          showConfirmButton: true,
        });

        setLSuccessfull(true);
      }
    }
     catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: data.message || data || 'Error al iniciar sesion, intenta de nuevo',
      });
      
    } finally {
      setIsLoading(false);
    }
  };

  if (lSuccessfull) {
    navigate('/');
  }
  const handleForgotPassword = () => {
    setIsModalOpen(true);
  }
  return (
    <div className='h-full w-full flex flex-col'>
      <Header title='Inicio de sesión' classN='text-7xl sm:text-[2.5rem] sm:w-[50%] md:text-5xl md:w-[50%] lg:text-6xl lg:w-[50%] xl:text-[4.3rem] xl:w-[50%] 2xl:text-8xl 2xl:w-[60%]'/>
      <div className='flex justify-center items-center pt-36 pb-10 bg-fondo '>
        <div className='bg-white flex justify-center items-center flex-col border-solid border-2 border-gray rounded-lg mt-4'>
          <div className='w-24 p-3 bg-blue-border rounded-full my-6'>
            <img className='' src={logo} alt='' />
          </div>
          <h2 className='my-3'>INICIAR SESION</h2>
          <p className='my-2'>
            ¿No tienes cuenta? <Link to={'/register'} className='text-blue-700'>Registrate</Link>
          </p>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <Input name='correo' type='text' placeholder='Correo Electronico' onChange={handleChange} />
            {errors.correo && <p className='text-red-500 mx-9'>{errors.correo}</p>}

            <Input name='contraseña' type='password' placeholder='Contraseña' onChange={handleChange} />
            {errors.contraseña && <p className='text-red-500 mx-9'>{errors.contraseña}</p>}

            <a onClick={handleForgotPassword} className='my-4 mx-9 border-b-2 border-blue-border w-48 cursor-pointer' href='#'>
              ¿Olvidaste la contraseña?
            </a>
            <div className='flex justify-center items-center flex-col'>
              {isLoading && <WindowLoad />}
              <Button onClick={handleSubmit} textButton='Iniciar sesión' />
              
            </div>
          </form>
        </div>
      </div>
      {isModalOpen && <ContraseñaModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
