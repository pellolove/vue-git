<template>
 <div id="profile">
   <section>
    <h2 style=" text-align:center;">
      罗佩简历(WEB前端开发)
    </h2>

   </section>
    <section>
      <el-card>
        <div slot="header" class="clearfix">
            简述 
        </div>
        <div >
          我叫罗佩，男，31岁，本科，来自湖南湘潭。
          从事软件开发工作已经有8年，
          一直从事web应用程序开发使用，前5年主要以基于asp.net（C#）开发，2016年起以前端开发为主。 
        </div>
      </el-card>

    </section>
    <section>
      <el-card>
        <div slot="header" class="clearfix">
            工作目标 
        </div>
        <div > 
        根据自己爱好及所学习，以及工作中的实践经验, 现在寻找一份跟web前端软件开发相关的工作。
        </div>
      </el-card>
    </section>
    <section>
      <el-card>
        <div slot="header" class="clearfix">
            工作技能 
        </div>
        <div > 
          <p>1、熟练使用当前流行web构建基本技术（html5+css3+es6）及其过往版本技术开发相关web/mobile应用程序。对js的基于面向对象开发有一定的实践经验和研究。
          </p>
          <p>2、熟练使用快速构建框架（angularjs1.x,vue2.x）构建mvv*的spa web程序，对jQuery,lodash,echarts,mockjs,bootstrap,elementui等常用web开发组件都可以熟练使用到项目中。
          </p>
          <p>3、熟悉使用基于node的前端自动化工具 （gulp,webpack,less），以及代码管理工具svn,git。
          </p>
          <p>4、熟悉基于asp.net(c#)后台程序开发，对nodejs的后台开发也有一定学习，对前后端数据(结构/接口/协议）及沟通有比较深入的了解。
          </p> 
        </div>
      </el-card>
    </section>
    <section>   
      <el-card>
        <div slot="header" class="clearfix">
            工作经历 
        </div>
        <div >  
          <span class="company_header">2017/5-2018/9 深圳市易特科集团</span> 
          <p>公司主营慢病健康解决方案服务提供，其中包含硬件一体机及数据平台，我主要工作在数据平台服务web端设计及实现。使用技术基于标准 web restful标准 为前后端分离通过 nginx进行反向代理，前端使用技术（bootstrap + angularjs1.x）
          其中主要参与开发项目包括，</p> 
          <p>1、硬件大型一体机体质辩识仪web部分更版（通过lodash模版及数据结构优化构建成一个小型的调查问卷系统）</p> 
          <p>2、区域慢病平台——家庭医生——公众服务模块</p>
          <p>3、北京某医院慢病管理平台系统，主要参与web部分开发</p>
          <p>4、深圳某疗养院预约平台（基于angularjs1.x管理端，weui+jQuery手机微端）</p>
         
        </div>
        <div >  
          <span class="company_header">2014/11-2017/3 深圳运维网络有限公司</span> 
          <p>公司主营业务为 基于lbs的在线运维平台（saas服务），服务对象为公共事业单位（水电气油等公司）。
          </p> <p> 个人经历开发了燃气管维系统平台，公园巡查信息平台等，参与公司前端框架基础构建。
            在该公司，saas平台主要架构为业务服务加多终端， 作为系统web主要为业务管理服务，
          </p><p>1. 项目使用技术为：ASP.NET(MVC+WEBAPI) + DB(sqlserver,postgresql) + APP(webapp基于angularjs 组件的单页的平台管理，使用HTML5,CSS3及第三库，jQuery,Bootstrap,Swiper,ECharts等);
          </p><p>2. 项目管理：svn，git;
          </p><p>3. 我的角色：参与平台业务分析及系统数据库设计，api接口设计（Resful风格供webapp及android 调用），
            以及项目web前端代码开发（HTML5（bootstrap + angularjs +ng-router））</p>
           
        </div>
        <div >  
          <span class="company_header">2011/9-2014/9 东莞市龙信数码科技有限公司</span> 
          <p>东莞龙信数码公司是一家至力于政府企业技术解决方案一家公司，
          </p><p>我所在公司研发部门主要承接个性化软件开发工作，参与软件开发的 
          需求调研 需求分析 程序设计 程序编码 程序上线以及部分后续的系统维护工作。
          </p><p>个人参与项目：《东莞市东城区商事后续管理系统》，《东莞市寮步镇人力资源社会补助系统》，东莞市《企业风险预警系统》
          VS2010 (C#+ Webform+Framework4.0) + SQLServer 2008 + (IE8+)，多层开发框架， Ajax+json+ashx组建的无刷新交互技术，数据存储过程 ，使用EasyUI+jQuery进行页面布局
          </p> 
        </div>
      </el-card>
    </section>
    <section>   
      <el-card>
        <div slot="header" class="clearfix">
            学历 
        </div>
        <div > 
        2007年至2011年，在湖南工学院完成计算机科学与技术专业学习，在校期间表现良好。
        </div>
      </el-card>
    </section>
    <section class="no-print">   
      <el-card>
        <div slot="header" class="clearfix">
            个人发展方向 
        </div>
        <div > 
        从自己工作的经历来看，数据可视化分析更能体现程序的易用价值。
        想找一份可以从事数据可视化相关web前端工作，可以的话，可以接受全栈开发工作。
        </div>
      </el-card>
    </section>
 </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {};
  }
};
</script>

<style scope lang="less">
section {
  margin: 10px 20px;
}
.company_header{
  font-weight: bold;
  font-size: 16px;
}
</style>