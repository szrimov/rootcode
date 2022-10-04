<template>
  <div>
    <board-popup
      v-if="opened"
      :opened="opened"
      @closePopup="closePopup"
      @addTask="addTask"
    />
    <div class="container">
      <div class="d-flex justify-content-evenly mt-5">
        <div class="col-3">
          <div class="d-flex justify-content-evenly align-items-center">
            <p class="mb-0 text-secondary">Группа 1</p>
            <button
              class="btn bi-file-earmark-plus text-success"
              @click="newTask(0)"
            ></button>
          </div>
          <draggable
            class="dragArea list-group"
            :list="list1"
            :group="{ name: 'task', pull: pullFunction }"
            @start="start"
          >
            <div
              class="list-group-item text-secondary"
              v-for="element in list1"
              :key="element.id"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>

        <div class="col-3">
          <div class="d-flex justify-content-evenly align-items-center">
            <p class="mb-0 text-secondary">Группа 2</p>
            <button
              class="btn bi-file-earmark-plus text-success"
              @click="newTask(1)"
            ></button>
          </div>

          <draggable class="dragArea list-group" :list="list2" group="task">
            <div
              class="list-group-item text-secondary"
              v-for="element in list2"
              :key="element.id"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>

        <div class="col-3">
          <div class="d-flex justify-content-evenly align-items-center">
            <p class="mb-0 text-secondary">Группа 3</p>
            <button
              class="btn bi-file-earmark-plus text-success"
              @click="newTask(2)"
            ></button>
          </div>

          <draggable class="dragArea list-group" :list="list3" group="task">
            <div
              class="list-group-item text-secondary"
              v-for="element in list3"
              :key="element.id"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoardPopup from '@/components/popup/BoardPopup.vue';
import draggable from 'vuedraggable';

let idGlobal = 11;

export default {
  components: {
    draggable,
    BoardPopup,
  },
  data() {
    return {
      opened: false,
      listId: null,
      list1: [
        { name: 'Задача 1', id: 1, listId: 0 },
        { name: 'Задача 2', id: 2, listId: 0 },
        { name: 'Задача 3', id: 3, listId: 0 },
      ],
      list2: [
        { name: 'Задача 4', id: 5, listId: 1 },
        { name: 'Задача 5', id: 6, listId: 1 },
        { name: 'Задача 6', id: 7, listId: 1 },
      ],
      list3: [
        { name: 'Задача 7', id: 8, listId: 2 },
        { name: 'Задача 8', id: 9, listId: 2 },
        { name: 'Задача 9', id: 10, listId: 2 },
      ],
      controlOnStart: true,
    };
  },
  computed: {
    lists() {
      return [this.list1, this.list2, this.list3];
    },
  },
  methods: {
    closePopup() {
      this.opened = !this.opened;
    },

    newTask(listId) {
      this.listId = listId;
      this.opened = !this.opened;
    },

    addTask(task) {
      this.lists[this.listId].push({ id: (idGlobal += 20), name: task });
      this.opened = !this.opened;
    },
    clone({ name }) {
      const obj = { name, id: (idGlobal += 1) };
      return obj;
    },
    pullFunction() {
      return this.controlOnStart ? 'clone' : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    },
  },
};
</script>
<style></style>
