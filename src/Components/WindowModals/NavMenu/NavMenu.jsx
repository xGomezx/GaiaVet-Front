import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuItems } from '../../MenuItems/MenuItems';
import './NavMenu.css';
import { AuthContext } from '../../Context/Context';
import Swal from 'sweetalert2';
import { FaHome } from "react-icons/fa";

export const NavMenu = ({ onClose }) => {
  const navigate = useNavigate();

  const [userRole, setUserRole] = useState(false);
  const [adminRole, setAdminRole] = useState(false);

  const navContext = useContext(AuthContext);

  useEffect(() => {
    const accesRole = localStorage.getItem('role');

    if (accesRole === "User") {
      setUserRole(true);
    } else if (accesRole === "administrador") {
      setAdminRole(true);
    }
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez, después del primer render.

  const closeSesion = () => {
    Swal.fire({
      title: "GaiaVet",
      text: "¿Deseas cerrar la sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sesión cerrada",
          text: "Tu sesión ha sido cerrada correctamente",
          icon: "success",
        });
        localStorage.removeItem('token','role');
        localStorage.removeItem('role');
        navigate('/');

        setTimeout(() => {
          window.location.reload();
        }, 2500);
      }
    });
  };

  return (
    <div className="w-96 h-auto bg-white shadow-xl top-24 right-0 absolute animate-flip-down itim-regular rounded-md sm:w-[20rem] md:w-[22rem] md:mr-4 lg:mr-2 xl:w-96 xl:mr-0">
      <div className="h-12 flex justify-start">
        <p
          className="cursor-pointer fixed right-10 top-8 font-extrabold text-xl bg-header w-7 text-center rounded-full hover:bg-buttonProducts duration-200 hover:text-white sm:text-base sm:w-[1.5rem] sm:h-[1.5rem] sm:right-5 sm:top-4 md:right-12 md:h-[1.7rem] md:w-[1.7rem] md:text-lg lg:right-6 lg:top-6 xl:top-8 xl:right-10 xl:w-[1.7rem] xl:h-[1.7rem] xl:text-xl"
          onClick={onClose}
        >
          X
        </p>
      </div>
      <div className="w-full h-3/5 flex items-center ">
        <ul className="w-full h-full flex flex-col justify-center">
          <div className='flex'>
            <MenuItems nameItem="Inicio" to="/" type="Link" />
          </div>

          {!navContext.authToken && 
            <>
              <MenuItems nameItem="Sobre Nosotros" to="sobre" type="scroll" />
              <MenuItems nameItem="Nuestros Productos" to="productos" type="scroll" />
              <MenuItems nameItem="Nuestros Servicios" to="servicios" type="scroll" />
              <MenuItems nameItem="Contáctanos" to="contactanos" type="scroll" />
            </>
          }

          {userRole && 
            <>
              <MenuItems nameItem="Perfil" to="/Profile" type="link" />
              <MenuItems nameItem="Registrar mascota" to="/petRegister" type="link" />
              <MenuItems nameItem="Mascotas" to="/pets" type="link" />
              <MenuItems nameItem="Citas" to="/citas" type="link" />
              <MenuItems nameItem="Tienda" to="/products" type="link" />
              <button onClick={closeSesion} className='w-60 h-12 rounded-xl bg-buttonProducts text-white self-center mb-4' type="button">Cerrar Sesión</button>
            </>
          }

          {adminRole && 
            <>
              <MenuItems nameItem="Mascotas" to="/pets" type="link" />
              <MenuItems nameItem="Usuarios" to="/admin/usersList" type="link" />
              <MenuItems nameItem="Tienda" to="/products" type="link" />
              <MenuItems nameItem="Citas" to="/citas" type="link" />
              <MenuItems nameItem="Facturar Cita" to="/payment" type="link" />
              <MenuItems nameItem="Gestionar productos" to="/admin/productList" type="link" />
              <MenuItems nameItem="Registrar Empleados" to="/admin/registerEmployee" type="link" />
              <MenuItems nameItem="Gestionar Empleados" to="/admin/employees" type="link" />

              <button onClick={closeSesion} className='w-60 h-12 rounded-xl bg-buttonProducts text-white self-center mb-4 sm:text-base sm:w-[13rem] sm:h-[2.5rem] lg:w-[14rem] lg:h-[2.8rem] lg:text-lg xl:w-[15rem] xl:h-[3rem] xl:text-lg' type="button">Cerrar Sesión</button>
            </>
          }

        </ul>
      </div>
      <div className="w-full h-1/4 flex flex-col items-center justify-center ">
        {!navContext.authToken && (
          <>
            <Link to="/login" className="w-2/3 h-12 mt-2 rounded-xl bg-blue-border hover:bg-buttonProducts duration-200 text-white shadow-md flex justify-center items-center sm:text-base sm:w-[13rem] sm:h-[2.5rem] lg:w-[14rem] lg:h-[2.8rem] lg:text-lg xl:w-[15rem] xl:h-[3rem] xl:text-lg">
              Inicia Sesión
            </Link>
            <Link to="/register" className="w-2/3 h-12 mt-2 mb-4 rounded-xl bg-blue-border hover:bg-buttonProducts duration-200 text-white shadow-md flex justify-center items-center sm:text-base sm:w-[13rem] sm:h-[2.5rem] lg:w-[14rem] lg:h-[2.8rem] lg:text-lg xl:w-[15rem] xl:h-[3rem] xl:text-lg">
              Regístrate
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
