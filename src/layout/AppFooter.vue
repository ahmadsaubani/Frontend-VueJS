<template>
    <footer class="footer has-cards">
        
        <div class="container">
            
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}} Implement by
                        <a href="https://www.ahmadsaubani.com" target="_blank" rel="noopener">Ahmad Saubani</a>
                    </div>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a target="_blank" rel="noopener" href="https://instagram.com/ahmad.saubani"
                       class="btn btn-neutral btn-icon-only btn-instagram btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/ahmadsaubanii"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://gitlab.com/ahmadsaubani"
                       class="btn btn-neutral btn-icon-only btn-gitlab btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Check my gitlab">
                        <i class="fa fa-gitlab"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://github.com/ahmadsaubani"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Star on Github">
                        <i class="fa fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
