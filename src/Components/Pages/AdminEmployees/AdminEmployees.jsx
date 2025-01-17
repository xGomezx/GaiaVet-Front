import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import { Header } from '../../Layouts/Header/Header';
import ProductRegisterModal from "../ProductRegisterModal/ProductRegisterModal";
import Swal from 'sweetalert2';
import UpdateEmployees from '../../WindowModals/UpdateEmployees/UpdateEmployees';

export const AdminEmployees = () => {
  const [employeesList, setEmployeesList] = useState([]);
  const { authToken } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [filteredEmployeeList, setFilteredEmployeeList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      if (!authToken) return;

      try {
        const response = await fetch('https://gaiavet-back.onrender.com/employees', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        });

        const data = await response.json();

        if (Array.isArray(data)) {
            setEmployeesList(data);
            setFilteredEmployeeList(data);
          
        } else {
          console.error('La respuesta no es un array:', data);
        }
      } catch (error) {
        console.log('Error al traer los empleados:', error);
      }
    };

    fetchEmployees();
  }, [authToken]);

  useEffect(() => {
    const results = employeesList.filter(employee => 
      employee.cedulaEmpleado?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.apellido?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.edad?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.tiempoExp?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.correo?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployeeList(results);
  }, [searchTerm, employeesList]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleProductAdded = (newEmployee) => {
    setEmployeesList((prevList) => [...prevList, newEmployee]);
  };

  const controlUpdate = (employee) => {
    setSelectedEmployee(employee);
    setEditOpen(true);
  };

  const handleDelete = async (cedulaEmpleado) => {
    if (!authToken) return;
  
    Swal.fire({
      title: 'GaiaVet',
      text: '¿Deseas eliminar este empleado? Esto eliminará la información del empleado del sistema.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`https://gaiavet-back.onrender.com/deleteEmployee/${cedulaEmpleado}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authToken}`,
            },
          });
  
          if (response.ok) {
            setEmployeesList(prevList => prevList.filter(employee => employee.cedulaEmpleado !== cedulaEmpleado));
            setFilteredEmployeeList(prevList => prevList.filter(employee => employee.cedulaEmpleado !== cedulaEmpleado));
            
            Swal.fire({
              title: 'Eliminado',
              text: 'El empleado ha sido eliminado con éxito.',
              icon: 'success',
            });
          } else {
            const errorData = await response.json();
            Swal.fire({
              title: 'Error',
              text: `Hubo un error al eliminar el empleado: ${errorData.message}`,
              icon: 'error',
            });
          }
        } catch (error) {
          Swal.fire({
            title: 'Error',
            text: `Hubo un error al eliminar el empleado: ${error.message}`,
            icon: 'error',
          });
        }
      }
    });
  };

  const handleEmployeeUpdated = (updatedEmployee) => {
    setEmployeesList((prevList) =>
      prevList.map((employee) =>
        employee.cedulaEmpleado === updatedEmployee.cedulaEmpleado ? updatedEmployee : employee
      )
    );
  };
  
  

  return (
    <>
      <Header title="Gestión de Empleados" classN='text-7xl' />
      <div className='w-full flex justify-center'>
        <div className="flex flex-row items-center justify-center w-[60rem] pt-48">
          <input
            type="text"
            placeholder="Busca el empleado deseado de manera rápida"
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700 placeholder-gray-400"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="w-full h-[100vh] flex justify-center overflow-hidden">
          <div className="w-[90%] py-6 mb-[10rem] h-[70vh]">
            
            <div className='overflow-y-auto max-h-[87vh] relative overflow-x-auto shadow-xl sm:rounded-lg font-itim'>

              <table className="w-full h-60 text-xl text-left rtl:text-right text-gray-300 dark:text-gray-400">
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-400 dark:text-gray-400'>
                  <tr className=" bg-teal-500 text-gray-800 uppercase text-base w-full flex justify-evenly">
                    <th scope="col" className="py-3 text-center w-1/6">Cédula del empleado</th>
                    <th scope="col" className="py-3 text-center w-1/12">Nombre</th>
                    <th scope="col" className="py-3 text-center w-1/12">Apellido</th>
                    <th scope="col" className="py-3 text-center w-1/6">Correo electronico</th>
                    <th scope="col" className="py-3 text-center w-1/12">Edad</th>
                    <th scope="col" className="py-3 text-center w-1/12">Tiempo Exp</th>
                    <th scope="col" className="py-3 text-center w-1/12">Cargo</th>
                    <th scope="col" className="py-3 text-center w-1/12">Administrar</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-base w-full ">
                  {filteredEmployeeList.map((employee) => (
                    <tr key={employee.cedulaEmpleado} className="dark:hover:bg-gray-50 border-gray-200 flex items-center justify-evenly odd:bg-white odd:dark:bg-gray-100 even:dark:bg-gray-200 border-b">
                    {/* <tr key={employee.cedulaEmpleado} className="border-b border-gray-200 hover:bg-gray-100 flex items-center justify-evenly"> */}
                      <td className="py-3 text-center w-1/6">{employee.cedulaEmpleado}</td>
                      <td className="py-3 text-center w-1/12">{employee.nombre}</td>
                      <td className="py-3 text-center w-1/12">{employee.apellido}</td>
                      <td className="py-3 text-center w-1/6">{employee.correo}</td>
                      <td className="py-3 text-center w-1/12">{employee.edad}</td>
                      <td className="py-3 text-center w-1/12">{employee.tiempoExp}</td>
                      <td className="py-3 text-center w-1/12">{employee.cargo}</td>
                      <td className="h-full py-3 flex flex-col items-center w-1/12">
                        <button 
                          onClick={() => controlUpdate(employee)} 
                          className="px-5 py-1 w-28 bg-buttonProducts hover:bg-opacity-70 duration-300 text-white font-medium rounded-lg float-end mb-4"
                        >
                          Editar
                        </button>
                        <button 
                          onClick={() => handleDelete(employee.cedulaEmpleado)}
                          className="px-5 py-1 w-28 bg-red-600 hover:bg-opacity-70 duration-300 text-white font-medium rounded-lg float-end"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <ProductRegisterModal onClose={closeModal} onProductAdded={handleProductAdded} />}
      {editOpen && selectedEmployee && (
        <UpdateEmployees 
          onClose={() => setEditOpen(false)}
          cedulaEmpleado={selectedEmployee.cedulaEmpleado} 
          nombre={selectedEmployee.nombre}
          apellido={selectedEmployee.apellido}
          edad={selectedEmployee.edad}
          tiempoExp={selectedEmployee.tiempoExp}
          correo={selectedEmployee.correo}

          onEmployeeUpdated={handleEmployeeUpdated}
       />
      )}
    </>
  );
};
