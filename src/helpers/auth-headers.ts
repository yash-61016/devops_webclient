export function authHeader(): any {
  let auth_jwt: any = localStorage.getItem("token");

  if (auth_jwt) {
    return {
      Authorization: "Bearer " + auth_jwt,
      "Content-Type": "application/json",
    };
  } else {
    console.log("ERROR > unable to build header");
    return {};
  }
}
