<template>
  <table>
        <thead>
            <tr>
                <th>平台</th>
                <th>总计</th>
                <th>测试通过</th>
                <th>测试不通过</th>
                <th>测试任务异常</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>test_12306.TestCase12306</td>
                <td>45</td>
                <td>41</td>
                <td>4</td>
                <td>0</td>
            </tr>
            <tr>
                <td>test_12306.TestCase12306</td>
                <td>45</td>
                <td>41</td>
                <td>4</td>
                <td>0</td>
            </tr>
            <tr>
                <td>test_12306.TestCase12306</td>
                <td>45</td>
                <td>41</td>
                <td>4</td>
                <td>0</td>
            </tr>
            <tr>
                <td>总计</td>
                <td>135</td>
                <td>123</td>
                <td>12</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Editor from './utils/Editor.vue';
import elementStyleMixin from './elementStyleMixin';
import TableSetting from './TableSetting.vue';

export default {
  mixins: [elementStyleMixin],
  components: { Editor },
  inject: ['node'],
  craft: {
    defaultProps: {
      content: "",
      elementStyle: {

      }
    },
    settings: {
      Properties: TableSetting,
    }
  }
}
</script>


<style>
table {
    border-spacing: 1;
    border-collapse: collapse;
    background: white;
    border-radius: 6px;
    overflow: hidden;
    max-width: 800px;
    width: 100%;
    position: relative;
}

td, th {
    padding-left: 8px;
}

thead tr {
    height: 60px;
    background: #ffed8660;
    font-size: 16px;
}
tbody tr {
    height: 48px;
    border-bottom: 1px solid #e3f1d5;
}
tbody tr:last-child {
    border: 0;
}
td, th {
    text-align: left;
}

</style>