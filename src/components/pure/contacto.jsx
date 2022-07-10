import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'

const ContactoComponente = ({contacto}) => {
  return (
    <div>
        <h2>
            Nombre: {contacto.nombre}
        </h2>
        <h3>
            apellido: {contacto.apellido}
        </h3>
        <h4>
            email: {contacto.email}
        </h4>
        <h5>
            conectado: {contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}
        </h5>
    </div>
  )
}

ContactoComponente.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ContactoComponente;

