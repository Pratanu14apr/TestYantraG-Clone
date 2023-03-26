import React from "react";
import Heading from "./Heading";
import Input from "./Input";
import SUB from "./subscribe.module.css";
const Subscribe = () => {
  return (
    <section className={SUB.Subscribe}>
      <article>
        <aside className={SUB.content}>
          <Heading />
          <Input />
        </aside>
        <aside className={SUB.bottom}></aside>
      </article>
    </section>
  );
};

export default Subscribe;
