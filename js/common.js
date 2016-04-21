$(function(){
			/* 设置当前时间 */
			setInterval(function(){timeShow()}, 500);
			function timeShow(){
				var time = new Date();
				var h = time.getHours();
				var i = time.getMinutes()<10?('0'+time.getMinutes()):time.getMinutes();
				// var s = time.getSeconds()<10?('0'+time.getSeconds()):time.getSeconds();
				$('.time-now').html(h+":"+i);
			}
			/* 图片瀑布流 */
			var pinHArr=[];		//存最小元素的数组
			var $img = $('.collect-imgView-item');
			$img.each(function(index,value){
	 		var pinH = $img.eq(index).outerHeight();
		        if( index < 2 ){
		            pinHArr[index] = pinH; //第一行中的num个块框pin 先添加进数组pinHArr
		        }else{
		            var minH = Math.min.apply( null, pinHArr );		//数组pinHArr中的最小值minH
		            var minHIndex = $.inArray( minH, pinHArr );		//查找某一个数在数组中的序号
		            $(value).css({
		            	'position':'absolute',
		                'top': minH+20,
		                'left': minHIndex*238+10
		            });
		            //数组 最小高元素的高 + 添加上的aPin[i]块框高
		            pinHArr[ minHIndex ] += $img.eq( index ).outerHeight() + 10;//更新添加了块框后的列高
		        }
			})
		})