"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import RotationShape from "./RotationShape";
import Header from "./Header";
import Stats from "./Stats/Stats";

const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent/10 xl:bg-white" id="home">
      {/* header */}
      <Header />
      <div className="container mx-auto h-full">
        <div className=" relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10 ">
          <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
            <span className="text-accent">I Build And</span> Design Powerful
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Websites", 2000, "Apps", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>
          <p className="lead max-w-[476px] mb-7">
            Delivering powerful, custom website that blend aesthetics with
            performance.
          </p>
          <ScrollLink to="contact" smooth>
            <button className="btn btn-accent mb-8">Contact me</button>
          </ScrollLink>

          {/* stats */}
          <Stats />
        </div>
        {/* image */}
        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[558px] h-[642px] bottom-0 z-40 left-[6.5vw]">
            <Image
              src="/assets/hero/dev.png"
              fill
              quality="100"
              priority
              className="object-contain"
              alt=""
            />
          </div>
          {/* arrow shape */}
          <div
            className="hidden xl:flex absolute top-48 left-[4vw]"
            data-scroll
            data-scroll-speed="0.05"
          >
            <Image
              src="/assets/hero/arrow.svg"
              width={160}
              height={160}
              alt=""
            />
          </div>
          {/* shape1 */}
          <div
            className="absolute top-[600px] left-[3vw]"
            data-scroll
            data-scroll-speed="0.2"
          >
            <RotationShape
              content={
                <Image
                  src="assets/hero/shape-1.svg"
                  width={38}
                  height={38}
                  alt=""
                />
              }
              direction="left"
              duration={6}
            />
          </div>
          {/* shape2 */}
          <div
            className="absolute top-[240px] left-[30vw]"
            data-scroll
            data-scroll-speed="0.2"
          >
            <RotationShape
              content={
                <Image
                  src="assets/hero/shape-2.svg"
                  width={34}
                  height={34}
                  alt=""
                />
              }
              direction="right"
              duration={5}
            />
          </div>
          {/* shape3 */}
          <div
            className="absolute top-[480px] left-[40vw]"
            data-scroll
            data-scroll-speed="0.2"
          >
            <RotationShape
              content={
                <Image
                  src="assets/hero/shape-3.svg"
                  width={36}
                  height={36}
                  alt=""
                />
              }
              direction="left"
              duration={6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
