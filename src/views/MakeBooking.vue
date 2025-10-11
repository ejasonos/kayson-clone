<template>
  <!-- id="tops"-->
  <section class="flex flex-col p-5 lg:p-10 xl:px-20">
    <div class="flex flex-col space-y-3">
      <p class="text-3xl text-black font-semibold">BOOK A VEHICLE</p>
      <P class="text-sm text-gray-800/50"
        >Please fill in the booking form below and we will get back to you</P
      >
    </div>
    <form class="flex flex-col mt-7 w-full space-y-5">
      <div class="flex flex-col lg:flex-row space-x-10 space-y-10">
        <div class="flex flex-col space-y-1.5 lg:w-1/2">
          <label for="firstname" class="text-green-600 text-sm font-bold"
            >Your First Name</label
          >
          <input
            type="text"
            name="firstname"
            placeholder="John"
            class="placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full"
            required
          />
          <label for="phone" class="text-green-600 text-sm font-bold"
            >Your Phone Number</label
          >
          <input
            type="text"
            class="placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full"
            placeholder="08000000000"
            required
          />
          <label for="location" class="text-green-600 text-sm font-bold"
            >Pickup Location</label
          >
          <input
            type="text"
            placeholder="Lagos"
            class="placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full"
          />
        </div>
        <div class="flex flex-col space-y-1.5 lg:w-1/2">
          <label for="surname" class="text-green-600 text-sm font-bold"
            >Your Surname</label
          >
          <input
            type="text"
            class="placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full"
            placeholder="Doe"
            required
          />
          <label for="email" class="text-green-600 text-sm font-bold"
            >Your Email Address</label
          >
          <input
            type="email"
            class="placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full"
            placeholder="you@email.com"
            required
          />
          <div class="flex space-x-10">
            <div>
              <label for="date" class="text-green-600 text-sm font-bold">Pickup Date</label>
              <input type="date" class="block placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full" required />
            </div>
            <div>
              <label for="time" class="text-green-600 text-sm font-bold">Time</label>
              <input type="time" class="block placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full" required />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-2">
      <!-- <label class="text-green-600 text-sm font-bold">Tell us about your booking preferences.</label> -->
      <textarea
        name="pref"
        class="block placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full h-[200px]"
        placeholder="Tell us about your booking preferences."
      ></textarea>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="rounded-md py-3 px-4 mt-2 text-white font-semibold bg-gray-900 hover:z-50 hover:bg-green-600">Book Now</button>
      </div>
    </form>
  </section>
</template>
