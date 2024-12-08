         const today=new Date();
        let hours=today.getHours();
        let minutes = today.getMinutes();

        let year = today.getFullYear();
        let month = ('0' + (today.getMonth() + 1)).slice(-2);
        let day = ('0' + today.getDate()).slice(-2);

        let dateString = year  + month  + day;
        let datenow=year+'년'+month+'월'+day+'일'+hours+"시"+minutes+'분';

        let nowhours='';

        $('.nowdate').ready(function(){
            $('.nowdate').text(datenow);
        })
        let hoursresult =Math.floor(hours/3)
        switch(hoursresult)
        {
            case 0:nowhours='0200';
            break;
            case 1:nowhours='0500';
            break;
            case 2:nowhours='0800';
            break;
            case 3:nowhours='1100';
            break;
            case 4:nowhours='1400';
            break;
            case 5:nowhours='1700';
            break;
            case 6:nowhours='2000';
            break;
            case 7:nowhours='2300';
            break;

        }
        

        

        //날씨 데이터
        $.getJSON(
            `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?ServiceKey=나의서비스키&pageNo=1&numOfRows=12&dataType=json&base_date=${dateString}&base_time=${nowhours}&nx=58&ny=125`,
            function(data){
                let itemsky=data.response.body.items.item[5];
                let itempty=data.response.body.items.item[6];
                let itempcp=data.response.body.items.item[9];
                let itemsno=data.response.body.items.item[11];
                let content;
               
                switch(itempty.fcstValue)
                {
                    case '0': //맑음
                    $('.videoweather').attr('src','Sunny.mp4');
                    break;
                    case '1': //비
                    $('.videoweather').attr('src','rain.mp4');
                    break;
                    case '2'://눈/비
                        if(itempcp.fcstValue==="강수없음")
                        {
                            $('.videoweather').attr('src','snow.mp4');
                        }
                        else if(itemsno.fcstValue==="적설없음")
                        {
                            $('.videoweather').attr('src','rain.mp4');
                        }
                        else{
                            $('.videoweather').attr('src','rain.mp4');
                        }
                    break;
                    case '3': //눈
                    $('.videoweather').attr('src','snow.mp4');
                    break;
                    case'4': //구름
                    $('.videoweather').attr('src','cloud.mp4');
                    break;
                    default: 
                    alert('예기치않은 정보입니다.');
                    break;
                }
                $('.weather').text(content)
                if(itemsky.fcstValue==1){
                    content='지금 하늘은 구름이 없어요!☀️';
                }
                else if(itemsky.fcstValue==3)
                {
                    content='지금 하늘은 구름이 많아요!☁️';
                }
                else if(itemsky.fcstValue==4)
                {
                   content='지금 하늘이 많이 흐려요!🌫️';
                }
                else{
                    alert("지금 하늘이 어떤지 모르겠어요!!");
                }
                $('.result').text(content);

            }
        )


     
            $('.searchBox').submit(function(event) {
                event.preventDefault(); // 폼 제출 방지
            
                let query = $('.searchText').val(); // 검색어 가져오기
            
                $.ajax({
                    method: "GET",
                    url: "https://dapi.kakao.com/v2/search/web",
                    data: { query: query },
                    headers: { Authorization: "KakaoAK 서비스키" }, 
                    success: function(response) {
                        console.log("검색 결과:", response);
                        let resultHTML = '';
                        let plus=1;
                        response.documents.forEach(function(item) {
                            resultHTML += `<p>${plus}.  <a href="${item.url}" target="_blank">${item.title}</a></p>`;
                            plus++;
                        });
                        $('.result').html(resultHTML); // 검색 결과 표시
                    },
                    error: function(error) {
                        console.log("에러 :", error);
                    }
                });
            });
