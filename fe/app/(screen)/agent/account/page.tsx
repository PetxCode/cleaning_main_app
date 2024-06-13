"use client";
import Button from "@/app/components/Button";
import React from "react";

const page = () => {
  return (
    <div>
      <br />
      <br />
      <div>This is the Account screen</div>
      <br />
      <br />
      <Button
        onClick={() => {
          console.log("this is the Account screen");
        }}
      >
        Click Me
      </Button>
      <br />
      <br />
      <Button
        variant="warn"
        size="bg"
        onClick={() => {
          console.log("this is the Account screen");
        }}
      >
        Click Me Now
      </Button>
      <br />
      <br />
      <Button
        onClick={() => {
          console.log("this is the Account screen");
        }}
        className=""
      >
        Click Me Here
      </Button>
    </div>
  );
};

export default page;
