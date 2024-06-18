<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1>Login Page</h1>
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="loginUser">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" v-model="name" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="password" required>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>{{ errorMessage }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useSocieties from '../composable/societies'

const router = useRouter()
const { login } = useSocieties()

const name = ref('')
const password = ref('')
const errorMessage = ref('')

const loginUser = async () => {
  try {
    await login({ name: name.value, password: password.value })
    // Jika login berhasil, arahkan ke halaman yang sesuai
    router.push({ name: 'crud' })
  } catch (error) {
    console.error('Login error:', error)
    // Tangani kesalahan login dan tampilkan pesan kesalahan
    errorMessage.value = 'Login failed. Please check your credentials and try again.'
  }
}
</script>