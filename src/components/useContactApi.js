import useFetch from "./useFetch";

const useContactApi = ({ name, email, subject, body }) => {
  const { sendRequest, response, loading, error } = useFetch("/api/contact", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      subject,
      body
    })
  });

  const successMessage =
    (response && response.status === "success" && response.payload.message) ||
    null;

  const errorMessage =
    (response && response.status === "error" && response.payload.message) ||
    (error && error.status === "error" && error.payload.message) ||
    (error && error.message) ||
    null;

  return [{ successMessage, errorMessage, loading }, sendRequest];
};

export default useContactApi;
