import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";

function Contacts() {
  const [listContacts] = useState([
    {
      title: "Discord ",
      value: "coder_kid",
    },
    {
      title: "Email",
      value: "theunlisted07@gmail.com",
    },
    {
      title: "",
      value: "@Coderkid.web",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="contacts" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}I AM ALWAYS LOOKING FORWARD TO LEARNING NEW THINGS, AND
        MEETING NEW PEOPLE!!
      </div>

      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className="item" key={key}>
            <h3>{value.title}</h3>
            <div>{value.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Contacts;
