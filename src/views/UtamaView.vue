<template>
<div class="container">
    <div class="alert alert-primary" role="alert">A simple primary </div>
    <h2>status form {{ form.open }}</h2>
    <h2 v-if="newTitle > 0">judul form {{ form.title }}</h2>
  
    <h3>increment {{ increment }}</h3>
  
    <input type="text" v-model="form.title" class="mb-2"> <br>
  
    <button type="button" class="btn btn-outline-info" @click="tambahIncrement">tambah increment</button>
    <button type="button" class="btn btn-outline-info" @click="kurangIncrement">kurang increment</button>
    <button type="button" class="btn btn-outline-info" @click="showModal(true)">Show</button>
    <button type="button" class="btn btn-outline-danger" @click="close">Close</button>
    <modal-dialog :show="form.open" @closeModal="closeModal"/>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import ModalDialog from "../components/TheModalDialog.vue";

const form = reactive({
  open: false,
  title: ''
});

const increment = ref(0);

const tambahIncrement = () => increment.value++;
const kurangIncrement = () => increment.value--;

const showModal = (data) => (form.open = data);
const closeModal = (data) => (form.open = data);

const close = () => showModal(false);

const saveChanges = (newTitle) => {
  form.title = newTitle; // Update form.title with the new title from the modal
};

const user = ref();

onMounted(async() =>{
  const data = await axios.get('/api/society')
  console.log(data);
  user.data = data.data;
})
</script>