<template>
  <div id="simple-calendar-app">
    <vx-card no-shadow class="mt-5">
        <div class="student-detail-sessions text-center">
            <h3>LƯƠNG BẢO HÂN</h3>
            <h5>Tiếng Anh thiếu nhi - SKE1n - C2403HF</h5>
            <div class="flex flex-wrap mt-5">
                <div class="box-active">
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M1 - Buổi 4</div>
                        <div class="text-date-box-schedule text-center">T2, 13/05/2024</div>
                        <div class="text-center"><span class="box-status">Đã học bù</span></div>
                    </div>
                </div>
                <div class="box-danger">
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M2 - Buổi 1</div>
                        <div class="text-date-box-schedule text-center">T6, 17/05/2024</div>
                        <div class="text-center"><span class="box-status">Chưa học</span></div>
                    </div>
                </div>
                <div class="box-danger">
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M2 - Buổi 2</div>
                        <div class="text-date-box-schedule text-center">CN, 19/05/2024</div>
                        <div class="text-center"><span class="box-status">Chưa học</span></div>
                    </div>
                </div>
                <div class="box-danger">
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M2 - Buổi 3</div>
                        <div class="text-date-box-schedule text-center">T6, 24/05/2024</div>
                        <div class="text-center"><span class="box-status">Chưa học</span></div>
                    </div>
                </div>
                <div class="box-danger">
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M2 - Buổi 4</div>
                        <div class="text-date-box-schedule text-center">CN, 26/05/2024</div>
                        <div class="text-center"><span class="box-status">Chưa học</span></div>
                    </div>
                </div>
                <div class="box-danger">
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M3 - Buổi 1</div>
                        <div class="text-date-box-schedule text-center">T6, 31/05/2024</div>
                        <div class="text-center"><span class="box-status">Chưa học</span></div>
                    </div>
                </div>
                <div class="box-danger">
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M3 - Buổi 2</div>
                        <div class="text-date-box-schedule text-center">CN, 02/06/2024</div>
                        <div class="text-center"><span class="box-status">Chưa học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M3 - Buổi 3</div>
                        <div class="text-date-box-schedule text-center">T6, 07/06/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M3 - Buổi 4</div>
                        <div class="text-date-box-schedule text-center">CN, 09/06/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M4 - Buổi 1</div>
                        <div class="text-date-box-schedule text-center">T6, 14/06/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M4 - Buổi 2</div>
                        <div class="text-date-box-schedule text-center">CN, 16/06/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M4 - Buổi 3</div>
                        <div class="text-date-box-schedule text-center">T6, 21/06/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M4 - Buổi 4</div>
                        <div class="text-date-box-schedule text-center">CN, 23/06/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M5 - Buổi 1</div>
                        <div class="text-date-box-schedule text-center">T6, 28/06/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M5 - Buổi 2</div>
                        <div class="text-date-box-schedule text-center">CN, 30/06/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M5 - Buổi 3</div>
                        <div class="text-date-box-schedule text-center">T6, 05/07/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M5 - Buổi 4</div>
                        <div class="text-date-box-schedule text-center">CN, 07/07/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M6 - Buổi 1</div>
                        <div class="text-date-box-schedule text-center">T6, 12/07/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M6 - Buổi 2</div>
                        <div class="text-date-box-schedule text-center">CN, 14/07/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M6 - Buổi 3</div>
                        <div class="text-date-box-schedule text-center">T6, 19/07/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M6 - Buổi 4</div>
                        <div class="text-date-box-schedule text-center">CN, 21/07/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M7 - Buổi 1</div>
                        <div class="text-date-box-schedule text-center">T6, 26/07/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M7 - Buổi 2</div>
                        <div class="text-date-box-schedule text-center">CN, 28/07/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M7 - Buổi 3</div>
                        <div class="text-date-box-schedule text-center">T6, 02/08/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M7 - Buổi 4</div>
                        <div class="text-date-box-schedule text-center">CN, 04/08/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M8 - Buổi 1</div>
                        <div class="text-date-box-schedule text-center">T6, 09/08/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M8 - Buổi 2</div>
                        <div class="text-date-box-schedule text-center">CN, 11/08/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M8 - Buổi 3</div>
                        <div class="text-date-box-schedule text-center">T6, 16/08/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M8 - Buổi 4</div>
                        <div class="text-date-box-schedule text-center">CN, 18/08/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M9 - Buổi 1</div>
                        <div class="text-date-box-schedule text-center">T6, 23/08/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M9 - Buổi 2</div>
                        <div class="text-date-box-schedule text-center">CN, 25/08/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M9 - Buổi 3</div>
                        <div class="text-date-box-schedule text-center">T6, 30/08/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
                <div>
                    <div class="box-item-student border border-gray-300 rounded min-w-125px py-3 px-5 me-6 mb-3 mr-1 ml-1">
                        <div class="label-box-schedule text-center">M9 - Buổi 4</div>
                        <div class="text-date-box-schedule text-center">CN, 08/09/2024</div>
                        <div class="text-center"><span class="box-status">Sắp học</span></div>
                    </div>
                </div>
            </div>
        </div>
    </vx-card>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  created () {
  }
}
</script>
<style>
.student-detail-sessions .box-item-student .label-box-schedule{
  font-size: 13px;
}
.student-detail-sessions .box-item-student .text-date-box-schedule{
  font-size: 11px;
}
.student-detail-sessions .box-item-student .box-status{
    font-size: 10px;
    background: rgba(var(--vs-primary),1);
    padding: 5px;
    border-radius: 6px;
    color: #fff;
}
.student-detail-sessions .box-item-student{
  border: 1px solid rgba(var(--vs-primary),1);
  background: transparent !important;
}

.student-detail-sessions .box-active .box-item-student{
  border: 1px solid rgba(var(--vs-success), 1);
}
.student-detail-sessions .box-active .box-item-student .box-status{
    background: rgba(var(--vs-success), 1);
}
.student-detail-sessions .box-danger .box-item-student{
  border: 1px solid rgba(var(--vs-danger), 1);
}
.student-detail-sessions .box-danger .box-item-student .box-status{
    background: rgba(var(--vs-danger), 1);
}
</style>
