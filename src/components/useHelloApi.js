import useFetch from "./useFetch";

const useHelloApi = ({ name, email, subject, body }) => {
  const { sendRequest, response, loading, error } = useFetch("/api/hello", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      subject,
      body
    })
  });

  return [{ response, loading, error }, sendRequest];
};

export default useHelloApi;
