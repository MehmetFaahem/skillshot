import React, { useEffect, useState } from "react";
import CourseCard from "./snippets/CourseCard";
import SquareWithShadow from "./snippets/SquareWithShadow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

let coursesData = [
  {
    id: 1,
    title: "Basics of learning team management",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ca4f0e6a3ab73937ea1c2de9081e0518eef544b2a101b84319d81a3679d50be0?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fce04988215957a23f97e2a35bd341725cfb2cbc5cede69e5e89261d2c61c79b?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    instructor: {
      name: "Jone Owel",
      role: "IT Manager",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7b978d1629b3ae63c0f5157b81eeb14cec772cc480df09e210298254a62fe08b?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    },
    participants: 120,
    price: 120,
    videoCount: 25,
  },
  {
    id: 2,
    title: "Learn basic database structure",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c199796b076522e1164c54b28e9918206b3fe9ec2b06b9a75ba01b71be99ebbe?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/235df2766ff0343318a58f4e3872e586b26f11d33a6965052d29b3eeeeac357f?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    instructor: {
      name: "Roynaldo Jr",
      role: "Data Science",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c9ce652ac162aff306c3dd00eb621fb0e7dd10918cae213be079b8aa12b49d59?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    },
    participants: 55,
    price: 180,
    videoCount: 20,
  },
  {
    id: 3,
    title: "Create dynamic website with basic php",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0ec0b310b0e79333fca6df56fdd2a4825ad6ba36719db843a03b4af82bcffd2a?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ac23e136c7485693dff39e0cca8089506751e58806e847ac12bed46452ea856?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    instructor: {
      name: "Markus Low",
      role: "Programer",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d3c774a1b8848aa63411d935ff97641aad594daf9507721090a64aa6fd141a37?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    },
    participants: 98,
    price: 135,
    videoCount: 20,
  },
];

function PopularCourses() {
  const [data, setData] = useState(coursesData);
  return (
    <section className="flex flex-col h-auto px-20 mx-auto py-20 w-full bg-[#245D51] relative">
      <SquareWithShadow
        color={"#CB8461"}
        className={"left-[180px] top-[80px] rotate-[120deg]"}
        size={"40px"}
      />
      <div className="flex flex-col self-end w-full">
        <header className="flex flex-wrap gap-5 justify-between ">
          <h2 className="text-4xl font-semibold text-white text-center mx-auto">
            Popular courses of the week
          </h2>
          <div className="flex absolute right-[200px] flex-col items-center self-end px-1 pt-2 mt-7 bg-orange-300 rounded-full h-[22px] w-[22px]">
            <div className="flex z-10 shrink-0 rounded-full bg-red-500 bg-opacity-70 h-[17px] w-[17px] sm:-mr-0.5" />
          </div>
        </header>
        <p className="mt-2.5 text-base leading-9 text-center text-white text-opacity-60 w-full">
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
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/c199796b076522e1164c54b28e9918206b3fe9ec2b06b9a75ba01b71be99ebbe?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
                icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/235df2766ff0343318a58f4e3872e586b26f11d33a6965052d29b3eeeeac357f?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
                instructor: {
                  name: "Roynaldo Jr",
                  role: "Data Science",
                  avatar:
                    "https://cdn.builder.io/api/v1/image/assets/TEMP/c9ce652ac162aff306c3dd00eb621fb0e7dd10918cae213be079b8aa12b49d59?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
                },
                participants: 55,
                price: 180,
                videoCount: 20,
              },
              ...data.slice(0, data.length - 1),
            ]);
          }}
          className="cursor-pointer justify-center absolute top-[230px] left-[25px] z-[9999] items-center flex bg-[#ffffff] size-[50px] rounded-full border-[#F5F5F5] border-[4px]"
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
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/0ec0b310b0e79333fca6df56fdd2a4825ad6ba36719db843a03b4af82bcffd2a?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
                icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/235df2766ff0343318a58f4e3872e586b26f11d33a6965052d29b3eeeeac357f?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
                instructor: {
                  name: "Roynaldo Jr",
                  role: "Data Science",
                  avatar:
                    "https://cdn.builder.io/api/v1/image/assets/TEMP/c9ce652ac162aff306c3dd00eb621fb0e7dd10918cae213be079b8aa12b49d59?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
                },
                participants: 55,
                price: 180,
                videoCount: 20,
              },

              ...data.slice(0, data.length - 1),
            ]);
          }}
          className="justify-center absolute top-[230px] right-[25px] z-[9999] items-center flex bg-[#245D51] size-[50px] rounded-full border-[#F5F5F5] border-[4px]"
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
          {data.slice(0, 3).map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCourses;
