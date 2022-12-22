<template>
    <header class="main-header">
        <div class="logo-container">
            <RouterLink to="/" class="logo">Home</RouterLink>
        </div>
        <nav class="main-nav">
            <ul class="main-nav-items">
                <li class="main-nav-item">
                    <RouterLink to="/">Profile</RouterLink>
                </li>
                <li class="main-nav-item">
                    <RouterLink to="/">Friends</RouterLink>
                </li>
                <li class="main-nav-item">
                    <RouterLink to="/">{{userName}}</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
	
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
.main-header {
    background-color: #385898;
    padding: 5px 10px;
}

.logo-container {
    vertical-align: middle;
}

.logo {
    font-size: 22px;
    font-weight: bold;
}

a, a:hover {
    color: white;
    text-decoration: none;
    padding: 0px 10px;
}

.main-header > div {
    display: inline-block;
}

.main-nav {
    display: inline-block;
    text-align: right;
    width: calc(100% - 85px);
    vertical-align: middle;
}

.main-nav-items {
    margin: 0;
    padding: 0;
    list-style: none;
}

.main-nav-item {
    display: inline-block;
}
</style>
