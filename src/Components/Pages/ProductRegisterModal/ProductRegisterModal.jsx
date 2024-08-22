import React, { useState, useContext } from 'react';
import gato from '../../../assets/comidaGato.png';
import InputProducts from '../../InputProducts/InputProducts';
import { AuthContext } from '../../Context/Context';

const ProductRegisterModal = ({ onClose, onProductAdded }) => {
  const [product, setProduct] = useState({
    nombreProducto: '',
    descripcion: '',
    imagen: '',
    categoria: '',
    stock: 0,
    precio: 0,
  });

  const [imageFile, setImageFile] = useState(null); // Para almacenar el archivo de imagen seleccionado
  const [imagePreview, setImagePreview] = useState(gato); // Previsualización de la imagen
  const { authToken } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file); // Almacenar el archivo de imagen en el estado

    // Crear una previsualización de la imagen seleccionada
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Actualizar la previsualización
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'hz5sgkps'); // Cambia esto por tu upload_preset de Cloudinary

    const response = await fetch('https://api.cloudinary.com/v1_1/dxg8bqs9x/image/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    return data.secure_url; // Devolver la URL segura de la imagen
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = product.imagen;

      // Si se seleccionó una imagen, súbela a Cloudinary
      if (imageFile) {
        imageUrl = await uploadImageToCloudinary(imageFile);
      }

      // Actualizar el estado del producto con la URL de la imagen
      const updatedProduct = { ...product, imagen: imageUrl };

      const response = await fetch('https://gaiavet-back.onrender.com/producto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(updatedProduct),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Producto registrado con éxito');
        onProductAdded(data);
        onClose();
      } else {
        alert('Error al registrar el producto: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al registrar el producto');
    }
  };

  return (
    <div className="w-full fixed z-50 inset-0 bg-black bg-opacity-80 transition-all ease-in-out duration-300 font-itim">
      <div className="w-[70rem] h-[30rem] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-fondo rounded-lg shadow-sm">
        <div className='w-full h-[30rem] flex justify-between items-center rounded-xl bg-slate-400'>
          <div className="w-[80%] h-[30rem] p-4 text-white flex flex-col items-center justify-evenly">
            <h3 className='gorditas text-black text-xl'>Registro de productos</h3>
            
            <form className="flex flex-col w-full items-center" onSubmit={handleSubmit}>
              {/* Cambia el input de imagen para subir archivos */}
              <InputProducts nameLabel={'Imagen del producto:'} name='imagen' type='file' onChange={handleImageChange} />
              <InputProducts nameLabel={'Nombre del producto:'} name='nombreProducto' type='text' onChange={handleChange} />
              <InputProducts nameLabel={'Descripcion del producto:'} name='descripcion' type='text' onChange={handleChange} />
              <InputProducts nameLabel={'Categoria del producto:'} name='categoria' type='text' onChange={handleChange} />
              <InputProducts nameLabel={'Precio del producto:'} name='precio' type='number' onChange={handleChange} />
              <InputProducts nameLabel={'Stock del producto:'} name='stock' type='number' onChange={handleChange} />
              
              <div className='w-[90%] text-black flex justify-end'>
                <button type="submit" className='w-36 bg-teal-500 mt-2 p-2 text-white rounded-md hover:bg-teal-400 hover:text-white'>
                  Registrar
                </button>
              </div>
            </form>
          </div>
          
          <div className="h-[30rem] w-[35%] bg-fondoTarjeta rounded-lg flex flex-col">
          <p
              className="mr-2 mt-2 cursor-pointer font-extrabold text-xl bg-header w-7 text-center rounded-full hover:bg-buttonProducts duration-200 hover:text-white self-end self-end"
              onClick={onClose}
            >
              X
            </p>
            <div className=' flex flex-col items-center mt-10'>
              {/* Mostrar la imagen previsualizada o la imagen por defecto */}
              <img className='w-80 h-80 rounded-xl object-cover' src={imagePreview} alt="Previsualización" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRegisterModal;