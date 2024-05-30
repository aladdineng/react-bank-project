import instance from ".";

const register = async () => {
  const res = await instance.post("/regist/ username, image, password ");
  return res.data;
};

const login = async () => {
  const res = await instance.post("/regist/ username, password ");
  return res.data;
};
export { register, login };

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
