import React from 'react'
import peluqueria1 from '../../assets/peluqueria1.jpg'
import peluqueria2 from '../../assets/peluqueria2.jpg'
import peluqueria3 from '../../assets/peluqueria3.jpg'
import peluqueria4 from '../../assets/peluqueria4.jpg'

import { Button } from '../../Components/Button/Button'
import { ContainerCard } from '../ContainerCard/ContainerCard'
import { CarouselServices } from '../CarouselServices/CarouselServices'
import { Header } from '../Layouts/Header/Header'

export const HairSalon = ({title,description}) => {
  return (
    <>
    <Header title={title} />
    <div className='flex flex-col justify-center items-center pb-10'>

    <div className='w-full mb-11 relative '>

    
        <div className='bg-white w-[40rem] bg-opacity-50 h-[40rem] rounded-full   absolute  bottom-[-3rem]  -ml-10  z-10 flex justify-center items-center flex-col'>
          <h1 className='gorditas text-6xl'>Peluqueria</h1>
          <Button textButton="Agenda tu cita"/>
        </div>

        <div className='bg-white bg-opacity-50 w-[300px] h-[300px] rounded-full z-10 bottom-[-3rem]  absolute mt-[500px] left-[28rem]'></div>



        

      <CarouselServices img1={peluqueria1} img2={peluqueria2} img3={peluqueria3} img4={peluqueria4} />

      
    </div>

       <div className='flex justify-center flex-col items-center w-11/12 '>
    

            <p className='w-5/6'>{description}</p>
            <div className='mt-10 flex justify-evenly'>

            <ContainerCard name="Pepito Perez Peres" hour="Hace 3 horas" comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fugiat corrupti! Illo placeat quis ipsa accusantium, nostrum expedita optio error doloremque unde molestias sequi dolorum praesentium eligendi at? Nam, quis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus cumque ab laborum rerum perferendis error, pariatur quia odit aliquam vel praesentium consequuntur vitae beatae, sint tempore quas mollitia facere?"/>
            
            <ContainerCard name="Pepito Perez Peres" hour="Hace 3 horas" comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fugiat corrupti! Illo placeat quis ipsa accusantium, nostrum expedita optio error doloremque unde molestias sequi dolorum praesentium eligendi at? Nam, quis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus cumque ab laborum rerum perferendis error, pariatur quia odit aliquam vel praesentium consequuntur vitae beatae, sint tempore quas mollitia facere?"/>
            </div>

            <div className='mt-10 flex justify-evenly'>

            <ContainerCard name="Pepito Perez Peres" hour="Hace 3 horas" comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fugiat corrupti! Illo placeat quis ipsa accusantium, nostrum expedita optio error doloremque unde molestias sequi dolorum praesentium eligendi at? Nam, quis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus cumque ab laborum rerum perferendis error, pariatur quia odit aliquam vel praesentium consequuntur vitae beatae, sint tempore quas mollitia facere?"/>
            
            <ContainerCard name="Pepito Perez Peres" hour="Hace 3 horas" comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fugiat corrupti! Illo placeat quis ipsa accusantium, nostrum expedita optio error doloremque unde molestias sequi dolorum praesentium eligendi at? Nam, quis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus cumque ab laborum rerum perferendis error, pariatur quia odit aliquam vel praesentium consequuntur vitae beatae, sint tempore quas mollitia facere?"/>
            </div>

            <div className='mt-10 flex justify-evenly'>

            <ContainerCard name="Pepito Perez Peres" hour="Hace 3 horas" comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fugiat corrupti! Illo placeat quis ipsa accusantium, nostrum expedita optio error doloremque unde molestias sequi dolorum praesentium eligendi at? Nam, quis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus cumque ab laborum rerum perferendis error, pariatur quia odit aliquam vel praesentium consequuntur vitae beatae, sint tempore quas mollitia facere?"/>
            
            <ContainerCard name="Pepito Perez Peres" hour="Hace 3 horas" comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fugiat corrupti! Illo placeat quis ipsa accusantium, nostrum expedita optio error doloremque unde molestias sequi dolorum praesentium eligendi at? Nam, quis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus cumque ab laborum rerum perferendis error, pariatur quia odit aliquam vel praesentium consequuntur vitae beatae, sint tempore quas mollitia facere?"/>
            </div>
 
    </div>

    </div>
    </>
  )
}
