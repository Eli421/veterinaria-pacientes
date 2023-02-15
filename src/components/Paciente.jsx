
const Paciente = ({paciente}) => {

    const {nombre, propietario, email, fecha, sintomas} = paciente

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
            </div>
   )
}

export default Paciente


