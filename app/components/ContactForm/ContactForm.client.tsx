"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const initialState = {
    client_name: "",
    email: "",
    whatsapp: "",
    interest: "",
    metUs: "",
    message: "",
  };

  const [form, setForm] = useState(initialState);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      client_name: event.target.value,
    });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      email: event.target.value,
    });
  };

  const handleWhatsAppChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      whatsapp: event.target.value,
    });
  };

  const handleInterestChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      interest: event.target.value,
    });
  };

  const handleMetUsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({
      ...form,
      metUs: event.target.value,
    });
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      message: event.target.value,
    });
  };

  const sendForm = () => {
    const { client_name, email, whatsapp, interest, metUs, message } = form;

    console.log(`Nome: ${client_name}`);
    console.log(`Email: ${email}`);
    console.log(`Mensagem: ${message}`);

    var webhookUrl =
      "https://discordapp.com/api/webhooks/1235704230703271976/t82KP2nVaMwLXwA2DP35wNrt4yBXCnBE7af27ZUm46b6eJKkmD0jjfTzMgRVlY9bp-UZ";

    var data = {
      username: "M&R Bot",
      content: "Uma nova mensagem foi recebida através do formulário:",
      embeds: [
        {
          title: "Detalhes do Contato",
          fields: [
            { name: "Nome:", value: client_name, inline: true },
            { name: "Email:", value: email, inline: true },
            { name: "WhatsApp:", value: whatsapp, inline: true },
            { name: "Área de interesse:", value: interest, inline: true },
            { name: "Como nos conheceu:", value: metUs, inline: true },
            { name: "Mensagem:", value: message },
          ],
          color: 7506394,
        },
      ],
    };

    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            title: "Sua mensagem foi enviada!",
            icon: "success",
            width: 600,
            padding: "3em",
            color: "#FFF",
            background: "#1E1732",
            showConfirmButton: false,
            timer: 4000,
            showClass: {
              popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
            },
            hideClass: {
              popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
            },
          });
        } else {
          Swal.fire({
            title: "Poxa...",
            text: "Parece que ocorreu um erro ao enviar mensagem!",
            icon: "error",
            width: 600,
            padding: "3em",
            color: "#FFF",
            background: "#1E1732",
            showConfirmButton: false,
            timer: 4000,
            showClass: {
              popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
            },
            hideClass: {
              popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
            },
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar dados: ", error);
        Swal.fire({
          title: "Erro de comunicação",
          text: "Mas calma, já estamos trabalhando para resolver! ",
          icon: "error",
          width: 600,
          padding: "3em",
          color: "#FFF",
          background: "#1E1732",
          showConfirmButton: false,
          timer: 4000,
          showClass: {
            popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
          },
          hideClass: {
            popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
          },
        });
      });
  };

  const handleSubmit = (
    event: React.FormEvent<
      | HTMLFormElement
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
    >
  ) => {
    event.preventDefault();

    console.log("Form aqui");
    sendForm();
    Swal.fire({
      title: "Sua mensagem foi enviada!",
      icon: "success",
      width: 600,
      padding: "3em",
      color: "#FFF",
      background: "#0F172A",
      showConfirmButton: false,
      timer: 4000,
      showClass: {
        popup: `
  animate__animated
  animate__fadeInUp
  animate__faster
`,
      },
      hideClass: {
        popup: `
  animate__animated
  animate__fadeOutDown
  animate__faster
`,
      },
    });
  };

  const interests = [
    { value: "Direito Civil Geral", label: "Direito Civil Geral" },
    { value: "Direito de Família", label: "Direito de Família" },
    { value: "Direito Tributário", label: "Direito Tributário" },
    { value: "Direito Empresarial", label: "Direito Empresarial" },
    { value: "Direito do Trabalho", label: "Direito do Trabalho" },
    { value: "Direito do Consumidor", label: "Direito do Consumidor" },
    { value: "Direito Criminal", label: "Direito Criminal" },
    { value: "Direito Previdenciário", label: "Direito Previdenciário" },
    {
      value: "Sou parte adversa em um processo",
      label:
        "Sou parte adversa em um processo (Informe abaixo o número do processo)",
    },
    {
      value: "Quero fazer proposta de acordo",
      label: "Quero fazer proposta de acordo",
    },
    {
      value: "Outro assunto não especificado anteriormente",
      label: "Outro assunto não especificado anteriormente",
    },
  ];

  return (
    <form className="flex flex-col w-[640px]" onSubmit={handleSubmit}>
      <label>
        Nome completo<span className="text-rose-500">*</span>
      </label>
      <input
        name="nome"
        className="border p-2.5 rounded-lg"
        type="text"
        placeholder="Ex.: João da Silva"
        value={form.client_name}
        onChange={handleNameChange}
        required
      />

      <div className="flex flex-row justify-between gap-4 mt-3">
        <div className="flex flex-col rounded w-full">
          <label>
            Email<span className="text-rose-500">*</span>
          </label>
          <input
            name="email"
            className="border p-2.5 rounded-lg w-full"
            type="email"
            placeholder="email@email.com"
            value={form.email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="flex flex-col rounded w-full">
          <label>
            WhatsApp<span className="text-rose-500">*</span>
          </label>
          <input
            name="whatsapp"
            className="border p-2.5 rounded-lg"
            type="text"
            placeholder="(00) 0 0000-0000"
            value={form.whatsapp}
            onChange={handleWhatsAppChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-row justify-between gap-4 mt-3">
        <div className="flex flex-col rounded w-full">
          <label>
            Área de interesse<span className="text-rose-500">*</span>
          </label>
          <select
            name="area"
            className="bg-white border text-gray-900 rounded-lg block w-full p-2.5"
            value={form.interest}
            onChange={handleInterestChange}
          >
            <option value="">Escolha uma área</option>
            {interests.map((interest, index) => (
              <option key={index} value={interest.value}>
                {interest.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col rounded w-full">
          <label>Como nos conheceu?</label>
          <select
            name="conhecimento"
            className="bg-white border text-gray-900 rounded-lg block w-full p-2.5"
            value={form.metUs}
            onChange={handleMetUsChange}
          >
            <option value="" selected>
              Selecione uma opção
            </option>
            <option value="area01">Indicação de um amigo</option>
            <option value="area02">Google</option>
            <option value="area03">Instagram</option>
            <option value="area04">Linkedin</option>
          </select>
        </div>
      </div>

      <label className="mt-5">
        Mensagem<span className="text-rose-500">*</span>
      </label>
      <textarea
        name="mensagem"
        className="block p-2.5 w-full text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Escreva aqui..."
        rows={6}
        value={form.message}
        onChange={handleMessageChange}
        required
      />

      <div className="flex justify-end mt-8">
        <button
          className="bg-[#d68e5d] text-white font-bold py-3 px-10 rounded-tl-[15px] rounded-br-[15px] px-10 py-3 hover:bg-[#c47642] text-bold transition duration-500 hover:duration-500"
          type="submit"
        >
          Enviar mensagem
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
