<template>
  <div class="home">
    <Hero />
    <Work />
    <Skills />
    <About />
    <Contact />    
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/sections/home/Hero.vue";
import Work from "@/components/sections/home/Work.vue";
import Skills from "@/components/sections/home/Skills.vue";
import About from "@/components/sections/home/About.vue";
import Contact from "@/components/sections/home/Contact.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Work,
    Skills,
    About,
    Contact
  }
};
</script>
