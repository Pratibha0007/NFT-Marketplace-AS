import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonAll from "../../../ButtonAll";
import { setFormData } from "../form.slice";

const NFTDetails = ({ onNext }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const formData = useSelector((state) => state.formSlice);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length === 0) {
      onNext();
    } else {
      setErrors(validationErrors);
    }
  };

  const validateStep = () => {
    const newErrors = {};

    if (!formData.nftName) newErrors.nftName = "NFT Name is required";
    if (!formData.nftType) newErrors.nftType = "NFT Type is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.pinCode) newErrors.pinCode = "Pin Code is required";
    if (!formData.nftDescription)
      newErrors.nftDescription = "NFT Description is required";

    return newErrors;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">NFT Details</h2>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        {errors.nftName && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.nftName}
          </p>
        )}
        <input
          type="text"
          name="nftName"
          value={formData.nftName}
          onChange={handleChange}
          placeholder="NFT Name"
          className={`w-full mb-4 p-2 border  rounded-lg  ${
            errors.nftName ? "border-red-500" : ""
          }`}
        />
        {errors.nftType && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.nftType}
          </p>
        )}

        <input
          type="text"
          name="nftType"
          value={formData.nftType}
          onChange={handleChange}
          placeholder="NFT Type"
          className={`w-full mb-4 p-2 border  rounded-lg ${
            errors.nftType ? "border-red-500" : ""
          }`}
        />
        {errors.address && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.address}
          </p>
        )}
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className={`w-full mb-4 p-2 border  rounded-lg ${
            errors.address ? "border-red-500" : ""
          }`}
        />
        {errors.country && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.country}
          </p>
        )}
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          className={`w-full mb-4 p-2 border rounded-lg  ${
            errors.country ? "border-red-500" : ""
          }`}
        />
        {errors.city && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.city}
          </p>
        )}
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className={`w-full mb-4 p-2 border  rounded-lg ${
            errors.city ? "border-red-500" : ""
          }`}
        />
        {errors.pinCode && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.pinCode}
          </p>
        )}
        <input
          type="text"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          placeholder="Pin Code"
          className={`w-full mb-4 p-2 border rounded-lg  ${
            errors.pinCode ? "border-red-500" : ""
          }`}
        />
        {errors.nftDescription && (
          <p className="text-red-500 text-xs text-left font-semibold">
            {errors.nftDescription}
          </p>
        )}
        <textarea
          name="nftDescription"
          value={formData.nftDescription}
          onChange={handleChange}
          placeholder="NFT Description"
          className={`w-full mb-4 p-2 border  rounded-lg ${
            errors.nftDescription ? "border-red-500" : ""
          }`}
        ></textarea>
        <ButtonAll
          text="Next"
          txtclr="#ffffff"
          bgclr="#000000"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default NFTDetails;
