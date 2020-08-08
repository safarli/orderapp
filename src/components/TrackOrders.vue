<template>
  <div>
    <h1>Track your orders</h1>

    <div v-for="order in getOrders" :key="order" class="progress-container">
      <div class="progressbar">
        {{ percentage }}
      </div>
    </div>

    <button @click="startTimer">Start Timer</button>
    <p>Orders: {{ getOrders }}</p>
  </div>
</template>

<script>
export default {
  // funksiyani () -siz yazanda, hansisa async kod ve ya event handler ozu sonra cagirir onu
  // () - ile yazanda inse hemin an siz o funksiyani cagirirsiniz
  data: function() {
    return {
      percentage: 100,
      progressBars: [],
    };
  },
  methods: {
    startTimer() {
      setTimeout(() => {
        this.percentage -= 1;

        for (let i = 0; i < this.progressBars.length; i++) {
          this.progressBars[i].style.width = this.percentage + "%";
        }

        console.log(document.querySelector(".progressbar"));
        if (this.percentage != 0) {
          this.startTimer();
        }
      }, 500);
    },
  },
  computed: {
    getOrders() {
      return this.$store.getters.getOrders;
    },
  },
  mounted() {
    console.log("mounted() - Cagrildi!");
    // should use querySelectorAll to get list of selectors
    this.progressBars = document.querySelectorAll(".progressbar");
  },
  activated() {
    console.log("activated() - hook called");
    // should use querySelectorAll to get list of selectors
    this.progressBars = document.querySelectorAll(".progressbar");
  },
};
</script>

<style>
.progress-container {
  margin: 10px 0;
  width: 400px;
  border: 1px solid red;
}
.progressbar {
  width: 100%;
  height: 18px;
  color: white;
  background-color: purple;
}
</style>
