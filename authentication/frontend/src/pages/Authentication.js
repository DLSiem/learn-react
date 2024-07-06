import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  console.log("action");
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode");
  console.log(mode);

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Invalid Routes" });
  }
  const data = await request.formData();

  console.log("data", data);

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  console.log("response ", response);

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  return redirect("/");
}
