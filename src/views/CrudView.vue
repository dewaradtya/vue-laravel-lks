<template>
    <div>Ini Halaman CRUD</div>
    <div class="alert alert-success" v-if="successMessage">{{ successMessage }}</div>
    <div class="alert alert-danger" v-if="errorMessage">{{ errorMessage }}</div>
    <div><button class="btn btn-primary" @click="addSociety">Tambah Data</button></div>
  
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Born Date</th>
            <th scope="col">Gender</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in societies" :key="row.id_society">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ row.name }}</td>
            <td>{{ row.born_date }}</td>
            <td v-if="row.gender === 'male'">L</td>
            <td v-else="Perempuan">P</td>
            <td>
              <router-link :to="{ name: 'crud-edit', params: { id_society: row.id_society } }" class="btn btn-primary me-2 mb-2">Edit</router-link>
              <router-link :to="{ name: 'crud-show', params: { id_society: row.id_society } }" class="btn btn-warning me-2 mb-2">Show</router-link>  
              <button @click="deleteSocieties(row.id_society)" class="btn btn-danger mb-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import useSocieties from '../composable/societies'
  
  const router = useRouter()
  const { societies, getSocieties, destroySocieties } = useSocieties()
  
  const successMessage = ref('')
  const errorMessage = ref('')
  
  const deleteSocieties = async (id) => {
    if (!window.confirm('Are you sure you want to delete this data?')) {
      // Show alert for cancellation
      errorMessage.value = 'Deletion cancelled.'
      return
    }
  
    try {
      await destroySocieties(id)
      await getSocieties()
  
      // Show alert for successful deletion
      successMessage.value = 'Data deleted successfully.'
    } catch (e) {
      console.error('Error deleting society:', e)
  
      // Show alert for failure
      errorMessage.value = 'Failed to delete the record. Please try again.'
    }
  }
  
  const addSociety = () => {
    router.push({ name: 'crud-add' })
  }
  
  onMounted(() => {
    getSocieties()
  })
  </script>