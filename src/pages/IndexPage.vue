<template>
  <q-page class="column items-center justify-start" style="margin-left: 10px; margin-right: 10px; margin-top: 10px">
    <ProgramCard v-for="programItem in programItemList" :program="programItem" style="margin-bottom: 10px"/>
  </q-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
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
    };
  }
});
</script>
