<template>
  <div class="character">
    <h1>Character</h1>
    <h2 v-if="character">Name: {{ character.name }}</h2>
    <h2 v-if="character">Hit Points: {{ character.hitPoints }}</h2>
    <h2 v-if="character">Luck: {{ character.luck }}</h2>
    <h2 v-if="character">Wealth: {{ character.wealth }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CharacterModel, getCharacter } from '../apiRequests';

@Component
export default class Character extends Vue {
  private character?: CharacterModel = undefined;

  data() {
    return {
      character: this.character
    }
  }

  // life-cycle hooks
  async mounted() {
    this.character = await getCharacter();
  }
}
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
