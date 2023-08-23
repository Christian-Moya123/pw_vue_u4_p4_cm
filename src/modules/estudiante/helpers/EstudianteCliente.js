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
    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5MjgwNzQ0NiwiZXhwIjoxNjkyODA3NjQ2fQ.EaqaMzwqvsxzTFxmcH_3C0gnRgqCEpc-IGGyHkHGqtDJezwdE4uUKwBay-sHX_760SY4j2QwSgTAhukkuMvLrw",
        "Mensaje": "Valor1"
    }

    console.log('AXIOS 2')
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`, {headers: headers})
        .then(r => r.data);
    return data;
}

const ingresarEstudiante = async (bodyEstudiante) => {
    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5MjgwNzQ0NiwiZXhwIjoxNjkyODA3NjQ2fQ.EaqaMzwqvsxzTFxmcH_3C0gnRgqCEpc-IGGyHkHGqtDJezwdE4uUKwBay-sHX_760SY4j2QwSgTAhukkuMvLrw",
        "Mensaje": "Valor1"
    }

    axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`, bodyEstudiante, {headers: headers})
        .then(r => r.data);
}

const actualizarEstudiante = async (bodyEstudiante, id) => {

    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5MjgwNzQ0NiwiZXhwIjoxNjkyODA3NjQ2fQ.EaqaMzwqvsxzTFxmcH_3C0gnRgqCEpc-IGGyHkHGqtDJezwdE4uUKwBay-sHX_760SY4j2QwSgTAhukkuMvLrw",
        "Mensaje": "Valor1"
    }

    axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`, bodyEstudiante, {headers: headers})
        .then(r => r.data);
}

const eliminarEstudiante = async (id) => {

    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5MjgwNzQ0NiwiZXhwIjoxNjkyODA3NjQ2fQ.EaqaMzwqvsxzTFxmcH_3C0gnRgqCEpc-IGGyHkHGqtDJezwdE4uUKwBay-sHX_760SY4j2QwSgTAhukkuMvLrw",
        "Mensaje": "Valor1"
    }

    const response = await axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`, {headers: headers});
    return response.data;
}


