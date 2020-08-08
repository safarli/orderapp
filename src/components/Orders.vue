<template>
  <div>
    <div class="shadebox" @click="closeMsg"></div>
    <div class="msgbox">
      <p>
        You've ordered
        <span style="font-weight: 700; color: red;">{{ basket }} </span>
      </p>
    </div>
    <h1>Orders page</h1>
    <h2>Select a product and order it below</h2>

    <select v-model="selected">
      <option
        v-for="product in getProducts"
        :value="product.value"
        :key="product.id"
        >{{ product.text }}</option
      >
    </select>
    <p>Selected product: {{ selected }}</p>
    <button @click="addToBasket">Add to basket</button>
    <p>Basket items: {{ basket }}</p>
    <button @click="checkout">Checkout</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selected: "",
      basket: [],
    };
  },
  methods: {
    closeMsg() {
      //niye asagidaki kodlar vue data property olanda islemir
      const msgbox = document.querySelector(".msgbox");
      const shadebox = document.querySelector(".shadebox");
      msgbox.style.display = "none";
      shadebox.style.display = "none";
    },
    addToBasket() {
      if (this.selected.length != 0) {
        this.basket.push(this.selected);
      } else {
        alert("select an item first!");
      }
    },
    checkout() {
      const msgbox = document.querySelector(".msgbox");
      const shadebox = document.querySelector(".shadebox");

      if (this.basket.length != 0) {
        this.$store.commit("addOrder", this.basket);
        msgbox.style.display = "flex";
        shadebox.style.display = "block";
      } else {
        alert("First fill up  your basket please!");
      }
    },
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProducts;
    },
  },
};
</script>

<style>
.shadebox {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
}
.msgbox {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 450px;
  height: 300px;
  background-color: rgb(176, 255, 124);
  font-family: "JetBrains Mono";
  font-size: 24px;
  outline: 4px dashed goldenrod;
}
.msgbox p {
  width: 60%;
  margin: 0 auto;
}
</style>
