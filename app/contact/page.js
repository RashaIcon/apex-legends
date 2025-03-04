"use client";
import React, { useState } from "react";
import Container1 from "../components/Container1";
import { ArrowBigRight, ArrowRight, BarChart2Icon, Equal } from "lucide-react";
import emailjs from "@emailjs/browser";

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    emailjs.send(
      "service_o7uak72",
      "template_kei538v",
      {
        from_name: form.name,
        to_name: "Rasha",
        email: form.email,
        subject: form.subject,
        message: form.message,
      },

      "m2yl7Q6yBSgWHp4D3"
    );
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  return (
    <section className="bg-[#A31621]  ">
      <Container1 className={"pt-28 pb-20 md:pt-60 md:pb-20 !max-w-[1400px]"}>
        <div className="pb-8 md:pb-10 border-b border-b-[#EAECC6]">
          <div className="text-[#FCF7F8]   font-pira  text-5xl sm:text-6xl md:text-7xl lg:text-9xl">
            Let's Connect!
          </div>
          <h1 className="max-w-5xl text-[#EAECC6] mt-3 font-bil text-sm sm:text-lg md:text-xl lg:text-2xl">
            Whether you're looking to collaborate on a project, need a solution
            to a challenging problem, or just want to talk tech, feel free to
            reach out. Together, we can turn ideas into reality.
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="main">
          <div className="1 flex flex-col py-10 border-b border-b-[#EAECC6]">
            <label className="text-[#FCF7F8] font-ox text-xl md:text-2xl flex">
              <h1 className="text-[#EAECC6]  font-ox font-bold text-xl mr-6">
                01.
              </h1>
              What's your name?
            </label>
            <div className="flex items-center gap-x-8 mt-2">
              <p>
                <ArrowRight className="text-[#EAECC6] " />
              </p>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Cristiano Ronaldo"
                className="w-[1300px] h-10 f text-xl text-[#FCF7F8]  font-bil placeholder:text-[#EAECC6] placeholder:opacity-40 outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="1 flex flex-col py-10 border-b border-b-[#EAECC6]">
            <label className="text-[#FCF7F8] font-ox text-xl md:text-2xl flex">
              <h1 className="text-[#EAECC6]  font-ox font-bold text-xl mr-6">
                02.
              </h1>
              What’s your email?
            </label>
            <div className="flex items-center gap-x-8 mt-2">
              <p>
                <ArrowRight className="text-[#EAECC6] " />
              </p>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="ronaldogoat69699@gmail.com"
                className="w-[1300px] h-10 f text-xl text-[#FCF7F8]  font-bil placeholder:text-[#EAECC6] placeholder:opacity-40 outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="1 flex flex-col py-10 border-b border-b-[#EAECC6]">
            <label className="text-[#FCF7F8] font-ox text-xl md:text-2xl flex ">
              <h1 className="text-[#EAECC6]  font-ox font-bold text-xl mr-6">
                03.
              </h1>
              What specific area or task do you need help with?
            </label>
            <div className="flex items-center gap-x-8 mt-2">
              <p>
                <ArrowRight className="text-[#EAECC6] " />
              </p>
              <input
                required
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Web Development, UI/UX Design, etc."
                className="w-[1300px] h-10 f text-xl text-[#FCF7F8]  font-bil placeholder:text-[#EAECC6] placeholder:opacity-40 outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="1 flex flex-col py-10 border-b border-b-[#EAECC6]">
            <label className="text-[#FCF7F8] font-ox text-xl md:text-2xl flex">
              <h1 className="text-[#EAECC6]  font-ox font-bold text-xl mr-6">
                04.
              </h1>
              Your message
            </label>
            <div className="flex items-center gap-x-8 mt-2">
              <p>
                <ArrowRight className="text-[#EAECC6] " />
              </p>
              <textarea
                required
                type="text"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Hey, I'm looking for a developer to help me with my project. I need a website that can do this and that. Can you help me?"
                className="w-[1300px] h-40 md:h-10 f text-xl text-[#FCF7F8]  font-bil placeholder:text-[#EAECC6] placeholder:opacity-40 outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 md:mt-20 ">
            <button className="bg-[#EAECC6] transition-all ease-in-out duration-300 border-2 border-[#EAECC6] hover:text-[#A31621] hover:bg-[#FCF7F8] py-1 md:py-3 rounded-full font-semibold  font-ox text-xl md:text-2xl text-[#A31621] px-4 md:px-14 ">
              Submit
            </button>
          </div>
        </form>
      </Container1>
    </section>
  );
};
// color pallete #FCF7F8 #A31621 #EAECC6
export default page;
