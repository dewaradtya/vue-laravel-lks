<template>
  <!-- <div v-if="errors">
            <div v-for="(v, k) in errors" :key="k" class="bg-red-400 text-dark rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
                <p v-for="error in v" :key="error" class="text-sm">
                    {{ error }}
                </p>
            </div>
        </div> -->

  <div>
    <h2 class="mb-3 mt-3">Tambah Data</h2>
    <hr>
    <form class="space-y-6" @submit.prevent="saveSociety">
      <div class="mb-3">
        <label for="id_card_number" class="form-label">ID Card Number</label>
        <input type="text" id_card_number="id_card_number" id="id_card_number" class="form-control"
          v-model="form.id_card_number">
        <div v-if="errors.id_card_number" class="text-red-500 text-sm">{{ errors.id_card_number[0] }}</div>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" name="name" id="name" class="form-control" v-model="form.name">
        <div v-if="errors.name" class="text-red-500 text-sm">{{ errors.name[0] }}</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="text" password="password" id="password" class="form-control" v-model="form.password">
        <div v-if="errors.password" class="text-red-500 text-sm">{{ errors.password[0] }}</div>
      </div>
      <div class="mb-3">
        <label for="born_date" class="form-label">Born Date</label>
        <input type="text" name="born_date" id="born_date" class="form-control" v-model="form.born_date">
        <small class="text-muted">Format: YYYY-MM-DD</small>
        <div v-if="errors.born_date" class="text-red-500 text-sm">{{ errors.born_date[0] }}</div>
      </div>
      <div class="mb-3">
        <label for="gender" class="form-label">Gender</label>
        <select class="form-select" v-model="form.gender">
          <option selected disabled>Chose Gender</option>
          <option value="male">Laki-laki</option>
          <option value="female">Perempuan</option>
        </select>
        <div v-if="errors.gender" class="text-red-500 text-sm">{{ errors.gender[0] }}</div>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Alamat</label>
        <input type="text" address="address" id="address" class="form-control" v-model="form.address">
        <div v-if="errors.address" class="text-red-500 text-sm">{{ errors.address[0] }}</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Regional Id</label>
        <select class="form-select" aria-label="Default select example" v-model="form.regional_id">
          <option selected disabled>Pilih Regional</option>
          <option :value="row.id" v-for="row in regionals" v-bind:key="row.index">
            {{ row.province }} - {{ row.district }}
          </option>
        </select>
        <div class="form-text text-danger" v-if="errors.regional_id">
          {{ errors.regional_id[0] }}
        </div>
      </div>
      <button type="submit" class="btn btn-primary mb-4 me-2">Tambah Data</button>
      <router-link to="/crud"><button @click="backToCrudView" class="btn btn-danger mb-4">Back</button></router-link>
    </form>
  </div>
</template>
    
<script setup>
import useSocieties from '../composable/societies'
import useRegionals from '../composable/regionals'
import { onMounted, reactive } from "vue";

const form = reactive({
  id_card_number: '',
  password: '',
  name: '',
  born_date: '',
  gender: '',
  address: '',
  regional_id: ''
})

const { errors, storeSocieties } = useSocieties()
const { regionals, getRegionalLists } = useRegionals()

onMounted(async () => {
  await getRegionalLists()
})

const saveSociety = async () => {
  try {
    await storeSocieties({ ...form });
    form.id_card_number = '';
    form.password = '';
    form.name = '';
    form.born_date = '';
    form.gender = '';
    form.address = '';
    form.regional_id = '';
  } catch (e) {
    console.error('Error saving society:', e);
  }
}

</script>