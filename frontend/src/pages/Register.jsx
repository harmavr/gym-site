import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";

export default function Register() {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form
      method="post"
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {data && data.errors && (
        <ul className="mb-4">
          {Object.values(data.errors).map((err, index) => (
            <li key={index} className="text-red-600">
              {err}
            </li>
          ))}
        </ul>
      )}
      {data && data.message && <p className="mb-4">{data.message}</p>}
      <div className="container">
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold text-gray-600"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold text-gray-600"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mobilePhone"
            className="block text-sm font-semibold text-gray-600"
          >
            Mobile Phone
          </label>
          <input
            type="number"
            name="mobilePhone"
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
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
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rePassword"
            className="block text-sm font-semibold text-gray-600"
          >
            Retype Password
          </label>
          <input
            type="password"
            name="rePassword"
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div className="form-actions">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          {isSubmitting ? "Submitting" : "Register"}
        </button>
      </div>
    </Form>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();

  const registerData = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await fetch("http://localhost:8080/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  });

  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not save event" }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.token;
  console.log(resData.user.firstName);
  const { firstName, lastName } = resData.user;
  console.log(firstName, lastName);

  localStorage.setItem("token", token);

  if (firstName && lastName) {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  }

  return redirect("/");
}
