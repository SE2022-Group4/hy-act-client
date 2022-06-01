<template>
  <q-header elevated style="background-color: #343a40">
    <q-toolbar>
      <q-toolbar-title>마일리지 통계</q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page>
    <div class="column full-height" style="margin-left: 10px; margin-right: 5px">
      <div class="row">
        <div class="col-6" style="padding-right: 10px">
          <q-card>
            <q-card-section>
              <div class="row text-h6 text-weight-bolder">
                마일리지 잔액
              </div>
            </q-card-section>
            <q-card-section>
              <div class="row">
                <div class="col-6 text-weight-bold text-h3" style="text-align: right">{{mileageStore.mileage}}</div>
                <div class="col-6 text-h6" style="text-align: left; padding-left: 10px; padding-top: 15px">
                  포인트
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-6" style="padding-left: 5px">
          <q-card>
            <q-card-section>
              <div class="row text-h6 text-weight-bolder">
                마일리지 사용 건수
              </div>
            </q-card-section>
            <q-card-section>
              <div class="row">
                <div class="col-6 text-weight-bold text-h3" style="text-align: right">{{mileageStore.mileageUsageList.length}}</div>
                <div class="col-6 text-h6" style="text-align: left; padding-left: 10px; padding-top: 15px">
                  건
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="text-weight-bold text-h6">마일리지 사용처</div>
      <q-separator style="height: 1px; background-color: black" />
      <MileageUsageCard v-for="(item, index) in mileageStore.mileageUsageList" :key="index" :mileage-usage="item" :index="index"/>
    </div>
  </q-page>
</template>

<script>
import {useMileageStore} from '../stores/mileage.store';
import MileageUsageCard from '../components/MileageUsageCard.vue';

export default {
  name: 'MileagePage',
  components: {MileageUsageCard},
  setup(){
    const mileageStore = useMileageStore()
    mileageStore.fetchMileageUsageList()
    mileageStore.fetchMileage()

    return {
      mileageStore
    }
  }
}
</script>

<style scoped>

</style>
