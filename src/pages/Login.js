import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex row justify-around w-full items-center h-screen">
        {/*--------------------------------------------------- IMG -------------------------------------------------------- */}
        <div className="w-[500px] h-[600px]">
          <img src="https://img.freepik.com/premium-photo/bank-illustration-clip-art-vector_1003030-4868.jpg"></img>
        </div>
        {/*--------------------------------------------------- INPUT -------------------------------------------------------- */}
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "30px",
            }}
          >
            <h1 className="font-medium text-green-400">
              {" "}
              Log in to your account
            </h1>
            <h3>
              {"  "}
              If you do not have an account,
              <button>
                <h2 className="text-blue-500">Rejest here</h2>
              </button>
            </h3>
          </div>
          {/*--------------------------------------------------- USERNAME -------------------------------------------------------- */}
          <div style={{ padding: "10px" }}>
            <label
              htmlFor="Username"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="Username"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="Username"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Username
              </span>
            </label>
          </div>
          {/*--------------------------------------------------- PASSWORD -------------------------------------------------------- */}
          <div style={{ padding: "10px" }}>
            <label
              htmlFor="Passwprd"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="Password"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="Passwprd"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Passwprd
              </span>
            </label>
          </div>
          {/*--------------------------------------------------- LOG IN -------------------------------------------------------- */}
          <div style={{ padding: "20px" }}>
            <a
              className="inline-block rounded bg-blue-600 px-10 py-3 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring "
              href="#"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
