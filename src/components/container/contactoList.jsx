import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponente from '../pure/contacto';

const ContactoList = () => {

    const defaultContacto = new Contacto('Moha', 'El Attar', 'mohaelattar6@gmail.com', true); 

  return (
    <div>
        <div>
            Mi Contacto:
        </div>
        <ContactoComponente contacto={defaultContacto}></ContactoComponente>
    </div>
  )
}

export default ContactoList;
