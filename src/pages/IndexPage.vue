<template>
  <q-header elevated class="bg-primary">
    <q-toolbar>
      <q-toolbar-title>비교과 프로그램 신청</q-toolbar-title>
      <q-input v-model="searchKeyword" dense>
        <template v-slot:prepend>
          <q-icon name="mdi-magnify" />
        </template>
      </q-input>
    </q-toolbar>
  </q-header>
  <q-page class="column items-center justify-start" style="margin-left: 10px; margin-right: 10px; margin-top: 10px">
    <ProgramCard
      v-for="programItem in programItemList"
      v-show="programItem.title.includes(searchKeyword)"
      :program="programItem" style="margin-bottom: 10px"/>
  </q-page>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import ProgramCard from 'components/ProgramCard.vue';
import {useProgramStore} from 'stores/program.store';

export default defineComponent({
  name: 'IndexPage',
  components: { ProgramCard },
  setup () {
    const programStore = useProgramStore();
    programStore.fetchProgramList();
    return {
      programItemList: programStore.programList,
      searchKeyword: ref('')
    };
  }
});
</script>
