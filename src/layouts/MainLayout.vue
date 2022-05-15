<template>bind
  <q-layout view="lHr Lpr lFf">
    <q-drawer show-if-above bordered side="left">
      <!-- 네비게이션 링크 -->
      <q-list>
        <q-item-label header>한양대학교 비교과 플랫폼</q-item-label>
        <q-item>비교과 프로그램 신청</q-item>
        <q-item>비교과 프로그램 출석 확인</q-item>
        <q-item>수강 이력 및 인증서 발급</q-item>
        <q-item>마일리지 확인 및 사용</q-item>
      </q-list>

      <div class="fixed-bottom">
        <q-list>
          <q-item-label header>지원</q-item-label>
          <q-item>유지보수팀(031-400-1111)</q-item>
          <q-item>학사팀(031-400-2222)</q-item>
          <q-item>전산실(031-400-3333)</q-item>
        </q-list>

        <div id="language-dialog" style="background-color: #23272B">
          <q-slide-transition>
            <q-list
              v-show="languageListOpened" style="margin-top: 20px">
              <q-item-label header>언어</q-item-label>
              <q-item>한국어</q-item>
              <q-item>English</q-item>
              <q-item>汉语</q-item>
            </q-list>
          </q-slide-transition>
          <q-btn
            flat
            label="언어 설정"
            :icon-right="languageListOpened ? 'mdi-menu-down' : 'mdi-menu-up'"
            style="width: 100%;
          color: #91979b"
            @click="openLanguageList" />
        </div>
      </div>
    </q-drawer>

    <q-drawer show-if-above bordered side="right">

    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style scoped>
  .q-item__label--header {
    color: #9994a3;
  }
  .q-item {
    color: #91979b;
  }

  #language-dialog {
    border-top: solid #5B5D60;
  }
</style>
<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const languageListOpened = ref(false)
    return {
      languageListOpened,
      openLanguageList() {
        languageListOpened.value = !languageListOpened.value
      }
    }
  }
});
</script>
