<template>
  <q-card style="margin-top: 20px; padding-bottom: 0">
    <q-card-section>
      <div class="row">
        <div class="col-2 text-h6 items-center" style="text-align: center">
          {{index}}
        </div>
        <div class="col-7">
          <div style="margin: 10px">{{mileageUsage.title}}</div>
          <div style="margin: 10px">{{mileageUsage.place}}</div>
        </div>
        <div class="col-3 items-center text-h6">
          -{{mileageUsage.mileage}}
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'MileageUsageCard',
  props: {
    mileageUsage: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
div .items-center {
  display: flex;
  justify-content: center;
}
</style>
