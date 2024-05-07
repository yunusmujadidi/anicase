import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Reviews } from "@/components/Reviews";
import { Star, Check } from "lucide-react";
import React from "react";
import Image from "next/image";

const ReviewSection = () => {
  return (
    <section className="bg-slate-100 py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 md:gap-32">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
            What our{" "}
            <span className="relative px-2">
              Customers{" "}
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
                &ldquo;The case feels durable and I even got a compliment from a
                friend. I love it so much! Had a great experience with the
                customer service as well. I would{" "}
                <span className="p-0.5 bg-slate-800 text-white">
                  recommend this to anyone
                </span>{" "}
                who wants a custom case. I&rsquo;m definitely coming back for a
                new one soon! &ldquo;
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
                &ldquo;The anicase phone case has been a total game-changer!
                I&rsquo;m admittedly pretty clumsy and was always cracking my
                phone screens. The textured sides give me a super{" "}
                <span className="p-0.5 bg-slate-800 text-white">
                  secure grip to avoid drops
                </span>{" "}
                in the first place. &ldquo;
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
                &ldquo;The case feels durable and I even got a compliment on the
                design. Had the case for two and a half months now and{" "}
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
                pocket and that led to some pretty heavy scratchmarks on all of
                my last phone cases. This one, besides a barely noticeable
                scratch on the corner,&nbsp;
                <span className="p-0.5 bg-slate-800 text-white">
                  looks brand new after about half a year
                </span>
                &ldquo;
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
      <div className="pt-16">
        <Reviews />
      </div>
    </section>
  );
};

export default ReviewSection;
