import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonAll from "../../../ButtonAll";
import { setFormData } from "../form.slice";

const SelectParticipants = ({ onNext, onBack }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const formData = useSelector((state) => state.formSlice);

  const previousForm = () => {
    onBack();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ [name]: value }));
  };

  const nextForm = (e) => {
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length === 0) {
      onNext();
    } else {
      setErrors(validationErrors);
    }
  };

  const validateStep = () => {
    const newErrors = {};

    if (!formData.participantName)
      newErrors.participantName = "Participant Name is required";
    if (!formData.participantRole)
      newErrors.participantRole = "Participant Role is required";
    if (!formData.participantContact)
      newErrors.participantContact = "Participant Contact is required";

    return newErrors;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select Participants</h2>
      <form onSubmit={(e) => e.preventDefault} className="max-w-sm mx-auto">
        {errors.participantName && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.participantName}
          </p>
        )}
        <input
          type="text"
          name="participantName"
          value={formData.participantName}
          onChange={handleChange}
          placeholder="Participant Name"
          className={`w-full mb-4 p-2 border rounded-lg ${
            errors.participantName ? "border-red-500" : ""
          }`}
        />

        {errors.participantRole && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.participantRole}
          </p>
        )}
        <input
          type="text"
          name="participantRole"
          value={formData.participantRole}
          onChange={handleChange}
          placeholder="Participant Role"
          className={`w-full mb-4 p-2 border rounded-lg ${
            errors.participantRole ? "border-red-500" : ""
          }`}
        />

        {errors.participantContact && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.participantContact}
          </p>
        )}
        <input
          type="text"
          name="participantContact"
          value={formData.participantContact}
          onChange={handleChange}
          placeholder="Participant Contact"
          className={`w-full mb-4 p-2 border rounded-lg ${
            errors.participantContact ? "border-red-500" : ""
          }`}
        />

        <div className="flex justify-between mt-4">
          <ButtonAll
            txtclr="#ffffff"
            bgclr="#000000"
            text="Back"
            fnct={() => previousForm()}
          />
          <ButtonAll
            txtclr="#ffffff"
            bgclr="#000000"
            text="Next"
            fnct={nextForm}
          />
        </div>
      </form>
    </div>
  );
};

export default SelectParticipants;
