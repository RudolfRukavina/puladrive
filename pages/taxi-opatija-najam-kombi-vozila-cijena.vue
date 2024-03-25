<template>

  <Head>
    <Title>Cijene najma kombi vozila | Cjenik 2024. | Taxi Opatija | 0 - 24 | Taxi | Rent a car | Rent a Van | Transfers
      |
      Excursions
    </Title>
    <Meta name="description"
      content="Cijene najma kombi vozila | Cjenik 2024 | Pozovi taxi | Taxi Opatija | Best service at the best price | Available 24 hours every day | Taxi | Rent a car | Rent a Van | Transfers | Excursions & more" />
  </Head>

  <header>
    <img class="hero-photo h-[27vh] md:h-96" src="../assets/imgs/underconstruction.jpeg" alt="Opatija Taxi" />
    <div class="flex justify-center -mt-5">
      <div class="hero-hours">
        <p class="m-0 mx-1 p-1 px-12 text-xl fw-bold">0 - 24</p>
      </div>
    </div>
  </header>
  <main>
    <NuxtLink to="/usluge" class="absolute right-2 font-bold cursor-pointer z-50">
      <span class="text-sm underline underline-offset-2 font-thin inline-block">Usluge</span>
      <svg class="w-9 inline-block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M9 6L15 12L9 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          </path>
        </g>
      </svg>
    </NuxtLink>
    <NuxtLink to="/onama" class="absolute left-2 font-bold cursor-pointer z-50">
      <svg class="w-9 inline-block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M15 6L9 12L15 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          </path>
        </g>
      </svg>
      <span class="text-sm underline underline-offset-2 inline-block font-thin">O nama</span>
    </NuxtLink>

    <div>
      <div class="relative isolate px-6 lg:px-8">
        <div class="mx-auto max-w-2xl pt-10">
          <div class="flex justify-center">
            <img src="../assets/imgs/logo.webp" alt="Logo Taxi Opatija" class="-mt-5 object-cover w-3/12 sm:w-24" />
          </div>
          <div class="text-center">
            <h1 class="text-[56px] leading-none font-bold tracking-tight text-gray-900">
              Taxi Opatija
            </h1>
            <h2 class="text-base font-bold tracking-tight text-gray-900">
              Cjenik 2024. - Cijene najma kombi vozila
            </h2>
            <p class='my-5 text-lg  font-bold'>Ispričavamo se, web stranica je još uvijek u
              izradi. </p>

            <NuxtLink to='/' class='my-5 text-lg underline underline-offset-4 font-bold'>Natrag na naslovnu stranicu
            </NuxtLink>

            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a id="callLink2" href="tel:+38598491369" class="inline-block w-50">
                <button
                  class="bg-blue-700 border-2 border-lime-50 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg text-lg">
                  Taxi Opatija | +385 98 491 369
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="bg-white rounded-lg custom-shadow dark:bg-gray-900 w-full fixed bottom-0">
    <div class="w-full max-w-screen-xl mx-auto p-4 pb-0 md:py-4">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="tel:+38598491369" class="flex justify-between items-center mb-1 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <div class="flex justify-center">
            <img src="../assets/imgs/logo.webp" class="h-6" alt="Taxi Opatija Logo" />
            <span class="self-center text-md font-semibold whitespace-nowrap dark:text-white">Taxi Opatija</span>
          </div>
          <ul></ul>
          <span class="self-center text-sm font-semibold whitespace-nowrap dark:text-white">+385 98 491 369</span>
        </a>

        <ul class="flex flex-wrap items-center mb-3 text-xs font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="https://www.facebook.com/taxiopatija" target="_blank"
              class="block me-4 md:me-6 text-sm underline underline-offset-2 hover:text-blue-900 text-blue-800">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/taxiopatija.hr/" target="_blank"
              class="block me-4 md:me-6 text-sm underline underline-offset-2 hover:text-purple-900 text-purple-800">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.hero-photo {
  width: 100%;
  object-fit: cover;
  border-radius: 0 0 1000em 1000em / 0 0 100em 100em;
}

