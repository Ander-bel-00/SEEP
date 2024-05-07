import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Importa BrowserRouter
import LoginForm from "./componentes/login/LoginForm";
import NavbarAprendiz from "./componentes/aprendices/layouts/Navabar-Aprendiz";
import NavbarAdmin from "./componentes/admin/layouts/NavabarAdmin.js";
import Aprendices from "./componentes/aprendices/Aprendiz";
import Administrador from "./componentes/admin/Administrador";
import Instructor from "./componentes/instructores/Instructor";
import Header from "./componentes/layouts/Header";
import clienteAxios from './api/axios';
import Cookies from 'js-cookie';
import ListaAprendices from "./componentes/instructores/listaAprendices/ListaAprendices.js";
import Calendario from "./componentes/calendario/Calendario.js";
import NavbarInstructor from "./componentes/instructores/layouts/NavbarInstructor.js";
import NuevaFicha from "./componentes/fichas/NuevaFicha.js";
import NuevoAprendiz from "./componentes/aprendices/nuevoAprendiz/NuevoAprendiz.js";
import Documents from "./componentes/Documents/Documents.js";
import InstructorDocuments from "./componentes/Documents/InstructorDocuments.js";
import Bitacoras from "./componentes/bitacoras/Bitacoras.js";
import BitacorasInstructor from "./componentes/bitacoras/BitacorasInstructor.js";
import RecuperaContrasena from "./componentes/login/recuperarContrasena/RecuperaContrasena.js";
import AprendizForm from "./componentes/formularios/AprendizForm.js";
import FichasForm from "./componentes/formularios/FichasForm.js";
import InstructorForm from "./componentes/formularios/InstructorForm.js";
import { ProtectedRoute } from "./ProtectedRoute.js";
import AgendaContainer from "./componentes/agenda/AgendaContainer/AgendaContainer.js";
import InformacionGeneral from "./componentes/SeguimientoEP/InformacionGeneral/InformacionGeneral.js";
import PlanEP from "./componentes/SeguimientoEP/PlaneacionEP/PlanEP.js";
import { useAuth } from "./context/AuthContext.js";


function App() {
  const { isAuthenticated, userRole, handleLogout, showNav, setShowNav } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
      <Route
            path="/login"
            element={
              isAuthenticated ? <Navigate to={`/${userRole}`} /> : <LoginForm />
            }
          />
        <Route
          path="/"
          element={!isAuthenticated ? <Navigate to="/login" /> : <ProtectedRoute userRole={localStorage.getItem('userRole')} />}
        />

        <Route path="/restablecimiento-contrasena" element={<RecuperaContrasena />} />
        
        {/* Rutas protegidas, solo accede el rol aprendiz */}
        <Route
          path="/aprendiz/*"
          element={
            <ProtectedRoute
              isAllowed={!!localStorage.getItem('isAuthenticated') && localStorage.getItem('userRole') === 'aprendiz'}
              redirectTo="/login"
            >
              <Fragment>
                <NavbarAprendiz showNav={showNav} handleLogout={handleLogout} setShowNav={setShowNav}/>
                <Header showNav={showNav} setShowNav={setShowNav}/>
                  <Routes>
                    <Route path="/" element={
                      <main className="Aprendiz-main-content">
                        <Aprendices />
                      </main>} />
                    <Route path=":id_aprendiz/bitacoras-aprendiz" element={
                      <main className="bitacoras-aprendizUser-main">
                        <Bitacoras />
                      </main>
                    } />
                    <Route path=":id_aprendiz/documents-aprendiz"element={
                      <main className="documents-aprendiz-main">
                        <Documents/>
                      </main>
                    }/>
                  </Routes>
              </Fragment>
            </ProtectedRoute>
          }
        />
        {/* Rutas protegidas a las que accederá el rol de instructor */}
        <Route
          path="/instructor/*"
          element={
              <ProtectedRoute
                isAllowed={!!localStorage.getItem('isAuthenticated') && localStorage.getItem('userRole') === 'instructor'}
                redirectTo="/login"
              >
                <Fragment>
                  <Header showNav={showNav} setShowNav={setShowNav}/>
                  <NavbarInstructor showNav={showNav} handleLogout={handleLogout} setShowNav={setShowNav}/>

                    <Routes>
                      <Route path="/" element={
                        <main className="main-container">
                          <Instructor />
                        </main>
                      } />
                      <Route path=":id_instructor/documents-instructor" 
                        element={
                          <main className="main-ins-bitacoras">
                            <InstructorDocuments />
                          </main>   
                        }
                      />
                      <Route path=":id_instructor/bitacoras-instructor"
                        element={
                          <BitacorasInstructor/>
                        }
                      />

                      <Route 
                        path="aprendicesFicha/:numero_ficha"
                        element={
                          <main className="list-aprendices-box">
                            <ListaAprendices isAuthenticated={isAuthenticated}/>
                          </main>
                        }
                      />
                      <Route 
                        path=":id_instructor/nuevaFicha"
                        element={
                            <main className="new-fichas-content">
                              <NuevaFicha />
                            </main>
                        }
                      />
                      <Route 
                        path=":id_instructor/aprendiz-add"
                        element={
                          <main className="new-aprendiz-content">
                            <NuevoAprendiz />
                          </main>
                        }
                      />

                      <Route 
                        path="visitas-add/:numero_ficha/:id_aprendiz"
                        element={
                          <div className="main-container">
                            <Calendario />
                          </div>
                        }
                      />
                      <Route 
                        path="agenda/visitas"
                        element={
                          <main className="agenda-main-container">
                            <AgendaContainer />
                          </main>
                        }
                      />
                      <Route 
                        path="agenda/visitas/visitas-add/:numero_ficha/:id_aprendiz"
                        element={
                          <div className="main-container">
                            <Calendario />
                          </div>
                        }
                      />

                      <Route 
                        path="evaluacion-EP/info-general"
                        element={
                          <main className="main-container">
                            <InformacionGeneral />
                          </main>
                        }
                      />

                      <Route 
                        path="/planeacion-ep"
                        element={
                          <main className="main-container">
                            <PlanEP />
                          </main>
                        }
                      />


                    </Routes>
                </Fragment>
              </ProtectedRoute>
          }
        />
        {/* Rutas protegidas a las qeu accederá el rol Administrador */}
        <Route path="/admin/*"
          element={
            <ProtectedRoute
                isAllowed={!!localStorage.getItem('isAuthenticated') && localStorage.getItem('userRole') === 'admin'}
                redirectTo="/login"
              >
                <Fragment>
                  <Header showNav={showNav} setShowNav={setShowNav}/>
                  <NavbarAdmin showNav={showNav} handleLogout={handleLogout} setShowNav={setShowNav}/>
                  <main className="container contAdmin">
                    <Routes>
                      <Route path="/" element={
                        <main className="Admin-main-box">
                          <Administrador />
                        </main>
                      } />
                      <Route
                        path="/crear-ficha"
                        element={
                            <div>
                              <main className="fichasForm-main-box">
                                <FichasForm />
                              </main>
                            </div>
                        }
                      />
                      <Route
                        path="/crear-aprendiz"
                        element={
                            <div>
                              <main className="AprendizForm-main-box">
                                <AprendizForm />
                              </main>
                            </div>
                        }
                      />
                      <Route
                        path="/crear-instructor"
                        element={
                              <div>
                                <main className="InstructorForm-main-box">
                                  <InstructorForm />
                                </main>
                              </div>
                          }
                      />
                    </Routes>
                  </main>
                </Fragment>
              </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
