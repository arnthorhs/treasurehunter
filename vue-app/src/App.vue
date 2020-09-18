<template>
  <div id="app">
    <ul id="nav-bar">
      <li><router-link to="/" id="router-link"><b>Home</b></router-link></li>
      <li><router-link to="/character" id="router-link">Character</router-link></li>
      <li><router-link to="/shop" id="router-link">Shop</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
#nav-bar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li #router-link {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li #router-link:hover {
  background-color: #111;
}
#button {
  align-self: flex-end;
  margin: 0.5em;
  background-color:midnightblue;
  border: none;
}
#buttonText {
  color: whitesmoke
}
.armor{
  background-color: lightsalmon;
}
.weapon{
  background-color:lightcyan;
}
.trinket{
  background-color:lightseagreen;
}
</style>
