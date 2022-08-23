<template>
	<div class="container auth-container">
		<div class="shadow-sm p-3 mb-5 bg-body rounded">
			<form @submit.prevent="submit" novalidate class="mb-3">
				<div class="mb-3" v-if="mode === 'signup'">
					<input
						type="text"
						class="form-control"
						id="name"
						placeholder="Name"
						v-model.trim="name.value"
						:class="{ 'invalid-input': !name.isValid }"
					/>
					<div v-if="!name.isValid" class="invalid-input-message">
						Please enter valid name.
					</div>
				</div>
				<div class="mb-3">
					<input
						type="email"
						class="form-control"
						id="email"
						placeholder="Email"
						v-model.trim="email.value"
						:class="{ 'invalid-input': !email.isValid }"
					/>
					<div v-if="!email.isValid" class="invalid-input-message">
						Please enter valid email.
					</div>
				</div>
				<div class="mb-3">
					<input
						type="password"
						class="form-control"
						id="password"
						placeholder="Password"
						v-model.trim="password.value"
						:class="{ 'invalid-input': !password.isValid }"
					/>
					<div v-if="!password.isValid" class="invalid-input-message">
						Please enter valid password.
					</div>
				</div>
				<div class="mb-3" v-if="mode === 'signup'">
					<input
						type="password"
						class="form-control"
						id="confirmPassword"
						placeholder="Confirm Password"
						v-model.trim="confirmPassword.value"
						:class="{ 'invalid-input': !confirmPassword.isValid }"
					/>
					<div v-if="!confirmPassword.isValid" class="invalid-input-message">
						Password should match.
					</div>
				</div>
				<div class="d-grid gap-2">
					<button type="submit" class="btn btn-primary" :disabled="isLoading">
						<span
							v-if="isLoading"
							class="spinner-border spinner-border-sm"
							role="status"
							aria-hidden="true"
						></span>
						{{ mode === "login" ? "Login" : "Sign up" }}
					</button>
				</div>
				<hr />
				<div class="d-grid gap-2">
					<button
						v-if="mode === 'login'"
						type="submit"
						class="btn btn-success"
						@click="toggleMode('signup')"
					>
						Create new account
					</button>
					<button
						v-if="mode === 'signup'"
						type="submit"
						class="btn btn-success"
						@click="toggleMode('login')"
					>
						Login
					</button>
				</div>
			</form>
			<div class="alert alert-danger" role="alert" v-if="errorText">
				{{ errorText }}
			</div>
		</div>
	</div>
</template>

<script>
import axios from "../api/api";
import { mapActions } from "vuex";
export default {
	data() {
		return {
			name: {
				value: "",
				isValid: true,
			},
			email: {
				value: "",
				isValid: true,
			},
			password: {
				value: "",
				isValid: true,
			},
			confirmPassword: {
				value: "",
				isValid: true,
			},
			mode: "login",
			isValidForm: true,
			isLoading: false,
			errorText: "",
		};
	},
	methods: {
		...mapActions(["setAuthToken", "setUserDetails"]),
		toggleMode(mode) {
			this.mode = mode;
			this.resetForm();
		},
		submit() {
			this.isValidForm = true;

			if (!this.email.value) {
				this.email.isValid = false;
				this.isValidForm = false;
			}
			if (!this.password.value) {
				this.password.isValid = false;
				this.isValidForm = false;
			}

			if (this.mode === "login") {
				if (!this.isValidForm) return;
				console.log("login");
				this.submitData("auth/login", {
					email: this.email.value,
					password: this.password.value,
				});
			} else {
				if (!this.name.value) {
					this.name.isValid = false;
					this.isValidForm = false;
				}
				if (this.password.value !== this.confirmPassword.value) {
					this.confirmPassword.isValid = false;
					this.isValidForm = false;
				}
				if (!this.isValidForm) return;

				console.log("signup");
				this.submitData("users/register", {
					email: this.email.value,
					name: this.name.value,
					password: this.password.value,
				});
			}
		},
		async submitData(path, data) {
			this.errorText = null;
			this.isLoading = true;
			try {
				const res = await axios.post(path, data);
				this.isLoading = false;
				this.setAuthToken(res.data.token);
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

			this.resetForm();
		},
		resetForm() {
			this.isValidForm = true;
			this.name.value = "";
			this.name.isValid = true;
			this.email.value = "";
			this.email.isValid = true;
			this.password.value = "";
			this.password.isValid = true;
			this.confirmPassword.value = "";
			this.confirmPassword.isValid = true;
		},
	},
};
</script>

<style>
.auth-container {
    width: 400px;
    margin-top: 5%;
}
.invalid-input-message {
	font-size: 0.875em;
	color: #dc3545;
}
.invalid-input {
	border-color: #dc3545;
}
</style>
