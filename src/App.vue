<template>
  <div>
    <ul>
      <li>
        <router-link
          :to="{ name: 'home' }"
          tag="a"
          active-class="activenav"
          exact
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'contact' }"
          tag="a"
          active-class="activenav"
          exact
          >Contact</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'orders' }"
          tag="a"
          active-class="activenav"
          exact
          >Orders</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'trackOrders' }"
          tag="a"
          active-class="activenav"
          exact
        >
          Track Orders
        </router-link>
      </li>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  width: 60%;
  margin: 0 auto;
}
ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
}
a {
  color: #333;
  border: 1px solid #000;
  padding: 5px 10px;
  background-color: greenyellow;
  text-decoration: none;
  font-family: "Arial";
  font-size: 18px;
  font-weight: 500;
}
a:hover {
  background-color: rgb(122, 180, 34);
}

.activenav {
  background-color: rgb(134, 226, 80);
  border-bottom: 4px solid #333;
}
</style>
