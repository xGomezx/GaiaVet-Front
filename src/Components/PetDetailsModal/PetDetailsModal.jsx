import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/Context';
import EditedModal from '../EditeModal/EditeModal';
import InputPetNoEditable from '../InputPetNoEditable/InputPetNoEditable';

import Swal from 'sweetalert2';
import ModalHistorialMedico from '../WindowModals/HistorialMedico/ModalHistorialMedico';

const PetDetailsModal = ({edad,peso, namePet, documento, tipo, raza, foto, temperamento, onClose }) => {

  const [editedDocumento, setEditedDocumento] = useState(documento);
  const [editedTipo, setEditedTipo] = useState(tipo);
  const [editedRaza, setEditedRaza] = useState(raza);
  const [editedName, setEditedName] = useState(namePet);
  const [editedPeso, setEditedPeso] = useState(peso);
  const [editedEdad, setEditedEdad] = useState(edad);
  const [editedFoto, setEditedFoto] = useState(foto);
  const [editedTemperamento, setEditedTemperamento] = useState(temperamento);

  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenHistorial, setIsOpenHistorial] = useState(false); 

  const [petList, setPetList] = useState([]);
  const { authToken } = useContext(AuthContext);
  const accesRole = localStorage.getItem('role');

  const handleInfoChange = (event) => {
    setEditedPeso(event.target.value);
    setEditedDocumento(e.target.value)
    setEditedTipo(e.target.value)
    setEditedRaza(e.target.value)
    setEditedEdad(e.target.value)
    setEditedName(e.target.value)
    setEditedFoto(e.target.value)
    setEditedTemperamento(e.target.value)
};
  const handleDeleteClick = async () => {
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar tu mascota?',
      text: 'Esta acción es irreversible y eliminará todos los datos de tu mascota.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`https://gaiavet-back.onrender.com/DeletePet/${documento}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authToken}`,
            },
          });
          if (response.ok) {
            setPetList(prevList => prevList.filter(pet => pet.documento !== documento));
            onClose();
            Swal.fire({
              title: 'Mascota eliminada',
              text: 'La mascota se elimino correctamente',
              icon: 'success',
              confirmButtonColor: '#3085d6',
            });
          } else {
            Swal.fire({
              title: 'Error',
              text: 'Hubo un error al eliminar la mascota. Inténtalo de nuevo.',
              icon: 'error',
            });
          }
        } catch (error) {
          console.error('Error al intentar eliminar la mascota:', error);
        }
      }
    });
  };

  const handleModalEdit = () => {
    setIsOpenEdit(!isOpenEdit);
  };

  const handleModalHistorial = () => {
    setIsOpenHistorial(!isOpenHistorial); 
  };

  return (
    <div className="w-full fixed z-50 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75 transition-all ease-in-out duration-300 font-itim">
      <div className="w-[65rem] h-[32rem] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white  rounded-lg shadow-sm">
        <div className='flex justify-between w-full'>
          <div className="p-10 text-white flex flex-col justify-center items-center ">
            <InputPetNoEditable htmlFor="nombre" nameLabel="Nombre:" id="nombre" value={editedName}  onChange={handleInfoChange}/>
            <InputPetNoEditable htmlFor="documento" nameLabel="Documento:" id="documento" value={editedDocumento} onChange={handleInfoChange} />
            <InputPetNoEditable htmlFor="tipo" nameLabel="Tipo:" id="tipo" value={editedTipo} onChange={handleInfoChange} />
            <InputPetNoEditable htmlFor="raza" nameLabel="Raza o especie:" id="raza" value={editedRaza} onChange={handleInfoChange} />
            <InputPetNoEditable htmlFor="edad" nameLabel="Edad (Meses):" id="edad" value={editedEdad} onChange={handleInfoChange} />
            <InputPetNoEditable htmlFor="peso" nameLabel="Peso (Kg):" id="peso" value={editedPeso + ' Kg'} onChange={handleInfoChange} />
            <InputPetNoEditable htmlFor="temperamento" nameLabel="Temperamento:" id="temperamento" value={editedTemperamento} onChange={handleInfoChange} />

            <div className='w-full mt-14 text-black flex justify-end'>
              <button onClick={handleModalEdit} className='w-36 bg-gray-200 mx-3 p-2 rounded-md hover:bg-teal-500 hover:text-white'>Editar</button>
              <button onClick={handleDeleteClick} className='w-36 bg-gray-200 mx-3 p-2 text-red-500 rounded-md hover:bg-red-600 hover:text-white'>Eliminar</button>
            </div>
          </div>

          <div className="h-[32rem] w-80 bg-teal-600 rounded-lg">
            <button type="button" className="float-end text-white p-3" onClick={onClose}>
              <span className="sr-only">Cerrar</span>
              <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10L4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <div className='flex flex-col items-center mt-24'>
              <img className='w-60 h-60 rounded-full object-cover' src={editedFoto} alt="" />
              <h5 className="text-3xl font-bold mt-6 text-white">{namePet}</h5>
            </div>
          </div>
        </div>
      </div>

      {isOpenEdit && (
        <EditedModal
          namePet={namePet}
          documento={documento}
          tipo={tipo}
          raza={raza}
          edad={edad}
          peso={peso}
          foto={foto}
          temperamento={temperamento}
          onClose={handleModalEdit}
        />
      )}

      {isOpenHistorial && (
        <ModalHistorialMedico
          nombreMascota={namePet}
          tipo={tipo}
          raza={raza}
          edad={edad}
          peso={peso}
          temperamento={temperamento}
          onClose={handleModalHistorial}
        />
      )}
    </div>
  );
};

export default PetDetailsModal;
