<template>
  <div id="q-app" style="min-height: 100vh">
    <q-btn label="신청 정보" color="primary" @click="alert = true"></q-btn>
    <q-btn label="자세히 보기" color="primary" @click="detail = true"></q-btn>

    <!--Application Dialog-->
    <q-dialog v-model="alert" transition-show="rotate" transition-hide="rotate">
      <q-card style="width: 700px; max-width: 100vw">
        <q-card-section>
          <div class="text-h5" style="text-align: center">
            <strong>신청 정보</strong>
          </div>
        </q-card-section>

        <q-separator color="gray" size="2px" inset></q-separator>
        <q-card-section style="padding: 0px; max-height: 65vh" class="scroll">
          <div class="row">
            <!--Program Image-->
            <div class="col-6">
              <q-img
                :src="url"
                spinner-color="white"
                style="max-height: 300px; max-width: 350px"
              ></q-img>
            </div>
            <!-- Program Info -->
            <div class="col-6">
              <div class="text-h8" style="text-align: center; font-size: 16px">
                <strong>도서관 아카데이 "표절&인용 개념잡기"</strong>
              </div>
              <div
                class="text-h8"
                style="
                  text-align: center;
                  font-size: 16px;
                  padding: 12px;
                  line-height: 25px;
                "
              >
                <strong>날짜</strong>
              </div>
              <p style="text-align: center; line-height: 15px">
                시작 : 2022.04.21(목) 14:00
              </p>
              <p style="text-align: center; line-height: 15px">
                종료 : 2022.04.21(목) 15:00
              </p>

              <div
                class="text-h8"
                style="
                  text-align: center;
                  font-size: 16px;
                  padding: 12px;
                  line-height: 25px;
                "
              >
                <strong>장소</strong>
              </div>
              <p style="text-align: center; line-height: 15px">
                백남학술정보관 국제회의실(6층)
              </p>
            </div>
          </div>

          <q-separator color="gray" size="2px" inset></q-separator>

          <!--Applicant Info-->
          <div class="row">
            <div class="col">
              <div
                class="text-h8"
                style="
                  text-align: center;
                  font-size: 15px;
                  padding: 4px;
                  line-height: 25px;
                "
              >
                <strong>신청자 정보</strong>
              </div>
              <p style="padding-top: 12px; line-height: 15px">
                <strong>이름 &nbsp;&nbsp; : &nbsp;&nbsp; </strong> 하냥이
              </p>
              <p style="line-height: 15px">
                <strong>학과 &nbsp;&nbsp; : &nbsp;&nbsp; </strong>
                소프트웨어학부
              </p>
              <p style="line-height: 15px">
                <strong>신분 &nbsp;&nbsp; : &nbsp;&nbsp; </strong> 재학생
              </p>
              <p style="line-height: 15px">
                <strong>학년 &nbsp;&nbsp; : &nbsp;&nbsp; </strong> 4학년
              </p>
              <p style="line-height: 15px">
                <strong>전화번호 &nbsp;&nbsp; : &nbsp;&nbsp; </strong>
                010-1234-5678
              </p>
            </div>
            <q-separator
              color="gray"
              size="2px"
              spaced="12px"
              inset
              vertical
            ></q-separator>
            <!-- Get Confirm -->
            <div class="col">
              <div
                class="text-h8"
                style="
                  text-align: center;
                  font-size: 15px;
                  padding: 4px;
                  line-height: 25px;
                "
              >
                <strong>신청 확인</strong>
              </div>

              <p
                style="padding-top: 12px; text-align: center; line-height: 20px"
              >
                - 비교과 참여인증을 위한 개인정보 제공에 동의합니다.
              </p>
              <p style="text-align: center; line-height: 20px">
                - 개인 정보는 2년 보관 후 파기됩니다.
              </p>
              <p style="text-align: center; line-height: 20px">
                - 참여 완료 시 마일리지 60포인트가 제공됩니다.
              </p>
            </div>
          </div>
        </q-card-section>
        <q-separator inset></q-separator>
        <q-card-actions align="right">
          <div class="row" style="padding: 0px">
            <q-btn
              class="items-center"
              unelevated
              rounded
              color="grey-9"
              label="&nbsp;&nbsp;신청하기&nbsp;&nbsp;"
            ></q-btn>
          </div>
          <q-btn flat label="닫기" color="primary" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!--Detail Dialog-->
    <q-dialog
      v-model="detail"
      transition-show="rotate"
      transition-hide="rotate"
    >
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="text-h5" style="text-align: center">
            <strong>세부 정보</strong>
          </div>
        </q-card-section>
        <q-separator color="gray" size="2px" inset></q-separator>
        <q-card-section style="max-height: 60vh; padding: 0px" class="scroll">
          <div class="row">
            <div class="col-2">
              <p style="font-size: 1em; margin: 0px">
                <strong> 일시 </strong>
              </p>
            </div>
            <div class="col-10" style="font-size: 1em">
              <p style="margin: 0px">2022. 5. 27(금) 16:00 ~ 19:00</p>
            </div>
          </div>

          <q-separator color="gray" size="2px" inset></q-separator>

          <div class="row">
            <div class="col-2">
              <p style="font-size: 1em; margin: 0px">
                <strong> 장소 </strong>
              </p>
            </div>
            <div class="col-10" style="font-size: 1em">
              <p style="margin: 0px">백남학술정보관 국제회의실(6층)</p>
            </div>
          </div>

          <q-separator color="gray" size="2px" inset></q-separator>
          <div class="row">
            <div class="col-2">
              <p style="font-size: 1em; margin: 0px">
                <strong> 신청기간 </strong>
              </p>
            </div>
            <div class="col-10" style="font-size: 1em">
              <p style="margin: 0px">2022. 3.30(수) ~ 4.15(금) 16:00</p>
            </div>
          </div>

          <q-separator color="gray" size="2px" inset></q-separator>

          <div class="row">
            <div class="col-2">
              <p style="font-size: 1em; margin: 0px">
                <strong> 신청대상 </strong>
              </p>
            </div>
            <div class="col-10" style="font-size: 1em">
              <p style="margin: 0px">
                한양대학교 서울 학부생(전년도 우승팀 제외)<br />
                * 단, 휴학생 신청 불가(사유 : 장학금으로 상금 지급)<br />
                * 1인도 신청가능(주최 측에서 팀 매칭 예정)
              </p>
            </div>
          </div>

          <q-separator color="gray" size="2px" inset></q-separator>

          <div class="row">
            <div class="col-2">
              <p style="font-size: 1em; margin: 0px">
                <strong> 내용 </strong>
              </p>
            </div>
            <div class="col-10" style="font-size: 1em">
              <p style="margin: 0px">
                지정도서로 선정된 도서를 읽고 하브루타 방식으로 진행하는
                토론대회
              </p>
            </div>
          </div>
        </q-card-section>
        <q-separator inset></q-separator>
        <q-card-actions align="right">
          <q-btn flat label="닫기" color="primary" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped>
.row > div {
  padding: 10px 15px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
}

.row + .row {
  margin-top: 1rem;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',

  setup() {
    const url = ref('src/assets/plagiarism.png');
    return {
      alert: ref(false),
      detail: ref(false),
      url,
      address: ref(''),
    };
  },
});
</script>
