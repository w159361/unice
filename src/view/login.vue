<template>
	<div class="login">
		<!--登录时显示的内容-->
		<div class="logined" v-show="isLogin">
			<ul>
				<li v-for="(i,index) in 10">{{i}}</li>
				<li @click="out">退出</li>
			</ul>
		</div>

		<!--未登录时显示的内容-->
		<div class="notlogin" v-show="!isLogin">
			<!--选择登录或注册进行切换-->
			<div class="choose" style="overflow: hidden;">
				<p :class="{'active':choos==true}" @click="choos=true">Sign</p>
				<p :class="{'active':choos==false}" @click="choos=false">Register</p>
			</div>

			<!--登录表单-->
			<el-form label-position="top" :model="formLabel1" :rules="rules1" ref="formLabel1" v-show="choos">
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="formLabel1.email"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="formLabel1.password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit('formLabel1')" style="width:100%">Log in</el-button>
				</el-form-item>
			</el-form>

			<!--注册表单-->
			<el-form label-position="top" label-width="20px" :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" v-show="!choos">
				<el-form-item>
					<el-col :span="12" style="margin-right: 0.2rem;">
						<el-form-item prop="FirstName" label="First Name">
							<el-input v-model="ruleForm.FirstName" autocomplete="off"></el-input>
						</el-form-item>
					</el-col>

					<el-col :span="11">
						<el-form-item prop="LastName" label="Last Name">
							<el-input v-model="ruleForm.LastName" autocomplete="off"></el-input>
						</el-form-item>
					</el-col>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="ruleForm.email"></el-input>
				</el-form-item>

				<el-form-item>
					<el-col :span="12" style="margin-right: 0.2rem;">
						<el-form-item label="密码" prop="pass" required>
							<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
						</el-form-item>
					</el-col>

					<el-col :span="11">
						<el-form-item label="确认密码" prop="checkPass" required>
							<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
						</el-form-item>
					</el-col>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="onSubmit('ruleForm')" style="width:100%;">CREATE AN ACCOUNT</el-button>
				</el-form-item>
			</el-form>
		</div>

		<div class="navmenu">
			<!--侧边栏导航-->
			<v-navmenu></v-navmenu>
		</div>
	</div>
</template>

<script>
	import Navmenu from '@/components/navmenu.vue'
	import Footer from '@/components/footer.vue'
	export default {
		data() {
			//表单二自定义验证规则
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					if(this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			var nameTest = (rule, value, callback) => {
				var text = /^[a-zA-Z]+$/;
				if(!text.test(value)) {
					callback(new Error('只能输入字母'));
				} else {
					callback();
				}

			}
			return {
				isLogin:false,
				//用于登录注册之间变换
				choos: true,
				//登录表单数据
				formLabel1: {
					email: '',
					password: ''
				},
				//登录表单验证
				rules1: {
					email: [{
							required: true,
							message: "请输入邮箱",
							trigger: "blur"
						},
						{
							type: "email",
							message: "请输入正确格式的邮箱",
							trigger: "blur"
						}
					],
					password: [{
						required: true,
						message: "请输入密码",
						trigger: "blur"
					}]

				},
				//注册表单数据
				ruleForm: {
					FirstName: "",
					LastName: "",
					email: "",
					pass: '',
					checkPass: '',
					age: ''
				},
				//注册表单验证
				rules2: {
					FirstName: [{
						required: true,
						message: "请输入Name",
						trigger: "blur"
					}, {
						validator: nameTest,
						trigger: "blur"
					}],
					LastName: [{
						required: true,
						message: "请输入Name",
						trigger: "blur"
					}, {
						validator: nameTest,
						trigger: "blur"
					}],
					email: [{
						required: true,
						type: "email",
						message: "请输入正确邮箱",
						trigger: "blur"
					}],
					pass: [{
							validator: validatePass,
							trigger: 'blur'
						},
						{
							min: 6,
							max: 15,
							message: "密码最少6位最多15位",
							trigger: "blur"
						}
					],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],

				}

			};
		},
		methods: {
			//点击登录，如果表单验证通过登录成功，反之登录失败
			onSubmit(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('success');
						sessionStorage.setItem('user', this.formLabel1.email);
						this.isLogin=sessionStorage.getItem("user");
						
						console.log(2,sessionStorage.getItem("user"),this.$store.state.islogin,this.isLogin)
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			//退出登录
			out(){
				sessionStorage.removeItem("user");
				this.isLogin=sessionStorage.getItem("user");
				console.log(3,sessionStorage.getItem("user"),this.isLogin)
			}
		},
		mounted(){
			this.isLogin=sessionStorage.getItem("user");
			console.log(1,sessionStorage.getItem("user"),this.isLogin)	
		},
		computed: {
			
			//用于判断是否登录
//			isLogin: function() {
//              return sessionStorage.getItem("user");
//			},
		},
		components: {
			"v-navmenu": Navmenu,
			"v-footer": Footer
		}

	}
</script>

<style>
	.navmenu {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
	
	.login {
		margin: 2rem 0rem 0;
	}
	
	.notlogin {
		margin: 0 0.2rem 0;
	}
	
	.logined ul {
		padding: 0;
	}
	
	.logined li {
		height: 2rem;
		line-height: 2rem;
		text-align: left;
		padding: 0 0 0 1rem;
		border-bottom: solid 1px #000000;
		list-style: none;
	}
	
	div.choose {
		text-align: center;
	}
	
	div.choose p {
		width: 50%;
		height: 2rem;
		background: #F0F0F0;
		line-height: 2rem;
		float: left;
	}
	
	div.choose p.active {
		background: red;
	}
</style>