import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import ContactInformation from "../contactInformation/ContactInformation";
import { logoDefaul } from "src/utils/data";

function Header() {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const UINotLogin = () => {
    return (
      <div className="flex pb-2 pt-3">
        <Typography
          align="center"
          sx={{
            fontSize: "16px",
            verticalAlign: "center",
            fontWeight: "bold",
            margin: "auto",
          }}
          className="hidden py-1 pr-2 md:block"
        >
          <Link to="/login">Đăng nhập</Link>
        </Typography>
        <Typography
          align="center"
          sx={{
            margin: "0px 8px",
            fontSize: "16px",
            verticalAlign: "center",
            fontWeight: "bold",
          }}
          className="hidden py-1 pl-2 md:block"
        >
          <Link to="/register">Đăng ký</Link>
        </Typography>
        <div className=" m-auto items-center  md:hidden">
          <Link to="/login">
            <p className="pb-2 text-sm font-bold">Đăng nhập</p>
          </Link>
        </div>
      </div>
    );
  };
  // =================
  return (
    <Box
      sx={{
        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
      }}
      className="bg-[var(--content-color)]"
    >
      <ContactInformation />
      <div className=" flex justify-between pt-2 max-md:px-5 md:px-20 ">
        <div className="hidden max-sm:block"></div>
        <div className="">
          <Link to={"/"}>
            <img
              alt="Logo"
              src={logoDefaul}
              className="max-sm:ml-5 max-sm:h-[40px] max-sm:w-[80px] sm:h-[50px] sm:w-[140px]"
            />
          </Link>
        </div>
        <div className="">
          <form onSubmit={submitHandler}>
            <div className="flex justify-center">
              <TextField size="small" className="bg-white" label="Tìm kiếm" />
              <button
                type="submit"
                style={{
                  borderRadius: "0px 4px 4px 0px",
                }}
                className="bg-blue-500 text-black px-3.5 hover:bg-blue-400"
              >
                Tìm
              </button>
            </div>
          </form>
        </div>

        <UINotLogin />
      </div>
    </Box>
  );
}
export default Header;
