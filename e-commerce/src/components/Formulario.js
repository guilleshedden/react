import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Formulario = ({ onFormSubmit }) => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [data, setData] = useState(null);

  const onSubmit = (formData) => {
    setData(formData);
    onFormSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input type="text" {...register('nombre', { required: true, maxLength: 10 })} />
          {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
          {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
        </div>
        <div>
          <label>Dirección</label>
          <input type="text" {...register('direccion', { required: true })} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register('email', { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
          {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
        </div>
        <div>
          <label>País</label>
          <select {...register('pais')}>
            <option value="es">España</option>
            <option value="it">Italia</option>
            <option value="fr">Francia</option>
          </select>
        </div>
        <div>
          <label>Teléfono</label>
          <input type="text" {...register('telefono')} />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {data && (
        <div>
          <h2>Datos del formulario</h2>
          <ul>
            <li>Nombre: {data.nombre}</li>
            <li>Dirección: {data.direccion}</li>
            <li>Email: {data.email}</li>
            <li>País: {data.pais}</li>
            <li>Teléfono: {data.telefono}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Formulario;