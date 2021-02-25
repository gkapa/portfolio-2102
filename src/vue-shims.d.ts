// srcDir 바꿨을때 import 모듈에러 제거
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
