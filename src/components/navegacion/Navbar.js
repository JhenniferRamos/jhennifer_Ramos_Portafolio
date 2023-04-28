import React from 'react'

import {Nav, NavLink, Bars, NavMenu} from './NavbarElements';
export const Navbar = () => {
    return (
        
        <div>
            <Nav>
        

                <Bars />
                    <NavMenu>
                        <NavLink to='./' activeStyle>
                             Acerca de mi
                        </NavLink>
                        <NavLink to='/habilidades' activeStyle>
                            Habilidades
                        </NavLink>
                        <NavLink to='/proyectos' activeStyle>
                            Proyectos
                        </NavLink>
                        <NavLink to='/experiencialab' activeStyle>
                            Experiencia Laboral
                        </NavLink>
                        <NavLink to='/educacion' activeStyle>
                            Educacion
                        </NavLink>
                        <NavLink to='/contacto' activeStyle>
                            Contacto
                        </NavLink>
                     </NavMenu>
                
            </Nav>
        </div>
    )
}

