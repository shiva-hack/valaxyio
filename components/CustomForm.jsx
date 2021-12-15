import { useEffect, useState } from 'react';

const CustomForm = ({ status, message, onValidated }) => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
  }

  const clearFields = () => {
    setEmail('');
  }

  useEffect(() => {
    if (['error', 'success'].includes(status)) clearFields();
  }, [status])

  return (
    <form className="mc__form flex flex-col md:space-y-4" onSubmit={(e) => handleSubmit(e)}>
      <div className="mc__field-container flex flex-col md:flex-row mb-6 md:space-x-4 space-y-4 md:space-y-0">
        <input
          type="email"
          placeholder="enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-4 leading-none border border-gray-200 rounded-lg focus:outline-none"
          required
        />
        <button className="inline-block px-5 py-4 md:py-2 font-semibold text-white rounded-lg focus:outline-none bg-black hover:bg-gray-800">Keep me posted!</button>
      </div>


      {status === 'sending' && <div className='mc__alert mc__alert--sending text-stone-400'>sending...</div>}
      {status === 'error' && <div className='mc__alert mc__alert--error text-red-600' dangerouslySetInnerHTML={{ __html: message }} />}
      {status === 'success' && <div className='mc__alert mc__alert--success text-green-600' dangerouslySetInnerHTML={{ __html: message }} />}
    </form>
  );
}

export default CustomForm;