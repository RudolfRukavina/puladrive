<template>
  <div class="col-span-2 relative pt-10 bg-white" id="about-us">
    <ClientOnly>
      <swiper
        :key="swiperKey"
        :pagination="{
          clickable: true,
        }"
        :loop="true"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
          },
          '768': {
            slidesPerView: 2,
          },
          '1024': {
            slidesPerView: 2,
          },
        }"
        :slidesPerView="1"
        :lazy="true"
        :mousewheel="true"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: true,
        }"
        :grabCursor="true"
        :modules="modules"
        ref="swiperRef"
      >
        <swiper-slide>
          <div
            class="inline-block pe-5 dark:ring-white/10 ring-primary/5 dark:shadow-thick rounded-3xl lg:row-start-4 h-full p-5 dark:bg-secondary"
          >
            <div class="flex justify-between cursor-pointer">
              <p
                class="text-4xl tracking-tight font-medium text-black text-start md:text-5xl"
              >
                {{ $t("aboutUs") }}
              </p>
            </div>
            <div class="flex items-center mb-2 w-[80vw] min-w-md max-w-lg">
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <p
                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                5
              </p>
              <p
                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                out of
              </p>
              <p
                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                5
              </p>
            </div>
            <p class="text-sm text-start font-medium text-gray-500">
              15 global ratings
            </p>
            <div class="flex items-center mt-4">
              <a href="#" class="text-sm font-medium text-black hover:underline"
                >5 star</a
              >
              <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  class="h-5 bg-yellow-300 rounded"
                  style="width: 100%"
                ></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400"
                >100%</span
              >
            </div>
            <div class="flex items-center mt-4">
              <a href="#" class="text-sm font-medium text-black hover:underline"
                >4 star</a
              >
              <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div class="h-5 bg-yellow-300 rounded" style="width: 0%"></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400"
                >0%</span
              >
            </div>
            <div class="flex items-center mt-4">
              <a href="#" class="text-sm font-medium text-black hover:underline"
                >3 star</a
              >
              <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div class="h-5 bg-yellow-300 rounded" style="width: 0%"></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400"
                >0%</span
              >
            </div>
            <div class="flex items-center mt-4">
              <a href="#" class="text-sm font-medium text-black hover:underline"
                >2 star</a
              >
              <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div class="h-5 bg-yellow-300 rounded" style="width: 0%"></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400"
                >0%</span
              >
            </div>
            <div class="flex items-center mt-4">
              <a href="#" class="text-sm font-medium text-black hover:underline"
                >1 star</a
              >
              <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div class="h-5 bg-yellow-300 rounded" style="width: 0%"></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400"
                >0%</span
              >
            </div>

            <div class="md:grid md:grid-cols-2 gap-2 lg:grid-cols-1 text-start">
              <div class="mt-4">
                <p class="text-sm text-[#E67930] dark:text-pink-400">
                  "Vrhunska i brza usluga! Vozač vrlo pristojan i uljudan."
                </p>
                <p class="text-xs mt-2 text-zinc-500">
                  <span class="block text-xs">Vedran</span>
                </p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="inline-block px-6 dark:ring-white/10 ring-primary/5 dark:shadow-thick rounded-3xl lg:row-start-4 h-full p-5 bg-white dark:bg-secondary"
          >
            <div class="flex justify-between">
              <p
                class="text-2xl tracking-tight font-medium text-gray-900 text-start md:text-4xl"
              >
                {{ $t("whatIs") }}
              </p>
              <img
                src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-1/327551864_1227162628227515_5135664413449931067_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=108&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=WMvhHQxoIkAQ7kNvgFCEIQx&_nc_zt=24&_nc_ht=scontent.fzag3-1.fna&_nc_gid=AI1VK6CQ7YCjw6wkUysqgNa&oh=00_AYCESx7mRO4iby88KztPNQMaT2hvTJdiOIeAs23zcJnrQA&oe=675834A7"
                title="Taxi PulaDrive's business image, Logo"
                alt="Taxi PulaDrive, logo"
                class="w-8 h-8 inline-block me-3 rounded-full"
              />
            </div>
            <div class="flex items-center mb-2 w-[80vw] min-w-md max-w-md">
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <p
                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                5
              </p>
              <p
                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                out of
              </p>
              <p
                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                5
              </p>
            </div>
            <p
              class="text-xl text-start font-medium text-gray-700 drop-shadow-md"
            >
              {{ $t("taxiPulaDriveIs") }}
            </p>
            <p class="text-xl text-start my-2 font-medium text-gray-500">
              {{ $t("toDesc") }}
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="inline-block px-6 dark:ring-white/10 ring-primary/5 dark:shadow-thick rounded-3xl lg:row-start-4 h-full p-5 bg-white dark:bg-secondary"
          >
            <div class="flex justify-between">
              <p
                class="text-2xl tracking-tight font-medium text-gray-900 text-start md:text-4xl"
              >
                {{ $t("fleet") }}
              </p>
              <img
                src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-1/327551864_1227162628227515_5135664413449931067_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=108&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=WMvhHQxoIkAQ7kNvgFCEIQx&_nc_zt=24&_nc_ht=scontent.fzag3-1.fna&_nc_gid=AI1VK6CQ7YCjw6wkUysqgNa&oh=00_AYCESx7mRO4iby88KztPNQMaT2hvTJdiOIeAs23zcJnrQA&oe=675834A7"
                title="Taxi PulaDrive's vehicle fleet, cars and vans"
                alt="Taxi PulaDrive's vehicle fleet, cars and vans"
                class="w-8 h-8 inline-block me-3 rounded-full"
              />
            </div>
            <div class="flex items-center mb-2 w-[80vw] min-w-md max-w-md">
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <p
                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                5
              </p>
              <p
                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                out of
              </p>
              <p
                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                5
              </p>
            </div>
            <div class="flex justify-between">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipNqbhjTGjJ2S7X7-6Mu50-WeW--gp4fKSPa3LgG=s1360-w1360-h1020"
                loading="lazy"
                title="Taxi PulaDrive's business image, Logo"
                alt="Taxi PulaDrive, logo"
                class="w-[80vw] min-w-md max-w-md inline-block me-3 rounded-xl"
              />
            </div>
            <p class="text-xl text-start my-2 font-medium text-gray-500">
              {{ $t("fleetDesc") }}
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="inline-block px-6 dark:ring-white/10 ring-primary/5 dark:shadow-thick rounded-3xl lg:row-start-4 h-full p-5 bg-white dark:bg-secondary"
          >
            <div class="flex justify-between">
              <p
                class="text-2xl tracking-tight font-medium text-gray-900 text-start md:text-4xl"
              >
                {{ $t("best") }}
              </p>
              <img
                src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-1/327551864_1227162628227515_5135664413449931067_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=108&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=WMvhHQxoIkAQ7kNvgFCEIQx&_nc_zt=24&_nc_ht=scontent.fzag3-1.fna&_nc_gid=AI1VK6CQ7YCjw6wkUysqgNa&oh=00_AYCESx7mRO4iby88KztPNQMaT2hvTJdiOIeAs23zcJnrQA&oe=675834A7"
                title="Taxi PulaDrive's business image, Logo"
                alt="Taxi PulaDrive, logo"
                class="w-8 h-8 inline-block me-3 rounded-full"
              />
            </div>
            <div class="w-48 text-base">
              <NuxtMarquee
                :pauseOnHover="true"
                :gradientWidth="100"
                class="rounded-[58px]"
                :gradient="true"
                gradientColor="white"
                speed="40"
              >
                <span class="px-3">
                  <strong>24/7</strong>
                </span>

                |
                <span class="px-3">
                  <strong>{{ $t("mostTrusted") }}</strong>
                </span>
                |
                <span class="px-3">
                  <strong>Safety</strong>
                </span>
                |
                <span class="px-3">
                  <strong>Reliability</strong>
                </span>
                |
                <span class="px-3">
                  <strong>Comfort</strong>
                </span>
                |
                <span class="px-3">
                  <strong>Quality</strong>
                </span>
                |
                <span class="px-3">
                  <strong>Cleanliness</strong>
                </span>
                |
                <span class="px-3">
                  <strong>Trust</strong>
                </span>
                |
              </NuxtMarquee>
            </div>
            <div class="flex items-center mb-2 w-[80vw] min-w-md max-w-md">
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <p
                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                5
              </p>
              <p
                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                out of
              </p>
              <p
                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                5
              </p>
            </div>
            <p class="text-xl text-start my-2 font-medium text-gray-500">
              {{ $t("approach") }}
            </p>
            <div class="flex justify-evenly my-6">
              <a href="viber://chat?number=%2B38598491369">
                <svg
                  class="w-14 rounded-lg custom-shadow border border-black hover:border-none"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 455.731 455.731"
                  xml:space="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <rect
                        x="0"
                        y="0"
                        style="fill: #7d3daf"
                        width="455.731"
                        height="455.731"
                      ></rect>
                      <g>
                        <path
                          style="fill: #ffffff"
                          d="M371.996,146.901l-0.09-0.36c-7.28-29.43-40.1-61.01-70.24-67.58l-0.34-0.07 c-48.75-9.3-98.18-9.3-146.92,0l-0.35,0.07c-30.13,6.57-62.95,38.15-70.24,67.58l-0.08,0.36c-9,41.1-9,82.78,0,123.88l0.08,0.36 c6.979,28.174,37.355,58.303,66.37,66.589v32.852c0,11.89,14.49,17.73,22.73,9.15l33.285-34.599 c7.219,0.404,14.442,0.629,21.665,0.629c24.54,0,49.09-2.32,73.46-6.97l0.34-0.07c30.14-6.57,62.96-38.15,70.24-67.58l0.09-0.36 C380.996,229.681,380.996,188.001,371.996,146.901z M345.656,264.821c-4.86,19.2-29.78,43.07-49.58,47.48 c-25.921,4.929-52.047,7.036-78.147,6.313c-0.519-0.014-1.018,0.187-1.38,0.559c-3.704,3.802-24.303,24.948-24.303,24.948 l-25.85,26.53c-1.89,1.97-5.21,0.63-5.21-2.09v-54.422c0-0.899-0.642-1.663-1.525-1.836c-0.005-0.001-0.01-0.002-0.015-0.003 c-19.8-4.41-44.71-28.28-49.58-47.48c-8.1-37.15-8.1-74.81,0-111.96c4.87-19.2,29.78-43.07,49.58-47.48 c45.27-8.61,91.17-8.61,136.43,0c19.81,4.41,44.72,28.28,49.58,47.48C353.765,190.011,353.765,227.671,345.656,264.821z"
                        ></path>
                        <path
                          style="fill: #ffffff"
                          d="M270.937,289.942c-3.044-0.924-5.945-1.545-8.639-2.663 c-27.916-11.582-53.608-26.524-73.959-49.429c-11.573-13.025-20.631-27.73-28.288-43.292c-3.631-7.38-6.691-15.049-9.81-22.668 c-2.844-6.948,1.345-14.126,5.756-19.361c4.139-4.913,9.465-8.673,15.233-11.444c4.502-2.163,8.943-0.916,12.231,2.9 c7.108,8.25,13.637,16.922,18.924,26.485c3.251,5.882,2.359,13.072-3.533,17.075c-1.432,0.973-2.737,2.115-4.071,3.214 c-1.17,0.963-2.271,1.936-3.073,3.24c-1.466,2.386-1.536,5.2-0.592,7.794c7.266,19.968,19.513,35.495,39.611,43.858 c3.216,1.338,6.446,2.896,10.151,2.464c6.205-0.725,8.214-7.531,12.562-11.087c4.25-3.475,9.681-3.521,14.259-0.624 c4.579,2.898,9.018,6.009,13.43,9.153c4.331,3.086,8.643,6.105,12.638,9.623c3.841,3.383,5.164,7.821,3.001,12.412 c-3.96,8.408-9.722,15.403-18.034,19.868C276.387,288.719,273.584,289.127,270.937,289.942 C267.893,289.017,273.584,289.127,270.937,289.942z"
                        ></path>
                        <path
                          style="fill: #ffffff"
                          d="M227.942,131.471c36.515,1.023,66.506,25.256,72.933,61.356c1.095,6.151,1.485,12.44,1.972,18.683 c0.205,2.626-1.282,5.121-4.116,5.155c-2.927,0.035-4.244-2.414-4.434-5.039c-0.376-5.196-0.637-10.415-1.353-15.568 c-3.78-27.201-25.47-49.705-52.545-54.534c-4.074-0.727-8.244-0.918-12.371-1.351c-2.609-0.274-6.026-0.432-6.604-3.675 c-0.485-2.719,1.81-4.884,4.399-5.023C226.527,131.436,227.235,131.468,227.942,131.471 C264.457,132.494,227.235,131.468,227.942,131.471z"
                        ></path>
                        <path
                          style="fill: #ffffff"
                          d="M283.434,203.407c-0.06,0.456-0.092,1.528-0.359,2.538c-0.969,3.666-6.527,4.125-7.807,0.425 c-0.379-1.098-0.436-2.347-0.438-3.529c-0.013-7.734-1.694-15.46-5.594-22.189c-4.009-6.916-10.134-12.73-17.318-16.248 c-4.344-2.127-9.042-3.449-13.803-4.237c-2.081-0.344-4.184-0.553-6.275-0.844c-2.534-0.352-3.887-1.967-3.767-4.464 c0.112-2.34,1.822-4.023,4.372-3.879c8.38,0.476,16.474,2.287,23.924,6.232c15.15,8.023,23.804,20.687,26.33,37.597 c0.114,0.766,0.298,1.525,0.356,2.294C283.198,199.002,283.288,200.903,283.434,203.407 C283.374,203.863,283.288,200.903,283.434,203.407z"
                        ></path>
                        <path
                          style="fill: #ffffff"
                          d="M260.722,202.523c-3.055,0.055-4.69-1.636-5.005-4.437c-0.219-1.953-0.392-3.932-0.858-5.832 c-0.918-3.742-2.907-7.21-6.055-9.503c-1.486-1.083-3.17-1.872-4.934-2.381c-2.241-0.647-4.568-0.469-6.804-1.017 c-2.428-0.595-3.771-2.561-3.389-4.839c0.347-2.073,2.364-3.691,4.629-3.527c14.157,1.022,24.275,8.341,25.719,25.007 c0.102,1.176,0.222,2.419-0.039,3.544C263.539,201.464,262.113,202.429,260.722,202.523 C257.667,202.578,262.113,202.429,260.722,202.523z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                id="callLink2"
                href="tel:+38598491369"
                class="inline-block w-50"
              >
                <button
                  class="bg-blue-700 border-2 border-white shadow-md hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg text-lg"
                >
                  <p class="inline-block">{{ $t("callARide") }}</p>
                </button>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=38598491369"
                target="_blank"
                rel="noopener"
              >
                <svg
                  class="w-14 rounded-lg custom-shadow border border-black hover:border-none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="WhatsApp"
                  role="img"
                  viewBox="0 0 512 512"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect
                      width="512"
                      height="512"
                      rx="15%"
                      fill="#25d366"
                    ></rect>
                    <path
                      fill="#25d366"
                      stroke="#ffffff"
                      stroke-width="26"
                      d="M123 393l14-65a138 138 0 1150 47z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/free-mode"; // Import the free-mode CSS
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import dayjs from "dayjs";

