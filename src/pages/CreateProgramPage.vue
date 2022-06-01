<template>
  <div class="q-pa-md" style="max-width: 100%">
    <q-layout
      view="lHh 1pr lFf"
      container
      style="height: 50em"
      class="shadow-2"
    >
      <div class="flex-break q-py-md"></div>
      <div
        class="text-h4 text-weight-bold q-mb-xl"
        style="text-align: center; margin: 15px"
      >
        신규 비교과 프로그램 등록
      </div>

      <div class="flex-break q-py-md"></div>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <div class="row">
          <div class="col-1 margin-auto">
            <q-uploader
              url="http://localhost:4444/upload"
              color="teal"
              filled
              style="max-width: 400px"
            />
          </div>
          <div class="col-6 margin-auto">
            <div class="row">
              <div
                class="text-h6 text-weight-bold col-2 q-mt-xs q-pr-xs q-mb-md"
                style="text-align: right"
              >
                강의명 :
              </div>
              <div class="col-9">
                <q-input outlined dense v-model="text" />
              </div>

              <div
                class="text-h6 text-weight-bold col-2 q-mt-xs q-pr-xs q-mb-md"
                style="text-align: right"
              >
                모집 대상 :
              </div>
              <div class="q-mb-xs col-9">
                <q-select
                  dense
                  outlined
                  v-model="identity"
                  :options="identitys"
                  option-value="id"
                  option-label="name"
                  label="모집 대상"
                  emit-value
                  map-options
                  multiple
                />
              </div>

              <div
                class="text-h6 text-weight-bold col-2 q-mt-xs q-pr-xs q-mb-md"
                style="text-align: right"
              >
                대상 학년 :
              </div>
              <div class="q-mb-xs col-9">
                <q-select
                  dense
                  outlined
                  v-model="grade"
                  :options="grades"
                  option-value="id"
                  option-label="name"
                  label="대상 학년"
                  emit-value
                  map-options
                  multiple
                />
              </div>

              <div
                class="text-h6 text-weight-bold col-2 q-mt-xs q-pr-xs q-mb-md"
                style="text-align: right"
              >
                대상 성별 :
              </div>
              <div class="q-mb-xs col-9">
                <q-select
                  dense
                  outlined
                  v-model="gender"
                  :options="genders"
                  option-value="id"
                  option-label="name"
                  label="대상 성별"
                  emit-value
                  map-options
                />
              </div>

              <div
                class="text-h6 text-weight-bold col-2 q-mt-xs q-pr-xs q-mb-md"
                style="text-align: right"
              >
                대상 학과 :
              </div>
              <div class="q-mb-xs col-9">
                <q-select
                  dense
                  outlined
                  v-model="majorSelect"
                  :options="majorSelects"
                  option-value="id"
                  option-label="name"
                  label="대상 학과"
                  emit-value
                  map-options
                  multiple
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            class="text-h6 text-weight-bold col-2 vertical-middle q-pr-xs q-mb-md q-mt-sm"
            style="text-align: right"
          >
            진행 일시 :
          </div>
          <div class="col-2 q-mr-xs">
            <q-input dense v-model="date" filled type="date" name="시작 날짜" />
          </div>
          <div class="col-2 q-mr-md">
            <q-input dense v-model="time" filled type="time" name="시작 시간" />
          </div>
          <div class="col-2 q-mr-xs">
            <q-input dense v-model="date" filled type="date" name="종료 날짜" />
          </div>
          <div class="col-2">
            <q-input dense v-model="time" filled type="time" name="종료 시간" />
          </div>
        </div>

        <div class="row">
          <div
            class="text-h6 text-weight-bold col-2 vertical-middle q-pr-xs q-mb-md q-mt-sm"
            style="text-align: right"
          >
            진행 일시 :
          </div>
          <div class="col-5 q-mr-md">
            <q-select
              dense
              outlined
              v-model="placeSelect"
              :options="placeSelects"
              option-value="id"
              option-label="name"
              label="진행 장소"
              emit-value
              map-options
              multiple
            />
          </div>
          <div class="col-3">
            <q-input outlined dense v-model="text" label="상세 장소" />
          </div>
        </div>
        <div class="row">
          <div
            class="text-h6 text-weight-bold col-2 vertical-middle q-pr-xs q-mb-md q-mt-sm"
            style="text-align: right"
          >
            진행 개요 :
          </div>
          <div class="col-8 q-ml-md" style="max-height: 300px">
            <q-input outlined v-model="model" />
          </div>
        </div>
        <div
          class="text-h6 text-weight-bold col-2 q-mb-md"
          style="text-align: center"
        >
          상세 정보 등록
        </div>
        <div class="row">
          <div class="col-8 margin-auto" style="max-height: 300px">
            <q-input filled v-model="model" type="textarea" />
          </div>
        </div>

        <q-separator color="black" inset />

        <div
          class="text-h6 text-weight-bold col-2 vertical-middle q-pr-xs q-mb-md"
          style="text-align: center"
        >
          강사/주관기관 정보 등록
        </div>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-4 q-mr-xs" style="max-height: 300px">
            <q-input filled v-model="text" label="강사/주관기관명" />
          </div>
          <div class="col-4" style="max-height: 300px">
            <q-input filled v-model="text" label="강사/주관기관 Email" />
          </div>
        </div>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-4 q-mr-xs" style="max-height: 300px">
            <q-input filled v-model="text" label="강사/주관기관 전화번호" />
          </div>
          <div class="col-4" style="max-height: 300px">
            <q-input filled v-model="text" label="강사/주관기관 신분" />
          </div>
        </div>

        <q-separator color="black" inset />

        <div class="row margin-auto">
          <div
            class="text-h6 text-weight-bold col-5 q-pr-xs q-mb-md q-mt-sm"
            style="text-align: right"
          >
            참여 포인트 :
          </div>
          <div class="col-7" style="max-height: 300px; text-align: left">
            <q-input
              dense
              v-model.number="model"
              type="number"
              filled
              style="max-width: 200px"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-5 margin-auto">
            <q-btn
              class="q-ma-xl"
              padding="xs 100px"
              size="25px"
              label="등록하기"
              type="submit"
              color="dark"
            />
          </div>
        </div>
      </q-form>
    </q-layout>
  </div>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  data() {
    return {
      identity: null,
      grade: null,
      gender: null,
      majorSelect: null,
      placeSelect: null,
      identitys: [
        { name: '무관' },
        { name: '재학생' },
        { name: '휴학생' },
        { name: '졸업생' },
        { name: '교직원' },
      ],
      grades: [
        { name: '무관' },
        { name: '1학년' },
        { name: '2학년' },
        { name: '3학년' },
        { name: '4학년' },
        { name: '기타' },
      ],
      genders: [{ name: '무관' }, { name: '남성' }, { name: '여성' }],
      majorSelects: [
        { name: '기계공학과' },
        { name: '로봇공학과' },
        { name: '산업경영공학과' },
        { name: '전자공학부' },
        { name: '재료화학공학과' },
        { name: '생명나노공학과' },
        { name: '건축학부' },
        { name: '건설환경플랜트공학과' },
        { name: '교통물류공학과' },
        { name: '국방정보공학과' },
        { name: '융합공학과' },
        { name: '스마트융합공학부' },
        { name: '소프트웨어학부' },
        { name: 'ICT융합학부' },
        { name: '인공지능학과' },
        { name: '약학과' },
        { name: '응용수학과' },
        { name: '응용물리학과' },
        { name: '화학분자공학과' },
        { name: '분자생명과학과' },
        { name: '해양융합공학과' },
        { name: '나노광전자학과' },
        { name: '한국언어문학과' },
        { name: '문화인류학과' },
        { name: '문화콘텐츠학과' },
        { name: '중국학과' },
        { name: '일본학과' },
        { name: '영미언어문화학과' },
        { name: '프랑스학과' },
        { name: '정보사회미디어학과' },
        { name: '광고홍보학과' },
        { name: '신문방송학과' },
        { name: '정보사회학과' },
        { name: '경제학부' },
        { name: '경영학부' },
        { name: '보험계리학과' },
        { name: '회계세무학과' },
        { name: '주얼리·패션디자인학과' },
        { name: '산업디자인학과' },
        { name: '커뮤니케이션디자인학과' },
        { name: '영상디자인학과' },
        { name: '스포츠과학부' },
        { name: '무용예술학과' },
        { name: '실용음악학과' },
      ],
      placeSelects: [
        { name: 'ERICA 융합원' },
        { name: 'ERICA 학술정보관' },
        { name: '학생회관' },
        { name: '학생 복지관' },
        { name: '호수공원' },
        { name: '컨퍼런스홀' },
        { name: '제 1 학술관' },
        { name: '실용영어교육관' },
        { name: '제 1 공학관' },
        { name: '제 2 공학관' },
        { name: '제 3 공학관' },
        { name: '제 4 공학관' },
        { name: '제 5 공학관' },
        { name: '학연산클러스터지원센터' },
        { name: 'AI융복합센터' },
        { name: '약학관' },
        { name: '약초원' },
        { name: '언론정보관' },
        { name: '사회교육관' },
        { name: '국제문화관' },
        { name: '경상관' },
        { name: '제1 과학기술관' },
        { name: '제2 과학기술관' },
        { name: '디자인 교육관' },
        { name: '디자인 연구관' },
        { name: '디자인 문화관' },
        { name: '실용음악관' },
        { name: '체육관' },
        { name: '정문 아고라' },
        { name: '서문' },
        { name: 'ERICA 컨벤션센터' },
        { name: '창업보육센터' },
        { name: '산학연협력관' },
        { name: '셔틀콕' },
        { name: '생태습지공원' },
        { name: '라이온스홀' },
        { name: '인재 3관(3생활관)' },
        { name: '창의관(4생활관)' },
        { name: '행복관' },
        { name: '다솜관' },
        { name: '골프연습장' },
        { name: '노천극장' },
      ],
    };
  },

  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },

      onItemClick() {
        console.log('Clicked on an Item');
      },
      dateModel: ref({ from: '2020/07/08', to: '2020/07/17' }),
    };
  },
};
</script>

<style>
.margin-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
