export interface FormDataType {
  firstName: string;
  lastName: string;
  email: string;
  idNumber: string;
  phone: string;
  role: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  subscribeNewsletter: boolean;
}

// Props interfaces for each step component
export interface NameProps {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  handleNextStep: () => void;
}

export interface IdentificationProps {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  handleNextStep: () => void;
}

export interface PasswordProps {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  handleRegister: () => Promise<void>;
  isLoading: boolean;
}

export interface VerifyOTPProps {
  startTimer: boolean;
  email: string;
}

export interface VerifyOTPResponse {
  response: string;
  message?: string;
  data?: {
    user: any;
    tokens: {
      access: string;
      refresh: string;
    };
  };
}
