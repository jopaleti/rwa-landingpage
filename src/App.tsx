import "./app.scss";
function App() {
  return (
    <>
      <div className="__half_background">
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                MY HOTEL
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Connect
              </button>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="mt-6 mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h1 className="font-bold">Book your Hotel with Tokens</h1>
              <div className="mt-8 __sub_text">
                <h3 className="font-semibold">Tokenize house bookings,</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                  doloribus aut expedita.
                </p>
              </div>
              <div className="btn-group mt-6">
                <div>
                  <button
                    type="button"
                    className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-6 h-5 me-2 -ms-1"
                      viewBox="0 0 2405 2501"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <g clip-path="url(#clip0_1512_1323)">
                        {" "}
                        <path
                          d="M2278.79 1730.86L2133.62 2221.69L1848.64 2143.76L2278.79 1730.86Z"
                          fill="#E4761B"
                          stroke="#E4761B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1848.64 2143.76L2123.51 1767.15L2278.79 1730.86L1848.64 2143.76Z"
                          fill="#E4761B"
                          stroke="#E4761B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M2065.2 1360.79L2278.79 1730.86L2123.51 1767.15L2065.2 1360.79ZM2065.2 1360.79L2202.64 1265.6L2278.79 1730.86L2065.2 1360.79Z"
                          fill="#F6851B"
                          stroke="#F6851B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1890.29 1081.17L2285.34 919.338L2265.7 1007.99L1890.29 1081.17ZM2253.21 1114.48L1890.29 1081.17L2265.7 1007.99L2253.21 1114.48Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M2253.21 1114.48L2202.64 1265.6L1890.29 1081.17L2253.21 1114.48ZM2332.34 956.82L2265.7 1007.99L2285.34 919.338L2332.34 956.82ZM2253.21 1114.48L2265.7 1007.99L2318.65 1052.01L2253.21 1114.48Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1542.24 2024.17L1641 2055.7L1848.64 2143.75L1542.24 2024.17Z"
                          fill="#E2761B"
                          stroke="#E2761B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M2202.64 1265.6L2253.21 1114.48L2296.64 1147.8L2202.64 1265.6ZM2202.64 1265.6L1792.71 1130.55L1890.29 1081.17L2202.64 1265.6Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1987.86 617.696L1890.29 1081.17L1792.71 1130.55L1987.86 617.696Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M2285.34 919.338L1890.29 1081.17L1987.86 617.696L2285.34 919.338Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1987.86 617.696L2400.16 570.1L2285.34 919.338L1987.86 617.696Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M2202.64 1265.6L2065.2 1360.79L1792.71 1130.55L2202.64 1265.6Z"
                          fill="#F6851B"
                          stroke="#F6851B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M2382.31 236.33L2400.16 570.1L1987.86 617.696L2382.31 236.33Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M2382.31 236.33L1558.3 835.45L1547.59 429.095L2382.31 236.33Z"
                          fill="#E2761B"
                          stroke="#E2761B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M934.789 380.309L1547.59 429.095L1558.3 835.449L934.789 380.309Z"
                          fill="#F6851B"
                          stroke="#F6851B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1792.71 1130.55L1558.3 835.449L1987.86 617.696L1792.71 1130.55Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1792.71 1130.55L2065.2 1360.79L1682.65 1403.04L1792.71 1130.55Z"
                          fill="#E4761B"
                          stroke="#E4761B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1682.65 1403.04L1558.3 835.449L1792.71 1130.55L1682.65 1403.04Z"
                          fill="#E4761B"
                          stroke="#E4761B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1987.86 617.696L1558.3 835.45L2382.31 236.33L1987.86 617.696Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M940.144 2134.24L1134.69 2337.11L869.939 2096.16L940.144 2134.24Z"
                          fill="#C0AD9E"
                          stroke="#C0AD9E"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1848.64 2143.75L1940.86 1793.33L2123.51 1767.15L1848.64 2143.75Z"
                          fill="#CD6116"
                          stroke="#CD6116"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M151.234 1157.92L487.978 803.917L194.666 1115.67L151.234 1157.92Z"
                          fill="#E2761B"
                          stroke="#E2761B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M2123.51 1767.15L1940.86 1793.33L2065.2 1360.79L2123.51 1767.15ZM1558.3 835.449L1230.48 824.74L934.789 380.309L1558.3 835.449Z"
                          fill="#F6851B"
                          stroke="#F6851B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M2065.2 1360.79L1940.86 1793.33L1930.74 1582.12L2065.2 1360.79Z"
                          fill="#E4751F"
                          stroke="#E4751F"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1682.65 1403.04L2065.2 1360.79L1930.74 1582.12L1682.65 1403.04Z"
                          fill="#CD6116"
                          stroke="#CD6116"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1230.48 824.74L1558.3 835.449L1682.65 1403.04L1230.48 824.74Z"
                          fill="#F6851B"
                          stroke="#F6851B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1230.48 824.74L345.784 6.08252L934.79 380.309L1230.48 824.74ZM934.195 2258.58L165.513 2496.56L12.0146 1910.53L934.195 2258.58Z"
                          fill="#E4761B"
                          stroke="#E4761B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M265.465 1304.27L555.803 1076.41L799.14 1132.93L265.465 1304.27Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M799.139 1132.93L555.803 1076.41L686.098 538.567L799.139 1132.93Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M194.666 1115.67L555.803 1076.41L265.465 1304.27L194.666 1115.67Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1930.74 1582.12L1780.81 1506.56L1682.65 1403.04L1930.74 1582.12Z"
                          fill="#CD6116"
                          stroke="#CD6116"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M194.666 1115.67L169.083 980.618L555.803 1076.41L194.666 1115.67Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1749.88 1676.72L1780.81 1506.56L1930.74 1582.12L1749.88 1676.72Z"
                          fill="#233447"
                          stroke="#233447"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1940.86 1793.33L1749.88 1676.72L1930.74 1582.12L1940.86 1793.33Z"
                          fill="#F6851B"
                          stroke="#F6851B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M555.803 1076.41L169.082 980.618L137.55 866.982L555.803 1076.41ZM686.098 538.567L555.803 1076.41L137.55 866.982L686.098 538.567ZM686.098 538.567L1230.48 824.74L799.139 1132.93L686.098 538.567Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M799.14 1132.93L1230.48 824.74L1422.65 1411.96L799.14 1132.93ZM1422.65 1411.96L826.508 1399.47L799.14 1132.93L1422.65 1411.96Z"
                          fill="#E4761B"
                          stroke="#E4761B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M265.465 1304.27L799.14 1132.93L826.508 1399.47L265.465 1304.27ZM1682.65 1403.04L1422.65 1411.96L1230.48 824.74L1682.65 1403.04Z"
                          fill="#F6851B"
                          stroke="#F6851B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1780.81 1506.56L1749.88 1676.72L1682.65 1403.04L1780.81 1506.56Z"
                          fill="#CD6116"
                          stroke="#CD6116"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M345.784 6.08252L1230.48 824.74L686.098 538.567L345.784 6.08252Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M12.0146 1910.53L758.088 1879.59L934.195 2258.58L12.0146 1910.53Z"
                          fill="#E4761B"
                          stroke="#E4761B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M934.194 2258.58L758.088 1879.59L1124.58 1861.75L934.194 2258.58Z"
                          fill="#CD6116"
                          stroke="#CD6116"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1749.88 1676.72L1940.86 1793.33L2046.16 2041.42L1749.88 1676.72ZM826.508 1399.47L12.0146 1910.53L265.465 1304.27L826.508 1399.47ZM758.088 1879.59L12.0146 1910.53L826.508 1399.47L758.088 1879.59ZM1682.65 1403.04L1731.43 1580.33L1495.83 1594.02L1682.65 1403.04ZM1495.83 1594.02L1422.65 1411.96L1682.65 1403.04L1495.83 1594.02Z"
                          fill="#F6851B"
                          stroke="#F6851B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1134.69 2337.11L934.194 2258.58L1631.48 2375.79L1134.69 2337.11Z"
                          fill="#C0AD9E"
                          stroke="#C0AD9E"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M265.465 1304.27L151.234 1157.91L194.666 1115.67L265.465 1304.27Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1710.61 2288.92L1631.48 2375.79L934.194 2258.58L1710.61 2288.92Z"
                          fill="#D7C1B3"
                          stroke="#D7C1B3"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1748.09 2075.93L934.194 2258.58L1124.58 1861.75L1748.09 2075.93Z"
                          fill="#E4761B"
                          stroke="#E4761B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M934.194 2258.58L1748.09 2075.93L1710.61 2288.92L934.194 2258.58Z"
                          fill="#D7C1B3"
                          stroke="#D7C1B3"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M137.55 866.982L110.777 409.462L686.098 538.567L137.55 866.982ZM194.665 1115.67L115.536 1035.35L169.082 980.618L194.665 1115.67Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1289.38 1529.76L1422.65 1411.96L1403.61 1699.92L1289.38 1529.76Z"
                          fill="#CD6116"
                          stroke="#CD6116"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1422.65 1411.96L1289.38 1529.76L1095.43 1630.31L1422.65 1411.96Z"
                          fill="#CD6116"
                          stroke="#CD6116"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M2046.16 2041.42L2009.87 2014.65L1749.88 1676.72L2046.16 2041.42Z"
                          fill="#F6851B"
                          stroke="#F6851B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1095.43 1630.31L826.508 1399.47L1422.65 1411.96L1095.43 1630.31Z"
                          fill="#CD6116"
                          stroke="#CD6116"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1403.61 1699.92L1422.65 1411.96L1495.83 1594.02L1403.61 1699.92Z"
                          fill="#E4751F"
                          stroke="#E4751F"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M89.3589 912.199L137.55 866.982L169.083 980.618L89.3589 912.199Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1403.61 1699.92L1095.43 1630.31L1289.38 1529.76L1403.61 1699.92Z"
                          fill="#233447"
                          stroke="#233447"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M686.098 538.567L110.777 409.462L345.784 6.08252L686.098 538.567Z"
                          fill="#763D16"
                          stroke="#763D16"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1631.48 2375.79L1664.2 2465.03L1134.69 2337.12L1631.48 2375.79Z"
                          fill="#C0AD9E"
                          stroke="#C0AD9E"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1124.58 1861.75L1095.43 1630.31L1403.61 1699.92L1124.58 1861.75Z"
                          fill="#F6851B"
                          stroke="#F6851B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M826.508 1399.47L1095.43 1630.31L1124.58 1861.75L826.508 1399.47Z"
                          fill="#E4751F"
                          stroke="#E4751F"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1495.83 1594.02L1731.43 1580.33L2009.87 2014.65L1495.83 1594.02ZM826.508 1399.47L1124.58 1861.75L758.088 1879.59L826.508 1399.47Z"
                          fill="#F6851B"
                          stroke="#F6851B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1495.83 1594.02L1788.55 2039.64L1403.61 1699.92L1495.83 1594.02Z"
                          fill="#E4751F"
                          stroke="#E4751F"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1403.61 1699.92L1788.55 2039.64L1748.09 2075.93L1403.61 1699.92Z"
                          fill="#F6851B"
                          stroke="#F6851B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1748.09 2075.93L1124.58 1861.75L1403.61 1699.92L1748.09 2075.93ZM2009.87 2014.65L1788.55 2039.64L1495.83 1594.02L2009.87 2014.65Z"
                          fill="#F6851B"
                          stroke="#F6851B"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M2068.18 2224.07L1972.99 2415.05L1664.2 2465.03L2068.18 2224.07ZM1664.2 2465.03L1631.48 2375.79L1710.61 2288.92L1664.2 2465.03Z"
                          fill="#C0AD9E"
                          stroke="#C0AD9E"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1710.61 2288.92L1768.92 2265.72L1664.2 2465.03L1710.61 2288.92ZM1664.2 2465.03L1768.92 2265.72L2068.18 2224.07L1664.2 2465.03Z"
                          fill="#C0AD9E"
                          stroke="#C0AD9E"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M2009.87 2014.65L2083.05 2059.27L1860.54 2086.04L2009.87 2014.65Z"
                          fill="#161616"
                          stroke="#161616"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1860.54 2086.04L1788.55 2039.64L2009.87 2014.65L1860.54 2086.04ZM1834.96 2121.15L2105.66 2088.42L2068.18 2224.07L1834.96 2121.15Z"
                          fill="#161616"
                          stroke="#161616"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M2068.18 2224.07L1768.92 2265.72L1834.96 2121.15L2068.18 2224.07ZM1768.92 2265.72L1710.61 2288.92L1748.09 2075.93L1768.92 2265.72ZM1748.09 2075.93L1788.55 2039.64L1860.54 2086.04L1748.09 2075.93ZM2083.05 2059.27L2105.66 2088.42L1834.96 2121.15L2083.05 2059.27Z"
                          fill="#161616"
                          stroke="#161616"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1834.96 2121.15L1860.54 2086.04L2083.05 2059.27L1834.96 2121.15ZM1748.09 2075.93L1834.96 2121.15L1768.92 2265.72L1748.09 2075.93Z"
                          fill="#161616"
                          stroke="#161616"
                          stroke-width="5.94955"
                        />{" "}
                        <path
                          d="M1860.54 2086.04L1834.96 2121.15L1748.09 2075.93L1860.54 2086.04Z"
                          fill="#161616"
                          stroke="#161616"
                          stroke-width="5.94955"
                        />{" "}
                      </g>{" "}
                      <defs>
                        {" "}
                        <clipPath id="clip0_1512_1323">
                          {" "}
                          <rect
                            width="2404"
                            height="2500"
                            fill="white"
                            transform="translate(0.519043 0.132812)"
                          />{" "}
                        </clipPath>{" "}
                      </defs>{" "}
                    </svg>
                    Book Now
                  </button>
                </div>
                <button
                  type="button"
                  className="text-white mt-4 bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 me-2 -ms-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="bitcoin"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"
                    ></path>
                  </svg>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="py-8 mx-auto max-w-screen-xl grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-60 w-auto">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-52128141/original/2f885a34-191b-4b95-9797-799cd514d721.jpeg?im_w=720"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">LaxToken</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-60 w-auto">
            <img
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-1077458141923207290/original/d2024ce4-69bb-4599-a1e4-f84779f14fdd.jpeg?im_w=720"
              alt="Olive drab green insulated bottle with flared screw lid and flat top."
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-60 w-auto">
            <img
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-1161447484734690123/original/cbd576cc-3e2c-4318-bc28-d324fd1fdb7f.jpeg?im_w=720"
              alt="Person using a pen to cross a task off a productivity paper card."
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-60 w-auto">
            <img
              src="https://a0.muscache.com/im/pictures/474c1f84-f701-4ee2-8de0-a6cc0fe65237.jpg?im_w=720"
              alt="Hand holding black machined steel mechanical pencil with brass tip and top."
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">
            Machined Mechanical Pencil
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
      </div>
    </>
  );
}

export default App;
