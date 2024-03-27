const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const AprendizController = require('../controllers/AprendizController');
const InstructorController = require('../controllers/InstructorController');
const authController = require('../controllers/authController');
const authRequired = require('../middlewares/validateToken');
const FichasController = require('../controllers/FichasController');
const VisitasController = require('../controllers/VisitasController');
const DocumentsController = require('../controllers/DocumentsController');
const BitacorasController = require('../controllers/BitacorasController');


module.exports = function () {
    // Rutas para el login.
    router.post('/login', authController.iniciarSesion); // Nuevo endpoint de inicio de sesión
    router.post('/logout', authController.logout);
    router.post('/solicitar-restablecimiento-contrasena', authController.solicitarRestablecimientoContrasena);
    router.post('/verificar-correo-electronico', authController.verificarCorreoElectronico);
    router.post('/verificar-codigo', authController.verificarCodigo);
    router.post('/cambiar-contrasena', authController.cambiarContrasena);

    router.get('/verify-token', authRequired, (req, res) => {
        res.json({ usuario: req.usuario });
    });


    // Ruta para obtener la información del usuario autenticado.
    router.get('/usuario', authRequired, (req, res) => {
        // La información del usuario está disponible en req.usuario, que fue establecida por el middleware de autenticación
        res.json({ usuario: req.usuario });
    });

    // Administrador
    router.post('/admin-add', authRequired, AdminController.nuevoAdmin);

    // Reistrar Fichas.
    router.post('/fichas-add', authRequired, FichasController.nuevaFicha);
    router.post('/fichas-Admin-new', authRequired, FichasController.nuevaFichaAdmin);
    // Mostrar todas las Fichas registradas en la base de datos.
    router.get('/fichas-getAll', authRequired,FichasController.mostrarFichas);
    // Mostrar una Ficha por su número de ficha.
    router.get('/fichas-get/:numero_ficha', authRequired, FichasController.MostrarPorNumeroFicha);
    // Mostrar todos los aprendices asociados a una ficha.
    router.get('/fichas-getAprendices/:numero_ficha', authRequired, FichasController.aprendicesPorNumeroFicha);
    // Actualizar Ficha por su número de ficha.
    router.put('/fichas-update/:numero_ficha', authRequired, FichasController.actualizarFicha);
    // Eliminar una Ficha por su número de ficha.
    router.delete('/fichas-delete/:numero_ficha', authRequired, FichasController.eliminarFicha);

    // Aprendices
    router.post('/aprendices-add', authRequired, AprendizController.nuevoAprendiz);
    router.get('/aprendices', authRequired,AprendizController.mostrarAprendices);
    router.get('/aprendices/:numero_documento', authRequired, authRequired,AprendizController.mostrarAprendizByDocument);
    router.put('/aprendices/:numero_documento', authRequired, authRequired,AprendizController.actualizarAprendiz);
    router.delete('/aprendices/:numero_documento', authRequired, authRequired,AprendizController.eliminarAprendiz);

    // Rutas para el instructor.
    router.post('/instructores-add', authRequired, InstructorController.nuevoInstructor);
    router.get('/instructor/:numero_documento/fichas-asignadas', InstructorController.obtenerFichasAsignadas);
    router.get('/instructores/get-All', authRequired, InstructorController.obtenerInstructores);
    router.get('/instructores/get-Instructor/:id_instructor', authRequired, InstructorController.obtenerInstructorById);
    router.put('/instructores/update/:id_instructor', authRequired, InstructorController.actualizarInstructor);
    router.delete('/instructores/delete/:id_instructor', authRequired, InstructorController.eliminarInstructor);


    // Rutas para las Visitas.
    router.post('/nuevaVisita/:id_aprendiz', authRequired, VisitasController.crearEvento);
    router.get('/visitas-getAll', authRequired, VisitasController.obtenerEventos);
    router.get('/visitas-aprendiz/:id_aprendiz', authRequired, VisitasController.obtenerEventosAprendiz);
    router.put('/visitas-update/:id_visita', authRequired, VisitasController.actualizarEventos);
    router.delete('/visitas-delete/:id_visita', authRequired, VisitasController.eliminarEvento);


    // Rutas para los Documentos.
    router.post('/documentos-upload/:id_aprendiz', authRequired, DocumentsController.cargarDocumento);
    router.get('/documentos-aprendiz/:id_aprendiz', authRequired, DocumentsController.obtenerDocumentosPorAprendiz);
    // Ruta para obtener todos los documentos de la Base de Datos.
    router.get('/documentos-aprendiz-getAll', authRequired, DocumentsController.obtenerDocumentos);
    // Ruta para descargar un documento por su nombre de archivo
    router.get('/documentos-download/:nombreArchivo', authRequired, DocumentsController.descargarDocumento);
    // Ruta para eliminar un documento por su ID
    router.delete('/documentos-delete/:id_documento', authRequired, DocumentsController.eliminarDocumento);


    // Rutas para las Bitácoras.
    router.post('/bitacoras-upload/:id_aprendiz', authRequired, BitacorasController.cargarBitacora);
    router.get('/bitacoras-aprendiz/:id_aprendiz', authRequired, BitacorasController.obtenerBitacorasPorAprendiz);
    // Ruta para obtener todas las bitacoras de la Base de Datos.
    router.get('/bitacoras-aprendiz-getAll', authRequired, BitacorasController.obtenerBitacoras);
    router.get('/bitacoras-download/:nombreArchivo', authRequired, BitacorasController.descargarBitacora);
    // Rutas para las Bitácoras.
    router.post('/enviar-observacion/:id_bitacora', authRequired, BitacorasController.enviarObservacion);

    // Ruta para actualizar una bitácora existente
    router.put('/bitacoras-update/:idBitacora', authRequired, BitacorasController.actualizarBitacora);
    router.put('/aprobar-bitacora/:idBitacora', authRequired, BitacorasController.aprobarBitacora);
    router.delete('/bitacoras-delete/:id_bitacora', authRequired, BitacorasController.eliminarBitacora);

    return router;
};