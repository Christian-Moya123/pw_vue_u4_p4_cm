import axios from "axios";

export const obtenerEstudianteFachada = async (cedula) => {
    return await obtenerEstudianteAPI(cedula);
}

export const ingresarEstudianteFachada = async (bodyEstudiante) => {
    return await ingresarEstudiante(bodyEstudiante);
}

export const actualizarEstudianteFachada = async (bodyEstudiante, id) => {
    return await actualizarEstudiante(bodyEstudiante, id);
}

export const eliminarEstudianteFachada = async (id) => {
    return await eliminarEstudiante(id);
}

const obtenerEstudianteAPI = async (cedula) => {
    const data = await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`)
        .then(r => r.json());
    console.log(data);
    return data;
}

const obtenerEstudianteAPIAxios = async (cedula) => {
    console.log('AXIOS 2')
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`)
        .then(r => r.data);
    return data;
}

const ingresarEstudiante = async (bodyEstudiante) => {
    axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`, bodyEstudiante)
        .then(r => r.data);
}

const actualizarEstudiante = async (bodyEstudiante, id) => {
    axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`, bodyEstudiante)
        .then(r => r.data);
}

const eliminarEstudiante = async (id) => {
    const response = await axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`);
    return response.data;
}



