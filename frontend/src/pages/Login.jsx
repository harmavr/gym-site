import { Form, json, redirect } from "react-router-dom";

export default function Login() {
  return (
    <Form method="post">
      <h2>Login</h2>
      <div className="container">
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
      </div>
      <div className="form-actions">
        <button>Login</button>
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
  console.log(response);

  if (response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event" }, { status: 500 });
  }

  return redirect("/");
}
