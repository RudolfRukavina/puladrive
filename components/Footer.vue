<template>
  <!-- <footer class="bg-white ">
    <div class=" grid grid-cols-2 gap-2 lg:grid-cols-6  ring-primary/5  px-8 py-3 pt-6 bg-gray-100">



      <div class="flex justify-center my-1 lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href="tel:+385917865619"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium  w-full max-w-md text-center rounded border border-slate-800 p-1 bg-white text-slate-800 hover:bg-gray-50 hover:border-slate-900 focus:ring-4 focus:ring-gray-100  hover:shadow-lg">
          <i class='fa fa-phone'> Nazovite nas</i>
        </a>
      </div>
      <div class="flex justify-center my-1 lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href="mailto:poduke@parallel.hr"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium  w-full max-w-md text-center rounded border border-slate-800 bg-white text-slate-800 hover:bg-gray-50  focus:ring-4 focus:ring-gray-100  hover:shadow-lg">
          <i class='fa fa-envelope text-nowrap'> <span class='text-sm'> Pošaljite email</span></i>
        </a>
      </div>
      <div class="flex justify-center my-1 lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href='https://www.facebook.com/poduke.parallel' target='_blank'
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium  w-full max-w-md text-center rounded border border-slate-800 bg-white text-slate-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-100  hover:shadow-lg">
          <i class='fa fa-facebook'>acebook</i> </a>
      </div>
      <div class="flex justify-center my-1 lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href='https://www.instagram.com/poduke.parallel' target='_blank'
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium  w-full max-w-md text-center rounded border border-slate-800 bg-white text-slate-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-100  hover:shadow-lg">
          <i class='fa fa-instagram'> Instagram</i>
        </a>
      </div>
      <div class="flex justify-center my-1 lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href="https://maps.app.goo.gl/9dFa9f6sUkVuHxRD9" target='_blank'
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium  w-full max-w-md text-center rounded border border-slate-800 bg-white text-slate-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-100  hover:shadow-lg">
          <i class='fa fa-map-marker'> Google Maps</i> </a>
      </div>
      <div class="flex justify-center my-1 lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <NuxtLink to='/radnovrijeme'
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium  w-full max-w-md text-center rounded border border-slate-800 bg-white text-slate-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-100  hover:shadow-lg">
          <a href=""><i class='fa fa-calendar'> Radno vrijeme</i></a>
        </NuxtLink>
      </div>



    </div>
    <div class="mx-auto w-full max-w-screen-xl px-4 pb-3 lg:pb-6">

      <hr class=" py-2 border-gray-200 w-full " />
      <div class=" grid-cols-2 flex justify-evenly gap-8 sm:gap-6 sm:grid-cols-3">

        <div>
          <ul class="text-gray-500 font-medium">
            <li class="">
              <a href="https://www.facebook.com/poduke.parallel" class="hover:underline ">Politika Privatnosti</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="text-gray-500  font-medium">
            <li class=''>
              <a href="#" class="hover:underline">Uvjeti korištenja</a>
            </li>

          </ul>
        </div>
      </div>
      <hr class="my-4 border-gray-200 sm:mx-auto  lg:my-6" />
      <div class=" items-center text-center justify-center">
        <span class="text-sm text-gray-500 sm:text-center ">© 2024 <a href="/" class="hover:underline">Parallel d.o.o.</a>
          Sva prava zadržana.

        </span>
      </div>

    </div>
  </footer> -->

  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6 text-black">
          <a class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            <!--Icon from: http://www.potlabicons.com/ -->
            <img src="../assets/img/ktourslogo.png" title="Taxi Opatija's business image, Logo" alt="Taxi Opatija, logo"
              class="h-14 w-14  border-4 border-gray-50  inline-block me-3 rounded-xl">

          </a>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Kvarner Tours</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink :to="{ path: '/', hash: '#naslovnica' }"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">Naslovnica
              </NuxtLink>
            </li>

            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink :to="{ path: '/', hash: '#usluge' }"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">Usluge</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink :to="{ path: '/onama', hash: '#naslovnica' }"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">O nama</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink :to="{ path: '/', hash: '#radnovrijeme' }"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">Radno vrijeme</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="https://maps.app.goo.gl/Fe8cqaybjmVwi4P67" target='_blank'
                class=" hover:underline text-gray-800 underline hover:text-pink-500">Dr. Ante Mandića 2, Opatija</a>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Najam putničkih kombi vozila</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink :to="{ path: '/pripreme', hash: '#cjenik' }"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">Bez vozača
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink :to="{ path: '/pripreme', hash: '#mojplanzamaturu' }"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">S vozačem</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Najam automobila</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink :to="{ path: '/instrukcije', hash: '#osnovnaskola' }"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">Bez vozača
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink :to="{ path: '/instrukcije', hash: '#srednjaskola' }"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">S vozačem</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Mreže</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="https://www.facebook.com/poduke.parallel" target='_blank'
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="https://www.instagram.com/poduke.parallel" target='_blank'
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">Instagram</a>
            </li>

          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Prava korisnika</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Uvjeti korištenja</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privatnost</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>