import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";

export default function Login() {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "logging";

  return (
    <Form
      method="post"
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {data && data.errors && (
        <ul className="mb-4">
          {Object.values(data.errors).map((err) => (
            <li key={err} className="text-red-600">
              {err}
            </li>
          ))}
        </ul>
      )}
      {data && data.message && <p className="mb-4">{data.message}</p>}
      <div className="container">
        <div className="mb-4">
          <div className="email">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div className="form-actions">
        <button
          disabled={isSubmitting}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          {isSubmitting ? "Submitting" : "Login"}
        </button>
      </div>
    </Form>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();

  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event" }, { status: 500 });
  }

  const resData = await response.json();
  const { token, firstName, lastName } = resData;

  localStorage.setItem("token", token);
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);

  return redirect("/schedule");
}
