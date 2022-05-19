<template>
  <div class="q-pa-md" style="max-width: 100%">
    <q-layout
      view="lHh 1pr lFf"
      container
      style="height: 47em"
      class="shadow-2"
    >
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <div class="row">
          <div class="col">
            <q-img
              src="https://placeimg.com/500/300/nature"
              style="margin: 5px; fit: fill"
            />
          </div>
          <div class="col-6">
            <q-input
              filled
              v-model="name"
              label="강의명"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
            <q-btn-dropdown color="dark" label="모집대상">
              <q-list>
                <template v-for="identity in identitys" :key="identity.id">
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>{{ identity.name }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </template>
              </q-list>
            </q-btn-dropdown>

            <q-btn-dropdown color="dark" label="대상 학년">
              <q-list>
                <template v-for="grade in grades" :key="grade.id">
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>{{ grade.name }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </template>
              </q-list>
            </q-btn-dropdown>

            <q-btn-dropdown color="dark" label="대상 성별">
              <q-list>
                <template v-for="gender in genders" :key="gender.id">
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>{{ gender.name }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </template>
              </q-list>
            </q-btn-dropdown>

            <q-btn-dropdown color="dark" label="대상 학과" id="majorList">
              <q-list>
                <template
                  v-for="majorSelect in majorSelects"
                  :key="majorSelect.id"
                >
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>{{ majorSelect.name }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </template>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>

        <q-input v-model="date" filled type="date" hint="Native date" />
        <q-input v-model="time" filled type="time" hint="Native time" />

        <q-input v-model="date" filled type="date" hint="Native date" />
        <q-input v-model="time" filled type="time" hint="Native time" />

        <q-btn-dropdown color="dark" label="진행 장소" id="majorList">
          <q-list>
            <template v-for="placeSelect in placeSelects" :key="placeSelect.id">
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>{{ placeSelect.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-list>
        </q-btn-dropdown>

        <q-input filled v-model="text" label="세부 장소" />
        <q-input filled v-model="text" label="진행 개요" />

        <q-input filled v-model="text" label="강사/주관기관 정보 등록" />

        <q-separator color="black" inset />

        <q-input filled v-model="text" label="강사/주관기관명" />
        <q-input filled v-model="text" label="강사/주관기관 Email" />
        <q-input filled v-model="text" label="강사/주관기관 전화번호" />
        <q-input filled v-model="text" label="강사/주관기관 신분" />

        <q-separator color="black" inset />

        <q-input
          v-model.number="model"
          type="number"
          filled
          hint="참여 포인트"
          style="max-width: 200px"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </q-layout>
  </div>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  data: function () {
    return {
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
      model: ref({ from: '2020/07/08', to: '2020/07/17' }),
    };
  },
};
</script>
