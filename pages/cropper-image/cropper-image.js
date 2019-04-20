//Page Object
Page({
    data: {
        src:"",
        width:250,
        height:250,
    },
    //options(Object)
    onLoad: function(options) {
        console.log("cropper-image","loading")
        this.cropper=this.selectComponent("#image-cropper");
        this.setData({
            src:options.imgSrc,
        });
        console.log(this.data.src)
        wx.showLoading({
            title: "loading",
            mask: true
        });
          
    },
    cropperload(e){
        console.log("cropper初始化完成");
    },
    loadimage(e){
        console.log("图片加载完成",e.detail);
        wx.hideLoading();
        //this.cropper.imageReset();
    },
    clickcut(e){
        console.log(e.detail);
        wx.previewImage({
            current: e.detail.url,
            urls: [e.detail.url],
        });
          
    }
});
  