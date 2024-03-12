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
  const isSumbitting = navigation.state === "submitting";

  return (
    <Form method="post">
      <h2>Register</h2>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      {data && data.message && <p>{data.message}</p>}
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
        <button disabled={isSumbitting}>
          {isSumbitting ? "Submitting" : "Register"}
        </button>
      </div>
    </Form>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();

  const registerData = {
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

  localStorage.setItem("token", token);
  return redirect("/");
}
