import {useState, useEffect} from 'react';


const Formulario = () => {
    // los hooks siempre van antes del return, dentro de la funcion o componente. No se pueden usar en condicionales
    const[nombre, setNombre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Enviando Formulario')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Agrega Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
            onSubmit={handleSubmit}
            className='bg-white shadow-md rounded-lg py-10 px-5'>
                <div className="mb-5">
                    <label htmlFor='mascota' className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>

                    <input 
                        id='mascota' type="text" placeholder="nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value= {nombre}
                        onChange = { (e) => setNombre( e.target.value )} // e es el evento del onChange
                    />     
                </div>
                
                <div className="mb-5">
                    <label htmlFor='propietario' className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>

                    <input id='propietario' type="text" placeholder="nombre de la propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor='email' className="block text-gray-700 uppercase font-bold">Email</label>

                    <input id='email' type="email" placeholder="Email contacto propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor='alta' className="block text-gray-700 uppercase font-bold">Alta</label>

                    <input id='alta' type="date"  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor='sintomas' className="block text-gray-700 uppercase font-bold">Sintomas</label>

                    <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder='Describe los sintomas del paciente'
                    ></textarea>
                </div>

                <input type="submit"  className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
                value="Agregar Paciente"/>
            </form>
        </div>
    )
} 

export default Formulario










