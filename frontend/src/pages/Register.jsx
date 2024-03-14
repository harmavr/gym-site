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
        <div className="firstName">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" required />
        </div>
        <div className="lastName">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" required />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="mobilePhone">
          <label htmlFor="mobilePhone">Mobile Phone</label>
          <input type="number" name="mobilePhone" required />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="rePassword">
          <label htmlFor="rePassword">Retype Password</label>
          <input type="password" name="rePassword" required />
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
