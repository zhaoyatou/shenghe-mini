<template>
  <view class="createInsurance">
    <u-loading-page :loading="loading"></u-loading-page>
    <u-sticky>
      <view class="header-title">新建服务项目</view>
    </u-sticky>
    <view class="creatFrom">
      <!-- :rules="rules" -->
      <u--form
        labelPosition="top"
        :labelWidth="200"
        :labelStyle="{ 'font-weight': 600 }"
        :model="ajaxData"
        :rules="rules"
        ref="createfrom"
      >
        <view class="from-box">
          <view class="from-title"> 车辆信息 </view>
          <view class="form-content">
            <u-form-item
              @click="storeOpen = true"
              label="所属门店"
              prop="extendInfo.storeName"
              borderBottom
            >
              <u--input
                v-model="ajaxData.extendInfo.storeName"
                disabled
                disabledColor="#ffffff"
                placeholder="请选择门店"
                border="none"
              ></u--input>
              <u-icon slot="right" name="arrow-down-fill"></u-icon>
            </u-form-item>
            <u-form-item
              @click="
                ajaxData.extendInfo.storeId
                  ? (carBrandOpen = true)
                  : (carBrandOpen = false)
              "
              label="汽车品牌"
              prop="extendInfo.carBrand"
              borderBottom
            >
              <u--input
                v-model="ajaxData.extendInfo.carBrand"
                disabled
                :disabledColor="
                  ajaxData.extendInfo.storeId ? '#ffffff' : '#F5F5F5'
                "
                placeholder="请选择品牌"
                border="none"
              >
              </u--input>
              <u-icon slot="right" name="arrow-down-fill"></u-icon>
            </u-form-item>
            <u-row gutter="10">
              <u-col span="5">
                <u-form-item
                  @click="
                    ajaxData.extendInfo.carBrand
                      ? (carSeriesOpen = true)
                      : (carSeriesOpen = false)
                  "
                  label=" "
                  prop="extendInfo.carSeries"
                  borderBottom
                >
                  <u--input
                    v-model="ajaxData.extendInfo.carSeries"
                    disabled
                    :disabledColor="
                      ajaxData.extendInfo.carBrand ? '#ffffff' : '#F5F5F5'
                    "
                    placeholder="请选择车系"
                    border="none"
                  ></u--input>
                  <u-icon slot="right" name="arrow-down-fill"></u-icon>
                </u-form-item>
              </u-col>
              <u-col span="7">
                <u-form-item
                  @click="
                    ajaxData.extendInfo.carSeries
                      ? (carModelOpen = true)
                      : (carModelOpen = false)
                  "
                  label=" "
                  prop="extendInfo.carModel"
                  borderBottom
                >
                  <u--input
                    v-model="ajaxData.extendInfo.carModel"
                    disabled
                    :disabledColor="
                      ajaxData.extendInfo.carSeries ? '#ffffff' : '#F5F5F5'
                    "
                    placeholder="请选择车型"
                    border="none"
                  ></u--input>
                  <u-icon slot="right" name="arrow-down-fill"></u-icon>
                </u-form-item>
              </u-col>
            </u-row>
            <u-row gutter="10" align="bottom">
              <u-col span="3">
                <u-form-item
                  @click="provinceCarBrandOpen = true"
                  label="车牌号码"
                  prop="extendInfo.carLicenseNum"
                  borderBottom
                >
                  <u--input
                    v-model="ajaxData.extendInfo.carLicenseNum"
                    disabled
                    disabledColor="#ffffff"
                    placeholder="例如京"
                    border="none"
                  ></u--input>
                  <u-icon slot="right" name="arrow-down-fill"></u-icon>
                </u-form-item>
              </u-col>
              <u-col span="9">
                <u-form-item
                  label=" "
                  prop="extendInfo.carLicense"
                  borderBottom
                >
                  <u--input
                    v-model="ajaxData.extendInfo.carLicense"
                    placeholder="请输入车牌号码"
                    border="none"
                  ></u--input>
                </u-form-item>
              </u-col>
            </u-row>
            <u-form-item
              label="车辆VIN码"
              prop="extendInfo.carCode"
              borderBottom
            >
              <u--input
                v-model="ajaxData.extendInfo.carCode"
                placeholder="请输入车架编码"
                border="none"
              ></u--input>
            </u-form-item>
            <u-form-item
              label="发动机号"
              prop="extendInfo.carEngine"
              borderBottom
            >
              <u--input
                v-model="ajaxData.extendInfo.carEngine"
                placeholder="请输入发动机号"
                border="none"
              ></u--input>
            </u-form-item>
            <u-form-item
              @click="PurchaseTimeOpen = true"
              label="购车时间"
              prop="extendInfo.carBuyTime"
              borderBottom
            >
              <view class="form-right-title-box">
                <!-- <view class="form-right-title">
									质保时间: 3 年
								</view> -->
              </view>
              <u--input
                v-model="oldsix_chinese"
                disabled
                disabledColor="#ffffff"
                placeholder="请选择购车时间"
                border="none"
              >
              </u--input>
              <u-icon slot="right" name="arrow-down-fill"></u-icon>
            </u-form-item>
            <u-form-item
              label="新车购置价"
              prop="extendInfo.carPurchase"
              borderBottom
            >
              <u--input
                v-model="ajaxData.extendInfo.carPurchase"
                placeholder="请输入新车购置价(元)"
                border="none"
              ></u--input>
            </u-form-item>
            <u-form-item
              label="行驶里程"
              prop="extendInfo.carMileage"
              borderBottom
            >
              <view class="form-right-title-box">
                <!-- <view class="form-right-title">
									质保里程: 100000 公里
								</view> -->
              </view>
              <u--input
                v-model="ajaxData.extendInfo.carMileage"
                placeholder="请输入行驶里程(公里)"
                border="none"
              ></u--input>
            </u-form-item>
            <u-form-item
              label="原厂质保时间"
              prop="extendInfo.warrantyTime"
              borderBottom
            >
              <u--input
                v-model="timeYCarRun"
                disabled
                disabledColor="#F5F5F5"
                placeholder="例如: 原厂质保时间4年 输入 4 即可"
                border="none"
              ></u--input>
            </u-form-item>
            <u-row gutter="10" align="bottom">
              <u-col span="6">
                <u-form-item
                  @click="
                    ajaxData.extendInfo.storeId && ajaxData.extendInfo.carId
                      ? (ExtendedItemOpen = true)
                      : (ExtendedItemOpen = false)
                  "
                  label="服务项目"
                  prop="extendInfo.projectName"
                  borderBottom
                >
                  <u--input
                    v-model="ajaxData.extendInfo.projectName"
                    disabled
                    :disabledColor="
                      ajaxData.extendInfo.storeId && ajaxData.extendInfo.carId
                        ? '#ffffff'
                        : '#F5F5F5'
                    "
                    placeholder="请选择服务项目"
                    border="none"
                  ></u--input>
                  <u-icon slot="right" name="arrow-down-fill"></u-icon>
                </u-form-item>
              </u-col>
              <u-col span="6">
                <u-form-item
                  @click="
                    ajaxData.extendInfo.projectId
                      ? (extendTimeOpen = true)
                      : (extendTimeOpen = false)
                  "
                  label="服务时间"
                  prop="extendInfo.extendTime"
                  borderBottom
                >
                  <u--input
                    v-model="ajaxData.extendInfo.extendTime"
                    disabled
                    :disabledColor="
                      ajaxData.extendInfo.projectId ? '#ffffff' : '#F5F5F5'
                    "
                    placeholder="请选择年份"
                    border="none"
                  ></u--input>
                  <template slot="right">
                    <u--text
                      suffixIcon="arrow-down-fill"
                      iconStyle="font-size: 36rpx"
                      text="年"
                    ></u--text>
                  </template>
                </u-form-item>
              </u-col>
            </u-row>
            <!-- <u-form-item @click="InsuredAmountOpen = true" label="保额" prop="InsuredAmount" borderBottom>
							<u--input v-model="showFrom.InsuredAmount" disabled disabledColor="#F5F5F5" placeholder="请选择保额" border="none"></u--input>
							<u-icon slot="right" name="arrow-down-fill"></u-icon>
						</u-form-item> -->
            <view v-show="false">
              <u-form-item label="保额" borderBottom>
                <!-- <u-form-item label="保额" prop="extendInfo.extendQuota" borderBottom > -->
                <u--input
                  v-model="ajaxData.extendInfo.extendQuota"
                  placeholder="请输入保额"
                  border="none"
                ></u--input>
                <template slot="right">
                  <view>元</view>
                </template>
              </u-form-item>
            </view>

            <u-row gutter="10" align="bottom">
              <u-col span="5">
                <u-form-item
                  @click="extendEndOpen = true"
                  label="服务有效截止时间"
                  prop="extendInfo.extendEndTime"
                  borderBottom
                >
                  <u--input
                    v-model="oldfive_chinese"
                    disabled
                    disabledColor="#FFFFFF"
                    placeholder="请选择时间"
                    border="none"
                  ></u--input>
                  <u-icon slot="right" name="arrow-down-fill"></u-icon>
                </u-form-item>
                <!-- <u-form-item @click="extendEndOpen = true" label="服务有效截止时间" prop="extendInfo.extendEndTime" borderBottom>
									<u--input v-model="ajaxData.extendInfo.extendEndTime" disabled disabledColor="#F5F5F5" placeholder="请选择时间" border="none"></u--input>
									<u-icon slot="right" name="arrow-down-fill"></u-icon>
								</u-form-item> -->
              </u-col>
              <u-col span="2" textAlign="center">
                <view>或</view>
              </u-col>
              <u-col span="5">
                <!-- <u-form-item label=" " prop="extendInfo.extendSpace" borderBottom >
									<u--input v-model="ajaxData.extendInfo.extendSpace" disabled disabledColor="#FFFFFF" placeholder="请选择公里数" border="none"></u--input>
									<template slot="right">
										<u--text suffixIcon="arrow-down-fill" iconStyle="font-size: 36rpx" text="公里"></u--text>
									</template>
								</u-form-item> -->
                <u-form-item
                  label=" "
                  prop="extendInfo.extendSpace"
                  borderBottom
                >
                  <u--input
                    type="number"
                    v-model="ajaxData.extendInfo.extendSpace"
                    disabledColor="#FFFFFF"
                    placeholder="请输入公里数"
                    border="none"
                  ></u--input>
                  <template slot="right">
                    <u--text text="公里"></u--text>
                  </template>
                </u-form-item>
              </u-col>
            </u-row>
          </view>

          <view class="from-title"> 销售信息 </view>
          <view class="form-content">
            <u-form-item label="经办人" prop="createUserName" borderBottom>
              <u--input
                v-model="ajaxData.createUserName"
                disabled
                disabledColor="#ffffff"
                placeholder="请输入经办人"
                border="none"
              ></u--input>
            </u-form-item>
            <u-row gutter="10" align="bottom">
              <u-col span="4">
                <u-form-item
                  @click="saleStoreTypeOpen = true"
                  label="店方信息"
                  prop="saleStoreType"
                  borderBottom
                >
                  <u--input
                    v-model="showstoretype"
                    disabled
                    disabledColor="#ffffff"
                    placeholder="请选择"
                    border="none"
                  >
                  </u--input>
                  <u-icon slot="right" name="arrow-down-fill"></u-icon>
                </u-form-item>
              </u-col>
              <u-col span="8">
                <u-form-item label=" " prop="saleStoreName" borderBottom>
                  <u--input
                    v-model="ajaxData.saleStoreName"
                    placeholder="请输入"
                    border="none"
                  ></u--input>
                </u-form-item>
              </u-col>
            </u-row>
          </view>

          <view class="from-title"> 客户信息 </view>
          <view class="form-content">
            <u-row gutter="10" align="bottom">
              <u-col span="5">
                <u-form-item
                  label="客户姓名"
                  prop="customerInfo.customerName"
                  borderBottom
                >
                  <u--input
                    v-model="ajaxData.customerInfo.customerName"
                    placeholder="请输入客户姓名"
                    border="none"
                  ></u--input>
                </u-form-item>
              </u-col>
              <u-col span="7">
                <u-form-item label=" " prop="userSignUrl" v-if="!userHeadsName">
                  <u-button
                    type="primary"
                    size="mini"
                    @click="goHeadsblock"
                    :plain="true"
                    :hairline="true"
                    text="点击进行签名"
                  ></u-button>
                </u-form-item>
                <u-form-item label=" " prop="userSignUrl" v-else>
                  <view class="autograph-image-box" @click="goHeadsblock">
                    <u-icon
                      color="#016BFF"
                      name="checkmark-circle-fill"
                    ></u-icon>
                    <image
                      :src="userHeadsName"
                      class="autograph-image"
                      mode=""
                    ></image>
                  </view>
                </u-form-item>
              </u-col>
            </u-row>
            <u-row gutter="10" align="bottom">
              <u-col span="5">
                <u-form-item
                  label="使用人姓名"
                  prop="customerInfo.useName"
                  borderBottom
                >
                  <u--input
                    v-model="ajaxData.customerInfo.useName"
                    placeholder="请输入使用人姓名"
                    border="none"
                  ></u--input>
                </u-form-item>
              </u-col>
              <u-col span="7">
                <u-form-item
                  label="联系电话"
                  prop="customerInfo.tel"
                  borderBottom
                >
                  <u--input
                    v-model="ajaxData.customerInfo.tel"
                    placeholder="请输入联系电话"
                    border="none"
                  ></u--input>
                </u-form-item>
              </u-col>
            </u-row>
            <u-form-item
              label="电子邮箱地址"
              prop="customerInfo.email"
              borderBottom
            >
              <u--input
                v-model="ajaxData.customerInfo.email"
                placeholder="1337836843@qq.com"
                border="none"
              ></u--input>
            </u-form-item>
            <u-row gutter="10" align="bottom">
              <u-col span="4">
                <u-form-item
                  @click="cardTypeOpen = true"
                  label="证件类型"
                  prop="customerInfo.cardType"
                  borderBottom
                >
                  <u--input
                    v-model="cardType_chinese"
                    disabled
                    disabledColor="#ffffff"
                    placeholder="请选择"
                    border="none"
                  >
                  </u--input>
                  <u-icon slot="right" name="arrow-down-fill"></u-icon>
                </u-form-item>
              </u-col>
              <u-col span="8">
                <u-form-item label=" " prop="customerInfo.cardId" borderBottom>
                  <u--input
                    v-model="ajaxData.customerInfo.cardId"
                    placeholder="请输入证件号码"
                    border="none"
                  ></u--input>
                </u-form-item>
              </u-col>
            </u-row>
           
            <u-row gutter="10" align="bottom">
              <u-col span="5">
                <u-form-item
              @click="provinceOpen = true"
              label="户籍地址"
              prop="customerInfo.province"
              borderBottom
            >
              <u--input
                v-model="ajaxData.customerInfo.province"
                disabled
                disabledColor="#ffffff"
                placeholder="请选择省"
                border="none"
              ></u--input>
              <u-icon slot="right" name="arrow-down-fill"></u-icon>
            </u-form-item>
              </u-col>
              <u-col span="7">
                <u-form-item
                  @click="
                    ajaxData.customerInfo.province
                      ? (cityOpen = true)
                      : (cityOpen = false)
                  "
                  label=" "
                  prop="customerInfo.city"
                  borderBottom
                >
                  <u--input
                    v-model="ajaxData.customerInfo.city"
                    disabled
                    :disabledColor="
                      ajaxData.customerInfo.province ? '#ffffff' : '#F5F5F5'
                    "
                    placeholder="请选择市"
                    border="none"
                  ></u--input>
                  <u-icon slot="right" name="arrow-down-fill"></u-icon>
                </u-form-item>
              </u-col>
              <!-- <u-col span="7">
                <u-form-item
                  @click="
                    ajaxData.customerInfo.city
                      ? (areaOpen = true)
                      : (areaOpen = false)
                  "
                  label=" "
                  prop="area"
                  borderBottom
                >
                  <u--input
                    v-model="ajaxData.area"
                    disabled
                    :disabledColor="
                      ajaxData.customerInfo.city ? '#ffffff' : '#F5F5F5'
                    "
                    placeholder="请选择区"
                    border="none"
                  ></u--input>
                  <u-icon slot="right" name="arrow-down-fill"></u-icon>
                </u-form-item>
              </u-col> -->
            </u-row>

            <u-form-item label=" " prop="customerInfo.address" borderBottom>
              <u--input
                v-model="ajaxData.customerInfo.address"
                placeholder="请输入详细地址"
                border="none"
              ></u--input>
            </u-form-item>
          </view>

          <view class="from-title"> 支付信息 </view>
          <view class="form-content">
            <u-row gutter="10" align="bottom">
              <u-col span="6">
                <u-form-item
                  @click="payOpen = true"
                  label="支付方式"
                  prop="payInfo.payType"
                  borderBottom
                >
                  <u--input
                    v-model="paytypetext"
                    disabled
                    disabledColor="#ffffff"
                    placeholder="请选择支付方式"
                    border="none"
                  >
                  </u--input>
                  <u-icon slot="right" name="arrow-down-fill"></u-icon>
                </u-form-item>
              </u-col>
              <u-col span="6">
                <u-form-item
                  label="实收金额"
                  prop="payInfo.payAmount"
                  borderBottom
                >
                  <u--input
                    v-model="ajaxData.payInfo.payAmount"
                    placeholder="请输入实收金额"
                    border="none"
                  ></u--input>
                </u-form-item>
              </u-col>
            </u-row>
            <u-row gutter="10" align="bottom">
              <u-col span="6">
                <!-- <u-form-item label="代收金额" prop="payInfo.entrustAmount" borderBottom> -->
                <u-form-item label="代收金额" borderBottom>
                  <u--input
                    v-model="ajaxData.payInfo.entrustAmount"
                    placeholder="请输入代收金额"
                    border="none"
                  ></u--input>
                </u-form-item>
              </u-col>
              <u-col span="6">
                <!-- <u-form-item label="加价金额" prop="payInfo.addAmount" borderBottom> -->
                <u-form-item label="加价金额" borderBottom>
                  <u--input
                    v-model="ajaxData.payInfo.addAmount"
                    placeholder="请输入加价金额"
                    border="none"
                  ></u--input>
                </u-form-item>
              </u-col>
            </u-row>
            <u-form-item label="备注" prop="payInfo.remark" borderBottom>
              <u--textarea
                v-model="ajaxData.payInfo.remark"
                placeholder="请输入备注"
                autoHeight
                border="none"
              ></u--textarea>
            </u-form-item>
          </view>

          <view class="from-title"> 影像文件 </view>
          <view class="form-file">
            <u-row gutter="10" align="bottom" customStyle="margin-top: 20rpx">
              <u-col span="6">
                <!-- 身份证正面 -->
                <u-upload
                  width="310rpx"
                  :fileList="fileList1"
                  @afterRead="afterRead1"
                  @delete="deletePic1"
                  name="1"
                  :previewFullImage="true"
                  :maxCount="1"
                >
                  <view class="upload-box">
                    <u-icon
                      size="40rpx"
                      labelColor="#B5B1B0"
                      color="#B5B1B0"
                      name="photo-fill"
                      label="身份证正面"
                      labelPos="bottom"
                    ></u-icon>
                  </view>
                </u-upload>
              </u-col>
              <u-col span="6">
                <!-- 身份证反面 -->
                <u-upload
                  width="310rpx"
                  :fileList="fileList2"
                  @afterRead="afterRead2"
                  @delete="deletePic2"
                  name="2"
                  :previewFullImage="true"
                  :maxCount="1"
                >
                  <view class="upload-box">
                    <u-icon
                      size="40rpx"
                      labelColor="#B5B1B0"
                      color="#B5B1B0"
                      name="photo-fill"
                      label="身份证反面"
                      labelPos="bottom"
                    ></u-icon>
                  </view>
                </u-upload>
              </u-col>
            </u-row>
            <u-row gutter="10" align="bottom" customStyle="margin-top: 20rpx">
              <u-col span="6">
                <!-- 行驶证件照 -->
                <u-upload
                  width="310rpx"
                  :fileList="fileList3"
                  @afterRead="afterRead3"
                  @delete="deletePic3"
                  name="3"
                  :previewFullImage="true"
                  :maxCount="1"
                >
                  <view class="upload-box">
                    <u-icon
                      size="40rpx"
                      labelColor="#B5B1B0"
                      color="#B5B1B0"
                      name="photo-fill"
                      label="行驶证件照"
                      labelPos="bottom"
                    ></u-icon>
                  </view>
                </u-upload>
              </u-col>
              <u-col span="6">
                <!-- 行驶里程 -->
                <u-upload
                  width="310rpx"
                  :fileList="fileList4"
                  @afterRead="afterRead4"
                  @delete="deletePic4"
                  name="4"
                  :previewFullImage="true"
                  :maxCount="1"
                >
                  <view class="upload-box">
                    <u-icon
                      size="40rpx"
                      labelColor="#B5B1B0"
                      color="#B5B1B0"
                      name="photo-fill"
                      label="行驶里程"
                      labelPos="bottom"
                    ></u-icon>
                  </view>
                </u-upload>
              </u-col>
            </u-row>
            <u-row gutter="10" align="bottom" customStyle="margin-top: 20rpx">
              <u-col span="6">
                <!-- 车辆前照 -->
                <u-upload
                  width="310rpx"
                  :fileList="fileList5"
                  @afterRead="afterRead5"
                  @delete="deletePic5"
                  name="5"
                  :previewFullImage="true"
                  :maxCount="1"
                >
                  <view class="upload-box">
                    <u-icon
                      size="40rpx"
                      labelColor="#B5B1B0"
                      color="#B5B1B0"
                      name="photo-fill"
                      label="车辆前照"
                      labelPos="bottom"
                    ></u-icon>
                  </view>
                </u-upload>
              </u-col>
              <u-col span="6">
                <!-- 车身后照 -->
                <u-upload
                  width="310rpx"
                  :fileList="fileList6"
                  @afterRead="afterRead6"
                  @delete="deletePic6"
                  name="6"
                  :previewFullImage="true"
                  :maxCount="1"
                >
                  <view class="upload-box">
                    <u-icon
                      size="40rpx"
                      labelColor="#B5B1B0"
                      color="#B5B1B0"
                      name="photo-fill"
                      label="车身后照"
                      labelPos="bottom"
                    ></u-icon>
                  </view>
                </u-upload>
              </u-col>
            </u-row>
            <u-row gutter="10" align="bottom" customStyle="margin-top: 20rpx">
              <u-col span="6">
                <!-- 线上支付照 -->
                <u-upload
                  width="310rpx"
                  :fileList="fileList7"
                  @afterRead="afterRead7"
                  @delete="deletePic7"
                  name="7"
                  :previewFullImage="true"
                  :maxCount="1"
                >
                  <view class="upload-box">
                    <u-icon
                      size="40rpx"
                      labelColor="#B5B1B0"
                      color="#B5B1B0"
                      name="photo-fill"
                      label="线上支付照"
                      labelPos="bottom"
                    ></u-icon>
                  </view>
                </u-upload>
              </u-col>
              <u-col span="6">
                <!-- 刷卡小票 -->
                <u-upload
                  width="310rpx"
                  :fileList="fileList8"
                  @afterRead="afterRead8"
                  @delete="deletePic8"
                  name="8"
                  :previewFullImage="true"
                  :maxCount="1"
                >
                  <view class="upload-box">
                    <u-icon
                      size="40rpx"
                      labelColor="#B5B1B0"
                      color="#B5B1B0"
                      name="photo-fill"
                      label="刷卡小票"
                      labelPos="bottom"
                    ></u-icon>
                  </view>
                </u-upload>
              </u-col>
            </u-row>
            <u-row gutter="10" align="bottom" customStyle="margin-top: 20rpx">
              <u-col span="6">
                <!-- 车辆视频 -->
                <u-upload
                  width="310rpx"
                  :fileList="fileList9"
                  @afterRead="afterRead9"
                  @delete="deletePic9"
                  name="9"
                  :previewFullImage="true"
                  accept="video"
                  :maxCount="1"
                >
                  <view class="upload-box">
                    <u-icon
                      size="40rpx"
                      labelColor="#B5B1B0"
                      color="#B5B1B0"
                      name="photo-fill"
                      label="车辆视频"
                      labelPos="bottom"
                    ></u-icon>
                  </view>
                </u-upload>
                <button
                  v-if="fileList9.length > 0"
                  class="video-preview-btn"
                  @click="videoPreview"
                ></button>
              </u-col>
            </u-row>
            <u-overlay :show="videoPlay" @click="videoPlay = false">
              <view class="video-cover">
                <video
                  class="video"
                  controls
                  id="myVideo"
                  :src="fileList9[0].url"
                  @fullscreenchange="screenChange"
                ></video>
              </view>
            </u-overlay>
          </view>
        </view>
      </u--form>
    </view>
    <view class="bottom-btn">
      <view class="money-box">
        服务价格: {{ ajaxData.extendInfo.extendPrice }} 元
      </view>
      <view class="operation-box" @click="handle"> 处理 </view>
      <view class="operation-option">
        <view>
          <u-transition
            v-if="btn1"
            :duration="100"
            :show="operationTrans"
            mode="fade-up"
          >
            <view
              class="option1"
              @click="loading == false ? SubmitReview() : test()"
              >提交审核</view
            >
          </u-transition>
          <u-transition
            v-if="btn2"
            :duration="100"
            :show="operationTrans"
            mode="fade-up"
          >
            <view
              class="option2"
              @click="loading == false ? SaveDraft() : test()"
              >保存草稿</view
            >
          </u-transition>
        </view>

        <view>
          <u-transition
            v-if="btn3"
            :duration="100"
            :show="operationTrans"
            mode="fade-up"
          >
            <view
              class="option1"
              @click="loading == false ? PassAudit() : test()"
              >通过审核</view
            >
          </u-transition>
          <u-transition
            v-if="btn4"
            :duration="100"
            :show="operationTrans"
            mode="fade-up"
          >
            <view
              class="option2"
              @click="loading == false ? (rejectShow = true) : test()"
              >驳回申请</view
            >
          </u-transition>
        </view>

        <view>
          <u-transition
            v-if="btn5"
            :duration="100"
            :show="operationTrans"
            mode="fade-up"
          >
            <view
              class="option1"
              @click="loading == false ? (emilShow = true) : test()"
              >发送邮件</view
            >
          </u-transition>
        </view>
      </view>
    </view>
    <!-- 所属门店弹框 -->
    <u-picker
      closeOnClickOverlay
      @close="storeOpen = false"
      :show="storeOpen"
      @cancel="storeCancel"
      @confirm="storeConfirm"
      keyName="name"
      :columns="storeColumns"
    ></u-picker>
    <!-- 车牌的省份弹框 -->
    <u-picker
      closeOnClickOverlay
      @close="provinceCarBrandOpen = false"
      :show="provinceCarBrandOpen"
      @cancel="provinceCarBrandCancel"
      @confirm="provinceCarBrandConfirm"
      keyName="name"
      :columns="provinceCarBrand"
    >
    </u-picker>
    <!-- 购车时间弹框 -->
    <u-datetime-picker
      closeOnClickOverlay
      @close="PurchaseTimeOpen = false"
      :show="PurchaseTimeOpen"
      @cancel="PurchaseTimeCancel"
      @confirm="PurchaseTimeConfirm"
      v-model="oldsix"
      mode="date"
    ></u-datetime-picker>
    <!-- 延保项目弹框 -->
    <u-picker
      closeOnClickOverlay
      @close="ExtendedItemOpen = false"
      :show="ExtendedItemOpen"
      @cancel="ExtendedItemCancel"
      @confirm="ExtendedItemConfirm"
      keyName="prodName"
      :columns="Extended"
    ></u-picker>
    <!-- 延长保修期弹框 -->
    <u-picker
      closeOnClickOverlay
      @close="extendTimeOpen = false"
      :show="extendTimeOpen"
      @cancel="extendTimeCancel"
      @confirm="extendTimeConfirm"
      keyName="prodYear"
      :columns="extendTimedata"
    ></u-picker>
    <!-- 店方信息弹框 -->
    <u-picker
      closeOnClickOverlay
      @close="saleStoreTypeOpen = false"
      :show="saleStoreTypeOpen"
      @cancel="saleStoreTypeCancel"
      @confirm="saleStoreTypeConfirm"
      keyName="name"
      :columns="saleStoreTypeColumns"
    >
    </u-picker>
    <!-- 汽车品牌弹框 -->
    <u-picker
      closeOnClickOverlay
      @close="carBrandOpen = false"
      :show="carBrandOpen"
      @cancel="carBrandCancel"
      @confirm="carBrandConfirm"
      keyName="carBrand"
      :columns="carBrandColumns"
    ></u-picker>
    <!-- 汽车车系弹框 -->
    <u-picker
      closeOnClickOverlay
      @close="carSeriesOpen = false"
      :show="carSeriesOpen"
      @cancel="carSeriesCancel"
      @confirm="carSeriesConfirm"
      keyName="carSeries"
      :columns="carSeriesColumns"
    ></u-picker>
    <!-- 汽车车型弹框 -->
    <u-picker
      closeOnClickOverlay
      @close="carModelOpen = false"
      :show="carModelOpen"
      @cancel="carModelCancel"
      @confirm="carModelConfirm"
      keyName="carModel"
      :columns="carModelColumns"
    ></u-picker>
    <!-- 服务截止时间弹框 -->
    <u-datetime-picker
      :maxDate="extendEndMaxData"
      closeOnClickOverlay
      @close="extendEndOpen = false"
      :show="extendEndOpen"
      @cancel="extendEndCancel"
      @confirm="extendEndConfirm"
      v-model="oldfive"
      mode="date"
    >
    </u-datetime-picker>
    <!-- 证件类型弹框 -->
    <u-picker
      closeOnClickOverlay
      @close="cardTypeOpen = false"
      :show="cardTypeOpen"
      @cancel="cardTypeCancel"
      @confirm="cardTypeConfirm"
      keyName="cardType"
      :columns="cardTypeColumns"
    ></u-picker>
    <!-- 省弹框 -->
    <u-picker
      closeOnClickOverlay
      @close="provinceOpen = false"
      :show="provinceOpen"
      @cancel="provinceCancel"
      @confirm="provinceConfirm"
      keyName="label"
      :columns="provinceColumns"
    ></u-picker>
    <!-- 市弹框 -->
    <u-picker
      closeOnClickOverlay
      @close="cityOpen = false"
      :show="cityOpen"
      @cancel="cityCancel"
      @confirm="cityConfirm"
      keyName="label"
      :columns="cityColumns"
    ></u-picker>
    <!-- 区弹框 -->
    <u-picker
      closeOnClickOverlay
      @close="areaOpen = false"
      :show="areaOpen"
      @cancel="areaCancel"
      @confirm="areaConfirm"
      keyName="label"
      :columns="areaColumns"
    ></u-picker>
    <!-- 支付方式弹框 -->
    <u-picker
      closeOnClickOverlay
      @close="payOpen = false"
      :show="payOpen"
      @cancel="payCancel"
      @confirm="payConfirm"
      keyName="name"
      :columns="payColumns"
    ></u-picker>
    <!-- 发送邮件模态框 -->
    <u-modal
      :show="emilShow"
      showCancelButton
      @cancel="cancelbox"
      @confirm="toEmil"
      ref="uModal"
      :asyncClose="true"
    >
      <view class="slot-content">
        <u--text
          type="primary"
          margin="0rpx 0rpx 20rpx"
          size="40rpx"
          block
          bold
          align="center"
          text="发送邮件"
        ></u--text>
        <u--input
          placeholder="请输入邮箱"
          border="surround"
          v-model="ajaxData.customerInfo.email"
        ></u--input>
      </view>
    </u-modal>
    <!-- 驳回申请模态框 -->
    <u-modal
      :show="rejectShow"
      showCancelButton
      @cancel="cancelreject"
      @confirm="RejectReview"
      ref="uModalreject"
      :asyncClose="true"
    >
      <view class="slot-content rejectwidth">
        <u--text
          type="primary"
          margin="0rpx 0rpx 20rpx"
          size="40rpx"
          block
          bold
          align="center"
          text="驳回申请"
        ></u--text>
        <u--textarea
          width="466rpx"
          v-model="rejectText"
          placeholder="请输入驳回原因"
        ></u--textarea>
      </view>
    </u-modal>
  </view>
