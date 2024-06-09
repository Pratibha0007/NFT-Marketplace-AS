import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonAll from "../../../ButtonAll";
import { setFormData } from "../form.slice";

const TaxationDetails = ({ onNext, onBack }) => {
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

    if (!formData.taxID) newErrors.taxID = "Tax ID is required";
    if (!formData.taxJurisdiction)
      newErrors.taxJurisdiction = "Tax Jurisdiction is required";
    if (!formData.taxRate) newErrors.taxRate = "Tax Rate is required";

    return newErrors;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Taxation Details</h2>
      <form onSubmit={(e) => e.preventDefault} className="max-w-sm mx-auto">
        {errors.taxID && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.taxID}
          </p>
        )}
        <input
          type="text"
          name="taxID"
          value={formData.taxID}
          onChange={handleChange}
          placeholder="Tax ID"
          className={`w-full mb-4 p-2 border rounded-lg ${
            errors.taxID ? "border-red-500" : ""
          }`}
        />

        {errors.taxJurisdiction && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.taxJurisdiction}
          </p>
        )}
        <input
          type="text"
          name="taxJurisdiction"
          value={formData.taxJurisdiction}
          onChange={handleChange}
          placeholder="Tax Jurisdiction"
          className={`w-full mb-4 p-2 border rounded-lg ${
            errors.taxJurisdiction ? "border-red-500" : ""
          }`}
        />

        {errors.taxRate && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.taxRate}
          </p>
        )}
        <input
          type="text"
          name="taxRate"
          value={formData.taxRate}
          onChange={handleChange}
          placeholder="Tax Rate"
          className={`w-full mb-4 p-2 border rounded-lg ${
            errors.taxRate ? "border-red-500" : ""
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

export default TaxationDetails;
