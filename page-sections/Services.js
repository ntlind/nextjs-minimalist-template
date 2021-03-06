import React from "react";
import { useInView } from "react-intersection-observer";

import Skills from "../page-sections/Skills.js";

function InfoCard({ title, description, tags }) {
  return (
    <div class="bg-gray rounded">
      <div class="p-10 pb-10">
        <div class="text-xl mb-6">{title}</div>
        <p class="text-lightGrayText text-md">{description}</p>
      </div>
    </div>
  );
}

export function OldServices() {
  return (
    <div class="bg-nearBlack">
      <div class="max-w-screen-xl	mx-auto py-20 lg:px-40 px-6 flex flex-col justify-center align-center text-white">
        <div class="text-4xl lg:text-title mt-4 xl:mt-10">Our services</div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-10 xl:mt-10">
          <InfoCard
            title="Product Mgmt."
            description="Lorem ipsum dolor sit amet asd asd asd, consectetur adipisicing elit.
  Voluptatibus quia, nulla!"
          />
          <InfoCard
            title="Data Science"
            description="Lorem ipsum dolor sit amet asd asd asd, consectetur adipisicing elit.
  Voluptatibus quia, nulla!"
          />
          <InfoCard
            title="Machine Learning"
            description="Lorem ipsum dolor sit amet asd asd asd, consectetur adipisicing elit.
Voluptatibus quia, nulla!"
          />
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div class="bg-nearBlack text-white">
      <div
        id="services"
        ref={ref}
        class={inView ? "section fade" : "section invisible"}
      >
        {" "}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg: gap-12">
          <div class="text-4xl lg:text-title">
            Areas of <br /> expertise
          </div>
          <div class="grid grid-rows-3 gap-6 mt-10 lg:mt-0">
            <div>
              <div class="text-2xl">Machine Learning</div>
              <p class="text-lightGrayText text-md mt-4">
                I build accurate, interpretable forecasting engines to
                understand and predict future events.
              </p>
            </div>
            <div>
              <div class="text-2xl">Product Management</div>
              <p class="text-lightGrayText text-md mt-4">
                I bridge the gap between executives, users, and engineers to
                build sustainable software products.
              </p>
            </div>
            <div>
              <div class="text-2xl">Data Science</div>
              <p class="text-lightGrayText text-md mt-4">
                I mine massive distributed datasets to uncover relationships,
                validate hypotheses, and share stories.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}
