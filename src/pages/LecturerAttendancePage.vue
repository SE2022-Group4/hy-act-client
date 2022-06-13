<template>
  <q-page style="padding: 1rem">
    <div class="text-h6" style="padding-bottom: 1rem">
      출석 인증 / 관리 프로그램
    </div>

    <q-separator color="gray" size="2px" inset></q-separator>

    <div class="column">
      <div class="col" style="padding: 1rem">
        <div class="row justify-around">
          <q-card style="width: 95%">
            <q-card-section>
              <div class="column" style="font-size: 1.2rem">
                <div class="col" style="padding: 0.5rem">
                  <div class="row">
                    <div class="col-2" style="te">강의명</div>
                    <div class="col-10">
                      대학원생 역량강화 프로그램 " 전문성 기반의 자기다움
                      경력개발 전략"
                    </div>
                  </div>
                </div>
                <div class="col" style="padding: 0.5rem">
                  <div class="row">
                    <div class="col-2">강사</div>
                    <div class="col-10">나똑똑</div>
                  </div>
                </div>
                <div class="col" style="padding: 0.5rem">
                  <div class="row">
                    <div class="col-2">시간</div>
                    <div class="col-10">
                      2022.03.02(수) 08:30 ~ 2022.06.21(화) 17:30
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="col">
        <div class="row justify-around" style="padding: 1rem">
          <q-card style="width: 45%">
            <q-card-section>
              <div
                class="text-h6"
                style="text-align: center; padding-bottom: 1rem"
              >
                <strong> 시작 인증 번호 발급 </strong>
              </div>

              <div class="row justify-center">
                <q-btn
                  v-if="start_not_exist"
                  push
                  color="grey-8"
                  text-color="white"
                  size="1.4rem"
                  @click="disableStartButton"
                  >발급하기
                </q-btn>
                <div
                  class="col"
                  style="text-align: center; font-size: 2.5rem"
                  v-else
                >
                  <strong>786432</strong>
                </div>
              </div>

              <p
                style="text-align: center; padding-top: 2rem"
                v-if="start_not_exist"
              >
                발급하면 자동으로 시작시간이 기록됩니다.
              </p>
              <p style="text-align: center; padding-top: 2rem" v-else>
                3월 2일 08:31 시작시간이 기록되었습니다.
              </p>
            </q-card-section>
          </q-card>

          <q-card style="width: 45%">
            <q-card-section>
              <div
                class="text-h6"
                style="text-align: center; padding-bottom: 1rem"
              >
                <strong> 종료 인증 번호 발급 </strong>
              </div>
              <div class="row justify-center">
                <q-btn
                  v-if="end_not_exist"
                  push
                  color="grey-8"
                  text-color="white"
                  size="1.4rem"
                  @click="disableEndButton"
                  >발급하기
                </q-btn>
                <div
                  class="col"
                  style="text-align: center; font-size: 2.5rem"
                  v-else
                >
                  <strong>786432</strong>
                </div>
              </div>
              <p
                style="text-align: center; padding-top: 2rem"
                v-if="end_not_exist"
              >
                발급하면 자동으로 종료시간이 기록됩니다.
              </p>
              <p style="text-align: center; padding-top: 2rem" v-else>
                3월 2일 08:31 시작시간이 기록되었습니다.
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col">
        <div class="row justify-end" style="padding: 2rem">
          <q-btn
            push
            color="white"
            text-color="grey-8"
            size="1rem"
            @click="refreshButton"
          >
            현황판 새로고침
          </q-btn>
        </div>
      </div>
      <div class="col">
        <div class="row justify-around" style="padding: 1rem">
          <q-table
            style="height: 700px; width: 95%"
            title="참여자 출석 현황"
            :rows="rows"
            :columns="columns"
            row-key="index"
            virtual-scroll
            v-model:pagination="pagination"
            :rows-per-page-options="[0]"
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td v-for="col in props.cols" :key="col.name" :props="props">
                  <span v-if="col.name != 'start' && col.name != 'end'">
                    {{ col.value }}</span
                  >
                  <q-avatar v-if="col.name == 'start'" size="20px">
                    <img
                      v-if="props.row.start == true"
                      src="src/assets/greencheck.png"
                    />
                    <img
                      v-if="props.row.start == false"
                      src="src/assets/red_x.png"
                    />
                  </q-avatar>
                  <q-avatar v-if="col.name == 'end'" size="20px">
                    <img
                      v-if="props.row.end == true"
                      src="src/assets/greencheck.png"
                    />
                    <img
                      v-if="props.row.end == false"
                      src="src/assets/red_x.png"
                    />
                  </q-avatar>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',

  setup() {
    const columns = [
      {
        name: 'index',
        label: '#',
        field: 'index',
      },
      {
        name: 'name',
        required: true,
        label: '이름',
        align: 'left',
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: 'identity',
        align: 'center',
        label: '신분',
        field: 'identity',
        sortable: true,
      },
      {
        name: 'department',
        label: '학과',
        field: 'department',
        sortable: true,
      },
      { name: 'grade', label: '학년', field: 'grade' },
      { name: 'start', label: '시작 인증', field: 'start', align: 'center' },
      { name: 'end', label: '종료 인증', field: 'end', align: 'center' },
    ];

    const seed = [
      {
        name: '하냥이',
        identity: '재학생',
        department: '소프트웨어학부',
        grade: 4,
        start: false,
        end: false,
      },
      {
        name: '삼색이',
        identity: '재학생',
        department: 'ICT융합학부',
        grade: 4,
        start: true,
        end: false,
      },
      {
        name: '길막이',
        identity: '재학생',
        department: '기계공학과',
        grade: 3,
        start: true,
        end: true,
      },
      {
        name: '연님이',
        identity: '휴학생',
        department: '재료화학공학과',
        grade: 4,
        start: false,
        end: true,
      },
      {
        name: '야롱이',
        identity: '재학생',
        department: '응용물리학과',
        grade: 3,
        start: true,
        end: true,
      },
    ];

    let rows = [];
    for (let i = 0; i < 2; i++) {
      rows = rows.concat(seed.slice(0).map((r) => ({ ...r })));
    }

    rows.forEach((row, index) => {
      row.index = index;
    });

    let start_not_exist = ref(true);
    const disableStartButton = () => {
      if (start_not_exist.value) {
        start_not_exist.value = false;
      }
    };

    let end_not_exist = ref(true);
    const disableEndButton = () => {
      if (end_not_exist.value) {
        end_not_exist.value = false;
      }
    };

    let refresh = ref(true);
    const refreshButton = () => {
      if (refresh.value) {
        refresh.value = false;
      }
    };

    return {
      rows,
      columns,
      pagination: ref({
        rowsPerPage: 0,
      }),
      disableStartButton,
      start_not_exist,
      disableEndButton,
      end_not_exist,
      refreshButton,
      refresh,
    };
  },
});
</script>
