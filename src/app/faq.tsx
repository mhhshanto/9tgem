"use client";
import React from "react";

import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
const FAQS = [
  {
    title: "Are your gemstones and diamonds ethically sourced?",
    desc: "Yes, we are committed to ethical sourcing practices. Our gemstones and diamonds are carefully selected from suppliers who adhere to ethical and responsible mining standards, ensuring that our customers can enjoy their beautiful pieces with a clear conscience.",
  },
  {
    title:
      "Can I customize a piece of jewelry with my preferred gemstone or design?",
    desc: "Absolutely! We offer custom design services to bring your unique vision to life. Whether you have a specific gemstone in mind or want to create a personalized design, our expert craftsmen are here to help you create a one-of-a-kind piece.",
  },
  {
    title: "What is the difference between natural and lab-created gemstones?    ",
    desc: "Natural gemstones are formed in the earth over time, while lab-created gemstones are synthesized in a controlled environment. Both options have their merits, and we provide information to help you make an informed choice based on your preferences and budget.",
  },
  {
    title: "How do I care for and maintain my gemstone jewelry?    ",
    desc: "Proper care ensures the longevity of your gemstone jewelry. We provide care guidelines, including recommendations for cleaning, storing, and protecting your pieces. Following these guidelines will help keep your gemstones and diamonds looking radiant for years to come.    ",
  },
  {
    title: "What is your return and exchange policy?",
    desc: "We want you to be completely satisfied with your purchase. Our return and exchange policy provides details on how to initiate returns or exchanges, including any applicable timeframes and conditions. Please review our policy to understand the process and ensure a smooth experience.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full max-w-2xl !text-gray-500"
          >
         Discover a world of beauty and brilliance in our curated collection of natural gemstones and diamonds
          </Typography>
        </div>
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;
