<template>
  <div>
    <h1>Shop</h1>
    <p>Coins left to spend: {{wealthLeft}}</p>
    <div id="equipmentList">
      <EquipmentItem id="item" v-for="(eq) in equipment" :key="eq.id" :equipment='eq' @addToCart='addToCart($event)' />
    </div>
    <Cart :cart='cart' :cartTotal='cartTotal' :character='character' @checkout='checkout($event)'/>
  </div>
</template>
<script lang="ts">
import { Component, Vue , Prop, Watch} from 'vue-property-decorator';
import { Equipment, getShop, CharacterModel, getCharacter, purchaseRequest, PurchaseResponse } from '../apiRequests';
import EquipmentItem from '../components/EquipmentItem.vue';
import Cart from '../components/Cart.vue';

@Component({
  components: {
    EquipmentItem,
    Cart,
  },
})
export default class Shop extends Vue {  
  @Prop() equipment!: Equipment[];
  @Prop() character!: CharacterModel;
  @Prop({default:() => []}) cart!: Equipment[];
  @Prop({default:0}) cartTotal!: number;
  @Prop({default:false}) canAffordCart!: boolean;
  @Prop() wealthLeft!: number;

  data() {
    return {
      wealthLeft: this.character.wealth-this.cartTotal
    }
  }
  async mounted() {
    await this.callAPI().then(() => this.updateWealthLeft());
  }
  async callAPI(){
    this.equipment = await getShop();
    this.character = await getCharacter();
  }
  checkout() {
    this.cart.forEach(equipment => {
      const resp = this.purchaseSubmit(equipment.id)
    });
    this.cart = [];
  }
  async purchaseSubmit(equipmentId: number) {
    await purchaseRequest(equipmentId).then((res: PurchaseResponse) => this.callAPI())
  }
  addToCart(equipmentToCart: Equipment){
    this.updateWealthLeft()
    if(this.checkIfAlreadyInCart(equipmentToCart)) {
      alert("you have already bought this item")
    }
    else if(equipmentToCart.value <= this.wealthLeft){
      this.cart.push(equipmentToCart)
    }
    
    else {
      alert("Sorry you can't afford this")
    }
  }
  checkIfAlreadyInCart(equipmentToCart: Equipment){
    const found = this.cart.some(e => e.id==equipmentToCart.id);
    return found;
  }
  @Watch('equipment')
  onEquipmentCanged() {
    console.log("equipmentchanged!!    ",this.equipment.length)
  }
  @Watch('cart')
  onCartChanged() {
    let sum = 0;
    this.cart.forEach(equipment => {
      sum += equipment.value
    });
    this.cartTotal = sum;
    this.checkCanAffordCart();
    if(this.cart.length!=0){
      this.updateWealthLeft();
    }
    
  }
  updateWealthLeft(){
    this.wealthLeft = this.character.wealth-this.cartTotal;
  }
  checkCanAffordCart(){
    this.canAffordCart = this.cartTotal < this.character.wealth;
  }
}
</script>

<style scoped>
#equipmentList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
#item {
  flex: 0.2;
  margin: 1em;
  min-width: 10em;
}
</style>