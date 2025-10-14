<script setup>
import { ref } from "vue";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";
import "vue3-toastify/dist/index.css";

const router = useRouter();

let firstname = ref("");
let surname = ref("");
let phone = ref("");
let email = ref("");
let pickuplocation = ref("");
let pickupdate = ref("");
let time = ref("");
let preference = ref("");

const bookvehicle = async (req, res) => {
  try {
    const res = await fetch(`https://kayson-clone-backend.vercel.app/bookvehicle`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstname.value,
        surname: surname.value,
        phone: phone.value,
        email: email.value,
        pickuplocation: pickuplocation.value,
        pickupdate: pickupdate.value,
        time: time.value,
        preference: preference.value,
      }),
    });

    if (!res.ok) {
      const errBody = await res.status(500).json().catch(() => ({}));
      console.error("Response error", errBody);
      return;
    }
    
    toast("Booking successfull, we'll get back to you shortly!", {
        autoClose: 3500,
      });

    // redirect to home page
    router.push("/");
  } catch (err) {
    console.error("Failed to get server" + err);
  }
};
</script>
<template>
  <!-- id="tops"-->
  <section class="flex flex-col p-5 lg:p-10 xl:px-20">
    <div class="flex flex-col space-y-3">
      <p class="text-3xl text-black font-semibold">BOOK A VEHICLE</p>
      <P class="text-sm text-gray-800/50"
        >Please fill in the booking form below and we will get back to you</P
      >
    </div>
    <form
      class="flex flex-col mt-7 w-full space-y-5"
      method="POST"
      @submit.prevent="bookvehicle"
    >
      <div class="flex flex-col lg:flex-row space-x-10 space-y-10">
        <div class="flex flex-col space-y-1.5 lg:w-1/2">
          <label for="firstname" class="text-green-600 text-sm font-bold"
            >Your First Name</label
          >
          <input
            type="text"
            name="firstname"
            v-model="firstname"
            placeholder="John"
            class="placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full"
            required
          />
          <label for="phone" class="text-green-600 text-sm font-bold"
            >Your Phone Number</label
          >
          <input
            type="text"
            name="phone"
            v-model="phone"
            class="placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full"
            placeholder="08000000000"
            required
          />
          <label for="pickuplocation" class="text-green-600 text-sm font-bold"
            >Pickup Location</label
          >
          <input
            type="text"
            name="pickuplocation"
            v-model="pickuplocation"
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
            name="surname"
            v-model="surname"
            class="placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full"
            placeholder="Doe"
            required
          />
          <label for="email" class="text-green-600 text-sm font-bold"
            >Your Email Address</label
          >
          <input
            type="email"
            name="email"
            v-model="email"
            class="placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full"
            placeholder="you@email.com"
            required
          />
          <div class="flex space-x-10">
            <div>
              <label for="date" class="text-green-600 text-sm font-bold"
                >Pickup Date</label
              >
              <input
                type="date"
                name="date"
                v-model="pickupdate"
                class="block placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full"
                required
              />
            </div>
            <div>
              <label for="time" class="text-green-600 text-sm font-bold"
                >Time</label
              >
              <input
                type="time"
                name="time"
                v-model="time"
                class="block placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <!-- <label class="text-green-600 text-sm font-bold">Tell us about your booking preferences.</label> -->
        <textarea
          name="preference"
          v-model="preference"
          class="block placeholder:text-gray-600/50 text-gray-600 p-2 border-[2px] border-gray-300 w-full h-[200px]"
          placeholder="Tell us about your booking preferences."
        ></textarea>
      </div>
      <div class="flex justify-end">
        <button
          type="submit"
          class="rounded-md py-3 px-4 mt-2 text-white font-semibold bg-gray-900 hover:z-50 hover:bg-green-600"
        >
          Book Now
        </button>
      </div>
    </form>
  </section>
</template>
