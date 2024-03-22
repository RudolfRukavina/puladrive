<template>

  <Head>
    <Title>Usluge | Taxi Opatija</Title>
    <Meta name="description"
      content="Usluge | Taxi Opatija | Best service at the best price | Available 24 hours every day." />
  </Head>

  <header>
    <img class="hero-photo h-[27vh] md:h-96" src="../assets/imgs/taxiopatijacentar.jpeg" alt="Slika Centra Opatije" />
    <div class="flex justify-center -mt-5">
      <div class="hero-hours">
        <p class="m-0 mx-1 p-1 px-12 text-xl fw-bold">0 - 24</p>
      </div>
    </div>
  </header>
  <main>
    <NuxtLink to='/onama' class='absolute right-2 font-bold cursor-pointer z-50'>
      <span class='text-sm underline underline-offset-2 font-thin inline-block'>O nama</span>
      <svg class='w-9 inline-block' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M9 6L15 12L9 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          </path>
        </g>
      </svg>
    </NuxtLink>
    <NuxtLink to='/' class='absolute left-2 font-bold cursor-pointer z-50'>
      <svg class='w-9 inline-block' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M15 6L9 12L15 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          </path>
        </g>
      </svg>
      <span class='text-sm underline underline-offset-2 inline-block font-thin'>Naslovnica</span>
    </NuxtLink>
    <div>
      <div class="relative isolate px-6 lg:px-8">
        <div class="mx-auto max-w-2xl pt-10">

          <div class="text-center">
            <div class="flex justify-center">
              <img src="../assets/imgs/logo.webp" alt="Logo Taxi Opatija" class="-mt-5 object-cover w-3/12 sm:w-24" />
            </div>
            <h1 class="text-6xl font-bold tracking-tight text-gray-900">
              Usluge
            </h1>



            <section id='usluge'>

              <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 " />
              <ul
                class="flex flex-wrap justify-center items-center mb-3 text-xs font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" class="hover:underline me-4 md:me-6 text-base">Taxi | Transfers | Excursions | Rent a Van
                    | Rent a Car | & more</a>
                </li>
              </ul>
              <div class="flex items-center mt-2.5 mb-5 justify-center">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <span
                  class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
              </div>
              <p class="text-center text-[17px] my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4">
              <div class=' mb-44 border-2 bg-slate-100 p-5 rounded-xl custom-shadow'>
                <ul class='text-3xl'>
                  <li class='font-bold border-b text-sky-900 py-4'> • Taxi služba
                    <p class='text-gray-500 text-sm'>Profesionalna taxi usluga dostupna 24/7 za sve vaše prijevozne
                      potrebe u Opatiji i okolici.</p>
                  </li>

                  <li class='font-bold border-b text-sky-900 py-4'> • Transferi
                    <p class='text-gray-500 text-sm'>Brzi i udobni transferi do i od zračnih luka: Krk, Pula, Zagreb,
                      Trst, Ljubljana.</p>
                  </li>
                  <li class='font-bold border-b text-sky-900 py-4'> • Ekskurzije
                    <p class='text-gray-500 text-sm'>Organizirane ekskurzije kako biste istražili ljepote Kvarnera i
                      okolnih područja uz udoban prijevoz.</p>
                  </li>
                  <li class='font-bold border-b text-sky-900 py-4'> • Najam kombi vozila (8+1)
                    <p class='text-gray-500 text-sm'>Fleksibilni najam kombi vozila za grupe ili veće obitelji,
                      prilagođen
                      vašim potrebama.</p>
                  </li>
                  <li class='font-bold border-b text-sky-900 py-4'> • Najam automobila
                    <p class='text-gray-500 text-sm'>Najam vozila po povoljnim cijenama kako biste istražili destinacije
                      u
                      vlastitom ritmu.</p>
                  </li>
                  <li class='font-bold border-b text-sky-900 py-4'> • I mnogo više
                    <p class='text-gray-500 text-sm'>Pružamo i širok spektar dodatnih usluga kako bismo zadovoljili sve
                      vaše potrebe za prijevozom.</p>
                  </li>
                </ul>
                <a id="callLink4" href="tel:+38598491369" class=" my-6 w-50 flex justify-center">

                  <button
                    class="bg-blue-700 border-2 border-blue-50 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg text-lg">
                    Call +38598491369
                  </button>
                </a>
              </div>

              </p>
            </section>



          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="bg-white rounded-lg custom-shadow dark:bg-gray-900 w-full fixed bottom-0">
    <div class="w-full max-w-screen-xl mx-auto p-4 pb-0 md:py-4">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="tel:+38598491369" class="flex justify-between items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
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
              class="block me-4 md:me-6 text-sm text-blue-800">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/taxiopatija.hr/" target="_blank"
              class="block me-4 md:me-6 text-sm text-purple-800">Instagram</a>
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
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.custom-shadow {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>

<script setup>
useHead({
  title: "Taxi Opatija | 0 - 24",
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
