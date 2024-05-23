/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

import aboutImage from "@/images/about.jpg";

function AboutUsPage() {
  return (
    <div className="grid gap-24 px-4 lg:grid-cols-2 2xl:px-0">
      {/* left column */}
      <div>
        <h1 className="mb-8 text-4xl font-bold">About</h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">
            Ember & Bloom: Cultivating a Love for Tea
          </h2>

          <p>
            At Ember & Bloom, we're a passionate bunch on a mission to bring the
            magic of loose leaf tea to your everyday moments. We believe that a
            steaming cup of tea is more than just a beverage; it's a ritual, a
            chance to slow down, savor the present moment, and reconnect with
            yourself.
          </p>

          <h2 className="text-2xl font-bold">Our Story</h2>

          <p>
            Our love affair with tea began on a whirlwind backpacking trip
            through Southeast Asia. We were captivated by the incredible
            diversity of flavors, from the delicate grassy notes of Japanese
            Sencha to the robust, malty character of Indian Assam. But what
            truly stole our hearts was the mindful practice of steeping and
            savoring each cup. It became a daily ritual, a way to connect with
            new cultures and find moments of peace amidst the travel chaos.
          </p>

          <h2 className="text-2xl font-bold">Our Commitment to Quality</h2>

          <p>
            Fast forward a few years, and Ember & Bloom was born. We source our
            teas directly from renowned estates in regions like China, India,
            and Sri Lanka, places where tea cultivation has been an art form for
            centuries. We prioritize organic ingredients and fair trade
            practices, ensuring that every cup you steep delivers a symphony of
            taste and aroma, while also supporting sustainable agriculture and
            ethical labor practices.
          </p>

          <h2 className="text-2xl font-bold">Beyond the Leaf</h2>

          <p>
            Ember & Bloom is more than just a tea shop; it's a community of tea
            enthusiasts. We're passionate about sharing our love for tea and
            helping others discover the perfect cup. We offer a variety of
            resources on our website, including brewing guides, steeping tips,
            and information about the health benefits of different teas. Whether
            you're a seasoned tea lover or a curious newcomer, we're here to
            guide you on your tea journey.
          </p>

          <h2 className="text-2xl font-bold">
            Join us on a journey of discovery!
          </h2>

          <p>
            Explore our curated collection of loose leaf teas, each one
            hand-selected for its unique flavor profile and exceptional quality.
            Find your perfect cup, steep yourself in serenity, and experience
            the art of tea with Ember & Bloom.
          </p>
        </div>
      </div>
      {/* right column */}
      <div className="hidden lg:block">
        <Image src={aboutImage} alt="" className="rounded-md" />
      </div>
    </div>
  );
}

export default AboutUsPage;
