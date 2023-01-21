<template>
    <Header></Header>
    <div class="wrapper">
        <h3 class="dashboard-title">Dashboard</h3>

        <section id="friendsList">
            <h3 class="friends-list-title text-center">Find Friends</h3>
            <div>
                <article v-for="user of users" :key="user._id" class="user-wrapper text-center">
                    <FriendCard :user="user"></FriendCard>
                </article>
            </div>
        </section>
    </div>
    <Footer></Footer>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import axios from "../api/api";
import FriendCard from '../components/Friend-Card.vue'

export default {
    components: {
        Header,
        Footer,
        FriendCard
    },
    data() {
        return {
            isLoading: false,
            users: []
        }
    },
    mounted() {
        this.getAllUsers()
    },
    methods: {
        async getAllUsers() {
            console.log(':::Dashboard:Comp:::getAllUsers');
            this.isLoading = true;
            try {
                const res = await axios.get('users');
                this.users = res.data;
                this.isLoading = false;
            } catch (error) {
                let errorText = "";
                if (error.response.data?.errors) {
                    error.response.data?.errors.forEach((err) => {
                        errorText += err.msg + " ";
                    });
                    if (!errorText) this.errorText = "Something went wrong! try again.";
                    this.errorText = errorText;
                }
                this.isLoading = false;
            }
        }
    }
}
</script>

<style scoped>
.wrapper {
    margin: 10px;
}

.dashboard-title {
    margin-left: 10px;
}

.friends-list-title {
    margin-left: 10px;
}

.user-wrapper {
    width: calc(20% - 20px);
    display: inline-block;
    vertical-align: text-top;
}
</style>