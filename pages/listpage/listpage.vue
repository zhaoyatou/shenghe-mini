<template>
  <view class="listpage">
    <u-button
      type="info"
      @click="queryOpen = !queryOpen"
      icon="search"
      shape="circle"
      :plain="true"
      :hairline="true"
      text="按条件搜索"
    ></u-button>
    <u-sticky bgColor="white">
      <view class="Summary">
        <u--text :text="pagesCont"></u--text>
        <u--text :text="moneyNum"></u--text>
      </view>
      <view class="tabs-box">
        <u-tabs
          lineWidth="80rpx"
          duration="50"
          :current="tablecurrent"
          :list="tabList"
          @click="tabsFN"
        ></u-tabs>
      </view>
    </u-sticky>

    <view
      class="list-content-box"
      v-for="(item, index) in listArr"
      :key="index"
      @click="goCreateInsur(item)"
    >
      <u-row>
        <u-col span="10">
          <view>
            <u--text
              size="38rpx"
              bold="true"
              :lines="1"
              type="info"
              :text="'合同编号:' + (item.contractNo || '')"
            ></u--text>
          </view>
        </u-col>
        <u-col span="2">
          <view
            :class="[
              { shengxiao: item.operStatus == 3 },
              { shixiao: item.operStatus == 4 },
              { 'caogao-shenhe': item.operStatus == 1 || item.operStatus == 2 },
            ]"
          >
            {{
              item.operStatus == 1
                ? "草稿"
                : item.operStatus == 2
                ? "审核中"
                : item.operStatus == 3
                ? "已生效"
                : "未生效"
            }}
          </view>
        </u-col>
      </u-row>
      <u-line color="#E6E2E1" margin="20rpx 0rpx"></u-line>
      <u-row gutter="10" customStyle="margin-bottom: 10rpx">
        <u-col span="7">
          <view>
            <u--text
              bold
              color="#939393"
              size="13"
              lines="1"
              :text="
                '录单时间:' +
                ' ' +
                timeString(item.createTime ? item.createTime : '')
              "
            ></u--text>
          </view>
        </u-col>
        <u-col span="5">
          <view>
            <u--text
              bold
              color="#939393"
              size="13"
              lines="1"
              :text="
                '经办人员:' +
                ' ' +
                (item.createUserName ? item.createUserName : '')
              "
            ></u--text>
          </view>
        </u-col>
      </u-row>
      <u-row gutter="10" customStyle="margin-bottom: 10rpx">
        <u-col span="7">
          <view>
            <u--text
              bold
              color="#939393"
              size="13"
              lines="1"
              :text="
                '客户姓名:' + ' ' + (item.customerName ? item.customerName : '')
              "
            ></u--text>
          </view>
        </u-col>
        <u-col span="5">
          <view>
            <u--text
              bold
              color="#939393"
              size="13"
              lines="1"
              :text="
                '车牌编号:' +
                ' ' +
                (item.carLicenseNum ? item.carLicenseNum : '') +
                '-' +
                (item.carLicense ? item.carLicense : '')
              "
            ></u--text>
          </view>
        </u-col>
      </u-row>
      <u-row gutter="10" customStyle="margin-bottom: 10rpx">
        <u-col span="7">
          <view>
            <u--text
              bold
              color="#939393"
              size="13"
              lines="1"
              :text="'实收金额:' + ' ' + (item.payAmount || 0) + '元'"
            ></u--text>
          </view>
        </u-col>
        <u-col span="5">
          <view class="">
            <u--text
              bold
              color="#939393"
              size="13"
              lines="1"
              :text="
                '延保项目:' + ' ' + (item.projectName ? item.projectName : '')
              "
            ></u--text>
          </view>
        </u-col>
      </u-row>
      <u-row gutter="10">
        <u-col span="12">
          <view>
            <u--text
              bold
              color="#939393"
              size="13"
              lines="1"
              :text="item.storeName ? item.storeName : ''"
            ></u--text>
          </view>
        </u-col>
      </u-row>
    </view>
    <u-loading-icon
      :show="loading"
      duration="3000"
      text="加载中......."
    ></u-loading-icon>

    <u-popup
      :customStyle="{ 'overflow-y': 'auto' }"
      :show="queryOpen"
      mode="right"
      @close="close"
      @open="open"
    >
      <view class="queryform">
        <u--text
          prefixIcon="search"
          :iconStyle="{ 'font-size': '40rpx', color: 'black' }"
          align="center"
          color="black"
          text="筛选"
        ></u--text>
        <u-line color="black" :hairline="false" margin="20rpx 0rpx"></u-line>

        <u--form
          labelPosition="left"
          :model="queryform"
          ref="queryform"
          labelWidth="170rpx"
        >
          <u-form-item label="合同编号:" borderBottom>
            <u--input
              placeholder="请输入合同编号"
              v-model="queryform.ContractNo"
              border="none"
            ></u--input>
          </u-form-item>

          <u-form-item
            label="录单时间:"
            @click="createTimeOpen = true"
            borderBottom
          >
            <u--input
              v-model="queryform.createTime"
              disabled
              disabledColor="#ffffff"
              placeholder="请选择录单时间"
              border="none"
            ></u--input>
            <u-icon slot="right" name="arrow-down-fill"></u-icon>
          </u-form-item>

          <u-form-item label="客户姓名:" borderBottom>
            <u--input
              placeholder="请输入客户姓名"
              v-model="queryform.userName"
              border="none"
            ></u--input>
          </u-form-item>

          <u-form-item label="车牌编号:" @click="provinceCarBrandOpen = true">
            <u--input
              v-model="queryform.carLicenseNum"
              disabled
              disabledColor="#ffffff"
              placeholder="请选择车牌省份"
              border="none"
            ></u--input>
            <u-icon slot="right" name="arrow-down-fill"></u-icon>
          </u-form-item>

          <u-form-item label=" " borderBottom>
            <u--input
              v-model="queryform.carLicense"
              placeholder="请输入车牌号"
              border="none"
            ></u--input>
          </u-form-item>

          <!-- <u-form-item label="经办人:" borderBottom>
            <u--input
              placeholder="请输入经办人"
              v-model="queryform.createUserName"
              border="none"
            ></u--input>
          </u-form-item> -->

          <u-form-item label="延保项目:" @click="ExtendedItemOpen = true">
            <u--input
              v-model="queryform.project"
              disabled
              disabledColor="#ffffff"
              placeholder="请选择延保项目"
              border="none"
            ></u--input>
            <u-icon slot="right" name="arrow-down-fill"></u-icon>
          </u-form-item>

          <u-form-item label="所属城市:">
            <u--input
              @change="citychange"
              @focus="cityOpen = true"
              v-model="queryform.city"
              placeholder="请选择所属城市"
              border="none"
            ></u--input>
            <!-- <u-icon slot="right" name="arrow-down-fill"></u-icon> -->
          </u-form-item>

          <u-form-item label="所属门店:" @click="storeOpen = true">
            <u--input
              v-model="queryform.store"
              disabled
              disabledColor="#ffffff"
              placeholder="请选择所属门店"
              border="none"
            ></u--input>
            <u-icon slot="right" name="arrow-down-fill"></u-icon>
          </u-form-item>
        </u--form>
        <u-button
          :customStyle="{ 'margin-top': '20rpx' }"
          type="primary"
          @click="(queryform.pageNum = 1), queryListData()"
          text="筛选"
        ></u-button>
        <u-button
          :customStyle="{ 'margin-top': '20rpx', 'margin-bottom': '700rpx' }"
          type="error"
          @click="resetQueryForm"
          text="重置"
        ></u-button>
      </view>
    </u-popup>

    <!-- 录单时间弹框  -->
    <u-calendar
      :defaultDate="defaultDateMultiple"
      :show="createTimeOpen"
      :minDate="mindata"
      :monthNum="13"
      mode="range"
      ref="calendar"
      @close="createTimeclose"
      @confirm="createTimeconfirm"
    >
    </u-calendar>
    <!-- 车牌的省份弹框 -->
    <u-picker
      :show="provinceCarBrandOpen"
      @cancel="provinceCarBrandCancel"
      @confirm="provinceCarBrandConfirm"
      keyName="name"
      :columns="provinceCarBrand"
    ></u-picker>
    <!-- 延保项目弹框 -->
    <u-picker
      :show="ExtendedItemOpen"
      @cancel="ExtendedItemCancel"
      @confirm="ExtendedItemConfirm"
      keyName="prodName"
      :columns="Extended"
    ></u-picker>
    <!-- 所属门店弹框 -->
    <u-picker
      :show="storeOpen"
      @cancel="storeCancel"
      @confirm="storeConfirm"
      keyName="name"
      :columns="storeColumns"
    ></u-picker>
    <!-- 市弹框 -->
    <u-picker
      :show="cityOpen"
      @cancel="cityCancel"
      @confirm="cityConfirm"
      keyName="label"
      :columns="cityColumns"
    ></u-picker>
  </view>
