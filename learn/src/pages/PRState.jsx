import { useState } from "react";
import { contacts } from "../data/prdata";

import PropTypes from "prop-types";

export default function PRState() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Chat
      </h1>
      <div className="flex space-x-4">
        <ContactList
          contacts={contacts}
          selectedContact={to}
          onSelect={(contact) => setTo(contact)}
        />
        <Chat key={to.id} contact={to} />
      </div>
    </div>
  );
}

const ContactList = ({ contacts, selectedContact, onSelect }) => {
  return (
    <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Contacts</h2>
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => onSelect(contact)}
              className={`w-full text-left px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 ${
                selectedContact.id === contact.id
                  ? "bg-sky-500 text-white"
                  : "bg-white text-gray-900 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedContact: PropTypes.object.isRequired,
};

const Chat = ({ contact }) => {
  const [text, setText] = useState("");

  return (
    <section className="w-2/3 bg-white p-4 rounded-lg shadow">
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-32 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      />
      <br />
      <button className="mt-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Send to {contact.email}
      </button>
    </section>
  );
};

Chat.propTypes = {
  contact: PropTypes.object.isRequired,
};
