//Page Object
Page({
    data: {
        flash_flag:"off",
        flash_path:"http://www.52css.top:8000/images/light_off.png",
    },
    takePhoto:function(){
        let ctx = wx.createCameraContext(this);
        ctx.takePhoto({
            quality: 'high',
            success: (res)=>{
                var src=res.tempImagePath
                wx.redirectTo({
                    url: '../cropper-image/cropper-image?imgSrc='+src,
                    success: (result) => {
                        console.log("redirect to cropper-image success")
                    },
                    fail:(e)=>{
                        console.log("redirecc to cropper-image error",e)
                    }
                });
            }
        })
    },
    flashBtn:function(){
        if (this.data.flash_flag=="on"){
            this.setData({
                flash_flag:"off",
                flash_path:"http://www.52css.top:8000/images/light_off.png"
            })
        }
        else{
            this.setData({
                flash_flag:"on",
                flash_path:"http://www.52css.top:8000/images/light_on.png"
            })
        }
    },
    chooseImg:function(){
        let self=this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album'],
            success: (result) => {
                console.log("chooseImage",result.tempFilePaths)   
                let src= result.tempFilePaths[0]
                wx.redirectTo({
                    url: '../cropper-image/cropper-image?imgSrc='+src,
                    success: (result) => {
                        console.log("redirect success")
                    }
                });
                  
            }
        });
    },
    takeBack:function(){
        wx.redirectTo({
            url: '../index/index',
            success: (result) => {
                console.log("back to index")
            }
        });   
    }
});
  