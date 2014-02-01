
(function (){
  var doc = document,
    w = window,
    location = w.location,
    util = {},
    options = {
      bottomBanner: true, // 是否隐藏页面底部登录面板
      tenYears: true, // 是否隐藏左侧抽奖转盘
      asideAd: true, // 是否隐藏右侧广告栏
      gameRank: true, // 是否隐藏右侧贴吧游戏排行
      talkContent: true, // 是否隐藏访谈内容预览
      listPost: true, // 是否隐藏吧友讨论预览
      starHead: true, // 是否隐藏明星贴吧头部图片预览
      headGame: true, // 是否隐藏头部游戏广告
      headTopic: true, // 顶部话题预览
      lotWrap: true, // 右侧彩票广告
      headAd: true, // 看帖时头部广告
      union_mod: true, // 右侧广告
      game_spread_thread: true, // 贴吧游戏推荐广告
      ueg_policy_open: true, // 右侧举报统计
      rich_rank_mod: true, // 右侧T豆
      sign_mod: true // 右侧签到
      
    };
  
  // 通过新建样式表，隐藏广告、不需要的模块
  util.hiddenItems = function () {
    var rules = "";
    
    if (options.sign_mod) {
      rules += "\n#sign_mod { display: none !important; }";
    } // end if
    if (options.rich_rank_mod) {
      rules += "\n.rich_rank_mod { display: none !important; }";
    } // end if
    if (options.ueg_policy_open) {
      rules += "\n#ueg_policy_open { display: none !important; }";
    } // end if
    if (options.game_spread_thread) {
      rules += "\n.game_spread_thread { display: none !important; }";
    } // end if
    if (options.union_mod) {
      rules += "\n#union_mod { display: none !important; }";
    } // end if
    if (options.headAd) {
      rules += "\n#pb_adbanner { display: none !important; }";
    } // end if
    if (options.lotWrap) {
      rules += "\n.lot_wrap { display: none !important; }";
    } // end if
    if (options.headTopic) {
      rules += "\n#topic_thread_wrapper { display: none !important; }";
    } // end if
    if (options.headGame) {
      rules += "\n.game_frs_step1 { display: none !important; }";
    } // end if
    if (options.starHead) {
      rules += "\n.star_head { display: none !important; }";
    } // end if
    if (options.listPost) {
      rules += "\n#listPostCnt { display: none !important; }";
    } // end if
    if (options.talkContent) {
      rules += "\n#listTalkCnt { display: none !important; }";
    } // end if
    if (options.bottomBanner) {
      rules += "\n#guide_fc { display: none !important; }";
    } // end if
    if (options.tenYears) {
      rules += "\n#j_ten_years { display: none !important; }";
    } // end if
    if (options.asideAd) {
      rules += "\n#aside_ad { display: none !important; }";
      rules += "\n#cproshow { display: none !important; }";
    } // end if
    if (options.gameRank) {
      rules += "\n#game_rank { display: none !important; }";
    } // end if
    
    
    var stylesheet = doc.createElement("style");
    stylesheet.innerHTML = rules;
    doc.querySelector("head").appendChild(stylesheet);
  }; // end hiddenItems()
  
  // 通过克隆节点不会克隆事件监听器，克隆翻页等按钮，不触发登录
  util.replaceItems = function () {}; // end replaceItems()
  
  util.init = function () {
    util.seelz();
    util.indexPagenation();
    util.articlePagenation();
  };
  
  // 看帖子时翻页
  util.articlePagenation = function () {
    var pages = doc.querySelectorAll(".l_posts_num");
    if (pages != null) {
      var r,
        i,
        len,
        page;
      
      for (i = 0, len = pages.length; i < len; ++i) {
        page = pages[i];
        r = page.cloneNode(true);
        page.style.display = "none";
        
        page.parentNode.insertBefore(r, page);
      } // end for
    } // end if
  }; // end articlePagenation()
  

  
 
  
  // 未登录时点只看楼主。不再弹出登陆
  util.seelz = function () {
    var seelz = doc.querySelector("#lzonly_cntn");
    if (seelz != null) {
      var r = seelz.cloneNode(true);
      r.id = "";
      seelz.style.display = "none";
      seelz.parentNode.insertBefore(r, seelz);    
    } // end if
  }; // end seelz()
  
  // 未登录时，在首页翻页时不再弹出登陆
  util.indexPagenation = function () {
    var pagenation = doc.querySelector("#frs_list_pager");
    if (pagenation != null) {
      var r = pagenation.cloneNode(true);
      r.id = "";
      pagenation.style.display = "none";
      pagenation.parentNode.insertBefore(r, pagenation);
    } // end if
  }; // end indexPagenation()
   

  util.hiddenItems(); 
  setTimeout(util.init, 1000);
  
  
  
  
})();