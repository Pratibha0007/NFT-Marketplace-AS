import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonAll from "../../../ButtonAll";
import { setFormData } from "../form.slice";

const InvestmentDetails = ({ onNext, onBack }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const formData = useSelector((state) => state.formSlice);

  const previousForm = (e) => {
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

    if (!formData.totalPropertyValue)
      newErrors.totalPropertyValue = "Total Property Value is required";
    if (!formData.investment) newErrors.investment = "Investment is required";
    if (!formData.totalInvestment)
      newErrors.totalInvestment = "Total Investment is required";
    if (!formData.minInvestmentValue)
      newErrors.minInvestmentValue = "Minimum Investment Value is required";
    if (!formData.expectedROI)
      newErrors.expectedROI = "Expected ROI is required";
    if (!formData.investmentStage)
      newErrors.investmentStage = "Investment Stage is required";

    return newErrors;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Investment Details</h2>
      <form onSubmit={(e) => e.preventDefault} className="max-w-sm mx-auto">
        {errors.totalPropertyValue && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.totalPropertyValue}
          </p>
        )}
        <input
          type="text"
          name="totalPropertyValue"
          value={formData.totalPropertyValue}
          onChange={handleChange}
          placeholder="Total Property Value"
          className={`w-full mb-4 p-2 border  rounded-lg ${
            errors.totalPropertyValue ? "border-red-500" : ""
          }`}
        />

        {errors.investment && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.investment}
          </p>
        )}
        <input
          type="text"
          name="investment"
          value={formData.investment}
          onChange={handleChange}
          placeholder="Investment"
          className={`w-full mb-4 p-2 border  rounded-lg ${
            errors.investment ? "border-red-500" : ""
          }`}
        />

        {errors.totalInvestment && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.totalInvestment}
          </p>
        )}
        <input
          type="text"
          name="totalInvestment"
          value={formData.totalInvestment}
          onChange={handleChange}
          placeholder="Total Investment"
          className={`w-full mb-4 p-2 border rounded-lg  ${
            errors.totalInvestment ? "border-red-500" : ""
          }`}
        />

        {errors.minInvestmentValue && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.minInvestmentValue}
          </p>
        )}
        <input
          type="text"
          name="minInvestmentValue"
          value={formData.minInvestmentValue}
          onChange={handleChange}
          placeholder="Minimum Investment Value"
          className={`w-full mb-4 p-2 border  rounded-lg ${
            errors.minInvestmentValue ? "border-red-500" : ""
          }`}
        />

        {errors.expectedROI && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.expectedROI}
          </p>
        )}
        <input
          type="text"
          name="expectedROI"
          value={formData.expectedROI}
          onChange={handleChange}
          placeholder="Expected ROI"
          className={`w-full mb-4 p-2 border  rounded-lg ${
            errors.expectedROI ? "border-red-500" : ""
          }`}
        />

        {errors.investmentStage && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.investmentStage}
          </p>
        )}
        <input
          type="text"
          name="investmentStage"
          value={formData.investmentStage}
          onChange={handleChange}
          placeholder="Investment Stage"
          className={`w-full mb-4 p-2 border  rounded-lg ${
            errors.investmentStage ? "border-red-500" : ""
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

export default InvestmentDetails;
