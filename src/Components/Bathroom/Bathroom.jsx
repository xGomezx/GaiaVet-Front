import React, { useState } from 'react';
import peluqueria1 from '../../assets/peluqueria1.jpg'
import peluqueria2 from '../../assets/peluqueria2.jpg'
import peluqueria3 from '../../assets/peluqueria3.jpg'
import peluqueria4 from '../../assets/peluqueria4.jpg'
import { CarouselServices } from '../CarouselServices/CarouselServices'
import { Header } from '../Layouts/Header/Header'
import { Button } from '../Button/Button'

export const Bathroom = ({title,description,servicio}) => {
  const [rating, setRating] = useState(0); // Estado para las estrellas seleccionadas


 
  return (
    <>
    <Header  />
    <div className='flex flex-col justify-center items-center pb-10'>

    <div className='w-full mb-11 relative '>  
        <div className='bg-white w-[40rem] bg-opacity-50 h-[40rem] rounded-full   absolute  bottom-[-3rem]  -ml-10  z-10 flex justify-center items-center flex-col shadow-lg'>
          <h1 className='gorditas text-8xl '>{title}</h1>
          <Button textButton="Agenda tu cita"/>
        </div>

        <div className='bg-white bg-opacity-50 w-[300px] h-[300px] rounded-full z-10 bottom-[-3rem]  absolute mt-[500px] left-[28rem] shadow-lg '></div>

        <CarouselServices img1={peluqueria1} img2={peluqueria2} img3={peluqueria3} img4={peluqueria4} />
  
    </div>

    <div className='mt-11'>
    
    <div className='flex flex-col items-center w-3/4'>
        <p className='w-5/6'>{description}</p>
        <div>
        <div className='pt-5'>
        <h1 className='mb-2 gorditas text-2xl'>¿Qué incluye el servicio de baño básico?</h1>
        <li className='list-none'>
          <ul className='mb-2'>Cepillado: Se elimina el pelo suelto, la suciedad y las enmarañadas del pelaje de tu mascota, lo que mejora su apariencia y salud.</ul>
          <ul className='mb-2'>Lavado: Se utiliza champú y acondicionador específicos para el tipo de pelaje y piel de tu mascota, asegurando una limpieza profunda y gentil.</ul>
          <ul className='mb-2'>Enjuague: Se elimina completamente el champú y acondicionador para evitar irritaciones en la piel.</ul>
          <ul className='mb-2'>Secado: Se utiliza una secadora profesional para secar completamente el pelaje de tu mascota, evitando la humedad que puede causar hongos y mal olor.</ul>
        </li>

        <div className='my-10'>
          <h1 className='mb-2 gorditas text-2xl'>Servicios adicionales</h1>
          <li className='list-none'>
            <ul className='mb-2'>Corte de uñas: Se cortan las uñas de tu mascota a una longitud adecuada para evitar que se lastimen o rompan.</ul>
            <ul className='mb-2'>Limpieza de oídos: Se elimina la cera y la suciedad de los oídos de tu mascota para prevenir infecciones.</ul>
            <ul className='mb-2'>Limpieza dental: Se realiza una limpieza superficial de los dientes de tu mascota para eliminar el sarro y prevenir la enfermedad periodontal.</ul>
          </li>
        </div>

        <div>
          <h1 className='mb-2 gorditas text-2xl'>Beneficios del servicio de baño:</h1>
          <li className='list-none'>
            <ul className='mb-2'>Piel y pelaje sanos: Un baño regular ayuda a mantener la piel de tu mascota libre de parásitos, bacterias y hongos, y su pelaje brillante y saludable.</ul>
            <ul className='mb-2'>Menos alergias: Un pelaje limpio reduce la cantidad de alérgenos en el hogar, lo que puede ser beneficioso para las personas alérgicas.</ul>
            <ul className='mb-2'>Prevención de enfermedades: El baño regular ayuda a prevenir enfermedades de la piel y los oídos.</ul>
            <ul className='mb-2'>Bienestar y felicidad: Un baño relajante puede ser una experiencia muy agradable para tu mascota, reduciendo su estrés y mejorando su estado de ánimo.</ul>
          </li>
        </div>
        </div>
        </div>
    </div>
                     
</div>

    </div>
    </>
  )
}
