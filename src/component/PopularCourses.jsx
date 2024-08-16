import React, { useEffect, useState } from "react";
import CourseCard from "./snippets/CourseCard";
import SquareWithShadow from "./snippets/SquareWithShadow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import thumb1 from "../assets/thumbnail1.png";
import thumb2 from "../assets/thumbnail2.png";
import thumb3 from "../assets/thumbnail3.png";
import playButton from "../assets/playButton.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

let coursesData = [
  {
    id: 1,
    title: "Basics of learning team management",
    image: thumb1,
    icon: playButton,
    instructor: {
      name: "Jone Owel",
      role: "IT Manager",
      avatar: avatar1,
    },
    participants: 120,
    price: 120,
    videoCount: 25,
  },
  {
    id: 2,
    title: "Learn basic database structure",
    image: thumb2,
    icon: playButton,
    instructor: {
      name: "Roynaldo Jr",
      role: "Data Science",
      avatar: avatar2,
    },
    participants: 55,
    price: 180,
    videoCount: 20,
  },
  {
    id: 3,
    title: "Create dynamic website with basic php",
    image: thumb3,
    icon: playButton,
    instructor: {
      name: "Markus Low",
      role: "Programer",
      avatar: avatar3,
    },
    participants: 98,
    price: 135,
    videoCount: 20,
  },
];

function PopularCourses() {
  const [data, setData] = useState(coursesData);
  return (
    <section className="flex overflow-hidden flex-col h-auto px-[62px] lg:px-20 mx-auto py-20 w-full bg-[#245D51] relative">
      <SquareWithShadow
        color={"#CB8461"}
        className={
          "left-[40px] lg:left-[180px] top-[40px] lg:top-[80px] rotate-[120deg]"
        }
        size={"40px"}
      />
      <div className="flex flex-col self-end w-full">
        <header className="flex flex-wrap gap-5 justify-between ">
          <h2 className="text-md lg:text-4xl font-semibold text-white text-center mx-auto">
            Popular courses of the week
          </h2>
          <div className="flex absolute right-[30px] top-[40px] lg:top-auto opacity-70 lg:right-[200px] flex-col items-center self-end px-1 pt-2 mt-7 bg-orange-300 rounded-full h-[22px] w-[22px]">
            <div className="flex z-10 shrink-0 rounded-full bg-red-500 bg-opacity-70 h-[17px] w-[17px] sm:-mr-0.5" />
          </div>
        </header>
        <p className="mt-[30px] lg:mt-2.5 text-[13px] lg:text-base leading-[27px] lg:leading-9 text-center text-white text-opacity-60 w-full">
          List of the most popular lists that are often studied by our members
        </p>
      </div>
      <div className="mt-12 relative">
        <button
          onClick={() => {
            setData([
              {
                id: Date.now(),
                title: "Learn basic database structure",
                image: thumb2,
                icon: playButton,
                instructor: {
                  name: "Roynaldo Jr",
                  role: "Data Science",
                  avatar: avatar2,
                },
                participants: 55,
                price: 180,
                videoCount: 20,
              },
              ...data.slice(0, data.length - 1),
            ]);
          }}
          className="cursor-pointer justify-center absolute top-[210px] lg:top-[230px] left-[-60px] lg:left-[15px] z-[9999] items-center flex bg-[#ffffff] size-[50px] rounded-full border-[#F5F5F5] border-[4px]"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{
              width: "25px",
              height: "25px",
              color: "black",
            }}
          />
        </button>
        <button
          onClick={() => {
            setData([
              {
                id: Date.now(),
                title: "Learn basic database structure",
                image: thumb2,
                icon: playButton,
                instructor: {
                  name: "Roynaldo Jr",
                  role: "Data Science",
                  avatar: avatar2,
                },
                participants: 55,
                price: 180,
                videoCount: 20,
              },

              ...data.slice(0, data.length - 1),
            ]);
          }}
          className="justify-center absolute top-[210px] lg:top-[230px] right-[-60px] lg:right-[15px] z-[9999] items-center flex bg-[#245D51] size-[50px] rounded-full border-[#F5F5F5] border-[4px]"
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{
              width: "25px",
              height: "25px",
              color: "white",
            }}
          />
        </button>
        <div className="flex gap-5 flex-wrap justify-center items-center">
          <div className="absolute left-[-100vw] opacity-40">
            <CourseCard key={data[0].id} {...data[0]} />
          </div>
          <div className="absolute right-[-105vw] opacity-40">
            <CourseCard key={data[2].id} {...data[2]} />
          </div>
          {data.slice(0, screen.availWidth < 600 ? 1 : 3).map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCourses;
