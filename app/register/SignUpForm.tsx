// import React, { FormEvent, useState } from "react";
// import axios from "axios";

// interface SignUpFormProps {
//   onSuccess: () => void;
//   onError: (error: any) => void;
// }

// const SignUpForm: React.FC<SignUpFormProps> = ({ onSuccess, onError }) => {
//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const target = event.currentTarget;
//     const name = (target.elements.namedItem("name") as HTMLInputElement)
//       .value;
//     const email = (target.elements.namedItem("email") as HTMLInputElement)
//       .value;
//     const mobileNumber = (target.elements.namedItem("mobileNumber") as HTMLInputElement)
//       .value;
//     const password = (target.elements.namedItem("password") as HTMLInputElement)
//       .value;

//     const payload = {
//       name,
//       email,
//       mobileNumber,
//       password,
//     };

//     try {
//       const response = await axios.post(
//         "https://dev-apis.explorebtk.com/api/v1/auth/signup",
//         payload
//       );

//       console.log(response.data);
//       onSuccess(); // Call the success callback
//     } catch (error) {
//       console.error("An error occurred:", error);
//       onError(error); // Call the error callback
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="signup">
//       {/* Form fields */}
//       {/* Submit button */}
//     </form>
//   );
// };

// export default SignUpForm;
