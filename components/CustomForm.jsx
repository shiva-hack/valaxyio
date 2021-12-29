import { useEffect, useState } from "react";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
  };

  const clearFields = () => {
    setEmail("");
  };

  useEffect(() => {
    if (["error", "success"].includes(status)) clearFields();
  }, [status]);

  return (
    <form
      className="mc__form valaxy-form-wrapper"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="valaxy-form-container">
        <div className="f-container">
          <input
            className="valaxy-form-input"
            name=""
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
          />
          <div className="valaxy-action-container">
            <button type="submit" className="valaxy-action">
              Get Early Access
            </button>
          </div>
        </div>
      </div>

      {status === "sending" && (
        <div className="mc__alert mc__alert--sending text-stone-400 w-full">
          sending...
        </div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error text-red-600 w-full"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert--success text-green-600 w-full"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </form>
  );
};

export default CustomForm;
