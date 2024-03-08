"use client";

import React from "react";
import CategoryCard from "@/components/category-card";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const CATEGORIES = [
  {
    img: "/image/blogs/diamond.jpg",
    icon: HeartIcon,
    title: "Diamonds",
    desc: "up to 10% OFF",
  },
  {
    img: "/image/blogs/sapp.jpg",
    icon: PuzzlePieceIcon,
    title: "Sapphire",
    desc: "up to 40% OFF",
  },
  {
    img: "/image/blogs/ruby.jpg",
    icon: GlobeEuropeAfricaIcon,
    title: "Ruby",
    desc: "up to 20% OFF",
  },
  {
    img: "/image/blogs/eme.jpg",
    icon: MicrophoneIcon,
    title: "Emerald",
    desc: "up to 15% OFF",
  },
];

export function TopBookCategories() {
  return (
    <section className="container mx-auto px-8 pb-20 pt-20 lg:pt-0">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Top Gem Categories
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
        Dive into a world of timeless elegance and enchantment.
        world of timeless Dive into a world of timeless elegance and enchantment. elegance and enchantment.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography color="white" className="text-xs font-bold opacity-50">
              up to 40% OFF
            </Typography>
            <Typography variant="h4" className="mt-9" color="white">
              Top selling Gems
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
             Dive into a world of timeless elegance and enchantment. Discover the allure of our handpicked gems, each a unique masterpiece waiting to adorn your life.
            </Typography>
            <Button size="sm" color="white">
              Read More
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopBookCategories;
