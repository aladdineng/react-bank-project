import instance from ".";

const Register = async () => {
  const res = await instance.post("/regist/ username, image, password ");
  return res.data;
};

const Login = async () => {
  const res = await instance.post("/regist/ username, password ");
  return res.data;
};
i;
export { Register, Login };

// const register = async (userInfo) =>{
//     const fromData = new FromData();
//     for (const key in userInfo) FormData.append(key, userInfo[key]);
//     const  { data } = await instance.post(
//         "/mini-project/api/auth/register",
//         fromData
//     );
//     storeToken (data.storeToken);
//     return data;
// };

// const storeToken = (token) => {
//     localStorage.setItem("token", token);

// };

// export {register, storeToken};
