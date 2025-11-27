import React from 'react';
import { useForm } from '../../hooks/useForm';

const ContactForm = () => {
  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  const { formData, formSubmitted, handleChange, handleSubmit } = useForm(initialFormState);

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 rounded-2xl border border-blue-500/30">
      {formSubmitted ? (
        <div className="h-full min-h-[300px] sm:min-h-[350px] flex items-center justify-center animate-fade-in">
          <div className="text-center">
            <div className="text-5xl sm:text-6xl mb-4">✅</div>
            <h4 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">
              ¡Mensaje Enviado!
            </h4>
            <p className="text-sm sm:text-base text-gray-400">
              Nos pondremos en contacto pronto
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            className="input-field text-sm sm:text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field text-sm sm:text-base"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            className="input-field text-sm sm:text-base"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="input-field resize-none text-sm sm:text-base"
          />
          <button
            onClick={handleSubmit}
            className="btn-primary w-full text-sm sm:text-base"
          >
            Enviar Mensaje
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;