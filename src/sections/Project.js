import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { useRef, useState } from "react";

import { AnimateSharedLayout, motion } from "framer-motion";

import img1 from "../assets/Images/Expense.jpg";
import img2 from "../assets/Images/Meal.jpg";
import img3 from "../assets/Images/spotify.jpg";
import img4 from "../assets/Images/movie.jpg";
import img5 from "../assets/Images/netfilx.jpg";
// import img6 from "../assets/Images/6.webp";
// import img7 from "../assets/Images/7.webp";
// import img8 from "../assets/Images/8.webp";
// import img9 from "../assets/Images/9.webp";
// import img10 from "../assets/Images/10.webp";
import Modal from "../components/Modal";
import { Typography } from "@material-ui/core";
const items = [
  {
    img: img1,
    typo: "sabhal k",
  },
  {
    img: img2,
    typo: "Metaverse Project",
  },
  {
    img: img3,
    typo: "Japan Bank",
  },
  {
    img: img4,
    typo: "Wallah habibi",
  },
  {
    img: img5,
    typo: "boom boom",
  },
];

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
      margintop: "22%";
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
      margintop: "0%";
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;
  z-index:999;
  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  .img:hover {
    tranform: scale(1.2);
  }
  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

// const Items = ({data,index}) => {
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <>
//       <motion.div layoutId={data.index} onClick={() => setIsOpen(data.index)}>
//         {isOpen && }
//       </motion.div>

//     </>

//     // <Item
//     //   initial={{ filter: "grayscale(100%)" }}
//     //   whileInView={{ filter: "grayscale(0%)" }}
//     //   transition={{ duration: 0.5 }}
//     //   viewport={{ once: false, amount: "all" }}
//     // >
//     //   <img src={img} alt={title} />
//     //   <h1>{title}</h1>
//     // </Item>
//   );
// };

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.clientWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,
          pin: true,
          // markers:true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none,",
      });

      // Horizontal Scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,

          // markers:true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        x: -pinWrapWidth,
        ease: "none,",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instances
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Section ref={ref} id="shop">
      <Right ref={horizontalRef}>
      {items.map((item, id) => (
          <>
            <motion.div
              layoutId={item.img}
              onClick={() => {
                setSelectedId(item.img);
                console.log("id0-----", id);
              }}
            >
              <Item
                initial={{ filter: "grayscale(100%)" }}
                whileInView={{ filter: "grayscale(0%)" }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: "all" }}
              >
                <img src={item.img} alt={item} className="img" />
                <Typography>{item.typo}</Typography>
              </Item>
            </motion.div>
          </>
        ))}
        <AnimateSharedLayout>
          {selectedId && (
            <motion.div layoutId={items.img}>
              <Modal
                setOpenDeleteModal={() => setSelectedId(null)}
                openDeleteModal={selectedId ? true : false}
                content={selectedId}
              />
            </motion.div>
          )}
        </AnimateSharedLayout>
        
      </Right>

      <Left >
        
      <Title>Projects</Title>
        {/* <Product img={img1} title="Man Basics" />
        <Product img={img2} title="Tops" />
        <Product img={img3} title="Sweatshirts" />
        <Product img={img4} title="Ethnic Wear" />
        <Product img={img5} title="Blazers" />
        <Product img={img6} title="Suits" />
        <Product img={img7} title="Antiques" />
        <Product img={img8} title="Jewellery" />
        <Product img={img9} title="Watches" />
        <Product img={img10} title="Special Edition" /> */}
      </Left>
    </Section>
  );
};

export default Project;