</template>

<script>
let app = getApp();
import options from "../../utils/city.js";
export default {
  data() {
    return {
      videoPlay: false,
      // 整屏加载
      loading: false,
      // 回显参数
      optionData: {},
      operationTrans: false, // 处理 盒子的开关
      oldsix: Number(new Date()), // 购车时间弹框隐藏参数 (为了不展示时间戳且插件不报错)
      oldsix_chinese: "", // 格式化的购车时间参数(为了展示xxxx-xx-xx)
      oldfive: "", // 服务有效截止时间弹框隐藏参数(为了不展示时间戳且插件不报错)
      oldfive_chinese: "", // 格式化的服务截止时间参数(为了展示xxxx-xx-xx)
      extendEndMaxData: 0, // 服务有效截止时间最大可选时间
      cardType_chinese: "", // 证件类型(为了不展示id)
      showstoretype: "", // 店方信息(展示用 售前售后)
      paytypetext: "", // 支付方式(展示用)
      timeYCarRun: "", // 原厂质保时间及其公里数(展示用)
      btn1: false, // 提交审核 隐显控制
      btn2: false, // 保存草稿 隐显控制
      btn3: false, // 通过审核 隐显控制
      btn4: false, // 驳回申请 隐显控制
      btn5: false, // 发送邮件 隐显控制
      // 车型弹框开关
      carModelOpen: false,
      // 车系弹框开关
      carSeriesOpen: false,
      // 延长保修期弹框开关
      extendTimeOpen: false,
      // 发送邮件模态框开关
      emilShow: false,
      // 驳回申请模态框开关
      rejectShow: false,
      // 驳回申请原因
      rejectText: "",
      // 支付方式弹框开关
      payOpen: false,
      // 省弹框开关
      provinceOpen: false,
      // 市弹框开关
      cityOpen: false,
      // 区弹框开关
      areaOpen: false,
      // 证件类型弹框开关
      cardTypeOpen: false,
      // 服务截止时间弹框开关
      extendEndOpen: false,
      // 汽车品牌弹框开关
      carBrandOpen: false,
      // 店方信息弹框开关
      saleStoreTypeOpen: false,
      // 所属门店弹框开关
      storeOpen: false,
      // 车牌省份弹框开关
      provinceCarBrandOpen: false,
      // 购车时间弹框开关
      PurchaseTimeOpen: false,
      // 延保项目弹框开关
      ExtendedItemOpen: false,
      // 身份证正面
      fileList1: [],
      // 身份证反面
      fileList2: [],
      // 行驶证件照
      fileList3: [],
      // 行驶里程
      fileList4: [],
      // 车辆前照
      fileList5: [],
      // 车身后照
      fileList6: [],
      // 线上支付照
      fileList7: [],
      // 刷卡小票
      fileList8: [],
      // 车辆视频
      fileList9: [],
      // 请求字段
      ajaxData: {
        // 车辆信息
        extendInfo: {
          id: "",
          orderNo: "",
          storeId: "", // 所属门店id @
          storeName: "", // 所属门店名称 @ ! 1
          carBrand: "", // 汽车品牌名称 @ ! 1
          carSeries: "", // 车系 @ ! 1
          carModel: "", // 车型 @ ! 1
          carId: "", // 汽车品牌的id @
          carLicenseNum: "", // 车牌号各省代称 @ ! 1
          carLicense: "", // 首字母加车牌号 @ ! 1
          carCode: "", // 车架VIN码 @ ! 1
          carEngine: "", // 发动机号 @ ! 1
          carBuyTime: "", // 购车时间 @ ! 1
          carPurchase: "", // 新车购置价 @ ! 1
          carMileage: "", // 行驶里程 @ ! 1
          projectId: "", // 延保项目的id @
          projectName: "", // 延保项目的名称 @ !
          warrantyTime: "", // 原厂质保时间 @ 1
          extendTime: "", // 延长保修期 @ ! 1
          extendQuota: "", // 延保金额  @ ! 1
          extendEndTime: "", // 服务截止时间(日期) @ ! 1
          extendSpace: "", // 服务截止时间(公里数) @ ! 1
          extendPrice: "", // 延保价格 @
          originCarMileage: "", // 原厂质保里程
        },
        // 支付信息
        payInfo: {
          id: "",
          orderNo: "",
          payType: "", // 支付类型 (1微信 2支付宝 3现金 4刷卡) @ ! 1
          payAmount: "", // 实收金额 @ ! 1
          entrustAmount: "", // 代收金额 @ ! 1
          addAmount: "", // 加价金额 @ ! 1
          remark: "", // 备注 @ ! 1
          createTime: new Date(), // 当前时间时间戳
        },
        // 影像文件
        fileInfos: [],
        // 用户信息
        customerInfo: {
          id: "",
          orderNo: "",
          customerName: "", // 客户姓名 @ ! 1
          useName: "", // 使用人姓名 @
          cardId: "", // 证件号码 @ ! 1
          cardType: "", // 证件类型 @ ! 1
          province: "", // 户籍省 @ ! 1
          city: "", // 户籍市 @ ! 1
          address: "", // 详细地址 @ ! 1
          tel: "", // 联系电话 @ ! 1
          email: "1337836843@qq.com", // 电子邮箱 @ !
          createTime: new Date(), // 时间戳
        },
        sourceType: "1", // 录单来源 1为移动端
        operStatus: "", // 订单状态(1草稿 2审核中 3审核通过 4拨回)
        saleStoreName: "", // 店方信息(人员) @ ! 1
        saleStoreType: "", // 店方信息(售前售后) @ ! 1
        saleStoreId: "", // 所属门店id @
        userSignUrl: "", // 用户手写签名图片地址 @ ! 1
        createUserName: "", // 经办人 @ ! 1
        area: "", // 区
      },
      // 表单校验
      rules: {
        // 所属门店
        "extendInfo.storeName": [
          {
            required: true,
            message: "请选择所属门店",
            trigger: ["change", "blur"],
          },
        ],
        // 汽车品牌
        "extendInfo.carBrand": [
          {
            required: true,
            message: "请选择汽车品牌",
            trigger: ["change", "blur"],
          },
        ],
        // 车系
        "extendInfo.carSeries": [
          {
            required: true,
            message: "请选择车系",
            trigger: ["change", "blur"],
          },
        ],
        // 车型
        "extendInfo.carModel": [
          {
            required: true,
            message: "请选择车型",
            trigger: ["change", "blur"],
          },
        ],
        // 车牌省份
        "extendInfo.carLicenseNum": [
          {
            required: true,
            message: "请选择省份",
            trigger: ["change", "blur"],
          },
        ],
        // 车牌号
        "extendInfo.carLicense": [
          {
            required: true,
            // pattern: /^[A-Z]{1}[\d\w]{5}$/,
            pattern: /^[A-Z|\d\w]{6,8}$/,
            // 正则检验前先将值转为字符串
            transform(value) {
              return String(value);
            },
            message: "只能包含字母或数字且最大等于8位最小等于6位",
            trigger: ["change", "blur"],
          },
        ],
        // 车辆VIN码
        "extendInfo.carCode": [
          {
            // required: true,
            pattern: /^[A-Z|\d\w]{17,18}$/,
            // 正则检验前先将值转为字符串
            transform(value) {
              return String(value);
            },
            message: "只能包含字母或数字且大于17位小于18位",
            trigger: ["change", "blur"],
          },
        ],
        // 发动机号
        "extendInfo.carEngine": [
          {
            required: true,
            // pattern: /[A-Z0-9]$/,
            // 正则检验前先将值转为字符串
            transform(value) {
              return String(value);
            },
            // message: '只能包含字母或数字且字母不为小写',
            message: "请输入发动机号",
            trigger: ["change", "blur"],
          },
        ],
        // 购车时间
        "extendInfo.carBuyTime": [
          {
            required: true,
            transform(value) {
              return String(value);
            },
            message: "请选择购车时间",
            trigger: ["change", "blur"],
          },
        ],
        // 新车购置价
        "extendInfo.carPurchase": [
          {
            required: true,
            pattern: /^(([0-9]\d{1,9})|\d)(\.\d{1,2}){0,1}$/,
            message: "请输入正确新车购置价(整数部分最多九位小数部分最多两位)",
            // 正则检验前先将值转为字符串
            transform(value) {
              return String(value);
            },
            trigger: ["change", "blur"],
          },
        ],
        // 行驶里程
        "extendInfo.carMileage": [
          {
            required: true,
            pattern: /^(([0-9]\d{1,9})|\d)(\.\d{1,2}){0,1}$/,
            message: "请输入正确行驶里程(小数部分最多两位)",
            // 正则检验前先将值转为字符串
            transform(value) {
              if (value && value == 0) {
                return false;
              } else {
                return value;
              }
              return String(value);
            },
            trigger: ["change", "blur"],
          },
        ],
        // 延保项目
        "extendInfo.projectName": [
          {
            required: true,
            message: "请选择服务项目",
            trigger: ["change", "blur"],
          },
        ],
        // 原厂质保时间
        "extendInfo.warrantyTime": [
          {
            required: true,
            transform(value) {
              return String(value);
            },
            message: "请输入原厂质保时间",
            trigger: ["change", "blur"],
          },
        ],
        // 延长保修期
        "extendInfo.extendTime": [
          {
            required: true,
            transform(value) {
              return String(value);
            },
            message: "请选择服务时间",
            trigger: ["change", "blur"],
          },
        ],
        // 保额
        // 'extendInfo.extendQuota': [
        // 	{
        // 		required: true,
        // 		pattern: /^(([0-9]\d{1,9})|\d)(\.\d{1,2}){0,1}$/,
        // 		message: '请输入正确保额(整数部分最多九位小数部分最多两位)',
        // 		// 正则检验前先将值转为字符串
        // 		transform(value) {
        // 			return String(value);
        // 		},
        // 		trigger: ['change', 'blur'] ,
        // 	} ,
        // ],
        // 服务有效时间
        "extendInfo.extendEndTime": [
          {
            required: true,
            message: "请选择服务有效时间",
            trigger: ["change", "blur"],
          },
        ],
        // 服务有效公里数
        "extendInfo.extendSpace": [
          {
            required: true,
            // pattern: /^(([0-9]\d{1,9})|\d)(\.\d{1,2}){0,1}$/,
            // 正则检验前先将值转为字符串
            // transform(value) {
            // 	return String(value);
            // },
            validator: (rule, value, callback) => {
              if (value != "" && value != undefined && Number(value) >= 0) {
                callback();
              } else {
                callback(new Error("请输入正确服务有效公里数"));
              }
            },
            message: "请输入正确服务有效公里数",
            trigger: ["change", "blur"],
          },
        ],
        // 支付方式
        "payInfo.payType": [
          {
            required: true,
            message: "请选择支付方式",
            trigger: ["change", "blur"],
          },
        ],
        // 实收金额
        "payInfo.payAmount": [
          {
            required: true,
            pattern: /^(([0-9]\d{1,9})|\d)(\.\d{1,2}){0,1}$/,
            message: "请输入正确实收金额(整数部分最多九位小数部分最多两位)",
            // 正则检验前先将值转为字符串
            transform(value) {
              return String(value);
            },
            trigger: ["change", "blur"],
          },
        ],
        // 代收金额
        // 'payInfo.entrustAmount': [
        // 	{
        // 		required: true,
        // 		pattern: /^(([0-9]\d{1,9})|\d)(\.\d{1,2}){0,1}$/,
        // 		message: '请输入正确代收金额(整数部分最多九位小数部分最多两位)',
        // 		// 正则检验前先将值转为字符串
        // 		transform(value) {
        // 			return String(value);
        // 		},
        // 		trigger: ['change', 'blur'] ,
        // 	} ,
        // ],
        // 加价金额
        // 'payInfo.addAmount': [
        // 	{
        // 		required: true,
        // 		pattern: /^(([0-9]\d{1,9})|\d)(\.\d{1,2}){0,1}$/,
        // 		message: '请输入正确加价金额(整数部分最多九位小数部分最多两位)',
        // 		// 正则检验前先将值转为字符串
        // 		transform(value) {
        // 			return String(value);
        // 		},
        // 		trigger: ['change', 'blur'] ,
        // 	} ,
        // ],
        // 备注
        "payInfo.remark": [
          {
            required: false,
            message: "请输入备注",
            trigger: ["change", "blur"],
          },
        ],
        // 客户姓名
        "customerInfo.customerName": [
          {
            required: true,
            message: "请输入客户姓名",
            trigger: ["change", "blur"],
          },
        ],
        // 证件号码
        "customerInfo.cardId": [
          {
            required: true,
            validator: (rule, value, callback) => {
              if (this.ajaxData.customerInfo.cardType == "1") {
                let reg =
                  /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

                if (this.ajaxData.customerInfo.cardId != "") {
                  if (reg.test(value)) {
                    callback();
                  } else {
                    callback(new Error("身份证格式错误"));
                  }
                } else {
                  callback(new Error("请输入身份证号"));
                }
              } else if (this.ajaxData.customerInfo.cardId != "") {
                callback();
              } else {
                callback(new Error("请输入证件号码"));
              }
            },
            // message: '请输入证件号码',
            trigger: ["change", "blur"],
          },
        ],
        // 证件类型
        "customerInfo.cardType": [
          {
            required: true,
            message: "请选择证件类型",
            trigger: ["change", "blur"],
          },
        ],
        // 户籍省
        "customerInfo.province": [
          { required: true, message: "请选择省", trigger: ["change", "blur"] },
        ],
        // 户籍市
        "customerInfo.city": [
          { required: true, message: "请选择市", trigger: ["change", "blur"] },
        ],
        // 户籍区
        // area: [
        //   { required: true, message: "请选择区", trigger: ["change", "blur"] },
        // ],
        // 详细地址
        "customerInfo.address": [
          {
            required: true,
            message: "请输入详细地址",
            trigger: ["change", "blur"],
          },
        ],
        // 联系电话
        "customerInfo.tel": [
          {
            required: true,
            pattern: /^1[0-9]{10}$/,
            // 正则检验前先将值转为字符串
            transform(value) {
              return String(value);
            },
            message: "请输入正确的手机号码",
            trigger: ["change", "blur"],
          },
        ],
        "customerInfo.email": [
          {
            required: true,
            pattern: /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/,
            // 正则检验前先将值转为字符串
            transform(value) {
              return String(value);
            },
            message: "请输入正确的邮箱",
            trigger: ["change", "blur"],
          },
        ],
        // 经办人
        createUserName: [
          {
            required: true,
            message: "请输入经办人",
            trigger: ["change", "blur"],
          },
        ],
        // 店方信息（职位）
        saleStoreType: [
          {
            required: true,
            message: "请选择店方信息（职位）",
            trigger: ["change", "blur"],
          },
        ],
        // 店方信息（人员）
        saleStoreName: [
          {
            required: true,
            message: "请输入店方信息（人员）",
            trigger: ["change", "blur"],
          },
        ],

        // 手写签名
        userSignUrl: [
          {
            required: true,
            message: "请手写签名",
            trigger: ["change", "blur"],
          },
        ],
      },
      // 支付弹框数据
      payColumns: [
        [
          { id: "1", name: "微信" },
          { id: "2", name: "支付宝" },
          { id: "3", name: "现金" },
          { id: "4", name: "刷卡" },
        ],
      ],
      // 延长保修期数据
      extendTimedata: [],
      // 省弹框数据
      provinceColumns: [options],
      // 市弹框数据
      cityColumns: [],
      // 区弹框数据
      areaColumns: [],
      // 所属门店数据
      storeColumns: [],
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
      // 延保项目数据
      Extended: [],
      // 店方信息弹框数据
      saleStoreTypeColumns: [
        [
          {
            id: "1",
            name: "售前",
          },
          {
            id: "2",
            name: "售后",
          },
        ],
      ],
      // 证件类型数据
      cardTypeColumns: [
        [
          {
            id: "1",
            cardType: "身份证",
          },
          {
            id: "2",
            cardType: "驾驶证",
          },
          {
            id: "3",
            cardType: "护照",
          },
          {
            id: "4",
            cardType: "港澳台证件",
          },
        ],
      ],
      // 汽车品牌弹框数据
      carBrandColumns: [],
      // 车系弹框数据
      carSeriesColumns: [],
      // 车型弹框数据
      carModelColumns: [],
      // 用户电子签名图片地址
      userHeadsName: app.globalData.userHeadsName,
    };
  },
  updated() {},
  watch: {
    // 监听门店id变化
    "ajaxData.extendInfo.storeId"() {
      // 获取延保项目数据
      this.getInsuranceItems();
      // 获取品牌车系车型
      this.getCar();
    },
    // 监听汽车品牌变化
    "ajaxData.extendInfo.carBrand"() {
      // 获取车系
      this.getCarType();
    },
    // 监听车系变化
    "ajaxData.extendInfo.carSeries"() {
      // 获取车型
      this.getCarmodel();
    },
    // 监听汽车品牌id变化
    "ajaxData.extendInfo.carId"() {
      // 获取延保项目数据
      this.getInsuranceItems();
      // 计算延保价格
      this.CalculatePrice();
    },
    // 监听购车时间变化
    "ajaxData.extendInfo.carBuyTime"() {
      // 计算延保价格
      this.CalculatePrice();
      this.nowtime(this.ajaxData.extendInfo.carBuyTime);
    },
    // 监听行驶里程变化
    "ajaxData.extendInfo.carMileage"() {
      // 计算延保价格
      this.CalculatePrice();
    },
    // 监听延保项目变化
    "ajaxData.extendInfo.projectId"() {
      // 计算延保价格
      this.CalculatePrice();
    },
    // 监听延长保修期变化
    "ajaxData.extendInfo.extendTime"() {
      // 计算延保价格
      this.CalculatePrice();
    },
    // 监听省的变化
    "ajaxData.customerInfo.province"() {
      options.forEach((item) => {
        if (item.label == this.ajaxData.customerInfo.province) {
          this.cityColumns = [];
          this.cityColumns.push(item.children); // 添加市的数据
        }
      });
    },
    // 监听市的变化
    "ajaxData.customerInfo.city"() {
      options.forEach((item) => {
        if (item.label == this.ajaxData.customerInfo.province) {
          item.children.forEach((itc) => {
            if (itc.label == this.ajaxData.customerInfo.city) {
              this.areaColumns = [];
              this.areaColumns.push(itc.children);
            }
          });
        }
      });
    },
  },
  onShow() {
    // this.btn1 = true // 提交审核
    // this.btn2 = true // 保存草稿
    // this.btn3 = true // 通过审核
    // this.btn4 = true // 驳回申请
    // this.btn5 = true // 发送邮件

    // 查看是否还存在token
    this.$API.goLogin();
    // 获取所属门店数据
    this.getStore();
    // 手写签名更新
    this.userHeadsName = app.globalData.userHeadsName;
    // 添加手写签名在表单的数据
    this.ajaxData.userSignUrl = app.globalData.userHeadsName;
    // 添加经办人
    this.ajaxData.createUserName = this.$API.getStorage("JBname");
  },
  onLoad(option) {
    if (option && option.option) {
      this.optionData = JSON.parse(decodeURIComponent(option.option));
      this.setFrom();
    }
  },
  onReady() {
    // #ifndef MP-ALIPAY
    this.videoContext = uni.createVideoContext("myVideo");
    // #endif
    // 开启表单正则
    this.$refs.createfrom.setRules(this.rules);
    // 限制服务截止时间
    this.nowtime();
    // 管理员 :
    // 	如果进入创建页面 或者 点击草稿列表进入创建页面 可以提交审核保存草稿
    // 	如果点击审核中列表进入创建页面  如果没有审核权限 则无法操作任何东西
    // 	如果点击审核通过列表进入创建页面 可以发送邮件 可以修改重新提审
    // 	如果点击驳回列表进入创建页面 可以重新提交审核

    // 业务员:
    // 	如果进入创建页面 或者 点击草稿列表进入创建页面 可以提交审核保存草稿
    // 	如果点击审核中列表进入创建页面  如果没有审核权限 则无法操作任何东西
    // 	如果点击审核通过列表进入创建页面  只能发送邮件
    // 	如果点击驳回列表进入创建页面 业务员修改后重新提审
    // 审核权限控制
    let SHrelos = this.$API.getStorage("SHrelos"); // 1为有权限
    if (SHrelos == 1 && this.ajaxData.operStatus == 2) {
      // operStatus 为 订单状态为提审状态
      this.btn3 = true; // 通过审核
      this.btn4 = true; // 驳回申请
    } else {
      this.btn3 = false; // 通过审核
      this.btn4 = false; // 驳回申请
    }
    // 订单状态(1草稿 2审核中 3审核通过 4拨回)
    let relosuser = this.$API.getStorage("relosuser"); // 用户权限 10为管理员 否则为业务员

    if (relosuser == "10" || SHrelos == 1) {
      if (this.ajaxData.operStatus == "" || this.ajaxData.operStatus == "1") {
        this.btn1 = true; // 提交审核
        this.btn2 = true; // 保存草稿
      } else if (this.ajaxData.operStatus == "2") {
        // 审核中无法修改
      } else if (this.ajaxData.operStatus == "3") {
        this.btn5 = true; // 发送邮件
        this.btn1 = true; // 提交审核
      } else {
        this.btn1 = true; // 提交审核
      }
    } else {
      if (this.ajaxData.operStatus == "" || this.ajaxData.operStatus == "1") {
        this.btn1 = true; // 提交审核
        this.btn2 = true; // 保存草稿
      } else if (this.ajaxData.operStatus == "2") {
        // 审核中无法修改
      } else if (this.ajaxData.operStatus == "3") {
        this.btn5 = true; // 发送邮件
      } else {
        this.btn1 = true; // 提交审核
      }
    }
  },
  methods: {
    videoPreview() {
      // console.log(this.fileList9[0].url);
      setTimeout(() => {
        this.videoContext.requestFullScreen({ direction: 0 });

        this.videoContext.play();
      }, 10);

      this.videoPlay = true;
    },
    // 根据全屏切换事件，控制视频的显示隐藏

    screenChange(e) {
      if (!e.detail.fullScreen) {
        this.videoPlay = false;
      }
    },

    // 服务截止时间获取当前时间加八年
    nowtime(item) {
      let datetime;
      if (item) {
        datetime = new Date(item);
      } else {
        datetime = new Date();
      }

      let year = datetime.getFullYear();
      let month =
        datetime.getMonth() + 1 < 10
          ? "0" + (datetime.getMonth() + 1)
          : datetime.getMonth() + 1;
      let date =
        datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
      datetime = new Date(year + 8 + "-" + month + "-" + date);
      this.extendEndMaxData = datetime.getTime();
    },
    // 空白函数防止误触
    test() {},
    // 时间格式化
    timeString(time) {
      let datetime = new Date(time);
      let year = datetime.getFullYear();
      let month =
        datetime.getMonth() + 1 < 10
          ? "0" + (datetime.getMonth() + 1)
          : datetime.getMonth() + 1;
      let date =
        datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
      // let hour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours();
      // let minute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes();
      // let second = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
      return year + "年" + month + "月" + date + "日";
    },
    // 提交审核函数
    SubmitReview() {
      try {
        if (this.loading == false) {
          // 校验表单
          this.$refs.createfrom
            .validate()
            .then(async (res) => {
              let filetype = [];
              this.ajaxData.fileInfos.forEach((item) => {
                let numType = String(item.fileType);
                filetype.push(numType);
              });
              if (!filetype.includes("1")) {
                uni.$u.toast("请上传身份证正面照");
                return;
              }
              if (!filetype.includes("2")) {
                uni.$u.toast("请上传身份证反面照");
                return;
              }
              if (!filetype.includes("3")) {
                uni.$u.toast("请上传行驶证证件照");
                return;
              }
              if (!filetype.includes("8")) {
                uni.$u.toast("请上传刷卡小票照片");
                return;
              }
              // 存储为审核中状态
              this.ajaxData.operStatus = "2";
              let goData = JSON.parse(JSON.stringify({ ...this.ajaxData }));
              // 拼接市和区
              goData.customerInfo.city =
                goData.customerInfo.city + "/" + goData.area;
              // 删除区字段
              delete goData.area;
              // 开启整屏加载
              this.loading = true;
              const rec = await this.$API.post(
                "/extend/saveExtend",
                goData,
                app.globalData.json
              );
              if (rec.data.code == 200) {
                app.globalData.userHeadsName = "";
                // 打开/关闭 处理的盒子
                this.operationTrans = !this.operationTrans;
                // 关闭整平加载
                this.loading = false;
                uni.$u.toast("提审成功");
                let option = {
                  contractNo: rec.data.data.contractNo, // 订单编号
                  updateTime: rec.data.data.updateTime, // 创建时间
                };
                let time = setTimeout(() => {
                  clearTimeout(time);
                  // 清空表单
                  this.resetFrom();
                  uni.redirectTo({
                    url: `/pages/submitpage/submitpage?option=${encodeURIComponent(
                      JSON.stringify(option)
                    )}`,
                  });
                  app.globalData.userHeadsName = "";
                }, 500);
              } else {
                // 关闭整平加载
                this.loading = false;
                // uni.$u.toast('提审失败请重新提审')
              }
            })
            .catch((errors) => {
              uni.$u.toast("校验失败");
            });
        } else {
        }
      } catch (err) {
        // 关闭整屏加载
        this.loading = false;
        // uni.$u.toast('提审失败请重新提审')
        console.log("提交审核函数报错", err);
      }
    },
    // 驳回申请模态框取消函数
    cancelreject() {
      this.rejectShow = false;
    },
    // 驳回申请函数 模态框确定函数
    async RejectReview() {
      try {
        if (this.loading == false) {
          let resData = {
            orderNo: this.optionData.orderNo, // 订单编号
            body: this.rejectText, // 驳回原因
          };
          // 开启整屏加载
          this.loading = true;
          // 关闭驳回申请弹框
          this.cancelreject();
          const res = await this.$API.post(
            "/extend/cancel",
            resData,
            app.globalData.formdata
          );
          if (res.data.code == 200) {
            // 关闭整屏加载
            this.loading = false;
            uni.$u.toast("已驳回申请");
            let time = setTimeout(() => {
              clearTimeout(time);
              // 清空表单
              this.resetFrom();
              uni.redirectTo({
                url: "/pages/listpage/listpage",
              });
            }, 500);
          } else {
            uni.$u.toast(res.data.message);
            // 关闭整屏加载
            this.loading = false;
          }
        } else {
        }
      } catch (err) {
        // 关闭整屏加载
        this.loading = false;
        uni.$u.toast("驳回失败");
        console.log("驳回申请函数报错", err);
      }
    },
    // 通过审核函数
    async PassAudit() {
      try {
        // 未开启加载的时候才可执行逻辑
        if (this.loading == false) {
          let resData = {
            orderNo: this.optionData.orderNo, // 订单编号
          };
          // 开启整屏加载
          this.loading = true;
          const res = await this.$API.post(
            "/extend/approved",
            resData,
            app.globalData.json
          );
          if (res.data.code == 200) {
            // 关闭整屏加载
            this.loading = false;
            uni.$u.toast("审核通过即将跳转至业务列表页");
            let time = setTimeout(() => {
              clearTimeout(time);
              // 清空表单
              this.resetFrom();
              uni.redirectTo({
                url: "/pages/listpage/listpage",
              });
            }, 2000);
          } else {
            uni.$u.toast(res.data.message);
            // 关闭整屏加载
            this.loading = false;
          }
        } else {
        }
      } catch (err) {
        // 关闭整屏加载
        this.loading = false;
        uni.$u.toast("审核失败");
        console.log("通过审核函数报错", err);
      }
    },
    // 发送邮件 模态框取消按钮函数
    cancelbox() {
      this.emilShow = false;
    },
    // 发送邮件(模态框确定函数)
    async toEmil() {
      try {
        if (this.loading == false) {
          // 开启整屏加载
          this.loading = true;
          let resData = {
            orderNo: this.ajaxData.orderNo, // 订单编号
            email: this.ajaxData.customerInfo.email, // 邮箱
          };
          // 关闭发送邮件弹框
          this.cancelbox();
          const res = await this.$API.post(
            "/message/sendEmail",
            resData,
            app.globalData.formdata
          );
          if (res.data.code == 200) {
            // 关闭整屏加载
            this.loading = false;
            uni.$u.toast("邮件已发送即将跳转至业务列表页");
            let time = setTimeout(() => {
              clearTimeout(time);
              // 清空表单
              this.resetFrom();
              uni.redirectTo({
                url: "/pages/listpage/listpage",
              });
            }, 2000);
          } else {
            uni.$u.toast(res.data.message);
            // 关闭整屏加载
            this.loading = false;
          }
        } else {
        }
      } catch (err) {
        // 关闭整屏加载
        this.loading = false;
        uni.$u.toast("邮件发送失败");
        console.log("发送邮件函数报错", err);
      }
    },
    // 表单回填
    setFrom() {
      // 城市格式化
      let cityformat = () => {
        if (this.optionData.customerInfo.city) {
          let cityarr = this.optionData.customerInfo.city.split("/");
          return cityarr;
        } else {
          return ["", ""];
        }
      };
      // 证件类型格式化
      let cardType_chineseformat = () => {
        if (this.optionData.customerInfo.cardType) {
          let cardType = "";
          this.cardTypeColumns[0].forEach((item) => {
            if (item.id == this.optionData.customerInfo.cardType) {
              cardType = item.cardType;
            }
          });
          return cardType;
        } else {
          return "";
        }
      };
      // 图片信息格式化
      (() => {
        this.optionData.fileInfos.forEach((item) => {
          this[`fileList${item.fileType}`].push({
            url: item.fileUrl,
          });
        });
      })();
      (this.ajaxData = {
        // 车辆信息
        extendInfo: {
          id: this.optionData.extendInfo.id,
          orderNo: this.optionData.extendInfo.orderNo,
          storeId: this.optionData.extendInfo.storeId || "", // 所属门店id @
          storeName: this.optionData.extendInfo.storeName, // 所属门店名称 @ ! 1
          carBrand: this.optionData.extendInfo.carBrand, // 汽车品牌名称 @ ! 1
          carSeries: this.optionData.extendInfo.carSeries, // 车系 @ ! 1
          carModel: this.optionData.extendInfo.carModel, // 车型 @ ! 1
          carId: this.optionData.extendInfo.carId || "", // 汽车品牌的id @
          carLicenseNum: this.optionData.extendInfo.carLicenseNum, // 车牌号各省代称 @ ! 1
          carLicense: this.optionData.extendInfo.carLicense, // 首字母加车牌号 @ ! 1
          carCode: this.optionData.extendInfo.carCode, // 车架VIN码 @ ! 1
          carEngine: this.optionData.extendInfo.carEngine, // 发动机号 @ ! 1
          carBuyTime: this.optionData.extendInfo.carBuyTime || "", // 购车时间 @ ! 1
          carPurchase: this.optionData.extendInfo.carPurchase || "", // 新车购置价 @ ! 1
          carMileage: this.optionData.extendInfo.carMileage || "", // 行驶里程 @ ! 1
          projectId: this.optionData.extendInfo.projectId || "", // 延保项目的id @
          projectName: this.optionData.extendInfo.projectName, // 延保项目的名称 @ !
          warrantyTime: this.optionData.extendInfo.warrantyTime, // 原厂质保时间 @ 1
          extendTime: this.optionData.extendInfo.extendTime || "", // 延长保修期 @ ! 1
          extendQuota: this.optionData.extendInfo.extendQuota || "", // 延保金额  @ ! 1
          extendEndTime: this.optionData.extendInfo.extendEndTime, // 服务截止时间(日期) @ ! 1
          extendSpace: Number(this.optionData.extendInfo.extendSpace), // 服务截止时间(公里数) @ ! 1
          extendPrice: this.optionData.extendInfo.extendPrice || 0, // 延保价格 @
          originCarMileage: this.optionData.originCarMileage, // 原厂质保里程
        },
        // 支付信息
        payInfo: {
          id: this.optionData.payInfo.id,
          orderNo: this.optionData.payInfo.orderNo,
          payType: this.optionData.payInfo.payType, // 支付类型 (1微信 2支付宝 3现金 4刷卡) @ ! 1
          payAmount: this.optionData.payInfo.payAmount || "", // 实收金额 @ ! 1
          entrustAmount: this.optionData.payInfo.entrustAmount || "", // 代收金额 @ ! 1
          addAmount: this.optionData.payInfo.addAmount || "", // 加价金额 @ ! 1
          remark: this.optionData.payInfo.remark, // 备注 @ ! 1
          createTime: this.optionData.payInfo.createTime, // 当前时间时间戳
        },
        // 影像文件
        fileInfos: [...this.optionData.fileInfos],
        // 用户信息
        customerInfo: {
          id: this.optionData.customerInfo.id,
          orderNo: this.optionData.customerInfo.orderNo,
          customerName: this.optionData.customerInfo.customerName, // 客户姓名 @ ! 1
          useName: this.optionData.customerInfo.useName, // 使用人姓名 @
          cardId: this.optionData.customerInfo.cardId, // 证件号码 @ ! 1
          cardType: this.optionData.customerInfo.cardType, // 证件类型 @ ! 1
          province: this.optionData.customerInfo.province, // 户籍省 @ ! 1
          city: cityformat()[0], // 户籍市 @ ! 1
          address: this.optionData.customerInfo.address, // 详细地址 @ ! 1
          tel: this.optionData.customerInfo.tel, // 联系电话 @ ! 1
          email: this.optionData.customerInfo.email, // 电子邮箱 @ !
          // createTime: this.optionData.customerInfo.createTime, // 时间戳
        },
        sourceType: this.optionData.sourceType, // 录单来源 1为移动端
        operStatus: this.optionData.operStatus, // 订单状态(1草稿 2审核中 3审核通过 4拨回)
        saleStoreName: this.optionData.saleStoreName, // 店方信息(人员) @ ! 1
        saleStoreType: this.optionData.saleStoreType, // 店方信息(售前售后) @ ! 1
        saleStoreId: this.optionData.extendInfo.storeId || "", // 所属门店id @
        userSignUrl: this.optionData.userSignUrl, // 用户手写签名图片地址 @ ! 1
        createUserName: this.optionData.createUserName, // 经办人 @ ! 1
        area: cityformat()[1], // 区
        id: this.optionData.id, // 回显比必加
        orderNo: this.optionData.orderNo, // 订单编号 回显必加
      }),
        (this.optionData.extendInfo.warrantyTime =
          this.optionData.extendInfo?.warrantyTime.includes("年")
            ? this.optionData.extendInfo?.warrantyTime
            : this.optionData.extendInfo?.warrantyTime + "年");
      this.optionData.extendInfo.originCarMileage =
        this.optionData.extendInfo?.originCarMileage.includes("公里")
          ? this.optionData.extendInfo?.originCarMileage
          : this.optionData.extendInfo?.originCarMileage + "公里";
      this.timeYCarRun =
        this.optionData.extendInfo?.warrantyTime +
        this.optionData.extendInfo.originCarMileage; //原厂质保时间及公里数
      this.oldsix = this.optionData.extendInfo.carBuyTime || ""; // 购车时间弹框隐藏参数 (为了不展示时间戳且插件不报错)
      this.oldsix_chinese =
        this.optionData.extendInfo.carBuyTime &&
        this.timeString(this.optionData.extendInfo.carBuyTime); // 格式化的购车时间参数(为了展示xxxx-xx-xx)
      this.oldfive =
        this.optionData.extendInfo.extendEndTime &&
        this.timeString(this.optionData.extendInfo.extendEndTime); // 服务有效截止时间弹框隐藏参数(为了不展示时间戳且插件不报错)
      this.oldfive_chinese =
        this.optionData.extendInfo.extendEndTime &&
        this.timeString(this.optionData.extendInfo.extendEndTime); // 格式化的服务截止时间参数(为了展示xxxx-xx-xx)
      this.cardType_chinese = cardType_chineseformat(); // 证件类型(为了不展示id)
      this.showstoretype =
        this.optionData.saleStoreType == 1
          ? "售前"
          : this.optionData.saleStoreType == 2
          ? "售后"
          : ""; // 店方信息(展示用 售前售后)
      this.paytypetext =
        this.optionData.payInfo.payType == 1
          ? "微信"
          : this.optionData.payInfo.payType == 2
          ? "支付宝"
          : this.optionData.payInfo.payType == 3
          ? "现金"
          : this.optionData.payInfo.payType == 4
          ? "刷卡"
          : ""; // 支付方式(展示用)
      this.userHeadsName = this.optionData.userSignUrl; // 手写签名判断条件
      app.globalData.userHeadsName = this.optionData.userSignUrl; // 存储的手写签名判断条件
    },
    // 表单重置
    resetFrom() {
      (this.ajaxData = {
        // 车辆信息
        extendInfo: {
          id: "",
          orderNo: "",
          storeId: "", // 所属门店id @
          storeName: "", // 所属门店名称 @ ! 1
          carBrand: "", // 汽车品牌名称 @ ! 1
          carSeries: "", // 车系 @ ! 1
          carModel: "", // 车型 @ ! 1
          carId: "", // 汽车品牌的id @
          carLicenseNum: "", // 车牌号各省代称 @ ! 1
          carLicense: "", // 首字母加车牌号 @ ! 1
          carCode: "", // 车架VIN码 @ ! 1
          carEngine: "", // 发动机号 @ ! 1
          carBuyTime: "", // 购车时间 @ ! 1
          carPurchase: "", // 新车购置价 @ ! 1
          carMileage: "", // 行驶里程 @ ! 1
          projectId: "", // 延保项目的id @
          projectName: "", // 延保项目的名称 @ !
          warrantyTime: "", // 原厂质保时间 @ 1
          extendTime: "", // 延长保修期 @ ! 1
          extendQuota: "", // 延保金额  @ ! 1
          extendEndTime: "", // 服务截止时间(日期) @ ! 1
          extendSpace: "", // 服务截止时间(公里数) @ ! 1
          extendPrice: "", // 延保价格 @
          originCarMileage: "", // 原厂质保公里数
        },
        // 支付信息
        payInfo: {
          id: "",
          orderNo: "",
          payType: "", // 支付类型 (1微信 2支付宝 3现金 4刷卡) @ ! 1
          payAmount: "", // 实收金额 @ ! 1
          entrustAmount: "", // 代收金额 @ ! 1
          addAmount: "", // 加价金额 @ ! 1
          remark: "", // 备注 @ ! 1
          createTime: new Date(), // 当前时间时间戳
        },
        // 影像文件
        fileInfos: [],
        // 用户信息
        customerInfo: {
          id: "",
          orderNo: "",
          customerName: "", // 客户姓名 @ ! 1
          useName: "", // 使用人姓名 @
          cardId: "", // 证件号码 @ ! 1
          cardType: "", // 证件类型 @ ! 1
          province: "", // 户籍省 @ ! 1
          city: "", // 户籍市 @ ! 1
          address: "", // 详细地址 @ ! 1
          tel: "", // 联系电话 @ ! 1
          email: "1337836843@qq.com", // 电子邮箱 @ !
          createTime: new Date(), // 时间戳
        },
        sourceType: "1", // 录单来源 1为移动端
        operStatus: "", // 订单状态(1草稿 2审核中 3审核通过 4拨回)
        saleStoreName: "", // 店方信息(人员) @ ! 1
        saleStoreType: "", // 店方信息(售前售后) @ ! 1
        saleStoreId: "", // 所属门店id @
        userSignUrl: "", // 用户手写签名图片地址 @ ! 1
        createUserName: "", // 经办人 @ ! 1
        area: "", // 区
      }),
        (this.oldsix = ""); // 购车时间弹框隐藏参数 (为了不展示时间戳且插件不报错)
      this.oldsix_chinese = ""; // 格式化的购车时间参数(为了展示xxxx-xx-xx)
      this.oldfive = ""; // 服务有效截止时间弹框隐藏参数(为了不展示时间戳且插件不报错)
      this.oldfive_chinese = ""; // 格式化的服务截止时间参数(为了展示xxxx-xx-xx)
      this.cardType_chinese = ""; // 证件类型(为了不展示id)
      this.showstoretype = ""; // 店方信息(展示用 售前售后)
      this.paytypetext = ""; // 支付方式(展示用)
      this.userHeadsName = ""; // 手写签名判断条件
      app.globalData.userHeadsName = ""; // 存储的手写签名判断条件
      this.timeYCarRun = ""; //原厂质保时间及公里数
      // 身份证正面
      this.fileList1 = [];
      // 身份证反面
      this.fileList2 = [];
      // 行驶证件照
      this.fileList3 = [];
      // 行驶里程
      this.fileList4 = [];
      // 车辆前照
      this.fileList5 = [];
      // 车身后照
      this.fileList6 = [];
      // 线上支付照
      this.fileList7 = [];
      // 刷卡小票
      this.fileList8 = [];
      // 车辆视频
      this.fileList9 = [];
    },
    // 保存草稿
    async SaveDraft() {
      try {
        if (this.loading == false) {
          // 存储为草稿状态
          this.ajaxData.operStatus = "1";
          let goData = JSON.parse(JSON.stringify({ ...this.ajaxData }));
          // 拼接市和区
          goData.customerInfo.city =
            goData.customerInfo.city + "/" + goData.area;
          // 删除区字段
          delete goData.area;
          // 开启整屏加载
          this.loading = true;
          const rec = await this.$API.post(
            "/extend/saveExtend",
            goData,
            app.globalData.json
          );
          if (rec.data.code == 200) {
            // 打开/关闭 处理的盒子
            this.operationTrans = !this.operationTrans;
            // 关闭整屏加载
            this.loading = false;
            uni.$u.toast("操作成功");
            let time = setTimeout(() => {
              clearTimeout(time);
              // 清空表单
              this.resetFrom();
              uni.redirectTo({
                url: "/pages/listpage/listpage",
              });
            }, 500);
          } else {
            uni.$u.toast(rec?.data?.message || rec?.message || "网络错误");
            // 关闭整屏加载
            this.loading = false;
          }
        } else {
        }
      } catch (err) {
        // 关闭整屏加载
        this.loading = false;
        uni.$u.toast("保存失败, 请重新保存");
        console.log("保存草稿函数出错", err);
      }

      // // 开启表单正则
      // this.$refs.createfrom.setRules(this.rules)
      // // 校验表单
      // this.$refs.createfrom.validate().then(async res => {
      // 	let filetype = []
      // 	this.ajaxData.fileInfos.forEach(item => {
      // 		filetype.push(item.fileType)
      // 	})
      // 	if(!filetype.includes('1')) {
      // 		uni.$u.toast('请上传身份证正面照')
      // 		return
      // 	}
      // 	if(!filetype.includes('2')) {
      // 		uni.$u.toast('请上传身份证反面照')
      // 		return
      // 	}
      // 	if(!filetype.includes('3')) {
      // 		uni.$u.toast('请上传行驶证证件照')
      // 		return
      // 	}
      // 	if(!filetype.includes('8')) {
      // 		uni.$u.toast('请上传刷卡小票照片')
      // 		return
      // 	}
      // }).catch(errors => {
      // 	uni.$u.toast('校验失败')
      // })
    },
    // 处理按钮的函数
    handle() {
      if (
        this.btn1 == false &&
        this.btn2 == false &&
        this.btn3 == false &&
        this.btn4 == false &&
        this.btn5 == false
      ) {
        uni.$u.toast("暂无处理权限");
      } else {
        // 打开/关闭 处理的盒子
        this.operationTrans = !this.operationTrans;
      }
    },
    // 身份证正面读取后处理函数
    afterRead1(event) {
      let lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中",
        });
      });
      for (let i = 0; i < lists.length; i++) {
        new Promise((resolve, reject) => {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token"),
            },
            success: (res) => {
              resolve(JSON.parse(res.data));
            },
          });
        }).then((rec) => {
          if (rec.code == 200) {
            this.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName, // 文件名称
              fileId: rec.data.fileId, // 文件的key
              fileUrl: rec.data.fileUrl, // 文件地址
              fileType: "1", // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date(), // 时间戳
            });
            let item = this[`fileList${event.name}`][fileListLen];
            this[`fileList${event.name}`].splice(
              fileListLen,
              1,
              Object.assign(item, {
                status: "success",
                message: "",
              })
            );
            fileListLen++;
          }
        });
      }
    },
    // 身份证正面删除处理函数
    deletePic1(event) {
      this[`fileList${event.name}`].splice(event.index, 1); // 删除身份证正面
      this.ajaxData.fileInfos.forEach((item, index) => {
        if (item.fileType == event.name) {
          this.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 身份证反面读取后处理函数
    afterRead2(event) {
      let lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中",
        });
      });
      for (let i = 0; i < lists.length; i++) {
        new Promise((resolve, reject) => {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token"),
            },
            success: (res) => {
              resolve(JSON.parse(res.data));
            },
          });
        }).then((rec) => {
          if (rec.code == 200) {
            this.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName, // 文件名称
              fileId: rec.data.fileId, // 文件的key
              fileUrl: rec.data.fileUrl, // 文件地址
              fileType: "2", // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date(), // 时间戳
            });
            let item = this[`fileList${event.name}`][fileListLen];
            this[`fileList${event.name}`].splice(
              fileListLen,
              1,
              Object.assign(item, {
                status: "success",
                message: "",
              })
            );
            fileListLen++;
          }
        });
      }
    },
    // 身份证反面删除处理函数
    deletePic2(event) {
      this[`fileList${event.name}`].splice(event.index, 1); // 删除身份证反面
      this.ajaxData.fileInfos.forEach((item, index) => {
        if (item.fileType == event.name) {
          this.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 行驶证证件读取后处理函数
    afterRead3(event) {
      let lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中",
        });
      });
      for (let i = 0; i < lists.length; i++) {
        new Promise((resolve, reject) => {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token"),
            },
            success: (res) => {
              resolve(JSON.parse(res.data));
            },
          });
        }).then((rec) => {
          if (rec.code == 200) {
            this.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName, // 文件名称
              fileId: rec.data.fileId, // 文件的key
              fileUrl: rec.data.fileUrl, // 文件地址
              fileType: "3", // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date(), // 时间戳
            });
            let item = this[`fileList${event.name}`][fileListLen];
            this[`fileList${event.name}`].splice(
              fileListLen,
              1,
              Object.assign(item, {
                status: "success",
                message: "",
              })
            );
            fileListLen++;
          }
        });
      }
    },
    // 行驶证证件删除处理函数
    deletePic3(event) {
      this[`fileList${event.name}`].splice(event.index, 1); //删除行驶证证件
      this.ajaxData.fileInfos.forEach((item, index) => {
        if (item.fileType == event.name) {
          this.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 行驶里程读取后处理函数
    afterRead4(event) {
      let lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中",
        });
      });
      for (let i = 0; i < lists.length; i++) {
        new Promise((resolve, reject) => {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token"),
            },
            success: (res) => {
              resolve(JSON.parse(res.data));
            },
          });
        }).then((rec) => {
          if (rec.code == 200) {
            this.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName, // 文件名称
              fileId: rec.data.fileId, // 文件的key
              fileUrl: rec.data.fileUrl, // 文件地址
              fileType: "4", // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date(), // 时间戳
            });
            let item = this[`fileList${event.name}`][fileListLen];
            this[`fileList${event.name}`].splice(
              fileListLen,
              1,
              Object.assign(item, {
                status: "success",
                message: "",
              })
            );
            fileListLen++;
          }
        });
      }
    },
    // 行驶里程删除处理函数
    deletePic4(event) {
      this[`fileList${event.name}`].splice(event.index, 1); //删除行驶里程
      this.ajaxData.fileInfos.forEach((item, index) => {
        if (item.fileType == event.name) {
          this.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 车辆前照读取后处理函数
    afterRead5(event) {
      let lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中",
        });
      });
      for (let i = 0; i < lists.length; i++) {
        new Promise((resolve, reject) => {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token"),
            },
            success: (res) => {
              resolve(JSON.parse(res.data));
            },
          });
        }).then((rec) => {
          if (rec.code == 200) {
            this.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName, // 文件名称
              fileId: rec.data.fileId, // 文件的key
              fileUrl: rec.data.fileUrl, // 文件地址
              fileType: "5", // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date(), // 时间戳
            });
            let item = this[`fileList${event.name}`][fileListLen];
            this[`fileList${event.name}`].splice(
              fileListLen,
              1,
              Object.assign(item, {
                status: "success",
                message: "",
              })
            );
            fileListLen++;
          }
        });
      }
    },
    // 车辆前照删除处理函数
    deletePic5(event) {
      this[`fileList${event.name}`].splice(event.index, 1); //删除车辆前照
      this.ajaxData.fileInfos.forEach((item, index) => {
        if (item.fileType == event.name) {
          this.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 车身后照读取后处理函数
    afterRead6(event) {
      let lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中",
        });
      });
      for (let i = 0; i < lists.length; i++) {
        new Promise((resolve, reject) => {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token"),
            },
            success: (res) => {
              resolve(JSON.parse(res.data));
            },
          });
        }).then((rec) => {
          if (rec.code == 200) {
            this.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName, // 文件名称
              fileId: rec.data.fileId, // 文件的key
              fileUrl: rec.data.fileUrl, // 文件地址
              fileType: "6", // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date(), // 时间戳
            });
            let item = this[`fileList${event.name}`][fileListLen];
            this[`fileList${event.name}`].splice(
              fileListLen,
              1,
              Object.assign(item, {
                status: "success",
                message: "",
              })
            );
            fileListLen++;
          }
        });
      }
    },
    // 车身后照删除处理函数
    deletePic6(event) {
      this[`fileList${event.name}`].splice(event.index, 1); //删除车身后照
      this.ajaxData.fileInfos.forEach((item, index) => {
        if (item.fileType == event.name) {
          this.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 线上支付读取后处理函数
    afterRead7(event) {
      let lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中",
        });
      });
      for (let i = 0; i < lists.length; i++) {
        new Promise((resolve, reject) => {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token"),
            },
            success: (res) => {
              resolve(JSON.parse(res.data));
            },
          });
        }).then((rec) => {
          if (rec.code == 200) {
            this.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName, // 文件名称
              fileId: rec.data.fileId, // 文件的key
              fileUrl: rec.data.fileUrl, // 文件地址
              fileType: "7", // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date(), // 时间戳
            });
            let item = this[`fileList${event.name}`][fileListLen];
            this[`fileList${event.name}`].splice(
              fileListLen,
              1,
              Object.assign(item, {
                status: "success",
                message: "",
              })
            );
            fileListLen++;
          }
        });
      }
    },
    // 线上支付删除处理函数
    deletePic7(event) {
      this[`fileList${event.name}`].splice(event.index, 1); // 删除线上支付
      this.ajaxData.fileInfos.forEach((item, index) => {
        if (item.fileType == event.name) {
          this.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 刷卡小票读取后处理函数
    afterRead8(event) {
      let lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中",
        });
      });
      for (let i = 0; i < lists.length; i++) {
        new Promise((resolve, reject) => {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token"),
            },
            success: (res) => {
              resolve(JSON.parse(res.data));
            },
          });
        }).then((rec) => {
          if (rec.code == 200) {
            this.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName, // 文件名称
              fileId: rec.data.fileId, // 文件的key
              fileUrl: rec.data.fileUrl, // 文件地址
              fileType: "8", // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date(), // 时间戳
            });
            let item = this[`fileList${event.name}`][fileListLen];
            this[`fileList${event.name}`].splice(
              fileListLen,
              1,
              Object.assign(item, {
                status: "success",
                message: "",
              })
            );
            fileListLen++;
          }
        });
      }
    },
    // 刷卡小票删除处理函数
    deletePic8(event) {
      this[`fileList${event.name}`].splice(event.index, 1); // 删除刷卡小票
      this.ajaxData.fileInfos.forEach((item, index) => {
        if (item.fileType == event.name) {
          this.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 车辆视频读取后处理函数
    afterRead9(event) {
      let lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中",
        });
      });
      for (let i = 0; i < lists.length; i++) {
        new Promise((resolve, reject) => {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token"),
            },
            success: (res) => {
              resolve(JSON.parse(res.data));
            },
          });
        }).then((rec) => {
          if (rec.code == 200) {
            this.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName, // 文件名称
              fileId: rec.data.fileId, // 文件的key
              fileUrl: rec.data.fileUrl, // 文件地址
              fileType: "9", // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date(), // 时间戳
            });
            let item = this[`fileList${event.name}`][fileListLen];
            this[`fileList${event.name}`].splice(
              fileListLen,
              1,
              Object.assign(item, {
                status: "success",
                message: "",
              })
            );
            fileListLen++;
          }
        });
      }
    },
    // 车辆视频删除处理函数
    deletePic9(event) {
      this[`fileList${event.name}`].splice(event.index, 1); //删除视频
      this.ajaxData.fileInfos.forEach((item, index) => {
        if (item.fileType == event.name) {
          this.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 延长保修期弹框关闭
    extendTimeCancel() {
      this.extendTimeOpen = false;
    },
    // 延长保修期弹框确定
    extendTimeConfirm(data) {
      this.ajaxData.extendInfo.extendTime = data.value[0].prodYear; // 选择的延长保修期
      this.extendTimeCancel();
    },
    // 支付方式弹框取消函数
    payCancel() {
      this.payOpen = false;
    },
    // 支付方式弹框确定函数
    payConfirm(data) {
      this.paytypetext = data.value[0].name; // 展示用  选择的支付方式
      this.ajaxData.payInfo.payType = data.value[0].id; // 选择的支付方式的id
      this.payCancel();
    },
    // 区弹框取消的函数
    areaCancel() {
      this.areaOpen = false;
    },
    // 区弹框确定的函数
    areaConfirm(data) {
      this.ajaxData.area = data.value[0].label;
      this.areaCancel();
    },
    // 市弹框取消的函数
    cityCancel() {
      this.cityOpen = false;
    },
    // 市弹框确定的函数
    cityConfirm(data) {
      this.areaColumns = []; // 清空区的数据
      this.ajaxData.area = ""; //清空选中的区
      this.areaColumns.push(data.value[0].children); // 添加区的数据
      this.ajaxData.customerInfo.city = data.value[0].label; // 选择市的数据
      this.cityCancel();
    },
    // 省弹框取消的函数
    provinceCancel() {
      this.provinceOpen = false;
    },
    // 省弹框确定的函数
    provinceConfirm(data) {
      this.cityColumns = []; // 清空市的数据
      this.areaColumns = []; // 清空区的数据
      this.ajaxData.area = ""; //清空选中的区
      this.ajaxData.customerInfo.city = ""; // 清空选中的市
      this.cityColumns.push(data.value[0].children); // 添加市的数据
      this.ajaxData.customerInfo.province = data.value[0].label; // 选中的省
      this.provinceCancel();
    },
    // 证件类型弹框确定函数
    cardTypeConfirm(data) {
      this.cardType_chinese = data.value[0].cardType; // 展示用 证件类型
      this.ajaxData.customerInfo.cardType = data.value[0].id; // 选中的证件类型
      this.cardTypeCancel();
    },
    // 证件类型弹框取消函数
    cardTypeCancel() {
      this.cardTypeOpen = false;
    },

    // 服务有效截止时间弹框取消函数
    extendEndCancel() {
      this.extendEndOpen = false;
    },
    // 服务有效截止时间弹框确定函数
    extendEndConfirm(data) {
      this.ajaxData.extendInfo.extendEndTime = data.value; // 选择的服务有效截止时间(请求用)
      this.oldfive_chinese = uni.$u.timeFormat(data.value, "yyyy年mm月dd日"); // 选择的服务有效截止时间(展示用)
      this.extendEndCancel();
    },
    // 车型弹框取消函数
    carModelCancel() {
      this.carModelOpen = false;
    },
    // 车型弹框确定函数
    carModelConfirm(data) {
      this.ajaxData.extendInfo.carModel = data.value[0].carModel; // 选择的车型
      this.ajaxData.extendInfo.carId = data.value[0].id; // 选择的汽车品牌ID
      this.ajaxData.extendInfo.warrantyTime = data.value[0].carPeriod; // 原厂质保时间
      this.ajaxData.extendInfo.originCarMileage = data.value[0].carMileage; // 原厂质保里程
      this.timeYCarRun =
        data.value[0].carPeriod + "年" + data.value[0].carMileage + "公里"; // 原厂质保时间及其公里数 展示用
      this.carModelCancel();
    },
    // 车系弹框取消函数
    carSeriesCancel() {
      this.carSeriesOpen = false;
    },
    // 车系弹框确定函数
    carSeriesConfirm(data) {
      if (this.ajaxData.extendInfo.carSeries === data.value[0].carSeries) {
        this.carSeriesCancel();
      } else {
        this.ajaxData.extendInfo.carModel = ""; // 清空选择的车型
        this.ajaxData.extendInfo.carId = ""; // 选择的汽车品牌ID
        this.ajaxData.extendInfo.warrantyTime = ""; // 原厂质保时间
        (this.timeYCarRun = ""), // 清空原厂质保时间及公里数 展示用
          (this.ajaxData.extendInfo.originCarMileage = ""); // 清空原厂质保公里数
        this.carModelColumns = []; // 车型数据清空
        this.ajaxData.extendInfo.carSeries = data.value[0].carSeries; // 选择的车系
        this.carSeriesCancel();
      }
    },
    // 汽车品牌弹框取消按钮函数
    carBrandCancel() {
      this.carBrandOpen = false;
    },
    // 汽车品牌弹框取确定钮函数
    carBrandConfirm(data) {
      if (this.ajaxData.extendInfo.carBrand === data.value[0].carBrand) {
        this.carBrandCancel();
      } else {
        this.ajaxData.extendInfo.carModel = ""; // 清空选择的车型
        this.ajaxData.extendInfo.carId = ""; // 选择的汽车品牌ID
        this.ajaxData.extendInfo.warrantyTime = ""; // 原厂质保时间
        (this.timeYCarRun = ""), // 清空原厂质保时间及公里数 展示用
          (this.ajaxData.extendInfo.originCarMileage = ""); // 清空原厂质保公里数
        this.carModelColumns = []; // 车型数据清空
        this.ajaxData.extendInfo.carSeries = []; // 清空选择的车系
        this.carSeriesColumns = []; // 清空车需弹框数据
        this.ajaxData.extendInfo.carBrand = data.value[0].carBrand; // 选择的汽车品牌名称
        this.carBrandCancel();
      }
    },
    // 店方信息(职位)弹框取消按钮函数
    saleStoreTypeCancel() {
      this.saleStoreTypeOpen = false;
    },
    // 店方信息(职位)弹框取确定钮函数
    saleStoreTypeConfirm(data) {
      this.ajaxData.saleStoreType = data.value[0].id; // 选择的店方信息(职位)id
      this.showstoretype = data.value[0].name; // 选择的店方信息(职位)名称
      this.saleStoreTypeCancel();
    },
    // 延保项目弹框取消按钮函数
    ExtendedItemCancel() {
      this.ExtendedItemOpen = false; // 关闭延保项目弹框
    },
    // 延保项目弹框确定按钮函数
    ExtendedItemConfirm(data) {
      this.ajaxData.extendInfo.projectId = data.value[0].id; // 选择的延保项目id
      this.ajaxData.extendInfo.projectName = data.value[0].prodName; // 选择的延保项目名称
      this.extendTimedata = []; // 清空延长保修期数据
      this.ajaxData.extendInfo.extendTime = ""; // 清空选择的延长保修期
      this.extendTimedata.push(data.value[0].projectYears); // 添加延长保修期数据
      this.ExtendedItemCancel();
    },
    // 购车时间弹框取消按钮函数
    PurchaseTimeCancel() {
      this.PurchaseTimeOpen = false; // 关闭购车时间弹框
    },
    // 购车时间弹框确定按钮函数
    PurchaseTimeConfirm(data) {
      this.ajaxData.extendInfo.carBuyTime = data.value || ""; // 选择的购车时间(请求用)
      this.oldsix_chinese = uni.$u.timeFormat(data.value, "yyyy年mm月dd日"); // 选择的购车时间(展示用)
      this.PurchaseTimeCancel();
    },
    // 车牌省份弹框取消按钮函数
    provinceCarBrandCancel() {
      this.provinceCarBrandOpen = false; // 关闭车牌省份弹框
    },
    // 车牌省份弹框确定按钮函数
    provinceCarBrandConfirm(data) {
      this.ajaxData.extendInfo.carLicenseNum = data.value[0].name; // 选择的车牌省份名称
      this.provinceCarBrandCancel();
    },
    // 所属门店弹框取消按钮函数
    storeCancel() {
      this.storeOpen = false; // 关闭所属门店弹框
    },
    // 所属门店弹框确定按钮函数
    storeConfirm(data) {
      this.ajaxData.saleStoreId = data.value[0].id; // 选择的门店id(ajaxData下的直属字段)
      this.ajaxData.extendInfo.storeId = data.value[0].id; // 选择的门店id
      this.ajaxData.extendInfo.storeName = data.value[0].name; // 选择的门店名称
      this.ajaxData.extendInfo.carBrand = ""; // 清空选择的汽车品牌名称
      this.ajaxData.extendInfo.carSeries = ""; // 清空选择的车系
      this.ajaxData.extendInfo.carModel = ""; // 清空选择的车型
      this.ajaxData.extendInfo.carId = ""; // 清空选择的汽车品牌ID
      this.ajaxData.extendInfo.warrantyTime = ""; // 清空原厂质保时间
      this.ajaxData.extendInfo.originCarMileage = ""; // 清空原厂质保公里数
      (this.timeYCarRun = ""), // 清空原厂质保时间及公里数  展示用
        this.storeCancel(); // 关闭所属门店弹框
    },
    // 计算延保价格
    async CalculatePrice() {
      try {
        let carId = this.ajaxData.extendInfo.carId;
        let carBuyTime = this.ajaxData.extendInfo.carBuyTime;
        let carMileage = this.ajaxData.extendInfo.carMileage;
        let projectId = this.ajaxData.extendInfo.projectId;
        let extendTime = this.ajaxData.extendInfo.extendTime;

        if (carId && carBuyTime && carMileage && projectId && extendTime) {
          const res = await this.$API.post(
            "/extend/calPrice",
            { carId, carBuyTime, carMileage, projectId, extendTime },
            app.globalData.json
          );
          if (res.data.code == 200) {
            this.ajaxData.extendInfo.extendPrice =
              res.data.data.extendPrice || 0; // 延保价格
            this.ajaxData.extendInfo.extendEndTime =
              res.data.data.extendEndTime; // 服务截止时间
            this.oldfive_chinese = res.data.data.extendEndTime; // 服务截止时间
            this.ajaxData.extendInfo.extendSpace = Number(
              res.data.data.extendSpace
            ); // 服务截止公里数
          }
        } else {
          carId = "";
          carBuyTime = "";
          carMileage = "";
          projectId = "";
        }
      } catch (err) {
        console.log("计算延保价格函数出错", err);
      }
    },

    // 获取延保项目数据
    async getInsuranceItems() {
      try {
        // 如果选择了门店并有id且选择了汽车品牌并有id
        if (
          this.ajaxData.extendInfo.storeId &&
          this.ajaxData.extendInfo.carId
        ) {
          let ajaxData = {
            storeId: this.ajaxData.extendInfo.storeId, // 门店id
            carId: this.ajaxData.extendInfo.carId || "", // 选择的品牌iD
          };
          const res = await this.$API.post(
            "/project/getByStoreIdAndCarId",
            ajaxData,
            app.globalData.json
          );
          if (res.data.code == 200) {
            this.Extended = []; // 清空延保项目
            this.Extended.push(res.data.data);
          } else {
            this.Extended = [];
          }
        } else {
        }
      } catch (err) {
        console.log("获取延保项目数据的函数报错", err);
      }
    },

    // 跳转至手写签名页面
    goHeadsblock() {
      uni.navigateTo({
        url: "/pages/createInsurance/headsblock",
      });
    },
    // 获取车型
    async getCarmodel() {
      try {
        let ajaxData = {
          storeId: this.ajaxData.extendInfo.storeId, // 门店id
          carBrand: this.ajaxData.extendInfo.carBrand, // 汽车品牌
          carSeries: this.ajaxData.extendInfo.carSeries, // 汽车 车系
        };
        const res = await this.$API.post(
          "/car/listCarModelByCarSeries",
          ajaxData,
          app.globalData.json
        );
        if (res.data.code == 200) {
          this.carModelColumns = []; // 清空车形数据
          this.carModelColumns.push(res.data.data); // 添加车型数据
        }
      } catch (err) {
        console.log("获取车型的接口报错", err);
      }
    },
    // 获取车系
    async getCarType() {
      try {
        let ajaxData = {
          storeId: this.ajaxData.extendInfo.storeId, // 门店id
          carBrand: this.ajaxData.extendInfo.carBrand, // 汽车品牌
        };
        const res = await this.$API.post(
          "/car/listCarSeriesByCarBrand",
          ajaxData,
          app.globalData.json
        );
        if (res.data.code == 200) {
          this.carSeriesColumns = []; // 清空车系数据
          let pushData = [];
          res.data.data.forEach((item) => {
            pushData.push({ carSeries: item });
          });
          this.carSeriesColumns.push(pushData); // 添加车系数据
        }
      } catch (err) {
        console.log("获取车系的接口报错", err);
      }
    },
    // 获取汽车品牌
    async getCar() {
      try {
        let ajaxData = {
          storeId: this.ajaxData.extendInfo.storeId,
        };
        // const res = await this.$API.post('/car/listByStoreId', ajaxData, app.globalData.formdata) 弃用
        const res = await this.$API.post(
          "/car/listCarBrandByStoreId",
          ajaxData,
          app.globalData.json
        );
        if (res.data.code == 200) {
          this.carBrandColumns = []; // 清空汽车品牌
          let pushData = [];
          res.data.data.forEach((item) => {
            pushData.push({ carBrand: item });
          });
          this.carBrandColumns.push(pushData); // 添加汽车品牌数据
        } else {
          this.carBrandColumns = [];
        }
      } catch (err) {
        console.log("获取汽车品牌、车系、车型函数报错", err);
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
  },
};
</script>

<style scoped>
page {
  padding: 40rpx 40rpx 180rpx 40rpx;
}

.rejectwidth {
  width: 100%;
}

.createInsurance {
  width: 100%;
  box-sizing: border-box;
  padding: 40rpx 40rpx 220rpx 40rpx;
}

.bottom-btn {
  width: 100%;
  height: 120rpx;
  background-color: white;
  position: fixed;
  z-index: 9;
  bottom: 0rpx;
  left: 0rpx;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  display: flex;
}

.header-title {
  width: 100%;
  height: 120rpx;
  line-height: 120rpx;
  font-size: 40rpx;
  font-weight: 600;
  color: #74706f;
  background-color: white;
}

.creatFrom {
  width: 100%;
}

.from-box {
  width: 100%;
  margin-top: 40rpx;
  /* background-color: #ccc; */
}

.from-title {
  width: 100%;
  height: 60rpx;
  font-size: 38rpx;
  font-weight: 600;
  color: #74706f;
  background-color: white;
}

.form-right-title-box {
  position: relative;
}

.form-right-title {
  position: absolute;
  right: -30rpx;
  top: -50rpx;
  color: red;
}

.autograph-image-box {
  display: flex;
}

.autograph-image {
  width: 335rpx;
  height: 80rpx;
}

.form-content {
  padding: 20rpx;
  margin-bottom: 40rpx;
}

.form-file {
  width: 100%;
}

.upload-box {
  width: 310rpx;
  height: 200rpx;
  background-color: white;
  border: 2rpx solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-preview-btn {
  width: 140rpx;
  height: 100rpx;
  float: left;
  margin-top: -70px;
  background-color: transparent;
  border: none;
  outline: none;
}
.video-preview-btn:after {
  border: none;
  outline: none;
}
.money-box {
  width: 550rpx;
  height: 100%;
  background-color: #49bfe3;
  font-size: 40rpx;
  color: white;
  font-weight: 600;
  line-height: 120rpx;
  text-align: center;
}

.operation-box {
  width: 200rpx;
  height: 100%;
  background-color: #e3b44a;
  font-size: 40rpx;
  color: white;
  font-weight: 600;
  line-height: 120rpx;
  text-align: center;
}

.operation-option {
  position: fixed;
  z-index: 9;
  bottom: 120rpx;
  right: 0rpx;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

.option1 {
  width: 200rpx;
  height: 120rpx;
  background-color: #539dcc;
  font-size: 34rpx;
  color: white;
  font-weight: 600;
  line-height: 120rpx;
  text-align: center;
}

.option2 {
  width: 200rpx;
  height: 120rpx;
  background-color: #adadad;
  font-size: 34rpx;
  color: white;
  font-weight: 600;
  line-height: 120rpx;
  text-align: center;
}
.video-cover {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #000;
}
.video {
  /* width: 120px;
		height: 120px; */
  background-color: #000;
}
</style>
