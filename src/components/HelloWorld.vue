<template>
  <v-container id="app">
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Urban Insights</h1>
        <p class="subheading font-weight-regular">
          For documentation and developer support,
          <br>please see the project on
          <a
            href="https://github.com/mitevpi/urban-insights-frontend"
            target="_blank"
          >GitHub</a>
        </p>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >{{ next.text }}</a>
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Developers</h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >{{ link.text }}</a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    importantLinks: [
      {
        text: "Matthias Levinsen",
        href: "https://github.com/"
      },
      {
        text: "Mathias Sønderskov Nielsen",
        href: "https://github.com/Sonderwoods"
      },
      {
        text: "Petr Mitev",
        href: "https://github.com/mitevpi"
      }
    ],
    whatsNext: [
      {
        text: "Links",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Documentation",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Website",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
