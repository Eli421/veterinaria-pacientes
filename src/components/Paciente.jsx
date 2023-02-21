
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar ese paciente?')

        if (respuesta) {
            eliminarPaciente(id)
        }
    }

  return (
    <div className="mx-3 my-10 bg-white shadpw-md px-5 py-10 rounded-xl">
                <p className="font-bold mt-3 text-gray-700 uppercase">Nombre: {''}</p>
                    <span className="font-normal normal-case">{nombre}</span>
           
                <p className="font-bold mt-3 text-gray-700 uppercase">Nombre Propietario: {''}</p>
                    <span className="font-normal normal-case">{propietario}</span>
           
                <p className="font-bold mt-3 text-gray-700 uppercase">Email: {''}</p>
                    <span className="font-normal normal-case">{email}</span>
           
                <p className="font-bold mt-3 text-gray-700 uppercase">Alta: {''}</p>
                    <span className="font-normal normal-case">{fecha}</span>
           
                <p className="font-bold mt-3 text-gray-700 uppercase">Sintomas: {''}</p>
                    <span className="font-normal normal-case">{sintomas}</span>

                <div className= "flex justify-between mt-10">
                    <button
                        type="button"
                        className = "py-2 px-10 bg-indigo-700 hover:bg-indigo-900 text-white font-bold uppercase rounded-lg"
                        onClick = { () => setPaciente(paciente)}
                        >Editar</button>
                    <button
                        type="button"
                        className = "py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
                        onClick = {handleEliminar}
                        >Eliminar</button>
                </div>
            </div>
   )
}

export default Paciente


