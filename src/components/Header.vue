<template>
	<nav class="nav-bar">
        <div class="container">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/" style="float: right">{{userName}}</RouterLink>
        </div>
	</nav>
</template>

<script>
import { RouterLink } from "vue-router";
import { mapGetters } from 'vuex';
export default {
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['getUserName']),
        userName() {
            return this.getUserName
        }
    }
}
</script>

<style>
.nav-bar {
    background-color: #712cf9;
    color: #fff;
    display: block;
}

.container {
    padding: 10px 0;
}

a, a:hover {
    color: white;
    text-decoration: none;
     padding: 0px 10px;
}
</style>
