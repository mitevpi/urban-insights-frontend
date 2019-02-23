<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br>check out the
      <a
        href="https://github.com/mitevpi/urban-insights-frontend"
        target="_blank"
        rel="noopener"
      >project documentation on GitHub</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
          target="_blank"
          rel="noopener"
        >pwa</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a>
      </li>
      <li>
        <a
          href="https://github.com/ModusCreateOrg/ionic-vue"
          target="_blank"
          rel="noopener"
        >ionic</a>
      </li>
    </ul>
    <h3>Developers</h3>
    <ul>
      <li>
        <a
          href="https://github.com/Sonderwoods"
          target="_blank"
          rel="noopener"
        >Mathias Sønderskov Nielsen</a>
      </li>
      <li>
        <a href="https://github.com/" target="_blank" rel="noopener">Mikkel Steenberg</a>
      </li>
      <li>
        <a href="https://github.com/mitevpi" target="_blank" rel="noopener">Petr Mitev</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
