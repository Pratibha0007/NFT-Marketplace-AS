import { useState } from "react";
import Stepper from "../Stepper";
import NFTDetails from "./form1";
import InvestmentDetails from "./form2";
import LegalStructure from "./form3";
import TaxationDetails from "./form4";
import SelectParticipants from "./form5";
import ReviewAndSubmit from "./form6";

const steps = [
  "NFT Details",
  "Investment Details",
  "Legal Structure",
  "Taxation Details",
  "Select Participants",
  "Review & Submit",
];
const CreateNFTForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  let formComponent;
  switch (currentStep) {
    case 0:
      formComponent = <NFTDetails onNext={handleNext} />;
      break;
    case 1:
      formComponent = (
        <InvestmentDetails onNext={handleNext} onBack={handleBack} />
      );
      break;
    case 2:
      formComponent = (
        <LegalStructure onNext={handleNext} onBack={handleBack} />
      );
      break;
    case 3:
      formComponent = (
        <TaxationDetails onNext={handleNext} onBack={handleBack} />
      );
      break;
    case 4:
      formComponent = (
        <SelectParticipants onNext={handleNext} onBack={handleBack} />
      );
      break;
    case 5:
      formComponent = <ReviewAndSubmit onBack={handleBack} />;
      break;
    default:
      formComponent = null;
  }

  return (
    <div className="flex">
      <Stepper steps={steps} currentStep={currentStep} />
      <div className="max-w-4xl mx-auto p-8 flex-1">{formComponent}</div>
    </div>
  );
};

export default CreateNFTForm;
