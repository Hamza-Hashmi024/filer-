import { FaPhone, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Order = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedServices: [],
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Regex for email and Pakistani phone number validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^((\+92)|0)?3[0-9]{9}$/;

  const handleChange = (e) => {
    const { id, value, checked } = e.target;

    if (id === "selectedServices") {
      setFormData((prevData) => ({
        ...prevData,
        selectedServices: checked
          ? [...prevData.selectedServices, value]
          : prevData.selectedServices.filter((service) => service !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required.";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid Pakistani phone number.";
    }

    if (formData.selectedServices.length === 0) {
      newErrors.selectedServices = "Please select at least one service.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitting(true);
      setSuccessMessage("");

      try {
        const response = await axios.post(
          import.meta.env.VITE_API_URL_LEADFORM ,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Form Submitted Successfully", response.data);
        setSuccessMessage("Your form has been submitted successfully!");
        // Reset form data after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          selectedServices: [],
          notes: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrors({ api: "An error occurred while submitting the form. Please try again later." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-10/12">
        <section className="bg-white text-[#47464C] flex flex-col md:flex-row items-center justify-between px-4 py-12 gap-6">
          <div className="w-1/3">
            <h3 className="text-lg uppercase font-semibold mb-2">
              Exclusive Access to Success:
            </h3>
            <h1 className="text-3xl text-[#B4C424] font-bold mb-4 leading-tight">
              Streamline Your Workflow with Cutting-Edge Solutions
            </h1>
            <p className="text-lg">
              Discover how our innovative tools and personalized strategies can
              help you optimize efficiency, improve productivity, and achieve
              your goals faster.
            </p>
          </div>

          <div className="text-black rounded-2xl p-4 shadow-md w-1/2">
            <h3 className="text-2xl text-[#B4C424] font-semibold text-center mb-6">
              Lead Generation Form
            </h3>
            {successMessage && (
              <p className="text-green-500 text-center mb-4">{successMessage}</p>
            )}
            {errors.api && (
              <p className="text-red-500 text-center mb-4">{errors.api}</p>
            )}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full mx-auto bg-white"
            >
              {/* Form fields here */}
           
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label
                    className="block text-sm text-[#47464C]"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    className="bg-[#FEFAF6] w-full p-4 outline-none border border-[#47464C] rounded-lg focus:ring-2 focus:ring-[#B4C424] mt-2"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <label
                    className="block text-sm text-[#47464C]"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    className="bg-[#FEFAF6] w-full p-4 outline-none border border-[#47464C] rounded-lg focus:ring-2 focus:ring-[#B4C424] mt-2"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              <div className="relative">
                <input
                  id="email"
                  className="bg-[#FEFAF6] w-full p-4 outline-none border border-[#47464C] rounded-lg focus:ring-2 focus:ring-[#B4C424] mt-2"
                  type="email"
                  placeholder=""
                  value={formData.email}
                  onChange={handleChange}
                />
                <span className="absolute left-4 top-3 text-sm text-[#47464C]">
                  <FaEnvelope className="inline mr-2" /> Email Address
                </span>
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>

              <div className="relative">
                <input
                  id="phone"
                  className="bg-[#FEFAF6] w-full p-4 outline-none border border-[#47464C] rounded-lg focus:ring-2 focus:ring-[#B4C424] mt-2"
                  type="tel"
                  placeholder=""
                  value={formData.phone}
                  onChange={handleChange}
                />
                <span className="absolute left-4 top-3 text-sm text-[#47464C]">
                  <FaPhone className="inline mr-2" /> Phone Number
                </span>
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone}</span>
                )}
              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="mt-4">
                <label className="block text-sm text-[#47464C] font-semibold">
                  Services
                </label>
                <div className="grid  mt-2">
                  {[
                    "NTN Registration – Salaried",
                    "NTN Registration – Partnership or AOP",
                    "NTN Registration – Company",
                    "NTN Registration – NPO"
                  ].map((service) => (
                    <label
                      key={service}
                      className="flex items-center text-sm text-[#47464C]"
                    >
                      <input
                        type="checkbox"
                        id="selectedServices"
                        value={service}
                        checked={formData.selectedServices.includes(service)}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {service}
                    </label>
                  ))}
                </div>
                {errors.selectedServices && (
                  <span className="text-red-500 text-sm">
                    {errors.selectedServices}
                  </span>
                )}
              </div>

              <div className="mt-4">
                <label className="block text-sm text-[#47464C] font-semibold">
                  USA-LLC
                </label>
                <div className="grid  mt-2">
                  {[
                    "USA LLC Registration",
                    "Company Formation in USA - LLC / Inc. (C Corp)",
                    "Employer Identification Number (EIN)",
                   
                  ].map((USALLC) => (
                    <label
                      key={USALLC}
                      className="flex items-center text-sm text-[#47464C]"
                    >
                      <input
                        type="checkbox"
                        id="selectedServices"
                        value={USALLC}
                        checked={formData.selectedServices.includes(USALLC)}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {USALLC}
                    </label>
                  ))}
                </div>
                {errors.selectedServices && (
                  <span className="text-red-500 text-sm">
                    {errors.selectedServices}
                  </span>
                )}
              </div>

              <div className="mt-4">
                <label className="block text-sm text-[#47464C] font-semibold">
                  Company Registration
                </label>
                <div className="grid  mt-2">
                  {[
                    "Private Limited Company Registration",
                    "Single Member Company Registration",
                    "Limited Liability Partnership Registration (LLP)",
                    "Partnership or AOP Registration",
                   
                  ].map((CompanyRegistration) => (
                    <label
                      key={CompanyRegistration}
                      className="flex items-center text-sm text-[#47464C]"
                    >
                      <input
                        type="checkbox"
                        id="selectedServices"
                        value={CompanyRegistration}
                        checked={formData.selectedServices.includes(CompanyRegistration)}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {CompanyRegistration}
                    </label>
                  ))}
                </div>
                {errors.selectedServices && (
                  <span className="text-red-500 text-sm">
                    {errors.selectedServices}
                  </span>
                )}
              </div>
              </div>

              <div className="relative mt-4">
                <label
                  className="block text-sm text-[#47464C]"
                  htmlFor="notes"
                >
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  className="bg-[#FEFAF6] w-full p-4 outline-none border border-[#47464C] rounded-lg focus:ring-2 focus:ring-[#B4C424] mt-2"
                  rows="4"
                  placeholder="Additional Notes (Optional)"
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              

              <button
                className="bg-[#B4C424] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#A3B020] transition-all mt-6"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Order;

