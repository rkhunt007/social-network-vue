<template>
   <div class="main-footer">
        <ul class="main-footer-links text-center">
            <li class="main-footer-link">
                <a href="void:javascript(0)">
                    &#169; Copyright 2023
                </a>
            </li>
        </ul>
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

.user-image {
    background-color: aliceblue;
    border-radius: 50%;
    border: 2px solid gray;
    width: 128px;
    height: 128px;
    margin: 0 auto 5px auto;
}

.main-footer {
    background-color: #385898;
    padding: 16px;
    margin-top: auto;
}

.main-footer-links {
    list-style: none;
    margin: 0;
    padding: 0;
}

.main-footer-link {
    display: inline-block;
    margin: 0 10px;
}

.main-footer-link a {
    text-decoration: none;
    color: white;
}



</style>