</template>

<script>
let app = getApp();
import citydata from "../../utils/listcity.js";
let newDate = new Date(),
  y = newDate.getFullYear(),
  m = newDate.getMonth(),
  d = newDate.getDate();
let firstDay = y + "-" + (m + 1) + "-"  + "1 00:00:00";
let lastDay = y + "-" + (m + 1) + "-" + d + " 23:59:59";

let beforeYear = y;
let beforemonth = m + 1;
beforemonth = beforemonth < 10 ? `0${beforemonth}` : beforemonth;
let beforedate = d;

let afterYear = y;
let aftermonth = m + 1;
aftermonth = aftermonth < 10 ? `0${aftermonth}` : aftermonth;
let afterdate = newDate.getDate();

export default {
  data() {
    return {
      pagesCont: "订单数量: 暂无数据",
      moneyNum: "订单金额: 暂无数据",
      // tabs当前选中索引
      tablecurrent: 0,
      // 加载动画
      loading: true,
      // 录单时间弹框最短时间
      mindata:
        new Date().getFullYear() -
        1 +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
      // 绑定到弹框防止报错
      oldsix: "",
      // 城市弹框开关
      cityOpen: false,
      // 所属门店弹框开关
      storeOpen: false,
      // 延保项目弹框开关
      ExtendedItemOpen: false,
      // 车牌省份弹框开关
      provinceCarBrandOpen: false,
      // 录单时间弹框开关
      createTimeOpen: false,
      // 筛选条件弹出框开关
      queryOpen: false,
      // 列表数据
      listArr: [],
      // 总页数
      pages: 1,
      // 顶部tabs栏数据
      tabList: [
        { name: "全部状态", id: "" },
        { name: "审核中", id: "2" },
        { name: "已生效", id: "3" },
        { name: "未生效", id: "4" },
        { name: "草稿", id: "1" },
      ],
      // 城市弹框数据
      cityColumns: [citydata],
      // 所属门店数据
      storeColumns: [],
      // 延保项目数据
      Extended: [],
      // 车牌号码前面的省简称数据
      provinceCarBrand: [
        [
          {
            id: 999,
            name: "新",
          },
          {
            id: 1,
            name: "京",
          },
          {
            id: 2,
            name: "津",
          },
          {
            id: 3,
            name: "沪",
          },
          {
            id: 4,
            name: "渝",
          },
          {
            id: 5,
            name: "吉",
          },
          {
            id: 6,
            name: "辽",
          },
          {
            id: 7,
            name: "晋",
          },
          {
            id: 8,
            name: "冀",
          },
          {
            id: 9,
            name: "青",
          },
          {
            id: 10,
            name: "鲁",
          },
          {
            id: 11,
            name: "豫",
          },
          {
            id: 12,
            name: "苏",
          },
          {
            id: 13,
            name: "皖",
          },
          {
            id: 14,
            name: "浙",
          },
          {
            id: 15,
            name: "闽",
          },
          {
            id: 16,
            name: "赣",
          },
          {
            id: 17,
            name: "湘",
          },
          {
            id: 18,
            name: "鄂",
          },
          {
            id: 19,
            name: "粤",
          },
          {
            id: 20,
            name: "琼",
          },
          {
            id: 21,
            name: "甘",
          },
          {
            id: 22,
            name: "陕",
          },
          {
            id: 23,
            name: "黔",
          },
          {
            id: 24,
            name: "滇",
          },
          {
            id: 25,
            name: "川",
          },
          {
            id: 26,
            name: "黑",
          },
          {
            id: 27,
            name: "蒙",
          },
          {
            id: 28,
            name: "新",
          },
          {
            id: 29,
            name: "藏",
          },
          {
            id: 30,
            name: "宁",
          },
          {
            id: 31,
            name: "桂",
          },
          {
            id: 32,
            name: "港",
          },
          {
            id: 33,
            name: "澳",
          },
        ],
      ],
      // 筛选条件
      queryform: {
        ContractNo: "", // 合同编号 @
        createTime: "", // 录单时间(展示) @
        // startTime: `${beforeYear}-${beforemonth}-${beforedate} 00:00:0`, // 录单开始时间 @
        // endTime: `${afterYear}-${aftermonth}-${afterdate} 23:59:59`, // 录单结束时间 @
        startTime: "", // 录单开始时间 @
        endTime: "", // 录单结束时间 @
        
        userName: "", // 客户姓名 @
        carLicenseNum: "", // 车牌省简称 @
        carLicense: "", // 车牌号码 @
        payAmount: "", // 实收金额 @
        project: "", // 延保项目(名称) @
        projectId: "", // 延保项目id @
        city: "", // 所属城市 @
        store: "", // 所属门店(名称) @
        storeId: "", // 所属门店Id @
        operStatus: "", // 订单状态 @
        pageNum: 1, // 分页页数
        pageSize: 10, // 分页条数
      },
      defaultDateMultiple: [
        `${beforeYear}-${beforemonth}-${beforedate} 00:00:0`,
        `${afterYear}-${aftermonth}-${afterdate}  23:59:59`,
      ],
    };
  },
  // 监听页面滚动到底部
  onReachBottom() {
    this.loading = true; // 开启动画
    console.log(this.queryform.pageNum, this.pages);
    if (this.queryform.pageNum <= this.pages) {
      ++this.queryform.pageNum;
      // 查询列表
      this.queryListData();
    } else {
      this.loading = false; // 关闭动画
      uni.$u.toast("暂无更多数据!!!");
    }
  },
  // 下拉刷新生命周期
  onPullDownRefresh() {
    this.queryform.pageNum = 1;
    // 查询列表
    this.queryListData();
    // 关闭下拉刷新
    uni.stopPullDownRefresh();
  },
  onShow() {
    // 获取延保项目数据
    this.getExtendedData();
    // 获取所属门店数据
    this.getStore();
    // 查询列表
    this.queryform.startTime = firstDay;
    this.queryform.endTime = lastDay;
    this.queryListData();
    // 查看是否还存在token
    this.$API.goLogin();
    app.globalData.userHeadsName = "";
  },
  watch: {
    tablecurrent() {
      // this.tabschange()
    },
  },
  methods: {
    // 城市文字 处理
    cityformat(text) {
      // return item ? item.split('/').length>=2 ? (item.split('/')[0].length > 1 ? item.split('/')[0] : item.split('/')[1]) : item.split('/')[0] : '-'
      return text
        ? text.split("/").length >= 2
          ? text.split("/")[0].length > 1
            ? text.split("/")[0] === "市辖区"
              ? text.split("/")[1]
              : text.split("/")[0] || "-"
            : text.split("/")[1] || "-"
          : text.split("/")[0]
          ? text.split("/")[0]
          : "-"
        : "-";
    },

    // 跳转至创建列表
    async goCreateInsur(item) {
      try {
        let resData = {
          orderNo: item.orderNo, // 订单编号
        };
        const res = await this.$API.post(
          "/extend/detailExtendOrder",
          resData,
          app.globalData.formdata
        );
        if (res.data.code == 200) {
          if (item.operStatus == 4) {
            uni.navigateTo({
              url: `/pages/submitpage/failpage?option=${encodeURIComponent(
                JSON.stringify(res.data.data)
              )}`,
            });
          } else {
            uni.navigateTo({
              url: `/pages/createInsurance/createInsurance?option=${encodeURIComponent(
                JSON.stringify(res.data.data)
              )}`,
            });
          }
        } else {
          uni.$u.toast("获取订单详情失败");
        }
      } catch (err) {
        console.log("跳转至创建列表接口报错", err);
      }
    },
    // 时间格式化
    timeString(time) {
      let datetime = new Date(time);
      let year = datetime.getFullYear();
      let month =
        datetime.getMonth() + 1 < 10
          ? "0" + (datetime.getMonth() + 1)
          : datetime.getMonth() + 1;
      let date =
        datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate(); // let hour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours(); // let minute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes(); // let second = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
      return year + "年" + month + "月" + date + "日";
    },
    // 查询列表
    async queryListData() {
      console.log(this.queryform.endTime)
      try {
        let ajaxData = {
          contractNo: this.queryform.ContractNo, // 合同编号
          startTime: this.queryform.startTime, // 录单开始时间
          endTime: this.queryform.endTime, // 录单结束时间
          customerName: this.queryform.userName, // 客户姓名
          carLicenseNum: this.queryform.carLicenseNum, // 车牌省份
          carLicense: this.queryform.carLicense, // 车牌号码
          payAmount: this.queryform.payAmount, // 实收金额
          createUserName: this.queryform.createUserName, // 经办人 @
          projectId: this.queryform.projectId, // 延保项目id
          city: this.queryform.city, // 所属城市
          storeId: this.queryform.storeId, // 所属门店id
          operStatus: this.queryform.operStatus, // 订单状态
          pageNum: this.queryform.pageNum, // 分页页数
          pageSize: this.queryform.pageSize, // 分页条数
        };
        const res = await this.$API.post(
          "/extend/listExtendOrder",
          ajaxData,
          app.globalData.json
        );
        if (res.data.code == 200) {
          this.pagesCont =
            "订单数量:" +
            " " +
            (res.data.data.orderCount
              ? res.data.data.orderCount + " " + "张"
              : "暂无数据");
          this.moneyNum =
            "订单金额:" +
            " " +
            (res.data.data.orderAmount
              ? res.data.data.orderAmount + " " + "元"
              : "暂无数据");
          if (this.listArr.length == res.data.data.list.total) {
          } else {
            if (this.queryform.pageNum == 1) {
              this.listArr = [];
            }
            res.data.data.list.list.forEach((item) => {
              this.listArr.push(item);
            });
            this.pages = res.data.data.list.pages;
          }

          this.loading = false; // 关闭动画
        }
      } catch (err) {
        console.log("查询列表函数出错");
      }
    },
    // 查询表单重置
    resetQueryForm() {
      this.queryform = {
        ContractNo: "", // 合同编号 @
        createTime: "", // 录单时间(展示) @
        startTime: "", // 录单开始时间 @
        endTime: "", // 录单结束时间 @
        
        userName: "", // 客户姓名 @
        carLicenseNum: "", // 车牌省简称 @
        carLicense: "", // 车牌号码 @
        createUserName: "", // 经办人 @
        project: "", // 延保项目(名称) @
        projectId: "", // 延保项目id @
        city: "", // 所属城市 @
        store: "", // 所属门店(名称) @
        storeId: "", // 所属门店Id @
        operStatus: "", // 订单状态 @
        pageNum: 1, // 分页页数
        pageSize: 10, // 分页条数
      };
    },
    // 市弹框取消的函数
    cityCancel() {
      this.cityOpen = false;
    },
    // 市弹框确定的函数
    cityConfirm(data) {
      if (data.value[0]) {
        this.queryform.city = data.value[0].label; // 选择市的数据
        this.cityCancel();
      } else {
        this.queryform.city = ""; // 选择市的数据
        this.cityCancel();
      }
    },
    // 所属门店弹框取消按钮函数
    storeCancel() {
      this.storeOpen = false; // 关闭所属门店弹框
    },
    // 所属门店弹框确定按钮函数
    storeConfirm(data) {
      this.queryform.storeId = data.value[0].id; // 选择的门店id
      this.queryform.store = data.value[0].name; // 选择的门店名称
      this.storeCancel(); // 关闭所属门店弹框
    },
    // 延保项目弹框取消按钮函数
    ExtendedItemCancel() {
      this.ExtendedItemOpen = false; // 关闭延保项目弹框
    },
    // 延保项目弹框确定按钮函数
    ExtendedItemConfirm(data) {
      this.queryform.projectId = data.value[0].id; // 选择的延保项目id
      this.queryform.project = data.value[0].prodName; // 选择的延保项目名称
      this.ExtendedItemCancel();
    },
    // 车牌省份弹框取消按钮函数
    provinceCarBrandCancel() {
      this.provinceCarBrandOpen = false; // 关闭车牌省份弹框
    },
    // 车牌省份弹框确定按钮函数
    provinceCarBrandConfirm(data) {
      this.queryform.carLicenseNum = data.value[0].name; // 选择的车牌省份名称
      this.provinceCarBrandCancel();
    },
    // 录单时间弹框取消的函数
    createTimeclose() {
      this.createTimeOpen = false;
    },
    // 录单时间弹框确定的函数
    createTimeconfirm(data) {
      this.queryform.createTime = data[0] + "~" + data[data.length - 1];
      this.queryform.startTime = data[0] + " " + "00:00:00";
      this.queryform.endTime = data[data.length - 1] + " " + "23:59:59";
      this.createTimeOpen = false;
    },
    // 输入城市改变的函数
    citychange() {
      // this.cityOpen = true
      // console.log(this.queryform.city)
      if (this.queryform.city == "") {
        this.cityColumns = [citydata];
      } else {
        this.cityColumns = [];
        let citynew = [];
        citydata.forEach((item) => {
          if (item.label.includes(this.queryform.city)) {
            citynew.push(item);
          }
        });
        this.cityColumns = [citynew];
      }
    },
    // 获取所属门店
    async getStore() {
      try {
        const res = await this.$API.post(
          "/store/userStore",
          {},
          app.globalData.json
        );
        if (res.data.code == 200) {
          this.storeColumns = [];
          this.storeColumns.push(res.data.data.filter((item) => item?.id));
        } else {
          this.storeColumns = [];
        }
      } catch (err) {
        console.log("获取所属门店函数报错", err);
      }
    },
    // 获取延保项目数据
    async getExtendedData() {
      try {
        const res = await this.$API.post(
          "/project/listAll",
          {},
          app.globalData.json
        );
        if (res.data.code == 200) {
          this.Extended = [];
          this.Extended.push(res.data.data);
        }
      } catch (err) {
        console.log("列表页获取延保项目数据函数报错", err);
      }
    },
    // 弹出框开启
    open() {
      // console.log('open');
    },
    // 弹出框关闭
    close() {
      this.queryOpen = false;
      this.resetQueryForm();
    },
    // tabls索引更改时触发
    tabschange() {
      this.queryform.pageNum = 1;
      // 更改查询状态
      this.queryform.operStatus = this.tabList[this.tablecurrent].id;
      // 查询列表
      this.queryListData();
    },
    // 点击tabs栏执行的函数
    tabsFN(item, index) {
      this.queryform.pageNum = 1;
      // 更改查询状态
      this.queryform.operStatus = item.id;
      // 查询列表
      this.queryListData();
    },
  },
};
</script>

<style scoped>
.Summary {
  width: 100%;
  padding: 10rpx 20rpx 0px;
  display: flex;
  justify-content: space-between;
}
.queryform {
  width: 500rpx;
  height: 100%;
  background-color: #fff;
  padding: 40rpx;
}
.hetong {
  font-size: 32rpx;
}
.shengxiao {
  color: #3e863c;
  font-size: 32rpx;
}
.shixiao {
  color: #de2449;
  font-size: 32rpx;
}
.caogao-shenhe {
  color: #000000;
  font-size: 32rpx;
}
.listpage {
  width: 100%;
  box-sizing: border-box;
  padding: 40rpx 40rpx 220rpx 40rpx;
}
.tabs-box {
  padding: 0rpx 0rpx 20rpx;
}
.list-content-box {
  width: 100%;
  padding: 20rpx;
  background: #fcfcfc;
  margin: 20rpx 0rpx;
  box-sizing: border-box;
  box-shadow: 0rpx 4rpx 0rpx #e4e3e1;
  color: #939393;
  font-weight: 600;
}
</style>
