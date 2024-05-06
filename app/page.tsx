import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Phone from "@/components/Phone";
import { Icons } from "@/components/Icons";

const page = () => {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src="/genshinemoji/yae.png"
                  alt="image"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                  Your Image on a{" "}
                  <span className="bg-orange-600 px-2 text-white">Custom</span>{" "}
                  Phone Case
                </h1>
                <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                  Capture your memories with your own,{" "}
                  <span className="font-semibold">one-of-one</span> phone case.
                </p>

                <ul className="flex flex-col mt-8 space-y-2 text-left font-medium items-center sm:items-start">
                  <div className="space-y-2">
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-orange-600" />
                      High quality print, durable material
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-orange-600" />5
                      years print guarantee
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-orange-600" />
                      Modern iPhone models supported
                    </li>
                  </div>
                </ul>
                <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="flex -space-x-4">
                    <Image
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-1.png"
                      alt="users"
                      height={100}
                      width={100}
                    />
                    <Image
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-2.png"
                      alt="users"
                      height={100}
                      width={100}
                    />
                    <Image
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-3.png"
                      alt="users"
                      height={100}
                      width={100}
                    />
                    <Image
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-4.jpg"
                      alt="users"
                      height={100}
                      width={100}
                    />
                    <Image
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-5.jpg"
                      alt="users"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="flex flex-col justify-between items-center sm:items-start">
                    <div className="flex gap-0.5">
                      <Star className="h-5 w-5 shrink-0 text-orange-600 fill-orange-600" />
                      <Star className="h-5 w-5 shrink-0 text-orange-600 fill-orange-600" />
                      <Star className="h-5 w-5 shrink-0 text-orange-600 fill-orange-600" />
                      <Star className="h-5 w-5 shrink-0 text-orange-600 fill-orange-600" />
                      <Star className="h-5 w-5 shrink-0 text-orange-600 fill-orange-600" />
                    </div>
                    <p>
                      <span className="font-semibold">1.250</span> happy
                      customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                src="/your-image.png"
                alt="your image"
                width={100}
                height={100}
              />
              <Image
                className="absolute w-20 -left-6 -bottom-6 select-none"
                src="/line.png"
                alt="line"
                width={100}
                height={100}
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 md:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                Customer{" "}
                <Icons.underline className="absolute hidden sm:block pointer-events-none inset-x-0 -bottom-7 text-orange-500" />
              </span>{" "}
              Say
            </h2>
            <Image
              src="/genshinemoji/hutao.png"
              alt="hutao"
              width={150}
              height={300}
              className="pointer-events-none select-none"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            {/* Testimonial 1 */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
              </div>
              <div className="text-lg leading-8 text-justify">
                <p>
                  The case feels durable and I even got a compliment from a
                  friend. I love it so much! Had a great experience with the
                  customer service as well. I would{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    recommend this to anyone
                  </span>{" "}
                  who wants a custom case. I&rsquo;m definitely coming back for
                  a new one soon! 🥰
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-1.png"
                  alt="user1"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col ">
                  <p className="font-bold">Andrey</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="text-orange-600 h-4 w-4 stroke-[3px]" />
                    <p>Verified Purchased</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
              </div>
              <div className="text-lg leading-8 text-justify">
                <p>
                  &ldquo;The [Product Name] phone case has been a total
                  game-changer! I&rsquo;m admittedly pretty clumsy and was
                  always cracking my phone screens. The textured sides give me a
                  super{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    secure grip to avoid drops
                  </span>{" "}
                  in the first place.&rdquo; &nbsp; Despite dropping my phone
                  multiple times with this case on, there&rsquo;s not a scratch
                  or dent to be found.{" "}
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-2.png"
                  alt="user1"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col ">
                  <p className="font-bold">Erica</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="text-orange-600 h-4 w-4 stroke-[3px]" />
                    <p>Verified Purchased</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
              </div>
              <div className="text-lg leading-8 text-justify">
                <p>
                  &ldquo;The case feels durable and I even got a compliment on
                  the design. Had the case for two and a half months now
                  and&rsquo; &rsquo;
                  <span className="p-0.5 bg-slate-800 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it.&rdquo;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-3.png"
                  alt="user1"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col ">
                  <p className="font-bold">Shilphy</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="text-orange-600 h-4 w-4 stroke-[3px]" />
                    <p>Verified Purchased</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial 4 */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
              </div>
              <div className="text-lg leading-8 text-justify">
                <p>
                  &ldquo;I usually keep my phone together with my keys in my
                  pocket and that led to some pretty heavy scratchmarks on all
                  of my last phone cases. This one, besides a barely noticeable
                  scratch on the corner,&nbsp;
                  <span className="p-0.5 bg-slate-800 text-white">
                    looks brand new after about half a year
                  </span>
                  &nbsp;. I dig it.&rdquo;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-4.jpg"
                  alt="user1"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col ">
                  <p className="font-bold">Agoy</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="text-orange-600 h-4 w-4 stroke-[3px]" />
                    <p>Verified Purchased</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default page;
