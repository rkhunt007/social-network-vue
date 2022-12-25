<template>
    <Header></Header>
    <div class="wrapper">
        <h3>dashboard</h3>
        <div v-for="user of users" :key="user._id">
            <p>{{ user.name }}</p>
        </div>
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

</style>