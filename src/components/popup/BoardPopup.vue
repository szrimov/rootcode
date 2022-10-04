<template>
  <div class="popup position-absolute left-0 top-0 w-100">
    <div
      class="d-flex justify-content-center align-items-center vh-100 bg-secondary p-2 bg-opacity-50"
      role="presentation"
      @click.self="closePopup"
    >
      <div class="modal-dialog bg-white p-3 w-50">
        <form class="modal-content" @submit.prevent="addTask">
          <div class="modal-header">
            <h4 class="modal-title text-secondary">Новая запись</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="closePopup"
            ></button>
          </div>
          <div class="modal-body mt-3 mb-3">
            <label for="task" class="w-100">
              <input
                type="text"
                class="form-control"
                id="task"
                ref="task"
                v-model="task"
              />
            </label>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="addTask">
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    opened: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      task: '',
    };
  },
  mounted() {
    this.$refs.task.focus();
  },
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
    addTask() {
      this.$emit('addTask', this.task);
    },
  },
};
</script>

<style lang="scss">
.popup {
  z-index: 999;
}
</style>
