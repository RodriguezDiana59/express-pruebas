const mostrarUsuarios = async (req, res) => {
    console.log("hola mundo");
    res.status(200).send({
        message: 'hola mundo'
    });
}
const insertarUsuarios = async (req, res) => {
    console.log("estas insertando un usuario");
    res.status(200).send({
        message: 'estas insertando un usuario'
    });
}
const actualizarUsuarios = async (req, res) => {
    console.log("estas insertando un usuario");
    res.status(200).send({
        message: 'estas insertando un usuario'
    });
}
const eliminarUsuarios = async (req, res) => {
    console.log("estas insertando un usuario");
    res.status(200).send({
        message: 'estas insertando un usuario'
    });
}
export {
    mostrarUsuarios,
    insertarUsuarios,
    actualizarUsuarios,
    eliminarUsuarios,
}