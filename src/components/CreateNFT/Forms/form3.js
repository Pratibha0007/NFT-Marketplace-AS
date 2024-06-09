import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonAll from "../../../ButtonAll";
import { setFormData } from "../form.slice";

const LegalStructure = ({ onNext, onBack }) => {
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

    if (!formData.legalEntity)
      newErrors.legalEntity = "Legal Entity is required";
    if (!formData.entityType) newErrors.entityType = "Entity Type is required";
    if (!formData.jurisdiction)
      newErrors.jurisdiction = "Jurisdiction is required";

    return newErrors;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Legal Structure</h2>
      <form onSubmit={(e) => e.preventDefault} className="max-w-sm mx-auto">
        {errors.legalEntity && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.legalEntity}
          </p>
        )}
        <input
          type="text"
          name="legalEntity"
          value={formData.legalEntity}
          onChange={handleChange}
          placeholder="Legal Entity"
          className={`w-full mb-4 p-2 border rounded-lg ${
            errors.legalEntity ? "border-red-500" : ""
          }`}
        />

        {errors.entityType && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.entityType}
          </p>
        )}
        <input
          type="text"
          name="entityType"
          value={formData.entityType}
          onChange={handleChange}
          placeholder="Entity Type"
          className={`w-full mb-4 p-2 border rounded-lg ${
            errors.entityType ? "border-red-500" : ""
          }`}
        />

        {errors.jurisdiction && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.jurisdiction}
          </p>
        )}
        <input
          type="text"
          name="jurisdiction"
          value={formData.jurisdiction}
          onChange={handleChange}
          placeholder="Jurisdiction"
          className={`w-full mb-4 p-2 border rounded-lg ${
            errors.jurisdiction ? "border-red-500" : ""
          }`}
        />

        <div className="flex justify-between mt-4">
          <ButtonAll
            txtclr="#ffffff"
            bgclr="#000000"
            text="Back"
            fnct={previousForm}
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

export default LegalStructure;
