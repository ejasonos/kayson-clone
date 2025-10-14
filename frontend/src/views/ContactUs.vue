<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

let name = ref("");
let email = ref("");
let subject = ref("");
let message = ref("");

const router = useRouter();

const contactus = async (req, res) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL_LOCAL}/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        }),
      }
    );

    if (!res.ok) {
      const notifyFailure = () => {
        toast("Submitted Failed!", {
          autoClose: 3000,
        });
      };
      notifyFailure();
      res.status(500).json({ message: "Server error" });
      return;
    }

    const data = await res.json();

    const notifySuccess = () => {
      toast("Submitted request successfully. We will respond shortly!", {
        autoClose: 3000,
      });
    };
    notifySuccess();

    router.push("/");
  } catch (err) {
    console.error("Error: " + err);
  }
};
</script>
<template>
  <section
    class="flex flex-col p-5 lg:p-10 xl:px-20 xl:flex-row xl:space-x-10 gap-y-5"
  >
    <div class="flex flex-col space-y-3 xl:w-1/4">
      <div class="flex flex-col space-y-3">
        <div class="w-fit flex flex-col space-y-3 mb-5">
          <p class="text-black text-md font-bold uppercase">Keep in touch</p>
          <div class="w-1/2 h-1 bg-green-600 rounded-full"></div>
        </div>
        <p class="text-sm text-gray-800/50">
          If you're looking for a reliable bus hire company in Lagos, don't
          hesitate to give us a call. Kayson Classic's
          <span class="text-green-500">bus hire services</span> are sure to wow
          you.
        </p>
        <div class="flex items-center space-x-2">
          <div class="p-1 h-8 w-8 bg-gray-300 hover:bg-blue-800">
            <img src="/facebook.svg" class="filter invert-95 w-full h-full" />
          </div>
          <div class="p-1 h-8 w-8 bg-gray-300 hover:bg-blue-600">
            <img src="/linkedin.svg" class="filter invert-95 w-full h-full" />
          </div>
          <div class="p-1 h-8 w-8 bg-gray-300 hover:bg-amber-600">
            <img src="/instagram.svg" class="filter invert-95 w-full h-full" />
          </div>
          <div class="p-1 h-8 w-8 bg-gray-300 hover:bg-red-600">
            <img src="/google.svg" class="filter invert-95 w-full h-full" />
          </div>
          <div class="p-1 h-8 w-8 bg-gray-300 hover:bg-blue-400">
            <img src="/message.svg" class="filter invert-95 w-full h-full" />
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-3">
        <div class="flex flex-col w-fit space-y-3 mb-5">
          <p class="text-black text-md font-bold uppercase">
            Content Information
          </p>
          <div class="w-1/2 h-1 bg-green-600 rounded-full"></div>
        </div>
        <div class="flex flex-col text-sm text-gray-600 space-y-3">
          <p class="font-bold">Headquarters</p>
          <p class="font-thin">
            4 Mojisola Olusoga Close, River Valley Estate, Ojodu Berger
          </p>
          <div class="flex flex-col text-sm text-gray-600 space-y-3">
            <p class="font-bold">Operational address</p>
            <p class="font-thin">
              Plot 2, Block J, Sparklight Estate, Opp. OPIC Estate, Isher
              Berger, Along Lagos-Ibadan Expressway.
            </p>
          </div>
          <div class="flex flex-col space-y-2">
            <div class="flex items-center space-x-2">
              <div
                class="p-2 h-8 w-8 rounded-full bg-gray-400 hover:bg-green-500"
              >
                <img src="/phone.svg" class="h-full w-full filter invert-95" />
              </div>
              <span class="text-gray-600">09080806095</span>
            </div>
            <div class="flex items-center space-x-2">
              <div
                class="p-2 h-8 w-8 rounded-full bg-gray-400 hover:bg-green-500"
              >
                <img
                  src="/message.svg"
                  class="h-full w-full filter invert-95"
                />
              </div>
              <span class="text-green-600"
                ><a href="mailto:info@kayson.com.ng"
                  >info@kayson.com.ng</a
                ></span
              >
            </div>
            <div class="flex items-center space-x-2">
              <div
                class="p-2 h-8 w-8 rounded-full bg-gray-400 hover:bg-green-500"
              >
                <img
                  src="/message.svg"
                  class="h-full w-full filter invert-95"
                />
              </div>
              <span class="text-green-600"
                ><a href="mailto:bookings@kayson.com.ng"
                  >bookings@kayson.com.ng</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col space-y-3 xl:w-3/4">
      <div class="w-fit flex flex-col space-y-3 mb-5">
        <p class="text-md text-black font-bold uppercase">
          Want to get in touch with us?
        </p>
        <div class="w-1/2 h-1 bg-green-600 rounded-full"></div>
      </div>
      <p class="text-sm text-gray-800/50">
        Send us a message using the contact form below and we will be sure to
        get back to you.
      </p>
      <form
        method="POST"
        class="flex flex-col space-y-2"
        @submit.prevent="contactus"
      >
        <label for="name" class="text-sm text-gray-400"
          >Your Name (required)</label
        ><input
          type="text"
          v-model="name"
          name="name"
          required
          class="h-10 text-gray-800 border-2 border-gray-300 pl-3 focus:outline-0 focus:border-green-400"
        />
        <label for="email" class="text-sm text-gray-400"
          >Your Email (required)</label
        ><input
          type="email"
          v-model="email"
          name="email"
          required
          class="h-10 text-gray-800 border-2 border-gray-300 pl-3 focus:outline-0 focus:border-green-400"
        />
        <label for="subject" class="text-sm text-gray-400">Subject</label
        ><input
          type="text"
          v-model="subject"
          name="subject"
          class="h-10 text-gray-800 border-2 border-gray-300 pl-3 focus:outline-0 focus:border-green-400"
        />
        <label class="text-sm text-gray-400">Your Message</label
        ><textarea
          type="text"
          v-model="message"
          name="message"
          class="text-gray-800 h-50 w-full border-2 border-gray-300 pl-3 focus:outline-0 focus:border-green-400"
        ></textarea>
        <button
          type="submit"
          class="w-fit px-5 py-2 rounded-sm bg-green-500 uppercase font-bold text-white text-sm hover:bg-gray-600 border-2 border-green-500"
        >
          Send
        </button>
      </form>
    </div>
  </section>
</template>
