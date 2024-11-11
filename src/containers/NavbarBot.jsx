import React, { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="py-5 text-lg font-semibold flex justify-between flex-col mb-5 shadow-lg">
      <div className="px-60">
        <img
          className="w-40 mb-5"
          src="src/assets/clipart1161255.png"
          alt="Logo Tokopedia"
        />
      </div>
      <div>
        <div className="flex justify-center gap-10 flex-row">
          <button>HOME</button>

          <button>COMPANY</button>

          <div
            onMouseEnter={() => setOpenDropdown("COMUNITY")}
            className="relative"
          >
            <button>
              COMUNITY <i className="bi bi-chevron-down"></i>
            </button>
            {openDropdown === "COMUNITY" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute top-full mt-2 w-40 bg-white rounded-lg shadow-lg z-50"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Seller Story
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                >
                  Life at Tokopedia
                </a>
              </div>
            )}
          </div>

          {/* Dropdown for STORIES */}
          <div
            onMouseEnter={() => setOpenDropdown("STORIES")}
            className="relative"
          >
            <button>
              STORIES <i className="bi bi-chevron-down"></i>
            </button>
            {openDropdown === "STORIES" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute top-full mt-2 w-40 bg-white rounded-lg shadow-lg z-50"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Behind the Scenes
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-md"
                >
                  Innovation
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-md"
                >
                  Milestone
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-md"
                >
                  Operation
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-md"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-md"
                >
                  Social Impact
                </a>
              </div>
            )}
          </div>

          {/* Dropdown for INSIGHT */}
          <div
            onMouseEnter={() => setOpenDropdown("INSIGHT")}
            className="relative"
          >
            <button>
              INSIGHT <i className="bi bi-chevron-down"></i>
            </button>
            {openDropdown === "INSIGHT" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute top-full mt-2 w-40 bg-white rounded-lg shadow-lg z-50"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Market Trends
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                >
                  Reports
                </a>
              </div>
            )}
          </div>

          <button>TOP LIST</button>

          {/* Dropdown for NEWSROOM */}
          <div
            onMouseEnter={() => setOpenDropdown("NEWSROOM")}
            className="relative"
          >
            <button>
              NEWSROOM <i className="bi bi-chevron-down"></i>
            </button>
            {openDropdown === "NEWSROOM" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute top-full mt-2 w-40 bg-white rounded-lg shadow-lg z-50"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Press Releases
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                >
                  Media Contacts
                </a>
              </div>
            )}
          </div>

          <button>KALKUPEDIA</button>
          <i className="bi bi-search"></i>
        </div>
      </div>
    </div>
  );
}
