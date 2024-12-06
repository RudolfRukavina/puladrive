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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqA0CIw8IBFNs01WNnOmzzwPZc-R1TEUYlFw&s"
                title="Taxi Rudolf's business image, Logo"
                alt="Taxi Rudolf, logo"
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
              {{ $t("taxiRudolfIs") }}
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqA0CIw8IBFNs01WNnOmzzwPZc-R1TEUYlFw&s"
                title="Taxi Rudolf's vehicle fleet, cars and vans"
                alt="Taxi Rudolf's vehicle fleet, cars and vans"
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
                title="Taxi Rudolf's business image, Logo"
                alt="Taxi Rudolf, logo"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqA0CIw8IBFNs01WNnOmzzwPZc-R1TEUYlFw&s"
                title="Taxi Rudolf's business image, Logo"
                alt="Taxi Rudolf, logo"
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
