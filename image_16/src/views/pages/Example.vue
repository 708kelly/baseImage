
<template>
    <div id="pageWarpper">
        <div id="contentWarpper">
    <nav>
  <div id="navPageLogo">
    <a href="#"><img src="images/logo_white_esun.svg" title="玉山銀行E.SUN Bank"></a>
  </div>
  <div id="navPageTitle">｜EIAM 系統權限管理系統</div>
  
  <div id="navFunctionContainer">
      <div class="navFunction" id="navUserContainer">李宜璟 18636</div>
      <div class="navFunction" id="navExtensionContainer">
          <div id="navExtensionField">
	      <input type="text" id="navExtension" class="editable" value="7711"
	      placeholder="分機" disabled="true">
             <button class="uiStyle sizeS btnDarkBlue" id="btnNavExtensionEdit"></button>
          </div>
          <div class="extensionAlert">此分機已佔線，麻煩選擇其它分機</div>
      </div>
      <div class="navFunction" id="navCallContainer">
        <button class="uiStyle sizeS withIcon" id="btnNavCall">
          <img src="images/ic_white_phone.svg" title="快速撥號">快速撥號
        </button>
      </div>
		
      <div class="navFunction" id="navOnlineContainer">
        <div class="switchField">
            <label class="switch">
               <input type="checkbox" checked="checked">
               <span class="slider"></span>
            </label>
        </div>
      </div>
      <div class="navFunction iconBtn" id="navNotifyContainer">
        <a href="#">
           <button class="uiStyle sizeS alert" id="btnNavNotify"></button>
        </a>
      </div>
      <div class="navFunction iconBtn" id="navLogoutContainer">
        <button class="uiStyle sizeS" id="btnNavLogout"></button>
      </div>
    </div>
  </nav>
    <div id="sideMenuContainer">
   <ul class="sideMainMenu">
	<li class="withSubMenu">
	   <a class="unfocus" href="./Main.html"> 首頁 </a>
	</li>
	<li class="withSubMenu">
	   <a class="unfocus" href="./Main.html"> 預約記錄</a>
	</li>
	<li class="withSubMenu select"> 權益申請
	  <ul class="sideSubMenu">
		 <li><a href="./Layout.html"> 機場接送申請 </a></li>
		 <li class="select"><a href="./Accessibility.html">機場貴賓室卡申請</a></li>
		 <li><a href="./Colors.html"> 道路救援登錄 </a></li>
	  </ul>
	</li>
	<li class="withSubMenu">
	   <a class="unfocus" href="./Main.html"> 使用統計</a>
	</li>
   </ul>
    </div>
    <div id="pageContentWarpper">
        <div id="pageContentContainer">
    <div  class="layoutZoneContainer">
    <div class="formContainer listForm">
  <div class="formSectionTitle">基礎資料表格</div>
  <div class="formRow formTitle">
	 <div class="formCell">建檔日</div>
	 <div class="formCell">到期日</div>
	 <div class="formCell">類型</div>
	 <div class="formCell">來源</div>
	 <div class="formCell">訊息摘要</div>
	 <div class="formCell">編輯</div>
  </div>
  <div class="formRow unread">
	 <div class="formCell">2020/05/10</div>
	 <div class="formCell">2020/05/30</div>
	 <div class="formCell">系統</div>
	 <div class="formCell">機場接送</div>
	 <div class="formCell">特處編號 202010445987已傳送</div>
	 <div class="formCell"><div class="btnPToDoEdit noEdit"></div></div>
  </div>									      
  <div class="formRow unread">
	 <div class="formCell">2020/05/10</div>
	 <div class="formCell">2020/05/30</div>
	 <div class="formCell">個人</div>
	 <div class="formCell">個人待辦</div>
	 <div class="formCell">聯繫相關業務窗口，追蹤案件進度確認放行</div>
	<div class="formCell"><div class="btnPToDoEdit"></div></div>
  </div>
  </div>
</div>
</div>
</div><!-- /formContainer listForm -->
</div>
</div>
</template>
