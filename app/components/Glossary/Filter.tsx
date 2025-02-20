"use client";
import React, { useState, useEffect, ReactElement, useMemo } from "react";
import Image from "next/image";
import lfbef from "@/public/assets/images/home/leaf.svg";
import Searchresult from "./Searchresult";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";
import useSWR from "swr";

const Filter = () => {


  const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

  const { data } = useSWR('/api/admin/glossary', fetcher)


  // const [sections, setSections] = useState([])
  // const [activeSession,setActiveSection] = useState(null)
  // const [items,setItems] = useState([])

  // useEffect(()=>{
  //   console.log(data && data.glossary && data.glossary.filter((item:{alphabet:string})=>item.alphabet=="A").map((item:{contents:string[]})=>item.contents))
  //   setFilteredData(()=>(
  //     data && data.glossary && data.glossary.filter((item:{alphabet:string})=>item.alphabet=="A")
  //   ))
  //   // console.log(filteredData && filteredData.map((item)=>(
  //   //   item.contents
  //   // )))
  // },[data])

  const menuforA = {
    alphabet: "A",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "A")
      .flatMap((item:{contents:string[]}) => item.contents),  // Flatten the contents array
  };

  const menuforB = {
    alphabet: "B",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "B")
      .flatMap((item:{contents:string[]}) => item.contents),  // Flatten the contents array
  };
  const menuforC = {
    alphabet: "C",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "C")
      .flatMap((item:{contents:string[]}) => item.contents),  // Flatten the contents array
  };
  const menuforD = {
    alphabet: "D",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "D")
      .flatMap((item:{contents:string[]}) => item.contents),  // Flatten the contents array
  };
  const menuforE = {
    alphabet: "E",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "E")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforF = {
    alphabet: "F",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "F")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforG = {
    alphabet: "G",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "G")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforH = {
    alphabet: "H",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "H")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforI = {
    alphabet: "I",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "I")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforJ = {
    alphabet: "J",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "J")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforK = {
    alphabet: "K",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "K")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforL = {
    alphabet: "L",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "L")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforM = {
    alphabet: "M",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "M")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforN = {
    alphabet: "N",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "N")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforO = {
    alphabet: "O",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "O")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforP = {
    alphabet: "P",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "P")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforQ = {
    alphabet: "Q",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "Q")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforR = {
    alphabet: "R",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "R")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforS = {
    alphabet: "S",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "S")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforT = {
    alphabet: "T",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "T")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforU = {
    alphabet: "U",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "U")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforV = {
    alphabet: "V",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "V")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforW = {
    alphabet: "W",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "W")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforX = {
    alphabet: "X",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "X")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforY = {
    alphabet: "Y",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "Y")
      .flatMap((item: { contents: string[] }) => item.contents),
  };

  const menuforZ = {
    alphabet: "Z",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "Z")
      .flatMap((item: { contents: string[] }) => item.contents),
  };
  const menuforhash = {
    alphabet: "#",
    items: data?.glossary
      ?.filter((item: { alphabet: string }) => item.alphabet === "#")
      .flatMap((item: { contents: string[] }) => item.contents),
  };


  // const alphabet = [
  //   ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
  //   "#",
  // ];
  // const [activeLetter, setActiveLetter] = useState<string>("");
  const [isSticky, setIsSticky] = useState(false);






  const componentsList = [
    { id: 1, name: "A", component: <Searchresult itemdata={menuforA} /> },
    { id: 2, name: "B", component: <Searchresult itemdata={menuforB} /> },
    { id: 3, name: "C", component: <Searchresult itemdata={menuforC} /> },
    { id: 4, name: "D", component: <Searchresult itemdata={menuforD} /> },
    { id: 5, name: "E", component: <Searchresult itemdata={menuforE} /> },
    { id: 6, name: "F", component: <Searchresult itemdata={menuforF} /> },
    { id: 7, name: "G", component: <Searchresult itemdata={menuforG} /> },
    { id: 8, name: "H", component: <Searchresult itemdata={menuforH} /> },
    { id: 9, name: "I", component: <Searchresult itemdata={menuforI} /> },
    { id: 10, name: "J", component: <Searchresult itemdata={menuforJ} /> },
    { id: 11, name: "K", component: <Searchresult itemdata={menuforK} /> },
    { id: 12, name: "L", component: <Searchresult itemdata={menuforL} /> },
    { id: 13, name: "M", component: <Searchresult itemdata={menuforM} /> },
    { id: 14, name: "N", component: <Searchresult itemdata={menuforN} /> },
    { id: 15, name: "O", component: <Searchresult itemdata={menuforO} /> },
    { id: 16, name: "P", component: <Searchresult itemdata={menuforP} /> },
    { id: 17, name: "Q", component: <Searchresult itemdata={menuforQ} /> },
    { id: 18, name: "R", component: <Searchresult itemdata={menuforR} /> },
    { id: 19, name: "S", component: <Searchresult itemdata={menuforS} /> },
    { id: 20, name: "T", component: <Searchresult itemdata={menuforT} /> },
    { id: 21, name: "U", component: <Searchresult itemdata={menuforU} /> },
    { id: 22, name: "V", component: <Searchresult itemdata={menuforV} /> },
    { id: 23, name: "W", component: <Searchresult itemdata={menuforW} /> },
    { id: 24, name: "X", component: <Searchresult itemdata={menuforX} /> },
    { id: 25, name: "Y", component: <Searchresult itemdata={menuforY} /> },
    { id: 26, name: "Z", component: <Searchresult itemdata={menuforZ} /> },
    { id: 27, name: "#", component: <Searchresult itemdata={menuforhash} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [selectedId, setSelectedId] = useState<number | null>(null);
  // const [filteredComponents,setFilteredComponents] = useState<{ id: number; name: string; component: React.ReactNode; }[]>([])
  const [searchValue,setSearchValue] = useState("")


  const filteredComponents = useMemo(() => {
    if (!componentsList) return [];
  
    let updatedComponents = componentsList;
  
    if (selectedId) {
      updatedComponents = updatedComponents.filter((item) => item.id === selectedId);
    }
  
    if (searchValue.trim() !== "") {
      updatedComponents = updatedComponents.filter((item) => {
        const component = item.component as ReactElement<{ itemdata: { items?: { title: string }[] } }>;
        return component.props?.itemdata?.items?.some((contentItem) =>
          contentItem.title.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    }
  
    return updatedComponents;
  }, [componentsList, selectedId, searchValue]);

    // useEffect(()=>{
    // console.log("filteredCompo",filteredComponents)
    // },[filteredComponents])

  return (
    <>
      <section className=" py-10 lg:py-20  insp-mn relative inspbg ">
        <motion.div
          className="ola ola-right absolute top-5 right-[-10%] w-[20em] md:w-[40em]"
          animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={lfbef}
            alt="Description of the image"
          ></Image>
        </motion.div>

        <div className="ola ola-right absolute bottom-0 left-[-10%] w-[20em] md:w-[40em] rotate-180">
          <Image
            className="absolute"
            src={lfbef}
            alt="Description of the image"
          ></Image>
        </div>
        <div className="container ">
          <div className="relative z-1">
            <div
              className={`w-full ${
                isSticky ? "fixed bgsti z-[9999] left-0 pt-4 md:pt-5" : ""
              } top-[0] lg:top-[100px] `}
            >
              <div className="container">
                <div className="flex justify-start gap-5 md:gap-4 md:justify-between  items-center">
                  <div>
                    <h2 className="heavydark ">
                      Filter<span className="text-orange">.</span>
                    </h2>
                  </div>
                  <div className="w- flex items-center justify-between  ">
                    <div className="relative w-full flex items-center gap-2 border-b-2 border-Darkgreen p-3 pb-2 md:pb-3 pl-2 md:pl-5 pr-[110px]">
                      <button
                        type="button"
                        className="  group top-0 left-0 mt-1 mr-1    text-sm nuber-next-bold text-Darkgreen flex gap-2 items-center transition-all duration-300 ease-in-out
                        hover:text-[#FF671F]"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                            stroke="#151515"
                            strokeOpacity="0.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        value={searchValue}
                        onChange={(e)=>setSearchValue(e.target.value)}
                        placeholder="Search"
                        className="emilfs w-full  text-font20 leading-none    focus:outline-none   focus:border-b-[#FF671F] "
                      />
                    </div>
                  </div>
                </div>
                <div className="  mt-5 md:mt-8">
                  {/* <div className="flex flex-wrap gap-2 py-4 md:py-8 justify-start md:justify-between w-full border-y-2 border-[#15151510] mb-6 md:mb-10">
                    {alphabet.map((letter) => (

                      <div
                        key={letter}
                        onClick={() => setActiveLetter(letter)}
                        className={`w-fit py-[5px] md:py-[10px] px-[10px] md:px-[15px] cursor-pointer transition-all duration-300
                      ${
                        activeLetter === letter
                          ? "border-b-2 border-orange"
                          : "border-b-2 border-transparent"
                      }
                    `}
                      >
                        {componentsList.map((item) => (
                          <p className="texthelvetica20 font-bold" onClick={() => setSelectedId(item.id)}>{letter}</p>
                        ))}

                      </div>
                    ))}

                  </div> */}
                  <div className="flex flex-wrap gap-1 lg:gap-2 py-4 md:py-8 justify-start lg:justify-between w-full border-y-2 border-[#15151510] mb-6 md:mb-10">

                  {componentsList.map((item) => (

          <div
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`texthelvetica20 font-bold
                       ${
                         selectedId === item.id
                           ? "border-b-2 border-orange"
                           : "border-b-2 border-transparent"
                       }`}
          ><div className={`w-fit py-[5px] md:py-[6px] xxl:py-[9px] px-[10px] md:px-[6px] xxl:px-[13px] cursor-pointer transition-all duration-300`}>
            {item.name}
            </div>
                      </div>

        ))}
                      </div>
                  {/* <p className="texthelvetica20 font-bold" onClick={() => setSelectedId(null)}>{letter}</p> */}

                </div>
              </div>
            </div>
            <div>
            <div className="">
        {filteredComponents.map((item) => (
          <div key={item.id}>{item.component}</div>
        ))}
      </div>
              {/* <div>
                <Searchresult itemdata={menuforA} />
              </div>
              <div>
                <Searchresult itemdata={menuforB} />
              </div>
              <div>
                <Searchresult itemdata={menuforC} />
              </div>
              <div>
                <Searchresult itemdata={menuforD} />
              </div>
              <div className="ouy">
                <Searchresult itemdata={menuforE} />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
