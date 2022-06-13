<template>
  <q-header elevated style="background-color: #343a40">
    <q-toolbar>
      <q-toolbar-title>비교과 프로그램 신청 목록</q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page class="column items-center justify-start" style="margin-left: 10px; margin-right: 10px; margin-top: 10px">
    <MyProgramCard
      v-for="item in programItemList"
      :program="item" style="margin-bottom: 10px"
    />
  </q-page>
</template>
<style scoped>
div .items-center {
  display: flex;
  justify-content: center;
}

</style>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import {useUserStore} from 'stores/user.store';
import {useMyProgramListStore} from 'stores/my.program.list.store';
import MyProgramCard from 'components/MyProgramCard.vue';

export default defineComponent({
  name: 'MyProgramPage',
  components: { MyProgramCard },
  inheritAttrs: false,
  setup () {
    const programStore = useMyProgramListStore();
    programStore.fetchMyProgramList();
    const dialogOpened = ref(false);
    const programItem = ref({});

    const userStore = useUserStore();
    const user = ref(userStore.user);
    userStore.$subscribe(() => {
      user.value = userStore.user;
    });

    const programItemList = ref(programStore.programList);
    programStore.$subscribe(() => {
      programItemList.value = programStore.programList
    })

    return {
      user,
      programItem,
      dialogOpened,
      programItemList,
    };
  }
});
</script>
