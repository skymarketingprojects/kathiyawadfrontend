import { useState } from "react";

const useBulkOrderPage = () => {
  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    email: "",
    phone: "",
    eventType: "",
    quantity: "",
    deliveryDate: "",
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const title = "BulkOrder";
  return { title, formData, handleChange, handleSubmit };
};

export default useBulkOrderPage;
