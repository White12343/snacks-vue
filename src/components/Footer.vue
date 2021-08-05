<template>
  <footer class="footer">
    <div class="footer__cntr container mx-auto">
      <p class="footer__tit"><strong>CMoney 全曜財經資訊</strong></p>
      <p class="footer__desc">資料來源：<span class="footer__src">政府資料開放平台</span></p>
    </div>
  </footer>
</template>

<style>
.footer {
  color: #ccc;
  background-color: #999;
}

.footer__tit {
  font-size: 18px;
}

.footer__desc {
  font-size: 14px;
}

.footer__src {
  color: #fff;
}

.footer__cntr {
  padding-top: 1em;
  padding-bottom: 1em;
}

@media screen and (max-width: 414px) {
  .footer__cntr {
    text-align: center;
  }
}

</style>
