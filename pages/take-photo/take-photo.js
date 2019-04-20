//Page Object
Page({
    data: {
        
    },
    takePhoto(){
        var ctx = wx.createCameraContext(this);
        ctx.takePhoto({
            quality: 'high',
            success: (res)=>{
                var src=res.tempImagePath
                wx.navigateTo({
                    url: '../cropper-image/cropper-image?imgSrc='+src,
                    success: (result) => {
                        console.log(result)
                    }
                });
            }
        })
    }
});
  