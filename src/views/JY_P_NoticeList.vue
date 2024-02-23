<template>
    <div v-for="(notice,i) in noticeList" :key="i">
        <div class="d-grid gap-2 col-10 mx-auto">
            <button class="btn btn-light" type="button">{{ noticeList [i]}}</button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'noticeList',
    data() {
        return {
            noticeList: [
                'Notice 1',
                'Notice 2',
                'Notice 3',
                'Notice 4',
                'Notice 5'
            ]
        }
    }
}
</script>

<style>
    .btn-light {
        margin-top: 10px;
        height: 100px;
    }

</style>