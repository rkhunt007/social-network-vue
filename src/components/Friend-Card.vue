<template>
    <div class="user">
        <div class="user-image">
            <!-- <img :src="user.user.image" :alt="user.user.name"> -->
        </div>
        <h3>{{ user.user.name }}</h3>
        <p>Working as <span class="text-bold">{{ user.profession }}</span> </p>
        <p>Lives in <span class="text-bold">{{ user.city }}</span> </p>
        <p>{{ user.bio }}</p>
        <div>
            <button class="btn btn-primary">Add Friend</button>
        </div>
    </div>
</template>

<script>
// import { RouterLink } from "vue-router";
// import { mapGetters } from 'vuex';
export default {
    props: {
        user: Object,
        required: true
    },
    data() {
        return {}
    },
    computed: {
        
    }
}
</script>

<style>

.user {
    background: aliceblue;
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5)
}

.user-image {
    background-color: aliceblue;
    border-radius: 50%;
    border: 2px solid gray;
    width: 128px;
    height: 128px;
    margin: 0 auto 5px auto;
}

</style>
