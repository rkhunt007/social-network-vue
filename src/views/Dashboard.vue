<template>
    <Header></Header>
    <div class="wrapper">
        <h3 class="dashboard-title">Dashboard</h3>
        <section id="friendsList">
            <h3 class="friends-list-title">Friends List</h3>
                <div>
                    <article  v-for="user of users" :key="user._id" class="user">

                        <h3>{{ user.user.name }}</h3>
                        <p>{{ user.bio }}</p>
                        <p>{{ user.city }}</p>
                        <p>{{ user.profession }}</p>
                        <img :src="user.user.image" :alt="user.user.name">
                        <div>
                            <button>Add</button>
                        </div>

                    </article>
                    
                </div>
        </section>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import axios from "../api/api";

export default {
    components: {
        Header
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

.user {
    width: calc(20% - 20px);
    display: inline-block;
    background: #d5ffdc;
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    vertical-align: text-top;
    box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.5)
}
</style>