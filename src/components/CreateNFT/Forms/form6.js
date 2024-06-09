import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonAll from "../../../ButtonAll";
import { addNFTtoWallet } from "../../MyNFT/wallet.nft.slice";
import { resetFormData } from "../form.slice";
import SubmitModal from "./modal";

const formatKey = (key) => {
  return key
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const ReviewSubmit = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const previousForm = () => {
    onBack();
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };
  const formData = useSelector((state) => state.formSlice);
  const finalSubmit = () => {
    dispatch(addNFTtoWallet(formData));
    dispatch(resetFormData());
    setIsModalOpen(true);
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>
      <div className="max-w-md mx-auto">
        <table className="w-full">
          <tbody>
            {Object.entries(formData).map(([key, value]) => (
              <tr key={key}>
                <td className="py-2 px-4 border border-gray-300">
                  {formatKey(key)}
                </td>
                <td className="py-2 px-4 border border-gray-300">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row justify-between mt-4">
        <ButtonAll
          txtclr="#ffffff"
          bgclr="#000000"
          text="Back"
          fnct={previousForm}
        />
        <ButtonAll
          txtclr="#ffffff"
          bgclr="#000000"
          text="Submit"
          fnct={finalSubmit}
        />
        <SubmitModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default ReviewSubmit;
