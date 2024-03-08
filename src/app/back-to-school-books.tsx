"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import BookCard from "@/components/book-card";

const BOOKS = [
  {
    img: `/image/books/crystal.png`,
    category: "Jahid Siraz Chowdhury",
    title: "Raw Crystal",
    desc: "A heartwarming and humorous picture crystal that eases the jitters of starting hill.",
    price: "$909",
    offPrice: "$709",
  },
  {
    img: `/image/books/ruby.png`,
    category: "Kumarashwaran Vadevelu",
    title: "Raw Ruby",
    desc: "A funny and relatable novel about the challenges of navigating middle school.",
    price: "$809",
    offPrice: "$709",
  },
  {
    img: `/image/books/rbbb.png`,
    category: "Jahid Siraz Chowdhury",
    title: "Ruby",
    desc: "A practical guidebook that helps college students prepare for the transition to university.",
    price: "$909",
    offPrice: "$709",
  },
  {
    img: `/image/books/rbbb.png`,
    category: "Jahid Siraz Chowdhury",
    title: "Diamond",
    desc: "A valuable resource for high school seniors and college freshmen, offering effective study strategies.",
    price: "$990",
    offPrice: "$790",
  },
  {
    img: `/image/books/crystal.png`,
    category: "Kumarashwaran Vadevelu",
    title: "Raw Crystal",
    desc: "A classic reference book on grammar and writing skills, essential for high school and college students.",
    price: "$990",
    offPrice: "$709",
  },
  {
    img: `/image/books/rd.png`,
    category: "Jahid Siraz Chowdhury",
    title: "Raw Diamond",
    desc: "A classic reference book on grammar and writing skills, essential for high school and college students.",
    price: "$999",
    offPrice: "$799",
  },
];

const BOOKS_TABS = [
  "gems",
  "raw gems",
  "ruby",
  "diamond",
  "ring",
  "others",
];

export function BackToSchoolBooks() {
  const [activeTab, setActiveTab] = React.useState("history");

  return (
    <section className="px-8 pt-20 pb-10">
      <div className="container mx-auto mb-20 text-center">
        <Typography
        placeholder="Your Placeholder Value"
          variant="paragraph"
          color="blue-gray"
          className="mb-3 font-bold uppercase"
        >
          up to 40% OFF
        </Typography>
        <Typography
        placeholder="Your Placeholder Value" variant="h1" color="blue-gray" className="mb-2">
          Our Top Gems
        </Typography>
        <Typography
        placeholder="Your Placeholder Value"
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12"
        >
          At Ruby Gems & Diamonds, we are passionate about two things: exquisite gemstones and unparalleled craftsmanship. Whether you're searching for the perfect engagement ring, a statement necklace, or a pair of dazzling earrings, our collection has something to suit every taste and occasion.
        </Typography>
        <div className="mt-20 flex items-center justify-center">
          <Tabs value={activeTab} className="w-full lg:w-8/12">
            <TabsHeader
              className="h-12 bg-transparent"
              indicatorProps={{
                className: "!bg-gray-900 rounded-lg",
              }}
            >
              {BOOKS_TABS.map((book) => (
                <Tab
                  key={book}
                  value={book}
                  className={`!font-medium capitalize transition-all duration-300
                    ${activeTab === book ? "text-white" : "capitalize"}
                  `}
                  onClick={() => setActiveTab(book)}
                >
                  {book}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {BOOKS.map((props, key) => (
          <BookCard key={key} {...props} />
        ))}
      </div>
      <div className="grid place-items-center">
        <Button className="mt-32" variant="outlined">
          Show more
        </Button>
      </div>
    </section>
  );
}


export default BackToSchoolBooks;