import RegistrationForm from "@/components/registration-form";
import React from "react";

function RegistrationPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto">
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
