<template>
    <div v-if="show" class="modal fade show" role="dialog" tabindex="-1" style="display: block;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="close"></button>
                </div>
                <div class="modal-body">
                    <!-- <p>Modal body text goes here.</p> -->
                    <p>Masukkan Nama Anda</p>
                    <input type="text" v-model="newTitle">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="close">Close</button>
                    <button type="button" class="btn btn-primary" @click="saveChanges">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { show } = defineProps(['show']);
const emit = defineEmits(['closeModal']);

const form = ref({
  title: ''
});

const close = () => {
  emit('closeModal', false);
  form.title = ''; // Reset the title when closing the modal
};


</script>