.footer-border {
  width: 100%;
  object-fit: cover;
  border-radius: 1000em 1000em 0 0 / 20em 20em 0 0;
  border-top: 0.1px dotted rgba(0, 30, 180, 0.347);
  background: rgb(0, 29, 180);
  background: linear-gradient(0deg,
      rgba(0, 29, 180, 0.0970982142857143) 0%,
      rgba(0, 159, 180, 0.09429709383753504) 100%);
}

.hero-hours {
  font-weight: 600;
  color: white;
  background: rgb(0, 153, 180);
  background: linear-gradient(0deg,
      rgba(0, 153, 180, 0.9990589985994398) 0%,
      rgba(0, 114, 180, 1) 100%);
  border-radius: 23px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

body {
  background: rgb(58, 59, 180);
  background: linear-gradient(0deg,
      rgba(58, 59, 180, 0) 0%,
      rgba(29, 208, 253, 0.0746892507002801) 75%,
      rgba(147, 69, 252, 0) 100%);
}

button {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.custom-shadow {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>

<script setup>
useHead({
  title: "Naslovnica | Taxi Opatija | 0 - 24 | Taxi | Rent a car | Rent a Van | Transfers | Excursions",
  htmlAttrs: {
    lang: "hr",
  },
  meta: [
    {
      name: "description",
      content:
        "Taxi Opatija | Best service at the best price | Available 24 hours every day | Transfers | Excursions | Rent a Van | Rent a Car | Jedan je taxiopatija.hr | Visit taxiopatija.hr",
    },
    { hid: "og:url", property: "og:url", content: "https://taxiopatija.hr" },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "og:title",
      property: "og:title",
      content: "Taxi Opatija | Best service at the best price | Available 24 hours every day | Transfers | Excursions | Rent a Van | Rent a Car | Jedan je taxiopatija.hr | Visit taxiopatija.hr",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Taxi Opatija | Best service at the best price | Available 24 hours every day | Transfers | Excursions | Rent a Van | Rent a Car | Jedan je taxiopatija.hr | Visit taxiopatija.hr",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://taxiopatija.hr/opatija.jpeg",
    },
    // Structured Data Markup for Home Page
    {
      hid: "structured-data-home",
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Taxi Opatija",
        url: "https://taxiopatija.hr",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+38598491369",
          contactType: "customer service",
        },
      }),
    },
    // Structured Data Markup for /onama Page
    {
      hid: "structured-data-onama",
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "http://schema.org",
        "@type": "WebPage",
        name: "O nama | Taxi Opatija",
        url: "https://taxiopatija.hr/onama",
        description: "O nama | Saznajte više o nama | Visit taxiopatija.hr/onama",
      }),
    },
    // Structured Data Markup for /usluge Page
    {
      hid: "structured-data-usluge",
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "http://schema.org",
        "@type": "WebPage",
        name: "Usluge | Taxi Opatija",
        url: "https://taxiopatija.hr/usluge",
        description: "Usluge | Pregledajte naše usluge | Taxi | Transfers | Excursions | Rent a Van | Rent a Car | Visit taxiopatija.hr/usluge",
      }),
    },
  ],
  bodyAttrs: {
    class: "",
  },
  script: [],
});

useSeoMeta({
  title: "Taxi Opatija | Best service at the best price | Available 24 hours every day | Transfers | Excursions | Rent a Van | Rent a Car | Jedan je taxiopatija.hr | Visit taxiopatija.hr",
  ogTitle: "Taxi Opatija | Best service at the best price | Available 24 hours every day | Transfers | Excursions | Rent a Van | Rent a Car | Jedan je taxiopatija.hr | Visit taxiopatija.hr",
  description:
    "Taxi Opatija | Best service at the best price | Available 24 hours every day | Transfers | Excursions | Rent a Van | Rent a Car | Jedan je taxiopatija.hr | Visit taxiopatija.hr",
  ogDescription:
    "Taxi Opatija | Best service at the best price | Available 24 hours every day | Transfers | Excursions | Rent a Van | Rent a Car | Jedan je taxiopatija.hr | Visit taxiopatija.hr",
  ogImage: "https://taxiopatija.hr/opatija.jpeg",
  twitterCard: "https://taxiopatija.hr/opatija.jpeg",
});

</script>
