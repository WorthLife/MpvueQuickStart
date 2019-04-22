<template>
  <div>
    <div class="userinfo">
      <img
        class="userinfo-avatar"
        v-if="userInfo.avatarUrl"
        :src="userInfo.avatarUrl"
        background-size="cover"
      />
      <img
        class="userinfo-avatar"
        src="/static/images/user.png"
        background-size="cover"
      />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <form
      class="form-container"
      @submit="formSubmit"
    >
      <van-cell-group>
        <van-field
          v-bind:value="username"
          name="username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
          @change="usernameChange"
        />

        <van-field
          v-bind:value="password"
          name="password"
          required
          type="password"
          label="密码"
          placeholder="请输入密码"
          border="false"
          @change="passwordChange"
        />

        <van-field
          v-bind:value="phone"
          name="phone"
          required
          label="手机号"
          placeholder="请输入手机号"
          border="false"
          @change="phoneChange"
        />
      </van-cell-group>
      <view class="btn-area">
        <div
          style="width:90%"
          class="margin-center"
        >
          <button
            class="elevation-2"
            type="warn"
            form-type="submit"
          >提交</button>
        </div>
        <!-- :disabled='!isAgree' -->
      </view>
    </form>
  </div>
</template>

<script>
import card from '@/components/card';
import { mapState } from 'vuex';
import WeValidator from 'we-validator';

export default {
  data () {
    return {
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    };
  },

  components: {
    card
  },
  computed: {
    ...mapState({
      username: state => state.formSubmit.username,
      password: state => state.formSubmit.phoneNum,
      phone: state => state.formSubmit.phone
    })
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main';
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    usernameChange (event) {
      this.$store.commit('formSubmit/updateUsername', event.mp.detail);
    },
    passwordChange (event) {
      this.$store.commit('formSubmit/updatePassword', event.mp.detail);
    },
    phoneChange (event) {
      this.$store.commit('formSubmit/updatePhone', event.mp.detail);
    },
    formSubmit (event) {
      let { value } = event.target;
      if (!this.oValidator.checkData(value)) return;
      wx.navigateTo({ url: '/pages/counter/main' });
    },
    initValidator () {
      this.oValidator = new WeValidator({
        rules: {
          username: {
            required: true
          },
          password: {
            required: true
          },
          phone: {
            required: true
          }
        },
        messages: {
          username: {
            required: '请输入姓名'
          },
          password: {
            required: '请输入密码'
          },
          phone: {
            required: '请输入手机'
          }
        }
      });
    }
  },

  created () {
    // let app = getApp()
  },
  mounted () {
    this.initValidator();
  }
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.btn-area {
  text-align: center;
  position: fixed;
  bottom: 1rem;
  width: 100%;
}

.margin-center {
  margin: 40rpx auto;
}
</style>
