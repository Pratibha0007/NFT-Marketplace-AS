import React from "react";

const SubmitModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          Proposal Submitted Successfully!
        </h2>
        <p>
          Your proposal has been submitted successfully, you can view the
          proposal status here.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default SubmitModal;
