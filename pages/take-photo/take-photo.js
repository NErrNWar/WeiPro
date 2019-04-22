//Page Object
Page({
    data: {
        flash_flag:"off",
        flash_path:"http://www.52css.top:8000/images/light_off.png",
    },
    takePhoto:function(){
        var ctx = wx.createCameraContext(this);
        ctx.takePhoto({
            quality: 'high',
            success: (res)=>{
                var src=res.tempImagePath
                wx.redirectTo({
                    url: '../cropper-image/cropper-image?imgSrc='+src,
                    success: (result) => {
                        console.log(result)
                    }
                });
            }
        })
    },
    flash_btn:function(){
        if (this.data.flash_flag=="on"){
            this.setData({
                flash_flag:"off",
                flash_path:"http://www.52css.top:8000/images/light_off.png"
            })
            console.log(this.data.flash_flag)
            console.log(this.data.flash_path)
        }
        else{
            this.setData({
                flash_flag:"on",
                flash_path:"http://www.52css.top:8000/images/light_on.png"
            })
            console.log(this.data.flash_flag)
            console.log(this.data.flash_path)
        }
    }
});
  