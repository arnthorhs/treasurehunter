<template>
  <div class="character">
    <h1>Character</h1>
    <h2 v-if="character">Name: {{ character.name }}</h2>
    <h2 v-if="character">Hit Points: {{ character.hitPoints }}</h2>
    <h2 v-if="character">Luck: {{ character.luck }}</h2>
    <h2 v-if="character">Wealth: {{ character.wealth }}</h2>
    <h2>Equipments: </h2>
    <div id="equip" v-if="typeof character.equipment!='undefined' && character.equipment.length!=0 ">
      <CharacterEquipment id="equipmentItem" v-for="(eq) in character.equipment" :key="eq.id" :equipment='eq'/>
    </div>
    <div v-else id="noEquipment"><p>You don't have any equipment, It is dangerous to go on treasure hunts without any equipments!</p></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CharacterModel, getCharacter } from '../apiRequests';
import CharacterEquipment from '../components/CharacterEquipment.vue'

@Component({
  components: {
    CharacterEquipment
  },
})export default class Character extends Vue {
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
#equip {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#equipmentItem { 
  flex: 0.3;
}
#noEquipment {
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translate(-50%, 0);
  position: fixed;
  align-self: space-around;
}
</style>
