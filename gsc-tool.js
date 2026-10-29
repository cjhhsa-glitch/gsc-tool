/* 포켓몬 금은 올인원 툴 (웹판) — 롬 파일은 방문자 컴퓨터 안에서만 쓰이고 어디로도 보내지 않아요 */
(function () {
'use strict';
// ===== 00-data.js
// 자동 생성 (build.ps1) — C# 소스와 같은 표
const KOREAN_TABLE = ["01:01=가|02=각|03=간|04=갇|05=갈|06=갉|07=갊|08=감|09=갑|0A=값|0B=갓|0C=갔|0D=강|0E=갖|0F=갗|10=같|11=갚|12=갛|13=개|14=객|15=갠|16=갤|17=갬|18=갭|19=갯|1A=갰|1B=갱|1C=갸|1D=갹|1E=갼|1F=걀|20=걋|21=걍|22=걔|23=걘|24=걜|25=거|26=걱|27=건|28=걷|29=걸|2A=걺|2B=검|2C=겁|2D=것|2E=겄|2F=겅|30=겆|31=겉|32=겊|33=겋|34=게|35=겐|36=겔|37=겜|38=겝|39=겟|3A=겠|3B=겡|3C=겨|3D=격|3E=겪|3F=견|40=겯|41=결|42=겹|43=겸|44=겻|45=겼|46=경|47=곁|48=계|49=곈|4A=곌|4B=곕|4C=곗|4D=고|4E=곡|4F=곤|60=곧|61=골|62=곪|63=곬|64=곯|65=곰|66=곱|67=곳|68=공|69=곶|6A=과|6B=곽|6C=관|6D=괄|6E=괆|71=괌|72=괍|73=괏|74=광|75=괘|76=괜|77=괠|78=괩|79=괬|7A=괭|7B=괴|7C=괵|7D=괸|7E=괼|7F=괻|80=굅|81=굇|82=굉|83=교|84=굔|85=굘|86=굡|87=굣|88=구|89=국|8A=군|8B=굳|8C=굴|8D=굵|8E=굶|8F=굻|90=굼|91=굽|92=굿|93=궁|94=궂|95=궈|96=궉|97=권|98=궐|99=궜|9A=궝|9B=궤|9C=궷|9D=귀|9E=귁|9F=귄|A0=귈|A1=귐|A2=귑|A3=귓|A4=규|A5=균|A6=귤|A7=그|A8=극|A9=근|AA=귿|AB=글|AC=긁|AD=금|AE=급|AF=긋|B0=긍|B1=긔|B2=기|B3=긱|B4=긴|B5=긷|B6=길|B7=긺|B8=김|B9=깁|BA=깃|BB=깅|BC=깆|BD=깊|BE=까|BF=깍|C0=깎|C1=깐|C2=깔|C3=깖|C4=깜|C5=깝|C6=깟|C7=깠|C8=깡|C9=깥|CA=깨|CB=깩|CC=깬|CD=깰|CE=깸|D1=깹|D2=깻|D3=깼|D4=깽|D5=꺄|D6=꺅|D7=꺌|D8=꺼|D9=꺽|DA=꺾|DB=껀|DC=껄|DD=껌|DE=껍|DF=껏|E0=껐|E1=껑|E2=께|E3=껙|E4=껜|E5=껨|E6=껫|E7=껭|E8=껴|E9=껸|EA=껼|EB=꼇|EC=꼈|ED=꼍|EE=꼐|EF=꼬|F0=꼭|F1=꼰|F2=꼲|F3=꼴|F4=꼼|F5=꼽|F6=꼿|F7=꽁|F8=꽂|F9=꽃|FA=꽈|FB=꽉|FC=꽐|FD=꽜|FE=꽝|FF=꽤","02:00=꽥|01=꽹|02=꾀|03=꾄|04=꾈|05=꾐|06=꾑|07=꾕|08=꾜|09=꾸|0A=꾹|0B=꾼|0C=꿀|0D=꿇|0E=꿈|0F=꿉|10=꿋|11=꿍|12=꿎|13=꿔|14=꿜|15=꿨|16=꿩|17=꿰|18=꿱|19=꿴|1A=꿸|1B=뀀|1C=뀁|1D=뀄|1E=뀌|1F=뀐|20=뀔|21=뀜|22=뀝|23=뀨|24=끄|25=끅|26=끈|27=끊|28=끌|29=끎|2A=끓|2B=끔|2C=끕|2D=끗|2E=끙|31=끝|32=끼|33=끽|34=낀|35=낄|36=낌|37=낍|38=낏|39=낑|3A=나|3B=낙|3C=낚|3D=난|3E=낟|3F=날|40=낡|41=낢|42=남|43=납|44=낫|45=났|46=낭|47=낮|48=낯|49=낱|4A=낳|4B=내|4C=낵|4D=낸|4E=낼|4F=냄|60=냅|61=냇|62=냈|63=냉|64=냐|65=냑|66=냔|67=냘|68=냠|69=냥|6A=너|6B=넉|6C=넋|6D=넌|6E=널|6F=넒|70=넓|71=넘|72=넙|73=넛|74=넜|75=넝|76=넣|77=네|78=넥|79=넨|7A=넬|7B=넴|7C=넵|7D=넷|7E=넸|7F=넹|80=녀|81=녁|82=년|83=녈|84=념|85=녑|86=녔|87=녕|88=녘|89=녜|8A=녠|8B=노|8C=녹|8D=논|8E=놀|8F=놂|90=놈|91=놉|92=놋|93=농|94=높|95=놓|96=놔|97=놘|98=놜|99=놨|9A=뇌|9B=뇐|9C=뇔|9D=뇜|9E=뇝|A1=뇟|A2=뇨|A3=뇩|A4=뇬|A5=뇰|A6=뇹|A7=뇻|A8=뇽|A9=누|AA=눅|AB=눈|AC=눋|AD=눌|AE=눔|AF=눕|B0=눗|B1=눙|B2=눠|B3=눴|B4=눼|B5=뉘|B6=뉜|B7=뉠|B8=뉨|B9=뉩|BA=뉴|BB=뉵|BC=뉼|BD=늄|BE=늅|BF=늉|C0=느|C1=늑|C2=는|C3=늘|C4=늙|C5=늚|C6=늠|C7=늡|C8=늣|C9=능|CA=늦|CB=늪|CC=늬|CD=늰|CE=늴|CF=니|D0=닉|D1=닌|D2=닐|D3=닒|D4=님|D5=닙|D6=닛|D7=닝|D8=닢|D9=다|DA=닥|DB=닦|DC=단|DD=닫|DE=달|DF=닭|E0=닮|E1=닯|E2=닳|E3=담|E4=답|E5=닷|E6=닸|E7=당|E8=닺|E9=닻|EA=닿|EB=대|EC=댁|ED=댄|EE=댈|EF=댐|F0=댑|F1=댓|F2=댔|F3=댕|F5=더|F6=덕|F7=덖|F8=던|F9=덛|FA=덜|FB=덞|FC=덟|FD=덤|FE=덥","03:01=덧|02=덩|03=덫|04=덮|05=데|06=덱|07=덴|08=델|09=뎀|0A=뎁|0B=뎃|0C=뎄|0D=뎅|0E=뎌|0F=뎐|10=뎔|11=뎠|12=뎡|13=뎨|14=뎬|15=도|16=독|17=돈|18=돋|19=돌|1A=돎|1C=돔|1D=돕|1E=돗|1F=동|20=돛|21=돝|22=돠|23=돤|24=돨|25=돼|26=됐|27=되|28=된|29=될|2A=됨|2B=됩|2C=됫|2D=됴|2E=두|2F=둑|30=둔|31=둘|32=둠|33=둡|34=둣|35=둥|36=둬|37=뒀|38=뒈|39=뒝|3A=뒤|3B=뒨|3C=뒬|3D=뒵|3E=뒷|3F=뒹|40=듀|41=듄|42=듈|43=듐|44=듕|45=드|46=득|47=든|48=듣|49=들|4A=듦|4B=듬|4C=듭|4D=듯|4E=등|4F=듸|60=디|61=딕|62=딘|63=딛|64=딜|65=딤|66=딥|67=딧|68=딨|69=딩|6A=딪|6B=따|6C=딱|6D=딴|6E=딸|71=땀|72=땁|73=땃|74=땄|75=땅|76=땋|77=때|78=땍|79=땐|7A=땔|7B=땜|7C=땝|7D=땟|7E=땠|7F=땡|80=떠|81=떡|82=떤|83=떨|84=떪|85=떫|86=떰|87=떱|88=떳|89=떴|8A=떵|8B=떻|8C=떼|8D=떽|8E=뗀|8F=뗄|90=뗌|91=뗍|92=뗏|93=뗐|94=뗑|95=뗘|96=뗬|97=또|98=똑|99=똔|9A=똘|9B=똥|9C=똬|9D=똴|9E=뙈|9F=뙤|A0=뙨|A1=뚜|A2=뚝|A3=뚠|A4=뚤|A5=뚫|A6=뚬|A7=뚱|A8=뛔|A9=뛰|AA=뛴|AB=뛸|AC=뜀|AD=뜁|AE=뜅|AF=뜨|B0=뜩|B1=뜬|B2=뜯|B3=뜰|B4=뜸|B5=뜹|B6=뜻|B7=띄|B8=띈|B9=띌|BA=띔|BB=띕|BC=띠|BD=띤|BE=띨|BF=띰|C0=띱|C1=띳|C2=띵|C3=라|C4=락|C5=란|C6=랄|C7=람|C8=랍|C9=랏|CA=랐|CB=랑|CC=랒|CD=랖|CE=랗|D0=뢔|D1=래|D2=랙|D3=랜|D4=랠|D5=램|D6=랩|D7=랫|D8=랬|D9=랭|DA=랴|DB=략|DC=랸|DD=럇|DE=량|DF=러|E0=럭|E1=런|E2=럴|E3=럼|E4=럽|E5=럿|E6=렀|E7=렁|E8=렇|E9=레|EA=렉|EB=렌|EC=렐|ED=렘|EE=렙|EF=렛|F0=렝|F1=려|F2=력|F3=련|F4=렬|F5=렴|F6=렵|F7=렷|F8=렸|F9=령|FA=례|FB=롄|FC=롑|FD=롓|FE=로|FF=록","04:00=론|01=롤|02=롬|03=롭|04=롯|05=롱|06=롸|07=롼|08=뢍|09=뢨|0A=뢰|0B=뢴|0C=뢸|0D=룀|0E=룁|0F=룃|10=룅|11=료|12=룐|13=룔|14=룝|15=룟|16=룡|17=루|18=룩|19=룬|1A=룰|1B=룸|1C=룹|1D=룻|1E=룽|1F=뤄|20=뤘|21=뤠|22=뤼|23=뤽|24=륀|25=륄|26=륌|27=륏|28=륑|29=류|2A=륙|2B=륜|2C=률|2D=륨|2E=륩|31=륫|32=륭|33=르|34=륵|35=른|36=를|37=름|38=릅|39=릇|3A=릉|3B=릊|3C=릍|3D=릎|3E=리|3F=릭|40=린|41=릴|42=림|43=립|44=릿|45=링|46=마|47=막|48=만|49=많|4A=맏|4B=말|4C=맑|4D=맒|4E=맘|4F=맙|60=맛|61=망|62=맞|63=맡|64=맣|65=매|66=맥|67=맨|68=맬|69=맴|6A=맵|6B=맷|6C=맸|6D=맹|6E=맺|6F=먀|70=먁|71=먈|72=먕|73=머|74=먹|75=먼|76=멀|77=멂|78=멈|79=멉|7A=멋|7B=멍|7C=멎|7D=멓|7E=메|7F=멕|80=멘|81=멜|82=멤|83=멥|84=멧|85=멨|86=멩|87=며|88=멱|89=면|8A=멸|8B=몃|8C=몄|8D=명|8E=몇|8F=몌|90=모|91=목|92=몫|93=몬|94=몰|95=몲|96=몸|97=몹|98=못|99=몽|9A=뫄|9B=뫈|9C=뫘|9D=뫙|9E=뫼|A1=묀|A2=묄|A3=묍|A4=묏|A5=묑|A6=묘|A7=묜|A8=묠|A9=묩|AA=묫|AB=무|AC=묵|AD=묶|AE=문|AF=묻|B0=물|B1=묽|B2=묾|B3=뭄|B4=뭅|B5=뭇|B6=뭉|B7=뭍|B8=뭏|B9=뭐|BA=뭔|BB=뭘|BC=뭡|BD=뭣|BE=뭬|BF=뮈|C0=뮌|C1=뮐|C2=뮤|C3=뮨|C4=뮬|C5=뮴|C6=뮷|C7=므|C8=믄|C9=믈|CA=믐|CB=믓|CC=미|CD=믹|CE=민|CF=믿|D0=밀|D1=밂|D2=밈|D3=밉|D4=밋|D5=밌|D6=밍|D7=및|D8=밑|D9=바|DA=박|DB=밖|DC=밗|DD=반|DE=받|DF=발|E0=밝|E1=밞|E2=밟|E3=밤|E4=밥|E5=밧|E6=방|E7=밭|E8=배|E9=백|EA=밴|EB=밸|EC=뱀|ED=뱁|EE=뱃|EF=뱄|F0=뱅|F1=뱉|F2=뱌|F3=뱍|F4=뱐|F5=뱝|F6=버|F7=벅|F8=번|F9=벋|FA=벌|FB=벎|FC=범|FD=법|FE=벗","05:01=벙|02=벚|03=베|04=벡|05=벤|06=벧|07=벨|08=벰|09=벱|0A=벳|0B=벴|0C=벵|0D=벼|0E=벽|0F=변|10=별|11=볍|12=볏|13=볐|14=병|15=볕|16=볘|17=볜|18=보|19=복|1A=볶|1B=본|1C=볼|1D=봄|1E=봅|1F=봇|20=봉|21=봐|22=봔|23=봤|24=봬|25=뵀|26=뵈|27=뵉|28=뵌|29=뵐|2A=뵘|2B=뵙|2C=뵤|2D=뵨|2E=부|2F=북|30=분|31=붇|32=불|33=붉|34=붊|35=붐|36=붑|37=붓|38=붕|39=붙|3A=붚|3B=붜|3C=붤|3D=붰|3E=붸|3F=뷔|40=뷕|41=뷘|42=뷜|43=뷩|44=뷰|45=뷴|46=뷸|47=븀|48=븃|49=븅|4A=브|4B=븍|4C=븐|4D=블|4E=븜|4F=븝|60=븟|61=비|62=빅|63=빈|64=빌|65=빎|66=빔|67=빕|68=빗|69=빙|6A=빚|6B=빛|6C=빠|6D=빡|6E=빤|71=빨|72=빪|73=빰|74=빱|75=빳|76=빴|77=빵|78=빻|79=빼|7A=빽|7B=뺀|7C=뺄|7D=뺌|7E=뺍|7F=뺏|80=뺐|81=뺑|82=뺘|83=뺙|84=뺨|85=뻐|86=뻑|87=뻔|88=뻗|89=뻘|8A=뻠|8B=뻣|8C=뻤|8D=뻥|8E=뻬|8F=뼁|90=뼈|91=뼉|92=뼘|93=뼙|94=뼛|95=뼜|96=뼝|97=뽀|98=뽁|99=뽄|9A=뽈|9B=뽐|9C=뽑|9D=뽕|9E=뾔|9F=뾰|A0=뿅|A1=뿌|A2=뿍|A3=뿐|A4=뿔|A5=뿜|A6=뿟|A7=뿡|A8=쀼|A9=쁑|AA=쁘|AB=쁜|AC=쁠|AD=쁨|AE=쁩|AF=삐|B0=삑|B1=삔|B2=삘|B3=삠|B4=삡|B5=삣|B6=삥|B7=사|B8=삭|B9=삯|BA=산|BB=삳|BC=살|BD=삵|BE=삶|BF=삼|C0=삽|C1=삿|C2=샀|C3=상|C4=샅|C5=새|C6=색|C7=샌|C8=샐|C9=샘|CA=샙|CB=샛|CC=샜|CD=생|CE=샤|D1=샥|D2=샨|D3=샬|D4=샴|D5=샵|D6=샷|D7=샹|D8=섀|D9=섄|DA=섈|DB=섐|DC=섕|DD=서|DE=석|DF=섞|E0=섟|E1=선|E2=섣|E3=설|E4=섦|E5=섧|E6=섬|E7=섭|E8=섯|E9=섰|EA=성|EB=섶|EC=세|ED=섹|EE=센|EF=셀|F0=셈|F1=셉|F2=셋|F3=셌|F4=셍|F5=셔|F6=셕|F7=션|F8=셜|F9=셤|FA=셥|FB=셧|FC=셨|FD=셩|FE=셰|FF=셴","06:00=셸|01=솅|02=소|03=속|04=솎|05=손|06=솔|07=솖|08=솜|09=솝|0A=솟|0B=송|0C=솥|0D=솨|0E=솩|0F=솬|10=솰|11=솽|12=쇄|13=쇈|14=쇌|15=쇔|16=쇗|17=쇘|18=쇠|19=쇤|1A=쇨|1B=쇰|1C=쇱|1D=쇳|1E=쇼|1F=쇽|20=숀|21=숄|22=숌|23=숍|24=숏|25=숑|26=수|27=숙|28=순|29=숟|2A=술|2B=숨|2C=숩|2D=숫|2E=숭|2F=쌰|30=쎼|31=숯|32=숱|33=숲|34=숴|35=쉈|36=쉐|37=쉑|38=쉔|39=쉘|3A=쉠|3B=쉥|3C=쉬|3D=쉭|3E=쉰|3F=쉴|40=쉼|41=쉽|42=쉿|43=슁|44=슈|45=슉|46=슐|47=슘|48=슛|49=슝|4A=스|4B=슥|4C=슨|4D=슬|4E=슭|4F=슴|60=습|61=슷|62=승|63=시|64=식|65=신|66=싣|67=실|68=싫|69=심|6A=십|6B=싯|6C=싱|6D=싶|6E=싸|6F=싹|70=싻|71=싼|72=쌀|73=쌈|74=쌉|75=쌌|76=쌍|77=쌓|78=쌔|79=쌕|7A=쌘|7B=쌜|7C=쌤|7D=쌥|7E=쌨|7F=쌩|80=썅|81=써|82=썩|83=썬|84=썰|85=썲|86=썸|87=썹|88=썼|89=썽|8A=쎄|8B=쎈|8C=쎌|8D=쏀|8E=쏘|8F=쏙|90=쏜|91=쏟|92=쏠|93=쏢|94=쏨|95=쏩|96=쏭|97=쏴|98=쏵|99=쏸|9A=쐈|9B=쐐|9C=쐤|9D=쐬|9E=쐰|A0=쓔|A1=쐴|A2=쐼|A3=쐽|A4=쑈|A5=쑤|A6=쑥|A7=쑨|A8=쑬|A9=쑴|AA=쑵|AB=쑹|AC=쒀|AD=쒔|AE=쒜|AF=쒸|B0=쒼|B1=쓩|B2=쓰|B3=쓱|B4=쓴|B5=쓸|B6=쓺|B7=쓿|B8=씀|B9=씁|BA=씌|BB=씐|BC=씔|BD=씜|BE=씨|BF=씩|C0=씬|C1=씰|C2=씸|C3=씹|C4=씻|C5=씽|C6=아|C7=악|C8=안|C9=앉|CA=않|CB=알|CC=앍|CD=앎|CE=앓|CF=암|D0=압|D1=앗|D2=았|D3=앙|D4=앝|D5=앞|D6=애|D7=액|D8=앤|D9=앨|DA=앰|DB=앱|DC=앳|DD=앴|DE=앵|DF=야|E0=약|E1=얀|E2=얄|E3=얇|E4=얌|E5=얍|E6=얏|E7=양|E8=얕|E9=얗|EA=얘|EB=얜|EC=얠|ED=얩|EE=어|EF=억|F0=언|F1=얹|F2=얻|F3=얼|F4=얽|F5=얾|F6=엄|F7=업|F8=없|F9=엇|FA=었|FB=엉|FC=엊|FD=엌|FE=엎","07:01=에|02=엑|03=엔|04=엘|05=엠|06=엡|07=엣|08=엥|09=여|0A=역|0B=엮|0C=연|0D=열|0E=엶|0F=엷|10=염|11=엽|12=엾|13=엿|14=였|15=영|16=옅|17=옆|18=옇|19=예|1A=옌|1B=옐|1C=옘|1D=옙|1E=옛|1F=옜|20=오|21=옥|22=온|23=올|24=옭|25=옮|26=옰|27=옳|28=옴|29=옵|2A=옷|2B=옹|2C=옻|2D=와|2E=왁|2F=완|30=왈|31=왐|32=왑|33=왓|34=왔|35=왕|36=왜|37=왝|38=왠|39=왬|3A=왯|3B=왱|3C=외|3D=왹|3E=왼|3F=욀|40=욈|41=욉|42=욋|43=욍|44=요|45=욕|46=욘|47=욜|48=욤|49=욥|4A=욧|4B=용|4C=우|4D=욱|4E=운|4F=울|60=욹|61=욺|62=움|63=웁|64=웃|65=웅|66=워|67=웍|68=원|69=월|6A=웜|6B=웝|6C=웠|6D=웡|6E=웨|71=웩|72=웬|73=웰|74=웸|75=웹|76=웽|77=위|78=윅|79=윈|7A=윌|7B=윔|7C=윕|7D=윗|7E=윙|7F=유|80=육|81=윤|82=율|83=윰|84=윱|85=윳|86=융|87=윷|88=으|89=윽|8A=은|8B=을|8C=읆|8D=음|8E=읍|8F=읏|90=응|91=읒|92=읓|93=읔|94=읕|95=읖|96=읗|97=의|98=읜|99=읠|9A=읨|9B=읫|9C=이|9D=익|9E=인|9F=일|A0=읽|A1=읾|A2=잃|A3=임|A4=입|A5=잇|A6=있|A7=잉|A8=잊|A9=잎|AA=자|AB=작|AC=잔|AD=잖|AE=잗|AF=잘|B0=잚|B1=잠|B2=잡|B3=잣|B4=잤|B5=장|B6=잦|B7=재|B8=잭|B9=잰|BA=잴|BB=잼|BC=잽|BD=잿|BE=쟀|BF=쟁|C0=쟈|C1=쟉|C2=쟌|C3=쟎|C4=쟐|C5=쟘|C6=쟝|C7=쟤|C8=쟨|C9=쟬|CA=저|CB=적|CC=전|CD=절|CE=젊|D1=점|D2=접|D3=젓|D4=정|D5=젖|D6=제|D7=젝|D8=젠|D9=젤|DA=젬|DB=젭|DC=젯|DD=젱|DE=져|DF=젼|E0=졀|E1=졈|E2=졉|E3=졌|E4=졍|E5=졔|E6=조|E7=족|E8=존|E9=졸|EA=졺|EB=좀|EC=좁|ED=좃|EE=종|EF=좆|F0=좇|F1=좋|F2=좌|F3=좍|F4=좔|F5=좝|F6=좟|F7=좡|F8=좨|F9=좼|FA=좽|FB=죄|FC=죈|FD=죌|FE=죔|FF=죕","08:00=죗|01=죙|02=죠|03=죡|04=죤|05=죵|06=주|07=죽|08=준|09=줄|0A=줅|0B=줆|0C=줌|0D=줍|0E=줏|0F=중|10=줘|11=줬|12=줴|13=쥐|14=쥑|15=쥔|16=쥘|17=쥠|18=쥡|19=쥣|1A=쥬|1B=쥰|1C=쥴|1D=쥼|1E=즈|1F=즉|20=즌|21=즐|22=즘|23=즙|24=즛|25=증|26=지|27=직|28=진|29=짇|2A=질|2B=짊|2C=짐|2D=집|2E=짓|30=쬬|31=징|32=짖|33=짙|34=짚|35=짜|36=짝|37=짠|38=짢|39=짤|3A=짧|3B=짬|3C=짭|3D=짯|3E=짰|3F=짱|40=째|41=짹|42=짼|43=쨀|44=쨈|45=쨉|46=쨋|47=쨌|48=쨍|49=쨔|4A=쨘|4B=쨩|4C=쩌|4D=쩍|4E=쩐|4F=쩔|60=쩜|61=쩝|62=쩟|63=쩠|64=쩡|65=쩨|66=쩽|67=쪄|68=쪘|69=쪼|6A=쪽|6B=쫀|6C=쫄|6D=쫌|6E=쫍|6F=쫏|70=쫑|71=쫓|72=쫘|73=쫙|74=쫠|75=쫬|76=쫴|77=쬈|78=쬐|79=쬔|7A=쬘|7B=쬠|7C=쬡|7D=쭁|7E=쭈|7F=쭉|80=쭌|81=쭐|82=쭘|83=쭙|84=쭝|85=쭤|86=쭸|87=쭹|88=쮜|89=쮸|8A=쯔|8B=쯤|8C=쯧|8D=쯩|8E=찌|8F=찍|90=찐|91=찔|92=찜|93=찝|94=찡|95=찢|96=찧|97=차|98=착|99=찬|9A=찮|9B=찰|9C=참|9D=찹|9E=찻|A1=찼|A2=창|A3=찾|A4=채|A5=책|A6=챈|A7=챌|A8=챔|A9=챕|AA=챗|AB=챘|AC=챙|AD=챠|AE=챤|AF=챦|B0=챨|B1=챰|B2=챵|B3=처|B4=척|B5=천|B6=철|B7=첨|B8=첩|B9=첫|BA=첬|BB=청|BC=체|BD=첵|BE=첸|BF=첼|C0=쳄|C1=쳅|C2=쳇|C3=쳉|C4=쳐|C5=쳔|C6=쳤|C7=쳬|C8=쳰|C9=촁|CA=초|CB=촉|CC=촌|CD=촐|CE=촘|CF=촙|D0=촛|D1=총|D2=촤|D3=촨|D4=촬|D5=촹|D6=최|D7=쵠|D8=쵤|D9=쵬|DA=쵭|DB=쵯|DC=쵱|DD=쵸|DE=춈|DF=추|E0=축|E1=춘|E2=출|E3=춤|E4=춥|E5=춧|E6=충|E7=춰|E8=췄|E9=췌|EA=췐|EB=취|EC=췬|ED=췰|EE=췸|EF=췹|F0=췻|F1=췽|F2=츄|F3=츈|F4=츌|F5=츔|F6=츙|F7=츠|F8=측|F9=츤|FA=츨|FB=츰|FC=츱|FD=츳|FE=층","09:01=치|02=칙|03=친|04=칟|05=칠|06=칡|07=침|08=칩|09=칫|0A=칭|0B=카|0C=칵|0D=칸|0E=칼|0F=캄|10=캅|11=캇|12=캉|13=캐|14=캑|15=캔|16=캘|17=캠|18=캡|19=캣|1A=캤|1B=캥|1C=캬|1D=캭|1E=컁|1F=커|20=컥|21=컨|22=컫|23=컬|24=컴|25=컵|26=컷|27=컸|28=컹|29=케|2A=켁|2B=켄|2C=켈|2D=켐|2E=켑|2F=켓|30=켕|31=켜|32=켠|33=켤|34=켬|35=켭|36=켯|37=켰|38=켱|39=켸|3A=코|3B=콕|3C=콘|3D=콜|3E=콤|3F=콥|40=콧|41=콩|42=콰|43=콱|44=콴|45=콸|46=쾀|47=쾅|48=쾌|49=쾡|4A=쾨|4B=쾰|4C=쿄|4D=쿠|4E=쿡|4F=쿤|60=쿨|61=쿰|62=쿱|63=쿳|64=쿵|65=쿼|66=퀀|67=퀄|68=퀑|69=퀘|6A=퀭|6B=퀴|6C=퀵|6D=퀸|6E=퀼|71=큄|72=큅|73=큇|74=큉|75=큐|76=큔|77=큘|78=큠|79=크|7A=큭|7B=큰|7C=클|7D=큼|7E=큽|7F=킁|80=키|81=킥|82=킨|83=킬|84=킴|85=킵|86=킷|87=킹|88=타|89=탁|8A=탄|8B=탈|8C=탉|8D=탐|8E=탑|8F=탓|90=탔|91=탕|92=태|93=택|94=탠|95=탤|96=탬|97=탭|98=탯|99=탰|9A=탱|9B=탸|9C=턍|9D=터|9E=턱|9F=턴|A0=털|A1=턺|A2=텀|A3=텁|A4=텃|A5=텄|A6=텅|A7=테|A8=텍|A9=텐|AA=텔|AB=템|AC=텝|AD=텟|AE=텡|AF=텨|B0=텬|B1=텼|B2=톄|B3=톈|B4=토|B5=톡|B6=톤|B7=톨|B8=톰|B9=톱|BA=톳|BB=통|BC=톺|BD=톼|BE=퇀|BF=퇘|C0=퇴|C1=퇸|C2=툇|C3=툉|C4=툐|C5=투|C6=툭|C7=툰|C8=툴|C9=툼|CA=툽|CB=툿|CC=퉁|CD=퉈|CE=퉜|D1=퉤|D2=튀|D3=튁|D4=튄|D5=튈|D6=튐|D7=튑|D8=튕|D9=튜|DA=튠|DB=튤|DC=튬|DD=튱|DE=트|DF=특|E0=튼|E1=튿|E2=틀|E3=틂|E4=틈|E5=틉|E6=틋|E7=틔|E8=틘|E9=틜|EA=틤|EB=틥|EC=티|ED=틱|EE=틴|EF=틸|F0=팀|F1=팁|F2=팃|F3=팅|F4=파|F5=팍|F6=팎|F7=판|F8=팔|F9=팖|FA=팜|FB=팝|FC=팟|FD=팠|FE=팡|FF=팥","0A:00=패|01=팩|02=팬|03=팰|04=팸|05=팹|06=팻|07=팼|08=팽|09=퍄|0A=퍅|0B=퍼|0C=퍽|0D=펀|0E=펄|0F=펌|10=펍|11=펏|12=펐|13=펑|14=페|15=펙|16=펜|17=펠|18=펨|19=펩|1A=펫|1B=펭|1C=펴|1D=편|1E=펼|1F=폄|20=폅|21=폈|22=평|23=폐|24=폘|25=폡|26=폣|27=포|28=폭|29=폰|2A=폴|2B=폼|2C=폽|2D=폿|2E=퐁|31=퐈|32=퐝|33=푀|34=푄|35=표|36=푠|37=푤|38=푭|39=푯|3A=푸|3B=푹|3C=푼|3D=푿|3E=풀|3F=풂|40=품|41=풉|42=풋|43=풍|44=풔|45=풩|46=퓌|47=퓐|48=퓔|49=퓜|4A=퓟|4B=퓨|4C=퓬|4D=퓰|4E=퓸|4F=퓻|60=퓽|61=프|62=픈|63=플|64=픔|65=픕|66=픗|67=피|68=픽|69=핀|6A=필|6B=핌|6C=핍|6D=핏|6E=핑|6F=하|70=학|71=한|72=할|73=핥|74=함|75=합|76=핫|77=항|78=해|79=핵|7A=핸|7B=핼|7C=햄|7D=햅|7E=햇|7F=했|80=행|81=햐|82=향|83=허|84=헉|85=헌|86=헐|87=헒|88=험|89=헙|8A=헛|8B=헝|8C=헤|8D=헥|8E=헨|8F=헬|90=헴|91=헵|92=헷|93=헹|94=혀|95=혁|96=현|97=혈|98=혐|99=협|9A=혓|9B=혔|9C=형|9D=혜|9E=혠|A1=혤|A2=혭|A3=호|A4=혹|A5=혼|A6=홀|A7=홅|A8=홈|A9=홉|AA=홋|AB=홍|AC=홑|AD=화|AE=확|AF=환|B0=활|B1=홧|B2=황|B3=홰|B4=홱|B5=홴|B6=횃|B7=횅|B8=회|B9=획|BA=횐|BB=횔|BC=횝|BD=횟|BE=횡|BF=효|C0=횬|C1=횰|C2=횹|C3=횻|C4=후|C5=훅|C6=훈|C7=훌|C8=훑|C9=훔|CA=훗|CB=훙|CC=훠|CD=훤|CE=훨|CF=훰|D0=훵|D1=훼|D2=훽|D3=휀|D4=휄|D5=휑|D6=휘|D7=휙|D8=휜|D9=휠|DA=휨|DB=휩|DC=휫|DD=휭|DE=휴|DF=휵|E0=휸|E1=휼|E2=흄|E3=흇|E4=흉|E5=흐|E6=흑|E7=흔|E8=흖|E9=흗|EA=흘|EB=흙|EC=흠|ED=흡|EE=흣|EF=흥|F0=흩|F1=희|F2=흰|F3=흴|F4=흼|F5=흽|F6=힁|F7=히|F8=힉|F9=힌|FA=힐|FB=힘|FC=힙|FD=힛|FE=힝","0B:00=ㄱ|01=ㄴ|02=ㄷ|03=ㄹ|04=ㅁ|05=ㅂ|06=ㅅ|07=ㅇ|08=ㅈ|09=ㅊ|0A=ㅋ|0B=ㅌ|0C=ㅍ|0D=ㅎ|0E=ㄲ|0F=ㄸ|10=ㅃ|11=ㅆ|12=ㅉ|20=ㅏ|21=ㅑ|22=ㅓ|23=ㅕ|24=ㅗ|25=ㅛ|26=ㅜ|27=ㅠ|28=ㅡ|29=ㅣ|2A=ㅐ|2B=ㅒ|2C=ㅔ|2D=ㅖ|2E=ㅘ|2F=ㅙ|30=ㅚ|31=ㅝ|32=ㅞ|33=ㅟ|34=ㅢ|3E=_|3F=—|60=「|61=」|62=『|63=』|64=(|65=)|66=!|67=?|68=-|69=~|6A=…|6B=,|6C=.|F0=0|F1=1|F2=2|F3=3|F4=4|F5=5|F6=6|F7=7|F8=8|F9=9|FF= "];
const AREA_NAMES = "포켓몬센터 1층|체육관|교환 소년의 집|빈 집|이야기 집|좋은낚싯대 집|식당|프렌들리숍|인주 쪽 게이트|외양간|목장 집|38번도로|39번도로|시내;갸라도스 이야기 집|체육관|포켓몬센터 1층|인주 쪽 게이트|42번도로|44번도로|마을;1층|2층|3층|1층|2층|3층|4층|5층|6층|7층|8층|9층|1층|지하 1층|공원|벌레잡기 대회|1층|2층|3층|4층|5층|바깥|칠색조의 방|투구의 방|암나이트의 방|프테라의 방|안쪽 방|연구소|1층|지하 1층|지하 2층|지하 1층|지하 2층|1층|2층|3층|4층|5층|6층|기념품 가게|지하 1층|지하 2층|지하 3층|숲|지하통로|스위치방 입구|백화점 지하|지하창고|1층 바깥|1층 안쪽|2층 안쪽|지하 1층|1층|지하 1층|지하 2층(황토 쪽)|지하 2층(검은먹 쪽)|지하 3층|북서쪽|북동쪽|남서쪽|동굴|남동쪽|지하 1층|지하 2층|루기아의 방|방 1|방 2|방 3|아이템 방|도라지 쪽 입구|검은먹 쪽 입구|1층|지하 1층|폭포|동굴|동굴|지하통로|1층|지하 1층|게이트(미사용)|사파리존(미사용)|동굴;방울탑 입구|방울탑 뒷입구|포켓몬센터 1층|루기아 이야기 집|가무연습장|프렌들리숍|체육관|다우징머신 집|시내;체육관 1층|체육관 2층|드래곤 이야기 집|에미의 집|프렌들리숍|포켓몬센터 1층|기술잊기 집|45번도로|46번도로|시내;포켓몬센터 1층|포켓몬센터 2층(미사용)|19번수로 게이트|체육관|19번수로|20번수로|21번수로|섬;배지 이야기 집|경찰서|교환 이야기 집|포켓몬센터 1층|포켓몬센터 2층(미사용)|체육관|프렌들리숍|포켓몬센터 1층|포켓몬센터 2층(미사용)|발전소|이수재의 집|4번도로|9번도로|10번도로 북쪽|24번도로|25번도로|시내;포켓몬센터 1층|숯 굽는 집|프렌들리숍|철구의 집|체육관|33번도로|마을;잠재파워 집|잉어킹 집|황토 쪽 게이트|게이트|43번도로|호수;32번도로|35번도로|36번도로|37번도로|시내|프렌들리숍|체육관|트레이너 스쿨|별명 이야기 집|포켓몬센터 1층|카일의 집|알프 쪽 게이트|포켓몬센터 1층|금빛 쪽 게이트|자연공원 쪽 게이트|알프 쪽 게이트|자연공원 쪽 게이트;34번도로|시내|체육관|자전거 가게|친밀도 감정 집|이수재 가족의 집|자기열차 역|꽃집|포켓몬센터 1층|PP 이야기 집|이름 감정소|백화점 1층|백화점 2층|백화점 3층|백화점 4층|백화점 5층|백화점 6층|백화점 엘리베이터|게임코너|고동 쪽 게이트|숲 쪽 게이트|키우미집;6번도로|11번도로|시내|낚시 이야기 집|포켓몬센터 1층|포켓몬센터 2층(미사용)|포켓몬 애호가 클럽|자기열차 이야기 집|프렌들리숍|디그다굴 이야기 집|체육관|노랑 쪽 게이트|지하통로 입구;1번도로|마을|레드의 집 1층|레드의 집 2층|그린의 집|오박사 연구소;3번도로|시내|니드런 이야기 집|체육관|프렌들리숍|포켓몬센터 1층|포켓몬센터 2층(미사용)|잠꾸러기 이야기 집;항구|항구|아쿠아호 1층|아쿠아호 객실(북쪽)|아쿠아호 객실(서쪽)|아쿠아호 객실(동쪽·선장실)|아쿠아호 지하 1층|항구 통로|항구 통로|광장|기념품 가게|옥상;23번도로|포켓몬센터 1층|일목의 방|독수의 방|시바의 방|카렌의 방|목호의 방|명예의 전당;13번도로|14번도로|15번도로|18번도로|시내|프렌들리숍|사파리존 사무소|체육관|이수재 누나의 집|포켓몬센터 1층|포켓몬센터 2층(미사용)|사파리존 관리인 집|15번도로 게이트;8번도로|12번도로|10번도로 남쪽|마을|포켓몬센터 1층|포켓몬센터 2층(미사용)|후지노인의 집|이야기 집|이름 감정소|프렌들리숍|혼의 집|라디오타워 1층|노랑 쪽 게이트|슈퍼낚싯대 집;28번도로|바깥|포켓몬센터 1층|강철날개 집;포켓몬센터 2층|교환 방|대전 방|타임캡슐;7번도로|16번도로|17번도로|시내|백화점 1층|백화점 2층|백화점 3층|백화점 4층|백화점 5층|백화점 6층|백화점 엘리베이터|맨션 1층|맨션 2층|맨션 3층|맨션 옥상|맨션 옥상 집|포켓몬센터 1층|포켓몬센터 2층(미사용)|게임코너|경품 교환소|체육관|식당|이야기 집|16번도로 게이트|노랑 쪽 게이트|17·18번도로 게이트;40번수로|41번수로|시내|괴짜 아저씨 집|체육관|포켓몬센터 1층|약국|사진관|루기아 이야기 집;2번도로|22번도로|시내|체육관|별명 이야기 집|트레이너하우스 1층|트레이너하우스 지하 1층|프렌들리숍|포켓몬센터 1층|포켓몬센터 2층(미사용)|금구슬 집|2번도로 게이트|챔피언로드 게이트;26번도로|27번도로|29번도로|마을|공박사 연구소|주인공 집 1층|주인공 집 2층|이웃집|공박사 집|회복 집|요일 형제 집|모래바람 집|29·46번도로 게이트;5번도로|시내|격투 도장|체육관|프렌들리숍|포켓몬센터 1층|포켓몬센터 2층(미사용)|초능력자 집|자기열차 역|실프주식회사 1층|흉내쟁이 집 1층|흉내쟁이 집 2층|지하통로 입구|노랑 쪽 게이트|순결의부적 집;30번도로|31번도로|시내|프렌들리숍|포켓몬센터 1층|체육관 이야기 집|길안내 할아버지 집|진화 이야기 집|나무열매 집|포켓몬 할아버지의 집|도라지 쪽 게이트";
const SPRITE_NAMES = {0x01:"주인공",0x02:"주인공(자전거)",0x03:"게임보이 소년",0x04:"라이벌",0x05:"오박사",0x06:"레드",0x07:"그린",0x08:"이수재",0x09:"장로",0x0A:"도희",0x0B:"철구",0x0C:"엄마",0x0D:"강연",0x0E:"레드의 엄마",0x0F:"그린의 누나",0x10:"공박사",0x11:"일목",0x12:"비상",0x13:"꼭두",0x14:"호일",0x15:"유빈",0x16:"사도",0x17:"규리",0x18:"류옹",0x19:"이향",0x1A:"웅",0x1B:"카렌",0x1C:"시바",0x1D:"이슬",0x1E:"목호",0x1F:"마티스",0x20:"민화",0x21:"독수",0x22:"초련",0x23:"엘리트트레이너(남)",0x24:"엘리트트레이너(여)",0x25:"곤충채집 소년",0x26:"쌍둥이",0x27:"반바지 꼬마",0x28:"짧은치마",0x29:"선생님",0x2A:"아가씨",0x2B:"괴짜",0x2C:"로커",0x2D:"포켓몬 애호가(남)",0x2E:"포켓몬 애호가(여)",0x2F:"할아버지",0x30:"할머니",0x31:"수영 소년",0x32:"수영 소녀",0x33:"잠만보",0x34:"파도타기 피카츄",0x35:"로켓단원",0x36:"로켓단원(여)",0x37:"간호순",0x38:"통신 접수원",0x39:"점원",0x3A:"낚시꾼",0x3B:"낚시 명인",0x3C:"과학자",0x3D:"기모노 아가씨",0x3E:"수도승",0x3F:"사람",0x40:"신사",0x41:"태권왕",0x42:"접수원",0x43:"경찰관",0x44:"칼",0x45:"야돈",0x46:"선장",0x47:"라프라스",0x48:"체육관 안내원",0x49:"뱃사람",0x4A:"폭주족",0x4B:"약사",0x4C:"포켓몬",0x4D:"포켓몬(요정)",0x4E:"포켓몬(새)",0x4F:"포켓몬(드래곤)",0x50:"롱스톤",0x51:"닌텐도64",0x52:"꼬지모",0x53:"파도타기",0x54:"몬스터볼",0x55:"포켓몬 도감",0x56:"종이",0x57:"버추얼보이",0x58:"통신 접수원",0x59:"바위",0x5A:"큰 바위",0x5B:"슈퍼패미컴",0x5C:"패미컴",0x5D:"나무열매 나무",0x5E:"금 트로피",0x5F:"은 트로피",0x80:"안농",0x81:"꼬마돌",0x82:"가디",0x83:"뿔충이",0x84:"셀러",0x85:"뚜벅쵸",0x86:"팬텀",0x87:"주뱃",0x88:"잉어킹",0x89:"꼬부기",0x8A:"토게피",0x8B:"버터플",0x8C:"디그다",0x8D:"발챙이",0x8E:"피카츄",0x8F:"삐삐",0x90:"파이리",0x91:"루주라",0x92:"아쿠스타",0x93:"이상해씨",0x94:"푸린",0x95:"질퍽이",0x96:"아보",0x97:"파라스",0x98:"왕눈해",0x99:"켄타로스",0x9A:"알통몬",0x9B:"찌리리공",0x9C:"라프라스",0x9D:"코뿌리",0x9E:"파이어",0x9F:"잠만보",0xA0:"갸라도스",0xA1:"루기아",0xA2:"칠색조",0xE0:"맡긴 포켓몬",0xE1:"맡긴 포켓몬"};
const SONG_NAMES = ["(없음)","타이틀 화면","1번도로","3번도로","12번도로","자기열차","관동 관장 배틀","관동 트레이너 배틀","관동 야생 배틀","포켓몬센터","등산가 마주침","아가씨 마주침","경찰관 마주침","포켓몬 회복","보라타운","2번도로","달맞이산","마을 안내","게임코너","자전거","명예의 전당","상록시티","무지개시티","트레이너 승리","야생 포켓몬 승리","관장 승리","달맞이산 광장","체육관","태초마을","오박사의 포켓몬 강좌","오박사","라이벌 등장","라이벌 퇴장","파도타기","진화","자연공원","엔딩 스태프롤","고동마을","무궁시티","기모노 아가씨 마주침","연결동굴","성도 야생 배틀","성도 트레이너 배틀","30번도로","인주시티","도라지시티","성도 관장 배틀","챔피언 배틀","라이벌 배틀","로켓단 배틀","공박사","어둠의 동굴","29번도로","36번도로","아쿠아호","반바지 꼬마 마주침","누나 마주침","로켓단 마주침","포켓몬 마니아 마주침","수도승 마주침","연두마을","금빛시티","갈색시티","포켓몬 채널","포켓몬 피리","방울탑","모다피의 탑","불탄탑","등대","분노의 호수","석영고원","37번도로","로켓단 아지트","용의 굴","성도 야생 배틀 (밤)","알프의 유적 라디오","포획 성공","26번도로","엄마","챔피언로드","포켓몬 자장가","포켓몬 행진곡","오프닝 1","오프닝 2","메인 메뉴","알프의 유적 내부","로켓단 서곡","가무연습장","벌레잡기 대회 결과","벌레잡기 대회","로켓단 라디오","프린터","엔딩 후"];
const SONG_GROUPS = [["🏘 마을 · 도시",[0x3C, 0x26, 0x2D, 0x25, 0x3D, 0x2C, 0x45, 0x46, 0x1C, 0x15, 0x3E, 0x16, 0x0E]],["🌳 도로 · 이동",[0x34, 0x2B, 0x35, 0x47, 0x4D, 0x02, 0x03, 0x04, 0x0F, 0x23, 0x13, 0x21, 0x05, 0x36]],["🏠 건물 · 동굴 · 탑",[0x09, 0x0D, 0x1B, 0x32, 0x1E, 0x4E, 0x28, 0x33, 0x10, 0x1A, 0x41, 0x42, 0x43, 0x44, 0x48, 0x49, 0x55, 0x4F, 0x12, 0x57]],["⚔ 배틀 · 승리",[0x29, 0x4A, 0x2A, 0x2E, 0x30, 0x31, 0x2F, 0x08, 0x07, 0x06, 0x17, 0x18, 0x19, 0x4C]],["👀 트레이너 마주침",[0x1F, 0x20, 0x37, 0x38, 0x39, 0x3A, 0x3B, 0x27, 0x0A, 0x0B, 0x0C]],["🎬 이벤트 · 기타",[0x01, 0x52, 0x53, 0x54, 0x11, 0x22, 0x14, 0x24, 0x5C, 0x1D, 0x3F, 0x40, 0x50, 0x51, 0x4B, 0x5A, 0x56, 0x58, 0x59, 0x5B]]];
const VANILLA_MUSIC_TABLE = "3A85513AB1773B00403BCA423B06453BF0753B20473BFA493B6D503BC6553D11743B9B573B2D583C97463B2F773BDD583B295B3BD85B3B6D5D3B19613CBF453D00403D5B433A9F7E3D18453D2C463D15483DAE483D0C4B3D9F4C3DEA4D3D794F3D27513D8A513CE1463DE854074C783DE8573D035B3DB8793D605C3DC55D3D96603B017C3BD0723C00403AB6643A6A693AF8563A185B3AE95F3A67623C86433A92543A426D3DC3663B3E6E3DA2743AD57D3B5E633A7C723AFC733A1F763B5F643D137B3D11683D74693D996A3B69653BC5663B52683B4B693B756B3BE86C3D5C603BCB6D3D02463BB26F3DF26B3D726C3D796D3D236E3D55703D08733DFD783A927D3D6D763BBC793B3E7B3D167C3BB1753CFD4733D27C";
// ===== 10-charset.js
// ================================================================ 글자표 (Program.cs Charset 과 같음)
class Charset {
  constructor() {
    this.one = new Array(256).fill(null);           // 1바이트 글자
    this.two = [];                                  // 2바이트 한글 (앞바이트 01~0B)
    for (let i = 0; i < 12; i++) this.two.push(new Array(256).fill(null));
    this.rev = new Map();
    this.usage = new Map();
    for (let i = 0; i < 26; i++) { this.one[0x80 + i] = String.fromCharCode(65 + i); this.one[0xa0 + i] = String.fromCharCode(97 + i); }
    for (let i = 0; i < 10; i++) this.one[0xf6 + i] = String(i);
    const m = {
      0x7f: ' ', 0x9a: '(', 0x9b: ')', 0x9c: ':', 0x9d: ';', 0x9e: '[', 0x9f: ']', 0xe0: "'", 0xe3: '-', 0xe6: '?',
      0xe7: '!', 0xe8: '.', 0xe9: '&', 0xea: 'é', 0xec: '▷', 0xed: '▶', 0xee: '▼', 0xef: '♂', 0xf0: '₩', 0xf1: '×',
      0xf2: '.', 0xf3: '/', 0xf4: ',', 0xf5: '♀', 0x74: '·', 0x75: '…', 0x6d: ':',
      0xd0: "'d", 0xd1: "'l", 0xd2: "'m", 0xd3: "'r", 0xd4: "'s", 0xd5: "'t", 0xd6: "'v"
    };
    for (const k in m) this.one[+k] = m[k];
    for (let b = 0; b < 256; b++) if (this.one[b] != null) this.addRev(this.one[b], [b]);
    for (const line of KOREAN_TABLE) {
      const lead = parseInt(line.substr(0, 2), 16);
      for (const item of line.substr(3).split('|')) {
        const idx = parseInt(item.substr(0, 2), 16), s = item.substr(3);
        this.two[lead][idx] = s;
        this.addRev(s, [lead, idx]);
      }
    }
    this.tokenRev = new Map();
    for (const k in Charset.TOKENS) this.tokenRev.set(Charset.TOKENS[k], +k);
  }
  addRev(s, b) { if (!this.rev.has(s)) this.rev.set(s, []); this.rev.get(s).push(b); }
  static key(b) { return b.length === 1 ? b[0] : b[0] * 256 + b[1] + 0x10000; }
  count(b) { const k = Charset.key(b); this.usage.set(k, (this.usage.get(k) || 0) + 1); }
  // 같은 모양 글자가 여러 코드로 있을 때, 롬에서 많이 쓰인 쪽
  best(s) {
    const l = this.rev.get(s);
    if (!l) return null;
    let best = l[0], bc = -1;
    for (const b of l) { const c = this.usage.get(Charset.key(b)) || 0; if (c > bc) { bc = c; best = b; } }
    return best;
  }
  static isTerm(b) { return b === 0x50 || b === 0x5e || b === 0x5f; }

  // 문자열 하나 해석 → { text, end, term } 또는 null
  decode(rom, start) {
    let s = '', i = start;
    while (i < rom.length && i - start < 1500) {
      const b = rom[i];
      if (Charset.isTerm(b)) return { text: s, end: i, term: b };
      if (b >= 0x01 && b <= 0x0b) {
        if (i + 1 >= rom.length) return null;
        const t = this.two[b][rom[i + 1]];
        if (t == null) s += '{' + hex2(b) + hex2(rom[i + 1]) + '}';
        else { s += t; this.count([b, rom[i + 1]]); }
        i += 2; continue;
      }
      if (b === Charset.LINE || b === Charset.CONT || b === 0x59 || b === 0x56 || b === 0x57) s += '\n';
      else if (b === Charset.PARA) s += '\n\n';
      else if (Charset.TOKENS[b] != null) s += '{' + Charset.TOKENS[b] + '}';
      else if (this.one[b] != null) { s += this.one[b]; this.count([b]); }
      else s += '{' + hex2(b) + '}';
      i++;
    }
    return null;
  }

  // 편집한 글 → 바이트. 말풍선 첫 줄바꿈은 LINE, 그다음은 CONT, 빈 줄은 다음 말풍선(PARA)
  encode(text, state, trimEnd) {
    let s = text.replace(/\r/g, '');
    if (trimEnd && s.endsWith('\n') && !s.endsWith('\n\n')) s = s.replace(/\n+$/, '');
    const out = [];
    let i = 0;
    while (i < s.length) {
      const c = s[i];
      if (c === '\n') {
        let k = 0; while (i < s.length && s[i] === '\n') { k++; i++; }
        if (k >= 2) { out.push(Charset.PARA); state.firstBreak = true; }
        else { out.push(state.firstBreak ? Charset.LINE : Charset.CONT); state.firstBreak = false; }
        continue;
      }
      if (c === '{') {
        const j = s.indexOf('}', i);
        if (j > i) {
          const tok = s.substring(i + 1, j);
          if (this.tokenRev.has(tok)) { out.push(this.tokenRev.get(tok)); i = j + 1; continue; }
          if (/^([0-9A-Fa-f]{2}){1,2}$/.test(tok)) {
            for (let h = 0; h < tok.length; h += 2) out.push(parseInt(tok.substr(h, 2), 16));
            i = j + 1; continue;
          }
        }
        throw new Error('알 수 없는 {} 표시: ' + s.substr(i, 12));
      }
      let bytes = null, len = 1;
      if (i + 1 < s.length && c === "'") { bytes = this.best(s.substr(i, 2)); if (bytes) len = 2; }
      if (!bytes) bytes = this.best(c);
      if (!bytes) throw new Error("게임에 없는 글자예요: '" + c + "'");
      out.push(...bytes); i += len;
    }
    return out;
  }
}
Charset.LINE = 0x5a; Charset.CONT = 0x5d; Charset.PARA = 0x5c;
// 이름이 들어가는 자리 등 (편집 화면에 {이름} 으로 보임)
Charset.TOKENS = {
  0x51: '주인공', 0x52: '라이벌', 0x5b: '엄마', 0x47: '포켓몬', 0x46: 'PKMN', 0x48: '……', 0x49: '컴퓨터',
  0x4a: '기술머신', 0x4b: '로켓단', 0x55: '트레이너', 0x53: '상대', 0x54: '사용자', 0x4f: '적', 0x4d: '레드',
  0x4e: '그린', 0x33: 'POKE', 0x4c: '도감끝', 0xe1: 'PK', 0xe2: 'MN', 0x70: 'PO', 0x71: 'KE'
};

function hex2(n) { return (n < 16 ? '0' : '') + n.toString(16).toUpperCase(); }

// ================================================================ 대사 (텍스트 스크립트)
const CMD_LEN = [0, 3, 4, 3, 5, 1, 1, 1, -1, 4, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 4];
const CMD_LABELS = new Set(['이름', '숫자', '요일', '버튼대기', '잠깐', '점점점', '효과음', '다른대사', '기타']);
function cmdLabel(c) {
  switch (c) {
    case 0x01: case 0x14: return '이름';
    case 0x02: case 0x09: return '숫자';
    case 0x15: return '요일';
    case 0x06: case 0x0d: return '버튼대기';
    case 0x0a: return '잠깐';
    case 0x0c: return '점점점';
    case 0x0b: case 0x0e: case 0x0f: case 0x10: case 0x11: case 0x12: case 0x13: return '효과음';
    case 0x16: return '다른대사';
    default: return '기타';
  }
}

class TextEntry {
  constructor(addr) {
    this.addr = addr; this.length = 0; this.parts = []; this.endsWithEnd = false; this.readOnly = false;
    this.original = ''; this.edited = null; this.error = null;
    this.slotAddr = -1; this.slotSize = 0; this.slotFill = 0;
  }
  get current() { return this.edited != null ? this.edited : this.original; }
  get modified() { return this.edited != null && this.edited !== this.original; }
  buildText() { return this.parts.map(p => p.isString ? p.text : '{' + p.label + '}').join(''); }

  // 편집한 글을 대사 바이트로 다시 만듦
  serialize(cs, text) {
    const labels = this.parts.filter(p => !p.isString).map(p => p.label);
    const pieces = [], found = [];
    let last = 0;
    const re = /\{([^}]*)\}/g; let m;
    while ((m = re.exec(text))) {
      if (!CMD_LABELS.has(m[1])) continue;
      pieces.push(text.substring(last, m.index)); found.push(m[1]); last = m.index + m[0].length;
    }
    pieces.push(text.substring(last));
    if (found.join('\u0001') !== labels.join('\u0001'))
      throw new Error('{' + (labels.length ? labels[0] : '이름') + '} 같은 표시는 지우거나 순서를 바꾸면 안 돼요');
    const gapHad = new Array(labels.length + 1).fill(false);
    let gi = 0;
    for (const p of this.parts) { if (p.isString) gapHad[gi] = true; else gi++; }
    let lastStr = null; for (const p of this.parts) if (p.isString) lastStr = p;
    let lastStrGap = -1; gi = 0;
    for (const p of this.parts) { if (p.isString && p === lastStr) lastStrGap = gi; if (!p.isString) gi++; }
    const out = [];
    const cmds = this.parts.filter(p => !p.isString);
    const state = { firstBreak: true };
    for (let g = 0; g <= labels.length; g++) {
      const piece = pieces[g];
      if (gapHad[g] || piece.replace(/\r/g, '').replace(/^\n+|\n+$/g, '').length > 0) {
        out.push(0x00);
        out.push(...cs.encode(piece, state, g === labels.length));
        const fin = g === lastStrGap && lastStr && lastStr.term !== 0x50;
        out.push(fin ? lastStr.term : 0x50);
      }
      if (g < cmds.length) out.push(...cmds[g].cmd);
    }
    if (this.endsWithEnd) out.push(0x50);
    return out;
  }
}

// ===== 20-rom.js
// ================================================================ 롬 분석 (Program.cs Rom 과 같음)
// 한글판 금·은 스크립트 명령 길이 ($00~$A2), 출처: pokegold-kr macros/scripts/events.asm
const SCRIPT_LEN = (() => {
  const lens = [
    3,4,3,3,4,3,4,4,3,3,4,4,3,3,4,3, 3,3,4,1,2,2,2,2,1,3,3,4,2,2,3,3,
    3,2,5,5,5,3,3,3,2,2,2,2,2,0,3,3, 3,3,3,3,3,3,3,1,1,3,4,3,5,3,2,2,
    3,3,2,4,4,3,1,1,1,2,1,2,4,3,3,1, 3,1,3,3,1,1,2,1,1,1,1,1,1,3,3,1,
    1,2,2,2,5,1,1,1,2,4,3,1,3,3,2,2, 3,1,4,2,2,4,3,3,2,4,4,1,1,3,2,3,
    1,4,1,1,3,3,1,1,1,4,2,2,2,3,1,3, 1,1,2,1,4,3,2,2,3,1,2,2,3,1,3,3,
    1,1,6];
  const t = new Array(256).fill(-1);
  for (let i = 0; i < lens.length; i++) t[i] = lens[i];
  return t;
})();

const Names = {
  areas: null,
  area(group, map, counts) {
    if (!this.areas) this.areas = AREA_NAMES.split(';').map(g => g.split('|'));
    // 개조롬에서 지도 수가 원본과 다르면 이름을 맞출 수 없으니 번호로
    if (group >= 1 && group <= this.areas.length && counts.length === this.areas.length && counts[group - 1] === this.areas[group - 1].length && map >= 1)
      return this.areas[group - 1][map - 1];
    return '구역 ' + group + '-' + map;
  },
  sprite(id) { return SPRITE_NAMES[id] || (id >= 0xF0 ? '특수 인물' : '인물'); }
};

class Rom {
  constructor(bytes, fileName) {
    this.data = bytes;
    this.fileName = fileName;
    this.cs = new Charset();
    this.regions = [];
    this.texts = new Map();
    this.usedFlags = new Set();
    this.textNote = new Map();
    this.free = [];
    this.dirty = false;
    this.analyze();
    this.findFree();
    this.gfx = new MapRender(this.data);
  }

  off(bank, addr) { return bank === 0 ? addr : bank * 0x4000 + (addr - 0x4000); }
  w(o) { return this.data[o] | (this.data[o + 1] << 8); }
  inRom(o) { return o >= 0 && o < this.data.length - 1; }
  static banked(a) { return a >= 0x4000 && a < 0x8000; }
  get title() { let s = ''; for (let i = 0x134; i < 0x143; i++) { const b = this.data[i]; if (b >= 0x20 && b < 0x7f) s += String.fromCharCode(b); } return s.trim(); }

  findPattern(pat, start, end) {
    const d = this.data;
    end = Math.min(end, d.length) - pat.length;
    outer: for (let i = start; i <= end; i++) {
      for (let j = 0; j < pat.length; j++) if (pat[j] >= 0 && d[i + j] !== pat[j]) continue outer;
      return i;
    }
    return -1;
  }

  get allAreas() { const r = []; for (const g of this.regions) r.push(...g.areas); return r; }

  analyze() {
    const d = this.data;
    // GetAnyMapPointer 코드에서 지도 표 위치 (개조롬도 대부분 그대로)
    const f = this.findPattern([0xC5, 0x05, 0x48, 0x06, 0x00, 0x21, -1, -1, 0x09, 0x09, 0x2A, 0x66, 0x6F, 0xC1, 0x0D, 0x06, 0x00, 0x3E], 0, 0x4000);
    if (f < 0) throw new Error('한글판 금·은 기반 롬이 아닌 것 같아요 (지도 정보를 찾지 못함).');
    const tblAddr = this.w(f + 6);
    const call = this.findPattern([0x3E, -1, 0xD7, 0xCD, f & 0xff, f >> 8], 0, 0x4000);
    if (call < 0) throw new Error('지도 정보를 찾지 못했어요.');
    const mapBank = d[call + 1];
    const tbl = this.off(mapBank, tblAddr);
    const groups = (this.w(tbl) - tblAddr) / 2;
    if (groups < 1 || groups > 60) throw new Error('지도 정보를 해석하지 못했어요.');

    // 지역(랜드마크) 이름
    const landmarkNames = [];
    const lm = this.findPattern([0x00, 0x00, -1, -1, 0x94, 0x74, -1, -1, 0x88, 0x74, -1, -1, 0x6C, 0x74], 0, d.length);
    if (lm >= 0) {
      const lbank = Math.floor(lm / 0x4000);
      for (let i = 0; i < 200; i++) {
        const na = this.w(lm + i * 4 + 2);
        if (!Rom.banked(na)) break;
        const r = this.cs.decode(d, this.off(lbank, na));
        if (!r) break;
        landmarkNames.push(r.text.replace(/\n/g, ' ').trim());
      }
    }

    const groupPtrs = [];
    for (let g = 0; g < groups; g++) groupPtrs.push(this.w(tbl + g * 2));
    const counts = [];
    for (let g = 0; g < groups; g++) {
      const start = groupPtrs[g];
      let next = Infinity;
      for (const p of groupPtrs) if (p > start && p < next) next = p;
      counts.push(next === Infinity ? this.countTail(mapBank, start) : (next - start) / 9);
    }

    const regionMap = new Map();
    for (let g = 0; g < groups; g++) {
      for (let m = 0; m < counts[g]; m++) {
        const h = this.off(mapBank, groupPtrs[g] + m * 9);
        if (!this.inRom(h + 8)) continue;
        const attrBank = d[h], attrAddr = this.w(h + 3), landmark = d[h + 5];
        if (!Rom.banked(attrAddr)) continue;
        const at = this.off(attrBank, attrAddr);
        if (!this.inRom(at + 11)) continue;
        const scriptBank = d[at + 6], scriptsAddr = this.w(at + 7), eventsAddr = this.w(at + 9);
        if (!Rom.banked(scriptsAddr) || !Rom.banked(eventsAddr)) continue;
        const area = {
          group: g + 1, map: m + 1, name: Names.area(g + 1, m + 1, counts),
          tileset: d[h + 1], env: d[h + 2],
          height: d[at + 1], width: d[at + 2], blocksBank: d[at + 3], blocksAddr: this.w(at + 4),
          headerOff: h, attrOff: at, scriptBank, scriptsAddr, eventsAddr, owners: [], extras: []
        };
        this.loadArea(area);
        let rname = landmark < landmarkNames.length && landmarkNames[landmark].length > 0 ? landmarkNames[landmark] : '기타 지역';
        if (landmark === 0) rname = '특수 장소';
        let reg = regionMap.get(rname);
        if (!reg) { reg = { name: rname, landmark: landmark === 0 ? 999 : landmark, areas: [] }; regionMap.set(rname, reg); this.regions.push(reg); }
        reg.areas.push(area);
        area.regionName = rname;
      }
    }
    this.regions.sort((a, b) => a.landmark - b.landmark);
  }

  countTail(bank, start) {
    let n = 0;
    while (n < 64) {
      const h = this.off(bank, start + n * 9);
      if (!this.inRom(h + 8) || start + n * 9 + 9 > 0x8000) break;
      const ab = this.data[h], aa = this.w(h + 3);
      if (ab === 0 || ab >= this.data.length / 0x4000 || !Rom.banked(aa)) break;
      const at = this.off(ab, aa);
      if (!Rom.banked(this.w(at + 7)) || !Rom.banked(this.w(at + 9))) break;
      n++;
    }
    return n;
  }

  // 구역의 NPC·표지판·대사를 (다시) 읽음
  loadArea(area) {
    area.owners = []; area.extras = [];
    try { this.readMap(area, area.scriptBank, area.scriptsAddr, area.eventsAddr); } catch (e) { }
    // 대사가 없는 NPC 는 지도에만 흐리게
    const useless = o => o.texts.length === 0;
    area.extras = area.owners.filter(o => useless(o) && o.x >= 0 && !o.isSign);
    area.owners = area.owners.filter(o => !useless(o));
  }

  readMap(area, bank, scriptsAddr, eventsAddr) {
    const d = this.data;
    const auto = { name: '자동 이벤트', texts: [], x: -1, y: -1, eventOff: -1 };
    let p = this.off(bank, scriptsAddr);
    const nScene = d[p++];
    for (let i = 0; i < nScene && i < 32; i++, p += 4) this.walk(auto, bank, this.w(p));
    const nCb = d[p++];
    for (let i = 0; i < nCb && i < 32; i++, p += 3) this.walk(auto, bank, this.w(p + 1));

    let e = this.off(bank, eventsAddr) + 2;
    const nWarp = d[e++]; e += nWarp * 5;
    const nCoord = d[e++];
    for (let i = 0; i < nCoord && i < 64; i++, e += 8) {
      const before = auto.texts.length;
      this.walk(auto, bank, this.w(e + 4));
      for (const t of auto.texts.slice(before)) this.textNote.set(t, '타일 트리거 T' + (i + 1) + ' (' + d[e + 2] + ',' + d[e + 1] + ') 밟으면');
    }
    const nBg = d[e++];
    let signNo = 0;
    const signs = [];
    for (let i = 0; i < nBg && i < 64; i++, e += 5) {
      const type = d[e + 2], ptr = this.w(e + 3);
      const o = { name: '표지판·조사 ' + (++signNo), y: d[e], x: d[e + 1], isSign: true, eventOff: e, texts: [] };
      if (type <= 4) this.walk(o, bank, ptr);
      else if ((type === 5 || type === 6) && Rom.banked(ptr)) { this.usedFlags.add(this.w(this.off(bank, ptr))); this.walk(o, bank, this.w(this.off(bank, ptr) + 2)); }
      signs.push(o);
    }
    const nObj = d[e++];
    const counter = new Map();
    const objs = [];
    for (let i = 0; i < nObj && i < 64; i++, e += 13) {
      const sprite = d[e], type = d[e + 7] & 0x0f, ptr = this.w(e + 9), pal = d[e + 7] >> 4;
      this.usedFlags.add(this.w(e + 11));
      if (type === 1) continue;                               // 아이템 볼
      if (d[e + 5] === 0xFF && d[e + 6] === 0x00) continue;   // 지운 NPC
      let baseName = Names.sprite(sprite);
      if (type === 2) baseName += ' (트레이너)';
      counter.set(baseName, (counter.get(baseName) || 0) + 1);
      const o = { name: baseName, y: d[e + 1] - 4, x: d[e + 2] - 4, sprite, pal: pal >= 8 ? pal - 8 : -1, eventOff: e, objType: type, move: d[e + 3], texts: [], isSign: false, isObject: true };
      if (type === 2) this.walkTrainer(o, bank, ptr); else this.walk(o, bank, ptr);
      objs.push(o);
    }
    const seen = new Map();
    for (const o of objs) if (counter.get(o.name) > 1) { const k = (seen.get(o.name) || 0) + 1; seen.set(o.name, k); o.name = o.name + ' ' + k; }
    area.owners.push(...objs, ...signs, auto);
  }

  walkTrainer(o, bank, ptr) {
    if (!Rom.banked(ptr)) return;
    const h = this.off(bank, ptr);
    this.usedFlags.add(this.w(h));
    this.addText(o, bank, this.w(h + 4)); // 만났을 때
    this.addText(o, bank, this.w(h + 6)); // 이겼을 때
    this.addText(o, bank, this.w(h + 8)); // 졌을 때
    this.walk(o, bank, this.w(h + 10));   // 배틀 후
  }

  walk(o, bank, addr, visited, depth) {
    visited = visited || new Set(); depth = depth || 0;
    if (!Rom.banked(addr) || depth > 12) return;
    const d = this.data;
    let pc = this.off(bank, addr), steps = 0;
    while (this.inRom(pc) && steps++ < 600) {
      if (visited.has(pc)) return;
      visited.add(pc);
      const op = d[pc];
      const len = op === 0x2D ? (d[pc + 4] !== 0 ? 9 : 5) : SCRIPT_LEN[op];
      if (len <= 0) return;
      const a1 = this.inRom(pc + 2) ? this.w(pc + 1) : 0;
      switch (op) {
        case 0x00: case 0x03: case 0x08: case 0x09: case 0x8D: case 0x8F: this.walk(o, bank, a1, visited, depth + 1); break;
        case 0x06: case 0x07: case 0x0A: case 0x0B: this.walk(o, bank, this.w(pc + 2), visited, depth + 1); break;
        case 0x01: case 0x04: this.walk(o, d[pc + 1], this.w(pc + 2), visited, depth + 1); break;
        case 0x4C: this.addText(o, d[pc + 1], this.w(pc + 2)); break;
        case 0x4D: case 0x52: case 0x53: this.addText(o, bank, a1); break;
        case 0x64: this.addText(o, bank, a1); this.addText(o, bank, this.w(pc + 3)); break;
        case 0x31: case 0x32: case 0x33: this.usedFlags.add(a1); break;
      }
      switch (op) {
        case 0x03: case 0x04: case 0x05: case 0x0C: case 0x52: case 0x53: case 0x8F:
        case 0x90: case 0x91: case 0x92: case 0x93: case 0xA0: case 0xA1: return;
      }
      pc += len;
    }
  }

  addText(o, bank, addr) {
    if (!Rom.banked(addr)) return;
    const t = this.parseText(this.off(bank, addr), 0);
    if (!t) return;
    if (!o.texts.includes(t)) o.texts.push(t);
    // 대사 중간에 다른 대사로 이어지면 그것도 함께
    for (const p of t.parts)
      if (!p.isString && p.cmd[0] === 0x16) {
        const sub = this.parseText(this.off(p.cmd[3], p.cmd[1] | (p.cmd[2] << 8)), 1);
        if (sub && !o.texts.includes(sub)) o.texts.push(sub);
      }
  }

  parseText(off, depth) {
    if (depth > 4 || !this.inRom(off)) return null;
    if (this.texts.has(off)) return this.texts.get(off);
    const d = this.data;
    const t = new TextEntry(off);
    let pc = off, done = false;
    for (let n = 0; n < 64 && !done && this.inRom(pc); n++) {
      const c = d[pc];
      if (c === 0x00) {
        const r = this.cs.decode(d, pc + 1);
        if (!r) return null;
        t.parts.push({ isString: true, text: r.text, term: r.term });
        pc = r.end + 1;
        if (r.term !== 0x50) done = true;
      } else if (c === 0x50) { t.endsWithEnd = true; pc++; done = true; }
      else if (c <= 0x16 && CMD_LEN[c] > 0) {
        const len = CMD_LEN[c];
        t.parts.push({ isString: false, cmd: Array.from(d.slice(pc, pc + len)), label: cmdLabel(c) });
        pc += len;
      } else { t.readOnly = true; done = true; }
    }
    if (!done) t.readOnly = true;
    if (!t.parts.some(p => p.isString)) {
      // text_far 하나만 있는 대사는 실제 대사로 바로 연결
      if (t.parts.length === 1 && t.parts[0].cmd[0] === 0x16) {
        const c = t.parts[0].cmd;
        return this.parseText(this.off(c[3], c[1] | (c[2] << 8)), depth + 1);
      }
      return null;
    }
    t.length = pc - off;
    t.original = t.buildText();
    if ((t.original.match(/\{[0-9A-F]{2,4}\}/g) || []).length >= 3) return null;   // 대사가 아닌 데이터
    this.texts.set(off, t);
    return t;
  }

  // 대사 검사 ([대사] 탭과 같음)
  validate(t) {
    t.error = null;
    if (!t.modified) return;
    try {
      const n = t.serialize(this.cs, t.current).length;
      if (t.readOnly && n > t.length) t.error = '이 대사는 원래보다 길게 쓸 수 없어요 (조금 줄여주세요)';
    } catch (e) { t.error = e.message; }
  }

  // ------------------------------------------------ 저장
  findFree() {
    this.free = [];
    const d = this.data, banks = d.length / 0x4000;
    for (let b = 1; b < banks; b++) {
      const end = (b + 1) * 0x4000, fill = d[end - 1];
      if (fill !== 0x00 && fill !== 0xFF) continue;
      let s = end - 1;
      while (s > b * 0x4000 && d[s - 1] === fill) s--;
      const start = s + 0x40;
      if (end - start >= 0x100) this.free.push([start, end, fill]);
    }
    this.free.sort((a, c) => (c[1] - c[0]) - (a[1] - a[0]));
  }

  alloc(n) {
    for (const r of this.free) if (r[1] - r[0] >= n) { const p = r[0]; r[0] += n; return { p, fill: r[2] }; }
    return null;
  }

  // 고친 대사 하나를 롬 데이터에 씀. 실패하면 이유
  writeText(t) {
    const d = this.data;
    const bytes = t.serialize(this.cs, t.current);
    if (t.slotAddr >= 0) { if (bytes.length <= t.slotSize) { d.set(bytes, t.slotAddr); return null; } }
    else if (bytes.length <= t.length) { d.set(bytes, t.addr); return null; }
    if (t.readOnly) return '이 대사는 원래보다 길게 할 수 없어요';
    if (t.length < 5) return '너무 짧은 대사라 길게 늘릴 수 없어요';
    const a = this.alloc(bytes.length);
    if (!a) return '롬에 남은 빈 공간이 부족해요';
    d.set(bytes, a.p);
    if (t.slotAddr >= 0) for (let i = 0; i < t.slotSize; i++) d[t.slotAddr + i] = t.slotFill;
    t.slotAddr = a.p; t.slotSize = bytes.length; t.slotFill = a.fill;
    const bank = Math.floor(a.p / 0x4000), addr = 0x4000 + (a.p % 0x4000);
    d[t.addr] = 0x16; d[t.addr + 1] = addr & 0xff; d[t.addr + 2] = addr >> 8; d[t.addr + 3] = bank; d[t.addr + 4] = 0x50;
    return null;
  }

  fixChecksum() {
    const d = this.data;
    let sum = 0;
    for (let i = 0; i < d.length; i++) if (i !== 0x14e && i !== 0x14f) sum = (sum + d[i]) & 0xffff;
    d[0x14e] = sum >> 8; d[0x14f] = sum & 0xff;
  }

  // 고친 대사를 모두 롬에 넣고 파일 바이트를 돌려줌 → { bytes, errors }
  buildSave() {
    const errors = [];
    for (const t of this.texts.values()) {
      if (!t.modified) continue;
      this.validate(t);
      if (t.error) { errors.push(t.current.split('\n')[0] + ' … : ' + t.error); continue; }
      const e = this.writeText(t);
      if (e) errors.push(t.current.split('\n')[0] + ' … : ' + e);
      else { t.original = t.current; t.edited = null; }
    }
    this.fixChecksum();
    this.dirty = false;
    return { bytes: this.data, errors };
  }

  get hasChanges() { if (this.dirty) return true; for (const t of this.texts.values()) if (t.modified) return true; return false; }

  areaMusic(a) { return a && a.headerOff > 0 ? this.data[a.headerOff + 6] : -1; }
  setAreaMusic(a, id) { this.data[a.headerOff + 6] = id; this.dirty = true; }
}

// ===== 30-render.js
// ================================================================ 지도·NPC 그림 (MapRender.cs 와 같음, 낮 시간 색)
class MapRender {
  constructor(d) {
    this.d = d;
    this.gfxCache = new Map();
    try { this.ok = this.locate(); } catch (e) { this.ok = false; }
  }
  off(bank, addr) { return bank === 0 ? addr : bank * 0x4000 + (addr - 0x4000); }
  w(o) { return this.d[o] | (this.d[o + 1] << 8); }
  find(pat, start, end) {
    const d = this.d;
    end = Math.min(end, d.length) - pat.length;
    outer: for (let i = start; i <= end; i++) {
      for (let j = 0; j < pat.length; j++) if (pat[j] >= 0 && d[i + j] !== pat[j]) continue outer;
      return i;
    }
    return -1;
  }

  // 게임 코드 모양으로 각 표의 위치를 찾음
  locate() {
    const d = this.d;
    const a = this.find([0xE5, 0xC5, 0x21, -1, -1, 0x01, 0x0F, 0x00, 0xFA, -1, -1, 0xCD, -1, -1, 0x11, -1, -1, 0x01, 0x0F, 0x00, 0x3E, -1, 0xCD], 0, 0x4000);
    if (a < 0) return false;
    this.tilesetPtr = this.w(a + 3); this.tilesetBank = d[a + 21];
    const s = this.find([0xE5, 0x21, -1, -1, 0x3D, 0x4F, 0x06, 0x00, 0x3E, 0x06, 0xCD], 0x4000, d.length);
    this.spritePtr = 0;
    if (s >= 0) { this.spritePtr = this.w(s + 2); this.spriteBank = Math.floor(s / 0x4000); }
    const r = this.find([0xFA, -1, -1, 0x5F, 0x16, 0x00, 0x21, -1, -1, 0x19, 0x7E, 0xFE, 0xFF, 0xC8, 0x21, -1, -1, 0x01, 0x90, 0x00], 0x4000, d.length);
    this.groupRoofsPtr = 0;
    if (r >= 0) { this.groupRoofsPtr = this.w(r + 7); this.roofsPtr = this.w(r + 15); this.roofBank = Math.floor(r / 0x4000); }
    const p = this.find([0xFA, -1, -1, 0xE6, 0x07, 0x5F, 0x16, 0x00, 0x21, -1, -1, 0x19, 0x19, 0x2A, 0x66, 0x6F], 0x4000, d.length);
    if (p < 0) return false;
    this.palBank = Math.floor(p / 0x4000);
    this.envColorsPtr = this.w(p + 9);
    this.bgPalPtr = 0; this.roofPalPtr = 0; this.objPalPtr = 0;
    let de = 0;
    for (let i = p; i < p + 200; i++) {
      if (d[i] === 0x11 && d[i + 3] === 0x19) { if (de++ === 0) this.bgPalPtr = this.w(i + 1); else { this.roofPalPtr = this.w(i + 1); break; } }
      if (d[i] === 0x01 && d[i + 1] === 0x40 && d[i + 2] === 0x00 && d[i + 3] === 0x21) this.objPalPtr = this.w(i + 4);
    }
    return this.bgPalPtr !== 0;
  }

  static c555(c) {
    const r = c & 31, g = (c >> 5) & 31, b = (c >> 10) & 31;
    return (255 << 24) | (Math.floor(b * 255 / 31) << 16) | (Math.floor(g * 255 / 31) << 8) | Math.floor(r * 255 / 31);   // ABGR (캔버스 리틀엔디언)
  }
  readPal(off) { const p = []; for (let i = 0; i < 4; i++) p.push(MapRender.c555(this.w(off + i * 2))); return p; }

  // 2세대 LZ 압축 풀기
  decompress(p) {
    if (this.gfxCache.has(p)) return this.gfxCache.get(p);
    const d = this.d, start = p, o = [];
    while (p < d.length && o.length < 0x8000) {
      const c = d[p++];
      if (c === 0xFF) break;
      let cmd, len;
      if ((c & 0xE0) === 0xE0) { cmd = (c >> 2) & 7; len = (((c & 3) << 8) | d[p++]) + 1; }
      else { cmd = c >> 5; len = (c & 0x1F) + 1; }
      switch (cmd) {
        case 0: for (let i = 0; i < len; i++) o.push(d[p++]); break;
        case 1: { const b = d[p++]; for (let i = 0; i < len; i++) o.push(b); } break;
        case 2: { const b1 = d[p++], b2 = d[p++]; for (let i = 0; i < len; i++) o.push((i & 1) === 0 ? b1 : b2); } break;
        case 3: for (let i = 0; i < len; i++) o.push(0); break;
        default: {
          const b = d[p++];
          let src;
          if (b & 0x80) src = o.length - ((b & 0x7F) + 1);
          else src = (b << 8) | d[p++];
          for (let i = 0; i < len; i++) {
            const k = cmd === 6 ? src - i : src + i;
            let v = k >= 0 && k < o.length ? o[k] : 0;
            if (cmd === 5) { let x = v, y = 0; for (let bit = 0; bit < 8; bit++) { y = (y << 1) | (x & 1); x >>= 1; } v = y; }
            o.push(v);
          }
        }
      }
    }
    const arr = Uint8Array.from(o);
    this.gfxCache.set(start, arr);
    return arr;
  }

  prepare(a) {
    const d = this.d;
    const ts = this.off(this.tilesetBank, this.tilesetPtr + a.tileset * 15);
    const src = this.decompress(this.off(d[ts], this.w(ts + 1)));
    const gfx = new Uint8Array(Math.max(src.length, 0x80 * 16));
    gfx.set(src);
    // 지붕 타일 (조토 타일셋)
    if ((a.tileset === 1 || a.tileset === 2) && this.groupRoofsPtr) {
      const idx = d[this.off(this.roofBank, this.groupRoofsPtr + a.group)];
      if (idx !== 0xFF) gfx.set(d.subarray(this.off(this.roofBank, this.roofsPtr + idx * 0x90), this.off(this.roofBank, this.roofsPtr + idx * 0x90) + 0x90), 0x0A * 16);
    }
    const pals = [];
    const envTbl = this.off(this.palBank, this.w(this.off(this.palBank, this.envColorsPtr + (a.env & 7) * 2)) + 8);
    for (let i = 0; i < 8; i++) pals.push(this.readPal(this.off(this.palBank, this.bgPalPtr + d[envTbl + i] * 8)));
    if ((a.env === 1 || a.env === 2) && this.roofPalPtr) {
      const rp = this.off(this.palBank, this.roofPalPtr + a.group * 8);
      pals[6][1] = MapRender.c555(this.w(rp)); pals[6][2] = MapRender.c555(this.w(rp + 2));
    }
    return { gfx, meta: this.off(d[ts + 3], this.w(ts + 4)), palMap: this.off(this.palBank, this.w(ts + 13)), pals };
  }

  static drawTile(buf, stride, x0, y0, gfx, off, pal, transparent) {
    for (let y = 0; y < 8; y++) {
      const lo = off >= 0 && off + y * 2 + 1 < gfx.length ? gfx[off + y * 2] : 0;
      const hi = off >= 0 && off + y * 2 + 1 < gfx.length ? gfx[off + y * 2 + 1] : 0;
      for (let x = 0; x < 8; x++) {
        const ci = ((lo >> (7 - x)) & 1) | (((hi >> (7 - x)) & 1) << 1);
        if (transparent && ci === 0) continue;
        const px = x0 + x, py = y0 + y;
        if (px < 0 || py < 0 || px >= stride || py * stride + px >= buf.length) continue;
        buf[py * stride + px] = pal[ci];
      }
    }
  }

  drawBlock(buf, stride, x0, y0, p, blk) {
    const d = this.d;
    for (let ty = 0; ty < 4; ty++)
      for (let tx = 0; tx < 4; tx++) {
        const t = d[p.meta + blk * 16 + ty * 4 + tx];
        const pal = t < 0x80 ? (d[p.palMap + (t >> 1)] >> ((t & 1) * 4)) & 7 : 7;
        MapRender.drawTile(buf, stride, x0 + tx * 8, y0 + ty * 8, p.gfx, t < 0x80 ? t * 16 : -1, p.pals[pal], false);
      }
  }

  // 구역 지도 → ImageData (블록 32×32)
  renderMap(a) {
    if (!this.ok || !a.width || !a.height) return null;
    const p = this.prepare(a);
    const wpx = a.width * 32, hpx = a.height * 32;
    const img = new ImageData(wpx, hpx);
    const buf = new Uint32Array(img.data.buffer);
    const blocks = this.off(a.blocksBank, a.blocksAddr);
    for (let by = 0; by < a.height; by++)
      for (let bx = 0; bx < a.width; bx++)
        this.drawBlock(buf, wpx, bx * 32, by * 32, p, this.d[blocks + by * a.width + bx]);
    return img;
  }

  // NPC 정면 모습 16×16 → ImageData 또는 null
  renderSprite(sprite, palOverride) {
    if (!this.ok || !this.spritePtr || sprite < 1 || sprite >= 0x80) return null;
    const d = this.d;
    const e = this.off(this.spriteBank, this.spritePtr + (sprite - 1) * 6);
    const addr = this.w(e), bank = d[e + 3], defPal = d[e + 5];
    if (addr < 0x4000 || addr >= 0x8000 || bank === 0) return null;
    const g = this.off(bank, addr);
    if (g + 64 > d.length) return null;
    const pal = palOverride >= 0 ? palOverride : defPal;
    const colors = this.objPalPtr ? this.readPal(this.off(this.palBank, this.objPalPtr + 64 + (pal & 7) * 8)) : [0xffffffff, 0xffd3d3d3, 0xff808080, 0xff000000];
    const img = new ImageData(16, 16);
    const buf = new Uint32Array(img.data.buffer);
    const bytes = d.subarray(g, g + 64);
    MapRender.drawTile(buf, 16, 0, 0, bytes, 0, colors, true);
    MapRender.drawTile(buf, 16, 8, 0, bytes, 16, colors, true);
    MapRender.drawTile(buf, 16, 0, 8, bytes, 32, colors, true);
    MapRender.drawTile(buf, 16, 8, 8, bytes, 48, colors, true);
    return img;
  }
}

// ===== 40-music.js
// ================================================================ 원곡 BGM (RomMusic.cs 와 같음: 금·은 사운드 엔진을 프레임 단위로 흉내)
const RomMusic = (() => {
  const SAMPLE_RATE = 22050, FRAME_RATE = 4194304 / 70224;
  const DUTY = [0.125, 0.25, 0.5, 0.75];
  const BACKUP_SIG = [...'GSC-ORIG-MUSIC1'].map(c => c.charCodeAt(0));
  const W = (d, o) => d[o] | (d[o + 1] << 8);
  const Off = (bank, addr) => bank * 0x4000 + (addr & 0x3FFF);
  const cache = new WeakMap();

  // 롬 안의 표 찾기
  function find(d) {
    if (cache.has(d)) return cache.get(d);
    let t = null;
    const sig = [0x00, 0x00, 0x2C, 0xF8, 0x9D, 0xF8, 0x07, 0xF9];
    let freq = -1;
    outer: for (let i = 0; i + sig.length < d.length; i++) {
      for (let k = 0; k < sig.length; k++) if (d[i + k] !== sig[k]) continue outer;
      freq = i; break;
    }
    if (freq >= 0) {
      const bank = Math.floor(freq / 0x4000);
      t = { freq, wave: freq + 50, drumkits: 0, music: 0, count: 0 };
      for (let p = t.wave; p < t.wave + 0x200; p++) if (W(d, p) === 0x4000 + (p & 0x3FFF) + 12) { t.drumkits = p; break; }
      const bs = bank * 0x4000;
      for (let h = bs; h < bs + 0x4000 - 12 && !t.music; h++) {
        if (d[h] !== 0xC0 || d[h + 3] !== 0x01 || d[h + 6] !== 0x02 || d[h + 9] !== 0x03) continue;
        const a = W(d, h + 1);
        if (a < 0x4000 || a >= 0x8000 || W(d, h + 4) !== a || W(d, h + 7) !== a || W(d, h + 10) !== a) continue;
        if (d[Off(bank, a)] !== 0xFF) continue;
        const addr = 0x4000 + (h & 0x3FFF);
        for (let p = bs; p < bs + 0x4000 - 3; p++) if (d[p] === bank && W(d, p + 1) === addr) { t.music = p; break; }
      }
      if (!t.music) t = null;
      else
        while (t.count < SONG_NAMES.length) {
          const e = t.music + t.count * 3, b = d[e], a = W(d, e + 1);
          if (b < 1 || b >= d.length / 0x4000 || a < 0x4000 || a >= 0x8000) break;
          if ((d[Off(b, a)] & 0x3C) !== 0) break;
          t.count++;
        }
    }
    cache.set(d, t);
    return t;
  }

  function songCount(d) { const t = find(d); return t ? t.count : 0; }
  function songOffset(d, id) { const t = find(d); if (!t || id < 0 || id >= t.count) return -1; const e = t.music + id * 3; return Off(d[e], W(d, e + 1)); }

  // 곡 번호를 바꿨어도 처음 원곡: 롬 안 백업 표 → 없으면 한글판 금 원본 표로 짐작
  function findBackup(d) {
    outer: for (let i = 0; i + BACKUP_SIG.length < d.length; i++) {
      if (d[i] !== BACKUP_SIG[0]) continue;
      for (let k = 1; k < BACKUP_SIG.length; k++) if (d[i + k] !== BACKUP_SIG[k]) continue outer;
      return i + BACKUP_SIG.length;
    }
    return -1;
  }
  const origCache = new WeakMap();
  function originalOffset(d, id) {
    const t = find(d);
    if (!t || id < 0 || id >= t.count) return songOffset(d, id);
    if (!origCache.has(d)) {
      const res = d.slice(t.music, t.music + t.count * 3);
      const b = findBackup(d);
      if (b >= 0) res.set(d.subarray(b, b + t.count * 3));
      else {
        const v = []; for (let i = 0; i < VANILLA_MUSIC_TABLE.length; i += 2) v.push(parseInt(VANILLA_MUSIC_TABLE.substr(i, 2), 16));
        const n = Math.min(t.count, v.length / 3);
        let same = 0;
        for (let i = 0; i < n; i++) if (res[i * 3] === v[i * 3] && res[i * 3 + 1] === v[i * 3 + 1] && res[i * 3 + 2] === v[i * 3 + 2]) same++;
        if (same >= n * 0.6)
          for (let i = 1; i < n; i++) {
            const off = Off(v[i * 3], v[i * 3 + 1] | (v[i * 3 + 2] << 8));
            if (off + 3 >= d.length || (d[off] & 0x3C) !== 0) continue;
            const ptr = W(d, off + 1);
            if (ptr < 0x4000 || ptr >= 0x8000) continue;
            res[i * 3] = v[i * 3]; res[i * 3 + 1] = v[i * 3 + 1]; res[i * 3 + 2] = v[i * 3 + 2];
          }
      }
      origCache.set(d, res);
    }
    const r = origCache.get(d);
    return Off(r[id * 3], r[id * 3 + 1] | (r[id * 3 + 2] << 8));
  }
  function isReplaced(d, id) { return originalOffset(d, id) !== songOffset(d, id); }

  function newChan(i, bank) {
    return { index: i, bank, pc: 0, active: false, done: false, noteLength: 1, envelope: 0, duty: 0, dutyPattern: 0, octave: 0, transpose: 0, pitchOffset: 0,
      dutyLoop: false, noise: false, vibDelay: 0, vibUp: 0, vibDown: 0, vibRate: 0, vibDelayCnt: 0, vibRateCnt: 0, vibDir: false,
      looping: false, loopCount: 0, inSub: false, ret: 0, condition: 0, tempo: 0x100, frac: 0, duration: 0,
      rest: true, baseFreq: 0, freq: 0, phase: 0, vol: 0, envPeriod: 0, envUp: false, envTimer: 0, waveIdx: 0, waveVol: 0,
      lfsr: 0x7FFF, nr43: 0, noiseClock: 0, drumPtr: -1, drumDelay: 0, seen: new Map(), loopJumpFrame: -1, loopTargetFrame: -1, endFrame: -1 };
  }

  // 곡 합성 → { samples: Float32Array (22050Hz), loopEndFrame, seconds }
  function render(d, songId, mute, maxSeconds, original) {
    const t = find(d);
    if (!t || songId < 0 || songId >= t.count) return null;
    const hdr = original ? originalOffset(d, songId) : songOffset(d, songId);
    if (hdr < 0) return null;
    const bank = Math.floor(hdr / 0x4000);
    const ch = [0, 1, 2, 3].map(i => newChan(i, bank));
    const n = (d[hdr] >> 6) + 1;
    for (let i = 0; i < n; i++) { const id = d[hdr + i * 3] & 3; ch[id].pc = W(d, hdr + i * 3 + 1); ch[id].active = true; }
    const st = { masterVol: 0x77, noiseSet: 0 };
    const maxFrames = Math.floor((maxSeconds || 240) * FRAME_RATE);
    let stopFrame = maxFrames, loopEndFrame = 0;
    const out = new Float32Array(Math.ceil(maxFrames * SAMPLE_RATE / FRAME_RATE) + 1000);
    let ns = 0, acc = 0, hpIn = 0, hpOut = 0;
    const spf = SAMPLE_RATE / FRAME_RATE;

    const getByte = c => { const b = d[Off(c.bank, c.pc)]; c.pc++; return b; };
    const jump = (c, target, frame) => {
      if (c.loopJumpFrame < 0 && c.seen.has(target)) { c.loopJumpFrame = frame; c.loopTargetFrame = c.seen.get(target); }
      c.pc = target;
    };
    const getFrequency = (c, pitch) => {
      let oct = ((c.transpose >> 4) & 0xF) + c.octave;
      const idx = (c.transpose & 0xF) + pitch;
      let f = W(d, t.freq + idx * 2); if (f & 0x8000) f -= 0x10000;
      while (oct < 7) { f >>= 1; oct++; }
      return f & 0x7FF;
    };
    const startDrum = (c, idx) => {
      if (!t.drumkits) return;
      const b = Math.floor(t.drumkits / 0x4000);
      const kit = W(d, t.drumkits + (st.noiseSet & 0xF) * 2);
      c.drumPtr = Off(b, W(d, Off(b, kit) + idx * 2));
      c.drumDelay = 0; c.rest = false;
    };
    const parse = (c, frame) => {
      for (let guard = 0; guard < 4000; guard++) {
        const at = c.pc;
        if (!c.seen.has(at)) c.seen.set(at, frame);
        const cmd = getByte(c);
        if (cmd < 0xD0) {
          const pitch = cmd >> 4, len = (cmd & 0xF) + 1;
          const a = (len * c.noteLength) & 0xFF;
          const r = a * c.tempo + c.frac;
          c.frac = r & 0xFF; c.duration = (r >> 8) & 0xFF;
          if (pitch === 0) { c.rest = true; return; }
          if (c.index === 3) startDrum(c, pitch);
          else {
            c.baseFreq = (getFrequency(c, pitch) + c.pitchOffset) & 0x7FF;
            c.freq = c.baseFreq; c.rest = false;
            c.vibDelayCnt = c.vibDelay; c.vibRateCnt = c.vibRate;
            if (c.index === 2) { c.waveIdx = c.envelope & 0xF; c.waveVol = (c.envelope >> 4) & 3; c.phase = 0; }
            else { c.vol = c.envelope >> 4; c.envUp = (c.envelope & 8) !== 0; c.envPeriod = c.envelope & 7; c.envTimer = 0; }
          }
          return;
        }
        switch (cmd) {
          case 0xD0: case 0xD1: case 0xD2: case 0xD3: case 0xD4: case 0xD5: case 0xD6: case 0xD7: c.octave = cmd & 7; break;
          case 0xD8: c.noteLength = getByte(c); if (c.index !== 3) c.envelope = getByte(c); break;
          case 0xD9: c.transpose = getByte(c); break;
          case 0xDA: { const hi = getByte(c), lo = getByte(c); for (const o of ch) { o.tempo = (hi << 8) | lo; o.frac = 0; } break; }
          case 0xDB: c.duty = getByte(c) & 3; c.dutyLoop = false; break;
          case 0xDC: c.envelope = getByte(c); break;
          case 0xDD: getByte(c); break;
          case 0xDE: c.dutyPattern = getByte(c); c.dutyLoop = true; break;
          case 0xDF: break;
          case 0xE0: getByte(c); getByte(c); break;
          case 0xE1: { c.vibDelay = getByte(c); const x = getByte(c), ext = x >> 4; c.vibUp = (ext + 1) >> 1; c.vibDown = ext >> 1; c.vibRate = x & 0xF; break; }
          case 0xE2: getByte(c); break;
          case 0xE3: if (c.noise) c.noise = false; else { c.noise = true; st.noiseSet = getByte(c); } break;
          case 0xE4: getByte(c); break;
          case 0xE5: st.masterVol = getByte(c); break;
          case 0xE6: { const hi = getByte(c), lo = getByte(c); c.pitchOffset = (hi << 8) | lo; break; }
          case 0xE7: case 0xE8: getByte(c); break;
          case 0xE9: { let x = getByte(c); if (x & 0x80) x -= 256; for (const o of ch) o.tempo = (o.tempo + x) & 0xFFFF; break; }
          case 0xEA: case 0xEB: case 0xEE: getByte(c); getByte(c); break;
          case 0xEC: case 0xED: break;
          case 0xEF: case 0xF0: getByte(c); break;
          case 0xFA: c.condition = getByte(c); break;
          case 0xFB: { const cond = getByte(c), lo = getByte(c), hi = getByte(c); if (cond === c.condition) c.pc = lo | (hi << 8); break; }
          case 0xFC: { const lo = getByte(c), hi = getByte(c); jump(c, lo | (hi << 8), frame); break; }
          case 0xFD: {
            const count = getByte(c), lo = getByte(c), hi = getByte(c), target = lo | (hi << 8);
            if (!c.looping) { if (count === 0) { jump(c, target, frame); break; } c.looping = true; c.loopCount = count - 1; }
            if (c.loopCount === 0) { c.looping = false; break; }
            c.loopCount--; c.pc = target; break;
          }
          case 0xFE: { const lo = getByte(c), hi = getByte(c); c.ret = c.pc; c.inSub = true; c.pc = lo | (hi << 8); break; }
          case 0xFF: if (c.inSub) { c.inSub = false; c.pc = c.ret; } else { c.done = true; return; } break;
        }
      }
      c.done = true;
    };
    const effects = c => {
      if (c.index === 3 && c.drumPtr >= 0) {
        if (c.drumDelay > 0) c.drumDelay--;
        else {
          const b = d[c.drumPtr];
          if (b === 0xFF) c.drumPtr = -1;
          else {
            c.drumDelay = (b & 0xF) + 1;
            const env = d[c.drumPtr + 1];
            c.nr43 = d[c.drumPtr + 2]; c.drumPtr += 3;
            c.vol = env >> 4; c.envUp = (env & 8) !== 0; c.envPeriod = env & 7; c.envTimer = 0;
            c.lfsr = 0x7FFF; c.rest = false;
          }
        }
      }
      if (c.index === 3 || c.rest) return;
      if (c.dutyLoop && c.index < 2) { c.dutyPattern = ((c.dutyPattern << 2) | (c.dutyPattern >> 6)) & 0xFF; c.duty = c.dutyPattern >> 6; }
      if (c.vibDelayCnt > 0) { c.vibDelayCnt--; return; }
      if (c.vibUp === 0 && c.vibDown === 0) return;
      if (c.vibRateCnt > 0) { c.vibRateCnt--; return; }
      c.vibRateCnt = c.vibRate; c.vibDir = !c.vibDir;
      let lo = c.baseFreq & 0xFF;
      lo = c.vibDir ? Math.min(0xFF, lo + c.vibUp) : Math.max(0, lo - c.vibDown);
      c.freq = (c.baseFreq & 0x700) | lo;
    };
    const stepEnv = c => {
      if (c.envPeriod === 0) return;
      c.envTimer += 1;
      const step = c.envPeriod * SAMPLE_RATE / 64;
      if (c.envTimer < step) return;
      c.envTimer -= step;
      if (c.envUp) { if (c.vol < 15) c.vol++; } else if (c.vol > 0) c.vol--;
    };
    const sample = c => {
      if (!c.active || c.rest) return 0;
      if (c.index === 2) {
        if (c.waveVol === 0) return 0;
        c.phase += 65536 / (2048 - c.freq) / SAMPLE_RATE; c.phase -= Math.floor(c.phase);
        const pos = Math.floor(c.phase * 32) & 31;
        const b = d[t.wave + c.waveIdx * 16 + (pos >> 1)];
        const nib = (pos & 1) === 0 ? b >> 4 : b & 0xF;
        return nib >> (c.waveVol - 1);
      }
      stepEnv(c);
      if (c.index === 3) {
        const s = c.nr43 >> 4, r = c.nr43 & 7;
        c.noiseClock += 524288 / (r === 0 ? 0.5 : r) / Math.pow(2, s + 1) / SAMPLE_RATE;
        let steps = 0;
        while (c.noiseClock >= 1 && steps++ < 4096) {
          c.noiseClock -= 1;
          const bit = (c.lfsr ^ (c.lfsr >> 1)) & 1;
          c.lfsr = (c.lfsr >> 1) | (bit << 14);
          if (c.nr43 & 8) c.lfsr = (c.lfsr & ~0x40) | (bit << 6);
        }
        if (c.noiseClock >= 1) c.noiseClock = 0;
        return (c.lfsr & 1) === 0 ? c.vol : 0;
      }
      c.phase += 131072 / (2048 - c.freq) / SAMPLE_RATE; c.phase -= Math.floor(c.phase);
      return c.phase < DUTY[c.duty & 3] ? c.vol : 0;
    };

    for (let frame = 0; frame < stopFrame; frame++) {
      for (const c of ch) {
        if (!c.active || c.done) continue;
        if (c.duration > 1) c.duration--; else parse(c, frame);
        if (c.done) { c.rest = true; if (c.endFrame < 0) c.endFrame = frame; continue; }
        effects(c);
      }
      if (stopFrame === maxFrames) {
        let all = true, jmp = 0, len = 0;
        for (const c of ch) {
          if (!c.active) continue;
          if (c.done) { jmp = Math.max(jmp, c.endFrame); continue; }
          if (c.loopJumpFrame < 0) { all = false; break; }
          jmp = Math.max(jmp, c.loopJumpFrame); len = Math.max(len, c.loopJumpFrame - c.loopTargetFrame);
        }
        if (all) { loopEndFrame = jmp; stopFrame = Math.min(maxFrames, Math.max(frame + 1, jmp + len + (len === 0 ? Math.floor(FRAME_RATE) : 0))); }
      }
      acc += spf;
      const count = Math.floor(acc); acc -= count;
      const master = (((st.masterVol >> 4) & 7) + (st.masterVol & 7) + 2) / 16;
      for (let s = 0; s < count; s++) {
        let mix = 0;
        for (let i = 0; i < 4; i++) { const v = sample(ch[i]); if (!mute || !mute[i]) mix += v; }
        const y = mix - hpIn + 0.996 * hpOut;
        hpIn = mix; hpOut = y;
        out[ns++] = Math.max(-1, Math.min(1, y * 680 * master / 32768));
      }
    }
    return { samples: out.subarray(0, ns), loopEndFrame: loopEndFrame || stopFrame, seconds: ns / SAMPLE_RATE };
  }

  const name = id => id >= 0 && id < SONG_NAMES.length ? SONG_NAMES[id] : '곡 0x' + hex2(id);
  return { SAMPLE_RATE, songCount, render, name, isReplaced, groups: SONG_GROUPS };
})();

// 브라우저에서 곡 재생 (한 번에 하나)
const Player = {
  ctx: null, src: null, onEnd: null,
  play(samples) {
    this.stop();
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    const buf = this.ctx.createBuffer(1, samples.length, RomMusic.SAMPLE_RATE);
    buf.copyToChannel(samples, 0);
    const s = this.ctx.createBufferSource();
    s.buffer = buf; s.loop = true; s.connect(this.ctx.destination); s.start();
    this.src = s;
  },
  stop() { if (this.src) { try { this.src.stop(); } catch (e) { } this.src = null; } }
};

// ===== 90-ui.js
// ================================================================ 화면 (블로그 글 안의 <div id="gsc-tool"> 에 붙음)
const CSS = `
.gsc{--bg:#f7f8fb;--panel:#fff;--line:#d9dde6;--ink:#1d2330;--sub:#667085;--accent:#2f6fec;--accent-ink:#fff;--warn:#c0392b;--ok:#1e874b;--hl:#fff3b0;
  font:14px/1.5 "Malgun Gothic","Apple SD Gothic Neo",sans-serif;color:var(--ink);background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:12px;box-sizing:border-box;max-width:100%;overflow:hidden}
.gsc *{box-sizing:border-box}
.gsc h2{margin:0;font-size:18px}
.gsc .top{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:10px}
.gsc .top .sp{flex:1}
.gsc button,.gsc .btn{font:inherit;border:1px solid var(--line);background:var(--panel);color:var(--ink);border-radius:6px;padding:5px 12px;cursor:pointer}
.gsc button:hover,.gsc .btn:hover{border-color:var(--accent)}
.gsc button.pri,.gsc .btn.pri{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}
.gsc button:disabled{opacity:.45;cursor:default}
.gsc input[type=search],.gsc select,.gsc textarea{font:inherit;border:1px solid var(--line);border-radius:6px;padding:5px 8px;background:var(--panel);color:var(--ink);width:100%}
.gsc .drop{border:2px dashed var(--line);border-radius:10px;padding:40px 16px;text-align:center;color:var(--sub);background:var(--panel)}
.gsc .drop.over{border-color:var(--accent);background:#eef3ff}
.gsc .drop b{color:var(--ink);font-size:16px}
.gsc .tabs{display:flex;gap:4px;border-bottom:1px solid var(--line);margin-bottom:10px}
.gsc .tabs button{border:none;border-bottom:3px solid transparent;border-radius:0;background:none;padding:6px 12px}
.gsc .tabs button.on{border-bottom-color:var(--accent);font-weight:bold}
.gsc .cols{display:grid;grid-template-columns:230px minmax(0,1fr) 320px;grid-template-areas:"tree map text";gap:10px;min-height:520px}
.gsc .c-tree{grid-area:tree}.gsc .c-map{grid-area:map}.gsc .c-text{grid-area:text}
.gsc.w-mid .cols{grid-template-columns:200px minmax(0,1fr);grid-template-areas:"map map" "tree text";min-height:0}
.gsc.w-mid .tree,.gsc.w-mid .texts{max-height:420px}
.gsc.w-mid .mapwrap{max-height:480px}
.gsc.w-narrow .cols{grid-template-columns:minmax(0,1fr);grid-template-areas:"tree" "map" "text";min-height:0}
.gsc.w-narrow .tree,.gsc.w-narrow .texts{max-height:300px}
.gsc.w-narrow .mapwrap{max-height:380px}
.gsc .box{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:8px;min-width:0;display:flex;flex-direction:column}
.gsc .tree{overflow:auto;flex:1;max-height:600px;margin-top:6px}
.gsc .tree details summary{cursor:pointer;padding:2px 0;font-weight:bold}
.gsc .tree .it{padding:2px 6px 2px 16px;cursor:pointer;border-radius:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.gsc .tree .it:hover{background:var(--bg)}
.gsc .tree .it.on{background:var(--accent);color:var(--accent-ink)}
.gsc .mapwrap{overflow:auto;flex:1;max-height:600px;background:#222;border-radius:6px}
.gsc canvas{image-rendering:pixelated;image-rendering:crisp-edges;display:block;cursor:pointer}
.gsc .hint{color:var(--sub);font-size:12px}
.gsc .owners{display:flex;flex-wrap:wrap;gap:4px;margin:6px 0}
.gsc .owners button{padding:2px 8px;font-size:12px}
.gsc .owners button.on{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}
.gsc .texts{overflow:auto;flex:1;max-height:520px}
.gsc .tx{margin-bottom:10px}
.gsc .tx .note{font-size:12px;color:var(--sub)}
.gsc .tx textarea{min-height:70px;resize:vertical}
.gsc .tx.mod textarea{border-color:var(--ok);background:#f2fbf5}
.gsc .tx .err{color:var(--warn);font-size:12px}
.gsc .status{margin-top:8px;font-size:12px;color:var(--sub);min-height:18px}
.gsc .songs{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:4px}
.gsc .song{display:flex;align-items:center;gap:6px;padding:4px 6px;border:1px solid var(--line);border-radius:6px;background:var(--panel);cursor:pointer;font-size:13px}
.gsc .song.on{border-color:var(--accent);background:#eef3ff}
.gsc .song .n{color:var(--sub);font-size:11px;width:28px}
.gsc .song .chg{color:var(--warn);font-size:11px}
.gsc .grp{margin:10px 0 4px;font-weight:bold}
.gsc .bar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:8px}
.gsc .bar select{width:auto;max-width:260px}
.gsc.gsc-full{position:fixed;inset:0;z-index:2147483000;max-width:none;border-radius:0;border:none;overflow:auto;margin:0}
.gsc.gsc-full .tree,.gsc.gsc-full .texts{max-height:calc(100vh - 190px)}
.gsc.gsc-full .mapwrap{max-height:calc(100vh - 240px)}
.gsc .credit{margin-top:10px;font-size:11px;color:var(--sub);text-align:right}
`;

function el(tag, attrs, ...kids) {
  const e = document.createElement(tag);
  if (attrs) for (const k in attrs) {
    if (k === 'class') e.className = attrs[k];
    else if (k === 'text') e.textContent = attrs[k];
    else if (k.startsWith('on')) e.addEventListener(k.substring(2), attrs[k]);
    else e.setAttribute(k, attrs[k]);
  }
  for (const c of kids) if (c != null) e.append(c);
  return e;
}

class App {
  constructor(host) {
    this.host = host;
    this.rom = null; this.area = null; this.owner = null; this.tab = 'map'; this.scale = 2;
    this.spriteCache = new Map();
    if (!document.getElementById('gsc-style')) document.head.append(el('style', { id: 'gsc-style', text: CSS }));
    host.classList.add('gsc');
    // 화면 크기가 아니라 블로그 글 칸 너비에 맞춰 배치를 바꿈
    const fit = () => {
      const w = host.clientWidth;
      host.classList.toggle('w-mid', w < 1000 && w >= 560);
      host.classList.toggle('w-narrow', w < 560);
    };
    fit();
    if (window.ResizeObserver) new ResizeObserver(fit).observe(host); else window.addEventListener('resize', fit);
    this.showOpen();
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && host.classList.contains('gsc-full')) this.toggleFull(); });
    window.addEventListener('beforeunload', e => { if (this.rom && this.rom.hasChanges) { e.preventDefault(); e.returnValue = ''; } });
  }

  // ---------------------------------------------------------------- 롬 열기
  showOpen(msg) {
    const file = el('input', { type: 'file', accept: '.gbc,.gb', style: 'display:none', onchange: () => file.files[0] && this.load(file.files[0]) });
    const drop = el('div', { class: 'drop' },
      el('b', { text: '포켓몬 금·은 (한글판) 롬 파일을 여기에 끌어다 놓거나' }), el('br'),
      el('button', { class: 'pri', style: 'margin:10px 0', text: '롬 파일 고르기', onclick: () => file.click() }), el('br'),
      el('span', { text: '롬 파일은 내 컴퓨터(브라우저) 안에서만 열려요. 어디에도 올라가지 않아요.' }),
      msg ? el('div', { style: 'color:var(--warn);margin-top:10px', text: msg }) : null, file);
    drop.addEventListener('dragover', e => { e.preventDefault(); drop.classList.add('over'); });
    drop.addEventListener('dragleave', () => drop.classList.remove('over'));
    drop.addEventListener('drop', e => { e.preventDefault(); drop.classList.remove('over'); if (e.dataTransfer.files[0]) this.load(e.dataTransfer.files[0]); });
    this.host.replaceChildren(el('div', { class: 'top' }, el('h2', { text: '포켓몬 금은 올인원 툴' }), el('span', { class: 'sp' }), this.fullBtn()), drop, this.credit());
  }

  // 블로그 글 칸이 좁으니 창 전체로 펼치기 (Esc 로 돌아옴)
  fullBtn() {
    const on = this.host.classList.contains('gsc-full');
    return el('button', { class: 'gsc-fullbtn', text: on ? '✕ 원래 크기로' : '⛶ 넓게 보기', title: on ? 'Esc 키로도 돌아와요' : '창 전체로 크게 열어요', onclick: () => this.toggleFull() });
  }
  toggleFull() {
    const on = this.host.classList.toggle('gsc-full');
    document.documentElement.style.overflow = on ? 'hidden' : '';
    // 테마의 transform 등에 갇히지 않게 펼칠 땐 body 바로 아래로 옮김
    if (on) { this.home = document.createComment('gsc-tool'); this.host.before(this.home); document.body.append(this.host); }
    else if (this.home) { this.home.replaceWith(this.host); this.home = null; }
    for (const b of this.host.querySelectorAll('.gsc-fullbtn')) b.replaceWith(this.fullBtn());
    if (!on) this.host.scrollIntoView({ block: 'start' });
    if (this.area && this.tab === 'map') this.drawMap();
  }

  credit() { return el('div', { class: 'credit', text: '포켓몬스터는 Nintendo·Creatures·GAME FREAK 의 상표예요. 이 도구는 비공식 팬 도구이고 롬 파일은 직접 가진 것을 써 주세요.' }); }

  load(f) {
    const r = new FileReader();
    r.onload = () => {
      try {
        const rom = new Rom(new Uint8Array(r.result), f.name);
        this.rom = rom; this.area = null; this.owner = null; this.spriteCache.clear();
        this.build();
        const first = rom.allAreas.find(a => a.name.indexOf('연두') >= 0) || rom.allAreas[0];
        if (first) this.selectArea(first);
        if (/CRYSTAL/i.test(rom.title)) this.say('⚠ 크리스탈 롬이에요. 이 툴은 금·은 (한글판) 전용이라 지도·대사·음악이 틀리게 보이거나 저장하면 망가질 수 있어요.', true);
      } catch (e) { console.error(e); this.showOpen(e.message || String(e)); }
    };
    r.readAsArrayBuffer(f);
  }

  // ---------------------------------------------------------------- 큰 틀
  build() {
    const rom = this.rom;
    this.saveBtn = el('button', { class: 'pri', text: '💾 고친 롬 내려받기', onclick: () => this.save() });
    const top = el('div', { class: 'top' },
      el('h2', { text: '포켓몬 금은 올인원 툴' }),
      el('span', { class: 'hint', text: rom.fileName + ' · ' + rom.title }),
      el('span', { class: 'sp' }),
      this.fullBtn(),
      el('button', { text: '다른 롬 열기', onclick: () => { if (!rom.hasChanges || confirm('고친 내용을 내려받지 않았어요. 그래도 다른 롬을 열까요?')) { Player.stop(); this.showOpen(); } } }),
      this.saveBtn);
    this.tabBtns = {};
    const tabs = el('div', { class: 'tabs' });
    for (const [k, label] of [['map', '🗺 지도 · 대사'], ['music', '🎵 배경음악'], ['find', '🔍 대사 찾기']]) {
      const b = el('button', { text: label, onclick: () => this.setTab(k) });
      this.tabBtns[k] = b; tabs.append(b);
    }
    this.body = el('div');
    this.status = el('div', { class: 'status' });
    this.host.replaceChildren(top, tabs, this.body, this.status, this.credit());
    this.buildMapTab();
    this.setTab('map');
  }

  setTab(k) {
    this.tab = k;
    for (const t in this.tabBtns) this.tabBtns[t].classList.toggle('on', t === k);
    Player.stop();
    if (k === 'map') { this.body.replaceChildren(this.mapTab); if (this.area) this.drawMap(); }
    else if (k === 'music') this.body.replaceChildren(this.buildMusicTab());
    else this.body.replaceChildren(this.buildFindTab());
  }

  say(s, bad) { this.status.textContent = s; this.status.style.color = bad ? 'var(--warn)' : ''; }

  // ---------------------------------------------------------------- 지도 · 대사 탭
  buildMapTab() {
    const search = el('input', { type: 'search', placeholder: '장소 이름 찾기 (예: 연두, 체육관)' });
    this.tree = el('div', { class: 'tree' });
    search.addEventListener('input', () => this.fillTree(search.value.trim()));
    this.canvas = el('canvas');
    this.canvas.addEventListener('click', e => this.mapClick(e));
    this.areaTitle = el('div', { style: 'font-weight:bold' });
    this.musicLine = el('div', { class: 'bar' });
    const zoom = el('select', { onchange: () => { this.scale = +zoom.value; this.drawMap(); } },
      ...[1, 2, 3].map(z => { const o = el('option', { value: z, text: z + '배' }); if (z === this.scale) o.selected = true; return o; }));
    this.ownerBar = el('div', { class: 'owners' });
    this.textBox = el('div', { class: 'texts' });
    this.mapTab = el('div', { class: 'cols' },
      el('div', { class: 'box c-tree' }, search, this.tree),
      el('div', { class: 'box c-map' },
        el('div', { class: 'bar' }, this.areaTitle, el('span', { class: 'sp', style: 'flex:1' }), el('span', { class: 'hint', text: '확대' }), zoom),
        el('div', { class: 'mapwrap' }, this.canvas),
        el('div', { class: 'hint', text: '지도에서 사람이나 표지판(!)을 누르면 그 대사가 오른쪽에 나와요. 흐린 사람은 대사가 없는 NPC예요.' }),
        this.musicLine),
      el('div', { class: 'box c-text' }, this.ownerBar, this.textBox));
    this.fillTree('');
  }

  fillTree(q) {
    this.tree.replaceChildren();
    this.treeItems = new Map();
    for (const reg of this.rom.regions) {
      const areas = q ? reg.areas.filter(a => a.name.indexOf(q) >= 0 || reg.name.indexOf(q) >= 0) : reg.areas;
      if (!areas.length) continue;
      const det = el('details', null, el('summary', { text: reg.name + ' (' + areas.length + ')' }));
      if (q || (this.area && areas.includes(this.area))) det.open = true;
      for (const a of areas) {
        const it = el('div', { class: 'it' + (a === this.area ? ' on' : ''), text: a.name, title: a.name + ' (' + a.group + '-' + a.map + ')', onclick: () => this.selectArea(a) });
        this.treeItems.set(a, it);
        det.append(it);
      }
      this.tree.append(det);
    }
  }

  selectArea(a, owner) {
    if (this.area && this.treeItems.get(this.area)) this.treeItems.get(this.area).classList.remove('on');
    this.area = a;
    const it = this.treeItems.get(a);
    if (it) { it.classList.add('on'); it.parentElement.open = true; it.scrollIntoView({ block: 'nearest' }); }
    this.areaTitle.textContent = a.regionName + ' › ' + a.name;
    this.owner = owner || a.owners.find(o => o.texts.length) || null;
    if (this.tab !== 'map') this.setTab('map');
    this.drawMap();
    this.fillOwners();
    this.fillMusicLine();
  }

  spriteImg(sprite, pal) {
    const k = sprite * 16 + (pal + 1);
    if (!this.spriteCache.has(k)) {
      const img = this.rom.gfx.renderSprite(sprite, pal);
      let c = null;
      if (img) { c = document.createElement('canvas'); c.width = 16; c.height = 16; c.getContext('2d').putImageData(img, 0, 0); }
      this.spriteCache.set(k, c);
    }
    return this.spriteCache.get(k);
  }

  drawMap() {
    const a = this.area; if (!a) return;
    const img = this.rom.gfx.renderMap(a);
    const s = this.scale, cv = this.canvas;
    if (!img) { cv.width = 320; cv.height = 60; const g = cv.getContext('2d'); g.fillStyle = '#fff'; g.fillText('이 구역 지도는 그릴 수 없어요', 10, 30); return; }
    cv.width = img.width * s; cv.height = img.height * s;
    const g = cv.getContext('2d');
    g.imageSmoothingEnabled = false;
    const base = document.createElement('canvas'); base.width = img.width; base.height = img.height;
    base.getContext('2d').putImageData(img, 0, 0);
    g.drawImage(base, 0, 0, cv.width, cv.height);
    const T = 16 * s;
    const drawObj = (o, faded) => {
      if (o.x < 0 || o.y < 0) return;
      g.globalAlpha = faded ? 0.45 : 1;
      if (o.isSign) {
        g.fillStyle = 'rgba(255,200,0,.85)'; g.fillRect(o.x * T + T * 0.3, o.y * T + T * 0.1, T * 0.4, T * 0.8);
        g.fillStyle = '#000'; g.font = 'bold ' + (10 * s) + 'px sans-serif'; g.textAlign = 'center'; g.fillText('!', o.x * T + T / 2, o.y * T + T * 0.75);
      } else {
        const sp = this.spriteImg(o.sprite, o.pal);
        if (sp) g.drawImage(sp, o.x * T, o.y * T, T, T);
        else { g.fillStyle = '#e55'; g.fillRect(o.x * T + 2, o.y * T + 2, T - 4, T - 4); }
      }
      g.globalAlpha = 1;
      if (o === this.owner) { g.strokeStyle = '#ff2'; g.lineWidth = 2; g.strokeRect(o.x * T + 1, o.y * T + 1, T - 2, T - 2); }
    };
    for (const o of a.extras) drawObj(o, true);
    for (const o of a.owners) drawObj(o, false);
    if (this.owner && this.owner.x >= 0) {
      const wrap = cv.parentElement, x = this.owner.x * T, y = this.owner.y * T;
      if (x < wrap.scrollLeft || x > wrap.scrollLeft + wrap.clientWidth - T || y < wrap.scrollTop || y > wrap.scrollTop + wrap.clientHeight - T) {
        wrap.scrollLeft = x - wrap.clientWidth / 2; wrap.scrollTop = y - wrap.clientHeight / 2;
      }
    }
  }

  mapClick(e) {
    const r = this.canvas.getBoundingClientRect();
    const T = 16 * this.scale * (r.width / this.canvas.width);
    const x = Math.floor((e.clientX - r.left) / T), y = Math.floor((e.clientY - r.top) / T);
    const hit = this.area.owners.find(o => o.x === x && o.y === y) || this.area.extras.find(o => o.x === x && o.y === y);
    if (!hit) { this.say('(' + x + ', ' + y + ') 칸 — 여기엔 사람이나 표지판이 없어요'); return; }
    this.owner = hit;
    this.drawMap(); this.fillOwners();
    this.say(hit.name + ' (' + x + ', ' + y + ')' + (hit.texts.length ? '' : ' — 대사가 없는 NPC예요'));
  }

  fillOwners() {
    this.ownerBar.replaceChildren();
    for (const o of this.area.owners) {
      if (!o.texts.length) continue;
      const b = el('button', { class: o === this.owner ? 'on' : '', text: o.name + (o.texts.some(t => t.modified) ? ' ✎' : ''),
        onclick: () => { this.owner = o; this.drawMap(); this.fillOwners(); } });
      this.ownerBar.append(b);
    }
    this.fillTexts();
  }

  fillTexts() {
    const o = this.owner;
    this.textBox.replaceChildren();
    if (!o || !o.texts.length) { this.textBox.append(el('div', { class: 'hint', text: '이 구역에서 대사가 있는 사람을 골라 주세요.' })); return; }
    this.textBox.append(el('div', { class: 'hint', text: '빈 줄 = 다음 말풍선. {이름} 같은 표시는 지우지 마세요. 고친 대사는 초록색이에요.' }));
    o.texts.forEach((t, i) => this.textBox.append(this.textEditor(t, (i + 1) + '번째 대사' + (this.rom.textNote.has(t) ? ' · ' + this.rom.textNote.get(t) : ''))));
  }

  textEditor(t, title) {
    const box = el('div', { class: 'tx' + (t.modified ? ' mod' : '') });
    const err = el('div', { class: 'err' });
    const ta = el('textarea', { spellcheck: 'false' });
    ta.value = t.current;
    ta.rows = Math.min(10, t.current.split('\n').length + 1);
    const check = () => { this.rom.validate(t); err.textContent = t.error || ''; box.classList.toggle('mod', t.modified); };
    ta.addEventListener('input', () => { t.edited = ta.value; check(); });
    ta.addEventListener('change', () => this.fillOwnersLabelsOnly());
    const reset = el('button', { text: '원래대로', style: 'font-size:12px;padding:1px 8px', onclick: () => { t.edited = null; ta.value = t.current; check(); } });
    box.append(el('div', { class: 'bar' }, el('span', { class: 'note', text: title + (t.readOnly ? ' (길게 늘릴 수 없음)' : '') }), el('span', { style: 'flex:1' }), reset), ta, err);
    check();
    return box;
  }

  fillOwnersLabelsOnly() {
    for (const b of this.ownerBar.children) {
      const o = this.area.owners.filter(x => x.texts.length)[Array.prototype.indexOf.call(this.ownerBar.children, b)];
      if (o) b.textContent = o.name + (o.texts.some(t => t.modified) ? ' ✎' : '');
    }
  }

  fillMusicLine() {
    const rom = this.rom, a = this.area, cur = rom.areaMusic(a);
    const n = RomMusic.songCount(rom.data);
    this.musicLine.replaceChildren();
    if (cur < 0 || !n) return;
    const sel = el('select');
    for (let i = 0; i < n; i++) { const o = el('option', { value: i, text: hex2(i) + ' ' + RomMusic.name(i) }); if (i === cur) o.selected = true; sel.append(o); }
    sel.addEventListener('change', () => { rom.setAreaMusic(a, +sel.value); this.say(a.name + ' 배경음악 → ' + RomMusic.name(+sel.value)); });
    const play = el('button', { text: '▶ 듣기', onclick: () => this.playSong(+sel.value, play) });
    this.musicLine.append(el('span', { class: 'hint', text: '이 장소 배경음악' }), sel, play, el('button', { text: '■', onclick: () => Player.stop() }));
  }

  // ---------------------------------------------------------------- 배경음악 탭
  playSong(id, btn) {
    const old = btn ? btn.textContent : '';
    if (btn) { btn.textContent = '…'; btn.disabled = true; }
    setTimeout(() => {
      try {
        const r = RomMusic.render(this.rom.data, id, null, 180, false);
        if (!r) { this.say('이 곡은 재생할 수 없어요', true); return; }
        Player.play(r.samples);
        this.say('재생 중: ' + RomMusic.name(id) + ' (' + Math.round(r.seconds) + '초 반복)');
      } catch (e) { console.error(e); this.say('재생 실패: ' + e.message, true); }
      finally { if (btn) { btn.textContent = old; btn.disabled = false; } }
    }, 10);
  }

  buildMusicTab() {
    const rom = this.rom, n = RomMusic.songCount(rom.data);
    const wrap = el('div', { class: 'box' });
    if (!n) { wrap.append(el('div', { text: '이 롬에서 음악 표를 찾지 못했어요.' })); return wrap; }
    wrap.append(el('div', { class: 'bar' },
      el('button', { text: '■ 멈춤', onclick: () => Player.stop() }),
      el('span', { class: 'hint', text: '곡을 누르면 게임 사운드 칩과 똑같은 방식으로 합성해서 들려줘요. 장소마다 음악을 바꾸려면 [지도 · 대사] 탭 지도 아래에서 고르세요.' })));
    const done = new Set();
    let selEl = null;
    const item = id => {
      done.add(id);
      const d = el('div', { class: 'song', title: '눌러서 듣기' },
        el('span', { class: 'n', text: hex2(id) }), el('span', { text: RomMusic.name(id) }),
        RomMusic.isReplaced(rom.data, id) ? el('span', { class: 'chg', text: '★바뀜' }) : null);
      d.addEventListener('click', () => { if (selEl) selEl.classList.remove('on'); selEl = d; d.classList.add('on'); this.playSong(id); });
      return d;
    };
    for (const [gname, ids] of RomMusic.groups) {
      const list = ids.filter(i => i < n);
      if (!list.length) continue;
      wrap.append(el('div', { class: 'grp', text: gname }), el('div', { class: 'songs' }, ...list.map(item)));
    }
    const rest = []; for (let i = 1; i < n; i++) if (!done.has(i)) rest.push(i);
    if (rest.length) wrap.append(el('div', { class: 'grp', text: '기타' }), el('div', { class: 'songs' }, ...rest.map(item)));
    return wrap;
  }

  // ---------------------------------------------------------------- 대사 찾기 탭
  buildFindTab() {
    const q = el('input', { type: 'search', placeholder: '대사에 들어간 말로 찾기 (예: 포켓몬, 엄마)' });
    const out = el('div', { class: 'texts', style: 'max-height:600px' });
    const run = () => {
      const s = q.value.trim(); out.replaceChildren();
      if (s.length < 1) return;
      let n = 0;
      for (const a of this.rom.allAreas)
        for (const o of a.owners)
          for (const t of o.texts) {
            if (t.current.indexOf(s) < 0) continue;
            if (++n > 200) continue;
            const line = t.current.split('\n').find(l => l.indexOf(s) >= 0) || '';
            out.append(el('div', { class: 'song', style: 'margin-bottom:4px', onclick: () => this.selectArea(a, o) },
              el('b', { text: a.name + ' › ' + o.name }), el('span', { class: 'hint', text: line })));
          }
      this.say(n > 200 ? n + '개 찾음 (앞 200개만 보여요)' : n + '개 찾음');
    };
    q.addEventListener('input', () => { clearTimeout(this.findTimer); this.findTimer = setTimeout(run, 250); });
    return el('div', { class: 'box' }, q, el('div', { style: 'height:8px' }), out);
  }

  // ---------------------------------------------------------------- 저장
  save() {
    const rom = this.rom;
    const { bytes, errors } = rom.buildSave();
    const name = rom.fileName.replace(/(\.gbc?)$/i, '') + '_수정.gbc';
    const url = URL.createObjectURL(new Blob([bytes], { type: 'application/octet-stream' }));
    const a = el('a', { href: url, download: name });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    if (errors.length) { alert('이 대사들은 넣지 못했어요:\n\n' + errors.slice(0, 15).join('\n')); this.say(errors.length + '개 대사는 넣지 못했어요', true); }
    else this.say(name + ' 내려받기 완료');
    if (this.area) this.fillOwners();
  }
}

function mount() {
  const hosts = document.querySelectorAll('#gsc-tool, .gsc-tool');
  if (!hosts.length) {
    const s = scriptTag || document.scripts[document.scripts.length - 1];
    const d = document.createElement('div');
    s.parentNode.insertBefore(d, s);
    new App(d);
  } else hosts.forEach(h => { if (!h.dataset.gscMounted) { h.dataset.gscMounted = '1'; new App(h); } });
}
const scriptTag = document.currentScript;
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();

})();
