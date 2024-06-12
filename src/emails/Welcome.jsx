// eslint-disable-next-line no-unused-vars
import React from "react";
import { Html, Button } from "@react-email/components";

export default function WelcomeEmail({ firstName }) {
  return (
    <Html>
      <div>
        <h1>Hello, {firstName}</h1>
        <p>Thank you for subscribing!</p>
        <Button href="https://boisterous-youtiao-8d497f.netlify.app/" style={{ background: "#000", color: "#fff", padding: "12px 20px" }}>
          Click me
        </Button>
      </div>
    </Html>
  );
}