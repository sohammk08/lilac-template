import React from "react";

type Props = { hello: string };

function Contact({ hello }: Props) {
  return <div>{hello}</div>;
}

export default Contact;
