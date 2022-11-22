export default {
  login() {},
  async signup(context, payload) {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCTdYpxV8DotU_uzPWM2PgUQx9hUGcZJWg`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.log(data);
      throw new Error(data.message || "Failed to authenticate");
    }

		console.log(data);
		context.commit("setUser", {
      token: data.idToken,
      userId: data.localId,
      tokenExpiration: data.expiresIn,
    });
  },
};