const handleBulletClick = () => {
  console.log("Pagination bullet clicked");
};

const selectedDate = ref("");
const klimnoReservation = ref(false);
const siloReservation = ref(false);
const crikvenicaReservation = ref(false);
const svMarakReservation = ref(false);
const vrbnikReservation = ref(false);

const modules = [EffectCube, Pagination, Autoplay];

onMounted(() => {
  selectedDate.value = dayjs().format("YYYY-MM-DD");
});
</script>

<style scoped>
.gradient-overlay-bottom {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  /* Adjust this to change the gradient height */
  background: linear-gradient(to top, black, transparent);
  pointer-events: none;
}

.gradient-overlay-top {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  /* Adjust this to change the gradient height */
  background: linear-gradient(to bottom, black, transparent);
  pointer-events: none;
}

/* Table container styling for responsiveness */
.table-container {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background-color: #1f1f1f;
  border-radius: 0.5rem;
  overflow: hidden;
}

.custom-table th,
.custom-table td {
  padding: 0.75rem;
  border: 1px solid #3f3f3f;
}

.custom-table th {
  background-color: #2f2f2f;
  color: #eaeaea;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.custom-table td {
  color: #cccccc;
}

.custom-table th,
.custom-table td {
  font-size: 0.75rem;
  padding: 0.5rem;
}

.custom-table {
  font-size: 0.8rem;
}
</style>

<style>
.swiper-pagination {
  /* Adjust position */
  text-align: center;
  /* Center align */
  z-index: 50;
}

/* Customize individual bullets */
.swiper-pagination-bullet {
  width: 12px;
  /* Bullet width */
  height: 12px;
  /* Bullet height */
  background: #e67930;
  /* Bullet color */
  opacity: 0.5;
  /* Default opacity */
  transition: opacity 0.3s;
  /* Smooth transition */
  z-index: 50;
}

/* Customize the active bullet */
.swiper-pagination-bullet-active {
  opacity: 1;
  /* Fully opaque for active bullet */
  background: #e67930;
  /* Active bullet color */
  z-index: 50;
}
</style>
