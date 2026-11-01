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
const EFFECT_CONSTS = "NORMAL_HIT SLEEP POISON_HIT LEECH_HIT BURN_HIT FREEZE_HIT PARALYZE_HIT SELFDESTRUCT DREAM_EATER MIRROR_MOVE ATTACK_UP DEFENSE_UP SPEED_UP SP_ATK_UP SP_DEF_UP ACCURACY_UP EVASION_UP ALWAYS_HIT ATTACK_DOWN DEFENSE_DOWN SPEED_DOWN SP_ATK_DOWN SP_DEF_DOWN ACCURACY_DOWN EVASION_DOWN RESET_STATS BIDE RAMPAGE FORCE_SWITCH MULTI_HIT CONVERSION FLINCH_HIT HEAL TOXIC PAY_DAY LIGHT_SCREEN TRI_ATTACK UNUSED_25 OHKO RAZOR_WIND SUPER_FANG STATIC_DAMAGE TRAP_TARGET UNUSED_2B DOUBLE_HIT JUMP_KICK MIST FOCUS_ENERGY RECOIL_HIT CONFUSE ATTACK_UP_2 DEFENSE_UP_2 SPEED_UP_2 SP_ATK_UP_2 SP_DEF_UP_2 ACCURACY_UP_2 EVASION_UP_2 TRANSFORM ATTACK_DOWN_2 DEFENSE_DOWN_2 SPEED_DOWN_2 SP_ATK_DOWN_2 SP_DEF_DOWN_2 ACCURACY_DOWN_2 EVASION_DOWN_2 REFLECT POISON PARALYZE ATTACK_DOWN_HIT DEFENSE_DOWN_HIT SPEED_DOWN_HIT SP_ATK_DOWN_HIT SP_DEF_DOWN_HIT ACCURACY_DOWN_HIT EVASION_DOWN_HIT SKY_ATTACK CONFUSE_HIT POISON_MULTI_HIT UNUSED_4E SUBSTITUTE HYPER_BEAM RAGE MIMIC METRONOME LEECH_SEED SPLASH DISABLE LEVEL_DAMAGE PSYWAVE COUNTER ENCORE PAIN_SPLIT SNORE CONVERSION2 LOCK_ON SKETCH DEFROST_OPPONENT SLEEP_TALK DESTINY_BOND REVERSAL SPITE FALSE_SWIPE HEAL_BELL PRIORITY_HIT TRIPLE_KICK THIEF MEAN_LOOK NIGHTMARE FLAME_WHEEL CURSE UNUSED_6E PROTECT SPIKES FORESIGHT PERISH_SONG SANDSTORM ENDURE ROLLOUT SWAGGER FURY_CUTTER ATTRACT RETURN PRESENT FRUSTRATION SAFEGUARD SACRED_FIRE MAGNITUDE BATON_PASS PURSUIT RAPID_SPIN UNUSED_82 UNUSED_83 MORNING_SUN SYNTHESIS MOONLIGHT HIDDEN_POWER RAIN_DANCE SUNNY_DAY DEFENSE_UP_HIT ATTACK_UP_HIT ALL_UP_HIT FAKE_OUT BELLY_DRUM PSYCH_UP MIRROR_COAT SKULL_BASH TWISTER EARTHQUAKE FUTURE_SIGHT GUST STOMP SOLARBEAM THUNDER TELEPORT BEAT_UP FLY DEFENSE_CURL";
const EFFECT_KO = {NORMAL_HIT:"일반 공격",SLEEP:"잠들게 하기",POISON_HIT:"공격 + 독 (확률)",LEECH_HIT:"공격 + HP 흡수",BURN_HIT:"공격 + 화상 (확률)",FREEZE_HIT:"공격 + 얼음 (확률)",PARALYZE_HIT:"공격 + 마비 (확률)",SELFDESTRUCT:"자폭 (쓰러짐)",DREAM_EATER:"꿈먹기 (잠든 상대만)",MIRROR_MOVE:"따라하기",ALWAYS_HIT:"반드시 명중",RESET_STATS:"능력 변화 없애기 (흑안개)",BIDE:"참기",RAMPAGE:"난동 (2~3턴 후 혼란)",FORCE_SWITCH:"강제 교체·도망 (울부짖기)",MULTI_HIT:"2~5번 연속 공격",CONVERSION:"텍스처 (타입 바꾸기)",FLINCH_HIT:"공격 + 풀죽음 (확률)",HEAL:"HP 절반 회복",TOXIC:"맹독",PAY_DAY:"고양이돈받기",LIGHT_SCREEN:"빛의장막",TRI_ATTACK:"트라이어택",OHKO:"일격필살",RAZOR_WIND:"2턴 공격 (모으기)",SUPER_FANG:"상대 HP 절반 데미지",STATIC_DAMAGE:"고정 데미지 (위력 = 데미지)",TRAP_TARGET:"조이기·묶기 (2~5턴)",DOUBLE_HIT:"2번 공격",JUMP_KICK:"빗나가면 반동 (점프킥)",MIST:"흰안개",FOCUS_ENERGY:"기충전 (급소율 상승)",RECOIL_HIT:"반동 데미지",CONFUSE:"혼란시키기",TRANSFORM:"변신",REFLECT:"리플렉터",POISON:"독 걸기",PARALYZE:"마비시키기",SKY_ATTACK:"2턴 공격 (불새)",CONFUSE_HIT:"공격 + 혼란 (확률)",POISON_MULTI_HIT:"2번 공격 + 독 (더블니들)",SUBSTITUTE:"대타출동",HYPER_BEAM:"파괴광선 (다음 턴 쉼)",RAGE:"분노",MIMIC:"흉내내기",METRONOME:"손가락흔들기",LEECH_SEED:"씨뿌리기",SPLASH:"튀어오르기 (효과 없음)",DISABLE:"사슬묶기",LEVEL_DAMAGE:"레벨만큼 데미지",PSYWAVE:"사이코웨이브",COUNTER:"카운터",ENCORE:"앵콜",PAIN_SPLIT:"아픔나누기",SNORE:"코골기",CONVERSION2:"텍스처2",LOCK_ON:"록온",SKETCH:"스케치",DEFROST_OPPONENT:"공격 + 상대 얼음 녹임",SLEEP_TALK:"잠꼬대",DESTINY_BOND:"길동무",REVERSAL:"기사회생 (HP 적을수록 강함)",SPITE:"원한",FALSE_SWIPE:"칼등치기 (HP 1 남김)",HEAL_BELL:"치료방울",PRIORITY_HIT:"선제공격",TRIPLE_KICK:"트리플킥",THIEF:"도둑질",MEAN_LOOK:"검은눈빛 (도망 못 감)",NIGHTMARE:"악몽",FLAME_WHEEL:"공격 + 화상, 자신 얼음 녹임",CURSE:"저주",PROTECT:"방어 (막기)",SPIKES:"압정뿌리기",FORESIGHT:"꿰뚫어보기",PERISH_SONG:"멸망의노래",SANDSTORM:"모래바람",ENDURE:"버티기",ROLLOUT:"구르기",SWAGGER:"뽐내기",FURY_CUTTER:"연속자르기",ATTRACT:"헤롱헤롱",RETURN:"은혜갚기 (친밀도 높을수록 강함)",PRESENT:"프레젠트",FRUSTRATION:"화풀이 (친밀도 낮을수록 강함)",SAFEGUARD:"신비의부적",SACRED_FIRE:"성스러운불꽃",MAGNITUDE:"매그니튜드",BATON_PASS:"바톤터치",PURSUIT:"따라가때리기",RAPID_SPIN:"고속스핀",MORNING_SUN:"아침햇살",SYNTHESIS:"광합성",MOONLIGHT:"달의불빛",HIDDEN_POWER:"잠재파워",RAIN_DANCE:"비바라기",SUNNY_DAY:"쾌청",DEFENSE_UP_HIT:"공격 + 자신 방어 상승",ATTACK_UP_HIT:"공격 + 자신 공격 상승",ALL_UP_HIT:"공격 + 자신 모든 능력 상승",FAKE_OUT:"속이기 (첫 턴 풀죽음)",BELLY_DRUM:"배북",PSYCH_UP:"자기암시",MIRROR_COAT:"미러코트",SKULL_BASH:"로케트박치기",TWISTER:"회오리",EARTHQUAKE:"지진",FUTURE_SIGHT:"미래예지",GUST:"바람일으키기",STOMP:"짓밟기",SOLARBEAM:"솔라빔",THUNDER:"번개",TELEPORT:"순간이동",BEAT_UP:"집단구타",FLY:"공중날기·구멍파기",DEFENSE_CURL:"웅크리기"};
// ===== 05-i18n.js
// ================================================================ 화면 언어 (한국어 / English)
// 화면에 보이는 글자만 바꿈 (대사 편집 칸·롬 안 글자·롬에서 찾는 데 쓰는 글자는 그대로).
// 툴 코드의 한국어 문구(조각 포함) → 영어 사전으로, 그려진 화면의 글자 노드를 바꿔 끼움.
// 글자 사이에 RAW(보이지 않는 표시)를 넣으면 그 뒤(게임 대사 등)는 번역하지 않음
const RAW = '⁣';
const I18N = (() => {
  const HANGUL = /[가-힣]/;
  let lang = 'ko';
  try { lang = localStorage.getItem('gsc-lang') || ((navigator.language || '').toLowerCase().startsWith('ko') ? 'ko' : 'en'); } catch (e) { }

  // ---------------------------------------------------------------- UI 문구 (툴 코드의 한국어 조각)
  const EN = {
    // 메인 화면
    '롬 열기': 'Open ROM', '저장하기': 'Save', '▶ 게임으로 확인': '▶ Test Play', '포켓몬 편집': 'Pokémon Editor', '포켓몬 그림': 'Pokémon Sprites',
    '캐릭터 그림': 'Overworld Sprites', '타이틀 화면': 'Title Screen', '기술 편집': 'Move Editor', '트레이너 편집': 'Trainer Editor', '타입 상성': 'Type Chart',
    'BGM 에디터': 'BGM Editor', '오박사 인트로': 'Oak Intro', '⛶ 넓게 보기': '⛶ Full Window', '✕ 원래 크기로': '✕ Exit Full Window', 'Esc 키로도 돌아와요': 'Esc also exits',
    '창 전체로 크게 열어요': 'Open the tool in the whole browser window', '롬 파일(.gbc)을 열거나 이 창에 끌어다 놓으세요.': 'Open a ROM file (.gbc) or drag it onto this window.',
    '대사 검색 (엔터)': 'Search dialogue (Enter)', '지도': 'Map', '왼쪽 목록에서 구역이나 NPC 를 고르면 지도가 나와요': 'Pick an area or NPC on the left to show the map',
    '대사': 'Dialogue', '야생 포켓몬': 'Wild Pokémon', '프렌들리숍': 'Poké Mart', '선물 포켓몬': 'Gift Pokémon', '지도 블록': 'Map Blocks', 'NPC · 이벤트': 'NPCs · Events', '워프 · 트리거': 'Warps · Triggers',
    '포켓몬스터는 Nintendo·Creatures·GAME FREAK 의 상표예요. 이 도구는 비공식 팬 도구이고, 롬 파일은 직접 가진 것을 쓰세요. 롬은 브라우저 안에서만 열리고 어디에도 올라가지 않아요.':
      'Pokémon is a trademark of Nintendo · Creatures · GAME FREAK. This is an unofficial fan tool — use a ROM you own. The ROM is opened only inside your browser and is never uploaded.',
    '롬을 열면 쓸 수 있어요.': 'Open a ROM to use this.', '저장하지 않은 수정이 있어요. 버리고 계속할까요?': 'You have unsaved changes. Discard them and continue?',
    "' 은(는) 웹판에 아직 옮기는 중이에요. 데스크톱 툴에서는 쓸 수 있어요.": "' is not in the web version yet. It is available in the desktop tool.",
    '취소했어요': 'Cancelled', '  ·  대사 ': '  ·  dialogue lines: ', '⚠ 크리스탈 롬이에요. 이 툴은 금·은 (한글판) 전용이라 지도·대사·음악이 틀리게 보이거나 저장하면 망가질 수 있어요.':
      '⚠ This looks like a Crystal ROM. This tool is made for Gold/Silver (Korean), so maps, dialogue and music may show wrongly and saving may break the ROM.',
    '  —  블록 칠하기 모드 (지도 블록 탭)': '  —  Block paint mode (Map Blocks tab)', '  —  클릭: 고르기 · Delete: 지우기 · Ctrl+Z: 되돌리기': '  —  Click: select · Delete: delete · Ctrl+Z: undo',
    '1배': '1×', '2배': '2×', '3배': '3×', '이 구역 지도는 그릴 수 없어요': 'This area map cannot be drawn', ' (취소하려면 Esc)': ' (Esc to cancel)',
    ') 칸': ') tile', ' · 더블클릭하면 도착 지도': ' · double-click to view destination', '워프 W': 'Warp W',
    "' 은(는) 타일 트리거 T": "' walks over when tile trigger T", ' 을(를) 밟으면 다가오는 NPC예요': ' is stepped on',
    "' 은(는) 게임에선 다른 인물로 보여요. NPC · 이벤트 탭에서 [모습·방향 적용]을 누르면 이 지역 빈 칸에 넣어 고쳐요": "' shows as a different person in game. Press [Apply look & direction] in the NPCs · Events tab to fix it with a free slot in this region",
    '지울 NPC를 먼저 고르세요': 'Select the NPC to delete first', "'자동 이벤트'는 지울 수 없어요": "'Auto events' cannot be deleted", "' 을(를) 지웠어요  ·  되돌리려면 Ctrl+Z": "' deleted  ·  Ctrl+Z to undo",
    '되돌릴 삭제가 없어요': 'Nothing to undo', "' 을(를) 되돌렸어요": "' restored", '오류: ': 'Error: ',
    '왼쪽에서 지역 → 구역 → NPC 를 고르세요': 'Pick a region → area → NPC on the left', '왼쪽 목록이나 지도에서 NPC 를 고르면 대사가 나와요.': 'Pick an NPC in the list or on the map to see its dialogue.',
    '이 NPC 는 대사가 없어요.': 'This NPC has no dialogue.', '번째 대사': ' — dialogue', ' (길게 늘릴 수 없음)': ' (cannot be made longer)', '원래대로': 'Revert',
    '엔터 = 다음 줄      빈 줄 = 다음 말풍선\n{주인공} {라이벌} 같은 중괄호는 이름 등이 들어가는 자리예요\n다 고친 뒤 [저장하기]를 누르면 새 롬 파일로 저장돼요 (원래 롬은 그대로)':
      'Enter = next line      Blank line = next text box\nBraces like {주인공} (player) and {라이벌} (rival) are placeholders for names — keep them as they are\nWhen done, press [Save] to download a new ROM file (your original ROM stays unchanged)',
    '닫기': 'Close', '이 곡은 재생할 수 없어요': 'This song cannot be played', '재생 중: ': 'Playing: ', '초 반복)': 's loop)', '재생 실패: ': 'Playback failed: ',
    '_수정.gbc': '_edited.gbc', '이 대사들은 넣지 못했어요:\n\n': 'These dialogue lines could not be written:\n\n', '개 대사는 넣지 못했어요': ' dialogue lines could not be written', ' 로 저장했어요 (내려받기)': ' saved (downloaded)',
    '찾는 대사가 없어요.': 'No dialogue found.', '오박사 인트로 포켓몬': 'Oak Intro Pokémon',
    // 롬 분석
    ' (트레이너)': ' (Trainer)', ') 밟으면': ') is stepped on', '구역 ': 'Area ', '기타 지역': 'Other', '특수 장소': 'Special', '자동 이벤트': 'Auto events', '표지판·조사 ': 'Sign / Check ',
    '타일 트리거 T': 'Tile trigger T', '인물': 'Person', '특수 인물': 'Special person',
    '너무 짧은 대사라 길게 늘릴 수 없어요': 'This line is too short to be made longer', '롬에 남은 빈 공간이 부족해요': 'Not enough free space left in the ROM',
    '이 대사는 원래보다 길게 쓸 수 없어요 (조금 줄여주세요)': 'This line cannot be longer than the original (please shorten it)', '이 대사는 원래보다 길게 할 수 없어요': 'This line cannot be longer than the original',
    '지도 정보를 찾지 못했어요.': 'Could not find the map data.', '지도 정보를 해석하지 못했어요.': 'Could not read the map data.',
    '한글판 금·은 기반 롬이 아닌 것 같아요 (지도 정보를 찾지 못함).': 'This does not look like a Pokémon Gold/Silver based ROM (map data not found).',
    '} 같은 표시는 지우거나 순서를 바꾸면 안 돼요': '} must not be removed or reordered', "게임에 없는 글자예요: '": "Character not in the game's font: '", '알 수 없는 {} 표시: ': 'Unknown {} code: ',
    '곡 0x': 'Song 0x', '새 BGM': 'New BGM',
    // 데이터
    ' → 그 NPC 를 골라 [모습 적용]을 누르면 빈 칸에 들어가요': ' → select that NPC and press [Apply look] to put it in a free slot',
    ' → 위 모습 중 하나를 이 지역에서 안 쓰게 바꿔야 자리가 생겨요': ' → stop using one of the looks above in this region to make room', ' · 빈 칸 ': ' · free slots: ',
    "' 모습과 바꿈).": "' look).", "' 모습은 이 지역 바깥 지도에서 게임에 다른 인물로 보여요. 이 지역은 NPC 모습을 ": "' look shows as a different person on this region's outdoor maps. This region can use ",
    "' 모습이 보이도록 NPC 모습 목록에 넣었어요 (안 쓰던 '": "' look shows correctly, it was added to the NPC look list (replacing the unused '",
    "' 이름이 너무 길어요 (한글 5글자까지)": "' name is too long (max 5 Korean characters)", '(안 씀) ': '(unused) ', '(없음)': '(none)',
    '\n⚠ 게임에서 다른 인물로 보이는 모습: ': '\n⚠ Looks that show as a different person in game: ',
    '⚠ 이 지역 NPC 모습 목록을 늘릴 공간이 없어서 게임에서 다른 인물로 보일 수 있어요.': '⚠ No room to extend this region\'s NPC look list, so it may show as a different person in game.',
    '가지까지만 쓸 수 있는데 모두 쓰는 중이에요.\n이 지역에서 이미 쓰는 모습 중에서 고르세요: ': ' NPC looks and all are in use.\nPick one of the looks already used here: ',
    '가지까지만 쓸 수 있어요 (게임 한계). 지금: ': ' walking NPC looks (game limit). Now: ', '개까지 넣을 수 있어요': ' items max',
    '기술 이름 전체 공간이 부족해요. 다른 기술 이름을 조금 줄여주세요.': 'Not enough room for all move names. Shorten another move name a little.', '기술 이름표를 찾지 못했어요': 'Move name table not found',
    '느림 (125만)': 'Slow (1.25M)', '보통 (100만)': 'Medium Fast (1M)', '보통보다 느림 (105만)': 'Medium Slow (1.05M)', '빠름 (80만)': 'Fast (800K)', '조금 느림': 'Slightly Slow', '조금 빠름': 'Slightly Fast',
    '레벨+공격/방어 비교': 'Level + Atk/Def compare', '레벨업': 'Level up', '진화의 돌·도구': 'Evolution stone / item', '통신교환': 'Trade', '친밀도': 'Happiness',
    '롬에 빈 공간이 부족해요': 'Not enough free space in the ROM', '물건은 ': 'Up to ', '물건이 하나 이상 있어야 해요': 'There must be at least one item',
    '상성 표 공간이 부족해요 (원래보다 특별한 상성을 너무 많이 넣었어요)': 'Not enough room in the type chart (too many special matchups compared to the original)', '상점 데이터 공간이 부족해요': 'Not enough room for mart data',
    '성별 없음': 'Genderless', '수컷만': 'Male only', '암컷 12.5%': '12.5% female', '암컷 25%': '25% female', '암컷 50%': '50% female', '암컷 75%': '75% female', '암컷만': 'Female only',
    '이 지역 바깥 지도는 움직이는 NPC 모습을 ': "This region's outdoor maps can use up to ", '이 지역 바깥 지도에서도 \'': 'So that the \'',
    '이 항목은 지울 수 없어요 (자동 이벤트)': 'This entry cannot be deleted (auto events)', '이름이 너무 길어요 (한글 5글자까지)': 'Name is too long (max 5 Korean characters)', '이름이 너무 길어요 (한글 7글자까지)': 'Name is too long (max 7 Korean characters)',
    '진화·기술 데이터 공간이 부족해요': 'Not enough room for evolution/move data', '타입 상성 표를 찾지 못했어요': 'Type chart not found',
    '트레이너 데이터 공간이 부족해요 (포켓몬 수나 기술 지정을 줄여주세요)': 'Not enough room for trainer data (use fewer Pokémon or custom moves)', '포켓몬은 1~6마리여야 해요': 'A team needs 1 to 6 Pokémon',
    '기술을 하나 이상 고르세요': 'Pick at least one move', '기타 대사 (': 'Other dialogue (', '알로 주는 포켓몬은 기술을 따로 정할 수 없어요': 'Pokémon given as eggs cannot have custom moves',
    '이 롬에서는 포켓몬 기술을 정하는 데 필요한 정보를 못 찾았어요 (기본 기술로 주세요)': 'This ROM lacks the info needed to set custom moves (give default moves)', '이 스크립트가 있는 곳에 빈 공간이 부족해요': 'Not enough free space near this script',
    // 이벤트
    ' (끝나면 사라짐)': ' (disappears afterwards)', ' + 스토리 진행 (움직이기·장면 바꾸기 등)': ' + story actions (movement, scene changes…)', ' · 이기면 사라짐': ' · disappears after losing',
    ' 칸이 비어 있어요': ' is empty', ', 세로 0~': ', y 0–', ': 한 줄이 너무 길어요 (18자 이하) — "': ': a line is too long (18 characters max) — "',
    '⚠ 배틀 후 스크립트에 다른 동작도 있어요. 이벤트 탭으로 바꾸면 그 동작은 없어져요': '⚠ The after-battle script does other things too. Replacing it here removes them',
    '⚠ 원래 게임 스토리용 동작이 섞여 있어요. 이벤트 탭으로 바꾸면 그 동작은 없어져요': '⚠ This contains original story actions. Replacing it here removes them',
    'NPC 를 먼저 고르세요 (표지판은 안 돼요)': 'Select an NPC first (not a sign)', '같은 아이템끼리는 교환할 수 없어요': 'An item cannot be traded for itself',
    '거절하거나 아이템이 없을 때 대사': 'Text when refused or item missing', '교환하자는 질문 (예/아니요)': 'Trade question (Yes/No)', '교환한 뒤 대사': 'Text after trade', '그 다음부터 대사': 'Text afterwards',
    '기술: ': 'Moves: ', '눈 마주쳤을 때 대사': 'Text when spotted', '눈 마주치면 배틀하는 트레이너': 'Trainer who battles on sight', '대사: ': 'Text: ', '데려다줄까? 질문 (예/아니요)': 'Offer question (Yes/No)',
    '도착 좌표가 그 지도 밖이에요 (걸음 칸 가로 0~': 'Destination is outside that map (x 0–', '도착: ': 'Destination: ', '도착할 구역을 고르세요': 'Pick a destination area', '레벨은 1~100': 'Level must be 1–100',
    '말 걸면 트레이너 배틀': 'Trainer battle when talked to', '말하기': 'Talk', '물건 목록 ': 'Item list ', '받은 뒤 다시 말 걸면 대사': 'Text when talked to again', '받을 아이템과 줄 아이템을 고르세요': 'Pick the item to receive and the item to give',
    '배틀 전 대사': 'Text before battle', '배틀 전 대사 (울음소리 뒤 배틀)': 'Text before battle (cry, then battle)', '배틀 후 다시 말 걸면 대사': 'Text when talked to after battle', '배틀 후 말 걸면 대사': 'Text when talked to after battle',
    '배틀에서 이겼을 때 상대 대사': "Opponent's text when you win", '상점': 'Mart', '상점 물건 목록을 고르세요': 'Pick a mart item list', '순간이동': 'Teleport', '순간이동 (예를 고르면)': 'Teleport (if Yes)',
    '시야: ': 'Sight: ', '시야는 1~5칸': 'Sight must be 1–5 tiles', '쓸 수 있는 이벤트 번호가 없어요': 'No free event flags left', '아니요를 골랐을 때 대사': 'Text for No', '아이템 교환': 'Item trade', '아이템 볼': 'Item ball',
    '아이템 주기': 'Give item', '아이템 주기 전 대사': 'Text before giving', '알 수 없는 이벤트': 'Unknown event', '야생 포켓몬 배틀': 'Wild Pokémon battle', '여러 번': 'Repeatable', '예/아니요 선택지': 'Yes/No choice',
    '예를 골랐을 때 대사': 'Text for Yes', '이 구역은 NPC가 너무 많아서 더 넣을 수 없어요 (최대 15명)': 'This area has too many NPCs (max 15)',
    '이 구역의 데이터 공간이 부족해서 NPC를 더 넣을 수 없어요': 'Not enough data space in this area for more NPCs', '이 구역의 데이터 공간이 부족해요': 'Not enough data space in this area',
    '이 직업은 데이터 형식이 달라서 새 트레이너를 넣을 수 없어요. 다른 직업을 골라주세요': 'This class has a different data format, so new trainers cannot be added. Pick another class',
    '준 뒤 다시 말 걸면 대사': 'Text when talked to after giving', '줄 아이템을 고르세요': 'Pick the item to give', '질문 (예/아니요가 나옴)': 'Question (Yes/No follows)', '처음 말 걸 때 대사': 'Text the first time',
    '처음·다음 대사가 다른 NPC': 'First-time / later text', '트레이너 직업을 찾지 못했어요': 'Trainer class not found', '트레이너 팀을 고르세요': 'Pick a trainer team', '팀: ': 'Team: ',
    '포켓몬 주기': 'Give Pokémon', '포켓몬 주기 전 대사': 'Text before giving', '포켓몬 회복 (간호순)': 'Heal Pokémon (Nurse)', '포켓몬을 고르세요': 'Pick a Pokémon', '표지판·조사하는 곳': 'Sign / checkable spot',
    '풀숲': 'Tall grass', '한 번만': 'Once only', '바닥': 'Floor',
    // 워프·트리거
    ' (한 번만)': ' (once)', ' 가 주인공 옆까지 걸어올 길이 없어요 (벽·물·건물·다른 NPC 에 막힘). 다른 NPC를 고르거나 트리거·NPC 위치를 바꾸세요': ' has no path to the player (blocked by walls, water, buildings or NPCs). Pick another NPC or move the trigger/NPC',
    ' 는 지워졌거나 아이템 볼이에요. 다른 NPC를 고르세요': ' is deleted or an item ball. Pick another NPC', ' 다가와 도구 주기': ' walks over and gives an item', ' 다가와 말걸기': ' walks over and talks',
    ' 다가와 배틀': ' walks over and battles', ' 다가와 포켓몬 주기': ' walks over and gives a Pokémon', ' 대사': ' text', ' 의 걸어오는 길도 새 자리에 맞게 다시 만들었어요.': ' walking path was rebuilt for the new position too.',
    ' 의 걸어오는 길을 다시 만들지 못했어요: ': ' walking path could not be rebuilt: ', ' 이(가)': '', ' 이(가) 트리거 칸에서 너무 멀어요 (': ' is too far from the trigger tile (', ' 이긴 뒤 대사': ' after-win text',
    '(지운 NPC)': '(deleted NPC)', ') 가 지도 밖에 있어요': ') is outside the map', ') 의 스크립트가 없어요': ') has no script', ': 다가올 NPC #': ': approaching NPC #', ': 다가올 NPC를 고르세요': ': pick the approaching NPC',
    ': 대사를 적어 주세요': ': enter the text', ': 도착 좌표가 그 지도 밖이에요 (가로 0~': ': destination is outside that map (x 0–', ': 배틀할 트레이너를 고르세요': ': pick the trainer to battle',
    ': 이동할 구역을 고르세요': ': pick the destination area', ': 줄 도구를 고르세요': ': pick the item to give', ': 줄 포켓몬을 고르세요': ': pick the Pokémon to give',
    '⚠ 이 NPC가 다가오는 트리거 ': '⚠ Trigger(s) this NPC walks to: ', '⚔ NPC가 다가와서 포켓몬 배틀': '⚔ NPC walks over and battles', 'NPC가': 'NPC', '🎁 NPC가 다가와서 도구 주기': '🎁 NPC walks over and gives an item',
    '💬 대사만 띄우기': '💬 Show text only', '📜 지금 들어있는 동작 그대로 두기': '📜 Keep the current behaviour', '🚀 다른 곳으로 순간이동': '🚀 Teleport somewhere', '🚧 대사 후 한 칸 밀어내기 (길 막기)': '🚧 Text, then push back one tile (block path)',
    '🚶 NPC가 다가와서 말걸기': '🚶 NPC walks over and talks', '🥚 NPC가 다가와서 포켓몬 주기': '🥚 NPC walks over and gives a Pokémon', '막고 밀어내기': 'Block & push back',
    "쓸 수 있는 이벤트 번호가 없어요 ('한 번만'을 끄세요)": "No free event flags (turn off 'once')", '아래': 'Down', '오른쪽': 'Right', '왼쪽': 'Left', '이 NPC가 다가오는 트리거 ': 'Trigger(s) this NPC walks to: ',
    '이 구역의 데이터 공간이 부족해서 트리거를 더 만들 수 없어요': 'Not enough data space in this area for more triggers', '칸 · 오른쪽 ': ' tiles · right ', '칸 · 위아래 ': ' tiles · up/down ',
    '칸 안의 NPC를 고르거나 NPC를 가까이 옮기세요': ' tiles of the trigger, or move the NPC closer', '칸, ': ' tiles, ', '트리거 (': 'Trigger (',
    '칸). 게임은 화면 둘레까지만 NPC를 불러와서, 그보다 멀면 걸어오지 못하고 대사·배틀만 바로 나와요.\n트리거 칸 기준 왼쪽 ': ' tiles). The game only loads NPCs near the screen, so a farther NPC cannot walk over — only the text/battle happens.\nPick an NPC within left ',
    // 블록
    '다른 지도와 이어진 구역이라 블록을 옮길 수 없어요': 'This area connects to other maps, so its blocks cannot be moved', '이 롬은 지도 정보 자체를 다른 구역과 같이 써서 따로 나눌 수 없어요': 'This ROM shares the map header itself with another area, so it cannot be split',
    '이미 이 구역만 쓰는 블록이에요': 'This area already has its own blocks',
    // 그림
    '그림에서 포켓몬을 찾지 못했어요': 'Could not find the Pokémon in the picture', '그림에서 포켓몬을 찾지 못했어요 (배경만 있는 것 같아요)': 'Could not find the Pokémon in the picture (it seems to be only background)',
    '그림을 열 수 없어요': 'Cannot open the picture', '롬에 그림을 넣을 빈 공간이 부족해요': 'Not enough free space in the ROM for the picture',
    '걷는 캐릭터 (6장면)': 'Walking character (6 frames)', '모습': 'Look', '서 있는 캐릭터 (3장면)': 'Standing character (3 frames)', '아래 걷기': 'Down walk', '옆 걷기': 'Side walk', '움직이지 않는 물건 (1장면)': 'Still object (1 frame)', '위 걷기': 'Up walk',
    '[ ] 키 = 가늘게·굵게': '[ ] keys = thinner/thicker', 'Ctrl+휠 = 확대·축소': 'Ctrl+wheel = zoom', 'PNG로 저장…': 'Save PNG…', '격자 보기': 'Show grid', '그림': 'picture', '그림 파일 불러오기…': 'Load image file…',
    '그림을 열 수 없어요: ': 'Cannot open the picture: ', '네모 (R)': 'Rectangle (R)', '다시하기': 'Redo', '도구': 'Tools', '되돌리기': 'Undo', '둥근 붓': 'Round brush', '모두 지우기': 'Clear all', '색 집기 (I)': 'Pick color (I)',
    '연필 (B)': 'Pencil (B)', '연필 굵기 (1~50칸)': 'Pencil size (1–50)', '오른쪽 클릭 = 색 집기': 'Right-click = pick color', '좌우 대칭으로 찍기': 'Mirror horizontally', '직선 (L)': 'Line (L)', '채우기 (G)': 'Fill (G)', '축소 −': 'Zoom −', '확대 +': 'Zoom +',
    '개). 같은 무늬를 반복하거나 빈 칸을 늘려 주세요': '). Repeat patterns or add empty tiles', '개예요 (이 롬은 최대 ': ' (this ROM allows up to ', '그림이 너무 복잡해요: 서로 다른 8×8 칸이 ': 'The picture is too complex: distinct 8×8 tiles = ',
    '이 롬은 타이틀 타일을 128개까지만 넣을 수 있어요': 'This ROM can hold only 128 title tiles', '타이틀 코드 뱅크에 빈 공간이 없어서 128칸을 넘길 수 없어요': 'No free space in the title code bank, so it cannot go over 128 tiles',
    // 음악
    ' (자동 감지)': ' (auto)', 'MIDI 안에 음표가 없어요.': 'The MIDI file has no notes.', 'MIDI: 템포 ': 'MIDI: tempo ', '드럼을 찾는 중…': 'Finding drums…', '멜로디·베이스를 나누는 중…': 'Separating melody and bass…',
    '박자를 찾는 중…': 'Finding the beat…', '박자를 찾는 중… ': 'Finding the beat… ', '소리가 거의 없는 파일이에요.': 'The file is almost silent.', '스텝 (': ' steps (', '유효한 MIDI 파일이 아닙니다.': 'Not a valid MIDI file.',
    '음 높이를 찾는 중…': 'Finding pitches…', '음 높이를 찾는 중… ': 'Finding pitches… ', '이 음악 파일을 읽지 못했어요. 브라우저가 이 형식을 모를 수 있어요 (MP3·WAV·FLAC·OGG·M4A 는 대부분 돼요).': 'Could not read this music file. Your browser may not support the format (MP3, WAV, FLAC, OGG and M4A usually work).',
    '초) · 시작 위치 ': 's) · start offset ', '템포 ': 'Tempo ', '화음을 찾는 중…': 'Finding harmony…', '화음을 찾는 중… ': 'Finding harmony… ', '초)': 's)',
    '롬에 남은 빈 공간이 부족해요 (곡이 ': 'Not enough free space in the ROM (the song is ', '바이트)': ' bytes)', '음악 번호가 올바르지 않아요': 'Invalid music number', '음악 표를 찾지 못했어요': 'Music table not found',
    // 데이터 편집 창
    ' (높을수록 잘 잡힘)': ' (higher = easier)', ' ×256 걸음': ' ×256 steps', ' 기술 직접 정하기': ' Custom moves', ' 데이터를 찾지 못했어요.': ' data was not found in this ROM.', ' 도구 지니게 하기': ' Held items',
    ' 하락 (확률)': ' down (chance)', '(도구 없이)': '(no item)', '(미사용)': '(unused)', '+ 기술 추가': '+ Add move', '+ 진화 추가': '+ Add evolution', '+ 포켓몬 추가': '+ Add Pokémon', '공격': 'Attack',
    '공격 + 상대 ': 'Hit + foe ', '공격 < 방어': 'Atk < Def', '공격 = 방어': 'Atk = Def', '공격 > 방어': 'Atk > Def', '공격 ↓ / 방어 →': 'Attacking ↓ / Defending →', '그 레벨까지 배운 기술로 채우기': 'Fill with moves learned by that level',
    '기본 경험치': 'Base EXP', '기본 기술': 'Default moves', '기술': 'Moves', '기술 찾기': 'Search moves', '기술머신 · 비전머신으로 배울 수 있는 기술': 'TM / HM compatibility', '나오는 곳:': 'Appears at:',
    '레벨업 기술의 레벨은 1~100 이어야 해요': 'Level-up move levels must be 1–100', '레벨업으로 배우는 기술': 'Level-up moves', '명중률': 'Accuracy', '방어': 'Defense', '비전머신': 'HM', '기술머신': 'TM', '상대 ': 'Foe ', '상승': 'up', '성별': 'Gender',
    '성장 속도': 'Growth rate', '스피드': 'Speed', '아침·낮': 'Morning/Day', '알 부화 걸음': 'Egg steps', '야생이 지닌 도구': 'Wild held items', '언제나': 'Any time', '위력': 'Power', '이 롬에서 ': '', '이 포켓몬 빼기': 'Remove this Pokémon',
    '자신 ': 'User ', '잡히는 정도': 'Catch rate', '적용': 'Apply', '적용했어요': 'Applied', '진화': 'Evolution', '찾기': 'Search', '추가 효과 확률': 'Effect chance', '크게 상승': 'sharply up', '크게 하락': 'sharply down', '타입 상성 적용': 'Apply type chart',
    '칸을 누를 때마다 보통 → 2배(굉장함) → ½배(반감) → 0배(무효) 순서로 바뀌어요. 고스트·노말/격투 무효(꿰뚫어보기로 풀리는 것)는 따로 그대로 둬요.': 'Each click cycles normal → 2× (super effective) → ½× (not very effective) → 0× (no effect). The Ghost vs Normal/Fighting immunity (removed by Foresight) is kept separately.',
    '트레이너 · 포켓몬 찾기': 'Search trainers / Pokémon', '특수공격': 'Sp. Atk', '특수방어': 'Sp. Def', '포켓몬 능력치': 'Pokémon stats', '포켓몬 찾기': 'Search Pokémon', '하락': 'down', '합계 ': 'Total ', '회피율': 'Evasion', '효과': 'Effect', '효과 ': 'Effect ',
    '이름': 'Name', '타입': 'Type', '레벨': 'Level', '체육관 관장': 'Gym Leader',
    // 아래 탭들
    '   끄면 원래처럼 그 레벨까지 배우는 기술을 가져요\n': '   When off, it knows the moves learned by that level as usual\n', '  (알로 줌)': '  (given as egg)', '  ·  이 목록은 ': '  ·  this list is shared by ', ' (알)': ' (egg)', ' (위치 모름)': ' (location unknown)',
    "' 로 바꾸기": "'", "' 로 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요": "'. Press [Save] to write it to the ROM file", "' 이(가) 나오는 곳 ": "' — found ", '(상점을 고르세요)': '(pick a mart)', '(선물 포켓몬을 고르세요)': '(pick a gift Pokémon)',
    ', 울음소리 ': ', cry ', '\n[저장하기]를 눌러야 롬 파일에 기록돼요.': '\nPress [Save] to write it to the ROM file.', '\n대사 ': '\nDialogue lines: ',
    '· [이 포켓몬만 기술 직접 정하기]를 켜면 이 선물 포켓몬만 고른 기술 4개를 가지고 와요 (포켓몬 전체 데이터는 안 바뀜)\n': '· With [Custom moves for this Pokémon only] on, only this gift comes with the 4 chosen moves (species data is unchanged)\n',
    '· 고를 때 나오는 그림·울음소리는 따로 정할 수 있어요 (끄면 받는 포켓몬과 같게)\n': '· The picture/cry shown when choosing can be set separately (off = same as the received Pokémon)\n',
    '· 라이벌이 고르는 포켓몬은 [트레이너 편집]의 라이벌 팀에서 바꿀 수 있어요': "· The rival's Pokémon can be changed in the rival teams in [Trainer Editor]",
    '· 새 게임 때 오박사가 보여주는 포켓몬은 위쪽 [오박사 인트로] 버튼에서 바꿔요\n': '· The Pokémon Prof. Oak shows on a new game is changed with the [Oak Intro] button above\n',
    '· 지도에서 공박사 연구소의 몬스터볼(스타팅 포켓몬)이나 포켓몬을 주는 NPC를 클릭하세요\n': "· Click the Poké Balls in Elm's Lab (starters) or an NPC who gives a Pokémon on the map\n",
    '· 지도에서 점원을 클릭하면 그 상점이 열려요\n· 가격은 아이템마다 하나라서, 바꾸면 다른 상점과 되팔 때 값(절반)도 같이 바뀌어요\n· 적용한 뒤 [저장하기]를 눌러야 롬 파일에 기록돼요':
      '· Click a clerk on the map to open that mart\n· Each item has a single price, so changing it also changes other marts and the sell price (half)\n· After applying, press [Save] to write it to the ROM file',
    '✅ 체크한 대사 바꾸기': '✅ Replace checked lines', '🔁 대사를 지금 포켓몬에 맞추기': '🔁 Update dialogue to the current Pokémon', '가격': 'Price',
    '개를 찾았어요. 바꿀 대사만 체크하세요 (이름·조사·타입 표현을 같이 바꿔요).\n예: 라이벌·공박사가 그 포켓몬을 말하는 대사는 체크, 다른 뜻으로 쓰인 곳은 체크 해제': ' lines. Check only the ones to replace (name, particles and type words change together).\nE.g. check lines where the rival or Prof. Elm mention that Pokémon; uncheck other uses',
    "개에서 '": " lines: '", '개에서 포켓몬 이름·타입도 바꿨어요 ([대사] 탭에서 확인)': ' lines also had the Pokémon name/type changed (check the [Dialogue] tab)', '개에서도 포켓몬 이름을 바꿨어요 ([대사] 탭에서 확인)': ' other lines also had the Pokémon name changed (check the [Dialogue] tab)',
    '고를 때 그림': 'Picture when choosing', '곳에서 같이 써요': ' places', '그림·울음소리도 받는 포켓몬과 같게': 'Picture & cry same as the received Pokémon', '다른 대사 ': 'Other lines: ', "다른 대사에서도 '": "Also replace in other dialogue: '",
    '🎲 랜덤 포켓몬으로 바꾸기': '🎲 Randomize Pokémon', '전설·환상 포켓몬 포함': 'Include legendary / mythical', '🎲 레벨 랜덤으로 바꾸기': '🎲 Randomize levels', '검색 (이름·번호)': 'Search (name / number)',
    '울음소리 에디터': 'Cry Editor', '포켓몬 울음소리 에디터': 'Pokémon Cry Editor', '이 롬에서 울음소리 데이터를 찾지 못했어요.': "Couldn't find cry data in this ROM.",
    '▶ 들어보기': '▶ Play', '▶ 원래 소리': '▶ Original', '↩ 되돌리기': '↩ Revert', '🎧 소리 파일로 울음소리 만들기 🌟': '🎧 Make a cry from a sound file 🌟',
    '(다른 포켓몬 울음소리 그대로 쓰기 ▼)': "(Use another Pokémon's cry ▼)", '이 포켓몬의 울음소리': "This Pokémon's cry", '기본 울음소리:': 'Base cry:', '음높이:': 'Pitch:', '길이:': 'Length:',
    '0 = 그대로, 클수록 높은 소리': '0 = unchanged, higher = higher pitch', '256 = 보통, 클수록 느리고 길게': '256 = normal, higher = slower and longer',
    '2세대 포켓몬 울음소리는 기본 울음소리 68개 중 하나에 음높이·길이만 바꿔서 만들어요. 위 세 가지만 바꾸면 다른 포켓몬에는 영향이 없어요.': 'Gen 2 cries are one of 68 base cries with a pitch and length. Changing only these three settings does not affect other Pokémon.',
    '기본 울음소리 음표 (고치면 새 소리로 넣어요)': 'Base cry notes (edits are saved as a new sound)', '길이 (프레임)': 'Length (frames)', '볼륨 (0~15)': 'Volume (0–15)', '볼륨 변화 (−7~7)': 'Fade (−7–7)', '소리 높이': 'Pitch', '음색': 'Duty', '음이 없어요': 'No notes',
    '길이 1프레임 = 1/60초 · 볼륨 변화: −면 점점 작게, +면 점점 크게 (숫자가 작을수록 빠르게) · 소리 높이: 사각파는 0~2047 (클수록 높음), 노이즈는 0~255 (작을수록 높은 쉭 소리)': '1 frame = 1/60 s · Fade: − gets quieter, + gets louder (smaller = faster) · Pitch: square 0–2047 (higher = higher), noise 0–255 (smaller = higher hiss)',
    '고친 소리를 넣을 기본 울음소리 번호:': 'Base cry slot for the edited sound:', '게임의 기본 울음소리 68개를 포켓몬들이 나눠 쓰고, 빈 번호는 없어요. 한 마리만 쓰는 번호를 고르면 다른 포켓몬은 그대로예요.': 'The 68 base cries are shared by all Pokémon and none are free. Pick a slot used by only one Pokémon to leave the others unchanged.',
    '롬에 울음소리를 넣을 빈 공간이 부족해요': 'Not enough free space in the ROM for the cry', '소리 파일 → 2세대 울음소리 변환': 'Sound file → Gen 2 cry converter', '✨ 울음소리로 변환하기': '✨ Convert to cry', '▶ 다시 듣기': '▶ Play again',
    '✅ 울음소리 에디터로 가져오기': '✅ Import into the Cry Editor', '최대 길이:': 'Max length:', '조옮김 반음:': 'Transpose (semitones):', '두 번째 사각파 세기 %:': 'Second square volume %:', '노이즈 세기 %:': 'Noise volume %:',
    '앞뒤 조용한 부분은 자동으로 잘라요': 'Silence at the start and end is trimmed automatically', '소리가 너무 낮거나 높을 때': 'If the sound is too low or high', '변환 설정': 'Conversion settings', '먼저 소리 파일을 선택해주세요.': 'Please choose a sound file first.',
    '🐾 동물 소리·목소리·효과음 파일(MP3, WAV, OGG, M4A 등)을 고르세요.\n소리의 높낮이와 크기를 따라가는 사각파 2개 + 노이즈로 바꿔요.': '🐾 Choose an animal sound, voice or sound effect (MP3, WAV, OGG, M4A …).\nIt becomes 2 square waves + noise that follow its pitch and loudness.',
    '소리가 거의 없는 파일이에요': 'The file is almost silent',
    '🎼 한눈에 보기 (파랑·초록 = 사각파, 빨강 = 노이즈 · 진할수록 큰 소리) — 막대를 누르면 그 음을 골라요': '🎼 Overview (blue/green = square, red = noise · darker = louder) — click a bar to select that note',
    '🎼 피아노 롤 — 막대를 위아래로 끌면 음 높이 (Shift = 더 잘게) · 오른쪽 끝을 끌면 길이 · 마우스 휠 = 볼륨 · 빈 곳을 두 번 누르면 음 넣기 · 파랑·초록 = 사각파, 빨강 = 노이즈': '🎼 Piano roll — drag a bar up/down for pitch (Shift = finer) · drag its right edge for length · mouse wheel = volume · double-click empty space to add a note · blue/green = square, red = noise',
    '🎼 피아노 롤 — 막대를 위아래로 끌면 음 높이 · 좌우로 끌면 자리 옮기기 · 오른쪽 끝을 끌면 길이 · 마우스 휠 = 볼륨 · 오른쪽 클릭 = 지우기 · 빈 곳을 두 번 누르면 음 넣기 (아래 빨간 칸 = 드럼) · 진한 막대 = 지금 채널 · 빈 곳 클릭 = 재생 줄 옮기기 · 스페이스바 = 재생/멈춤 · Home = 처음으로': '🎼 Piano roll — drag a bar up/down for pitch · left/right to move it · drag its right edge for length · mouse wheel = volume · right-click = delete · double-click empty space to add a note (red rows at the bottom = drums) · dark bars = current channel · click empty space = move the playhead · Space = play/pause · Home = go to start',
    '⏮ 처음으로': '⏮ To start',
    '🎬 기술 애니메이션': '🎬 Move Animation', '📤 프리셋 내보내기…': '📤 Export preset…', '📥 프리셋 불러오기…': '📥 Import preset…', '프리셋 내보내기': 'Export preset',
    '고친 능력치를 파일로 저장해서 다른 롬에 그대로 넣을 수 있어요': 'Save your edited stats to a file and apply them to another ROM', '📤 파일로 내보내기': '📤 Export to file', '📥 고른 것 넣기': '📥 Apply selected',
    '이름도 넣기 (포켓몬·기술 이름)': 'Include names (Pokémon / moves)', '원본 롬과 비교해서 바뀐 것만 넣기 (원본 롬 파일을 골라요)': 'Only what changed vs. an original ROM (pick the original ROM file)',
    '　진화 · 레벨업 기술 포함': '　Include evolutions and level-up moves', '　기술머신·비전머신 호환 포함': '　Include TM/HM compatibility', '진화 · 레벨업 기술도 넣기': 'Also apply evolutions and level-up moves', '기술머신 호환도 넣기': 'Also apply TM/HM compatibility',
    '🐾 포켓몬만': '🐾 Pokémon only', '⚔ 기술만': '⚔ Moves only', '🗑 여러 개 지우기…': '🗑 Delete several…', '모두 체크': 'Check all', '모두 해제': 'Uncheck all', '종류별로 체크:': 'Check by kind:',
    '✨ 물체': '✨ Objects', '🔊 효과음': '🔊 Sounds', '⏳ 기다리기': '⏳ Waits', '🧹 모두 지우기 (끝만 남기기)': '🧹 Delete all (keep End)', '🗑 체크한 명령 지우기': '🗑 Delete checked',
    '적용하지 않은 변경이 있어요': 'You have unapplied changes', '취소 (계속 고치기)': 'Cancel (keep editing)', '버리고 이동': 'Discard and switch', '💾 적용하고 이동': '💾 Apply and switch', '기술 애니메이션 편집기': 'Move Animation Editor', '🎬 이 기술 애니메이션 편집기로 열기 (실제 게임처럼 재생)': '🎬 Open in the Move Animation Editor (plays like the real game)',
    '▶ 재생': '▶ Play', '⏸ 멈춤': '⏸ Pause', '반복': 'Loop', '소리': 'Sound', '물체 위치 표시': 'Show object positions', '내 포켓몬': 'My Pokémon', '상대': 'Opponent',
    '내가 쓰기 (나 → 상대)': 'I use it (me → opponent)', '상대가 쓰기 (상대 → 나)': 'Opponent uses it (opponent → me)', '＋ 명령 넣기 ▼': '＋ Add command ▼', '✨ 물체 나타내기': '✨ Show object',
    '🔊 효과음': '🔊 Sound effect', '🌈 화면 효과': '🌈 Screen effect', '⏳ 기다리기': '⏳ Wait', '🧹 물체 모두 지우기': '🧹 Clear all objects', '🐾 울음소리': '🐾 Cry',
    '📥 다른 기술에서 가져오기…': '📥 Import from another move…', '💾 적용 (롬에 넣기)': '💾 Apply (write to ROM)', '↩ 원래대로': '↩ Revert', '다른 기술에서 효과 가져오기': 'Import effects from another move',
    '가져올 기술:': 'Move to import from:', '✅ 넣기': '✅ Insert', '📦 이 기술 전용으로 풀어 넣기': '📦 Unpack into this move only', '🖌 이 기술 그림·색 고치기…': "🖌 Edit this move's graphics/colors…",
    '내 포켓몬 쪽': 'My side', '상대 포켓몬 쪽': 'Opponent side', '화면 가운데': 'Screen center', '⧉ 복제': '⧉ Duplicate', '🗑 지우기': '🗑 Delete', '＋ 그림 더 불러오기': '＋ Load another graphic',
    '기술 그림 (배틀 애니메이션)': 'Move graphics (battle animation)', '이 롬에서 기술 애니메이션 그림을 찾지 못했어요': "Couldn't find move animation graphics in this ROM",
    '이 기술 애니메이션은 따로 불러오는 그림이 없어요 (화면 흔들기·색 바꾸기만 써요)': "This move's animation loads no graphics (it only shakes the screen or changes colors)",
    '그림 묶음은 여러 기술이 같이 써요. 바꾸면 같은 그림을 쓰는 기술이 모두 바뀌어요. 1번(흰색)은 투명, 나머지 3색은 기술마다 게임이 정한 색으로 나와요 (여기서는 회색으로 보여요).': 'Graphic sets are shared by several moves; changing one changes every move that uses it. Color 1 (white) is transparent; the other 3 colors are set by the game per move (shown in gray here).',
    '이 기술만 쓰는 그림이에요': 'Only this move uses this graphic', '게임에서 조각을 붙이고 뒤집어서 만드는 모양': 'Shapes the game builds by joining and flipping the pieces',
    '그림 묶음은 여러 기술이 같이 써요. 바꾸면 같은 그림을 쓰는 기술이 모두 바뀌어요. 1번 색은 투명이고, 나머지 3색은 색 묶음(회색·노랑·빨강·초록·파랑·갈색)에서 정해져요.': 'Graphic sets are shared by several moves; changing one changes every move that uses it. Color 1 is transparent; the other 3 come from a color set (gray, yellow, red, green, blue, brown).',
    '색 묶음:': 'Color set:', '중간색': 'Mid', '이 색은 배틀 중인 포켓몬 색을 그대로 써서 여기서는 못 바꿔요.': "This uses the battling Pokémon's own colors, so it can't be changed here.", '이 그림만 쓰는 색 묶음이에요': 'Only this graphic uses this color set',
    '▶ 움직임 미리보기 (게임 프레임 그대로 반복)': '▶ Motion preview (game frames, looping)', '보통 속도': 'Normal speed', '느리게 (½)': 'Slow (½)', '아주 느리게 (¼)': 'Very slow (¼)', '그림 파일 불러오기…': 'Load image file…',
    '기술 사운드 에디터': 'Move Sound Editor', '이 롬에서 효과음 데이터를 찾지 못했어요.': "Couldn't find sound effect data in this ROM.", '(다른 효과음 그대로 가져오기 ▼)': '(Copy another sound effect ▼)',
    '🎧 소리 파일로 효과음 만들기 🌟': '🎧 Make a sound effect from a file 🌟', '이 소리를 쓰는 기술': 'Moves using this sound', '효과음 음표 (고치면 새 소리로 넣어요)': 'Sound effect notes (edits are saved as a new sound)',
    '⚔ 기술 소리': '⚔ Move sounds', '🔔 그 밖의 효과음': '🔔 Other sound effects', '기술·소리 찾기': 'Find move / sound', '→ 소리:': '→ Sound:', '이 기술의 첫 소리 듣기': "Play this move's first sound",
    '기술 애니메이션 표를 찾지 못했어요': "Couldn't find the move animation table", '이 소리를 쓰는 기술이 없어요 (메뉴·필드 등에서 나는 효과음이에요)': 'No move uses this sound (it plays in menus, the field, etc.)',
    '여러 기술이 같은 효과음을 같이 쓸 수 있어요. 이 소리를 고치면 위 기술들 소리가 모두 바뀌어요. 기술 하나만 다른 소리로 바꾸려면 [→ 소리]에서 다른 효과음을 고르세요.': 'Several moves can share one sound effect. Editing it changes all the moves above. To change just one move, pick a different sound in [→ Sound].',
    '⚠ 이 효과음은 음악 형식(팡파르·멜로디)이라 여기서는 미리듣기·편집이 안 돼요. 다른 효과음을 가져오거나 소리 파일로 새로 만들면 바꿀 수 있어요.': "⚠ This sound effect is in music format (fanfare/melody), so it can't be previewed or edited here. You can still replace it by copying another sound effect or making one from a file.",
    '바꾼 게 없어요': 'Nothing changed', '음악 형식 효과음은 여기서 고칠 수 없어요': "Music-format sound effects can't be edited here", '롬에 소리를 넣을 빈 공간이 부족해요': 'Not enough free space in the ROM for the sound', '■ 정지': '■ Stop',
    '🎼 피아노 롤 — 막대를 위아래로 끌면 음 높이 (Shift = 더 잘게) · 오른쪽 끝을 끌면 길이 · 마우스 휠 = 볼륨 · 빈 곳을 두 번 누르면 음 넣기 · 파랑·초록 = 사각파, 빨강 = 노이즈 · 빈 곳 클릭 = 재생 줄 옮기기 · 스페이스바 = 재생/멈춤 · Home = 처음으로': '🎼 Piano roll — drag a bar up/down for pitch (Shift = finer) · drag its right edge for length · mouse wheel = volume · double-click empty space to add a note · blue/green = square, red = noise · click empty space = move the playhead · Space = play/pause · Home = go to start',
    '🎹 건반을 누르면:': '🎹 Piano key:', '✕ 원래 크기로': '✕ Normal size', '고른 음의 높이 바꾸기': 'changes the selected note', '고른 음 뒤에 새 음 넣기': 'inserts a new note after it', '새 음 길이:': 'New note length:', '볼륨:': 'Volume:', '볼륨 변화:': 'Fade:',
    '＋ 끝에 음 추가': '＋ Add note at end', '⧉ 복사': '⧉ Duplicate', '▲ 위로': '▲ Up', '▼ 아래로': '▼ Down', '🗑 지우기 (Delete)': '🗑 Delete', '채널 비우기': 'Clear channel', '⇧ 전체 반음 올리기': '⇧ All up a semitone', '⇩ 전체 반음 내리기': '⇩ All down a semitone',
    '이 채널의 음을 모두 지울까요?': 'Delete all notes in this channel?', '음이 없어요. 아래 건반을 누르면 음이 들어가요': 'No notes. Press a piano key below to add one',
    '표에서 음을 누르면 골라져요 (↑↓ 키로 옮기기 · Delete 키로 지우기) · 길이 1프레임 = 1/60초 · 볼륨 변화: −면 점점 작게, +면 점점 크게 (숫자가 작을수록 빠르게)': 'Click a note in the table to select it (↑↓ to move · Delete to remove) · 1 frame = 1/60 s · Fade: − gets quieter, + gets louder (smaller = faster)',
    '🥁 쉭 (아주 높음)': '🥁 Hiss (highest)', '🥁 치익': '🥁 Tsss', '🥁 스윽': '🥁 Swish', '🥁 샤아': '🥁 Shaa', '🥁 쏴아': '🥁 Whoosh', '🥁 후우': '🥁 Hoo', '🥁 부우': '🥁 Booo', '🥁 쿠웅 (아주 낮음)': '🥁 Boom (lowest)',
    '트레이너 그림': 'Trainer Pics', '트레이너 그림 편집': 'Trainer Picture Editor', '트레이너 찾기': 'Find trainer', '주인공': 'Player', '트레이너 직업': 'Trainer classes',
    '★ 주인공 — 트레이너 카드': '★ Player — Trainer Card', '★ 주인공 — 배틀 뒷모습': '★ Player — Battle back sprite',
    '배틀할 때 화면 왼쪽 아래에 나오는 주인공 뒷모습이에요. 48×48 픽셀 (6×6 칸). 색은 트레이너 카드 그림과 같은 색을 같이 써요 (하나를 바꾸면 둘 다 바뀌어요).': "The player's back sprite shown at the bottom left in battle. 48×48 pixels (6×6 tiles). It shares its colors with the Trainer Card picture (changing one changes both).",
    '메뉴에서 내 이름(트레이너 카드)을 열면 나오는 주인공 그림이에요. 40×56 픽셀 (5×7 칸). 색은 배틀 뒷모습과 같이 쓰고, 게임 시작 때 주인공 그림 색과는 따로예요.': 'The player picture shown on the Trainer Card (your name in the menu). 40×56 pixels (5×7 tiles). It shares colors with the battle back sprite, separate from the intro player picture.', ' ★ 주인공': ' ★ Player', '밝은색': 'Light', '어두운색': 'Dark', '사진 가져오기…': 'Import picture…',
    '사진의 색으로 트레이너 색도 바꾸기': "Also take the trainer's colors from the picture",
    '이 롬에서는 트레이너 그림을 바꿀 수 없어요 (지금은 금·은만 돼요).': "This ROM's trainer pictures can't be edited (Gold/Silver only for now).",
    '트레이너 그림을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.': 'Trainer picture changed. Press [Save] to write it to the ROM file.',
    '메뉴에서 내 이름(트레이너 카드)을 열면 나오는 주인공 그림이에요. 40×56 픽셀 (5×7 칸). 색은 게임 시작 때 주인공 그림 색과 따로 정해요.': 'The player picture shown on the Trainer Card (your name in the menu). 40×56 pixels (5×7 tiles). Its colors are set separately from the intro player picture.',
    '게임을 처음 시작할 때 오박사가 이름을 물어볼 때, 그리고 명예의 전당에 나오는 주인공 그림이에요. 56×56 픽셀 (7×7 칸).': 'The player picture shown when Prof. Oak asks your name at the start, and in the Hall of Fame. 56×56 pixels (7×7 tiles).',
    '배틀할 때 나오는 이 직업의 트레이너 그림이에요. 56×56 픽셀 (7×7 칸). 같은 직업 트레이너가 모두 같이 바뀌어요.': 'The battle picture for this trainer class. 56×56 pixels (7×7 tiles). Every trainer of this class changes together.',
    '· 배경이 투명한 PNG가 제일 좋아요\n· 트레이너 카드 그림은 가로 40픽셀이라 사진 가운데 부분을 써요': '· A PNG with a transparent background works best\n· The Trainer Card picture is 40 pixels wide, so the middle of the picture is used', '찾는 게 없어요': 'No matches',
    '마리': '', '만날 확률': 'Encounter rate', '모두 체크': 'Check all', '모두 해제': 'Uncheck all', '모든 시간': 'Any time', '물 위 (파도타기)': 'On water (Surf)', '물건 ': 'Items: ', '물건 추가': 'Add item', '바꾸기': 'Replace',
    '바뀐 뒤': 'After', '바뀐 뒤 대사': 'Text after change', '받을 때 기술 (그 레벨까지 배운 기본 기술): ': 'Moves when received (default moves at that level): ', '빼기': 'Remove', '상점 ': 'Mart ',
    '상점을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.': 'Mart changed. Press [Save] to write it to the ROM file.',
    '새 게임을 시작하면 오박사가 "이 세계에는 포켓몬이라는 생물이…" 하며 보여주는 포켓몬이에요.': 'The Pokémon Prof. Oak shows when a new game starts ("This world is inhabited by creatures called Pokémon…").',
    '아침': 'Morning', '안 바꾸기': "Don't replace", '야생 포켓몬을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.': 'Wild Pokémon changed. Press [Save] to write it to the ROM file.', '어디서 나오는 대사': 'Where it appears',
    '오박사 인트로 포켓몬을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.': 'Oak intro Pokémon changed. Press [Save] to write it to the ROM file.', '오박사 인트로: 그림 ': 'Oak intro: picture ',
    '왼쪽에서 구역을 고르세요.': 'Pick an area on the left.', '울음소리': 'Cry', '울음소리도 같은 포켓몬으로': 'Same Pokémon for the cry', '원   (되팔 때 ': '₩   (sells for ', '원)': '₩)', '이 NPC 대사 ': "This NPC's lines: ",
    '이 NPC 대사에는 다른 포켓몬 이름이 없어요 (이미 맞아요)': "This NPC's dialogue has no other Pokémon name (already matches)", '이 구역에는 야생 포켓몬이 나오지 않아요.': 'No wild Pokémon appear in this area.', '이 구역의 선물 포켓몬 ': 'Gift Pokémon in this area: ',
    '이 롬에서 상점 데이터를 찾지 못했어요': 'Mart data not found in this ROM', '이 롬에서 선물 포켓몬을 찾지 못했어요': 'No gift Pokémon found in this ROM', '이 롬에서는 오박사 인트로 위치를 찾지 못했어요.': 'The Oak intro was not found in this ROM.',
    '이 선물 포켓몬만 위 기술 4개를 가지고 와요 (다른 곳의 같은 포켓몬은 그대로)': 'Only this gift comes with the 4 moves above (the same Pokémon elsewhere is unchanged)', '이 포켓몬만 기술 직접 정하기': 'Custom moves for this Pokémon only',
    '적용했어요. [저장하기]를 눌러야 롬 파일에 기록돼요': 'Applied. Press [Save] to write it to the ROM file', '지금 대사': 'Current text', '지닌 도구': 'Held item', '지도에서 몬스터볼이나 NPC를 클릭하거나 위에서 고르세요': 'Click a Poké Ball or NPC on the map, or pick above',
    '지도에서 점원을 클릭하거나 위에서 상점을 고르세요': 'Click a clerk on the map or pick a mart above', '칸 ': 'Slot ', '포켓몬 그림:': 'Pokémon picture:', '포켓몬 울음소리:': 'Pokémon cry:', '포켓몬 이름표를 찾지 못해서 편집할 수 없어요.': 'Pokémon name table not found, so this cannot be edited.',
    '포켓몬을 바꾸면 이 NPC 대사 속 이름·타입도 같이 바꾸기': "When changing the Pokémon, also update its name/type in this NPC's dialogue", '풀숲 · 동굴': 'Grass · Cave', '낮': 'Day', '밤': 'Night',
    // NPC · 이벤트 탭
    ' · 위치 (': ' · position (', "' NPC 를 놓았어요. [저장하기]를 눌러야 롬에 기록돼요": "' NPC placed. Press [Save] to write it to the ROM",
    "' 은(는) 이 지역 목록에 없어서 게임에선 다른 인물로 보여요 (지도의 ? 표시). ✓ 붙은 모습은 그대로 보여요.\n": "' is not in this region's list, so it shows as a different person in game (? on the map). Looks marked ✓ show correctly.\n",
    "' 을(를) 지울까요? (지운 뒤 Ctrl+Z 로 되돌릴 수 있어요)": "'? (Ctrl+Z can undo it)", "' 의 말 걸었을 때 이벤트를 '": "'s talk event with '", '(가로 0~': '(x 0–', "'(으)로 바꿀까요?\n원래 하던 이벤트(대사·스토리 진행 등)는 더 이상 안 해요.": "'?\nThe original event (dialogue, story progress…) will no longer happen.",
    '✓ 붙은 모습은 이 지역에서 게임에 그대로 보여요.\n': 'Looks marked ✓ show correctly in game in this region.\n', 'NPC를 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.': 'NPC changed. Press [Save] to write it to the ROM file.', '개수': 'Qty',
    '게임 기본 트레이너처럼, 시야 안에서 눈이 마주치면 다가와서 배틀해요. 이기면 다음부터는 배틀 후 대사 (또는 사라짐). 한 방향을 보고 서 있어야 해요.': 'Like a normal game trainer: walks over and battles when you enter its line of sight. After you win it shows the after-battle text (or disappears). It must face one direction.',
    '고른 NPC의 이벤트를 이걸로 바꾸기': "Replace the selected NPC's event with this", '고른 칸: x ': 'Selected tile: x ', '기본 기술로': 'Default moves', '기술이 하나도 없는 포켓몬이 있어요': 'A Pokémon has no moves',
    '눈 마주침 트레이너는 한 방향을 보고 서 있어야 해요 (방향을 위·아래·왼쪽·오른쪽 중 하나로)': 'A sight trainer must face one direction (up, down, left or right)',
    '눈 마주침 트레이너는 한 방향을 보고 서 있어야 해요. 위 [모습·방향 적용]으로 방향부터 바꿔 주세요': 'A sight trainer must face one direction. Change the direction first with [Apply look & direction] above',
    '도착 구역': 'Destination area', '도착 위치 고르기 — ': 'Pick destination — ', '돌아다님': 'Wanders', '말 걸면 대사를 해요.': 'Says a line when talked to.',
    "말 걸면 상점이 열려요. 파는 물건은 '프렌들리숍' 탭의 목록 중 하나예요 (목록을 고치면 같은 목록을 쓰는 상점도 같이 바뀜).": "Opens a mart when talked to. The goods are one of the lists in the 'Poké Mart' tab (editing a list changes every mart using it).",
    '말 걸면 아이템을 줘요 (가방이 꽉 차면 다음에 다시 줌). 한 번만이면 받은 뒤에는 다른 대사, 여러 번이면 말 걸 때마다 줘요.': 'Gives an item when talked to (tries again later if the bag is full). Once only: different text afterwards; repeatable: gives every time.',
    '말 걸면 울음소리 뒤에 야생 포켓몬 배틀 (잡을 수 있어요). 한 번만이면 끝나고 사라지고, 여러 번이면 말 걸 때마다 배틀해요. 모습은 포켓몬 모양을 고르면 좋아요.': 'Cry, then a wild Pokémon battle when talked to (catchable). Once only: disappears afterwards; repeatable: battles every time. A Pokémon look works best.',
    '말 걸면 트레이너 배틀. 한 번만이면 이긴 뒤엔 다른 대사(또는 사라짐), 여러 번이면 말 걸 때마다 배틀. 눈이 마주치면 다가오는 트레이너는 맨 아래 종류예요.': 'Trainer battle when talked to. Once only: different text after winning (or disappears); repeatable: battles every time. Trainers who approach on sight are the last kind.',
    '말 걸면 포켓몬을 줘요 (손에 6마리면 PC 로 감). 기술 4개를 하나하나 정할 수 있어요 (PC 로 간 경우엔 기본 기술). 한 번만 또는 여러 번.': 'Gives a Pokémon when talked to (goes to the PC if the party is full). You can set all 4 moves (default moves if sent to the PC). Once only or repeatable.',
    '모습·방향 적용': 'Apply look & direction', '받을 아이템': 'Item to receive', '방향': 'Direction', '번 [': ' [', '번 · 모습 ': ' · look ', '번 · 위치 (': ' · position (', '불러왔어요. 고친 뒤 [고른 NPC의 이벤트를 이걸로 바꾸기]를 누르세요': "Loaded. Edit, then press [Replace the selected NPC's event with this]",
    '새 NPC 로 놓기': 'Place as a new NPC', '새 트레이너 팀 만들기': 'Create a new trainer team', '새 트레이너 팀을 만들었어요 (': 'Created a new trainer team (', '새 팀 만들기…': 'New team…', '시야': 'Sight', '쓰는 곳 없음': 'unused',
    '아래를 보고 서 있음': 'Stands facing down', '엔터 = 다음 줄, 빈 줄 = 다음 말풍선, 한 줄 18자까지. {주인공} {라이벌} 사용 가능': 'Enter = next line, blank line = next text box, 18 characters per line. {주인공} (player) and {라이벌} (rival) can be used',
    '여기로 정하기': 'Use this tile', '여러 번 할 수 있게 (체크 안 하면 한 번만)': 'Repeatable (unchecked = once only)',
    "예를 고르고 '받을 아이템'을 가지고 있으면 1개 가져가고 '줄 아이템'을 줘요. 한 번만 또는 여러 번.": "If the player says Yes and has the 'item to receive', it takes 1 and gives the 'item to give'. Once only or repeatable.",
    '예를 고르면 다른 구역의 원하는 자리로 순간이동해요. 도착 구역을 고르고 [지도에서 도착 위치 고르기…]로 그 지도에서 직접 클릭하세요.': 'Teleports the player to a spot in another area if they say Yes. Pick the destination area and click the spot with [Pick destination on map…].',
    '오른쪽을 보고 서 있음': 'Stands facing right', '옮길 자리를 지도에서 클릭하세요 (Esc = 취소)': 'Click the new spot on the map (Esc = cancel)', '왼쪽을 보고 서 있음': 'Stands facing left', '위를 보고 서 있음': 'Stands facing up',
    '이 NPC 지우기': 'Delete this NPC', '이 이벤트 불러와서 고치기': 'Load this event to edit', '이 팀으로 정하기': 'Use this team', '이라 서 있을 수 없는 칸이에요': ' — the player cannot stand here', '이벤트 종류': 'Event type',
    '이벤트가 끝나면 NPC가 사라짐 (다시 와도 없음)': 'NPC disappears after the event (stays gone)', '이벤트를 바꿨어요. [저장하기]를 눌러야 롬에 기록돼요': 'Event changed. Press [Save] to write it to the ROM', '읽지 못함 (': 'Could not read (',
    '제자리에서 두리번': 'Looks around', '주인공이 나타날 칸을 클릭하세요. 빨강 = NPC, 보라 = 문·계단(워프)': 'Click the tile where the player appears. Red = NPC, purple = door/stairs (warp)', '줄 아이템': 'Item to give',
    '지도에서 NPC를 클릭하면 어떤 NPC 인지, 무슨 이벤트를 하는지 나와요': 'Click an NPC on the map to see who it is and what event it runs', '지도에서 NPC를 클릭하세요': 'Click an NPC on the map', '지도에서 고른 NPC': 'NPC selected on the map',
    '지도에서 고른 NPC 바꾸기 (모습·위치는 그대로, 말 걸었을 때 이벤트만)': 'Change the selected NPC (keeps look & position, replaces only the talk event)', '지도에서 놓을 자리를 클릭하세요 (Esc = 취소)': 'Click the spot on the map (Esc = cancel)',
    '지도에서 도착 위치 고르기…': 'Pick destination on map…', '지도에서 새 NPC 를 놓을 자리를 클릭하세요': 'Click where to place the new NPC', '지도에서 위치 옮기기': 'Move on map', '지도에서 자리 골라 새 NPC 추가': 'Add a new NPC (click a spot on the map)',
    '지도에서 자리를 클릭하세요': 'Click a spot on the map', '직업': 'Class', '직업에 따라 배틀 때 나오는 트레이너 그림·이름 앞 글자·음악이 정해져요': "The class sets the trainer's battle picture, title and music",
    '질문 뒤에 예/아니요가 나오고, 고른 것에 따라 다른 대사를 해요.': 'Asks a question with Yes/No and says different text for each answer.', '처음 말 걸 때와 그 다음부터 대사가 달라요.': 'Says one line the first time and another line afterwards.',
    '취소': 'Cancel', '트레이너 이름을 써주세요': 'Enter a trainer name', '트레이너 팀': 'Trainer team', '특별한 움직임': 'Special movement', '파는 물건': 'Goods', '포켓몬 추가': 'Add Pokémon', '포켓몬마다 기술 직접 정하기': 'Custom moves per Pokémon',
    '포켓몬센터 간호순과 똑같이 포켓몬을 회복해 줘요 (대사도 같아요).': 'Heals your Pokémon just like the Pokémon Center nurse (same text).', '포켓몬에게 도구 지니게 하기': 'Give Pokémon held items', '표지판 ': 'Sign ', ' (그대로)': ' (keep)',
    // 워프·트리거 탭
    '  (지도 그림을 못 그렸어요)': '  (map could not be drawn)', '  워프 (': '  Warp (', ' (워프 ': ' (warp ', ' · [💾 트리거 저장]': ' · [💾 Save triggers]', ' · [💾 트리거 저장]을 누르면 고쳐져요': ' · press [💾 Save triggers] to fix', '➕ 새 팀 만들기...': '➕ New team...',
    ' 은(는) 스토리가 진행되면(예: 포켓몬을 받은 뒤) 안 켜지게 돼 있었어요 → 항상 켜지게 바꿨어요': ' were set to stop working once the story advances (e.g. after getting a Pokémon) → changed to always on',
    ' 을(를) 찾지 못했어요': ' not found', ' 의 걸어오는 길이 안 맞아요': ' walking path does not match', '➕ 지도에 워프 놓기': '➕ Place warp on map', '➕ 지도에 트리거 놓기': '➕ Place trigger on map', ' 칸 (': ' tile (',
    '(구역을 고르세요)': '(pick an area)', '(트레이너를 고르세요)': '(pick a trainer)', ') 에 워프를 놓았어요 · 도착 구역을 고르고 [💾 워프 저장]': ') warp placed · pick the destination and [💾 Save warps]', ') 에 트리거를 놓았어요 · 동작·대사를 정하고 [💾 트리거 저장]': ') trigger placed · set the action/text and [💾 Save triggers]',
    '). 그대로 두면 지금처럼 동작해요.\n대사 칸은 [대사] 탭의 같은 대사와 연결돼 있어서 여기서 고치면 바로 반영돼요 ({ } 표시는 지우지 마세요).\n고친 대사는 메인 화면 [저장하기]로 기록돼요.': '). Left as is, it keeps working as now.\nThe text box is linked to the same line in the [Dialogue] tab, so edits here apply there too (keep the { } codes).\nEdited text is written with [Save] on the main screen.',
    "). 그대로 두면 지금처럼 동작해요.\n이 이벤트는 대사가 없거나 읽을 수 없는 형태예요. 위 '밟으면'을 고르면 새 동작으로 다시 만들어요.": "). Left as is, it keeps working as now.\nThis event has no readable text. Choose 'When stepped on' above to rebuild it with a new action.",
    '▶ 지도에서 워프(문)를 놓을 칸을 클릭하세요': '▶ Click the tile for the warp (door)', '▶ 지도에서 트리거를 놓을 칸(주인공이 밟을 곳)을 클릭하세요': '▶ Click the tile for the trigger (where the player steps)', '◀ 이전 지도': '◀ Previous map', '➡ 이 구역으로 가기': '➡ Go to this area',
    '❌ 삭제': '❌ Delete', '⚡ 이 구역의 트리거 (지도의 주황 T 칸)': '⚡ Triggers in this area (orange T tiles)', '⚡ 타일 밟기 트리거': '⚡ Tile triggers', 'FF = 항상 켜짐 (추천) · 0,1… = 그 지도 스토리 단계일 때만': 'FF = always on (recommended) · 0,1… = only at that story stage of the map',
    'NPC 자리가 바뀌어서 ': 'NPC moved, so ', '🌀 워프 (문 · 계단 · 동굴 입구)': '🌀 Warps (doors · stairs · cave entrances)', '🌀 이 구역의 워프 (지도의 보라 W 칸)': '🌀 Warps in this area (purple W tiles)', '🌀 지도에 워프(W)·트리거(T)·NPC 번호(#) 표시': '🌀 Show warps (W), triggers (T) and NPC numbers (#) on the map',
    '💾 워프 저장': '💾 Save warps', '💾 트리거 저장': '💾 Save triggers', '📍 지도에서 옮기기': '📍 Move on map', '🗺 도착 지도 보기': '🗺 View destination', '고른 NPC가 걸어와서 대사 후 도구를 줘요. 가방이 꽉 차면 안 주고 다음에 다시 줘요.': 'The NPC walks over, talks and gives an item. If the bag is full it tries again next time.',
    '고른 NPC가 걸어와서 대사 후 포켓몬을 줘요 (그 레벨까지 배우는 기술). 파티가 꽉 차면 박스로 가요.': 'The NPC walks over, talks and gives a Pokémon (with moves learned by that level). It goes to the PC box if the party is full.',
    '다가올 NPC:': 'Approaching NPC:', '대사 (한 줄 18자):': 'Text (18 chars/line):', '대사를 고쳤어요 · [대사] 탭에도 반영 · [저장하기]로 기록돼요': 'Text edited · also shown in the [Dialogue] tab · written with [Save]', '대사를 보여준 뒤 주인공을 한 칸 밀어내서 지나가지 못하게 막아요.': 'Shows the text, then pushes the player back one tile so they cannot pass.',
    '도착 구역 ': 'Destination area ', '도착 구역:': 'Destination area:', '도착 구역의 W번호 칸에 나타나요': 'Player appears on that W number in the destination', '도착 워프 번호:': 'Destination warp #:', '롬에 들어있는 이벤트예요 (': 'Event already in the ROM (',
    '문 위치 X / Y:': 'Door X / Y:', '밀려날 방향:': 'Push direction:', '발동 장면 번호:': 'Scene ID:', '밟는 칸 X / Y:': 'Tile X / Y:', '밟으면:': 'When stepped on:', '배틀에서 이기면': 'when you win', '배틀할 트레이너:': 'Trainer to battle:',
    '번 워프가 이 지도에 없어요 (게임에서 이상한 곳에 나올 수 있어요)': ' warp does not exist on this map (the player may appear somewhere odd)', '번)': ')',
    '분홍 굵은 테두리 = 도착 위치 · 이 지도의 W 칸을 더블클릭하면 그 워프의 도착지로 계속 따라가요 · 출발: ': 'Thick pink border = arrival spot · double-click a W tile here to follow that warp too · from: ',
    '상대가 진 대사:': 'Text when foe loses:', '새 트레이너 팀을 만들었어요: ': 'Created a new trainer team: ', '선택한 워프 상세 설정': 'Selected warp', '선택한 트리거 상세 설정': 'Selected trigger', '워프 도착지': 'Warp destination',
    '워프 저장 완료! 메인 화면 [저장하기]로 파일에 기록돼요': 'Warps saved! Press [Save] on the main screen to write the file', '워프·트리거를 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.': 'Warps/triggers changed. Press [Save] to write them to the ROM file.',
    '워프를 고쳤어요 · [💾 워프 저장]을 눌러야 기록돼요': 'Warp edited · press [💾 Save warps] to keep it', '워프를 저장할 공간이 부족합니다.': 'Not enough space to save the warps.', '워프를 지웠어요 · [💾 워프 저장]을 눌러야 기록돼요': 'Warp deleted · press [💾 Save warps] to keep it',
    '이 구역엔 트리거가 없어요. [➕ 지도에 트리거 놓기]를 누르고 지도에서 칸을 클릭하세요.': 'This area has no triggers. Press [➕ Place trigger on map] and click a tile.', '이 칸을 밟으면 (대사가 있으면 보여준 뒤) 고른 구역의 X, Y 로 순간이동해요.': 'Stepping here teleports the player (after the text, if any) to X, Y of the chosen area.',
    '이 칸을 밟으면 대사창이 떠요.': 'Stepping here shows a text box.', '이동할 곳 / X / Y:': 'Destination / X / Y:',
    "주인공이 이 칸을 밟으면 고른 NPC가 걸어와서 대사 후 고른 트레이너 팀으로 배틀해요.\n지면 원래 게임처럼 포켓몬센터로 돌아가요. '한 번만'을 켜면 이긴 뒤엔 다시 안 일어나요.": "When the player steps here, the NPC walks over, talks and battles with the chosen team.\nLosing returns you to a Pokémon Center as usual. With 'Once only' on, it won't happen again after you win.",
    '주인공이 이 칸을 밟으면 고른 NPC가 옆 칸까지 걸어와 말을 걸고 제자리로 돌아가요.\n지도에 빨간 화살표로 NPC가 오는 길이 보여요.': 'When the player steps here, the NPC walks up next to them, talks and walks back.\nThe red arrow on the map shows its path.',
    '주인공이 이쪽으로 한 칸 걸어가요': 'The player walks one tile this way', '줄 도구 / 개수:': 'Item / quantity:', '줄 포켓몬 / 레벨:': 'Pokémon / level:', '지도에서 고르기…': 'Pick on map…', '지도에서 워프(문)를 놓을 칸을 클릭하세요': 'Click the tile for the warp (door)', '지도에서 칸을 클릭하세요': 'Click a tile on the map',
    '지도에서 트리거를 놓을 칸(주인공이 밟을 곳)을 클릭하세요': 'Click the tile for the trigger (where the player steps)', '지도의 #번호': '# numbers on the map', '지도의 W 칸을 더블클릭해도 돼요': 'You can also double-click a W tile on the map',
    '트리거 저장 완료! 메인 화면 [저장하기]로 파일에 기록돼요': 'Triggers saved! Press [Save] on the main screen to write the file', '트리거를 고쳤어요 · [💾 트리거 저장]을 눌러야 기록돼요': 'Trigger edited · press [💾 Save triggers] to keep it', '트리거를 지웠어요 · [💾 트리거 저장]을 눌러야 기록돼요': 'Trigger deleted · press [💾 Save triggers] to keep it',
    '한 번만 (이벤트가 끝나면 다시 밟아도 안 일어남)': 'Once only (does not happen again after the event)', '한 줄이 18자를 넘으면 게임에서 잘려요: ': 'Lines over 18 characters are cut off in game: ',
    // 지도 블록 탭
    '  ·  충돌 ': '  ·  collision ', ' 등': ' etc.', '(색 없음: 걸을 수 있는 바닥)': '(no color: walkable floor)', ')과 같이 써요. 고치면 모두 같이 바뀌어요.': '). Editing changes all of them.', '⚠ 이 지도 모양은 다른 구역 ': '⚠ This map layout is shared with ',
    '고른 블록: ': 'Selected block: ', '곳(': ' other areas (', '곳과 같이 써요.\n\n[확인] 모두 같이 바꾸기\n[취소] 다른 방법 고르기': ' other areas.\n\n[OK] Change all of them\n[Cancel] Other options', '다시 할 블록 편집이 없어요': 'Nothing to redo', '다시하기 (Ctrl+Y)': 'Redo (Ctrl+Y)', '되돌리기 (Ctrl+Z)': 'Undo (Ctrl+Z)',
    '되돌릴 블록 편집이 없어요': 'Nothing to undo', '못 지나감': 'Blocked', '문·계단·구멍': 'Door / stairs / hole', '블록 ': 'Block ', '아래에서 블록을 고르고 위 지도에 칠하세요.   왼쪽 클릭·드래그: 칠하기   Shift+드래그: 네모로 채우기   오른쪽 클릭: 지도에 있는 블록 집기\n블록마다 지나갈 수 있는지가 정해져 있어서, 블록을 바꾸면 충돌(벽·물·풀숲)도 같이 바뀌어요.':
      'Pick a block below and paint it on the map above.   Left click/drag: paint   Shift+drag: fill rectangle   Right click: pick a block from the map\nEach block has fixed collision, so changing blocks also changes walls, water and grass.',
    '왼쪽에서 구역을 고르세요': 'Pick an area on the left', '이 구역만 따로 고치기': 'Edit this area separately', '이 구역만 따로 고칠까요? (빈 공간에 복사)\n\n[확인] 이 구역만 따로 고치기\n[취소] 그만두기': 'Edit only this area? (copied to free space)\n\n[OK] Edit this area separately\n[Cancel] Stop',
    '이 구역만 쓰는 지도 모양으로 복사했어요. 이제 다른 구역은 바뀌지 않아요.': 'Copied to a layout used only by this area. Other areas will no longer change.', '이 구역은 블록을 편집할 수 없어요': 'Blocks of this area cannot be edited', '이 지도 모양은 다른 구역 ': 'This map layout is shared with ',
    '지나갈 수 있는 곳 표시': 'Show collision', '지도 칸 (': 'Map block (', '칸을 다시 바꿨어요': ' blocks redone', '칸을 되돌렸어요': ' blocks undone', '칸을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.': ' blocks changed. Press [Save] to write them to the ROM file.',
    // 캐릭터 그림
    ' — 16×16 장면 ': ' — 16×16 frames: ', ' · 그림 위치 ': ' · graphics at ', '(아직 적용 안 함)': '(not applied yet)', ')도 같이 써요. 고치면 같이 바뀌어요.': ') use it too. Editing changes them as well.',
    '· 필드 캐릭터는 16×16 장면 여러 장이고, 색은 투명 + 3색이에요 (2세대 규칙)\n· 색은 캐릭터마다 따로가 아니라 8개 색 묶음 중 하나를 골라 써요. 묶음의 색을 바꾸면 같은 묶음을 쓰는 모든 캐릭터 색이 바뀌어요\n· 새 캐릭터 번호를 늘릴 수는 없어서, 잘 안 쓰는 캐릭터 하나를 골라 새 모습으로 바꾸는 방식이에요\n· 적용한 뒤 메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요':
      '· Overworld characters are several 16×16 frames with transparency + 3 colors (Gen 2 rule)\n· Colors come from one of 8 shared palettes, not per character. Changing a palette changes every character using it\n· New character IDs cannot be added, so replace a rarely used character with a new look\n· After applying, press [Save] on the main screen to write it to the ROM file',
    '⚠ 이 그림을 다른 캐릭터 ': '⚠ Other characters (', '개(': ' — ', '개도 같이 써요.\n\n[확인] 모두 같이 바꾸기\n[취소] 다른 방법 고르기': ' other characters use this picture too.\n\n[OK] Change all of them\n[Cancel] Other options', '다른 캐릭터 그림을 바탕으로…': 'Start from another character…', '도트로 그리기…': 'Draw pixels…',
    '명 사용)': ' users)', '명. 묶음의 색은 [도트로 그리기]에서 바꿀 수 있어요.': '. Palette colors can be changed in [Draw pixels…].', "명도 같이 바뀌어요. 걷는 장면은 '좌우 대칭'을 끄고, 정면은 켜고 그리면 편해요. 숫자키 1~4 = 색": " other characters change too. Turn 'Mirror' off for walking frames and on for front views. Keys 1–4 = color",
    '바탕으로 쓸 캐릭터 (누르면 그 그림으로 시작)': 'Character to start from (click to use its picture)', '번 ': ' ', '번 묶음 (': ' palette (', '번 색 묶음을 써요. 같은 묶음을 쓰는 캐릭터 ': '. Other characters using it: ', '번 색 묶음을 쓰는 다른 캐릭터 ': ' — other characters using that palette: ', '색': 'Color', '색 묶음': 'Palette',
    '이 그림은 다른 캐릭터 ': 'This picture is used by ', '이 롬에서 필드 캐릭터 그림 데이터를 찾지 못했어요.': 'Overworld sprite data was not found in this ROM.', '이 캐릭터는 ': 'This character uses palette ',
    '이 캐릭터만 따로 복사해서 바꿀까요?\n\n[확인] 이 캐릭터만 바꾸기\n[취소] 그만두기': 'Copy and change only this character?\n\n[OK] Change only this character\n[Cancel] Stop', '이 캐릭터만 따로 쓰기': 'Give this character its own copy', '이 캐릭터만 쓰는 그림으로 복사했어요': 'Copied to a picture used only by this character',
    '장 (빨간 세로줄로 나눔). 1번 색은 투명, 2~4번 색은 RGB 로 바꿀 수 있어요.\n색을 바꾸면 ': ' (split by red lines). Color 1 is transparent, colors 2–4 can be changed with RGB.\nChanging colors also changes palette ',
    '적용하지 않은 변경이 있어요. 버릴까요?': 'There are unapplied changes. Discard them?', '캐릭터 그림을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.': 'Overworld sprite changed. Press [Save] to write it to the ROM file.', '캐릭터 찾기': 'Search characters', '필드 캐릭터 그림 편집 (주인공·NPC·물건)': 'Overworld Sprite Editor (player · NPCs · objects)',
    // 포켓몬 그림
    '  ([색 고르기…], 색칸 오른쪽 클릭, R·G·B 로 바꾸기)': '  (change with [Pick color…], right-click a swatch, or R·G·B)', '  (장면 ': '  (frame ', ' 색은 앞·뒷모습이 같이 써요. 앞모습 크기(5·6·7칸)는 창을 닫은 뒤 [크기]에서 바꿔요. 숫자키 1~4 = 색 고르기': ' colors are shared by front and back. Change the front size (5·6·7 tiles) with [Size] after closing. Keys 1–4 = color',
    ' 칸). 2세대 포켓몬 그림은 4색: 1번 흰색·4번 검정은 고정이고, 2·3번 색은 RGB 로 마음대로 바꿀 수 있어요.\n': ' tiles). Gen 2 Pokémon pictures use 4 colors: 1 white and 4 black are fixed, 2 and 3 can be any RGB color.\n', ' 픽셀 (': ' pixels (',
    '(앞모습 그림으로 만듦 · 아직 적용 안 함)': '(made from the front picture · not applied yet)',
    '· 배경이 투명한 PNG가 제일 좋아요. 배경이 있으면 모서리 색을 배경으로 보고 자동으로 지워요\n· 큰 그림은 칸 크기에 맞게 줄이고, 원작처럼 4색으로 또렷하게 바꿔요 (흐릿한 번짐 없음)\n· 이미 도트로 된 작은 그림(56×56 이하)은 줄이지 않고 그대로 써요':
      '· A PNG with a transparent background works best. Otherwise the corner color is treated as background and removed\n· Large pictures are scaled down and turned into crisp 4-color pixel art like the originals\n· Small pixel art (56×56 or less) is used as is',
    '5×5 칸 (작음)': '5×5 tiles (small)', '6×6 칸 (보통)': '6×6 tiles (medium)', '7×7 칸 (큼)': '7×7 tiles (large)', 'PNG로 저장': 'Save PNG', '검은 테두리 자동으로 넣기 (큰 사진·그림일 때 추천)': 'Add a black outline automatically (recommended for large pictures)', '게임 크기 미리보기 (×2)': 'Game-size preview (×2)',
    '고정 ': 'fixed ', '뒷모습': 'Back', '뒷모습 (내 쪽)': 'Back (your side)', '뒷모습 사진 가져오기…': 'Import back picture…', '뒷모습은 6×6 칸 고정': 'Back sprites are fixed at 6×6 tiles', '보통': 'Normal', '보통 밝은색': 'Normal light', '보통 어두운색': 'Normal dark',
    '빛나는': 'Shiny', '빛나는 밝은색': 'Shiny light', '빛나는 어두운색': 'Shiny dark', '빛나는(색이 다른) 포켓몬 색으로 보기': 'Preview shiny colors', '사진 바꾸기 설정': 'Picture import settings', '색 고르기…': 'Pick color…',
    '안농은 글자마다 그림이 따로 있어서 여기서는 바꿀 수 없어요.': 'Unown has a separate picture for each letter, so it cannot be changed here.', '앞모습': 'Front', '앞모습 (상대 쪽)': "Front (opponent's side)", '앞모습 그림 한 장으로 뒷모습도 자동으로 만들기 (좌우 뒤집고 윗부분 확대)': 'Also make the back sprite from the front picture (flipped, upper part enlarged)',
    '앞모습 사진 가져오기…': 'Import front picture…', '앞모습 사진의 색으로 포켓몬 색도 바꾸기': "Use the front picture's colors for the Pokémon palette", '이 롬에서 포켓몬 그림 데이터를 찾지 못했어요.': 'Pokémon sprite data was not found in this ROM.',
    '이 색은 2세대 규칙상 고정이라 바꿀 수 없어요': 'This color is fixed by Gen 2 rules', '장면 순서 (왼쪽부터): ': 'Frame order (from left): ', '적용한 뒤 메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요': 'After applying, press [Save] on the main screen to write it to the ROM file',
    '점무늬로 중간 명암 표현하기 (원작 도트 느낌)': 'Use dithering for mid-tones (classic pixel look)', '크기': 'Size', '투명 ': 'transparent ', '포켓몬 그림 편집': 'Pokémon Sprite Editor', '포켓몬 그림을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.': 'Pokémon sprite changed. Press [Save] to write it to the ROM file.', '확인': 'OK',
    '흰색과 검정은 고정이고, 포켓몬마다 색 2개를 정할 수 있어요 (2세대 규칙). 색 칸을 누르면 바꿀 수 있어요.': 'White and black are fixed; each Pokémon has 2 custom colors (Gen 2 rule). Click a swatch to change it.',
    // 타이틀
    ' · 색 묶음 ': ' · palette ', ' · 화면 밖 (구름 줄은 흘러가며 보임)': ' · off screen (the cloud rows scroll into view)', '\n· 날아다니는 호오는 그림 위에 따로 움직이는 스프라이트라 여기엔 안 보여요 (가운데 빈 하늘)': '\n· The flying Ho-Oh is a separate moving sprite, so it is not shown here (the empty sky in the middle)',
    '· 색칸을 누르면 그 자리 색으로 찍고, 그 색을 [색 바꾸기…]나 R·G·B 숫자로 바꿀 수 있어요 (색칸 오른쪽 클릭 = 바로 바꾸기). 숫자키 1~4 = 색 자리\n': '· Click a swatch to draw with that slot; change it with [Change color…] or the R·G·B numbers (right-click a swatch = change right away). Keys 1–4 = color slot\n',
    '· 왼쪽 160픽셀(빨간 선 안)이 화면에 보여요. 구름 줄은 옆으로 흘러가서 256픽셀 전체가 보여요': '· The left 160 pixels (inside the red line) are on screen. The cloud rows scroll sideways, so all 256 pixels show',
    "· 화면을 영역으로 나눠 영역마다 4색 묶음 하나를 써요 (2세대 규칙). 찍는 색은 1~4번 '자리'이고, 실제 색은 그 자리가 속한 영역의 묶음 색이에요\n": "· The screen is split into regions, each using one 4-color palette (Gen 2 rule). You draw with color 'slots' 1–4; the actual color comes from that region's palette\n",
    '묶음 ': 'Palette ', '바꿀 색: 묶음 ': 'Color to change: palette ', '색 바꾸기…': 'Change color…', '색 영역 보기': 'Show color regions', '서로 다른 8×8 칸 ': 'Distinct 8×8 tiles ',    '이 롬에서 타이틀 화면 데이터를 찾지 못했어요 (타이틀 코드를 크게 바꾼 개조롬일 수 있어요).': 'Title screen data was not found in this ROM (it may be a hack with a heavily changed title).', '이 롬에서는 타이틀 색 위치를 찾지 못해서 색은 바꿀 수 없어요 (그림은 바꿀 수 있어요).': 'Title colors were not found in this ROM, so only the picture can be changed.',
    '이 롬은 타이틀 색 위치를 못 찾아서 색은 못 바꿔요': 'Title colors not found in this ROM, so colors cannot be changed', '적용하지 않은 변경이 있어요. 닫을까요?': 'There are unapplied changes. Close anyway?', '적용했어요. 메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요': 'Applied. Press [Save] on the main screen to write it to the ROM file', '좌우 대칭': 'Mirror',
    '타이틀 화면 그리기': 'Title Screen Editor', '타이틀 화면을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.': 'Title screen changed. Press [Save] to write it to the ROM file.', '타이틀화면': 'title_screen',
    // BGM
    '   — 지금: ': '   — now: ', '  (덜 쓰는 곡)': '  (rarely used)', '  ·  게임 속 소리 그대로 재생돼요': '  ·  plays exactly like in game', '  ·  지금 게임에선 다른 곡으로 바뀌어 있어요 ([게임에 넣기]로 되돌릴 수 있어요)': '  ·  currently replaced by another song in game ([Put in game] can restore it)',
    '  · 지도 ': '  · maps: ', '  ★바뀜': '  ★changed', ' (16분)': ' (16th)', ' (2분)': ' (half)', ' (4분)': ' (quarter)', ' (8분)': ' (8th)', ' (바꾼 곡)': ' (replaced)', ' (온음)': ' (whole)', ' (점2분)': ' (dotted half)', ' (점4분)': ' (dotted quarter)', ' (점8분)': ' (dotted 8th)',
    ' (편집·가져온 곡, ': ' (edited/imported, ', " 가 다른 곡으로 바뀌어 있어서 원곡 '": " was replaced by another song, so it was restored to the original '", "' 로 나와요.": "'.", ' 배경음악 → ': ' music → ', ' 스텝': ' steps', "' 원곡으로 나와요.": "' original.", "' 으로 되돌렸어요.": "'.",
    "' 은(는) 이미 원곡이에요.": "' is already the original.", "' 음악(0x": "' music (0x", "' 음악을 원곡으로 되돌렸어요.\n\n메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요.": "' music restored to the original.\n\nPress [Save] on the main screen to write it to the ROM file.",
    "' 음악이 이제 '": "' music now plays '", "' 이(가) 나오는 장면에서 이제 새 곡이 나와요.": "' scenes will now play the new song.", "' 이(가) 나오던 곳 (지도 ": "' used to play (", '(구역 ': '(', ")' 구역의 배경음악이 [": ")' music changed to [", ')이 이제 \'': ") now plays '",
    '. [저장하기]를 눌러야 롬 파일에 기록돼요.': '. Press [Save] to write it to the ROM file.', ']로 변경되었습니다!\n\n메인 화면에서 [저장하기]를 누르면 파일에 기록됩니다.': ']!\n\nPress [Save] on the main screen to write it to the file.', '\n[CH1 멜로디: ': '\n[CH1 melody: ',
    '\n\n메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요.': '\n\nPress [Save] on the main screen to write it to the ROM file.', '■ 정지': '■ Stop', '▶ 들어보기': '▶ Listen', '▶ 변환 사운드 미리듣기': '▶ Preview conversion', '▶ 전체 재생': '▶ Play all',
    '↩ 모든 음악 원곡으로': '↩ Restore all music', '↩ 이 번호 원곡으로 되돌리기': '↩ Restore this number', '✏ 편집본: 고친 음표로 재생돼요 (원곡 음색 일부 생략)': '✏ Edited: plays your notes (some original instrument details omitted)', '✅ BGM 에디터로 가져오기': '✅ Import into BGM editor',
    '✅ 게임에 넣기': '✅ Put in game', '✨ 8비트 도트 칩튠으로 변환하기': '✨ Convert to 8-bit chiptune', "⚠ 게임에서 '": "⚠ Places where '", '⚔ 트레이너 배틀': '⚔ Trainer battle', '① 게임 속 이 음악을 이 곡으로 바꾸기': '① Replace this in-game music with this song',
    '① 게임 속 이 음악을 이 곡으로 바꾸기 (구역 없이)': '① Replace this in-game music with this song (no areas)', '① 바꿀 게임 음악을 고르거나, ② 곡을 틀 구역을 하나 이상 고르세요.': '① Pick the in-game music to replace, or ② pick at least one area to play the song.', '1. 음악 파일 선택:': '1. Choose a music file:',
    '1스텝 (16분)': '1 step (16th)', '1스텝 = 16분음표 (최대 3분)': '1 step = 16th note (max 3 minutes)', '② (골라도 되고 안 골라도 돼요) 이 곡을 배경음악으로 틀 구역:': '② (optional) Areas that play this song as background music:', '2. 변환 설정': '2. Conversion settings',
    '2스텝 (8분)': '2 steps (8th)', '4스텝 (4분)': '4 steps (quarter)', '8스텝 (2분)': '8 steps (half)', '🌊 파도타기': '🌊 Surf', '🌿 야생 배틀': '🌿 Wild battle', '🎉 변환 성공! ': '🎉 Converted! ', '🎞 오프닝': '🎞 Opening', '🎧 MP3/MIDI 도트 변환 🌟': '🎧 MP3/MIDI → chiptune 🌟',
    '🎬 타이틀 화면': '🎬 Title screen', '🎮 게임에 곡을 넣었어요 · [저장하기]를 눌러야 기록돼요': '🎮 Song put in game · press [Save] to keep it', '🎮 지금 곡을 게임에 넣기 (타이틀·배틀·구역)...': '🎮 Put this song in the game (title · battle · areas)...', '🎯 스네어': '🎯 Snare',
    '🎵 CH2: 화음·서브 (사각파)': '🎵 CH2: harmony (square)', '🎵 원곡 BGM 불러오기 ▼': '🎵 Load original BGM ▼', '🎵 음악 파일(MP3, FLAC, WAV, OGG, M4A, MIDI 등)을 고르거나 끌어다 놓으세요.\n템포를 찾고 멜로디 · 화음 · 베이스 · 드럼을 나눠서 게임보이 4채널 칩튠으로 바꿔요.': '🎵 Choose or drop a music file (MP3, FLAC, WAV, OGG, M4A, MIDI…).\nIt finds the tempo and splits melody · harmony · bass · drums into Game Boy 4-channel chiptune.',
    '🎶 넣을 곡: ': '🎶 Song: ', '🎶 넣을 곡: 원곡 [0x': '🎶 Song: original [0x', '🎶 원곡: [0x': '🎶 Original: [0x', '🎶 지금 게임에서 나오는 곡: [0x': '🎶 Currently in game: [0x', '🎸 CH3: 베이스 라인 (웨이브)': '🎸 CH3: bass (wave)',
    '🎹 마우스로 건반을 누르면 음이 연주되고 현재 스텝에 바로 기록됩니다! [Delete: 쉼표]': '🎹 Click a key to play it and write it into the current step! [Delete: rest]', '🏅 관장 배틀': '🏅 Gym Leader battle', '🏥 포켓몬센터': '🏥 Pokémon Center', '💥 크래시': '💥 Crash',
    '📂 파일 찾기...': '📂 Browse...', '📋 메인 메뉴': '📋 Main menu', '📋 전곡 (번호순)': '📋 All songs (by number)', '🔊 CH1: 리드 멜로디 (사각파)': '🔊 CH1: lead melody (square)', '🔍 구역 찾기': '🔍 Search areas', '🔔 하이햇': '🔔 Hi-hat', '😠 라이벌 배틀': '😠 Rival battle',
    '🚲 자전거': '🚲 Bicycle', '🥁 CH4: 퍼커션/드럼 (노이즈)': '🥁 CH4: percussion (noise)', '🥁 킥': '🥁 Kick', '가져온 곡: 편집본으로 재생돼요': 'Imported song: plays as edited', '같은 지역 전체': 'Whole region',
    '개를 모두 원곡으로 되돌렸어요.\n\n메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요.': ' restored to the original.\n\nPress [Save] on the main screen to write it to the ROM file.', "게임 속 '": "In-game '", '게임 속 음악은 그대로 두고, 아래에서 고른 구역의 배경음악만 바꿔요.': 'In-game music stays; only the areas chosen below change.',
    '게임에 곡을 넣었어요. [저장하기]를 눌러야 롬 파일에 기록돼요.': 'Song put in game. Press [Save] to write it to the ROM file.', "게임에서 '": "In game, '", '곡 번호 0x': 'Song number 0x', '곡 전체 변환': 'Convert the whole song', '곡을 넣지 못했어요: ': 'Could not put the song in: ',
    '곳 고름)': ' areas chosen)', '곳 포함)에서 이제 새 곡이 나와요. 그 구역들의 원래 곡을 살리고 싶으면 다른 번호를 고르세요.': ' maps) will now play the new song. Pick another number to keep their original song.', '곳의 배경음악도 이 곡으로 바꿨어요.': ' areas now also play this song.',
    '구역 BGM 적용': 'Apply area BGM', '길이 (스텝)': 'Length (steps)', '도트 칩튠으로 변환된 음악을 성공적으로 가져왔습니다!\n아래 건반과 표에서 음 하나하나를 자유롭게 수정할 수 있습니다.': 'The converted chiptune was imported!\nYou can edit every note with the keyboard and table below.',
    '드럼': 'Drums', '또는 여기에 끌어다 놓기': 'or drop it here', '먼저 음악 파일을 선택해주세요.': 'Choose a music file first.', '멜로디가 너무 낮거나 높을 때': 'when the melody is too low or high', '바꿨던 음악 ': 'Replaced music: ', '바뀐 음악이 없어요. 모두 원곡이에요.': 'No music was replaced. Everything is original.',
    '박자가 어긋나면 끄고 직접 적으세요': 'turn off and enter it if the beat is off', '변환 실패: ': 'Conversion failed: ', '변환 준비 완료': 'Ready to convert', '변환 중 오류가 발생했습니다: ': 'An error occurred while converting: ', '볼륨 (1~15)': 'Volume (1–15)', '불러오는 중…': 'Loading…',
    '선택된 구역이 없습니다.': 'No area selected.', '선택된 파일 없음': 'No file chosen', '쉼표': 'Rest', '스네어 (Snare)': 'Snare', '스텝': 'Step', '스텝 · 템포 ': ' steps · tempo ', '스텝:': 'Steps:',
    '오디오 멜로디와 비트를 분석하여 도트 칩튠 사운드로 변환하는 중...': 'Analysing melody and beat and converting to chiptune...', '옥타브': 'Octave', '음 길이:': 'Note length:', '음, CH2 화음: ': ' notes, CH2 harmony: ', '음, CH3 베이스: ': ' notes, CH3 bass: ', '음, CH4 드럼: ': ' notes, CH4 drums: ',
    '음악 파일 (MP3 · FLAC · WAV · OGG · M4A · MIDI …) → 8비트 도트 게임 칩튠 BGM 변환기': 'Music file (MP3 · FLAC · WAV · OGG · M4A · MIDI …) → 8-bit chiptune BGM converter', '음악 파일을 여는 중…': 'Opening the music file…', '음표 / 드럼': 'Note / drum', '이 곡은 읽을 수 없어요': 'This song cannot be read', '이 곡을 게임에 넣기': 'Put this song in the game',
    '조옮김  반음:': 'Transpose  semitones:', '지금 곡과 같은 곡 쓰는 곳 전부': 'All areas with the same song', '크래시 (Crash)': 'Crash', '킥 (Kick)': 'Kick', '타]': ' hits]', '템포 자동 감지': 'Detect tempo automatically', '템포(BPM):': 'Tempo (BPM):', '파일: ': 'File: ',
    '파일이 선택되었습니다. [✨ 8비트 도트 칩튠으로 변환하기]를 누르세요.': 'File chosen. Press [✨ Convert to 8-bit chiptune].', '포켓몬 2세대 BGM 칩튠 시퀀서 & 음표 에디터': 'Pokémon Gen 2 BGM Chiptune Sequencer & Note Editor', '하이햇 (HiHat)': 'Hi-hat', '현재 구역 BGM 지정:': 'Current area BGM:', '현재 스텝 쉼표(지우기)': 'Clear current step (rest)',
    '조옮김': 'Transpose', '반음:': 'Semitones:',
    // 게임으로 확인
    '_테스트.gbc': '_test.gbc', '▶ 게임으로 확인 — 지금 고친 내용으로 테스트': '▶ Test Play — try your edits', '▶ 테스트 롬으로 게임을 켰어요 (원래 롬 파일은 그대로 · 고친 걸 남기려면 [저장하기])': '▶ Started the game with a test ROM (your ROM file is unchanged · press [Save] to keep edits)',
    '· 고친 내용(대사·NPC·지도·음악 등)을 넣은 테스트 롬으로 켜요. 원래 롬 파일은 그대로고, 고친 걸 남기려면 메인 화면 [저장하기]를 눌러요\n': '· Runs a test ROM with your edits (dialogue, NPCs, maps, music…). Your ROM file is unchanged — press [Save] on the main screen to keep the edits\n',
    '· 에뮬레이터는 오픈소스 EmulatorJS 를 그 사이트(cdn.emulatorjs.org)에서 불러와요. 롬 파일은 내 컴퓨터 안에서만 쓰이고 어디로도 올라가지 않아요\n': '· The emulator is the open-source EmulatorJS, loaded from its site (cdn.emulatorjs.org). The ROM stays on your computer and is never uploaded\n',
    '· 키보드: 방향키 이동, Z = A 버튼, X = B 버튼, Enter = START, Shift(오른쪽) = SELECT (에뮬레이터 화면 아래 메뉴에서 키를 바꿀 수 있어요)\n': '· Keyboard: arrows move, Z = A, X = B, Enter = START, Right Shift = SELECT (keys can be changed in the emulator menu)\n',
    '· 테스트 세이브는 이 브라우저에 남아서 다음에 [▶ 게임으로 확인]을 눌러도 이어서 할 수 있어요. 진행 중인 세이브(.sav)는 에뮬레이터 메뉴의 세이브 불러오기로 넣을 수 있어요\n': '· The test save stays in this browser, so the next [▶ Test Play] continues it. An existing save (.sav) can be loaded from the emulator menu\n',
    '· 화면이 안 나오면 [테스트 롬 내려받기]로 받아서 쓰던 에뮬레이터로 열어 보세요': '· If nothing shows, download the test ROM and open it in your own emulator', '🆕 테스트 세이브 지우고 새 게임으로': '🆕 New game (fresh test save)', '💾 테스트 롬 내려받기 (내 에뮬레이터로 열기)': '💾 Download test ROM (open in your emulator)',
    '🔄 다시 켜기': '🔄 Restart', '개 있어요 (빨간 글씨). 먼저 고쳐주세요.': ' lines need fixing (red text). Please fix them first.', '고쳐야 할 대사가 ': 'Dialogue lines to fix: ', '넣지 못한 대사가 있어요:\n\n': 'Some dialogue could not be written:\n\n', '테스트용 세이브를 새로 시작할까요? (원래 게임 세이브와는 상관없어요)': 'Start a fresh test save? (your real game save is not affected)',
    // 이름 붙은 묶음 (곡 분류 등)
    '🏘 마을 · 도시': '🏘 Towns · Cities', '🌳 도로 · 이동': '🌳 Routes · Travel', '🏠 건물 · 동굴 · 탑': '🏠 Buildings · Caves · Towers', '⚔ 배틀 · 승리': '⚔ Battles · Victory', '👀 트레이너 마주침': '👀 Trainer Encounters', '🎬 이벤트 · 기타': '🎬 Events · Other', '기타': 'Other',
    '엔터 = 다음 줄, 빈 줄 = 다음 말풍선, 한 줄 18자까지. {PLAYER} {RIVAL} 사용 가능': 'Enter = next line, blank line = next text box, 18 characters per line. {PLAYER} and {RIVAL} can be used',
    '엔터 = 다음 줄      빈 줄 = 다음 말풍선\n{PLAYER} {RIVAL} 같은 중괄호는 이름 등이 들어가는 자리예요\n다 고친 뒤 [저장하기]를 누르면 새 롬 파일로 저장돼요 (원래 롬은 그대로)':
      'Enter = next line      Blank line = next text box\nBraces like {PLAYER} and {RIVAL} are placeholders for names — keep them as they are\nWhen done, press [Save] to download a new ROM file (your original ROM stays unchanged)',
    '한글판': 'Korean', '영문판': 'English', '일본판': 'Japanese', '금·은': 'Gold/Silver', '크리스탈': 'Crystal', '이 버전에는 없는 스크립트 명령이에요': 'This script command does not exist in this version',
    '벽': 'Wall', '물': 'Water', '문': 'Door', '턱': 'Ledge', '위': 'Up', '옆': 'Side', '칸': 'tiles', '번': '#', '개': '', '곳': '', '초': 's'
  };

  // ---------------------------------------------------------------- 이름표 (NPC 모습 · 곡 · 타입 · 지도 · 지역)
  const SPRITE_EN = ['', 'Player', 'Player (Bike)', 'Game Boy Kid', 'Rival', 'Prof. Oak', 'Red', 'Blue', 'Bill', 'Elder', 'Janine', 'Kurt', 'Mom', 'Blaine', "Red's Mom", 'Daisy', 'Prof. Elm', 'Will', 'Falkner', 'Whitney', 'Bugsy', 'Morty', 'Chuck', 'Jasmine', 'Pryce', 'Clair', 'Brock', 'Karen', 'Bruno', 'Misty', 'Lance', 'Lt. Surge', 'Erika', 'Koga', 'Sabrina',
    'Cooltrainer ♂', 'Cooltrainer ♀', 'Bug Catcher', 'Twin', 'Youngster', 'Lass', 'Teacher', 'Beauty', 'Super Nerd', 'Rocker', 'Pokéfan ♂', 'Pokéfan ♀', 'Gramps', 'Granny', 'Swimmer ♂', 'Swimmer ♀', 'Big Snorlax', 'Surfing Pikachu', 'Rocket', 'Rocket ♀', 'Nurse', 'Link Receptionist', 'Clerk', 'Fisher', 'Fishing Guru', 'Scientist', 'Kimono Girl', 'Sage', 'Unused Guy', 'Gentleman', 'Black Belt', 'Receptionist', 'Officer', 'Cal', 'Slowpoke', 'Captain', 'Big Lapras', 'Gym Guide', 'Sailor', 'Biker', 'Pharmacist', 'Monster', 'Fairy', 'Bird', 'Dragon', 'Big Onix', 'N64', 'Sudowoodo', 'Surf', 'Poké Ball', 'Pokédex', 'Paper', 'Virtual Boy', 'Old Link Receptionist', 'Rock', 'Boulder', 'SNES', 'Famicom', 'Fruit Tree', 'Gold Trophy', 'Silver Trophy'];
  const SPRITE_MON_EN = ['Unown', 'Geodude', 'Growlithe', 'Weedle', 'Shellder', 'Oddish', 'Gengar', 'Zubat', 'Magikarp', 'Squirtle', 'Togepi', 'Butterfree', 'Diglett', 'Poliwag', 'Pikachu', 'Clefairy', 'Charmander', 'Jynx', 'Starmie', 'Bulbasaur', 'Jigglypuff', 'Grimer', 'Ekans', 'Paras', 'Tentacool', 'Tauros', 'Machop', 'Voltorb', 'Lapras', 'Rhydon', 'Moltres', 'Snorlax', 'Gyarados', 'Lugia', 'Ho-Oh'];
  const SONG_EN = ['(none)', 'Title Screen', 'Route 1', 'Route 3', 'Route 12', 'Magnet Train', 'Kanto Gym Leader Battle', 'Kanto Trainer Battle', 'Kanto Wild Battle', 'Pokémon Center', 'Hiker Encounter', 'Lass Encounter', 'Officer Encounter', 'Heal Pokémon', 'Lavender Town', 'Route 2', 'Mt. Moon', 'Show Me Around', 'Game Corner', 'Bicycle', 'Hall of Fame', 'Viridian City', 'Celadon City', 'Trainer Victory', 'Wild Victory', 'Gym Victory', 'Mt. Moon Square', 'Gym', 'Pallet Town', "Prof. Oak's Pokémon Talk", 'Prof. Oak', 'Rival Appears', 'Rival Leaves', 'Surf', 'Evolution', 'National Park', 'Credits', 'Azalea Town', 'Cherrygrove City', 'Kimono Girl Encounter', 'Union Cave', 'Johto Wild Battle', 'Johto Trainer Battle', 'Route 30', 'Ecruteak City', 'Violet City', 'Johto Gym Leader Battle', 'Champion Battle', 'Rival Battle', 'Rocket Battle', 'Prof. Elm', 'Dark Cave', 'Route 29', 'Route 36', 'S.S. Aqua', 'Youngster Encounter', 'Beauty Encounter', 'Rocket Encounter', 'Pokémaniac Encounter', 'Sage Encounter', 'New Bark Town', 'Goldenrod City', 'Vermilion City', 'Pokémon Channel', 'Poké Flute', 'Tin Tower', 'Sprout Tower', 'Burned Tower', 'Lighthouse', 'Lake of Rage', 'Indigo Plateau', 'Route 37', 'Rocket Hideout', "Dragon's Den", 'Johto Wild Battle (Night)', 'Ruins of Alph Radio', 'Capture', 'Route 26', 'Mom', 'Victory Road', 'Pokémon Lullaby', 'Pokémon March', 'Opening 1', 'Opening 2', 'Main Menu', 'Ruins of Alph Interior', 'Rocket Overture', 'Dance Theater', 'Bug-Catching Contest Results', 'Bug-Catching Contest', 'Rocket Radio', 'Printer', 'Post-Credits'];
  const TYPE_EN = { '노말': 'Normal', '격투': 'Fighting', '비행': 'Flying', '독': 'Poison', '땅': 'Ground', '바위': 'Rock', '벌레': 'Bug', '고스트': 'Ghost', '강철': 'Steel', '불꽃': 'Fire', '물': 'Water', '풀': 'Grass', '전기': 'Electric', '에스퍼': 'Psychic', '얼음': 'Ice', '드래곤': 'Dragon', '악': 'Dark', '???': '???' };
  // 지역 (롬의 지역 이름 · 곡 이름에 쓰임)
  const PLACE_EN = {
    '연두마을': 'New Bark Town', '무궁시티': 'Cherrygrove City', '도라지시티': 'Violet City', '고동마을': 'Azalea Town', '금빛시티': 'Goldenrod City', '인주시티': 'Ecruteak City', '담청시티': 'Olivine City', '진청시티': 'Cianwood City',
    '황토마을': 'Mahogany Town', '검은먹시티': 'Blackthorn City', '태초마을': 'Pallet Town', '상록시티': 'Viridian City', '회색시티': 'Pewter City', '블루시티': 'Cerulean City', '갈색시티': 'Vermilion City', '보라타운': 'Lavender Town',
    '무지개시티': 'Celadon City', '노랑시티': 'Saffron City', '연분홍시티': 'Fuchsia City', '홍련마을': 'Cinnabar Island', '홍련섬': 'Cinnabar Island', '석영고원': 'Indigo Plateau', '모다피의 탑': 'Sprout Tower', '알프의 유적': 'Ruins of Alph',
    '연결동굴': 'Union Cave', '야돈 우물': 'Slowpoke Well', '야돈의 우물': 'Slowpoke Well', '너도밤나무 숲': 'Ilex Forest', '자연 공원': 'National Park', '자연공원': 'National Park', '라디오타워': 'Radio Tower', '방울탑': 'Tin Tower', '불탄 탑': 'Burned Tower', '불탄탑': 'Burned Tower',
    '담청등대': 'Olivine Lighthouse', '등대': 'Lighthouse', '소용돌이 섬': 'Whirl Islands', '회오리섬': 'Whirl Islands', '절구산': 'Mt. Mortar', '분노의 호수': 'Lake of Rage', '얼음샛길': 'Ice Path', '용의 굴': "Dragon's Den", '용의 콧구멍': "Dragon's Den",
    '어둠의 동굴': 'Dark Cave', '은빛산': 'Mt. Silver', '달맞이산': 'Mt. Moon', '돌산터널': 'Rock Tunnel', '디그다굴': "Diglett's Cave", '무인발전소': 'Power Plant', '쌍둥이섬': 'Seafoam Islands', '챔피언로드': 'Victory Road', '토호폭포': 'Tohjo Falls',
    '은빛 산': 'Mt. Silver', '달맞이 산': 'Mt. Moon', '디그다의 굴': "Diglett's Cave", '돌산 터널': 'Rock Tunnel', '보라 라디오타워': 'Lavender Radio Tower', '챔피언 로드': 'Victory Road', '동성폭포': 'Tohjo Falls', '쾌속선': 'Fast Ship',
    '북쪽': 'North', '남쪽': 'South', '동쪽': 'East', '서쪽': 'West',
    '아쿠아호': 'S.S. Aqua', '갸라도스호': 'S.S. Aqua', '사파리존': 'Safari Zone', '지하통로': 'Underground Path', '포켓몬센터': 'Pokémon Center', '공박사': 'Prof. Elm', '오박사': 'Prof. Oak', '게임코너': 'Game Corner', '체육관': 'Gym'
  };
  // 구역 이름 (AREA_NAMES 의 낱말)
  const AREA_EN = {
    '마을': 'Town', '시내': 'City', '바깥': 'Outside', '안쪽 방': 'Inner Room', '동굴': 'Cave', '숲': 'Forest', '공원': 'Park', '광장': 'Square', '섬': 'Island', '폭포': 'Falls', '호수': 'Lake', '항구': 'Port', '항구 통로': 'Port Passage', '옥상': 'Roof',
    '1층': '1F', '2층': '2F', '3층': '3F', '4층': '4F', '5층': '5F', '6층': '6F', '7층': '7F', '8층': '8F', '9층': '9F', '1층 바깥': '1F Outside', '1층 안쪽': '1F Inside', '2층 안쪽': '2F Inside', '지하 1층': 'B1F', '지하 2층': 'B2F', '지하 3층': 'B3F',
    '지하 2층(검은먹 쪽)': 'B2F (Blackthorn side)', '지하 2층(황토 쪽)': 'B2F (Mahogany side)', '남동쪽': 'SE', '남서쪽': 'SW', '북동쪽': 'NE', '북서쪽': 'NW', '방 1': 'Room 1', '방 2': 'Room 2', '방 3': 'Room 3',
    'PP 이야기 집': 'PP Speech House', '가무연습장': 'Dance Theater', '강철날개 집': 'Steel Wing House', '갸라도스 이야기 집': 'Gyarados Speech House', '검은먹 쪽 입구': 'Blackthorn Entrance', '게이트': 'Gate', '게이트(미사용)': 'Gate (unused)', '게임코너': 'Game Corner',
    '격투 도장': 'Fighting Dojo', '경찰서': 'Police Station', '경품 교환소': 'Prize Exchange', '고동 쪽 게이트': 'Azalea Gate', '공박사 연구소': "Elm's Lab", '공박사 집': "Elm's House", '괴짜 아저씨 집': "Strange Man's House", '교환 방': 'Trade Room', '교환 소년의 집': "Trade Kid's House",
    '교환 이야기 집': 'Trade Speech House', '그린의 집': "Blue's House", '금구슬 집': 'Gold Nugget House', '금빛 쪽 게이트': 'Goldenrod Gate', '기념품 가게': 'Souvenir Shop', '기술잊기 집': 'Move Deleter House', '길안내 할아버지 집': "Guide Gent's House", '꽃집': 'Flower Shop',
    '나무열매 집': 'Berry House', '낚시 이야기 집': 'Fishing Speech House', '노랑 쪽 게이트': 'Saffron Gate', '니드런 이야기 집': 'Nidoran Speech House', '다우징머신 집': 'Itemfinder House', '대전 방': 'Battle Room', '도라지 쪽 게이트': 'Violet Gate', '도라지 쪽 입구': 'Violet Entrance',
    '독수의 방': "Koga's Room", '드래곤 이야기 집': 'Dragon Speech House', '디그다굴 이야기 집': "Diglett's Cave Speech House", '라디오타워 1층': 'Radio Tower 1F', '레드의 집 1층': "Red's House 1F", '레드의 집 2층': "Red's House 2F", '루기아 이야기 집': 'Lugia Speech House', '루기아의 방': "Lugia's Chamber",
    '맨션 1층': 'Mansion 1F', '맨션 2층': 'Mansion 2F', '맨션 3층': 'Mansion 3F', '맨션 옥상': 'Mansion Roof', '맨션 옥상 집': 'Mansion Roof House', '명예의 전당': 'Hall of Fame', '모래바람 집': 'Sandstorm House', '목장 집': 'Moomoo Farm House', '목호의 방': "Lance's Room",
    '발전소': 'Power Plant', '방울탑 뒷입구': 'Tin Tower Back Entrance', '방울탑 입구': 'Tin Tower Entrance', '배지 이야기 집': 'Badge Speech House', '백화점 1층': 'Dept. Store 1F', '백화점 2층': 'Dept. Store 2F', '백화점 3층': 'Dept. Store 3F', '백화점 4층': 'Dept. Store 4F',
    '백화점 5층': 'Dept. Store 5F', '백화점 6층': 'Dept. Store 6F', '백화점 엘리베이터': 'Dept. Store Elevator', '백화점 지하': 'Dept. Store B1F', '벌레잡기 대회': 'Bug-Catching Contest', '별명 이야기 집': 'Nickname Speech House', '빈 집': 'Empty House', '사진관': 'Photo Studio',
    '사파리존 관리인 집': "Safari Zone Warden's House", '사파리존 사무소': 'Safari Zone Office', '사파리존(미사용)': 'Safari Zone (unused)', '순결의부적 집': 'Cleanse Tag House', '숯 굽는 집': 'Charcoal Kiln', '숲 쪽 게이트': 'Forest Gate', '슈퍼낚싯대 집': 'Super Rod House', '스위치방 입구': 'Switch Room Entrance',
    '시바의 방': "Bruno's Room", '식당': 'Restaurant', '실프주식회사 1층': 'Silph Co. 1F', '아이템 방': 'Item Room', '아쿠아호 1층': 'S.S. Aqua 1F', '아쿠아호 객실(동쪽·선장실)': "S.S. Aqua Cabins (East · Captain's)", '아쿠아호 객실(북쪽)': 'S.S. Aqua Cabins (North)',
    '아쿠아호 객실(서쪽)': 'S.S. Aqua Cabins (West)', '아쿠아호 지하 1층': 'S.S. Aqua B1F', '알프 쪽 게이트': 'Ruins of Alph Gate', '암나이트의 방': 'Omanyte Chamber', '약국': 'Pharmacy', '에미의 집': "Emy's House", '연구소': 'Lab', '오박사 연구소': "Oak's Lab", '외양간': 'Barn',
    '요일 형제 집': 'Weekday Siblings House', '이름 감정소': 'Name Rater', '이수재 가족의 집': "Bill's Family's House", '이수재 누나의 집': "Bill's Sister's House", '이수재의 집': "Bill's House", '이야기 집': 'Speech House', '이웃집': 'Neighbor\'s House', '인주 쪽 게이트': 'Ecruteak Gate',
    '일목의 방': "Will's Room", '잉어킹 집': 'Magikarp House', '자기열차 역': 'Magnet Train Station', '자기열차 이야기 집': 'Magnet Train Speech House', '자연공원 쪽 게이트': 'National Park Gate', '자전거 가게': 'Bike Shop', '잠꾸러기 이야기 집': 'Snorlax Speech House', '잠재파워 집': 'Hidden Power House',
    '좋은낚싯대 집': 'Good Rod House', '주인공 집 1층': "Player's House 1F", '주인공 집 2층': "Player's House 2F", '지하창고': 'Warehouse', '지하통로': 'Underground', '지하통로 입구': 'Underground Entrance', '진화 이야기 집': 'Evolution Speech House', '챔피언로드 게이트': 'Victory Road Gate',
    '철구의 집': "Kurt's House", '체육관': 'Gym', '체육관 1층': 'Gym 1F', '체육관 2층': 'Gym 2F', '체육관 이야기 집': 'Gym Speech House', '초능력자 집': 'Psychic House', '친밀도 감정 집': 'Happiness Rater', '칠색조의 방': "Ho-Oh's Chamber", '카렌의 방': "Karen's Room", '카일의 집': "Cal's House",
    '키우미집': 'Day-Care', '타임캡슐': 'Time Capsule', '투구의 방': 'Kabuto Chamber', '트레이너 스쿨': "Trainer School", '트레이너하우스 1층': 'Trainer House 1F', '트레이너하우스 지하 1층': 'Trainer House B1F', '포켓몬 애호가 클럽': 'Pokémon Fan Club', '포켓몬 할아버지의 집': "Mr. Pokémon's House",
    '포켓몬센터 1층': 'Pokémon Center 1F', '포켓몬센터 2층': 'Pokémon Center 2F', '포켓몬센터 2층(미사용)': 'Pokémon Center 2F (unused)', '프렌들리숍': 'Poké Mart', '프테라의 방': 'Aerodactyl Chamber', '혼의 집': 'Soul House', '황토 쪽 게이트': 'Mahogany Gate', '회복 집': 'Heal House',
    '후지노인의 집': "Mr. Fuji's House", '흉내쟁이 집 1층': "Copycat's House 1F", '흉내쟁이 집 2층': "Copycat's House 2F", '29·46번도로 게이트': 'Route 29/46 Gate', '17·18번도로 게이트': 'Route 17/18 Gate'
  };
  // 숫자가 붙는 말 (먼저 바꿈)
  const PRE = [
    [/(\d+)번 ?도로/g, 'Route $1'], [/(\d+)번 ?수로/g, 'Route $1'], [/(\d+)번 ?물길/g, 'Route $1'],
    [/(\d+)번째 대사/g, 'Line $1'],
  ];
  // 남은 한 글자 단위 (숫자 뒤)
  const POST = [
    [/(\d+)\s?개(?![가-힣])/g, '$1'], [/(\d+)\s?번째(?![가-힣])/g, '#$1'], [/(\d+)\s?번(?![가-힣])/g, '#$1'], [/(\d+)\s?칸(?![가-힣])/g, '$1 tiles'], [/(\d+)\s?곳(?![가-힣])/g, '$1 places'],
    [/(\d+)\s?명(?![가-힣])/g, '$1'], [/(\d+)\s?마리(?![가-힣])/g, '$1'], [/(\d+)\s?초(?![가-힣])/g, '$1s'], [/(\d+)\s?스텝(?![가-힣])/g, '$1 steps'],
    [/을\(를\)|이\(가\)|은\(는\)|\(으\)로/g, ''], [/(\d+)의 /g, '$1 '],
  ];

  let dict = null, re = null, reExact = null;
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  function build() {
    dict = Object.assign({}, EN);
    // 이름표: 한국어 표 (SPRITE_NAMES·SONG_NAMES) 와 같은 순서의 영어
    for (let id = 1; id < SPRITE_EN.length; id++) if (SPRITE_NAMES[id]) dict[SPRITE_NAMES[id]] = SPRITE_EN[id];
    // 포켓몬 모양 NPC 이름은 롬의 포켓몬 이름과 겹쳐서 (푸린 → 푸푸린) 정확히 같을 때만
    // 사람 모습·타입 이름도 롬 이름(불꽃펀치·엄마 대사 등) 속에서 바뀌지 않게 정확히 같을 때만
    const exact = new Set(Object.keys(TYPE_EN));
    for (let id = 1; id < SPRITE_EN.length; id++) if (SPRITE_NAMES[id]) exact.add(SPRITE_NAMES[id]);
    const monSprite = new Set();
    for (let i = 0; i < SPRITE_MON_EN.length; i++) if (SPRITE_NAMES[0x80 + i]) { dict[SPRITE_NAMES[0x80 + i]] = SPRITE_MON_EN[i]; exact.add(SPRITE_NAMES[0x80 + i]); monSprite.add(SPRITE_NAMES[0x80 + i]); }
    for (let i = 0; i < SONG_EN.length && i < SONG_NAMES.length; i++) dict[SONG_NAMES[i]] = SONG_EN[i];
    Object.assign(dict, TYPE_EN, AREA_EN, PLACE_EN);
    for (const k of Object.keys(EN)) exact.delete(k);
    // 한 글자 낱말은 숫자 규칙·정확히 같을 때만 (다른 말 속 글자를 바꾸지 않게)
    const keys = Object.keys(dict).filter(k => k.length >= 2 && HANGUL.test(k) && !exact.has(k)).sort((a, b) => b.length - a.length);
    re = new RegExp(keys.map(esc).join('|'), 'g');
    const ex = [...exact].filter(k => dict[k] !== undefined && !monSprite.has(k)).sort((a, b) => b.length - a.length);
    reExact = new RegExp('(^|[\\s›·—(\\[,/:])(' + ex.map(esc).join('|') + ')(?=$|[\\s›·—)\\],/:])', 'g');
  }
  function tr(s) {
    if (lang === 'ko' || s == null) return s;
    s = String(s);
    if (!HANGUL.test(s)) return s;
    // RAW 표시 뒤는 게임 대사라 그대로
    const k = s.indexOf(RAW);
    if (k >= 0) {
      if (s.includes('\n')) return s.split('\n').map(tr).join('\n');
      return tr(s.slice(0, k)) + s.slice(k);
    }
    if (!dict) build();
    const t = s.trim();
    if (dict[t] !== undefined) return s.replace(t, () => dict[t]);
    let out = s;
    for (const [r, v] of PRE) out = out.replace(r, v);
    out = out.replace(re, m => dict[m]);
    // 사람 모습·타입 이름은 앞뒤가 띄어쓰기·기호일 때만 ('점원 1', '선생님 · 말하기')
    out = out.replace(reExact, (m, a, k) => a + dict[k]);
    for (const [r, v] of POST) out = out.replace(r, v);
    return out;
  }

  // ---------------------------------------------------------------- 그려진 화면 바꾸기
  const SKIP = new Set(['TEXTAREA', 'SCRIPT', 'STYLE']);
  function translateNode(n) {
    if (lang === 'ko') return;
    if (n.nodeType === 3) {
      const p = n.parentNode;
      if (!p || SKIP.has(p.nodeName) || (p.closest && p.closest('[data-raw]'))) return;
      if (HANGUL.test(n.data)) { const v = tr(n.data); if (v !== n.data) n.data = v; }
      return;
    }
    if (n.nodeType !== 1 || SKIP.has(n.nodeName) || n.hasAttribute('data-raw')) return;
    for (const a of ['placeholder', 'title']) { const v = n.getAttribute(a); if (v && HANGUL.test(v)) { const t = tr(v); if (t !== v) n.setAttribute(a, t); } }
    for (let c = n.firstChild; c; c = c.nextSibling) translateNode(c);
  }
  function watch(root) {
    translateNode(root);
    if (!window.MutationObserver) return;
    new MutationObserver(list => {
      if (lang === 'ko') return;
      for (const m of list) {
        if (m.type === 'childList') m.addedNodes.forEach(translateNode);
        else if (m.type === 'characterData') translateNode(m.target);
        else if (m.type === 'attributes') translateNode(m.target);
      }
    }).observe(root, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['placeholder', 'title'] });
  }

  return {
    get lang() { return lang; },
    set(l) { lang = l === 'en' ? 'en' : 'ko'; try { localStorage.setItem('gsc-lang', lang); } catch (e) { } },
    tr, watch
  };
})();
// 툴 안의 알림창도 화면 언어로
const alert = m => window.alert(I18N.tr(m));
const confirm = m => window.confirm(I18N.tr(m));

// ===== 10-charset.js
// ================================================================ 글자표 (Program.cs Charset 과 같음)
class Charset {
  // kind: 'ko' 한글판 (2바이트 한글) · 'en' 영문판 · 'jp' 일본판
  constructor(kind) {
    kind = kind || 'ko';
    this.kind = kind;
    // koen: 영문판 크리스탈에 한글 패치 — 글자는 한글판, 줄바꿈·끝·이름 표시는 영문판 번호
    const ctrl = kind === 'koen' ? 'en' : kind;
    if (kind === 'koen') kind = 'ko';
    this.one = new Array(256).fill(null);           // 1바이트 글자
    this.two = [];                                  // 2바이트 한글 (앞바이트 01~0B)
    for (let i = 0; i < 12; i++) this.two.push(new Array(256).fill(null));
    this.rev = new Map();
    this.usage = new Map();
    const set = m => { for (const k in m) this.one[+k] = m[k]; };
    if (kind === 'jp') {
      Charset.JP_KANA.split('|').forEach(run => { const at = parseInt(run.substr(0, 2), 16); [...run.substr(3)].forEach((c, i) => this.one[at + i] = c); });
      // 자주 쓰는 말을 한 글자로 줄인 것 (읽을 때 그대로 풀어 씀)
      set({ 0x6e: 'ぃ', 0x6f: 'ぅ', 0x76: 'ぁ', 0x77: 'ぇ', 0x78: 'ぉ', 0x1D: 'に　', 0x1E: 'って', 0x1F: 'を　', 0x22: 'た！', 0x23: 'こうげき', 0x24: 'は　', 0x25: 'の　', 0x35: 'ばん　どうろ', 0x36: 'わたし', 0x37: 'ここは', 0x4A: 'が　',
        0x70: '「', 0x71: '」', 0x72: '『', 0x73: '』', 0x74: '・', 0x75: '…', 0x7f: '　', 0xe3: 'ー', 0xe6: '？', 0xe7: '！', 0xe8: '。', 0xf0: '円', 0xf1: '×', 0xf2: '．', 0xf3: '／', 0xef: '♂', 0xf5: '♀', 0xed: '▶', 0xee: '▼', 0xec: '▷' });
      for (let i = 0; i < 10; i++) this.one[0xf6 + i] = String.fromCharCode(0xFF10 + i);
    } else {
      for (let i = 0; i < 26; i++) { this.one[0x80 + i] = String.fromCharCode(65 + i); this.one[0xa0 + i] = String.fromCharCode(97 + i); }
      for (let i = 0; i < 10; i++) this.one[0xf6 + i] = String(i);
      set({
        0x7f: ' ', 0x9a: '(', 0x9b: ')', 0x9c: ':', 0x9d: ';', 0x9e: '[', 0x9f: ']', 0xe0: "'", 0xe3: '-', 0xe6: '?',
        0xe7: '!', 0xe8: '.', 0xe9: '&', 0xea: 'é', 0xec: '▷', 0xed: '▶', 0xee: '▼', 0xef: '♂', 0xf0: kind === 'ko' ? '₩' : '¥', 0xf1: '×',
        0xf2: '.', 0xf3: '/', 0xf4: ',', 0xf5: '♀', 0x74: '·', 0x75: '…', 0x6d: ':',
        0xd0: "'d", 0xd1: "'l", 0xd2: "'m", 0xd3: "'r", 0xd4: "'s", 0xd5: "'t", 0xd6: "'v"
      });
      if (kind === 'en') set({ 0x72: '“', 0x73: '”', 0xc0: 'Ä', 0xc1: 'Ö', 0xc2: 'Ü', 0xc3: 'ä', 0xc4: 'ö', 0xc5: 'ü', 0xdf: '←', 0xeb: '→', 0x1f: ' ' });
    }
    for (let b = 0; b < 256; b++) if (this.one[b] != null) this.addRev(this.one[b], [b]);
    // 일본판 글꼴엔 リ·ヘ·ベ·ペ 가 없고 같은 모양의 히라가나를 씀 → 가타카나로 쳐도 들어가게
    if (kind === 'jp') for (const [k, h] of [['リ', 'り'], ['ヘ', 'へ'], ['ベ', 'べ'], ['ペ', 'ぺ']]) { const b = this.rev.get(h); if (b) this.rev.set(k, b); }
    if (kind === 'ko') for (const line of KOREAN_TABLE) {
      const lead = parseInt(line.substr(0, 2), 16);
      for (const item of line.substr(3).split('|')) {
        const idx = parseInt(item.substr(0, 2), 16), s = item.substr(3);
        this.two[lead][idx] = s;
        this.addRev(s, [lead, idx]);
      }
    }
    // 줄바꿈·끝 표시 (한글판은 번호가 다름)
    this.twoByte = kind === 'ko';
    if (ctrl === 'ko') { this.LINE = 0x5a; this.CONT = 0x5d; this.PARA = 0x5c; this.DONE = 0x5e; this.terms = [0x50, 0x5e, 0x5f]; this.breaks = [0x5a, 0x5d, 0x59, 0x56, 0x57]; this.TOKENS = Charset.TOKENS; }
    else {
      this.LINE = 0x4f; this.CONT = 0x55; this.PARA = 0x51; this.DONE = 0x57; this.terms = [0x50, 0x57, 0x58];
      this.breaks = ctrl === 'en' && kind === 'en' ? [0x4f, 0x55, 0x4e, 0x4c, 0x4b, 0x22] : [0x4f, 0x55, 0x4e, 0x4c, 0x4b];
      this.TOKENS = ctrl === 'en' ? Charset.TOKENS_EN : Charset.TOKENS_JP;
    }
    this.tokenRev = new Map();
    for (const k in this.TOKENS) this.tokenRev.set(this.TOKENS[k], +k);
  }
  isTerm(b) { return this.terms.includes(b); }
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

  // 문자열 하나 해석 → { text, end, term } 또는 null
  decode(rom, start) {
    let s = '', i = start;
    const ko = this.twoByte;
    while (i < rom.length && i - start < 1500) {
      const b = rom[i];
      if (this.isTerm(b)) return { text: s, end: i, term: b };
      if (ko && b >= 0x01 && b <= 0x0b) {
        if (i + 1 >= rom.length) return null;
        const t = this.two[b][rom[i + 1]];
        if (t == null) s += '{' + hex2(b) + hex2(rom[i + 1]) + '}';
        else { s += t; this.count([b, rom[i + 1]]); }
        i += 2; continue;
      }
      if (this.breaks.includes(b)) s += '\n';
      else if (b === this.PARA) s += '\n\n';
      else if (this.TOKENS[b] != null) s += '{' + this.TOKENS[b] + '}';
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
        if (k >= 2) { out.push(this.PARA); state.firstBreak = true; }
        else { out.push(state.firstBreak ? this.LINE : this.CONT); state.firstBreak = false; }
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
// 이름이 들어가는 자리 등 (편집 화면에 {이름} 으로 보임)
Charset.TOKENS = {
  0x51: '주인공', 0x52: '라이벌', 0x5b: '엄마', 0x47: '포켓몬', 0x46: 'PKMN', 0x48: '……', 0x49: '컴퓨터',
  0x4a: '기술머신', 0x4b: '로켓단', 0x55: '트레이너', 0x53: '상대', 0x54: '사용자', 0x4f: '적', 0x4d: '레드',
  0x4e: '그린', 0x33: 'POKE', 0x4c: '도감끝', 0xe1: 'PK', 0xe2: 'MN', 0x70: 'PO', 0x71: 'KE'
};
// 영문판·일본판 (pret charmap.asm)
Charset.TOKENS_EN = {
  0x52: 'PLAYER', 0x53: 'RIVAL', 0x49: 'MOM', 0x54: 'POKé', 0x4a: 'PKMN', 0x56: '……', 0x5b: 'PC', 0x5c: 'TM', 0x5d: 'TRAINER',
  0x5e: 'ROCKET', 0x59: 'TARGET', 0x5a: 'USER', 0x3f: 'ENEMY', 0x38: 'RED', 0x39: 'GREEN', 0x14: 'PLAY_G', 0x24: 'POKE', 0x15: 'MOBILE',
  0x5f: 'DEXEND', 0x70: 'PO', 0x71: 'KE', 0xe1: 'PK', 0xe2: 'MN', 0x25: 'WBR'
};
Charset.TOKENS_JP = {
  0x52: 'PLAYER', 0x53: 'RIVAL', 0x49: 'MOM', 0x54: 'ポケモン', 0x56: '……', 0x5b: 'PC', 0x5c: 'TM', 0x5d: 'TRAINER',
  0x5e: 'ROCKET', 0x59: 'TARGET', 0x5a: 'USER', 0x3f: 'ENEMY', 0x38: 'RED', 0x39: 'GREEN', 0x14: 'PLAY_G', 0x15: 'MOBILE', 0x5f: 'DEXEND', 0x18: 'JP_18'
};
// 일본판 가나 (시작 번호:글자들 — 번호가 이어지는 묶음)
Charset.JP_KANA = '05:ガギグゲゴザジズゼゾダヂヅデド|19:バビブボ|26:がぎぐげござじずぜぞだぢづでど|3a:ばびぶべぼ|40:パピプポぱぴぷぺぽ|' +
  '80:アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフホマミムメモヤユヨラルレロワヲンッャュョィ' +
  'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんっゃゅょ|e3:ーﾟﾞ|e9:ァゥェ|f4:ォ';

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

// ===== 12-version.js
// ================================================================ 롬 버전 (한글판·영문판·일본판 금은 / 크리스탈)
// 툴 안에서는 스크립트 명령을 한글판 금·은 번호(아래 KR)로 다룸. 다른 버전 롬은 읽을 때·쓸 때 번호를 바꿔 끼움
// 명령 이름·길이 출처: pret/pokegold · pret/pokecrystal macros/scripts/events.asm
const SCRIPT_GOLD = 'scall:3 farscall:4 memcall:3 sjump:3 farsjump:4 memjump:3 ifequal:4 ifnotequal:4 iffalse:3 iftrue:3 ifgreater:4 ifless:4 jumpstd:3 callstd:3 callasm:4 special:3 memcallasm:3 checkmapscene:3 setmapscene:4 checkscene:1 setscene:2 setval:2 addval:2 random:2 checkver:1 readmem:3 writemem:3 loadmem:4 readvar:2 writevar:2 loadvar:3 giveitem:3 takeitem:3 checkitem:2 givemoney:5 takemoney:5 checkmoney:5 givecoins:3 takecoins:3 checkcoins:3 addcellnum:2 delcellnum:2 checkcellnum:2 checktime:2 checkpoke:2 givepoke:9 giveegg:3 givepokemail:3 checkpokemail:3 checkevent:3 clearevent:3 setevent:3 checkflag:3 clearflag:3 setflag:3 wildon:1 wildoff:1 xycompare:3 warpmod:4 blackoutmod:3 warp:5 getmoney:3 getcoins:2 getnum:2 getmonname:3 getitemname:3 getcurlandmarkname:2 gettrainername:4 getstring:4 itemnotify:1 pocketisfull:1 opentext:1 reanchormap:2 closetext:1 writeunusedbyte:2 farwritetext:4 writetext:3 repeattext:3 yesorno:1 loadmenu:3 closewindow:1 jumptextfaceplayer:3 jumptext:3 waitbutton:1 promptbutton:1 pokepic:2 closepokepic:1 _2dmenu:1 verticalmenu:1 loadpikachudata:1 randomwildmon:1 loadtemptrainer:1 loadwildmon:3 loadtrainer:3 startbattle:1 reloadmapafterbattle:1 catchtutorial:2 trainertext:2 trainerflagaction:2 winlosstext:5 scripttalkafter:1 endifjustbattled:1 checkjustbattled:1 setlasttalked:2 applymovement:4 applymovementlasttalked:3 faceplayer:1 faceobject:3 variablesprite:3 disappear:2 appear:2 follow:3 stopfollow:1 moveobject:4 writeobjectxy:2 loademote:2 showemote:4 turnobject:3 follownotexact:3 earthquake:2 changemapblocks:4 changeblock:4 reloadmap:1 refreshmap:1 writecmdqueue:3 delcmdqueue:2 playmusic:3 encountermusic:1 musicfadeout:4 playmapmusic:1 dontrestartmapmusic:1 cry:3 playsound:3 waitsfx:1 warpsound:1 specialsound:1 autoinput:4 newloadmap:2 pause:2 deactivatefacing:2 sdefer:3 warpcheck:1 stopandsjump:3 endcallback:1 end:1 reloadend:2 endall:1 pokemart:4 elevator:3 trade:2 askforphonenumber:2 phonecall:3 hangup:1 describedecoration:2 fruittree:2 specialphonecall:3 checkphonecall:1 verbosegiveitem:3 swarm:3 halloffame:1 credits:1 warpfacing:6';
const SCRIPT_CRYSTAL_EXTRA = { 0x52: 'farjumptext:4', 0x9F: 'verbosegiveitemvar:3' };
const SCRIPT_CRYSTAL_TAIL = 'battletowertext:2 getlandmarkname:3 gettrainerclassname:3 getname:4 wait:2 checksave:1';

const ScriptSet = (() => {
  const gold = SCRIPT_GOLD.split(' ').map(s => { const [n, l] = s.split(':'); return [n, +l]; });
  // 한글판 금·은 = 영문판 금·은 + $45 자리에 3바이트 명령 하나 더
  const kr = gold.slice(0, 0x45).concat([['kr45', 3]], gold.slice(0x45));
  const crystal = [];
  for (const c of gold) {
    if (crystal.length === 0x52 || crystal.length === 0x9F) { const [n, l] = SCRIPT_CRYSTAL_EXTRA[crystal.length].split(':'); crystal.push([n, +l]); }
    crystal.push(c[0] === 'swarm' ? ['swarm', 4] : c);
  }
  for (const s of SCRIPT_CRYSTAL_TAIL.split(' ')) { const [n, l] = s.split(':'); crystal.push([n, +l]); }
  // 툴 안 번호: 한글판 번호, 한글판에 없는 명령은 $100 부터
  const K = new Map(kr.map((c, i) => [c[0], i]));
  let extra = 0x100;
  for (const c of crystal) if (!K.has(c[0])) K.set(c[0], extra++);
  function make(id, list) {
    const len = new Array(256).fill(-1), toK = new Array(256).fill(-1), fromK = new Map();
    list.forEach(([n, l], b) => { len[b] = n === 'givepoke' ? 0 : l; toK[b] = K.get(n); fromK.set(K.get(n), b); });
    return { id, len, toK, fromK, size: list.length };
  }
  // 일본판 크리스탈: 영문판 크리스탈에서 $52 farjumptext 가 없는 번호
  const crystaljp = crystal.filter(c => c[0] !== 'farjumptext');
  return { kr: make('kr', kr), gold: make('gold', gold), crystal: make('crystal', crystal), crystaljp: make('crystaljp', crystaljp), K };
})();
const K_FARJUMPTEXT = ScriptSet.K.get('farjumptext'), K_VERBOSEGIVEITEMVAR = ScriptSet.K.get('verbosegiveitemvar');

// 롬 머리글로 후보를 좁힘 → 롬 안에서 대사가 가장 많이 읽히는 글자표·스크립트 표를 고름 (20-rom.js guessVersion)
// 글자표: ko 한글판 · koen 영문판 크리스탈 바탕 한글 패치 (한글 + 영문판 줄바꿈 번호) · en 영문판 · jp 일본판
function detectVersion(d) {
  let title = '';
  for (let i = 0x134; i < 0x143; i++) title += String.fromCharCode(d[i]);
  const crystal = /CRYSTAL/.test(title);
  const code = title.substr(11, 4);
  const lang = code.length === 4 ? code[3] : '';
  const css = lang === 'K' ? ['ko', 'koen'] : lang === 'J' ? ['jp'] : /[EDFISU]/.test(lang) ? ['en'] : ['ko', 'koen', 'en', 'jp'];
  const scripts = crystal ? ['crystal', 'crystaljp'] : lang === 'K' ? ['kr', 'gold'] : lang ? ['gold', 'kr'] : ['kr', 'gold', 'crystal', 'crystaljp'];
  return { title, crystal, css, scripts, cs: css[0], script: scripts[0] };
}
const VERSION_NAMES = { ko: '한글판', koen: '한글판', jp: '일본판', en: '영문판' };

// ===== 20-rom.js
// ================================================================ 롬 분석 (Program.cs Rom 과 같음)
// 스크립트 명령 번호는 한글판 금·은 기준 (다른 버전은 12-version.js 의 표로 바꿔 읽음)

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
    this.version = detectVersion(bytes);
    this.cs = new Charset(this.version.cs);
    this.sv = ScriptSet[this.version.script];
    this.regions = [];
    this.texts = new Map();
    this.usedFlags = new Set();
    this.textNote = new Map();
    this.free = [];
    this.dirty = false;
    this.gifts = [];                 // 선물 포켓몬 { area, owner, off, egg }
    this.ownerPic = new Map();       // NPC → pokepic 포켓몬 번호 위치들
    this.ownerCry = new Map();       // NPC → cry 포켓몬 번호 위치들
    this.ownerPicCry = new Map();
    this.analyze();
    // 후보가 여럿이면 글자표·스크립트 표를 바꿔 보며 대사가 가장 많이 읽히는 쪽
    if (this.version.css.length > 1 || this.version.scripts.length > 1) this.guessVersion();
    this.findFree();
    this.gfx = new MapRender(this.data);
    this.loadData();
  }

  guessVersion() {
    const v = this.version;
    let best = null, last = null;
    // 처음 조합(v.cs, v.script)은 생성자에서 이미 읽었음
    for (const c of v.css) for (const s of v.scripts) {
      if (last) { this.reset(c, s); this.analyze(); }
      last = { c, s };
      // 모르는 글자({xx})가 적고 대사가 많을수록 맞는 쪽
      let n = 0; for (const t of this.texts.values()) n += (t.original.match(/\{[0-9A-F]{2}\}/g) || []).length > 2 ? 0 : 1;
      if (!best || n > best.n) best = { c, s, n };
    }
    if (best.c !== last.c || best.s !== last.s) { this.reset(best.c, best.s); this.analyze(); }
    v.cs = best.c; v.script = best.s;
  }
  reset(cs, script) {
    this.cs = new Charset(cs); this.sv = ScriptSet[script];
    this.regions = []; this.texts = new Map(); this.usedFlags = new Set(); this.textNote = new Map();
    this.gifts = []; this.ownerPic = new Map(); this.ownerCry = new Map(); this.ownerPicCry = new Map();
  }
  get versionName() {
    const v = this.version;
    return (VERSION_NAMES[v.cs] || '') + ' ' + (v.crystal || v.script.startsWith('crystal') ? '크리스탈' : '금·은');
  }
  // 스크립트 명령: 롬 바이트 → 툴 안 번호(한글판 기준), 길이
  opK(b) { return this.sv.toK[b]; }
  opLen(pc) { const d = this.data, b = d[pc]; return this.sv.toK[b] === 0x2D ? (d[pc + 4] !== 0 ? 9 : 5) : this.sv.len[b]; }
  // 툴 안 번호 → 이 롬의 바이트
  opRom(k) { const b = this.sv.fromK.get(k); if (b == null) throw new Error('이 버전에는 없는 스크립트 명령이에요'); return b; }

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
        const at = this.off(lbank, na);
        let r = this.cs.decode(d, at);
        if (!r) break;
        // 일본판 금·은의 이 표는 로마자 (WAKABA, 35=ROUTE)
        const nb = d.subarray(at, r.end);
        if (this.cs.kind === 'jp' && (nb[0] === 0x35 || nb.some(b => b >= 0x80 && b <= 0x99)) && nb.every(b => (b >= 0x80 && b <= 0x99) || b === 0x7f || b === 0x35 || b >= 0xf6)) {
          if (!this.romajiCs) { this.romajiCs = new Charset('en'); this.romajiCs.TOKENS = { 0x35: 'ROUTE ' }; }
          r = this.romajiCs.decode(d, at); r.text = r.text.replace(/\{ROUTE \}/g, 'ROUTE ');
        }
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
    // 대사가 없는 NPC 는 지도에만 흐리게 (상점 점원은 목록에 남김)
    const useless = o => o.texts.length === 0 && o.mart == null;
    area.extras = area.owners.filter(o => useless(o) && o.x >= 0 && !o.isSign);
    area.owners = area.owners.filter(o => !useless(o));
  }

  readMap(area, bank, scriptsAddr, eventsAddr) {
    const d = this.data;
    this.curArea = area;
    this.gifts = this.gifts.filter(g => g.area !== area);
    const auto = { name: '자동 이벤트', texts: [], x: -1, y: -1, eventOff: -1 };
    let p = this.off(bank, scriptsAddr);
    const nScene = d[p++];
    for (let i = 0; i < nScene && i < 32; i++, p += 4) this.walk(auto, bank, this.w(p));
    const nCb = d[p++];
    for (let i = 0; i < nCb && i < 32; i++, p += 3) this.walk(auto, bank, this.w(p + 1));

    let e = this.off(bank, eventsAddr) + 2;
    const nWarp = d[e++]; e += nWarp * 5;
    const nCoord = d[e++];
    const coordScripts = [], coordTexts = [];
    for (let i = 0; i < nCoord && i < 64; i++, e += 8) {
      const before = auto.texts.length;
      this.walk(auto, bank, this.w(e + 4));
      const added = auto.texts.slice(before);
      for (const t of added) this.textNote.set(t, '타일 트리거 T' + (i + 1) + ' (' + d[e + 2] + ',' + d[e + 1] + ') 밟으면');
      coordTexts.push(added); coordScripts.push(this.w(e + 4));
    }
    const nBg = d[e++];
    let signNo = 0;
    const signs = [];
    for (let i = 0; i < nBg && i < 64; i++, e += 5) {
      const type = d[e + 2], ptr = this.w(e + 3);
      const o = { name: '표지판·조사 ' + (++signNo), y: d[e], x: d[e + 1], isSign: true, eventOff: e, texts: [] };
      if (type <= 4) this.walk(o, bank, ptr);
      else if ((type === 5 || type === 6) && Rom.banked(ptr)) { this.usedFlags.add(this.w(this.off(bank, ptr))); this.walk(o, bank, this.w(this.off(bank, ptr) + 2)); }
      else if (type === 7 && Rom.banked(ptr)) this.usedFlags.add(this.w(this.off(bank, ptr)));
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
    // 트리거에서 NPC 가 다가와 말하는 대사는 그 NPC 의 대사 목록에도 보이게
    const objStart = e - nObj * 13;
    coordScripts.forEach((addr, ci) => {
      if (!Rom.banked(addr)) return;
      const mover = this.scriptOps(bank, addr).find(op => op[0] === 0x69 && op.length > 1 && op[1] >= 2);
      if (!mover) return;
      const npc = objs.find(o => o.eventOff === objStart + (mover[1] - 2) * 13);
      if (npc) for (const t of coordTexts[ci]) if (!npc.texts.includes(t)) npc.texts.push(t);
    });
    area.owners.push(...objs, ...signs, auto);
  }

  walkTrainer(o, bank, ptr) {
    if (!Rom.banked(ptr)) return;
    const h = this.off(bank, ptr);
    this.usedFlags.add(this.w(h));
    o.trainer = { cls: this.data[h + 2], id: this.data[h + 3] };
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
      const op = this.opK(d[pc]);
      const len = this.opLen(pc);
      if (len <= 0) return;
      const a1 = this.inRom(pc + 2) ? this.w(pc + 1) : 0;
      switch (op) {
        case 0x00: case 0x03: case 0x08: case 0x09: case 0x8D: case 0x8F: this.walk(o, bank, a1, visited, depth + 1); break;
        case 0x06: case 0x07: case 0x0A: case 0x0B: this.walk(o, bank, this.w(pc + 2), visited, depth + 1); break;
        case 0x01: case 0x04: this.walk(o, d[pc + 1], this.w(pc + 2), visited, depth + 1); break;
        case 0x4C: case K_FARJUMPTEXT: this.addText(o, d[pc + 1], this.w(pc + 2)); break;
        case 0x4D: case 0x52: case 0x53: this.addText(o, bank, a1); break;
        case 0x64: this.addText(o, bank, a1); this.addText(o, bank, this.w(pc + 3)); break;
        case 0x31: case 0x32: case 0x33: this.usedFlags.add(a1); break;
        case 0x5E: if (!o.trainer) o.trainer = { cls: d[pc + 1], id: d[pc + 2] }; break;          // loadtrainer
        case 0x94: if (d[pc + 1] !== 2 && d[pc + 1] !== 4) o.mart = this.w(pc + 2); break;         // pokemart
        case 0x2D: this.addGift(o, pc, false); break;                                             // givepoke
        case 0x2E: this.addGift(o, pc, true); break;                                              // giveegg
        case 0x56: this.addPicOrCry(o, pc + 1, false); break;                                     // pokepic
        case 0x84: this.addPicOrCry(o, pc + 1, true); break;                                      // cry
      }
      switch (op) {
        case 0x03: case 0x04: case 0x05: case 0x0C: case 0x52: case 0x53: case 0x8F:
        case 0x90: case 0x91: case 0x92: case 0x93: case 0xA0: case 0xA1: case K_FARJUMPTEXT: return;
      }
      pc += len;
    }
  }

  addGift(o, pc, egg) {
    if (!this.curArea || this.gifts.some(g => g.owner === o && g.off === pc)) return;
    const sp = this.data[pc + 1], lv = this.data[pc + 2];
    if (sp < 1 || sp > 251 || lv < 1 || lv > 100) return;
    this.gifts.push({ area: this.curArea, owner: o, off: pc, egg });
  }
  addPicOrCry(o, off, cry) {
    const m = cry ? this.ownerCry : this.ownerPic;
    if (!m.has(o)) m.set(o, []);
    if (!m.get(o).includes(off)) m.get(o).push(off);
    if (!this.ownerPicCry.has(o)) this.ownerPicCry.set(o, []);
    if (!this.ownerPicCry.get(o).includes(off)) this.ownerPicCry.get(o).push(off);
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
    this.smallFree = new Map();   // 뱅크 끝의 작은 빈칸 (짧은 점프용, 60-events.js allocSmallInBank)
    const d = this.data, banks = d.length / 0x4000;
    for (let b = 1; b < banks; b++) {
      const end = (b + 1) * 0x4000, fill = d[end - 1];
      if (fill !== 0x00 && fill !== 0xFF) continue;
      let s = end - 1;
      while (s > b * 0x4000 && d[s - 1] === fill) s--;
      const start = s + 0x40;
      if (end - start >= 0x100) { this.free.push([start, end, fill]); this.smallFree.set(b, [s + 0x10, start]); }
      else this.smallFree.set(b, [s + 0x10, end]);
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
    let s = this.find([0xE5, 0x21, -1, -1, 0x3D, 0x4F, 0x06, 0x00, 0x3E, 0x06, 0xCD], 0x4000, d.length);
    // 크리스탈: GetSprite 앞이 push hl 대신 ret c
    if (s < 0) s = this.find([0xD8, 0x21, -1, -1, 0x3D, 0x4F, 0x06, 0x00, 0x3E, 0x06, 0xCD], 0x4000, d.length);
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
// 크리스탈에만 있는 곡 (pokecrystal music_constants 순서)
const CRYSTAL_SONGS = ['이향 테마', '모바일 어댑터 메뉴', '모바일 어댑터', '부에나의 비밀번호', '수수께끼의 남자', '크리스탈 오프닝', '배틀타워 테마', '스이쿤 배틀', '배틀타워 로비', '모바일 센터'];
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
      else {
        // 크리스탈은 곡이 10개 더 있음
        const max = SONG_NAMES.length + (String.fromCharCode(...d.subarray(0x134, 0x13E)).includes('CRYSTAL') ? CRYSTAL_SONGS.length : 0);
        while (t.count < max) {
          const e = t.music + t.count * 3, b = d[e], a = W(d, e + 1);
          if (b < 1 || b >= d.length / 0x4000 || a < 0x4000 || a >= 0x8000) break;
          if ((d[Off(b, a)] & 0x3C) !== 0) break;
          t.count++;
        }
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
    let stopFrame = maxFrames, loopEndFrame = 0, firstUnit = 0;
    const events = [];
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
          // 편집 표 1칸 = 첫 채널의 음표 길이 단위
          if ((c.index === 0 || (!ch[0].active && c.index === 1)) && !firstUnit) firstUnit = c.noteLength * c.tempo / 256;
          if (pitch === 0) { c.rest = true; return; }
          let ev;
          if (c.index === 3) { startDrum(c, pitch); ev = { ch: 3, frame, frames: Math.max(1, c.duration), drum: pitch, volume: 12 }; }
          else {
            c.baseFreq = (getFrequency(c, pitch) + c.pitchOffset) & 0x7FF;
            c.freq = c.baseFreq; c.rest = false;
            c.vibDelayCnt = c.vibDelay; c.vibRateCnt = c.vibRate;
            if (c.index === 2) { c.waveIdx = c.envelope & 0xF; c.waveVol = (c.envelope >> 4) & 3; c.phase = 0; }
            else { c.vol = c.envelope >> 4; c.envUp = (c.envelope & 8) !== 0; c.envPeriod = c.envelope & 7; c.envTimer = 0; }
            ev = { ch: c.index, frame, frames: Math.max(1, c.duration), freq: c.baseFreq, volume: c.index === 2 ? 15 >> Math.max(0, c.waveVol - 1) : c.envelope >> 4 };
          }
          if (!loopEndFrame) events.push(ev);
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
    return { samples: out.subarray(0, ns), loopEndFrame: loopEndFrame || stopFrame, seconds: ns / SAMPLE_RATE, events, unitFrames: Math.max(1, firstUnit > 0 ? firstUnit : 6) };
  }

  // ---------------------------------------------------------------- 원곡 표 · 곡 번호
  function originalTable(d) { const t = find(d); if (!t) return new Uint8Array(0); originalOffset(d, 1); return origCache.get(d); }
  function songTableOffset(d) { const t = find(d); return t ? t.music : -1; }
  // 음악 번호 slot 이 가리키는 곳을 바꿈
  function setSongPointer(d, slot, offset) {
    const t = find(d);
    if (!t || slot < 1 || slot >= t.count) return false;
    originalOffset(d, 1);   // 바꾸기 전에 원곡 표를 기억
    const e = t.music + slot * 3, a = 0x4000 + offset % 0x4000;
    d[e] = Math.floor(offset / 0x4000); d[e + 1] = a & 0xFF; d[e + 2] = a >> 8;
    return true;
  }

  // ---------------------------------------------------------------- 편집 표(track) ↔ 롬 음악 데이터
  // track = { title, bpm, totalSteps, romSongId, edited, romOriginal, channels: [[{ pitch, octave, duration, volume }] ×4] }
  // pitch: 0 쉼표, 1=C … 12=B (드럼 채널은 1 킥, 2 스네어, 3 하이햇, 4 크래시)
  function newTrack(title, steps, bpm) {
    const t = { title: title || '새 BGM', bpm: bpm || 130, totalSteps: steps || 32, romSongId: -1, edited: false, romOriginal: false, channels: [] };
    for (let ch = 0; ch < 4; ch++) { const l = []; for (let i = 0; i < t.totalSteps; i++) l.push({ pitch: 0, octave: ch === 2 ? 3 : 4, duration: 1, volume: 12 }); t.channels.push(l); }
    return t;
  }
  // 드럼 번호 → 킥/스네어/하이햇/크래시 (표 표시용)
  function drumKindOf(drum) {
    if ([1, 5, 6, 7, 8].includes(drum)) return 2;
    if ([2, 3, 9, 10].includes(drum)) return 3;
    if (drum === 4 || drum === 11) return 4;
    return 1;
  }
  function toTrack(r, songId) {
    const unit = r.unitFrames;
    const steps = Math.min(4000, Math.max(16, Math.round(r.loopEndFrame / unit) + 1));
    const track = newTrack(name(songId), steps, Math.round(60 * FRAME_RATE / (4 * unit)));
    track.romSongId = songId;
    for (const e of r.events) {
      const s = Math.round(e.frame / unit);
      if (s < 0 || s >= steps) continue;
      const n = track.channels[e.ch][s];
      n.duration = Math.max(1, Math.round(e.frames / unit));
      n.volume = Math.max(1, Math.min(15, e.volume));
      if (e.ch === 3) { n.pitch = drumKindOf(e.drum); n.octave = 0; }
      else {
        const hz = (e.ch === 2 ? 65536 : 131072) / (2048 - e.freq);
        const midi = Math.round(69 + 12 * Math.log2(hz / 440));
        n.pitch = ((midi % 12) + 12) % 12 + 1; n.octave = Math.max(1, Math.min(7, Math.floor(midi / 12) - 1));
      }
    }
    return track;
  }
  const NOTE_SPEED = 12;   // note_type 속도 (1칸 = 16분음표)
  // 이 롬의 드럼킷에서 킥·스네어·하이햇·크래시에 가장 가까운 드럼 번호 고르기 (소리 데이터의 높이·길이로 판단)
  function drumMap(d) {
    let kit = 0, idx = [0, 1, 2, 3, 4];
    const t = find(d);
    if (!t || !t.drumkits) return { kit, idx };
    const bank = Math.floor(t.drumkits / 0x4000);
    let bestScore = -Infinity;
    for (let k = 0; k < 6; k++) {
      const kp = Off(bank, W(d, t.drumkits + k * 2));
      const shift = new Array(13).fill(0), frames = new Array(13).fill(0), ok = new Array(13).fill(false);
      for (let i = 1; i <= 12; i++) {
        let p = Off(bank, W(d, kp + i * 2)), n = 0, f = 0, sh = 0;
        while (n < 16 && p + 2 < d.length && d[p] !== 0xFF && (d[p] & 0xF0) === 0x20) { f += (d[p] & 0xF) + 2; if (n === 0) sh = d[p + 2] >> 4; p += 3; n++; }
        ok[i] = n > 0; shift[i] = sh; frames[i] = f;
      }
      const pick = score => { let bi = 1, bv = -Infinity; for (let i = 1; i <= 12; i++) if (ok[i] && score(i) > bv) { bv = score(i); bi = i; } return bi; };
      const kick = pick(i => shift[i] * 2 - Math.abs(frames[i] - 8) * 0.2);
      const snare = pick(i => -Math.abs(shift[i] - 3) * 2 + Math.min(frames[i], 20) * 0.1 - (i === kick ? 99 : 0));
      const hat = pick(i => -shift[i] * 2 - frames[i] * 0.3 - (i === kick || i === snare ? 99 : 0));
      const crash = pick(i => -shift[i] + frames[i] * 0.3 - (i === kick || i === snare || i === hat ? 99 : 0));
      const total = (shift[kick] - shift[hat]) + (frames[crash] - frames[hat]) * 0.1;
      if (total > bestScore) { bestScore = total; kit = k; idx = [0, kick, snare, hat, crash]; }
    }
    return { kit, idx };
  }
  // track 을 금·은 사운드 엔진 데이터로 (baseAddr = 놓일 뱅크 안 주소). 곡은 끝나면 처음부터 반복
  function encode(d, track, baseAddr) {
    const { kit, idx: drum } = drumMap(d);
    const framesPerStep = FRAME_RATE * 15 / Math.max(30, Math.min(400, track.bpm));
    const tempo = Math.max(1, Math.min(0xFFFF, Math.round(framesPerStep * 256 / NOTE_SPEED)));
    const chans = [], loops = [];
    for (let ch = 0; ch < 4; ch++) {
      const b = [];
      if (ch === 0) b.push(0xDA, tempo >> 8, tempo & 0xFF, 0xE5, 0x77, 0xDB, 2, 0xE1, 0x10, 0x23);   // 템포, 볼륨, 50% 사각파 + 살짝 비브라토
      if (ch === 1) b.push(0xDB, 1);                                                                 // 25% 사각파
      if (ch === 3) b.push(0xE3, kit, 0xD8, NOTE_SPEED);                                             // 드럼킷, 드럼 속도
      let env = ch === 2 ? 0x10 : 0xC0;
      if (ch !== 3) b.push(0xD8, NOTE_SPEED, env);
      loops[ch] = b.length;
      const notes = track.channels[ch], steps = Math.min(track.totalSteps, notes.length);
      let octave = -1, s = 0, rest = 0;
      const flushRest = () => { while (rest > 0) { const n = Math.min(16, rest); b.push(n - 1); rest -= n; } };
      while (s < steps) {
        const n = notes[s];
        if (n.pitch <= 0) { rest++; s++; continue; }
        let len = Math.max(1, Math.min(16, n.duration));
        for (let k = s + 1; k < s + len && k < steps; k++) if (notes[k].pitch > 0) { len = k - s; break; }
        len = Math.min(len, steps - s);
        flushRest();
        if (ch === 3) { const di = n.pitch >= 1 && n.pitch <= 4 ? drum[n.pitch] : drum[3]; b.push((di << 4) | (len - 1)); }
        else {
          const vol = Math.max(1, Math.min(15, n.volume));
          const e2 = ch === 2 ? ((vol >= 10 ? 1 : vol >= 6 ? 2 : 3) << 4) : (vol << 4) | (len <= 2 ? 2 : len <= 4 ? 3 : len <= 8 ? 5 : 0);
          if (e2 !== env) { b.push(0xDC, e2); env = e2; }
          // 사각파: 엔진 옥타브 n 의 도 = 과학 표기 n+1 / 웨이브는 한 옥타브 낮게 나옴
          const o = Math.max(1, Math.min(8, ch === 2 ? n.octave : n.octave - 1));
          if (o !== octave) { b.push(0xD8 - o); octave = o; }
          b.push((Math.max(1, Math.min(12, n.pitch)) << 4) | (len - 1));
        }
        rest = 0; s += len;
        while (s < steps && notes[s].pitch <= 0) { rest++; s++; }
      }
      flushRest();
      if (b.length === loops[ch]) b.push(0x0F);   // 빈 채널도 한 칸 쉼표는 있어야 무한 반복이 안 멈춤
      chans.push(b);
    }
    const out = [], starts = [];
    let pos = baseAddr + 12;
    for (let ch = 0; ch < 4; ch++) { starts.push(pos); pos += chans[ch].length + 4; }
    for (let ch = 0; ch < 4; ch++) out.push((ch === 0 ? 0xC0 : 0) | ch, starts[ch] & 0xFF, starts[ch] >> 8);
    for (let ch = 0; ch < 4; ch++) { out.push(...chans[ch]); const at = starts[ch] + loops[ch]; out.push(0xFD, 0x00, at & 0xFF, at >> 8); }
    return out;
  }

  // ---------------------------------------------------------------- 편집한 곡 미리듣기 (간단한 칩튠 합성, BgmForm.cs ChiptuneSynth)
  const noteHz = (pitch, octave) => pitch <= 0 ? 0 : 440 * Math.pow(2, ((octave - 1) * 12 + (pitch - 1) - 45) / 12);
  function synthTone(buf, start, count, ch, freq, vol) {
    if (freq <= 0) return;
    const period = SAMPLE_RATE / freq, duty = ch === 1 ? 0.25 : 0.5, maxAmp = vol / 15 * 8000 / 32768;
    for (let i = 0; i < count && start + i < buf.length; i++) {
      const pos = (i % period) / period;
      const v = ch === 2 ? (pos < 0.5 ? pos * 4 - 1 : 3 - pos * 4) * maxAmp * 1.3 : (pos < duty ? maxAmp : -maxAmp);
      buf[start + i] = Math.max(-1, Math.min(1, buf[start + i] + v * (1 - i / count * 0.4)));
    }
  }
  function synthDrum(buf, start, count, type, vol) {
    let seed = start * 9301 + 49297;
    const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    const maxAmp = vol / 15 * 9000 / 32768;
    for (let i = 0; i < count && start + i < buf.length; i++) {
      const p = i / count;
      let v = 0;
      if (type === 1) v = Math.sin(2 * Math.PI * Math.max(40, 150 * (1 - p * 0.9)) * i / SAMPLE_RATE) * maxAmp * 1.4;
      else if (type === 2) v = ((rnd() * 2 - 1) * 0.7 + Math.sin(2 * Math.PI * 220 * i / SAMPLE_RATE) * 0.3) * maxAmp * (1 - p) ** 2;
      else if (type === 3) { if (p < 0.35) v = (rnd() * 2 - 1) * maxAmp * 0.6 * (1 - p / 0.35); }
      else if (type === 4) v = (rnd() * 2 - 1) * maxAmp * 0.8 * (1 - p) ** 1.5;
      buf[start + i] = Math.max(-1, Math.min(1, buf[start + i] + v));
    }
  }
  function renderTrack(track, mute) {
    const bpm = Math.max(30, Math.min(400, track.bpm)), stepDur = 60 / bpm / 4;
    const buf = new Float32Array(Math.floor(track.totalSteps * stepDur * SAMPLE_RATE) + 1);
    for (let ch = 0; ch < 4; ch++) {
      if (mute && mute[ch]) continue;
      const notes = track.channels[ch];
      for (let s = 0; s < track.totalSteps && s < notes.length; s++) {
        const n = notes[s];
        if (!n.pitch) continue;
        const start = Math.floor(s * stepDur * SAMPLE_RATE), cnt = Math.floor(n.duration * stepDur * SAMPLE_RATE * 0.92);
        if (ch === 3) synthDrum(buf, start, cnt, n.pitch, n.volume); else synthTone(buf, start, cnt, ch, noteHz(n.pitch, n.octave), n.volume);
      }
    }
    return buf;
  }
  function previewNote(ch, pitch, octave) {
    const n = Math.floor(SAMPLE_RATE * (ch === 3 ? 0.12 : 0.18)), buf = new Float32Array(n);
    if (ch === 3) synthDrum(buf, 0, n, pitch, 14); else synthTone(buf, 0, n, ch, noteHz(pitch, octave), 14);
    return buf;
  }

  const name = id => id >= 0 && id < SONG_NAMES.length ? SONG_NAMES[id] : CRYSTAL_SONGS[id - SONG_NAMES.length] || '곡 0x' + hex2(id);
  return { SAMPLE_RATE, FRAME_RATE, songCount, render, name, isReplaced, groups: SONG_GROUPS, songOffset, originalOffset, originalTable, findBackup, songTableOffset,
    setSongPointer, newTrack, toTrack, encode, renderTrack, previewNote, BACKUP_SIG };
})();

// 브라우저에서 곡 재생 (한 번에 하나)
// once: 짧은 미리듣기 (멈추기·재생 위치에 안 잡힘). playOnce: 한 번만 재생하지만 위치를 알 수 있음
const Player = {
  ctx: null, src: null, onEnd: null, t0: 0, dur: 0, loop: false,
  // from: 시작 위치 (초)
  play(samples, once, from) { this._start(samples, !once, once, from); },
  playOnce(samples, from) { this._start(samples, false, false, from); },
  _start(samples, loop, preview, from) {
    if (!preview) this.stop();
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (!samples.length) return;
    const buf = this.ctx.createBuffer(1, samples.length, RomMusic.SAMPLE_RATE);
    buf.copyToChannel(samples, 0);
    const s = this.ctx.createBufferSource();
    let off = Math.max(0, from || 0);
    if (off >= buf.duration) off = loop ? off % buf.duration : 0;
    s.buffer = buf; s.loop = loop; s.connect(this.ctx.destination); s.start(0, off);
    if (preview) return;
    this.src = s; this.t0 = this.ctx.currentTime - off; this.dur = buf.duration; this.loop = loop;
    s.onended = () => { if (this.src === s) this.src = null; };
  },
  stop() { if (this.src) { try { this.src.stop(); } catch (e) { } this.src = null; } },
  get playing() { return !!this.src; },
  // 지금 재생 위치 (초). 재생 중이 아니면 -1
  pos() {
    if (!this.src) return -1;
    const t = this.ctx.currentTime - this.t0;
    if (this.loop) return this.dur ? t % this.dur : 0;
    return t <= this.dur ? t : -1;
  }
};

// ===== 41-cry.js
// ================================================================ 포켓몬 울음소리 (금·은 사운드 엔진의 울음소리 재생을 흉내)
// 포켓몬마다 6바이트: 기본 울음소리 번호(2) · 음높이(2, 부호 있음) · 길이(2, $100 = 보통)
// 기본 울음소리 = 효과음과 같은 머리말 + 채널(사각파 2개 · 노이즈) 음표 목록. 음표 = 길이 · 볼륨 · 주파수
const RomCry = (() => {
  const SR = RomMusic.SAMPLE_RATE, FR = RomMusic.FRAME_RATE;
  const W = (d, o) => d[o] | (d[o + 1] << 8);
  const Off = (bank, addr) => bank * 0x4000 + (addr & 0x3FFF);
  const s16 = v => v >= 0x8000 ? v - 0x10000 : v;
  const DUTY = [0.125, 0.25, 0.5, 0.75];

  // 표 찾기: 포켓몬별 울음소리 표 · 기본 울음소리 포인터 표
  function find(d) {
    const m = findPat(d, [0x3E, -1, 0xD7, 0x21, -1, -1, 0x09, 0x09, 0x09, 0x09, 0x09, 0x09, 0x5E, 0x23, 0x56, 0x23], 0);
    if (m < 0) return null;
    const hdr = Off(d[m + 1], W(d, m + 4));
    let count = 0;
    for (let i = 0; i < 251; i++) count = Math.max(count, W(d, hdr + i * 6) + 1);
    if (count < 10 || count > 200) return null;
    // _PlayCry: ld hl, Cries / add hl, de ×3 / ld a, [hli] / ld [wMusicBank], a … 조금 뒤에 ld hl, CHANNEL_PITCH_OFFSET
    for (let p = 0; ; p++) {
      p = findPat(d, [0x21, -1, -1, 0x19, 0x19, 0x19, 0x2A, 0xEA, -1, -1, 0x5E, 0x23, 0x56, 0xCD], p);
      if (p < 0) return null;
      if (findPat(d.subarray(p, p + 80), [0x21, 0x27, 0x00, 0x09, 0xFA], 0) < 0) continue;
      return { hdr, tab: Off(Math.floor(p / 0x4000), W(d, p + 1)), count };
    }
  }
  function findPat(d, pat, start) {
    outer: for (let i = start; i + pat.length <= d.length; i++) {
      for (let k = 0; k < pat.length; k++) if (pat[k] >= 0 && d[i + k] !== pat[k]) continue outer;
      return i;
    }
    return -1;
  }
  const baseOff = (d, t, id) => { const e = t.tab + id * 3; return Off(d[e], W(d, e + 1)); };
  function header(d, t, mon) { const o = t.hdr + (mon - 1) * 6; return { base: W(d, o), pitch: s16(W(d, o + 2)), length: W(d, o + 4) }; }
  function setHeader(d, t, mon, h) {
    const o = t.hdr + (mon - 1) * 6, p = h.pitch & 0xFFFF;
    d[o] = h.base & 0xFF; d[o + 1] = h.base >> 8; d[o + 2] = p & 0xFF; d[o + 3] = p >> 8; d[o + 4] = h.length & 0xFF; d[o + 5] = h.length >> 8;
  }

  // 기본 울음소리 → { channels: [{ id, notes: [{ len, env, freq, duty, pattern, sweep }] }] } (반복·호출은 풀어서)
  function decode(d, off) {
    const bank = Math.floor(off / 0x4000), n = (d[off] >> 6) + 1, channels = [];
    for (let i = 0; i < n; i++) {
      const id = d[off + i * 3] & 7;
      channels.push({ id, notes: parseChannel(d, bank, W(d, off + i * 3 + 1), id) });
    }
    return { channels, music: channels.some(c => c.notes.music || c.id < 4) };
  }

  // ---------------------------------------------------------------- 효과음 (기술 소리 등): 울음소리 표 바로 뒤에 있는 같은 형식의 표
  const SFX_NAMES = ('DEX_FANFARE_50_79,ITEM,CAUGHT_MON,POKEBALLS_PLACED_ON_TABLE,POTION,FULL_HEAL,MENU,READ_TEXT,READ_TEXT_2,DEX_FANFARE_20_49,DEX_FANFARE_80_109,POISON,GOT_SAFARI_BALLS,BOOT_PC,SHUT_DOWN_PC,CHOOSE_PC_OPTION,ESCAPE_ROPE,PUSH_BUTTON,SECOND_PART_OF_ITEMFINDER,WARP_TO,WARP_FROM,CHANGE_DEX_MODE,JUMP_OVER_LEDGE,GRASS_RUSTLE,FLY,WRONG,SQUEAK,STRENGTH,BOAT,WALL_OPEN,PLACE_PUZZLE_PIECE_DOWN,ENTER_DOOR,SWITCH_POKEMON,TALLY,TRANSACTION,EXIT_BUILDING,BUMP,SAVE,POKEFLUTE,ELEVATOR_END,THROW_BALL,BALL_POOF,FAINT,RUN,SLOT_MACHINE_START,FANFARE,PECK,KINESIS,LICK,POUND,MOVE_PUZZLE_PIECE,COMET_PUNCH,MEGA_PUNCH,SCRATCH,VICEGRIP,RAZOR_WIND,CUT,WING_ATTACK,WHIRLWIND,BIND,VINE_WHIP,DOUBLE_KICK,MEGA_KICK,HEADBUTT,HORN_ATTACK,TACKLE,POISON_STING,POWDER,DOUBLESLAP,BITE,JUMP_KICK,STOMP,TAIL_WHIP,KARATE_CHOP,SUBMISSION,WATER_GUN,SWORDS_DANCE,THUNDER,SUPERSONIC,LEER,EMBER,BUBBLEBEAM,HYDRO_PUMP,SURF,PSYBEAM,CHARGE,THUNDERSHOCK,PSYCHIC,SCREECH,BONE_CLUB,SHARPEN,EGG_BOMB,SING,HYPER_BEAM,SHINE,UNKNOWN_5F,UNKNOWN_60,UNKNOWN_61,SWITCH_POCKETS,UNKNOWN_63,BURN,TITLE_SCREEN_ENTRANCE,UNKNOWN_66,GET_COIN_FROM_SLOTS,PAY_DAY,METRONOME,CALL,HANG_UP,NO_SIGNAL,SANDSTORM,ELEVATOR,PROTECT,SKETCH,RAIN_DANCE,AEROBLAST,SPARK,CURSE,RAGE,THIEF,THIEF_2,SPIDER_WEB,MIND_READER,NIGHTMARE,SNORE,SWEET_KISS,SWEET_KISS_2,BELLY_DRUM,TOXIC,SLUDGE_BOMB,FORESIGHT,SPITE,OUTRAGE,PERISH_SONG,GIGA_DRAIN,ATTRACT,KINESIS_2,ZAP_CANNON,MEAN_LOOK,HEAL_BELL,RETURN,EXP_BAR,MILK_DRINK,PRESENT,MORNING_SUN,LEVEL_UP,KEY_ITEM,FANFARE_2,REGISTER_PHONE_NUMBER,3RD_PLACE,GET_EGG_UNUSED,GET_EGG,MOVE_DELETED,2ND_PLACE,1ST_PLACE,CHOOSE_A_CARD,GET_TM,GET_BADGE,QUIT_SLOTS,EGG_CRACK,DEX_FANFARE_LESS_THAN_20,DEX_FANFARE_140_169,DEX_FANFARE_170_199,DEX_FANFARE_200_229,DEX_FANFARE_230_PLUS,EVOLVED,MASTER_BALL,EGG_HATCH,GS_INTRO_CHARIZARD_FIREBALL,GS_INTRO_POKEMON_APPEARS,FLASH,GAME_FREAK_LOGO_GS,NOT_VERY_EFFECTIVE,DAMAGE,SUPER_EFFECTIVE,BALL_BOUNCE,MOONLIGHT,ENCORE,BEAT_UP,BATON_PASS,BALL_WOBBLE,SWEET_SCENT,SWEET_SCENT_2,HIT_END_OF_EXP_BAR,GIVE_TRADEMON,GET_TRADEMON,TRAIN_ARRIVED,STOP_SLOT,2_BOOPS').split(',');
  // 배틀 애니메이션 명령 길이 (pokegold macros/scripts/battle_anims.asm)
  const ANIM_LEN = { 0xD0: 5, 0xD1: 2, 0xD2: 3, 0xD3: 4, 0xD4: 5, 0xD5: 6, 0xD6: 2, 0xD7: 3, 0xD8: 2, 0xE0: 3, 0xE1: 2, 0xEE: 4, 0xEF: 3, 0xF0: 5, 0xF1: 2, 0xF2: 2, 0xF3: 2, 0xF8: 4, 0xF9: 2, 0xFB: 4, 0xFC: 3, 0xFD: 4, 0xFE: 3 };
  const animLen = c => c <= 0xCF ? 1 : ANIM_LEN[c] || 1;
  // 애니메이션 하나에서 anim_sound 들 → [{ sfx, at (효과음 번호가 있는 바이트 위치) }] (호출·점프도 따라감)
  function animSounds(d, bank, addr) {
    const out = [], seen = new Set(), todo = [addr];
    while (todo.length) {
      let p = Off(bank, todo.pop());
      for (let k = 0; k < 300 && !seen.has(p); k++) {
        seen.add(p);
        const c = d[p];
        if (c === 0xE0) out.push({ sfx: d[p + 2], at: p + 2 });
        if (c === 0xFE) todo.push(W(d, p + 1));
        if (c === 0xFC) { todo.push(W(d, p + 1)); break; }
        if (c === 0xFD) todo.push(W(d, p + 2));
        if (c === 0xFF) break;
        p += animLen(c);
      }
    }
    return out;
  }
  const sfxCache = new WeakMap();
  function findSfx(d) {
    if (sfxCache.has(d)) return sfxCache.get(d);
    let r = null;
    const t = find(d);
    if (t) {
      const tab = t.tab + t.count * 3, bank = Math.floor(tab / 0x4000), a = 0x4000 + tab % 0x4000;
      if (findPat(d, [0x21, a & 0xFF, a >> 8, 0x19, 0x19, 0x19, 0x2A], 0) >= 0) {
        let count = 0;
        // 머리말 첫 바이트 = (채널 수 - 1) << 6 | 채널 번호(0~7) → 3~5번 비트는 0
        while (count < SFX_NAMES.length) {
          const e = tab + count * 3, b = d[e], p = W(d, e + 1);
          if (b < 1 || b * 0x4000 >= d.length || p < 0x4000 || p >= 0x8000 || (d[Off(b, p)] & 0x38) !== 0) break;
          count++;
        }
        r = { tab, bank, count, moves: findMoveSounds(d) };
      }
    }
    sfxCache.set(d, r);
    return r;
  }
  // 기술 애니메이션 표: 막치기·태권당수·연속뺨치기 애니메이션에 각자 이름의 효과음이 있는 자리
  function findMoveSounds(d) {
    const iP = SFX_NAMES.indexOf('POUND'), iK = SFX_NAMES.indexOf('KARATE_CHOP'), iS = SFX_NAMES.indexOf('DOUBLESLAP');
    const ok = (bank, a, s) => a >= 0x4000 && a < 0x8000 && animSounds(d, bank, a).some(x => x.sfx === s);
    for (let i = 0x4000; i < d.length - 8; i++) {
      const bank = Math.floor(i / 0x4000);
      if (!ok(bank, W(d, i + 2), iP) || !ok(bank, W(d, i + 4), iK) || !ok(bank, W(d, i + 6), iS)) continue;
      const byMove = [];
      for (let m = 1; m <= 251; m++) { const a = W(d, i + m * 2); byMove[m] = a >= 0x4000 && a < 0x8000 ? animSounds(d, bank, a) : []; }
      return { tab: i, byMove };
    }
    return null;
  }
  // 기술 애니메이션 표만 따로 (기술 그림 편집용)
  const animCache = new WeakMap();
  function moveAnims(d) { if (!animCache.has(d)) { const s = findSfx(d); animCache.set(d, s && s.moves ? s.moves : findMoveSounds(d)); } return animCache.get(d); }
  // 애니메이션에서 불러오는 그림 묶음 번호들 (anim_1gfx ~ anim_5gfx)
  function animGfx(d, bank, addr) {
    const out = new Set(), seen = new Set(), todo = [addr];
    while (todo.length) {
      let p = Off(bank, todo.pop());
      for (let k = 0; k < 300 && !seen.has(p); k++) {
        seen.add(p);
        const c = d[p];
        if (c >= 0xD1 && c <= 0xD5) for (let i = 1; i <= c - 0xD0; i++) out.add(d[p + i]);
        if (c === 0xFE) todo.push(W(d, p + 1));
        if (c === 0xFC) { todo.push(W(d, p + 1)); break; }
        if (c === 0xFD) todo.push(W(d, p + 2));
        if (c === 0xFF) break;
        p += animLen(c);
      }
    }
    return [...out];
  }
  const sfxOff = (d, s, id) => { const e = s.tab + id * 3; return Off(d[e], W(d, e + 1)); };
  const sfxName = id => SFX_NAMES[id] || ('SFX_' + id);
  function parseChannel(d, bank, pc, id) {
    const notes = [], loops = new Map(), noise = (id & 3) === 3;
    let duty = 2, pattern = null, sweep = 0, ret = -1, guard = 0;
    const g = () => d[Off(bank, pc++)];
    while (guard++ < 4000 && notes.length < 400) {
      const c = g();
      if (c < 0xD0) {
        const env = g(); let freq = g();
        if (!noise) freq |= g() << 8;
        notes.push({ len: c, env, freq, duty, pattern: pattern && pattern.slice(), sweep });
        continue;
      }
      switch (c) {
        case 0xDB: duty = g() & 3; pattern = null; break;
        case 0xDE: { const p = g(); pattern = [p >> 6 & 3, p >> 4 & 3, p >> 2 & 3, p & 3]; break; }
        case 0xDD: sweep = g(); break;
        case 0xDA: case 0xE0: case 0xE1: case 0xE6: pc += 2; break;
        case 0xD8: pc += noise ? 1 : 2; break;
        case 0xD9: case 0xDC: case 0xE2: case 0xE3: case 0xE4: case 0xE5: case 0xE7: case 0xE8: case 0xE9: case 0xEE: case 0xEF: case 0xF0: case 0xFA: pc += 1; break;
        case 0xFB: pc += 3; break;
        case 0xFC: pc = W(d, Off(bank, pc)); break;
        case 0xFD: {
          const cnt = g(), to = W(d, Off(bank, pc)), key = pc; pc += 2;
          if (cnt === 0) return notes;   // 끝없는 반복: 한 번만
          const rem = (loops.has(key) ? loops.get(key) : cnt) - 1;
          if (rem > 0) { loops.set(key, rem); pc = to; } else loops.delete(key);
          break;
        }
        case 0xDF: notes.music = true; return notes;   // toggle_sfx: 여기서부터 음악 형식 (팡파르 등) → 이 편집기로는 못 다룸
        case 0xFE: ret = pc + 2; pc = W(d, Off(bank, pc)); break;
        case 0xFF: if (ret >= 0) { pc = ret; ret = -1; break; } return notes;
        default: break;   // 옥타브·인자 없는 명령
      }
    }
    return notes;
  }

  // 머리말 + 채널 데이터 바이트 (base = 롬에 들어갈 주소 $4000~)
  function encode(cry, base) {
    const chans = cry.channels;
    const head = [], body = [];
    let addr = base + chans.length * 3;
    chans.forEach((c, i) => {
      head.push((i === 0 ? (chans.length - 1) << 6 : 0) | c.id, addr & 0xFF, addr >> 8);
      const b = [], noise = (c.id & 3) === 3;
      let duty = -1, pat = '', sweep = -1;
      for (const n of c.notes) {
        if (n.pattern) { const k = n.pattern.join(); if (k !== pat) { b.push(0xDE, n.pattern[0] << 6 | n.pattern[1] << 4 | n.pattern[2] << 2 | n.pattern[3]); pat = k; duty = -1; } }
        else if (!noise && n.duty !== duty) { b.push(0xDB, n.duty & 3); duty = n.duty; pat = ''; }
        if ((c.id & 3) === 0 && (n.sweep || 0) !== sweep && !(sweep < 0 && !n.sweep)) { b.push(0xDD, n.sweep || 0); sweep = n.sweep || 0; }
        b.push(Math.min(0xCF, n.len), n.env & 0xFF, n.freq & 0xFF);
        if (!noise) b.push((n.freq >> 8) & 0xFF);
      }
      b.push(0xFF);
      body.push(...b); addr += b.length;
    });
    return head.concat(body);
  }

  // 합성 → Float32Array (pitch: 음높이 더하기, length: 사각파 채널 빠르기 $100 = 보통)
  function render(cry, pitch, length) {
    const spf = SR / FR, chans = [];
    let maxFrames = 0;
    for (const c of cry.channels) {
      const noise = (c.id & 3) === 3, tempo = noise ? 0x100 : length;
      let frac = 0, f = 0;
      const seq = c.notes.map(n => {
        const r = frac + (((n.len + 1) & 0xFF) * tempo);
        frac = r & 0xFF;
        const frames = Math.max(1, r >> 8), s = { n, start: f, frames };
        f += frames;
        return s;
      });
      maxFrames = Math.max(maxFrames, f);
      chans.push({ c, noise, seq });
    }
    maxFrames = Math.min(maxFrames, FR * 8);
    const total = Math.ceil((maxFrames + 6) * spf), out = new Float32Array(total);
    for (const { c, noise, seq } of chans) {
      let phase = 0, lfsr = 0x7FFF, clk = 0;
      for (const s of seq) {
        if (s.start >= maxFrames) break;
        const n = s.n, envStep = (n.env & 7) * SR / 64, up = (n.env & 8) !== 0;
        let vol = n.env >> 4, envT = 0;
        if (vol === 0 && !up) continue;
        const sw = (c.id & 3) === 0 ? (n.sweep || 0) : 0, swStep = ((sw >> 4) & 7) * SR / 128, swShift = sw & 7, swDown = (sw & 8) !== 0;
        let fr = ((n.freq + pitch) & (noise ? 0xFF : 0x7FF)), swT = 0, on = true;
        const a = Math.floor(s.start * spf), b = Math.min(total, Math.floor((s.start + s.frames) * spf));
        let hz = 131072 / (2048 - fr), nz = 0;
        if (noise) { const r = fr & 7, sh = fr >> 4; nz = 524288 / (r === 0 ? 0.5 : r) / Math.pow(2, sh + 1) / SR; }
        for (let i = a; i < b && on; i++) {
          let v;
          if (noise) {
            clk += nz;
            while (clk >= 1) { clk -= 1; const x = (lfsr ^ (lfsr >> 1)) & 1; lfsr = (lfsr >> 1) | (x << 14); if (fr & 8) lfsr = (lfsr & ~0x40) | (x << 6); }
            v = (lfsr & 1) ? -1 : 1;
          } else {
            const fi = Math.floor((i / spf)) - s.start;
            const duty = DUTY[n.pattern ? n.pattern[((fi % 4) + 4) % 4] : n.duty];
            phase += hz / SR; phase -= Math.floor(phase);
            v = phase < duty ? 1 : -1;
          }
          out[i] += v * vol / 15 * 0.18;
          if (envStep) { envT++; if (envT >= envStep) { envT = 0; vol = Math.max(0, Math.min(15, vol + (up ? 1 : -1))); } }
          if (swStep && swShift) { swT++; if (swT >= swStep) { swT = 0; fr = fr + (swDown ? -1 : 1) * (fr >> swShift); if (fr > 2047 || fr < 0) on = false; else hz = 131072 / (2048 - fr); } }
        }
      }
    }
    // 직류 성분 빼기
    let pIn = 0, pOut = 0;
    for (let i = 0; i < total; i++) { const x = out[i]; pOut = x - pIn + 0.996 * pOut; pIn = x; out[i] = pOut; }
    return out;
  }

  // ---------------------------------------------------------------- 소리 파일 → 울음소리
  // x: 모노 샘플, rate: 샘플 빠르기. maxSec: 최대 길이, shift: 반음 조옮김, mix: { sq2, noise } 0~1
  function convert(x, rate, o) {
    const maxSec = o.maxSec || 1.5, shift = o.shift || 0;
    let peak = 0; for (let i = 0; i < x.length; i++) peak = Math.max(peak, Math.abs(x[i]));
    if (peak < 1e-4) throw new Error('소리가 거의 없는 파일이에요');
    let a = 0, b = x.length - 1;
    while (a < b && Math.abs(x[a]) < peak * 0.03) a++;
    while (b > a && Math.abs(x[b]) < peak * 0.03) b--;
    b = Math.min(b, a + Math.floor(maxSec * rate));
    const seg = 2, segLen = rate * seg / FR, nSeg = Math.max(1, Math.floor((b - a) / segLen));
    const frames = [];
    let maxRms = 0;
    for (let k = 0; k < nSeg; k++) {
      const s0 = a + Math.floor(k * segLen), s1 = Math.min(x.length, s0 + Math.floor(segLen));
      let e = 0, zc = 0;
      for (let i = s0; i < s1; i++) { e += x[i] * x[i]; if (i > s0 && (x[i] >= 0) !== (x[i - 1] >= 0)) zc++; }
      const rms = Math.sqrt(e / Math.max(1, s1 - s0));
      maxRms = Math.max(maxRms, rms);
      // 음높이: 정규화한 자기상관 (80~2000Hz)
      const w0 = Math.max(0, s0 + Math.floor(segLen / 2) - Math.floor(rate * 0.02)), wl = Math.min(Math.floor(rate * 0.04), x.length - w0);
      const lagMin = Math.floor(rate / 2000), lagMax = Math.min(Math.floor(rate / 80), wl - 1);
      let best = 0, bestLag = 0;
      for (let lag = lagMin; lag <= lagMax; lag++) {
        let s = 0, e1 = 0, e2 = 0;
        for (let i = 0; i + lag < wl; i += 2) { const p = x[w0 + i], q = x[w0 + i + lag]; s += p * q; e1 += p * p; e2 += q * q; }
        const r = s / Math.sqrt(e1 * e2 + 1e-12);
        if (r > best) { best = r; bestLag = lag; }
      }
      frames.push({ rms, conf: best, hz: bestLag ? rate / bestLag : 0, zcr: zc / Math.max(1, s1 - s0) * rate / 2 });
    }
    // 음높이 없는 칸은 앞뒤 값으로 채움
    let last = 0;
    for (const f of frames) { if (f.conf > 0.5 && f.hz) last = f.hz; else f.hz = 0; }
    for (let i = frames.length - 1, nx = last; i >= 0; i--) { if (frames[i].hz) nx = frames[i].hz; else frames[i].hz = nx; }
    for (let i = 0, pv = 0; i < frames.length; i++) { if (!frames[i].hz) frames[i].hz = pv || 440; pv = frames[i].hz; }
    const sq1 = [], sq2 = [], nz = [];
    const reg = hz => Math.max(0, Math.min(2047, Math.round(2048 - 131072 / (hz * Math.pow(2, shift / 12)))));
    for (const f of frames) {
      const lv = maxRms ? Math.sqrt(f.rms / maxRms) : 0, v = Math.max(0, Math.min(15, Math.round(lv * 15)));
      const tonal = Math.max(0, Math.min(1, (f.conf - 0.3) / 0.5));
      const fr = reg(f.hz);
      sq1.push({ len: seg - 1, env: Math.round(v * (0.4 + 0.6 * tonal)) << 4, freq: fr, duty: 2, pattern: null, sweep: 0 });
      sq2.push({ len: seg - 1, env: Math.round(v * (o.sq2 == null ? 0.6 : o.sq2) * (0.4 + 0.6 * tonal)) << 4, freq: Math.min(2047, fr + 3), duty: 1, pattern: null, sweep: 0 });
      const nf = Math.max(200, Math.min(200000, f.zcr * 2)), sh = Math.max(0, Math.min(13, Math.round(Math.log2(262144 / nf))));
      nz.push({ len: seg - 1, env: Math.round(v * (o.noise == null ? 0.7 : o.noise) * (1 - 0.7 * tonal)) << 4, freq: sh << 4 | 1, duty: 0, pattern: null, sweep: 0 });
    }
    const merge = l => {
      const r = [];
      for (const n of l) {
        const p = r[r.length - 1];
        if (p && p.env === n.env && Math.abs(p.freq - n.freq) <= (p.freq > 1900 ? 1 : 0) && p.len + n.len + 1 <= 0x3F) p.len += n.len + 1;
        else r.push(Object.assign({}, n));
      }
      while (r.length && r[r.length - 1].env >> 4 === 0) r.pop();
      return r;
    };
    return { channels: [{ id: 4, notes: merge(sq1) }, { id: 5, notes: merge(sq2) }, { id: 7, notes: merge(nz) }] };
  }

  const clone = cry => ({ channels: cry.channels.map(c => ({ id: c.id, notes: c.notes.map(n => Object.assign({}, n, { pattern: n.pattern && n.pattern.slice() })) })) });
  return { find, header, setHeader, baseOff, decode, encode, render, convert, clone, s16, findSfx, sfxOff, sfxName, animSounds, moveAnims, animGfx };
})();

// ===== 42-gbemu.js
// ================================================================ 게임보이 컬러 에뮬레이터 (기술 애니메이션 미리보기용 · 롬의 진짜 코드를 실행)
// CPU(LR35902) · MBC3 · CGB(VRAM/WRAM 뱅크, 팔레트, HDMA, 2배속) · 화면(줄 단위) · 인터럽트 · 타이머 · 소리 레지스터 기록
const GBEmu = (() => {
  const CLOCKS_PER_LINE = 456;
  class Emu {
    constructor(rom) {
      this.rom = rom;
      this.cgb = (rom[0x143] & 0x80) !== 0;
      this.romBanks = Math.max(2, rom.length >> 14);
      this.sram = new Uint8Array(0x8000);
      this.vram = new Uint8Array(0x4000); this.wram = new Uint8Array(0x8000); this.oam = new Uint8Array(0xA0);
      this.hram = new Uint8Array(0x80); this.io = new Uint8Array(0x80);
      this.bgPal = new Uint8Array(64); this.obPal = new Uint8Array(64);
      this.frame = new Uint32Array(160 * 144);
      this.lineBg = new Uint8Array(160); this.lineBgPri = new Uint8Array(160);
      this.reset();
    }
    reset() {
      this.a = this.cgb ? 0x11 : 0x01; this.f = 0x80; this.b = 0; this.c = 0x13; this.d = 0; this.e = 0xD8; this.h = 0x01; this.l = 0x4D;
      this.sp = 0xFFFE; this.pc = 0x100; this.ime = false; this.imeNext = false; this.halted = false;
      this.romBank = 1; this.ramBank = 0; this.ramOn = false; this.vbank = 0; this.wbank = 1;
      this.ie = 0; this.dot = 0; this.ly = 0; this.mode = 2; this.divC = 0; this.timC = 0; this.double = false;
      this.hdmaActive = false; this.hdmaSrc = 0; this.hdmaDst = 0; this.hdmaLeft = 0;
      this.io.fill(0); this.io[0x40] = 0x91; this.io[0x47] = 0xFC; this.io[0x48] = 0xFF; this.io[0x49] = 0xFF;
      this.bgpi = 0; this.obpi = 0; this.frames = 0; this.soundLog = [];
      this.statLine = false; this.winLine = 0; this.bad = 0;
    }
    // ---------------------------------------------------------------- 메모리
    rd(a) {
      a &= 0xFFFF;
      if (a < 0x4000) return this.rom[a];
      if (a < 0x8000) return this.rom[(this.romBank % this.romBanks) * 0x4000 + (a - 0x4000)];
      if (a < 0xA000) return this.vram[this.vbank * 0x2000 + (a - 0x8000)];
      if (a < 0xC000) { if (this.ramBank <= 3) return this.sram[this.ramBank * 0x2000 + (a - 0xA000)]; return 0; }
      if (a < 0xD000) return this.wram[a - 0xC000];
      if (a < 0xE000) return this.wram[this.wbank * 0x1000 + (a - 0xD000)];
      if (a < 0xFE00) return this.rd(a - 0x2000);
      if (a < 0xFEA0) return this.oam[a - 0xFE00];
      if (a < 0xFF00) return 0xFF;
      if (a < 0xFF80) return this.rdIO(a & 0x7F);
      if (a < 0xFFFF) return this.hram[a - 0xFF80];
      return this.ie;
    }
    wr(a, v) {
      a &= 0xFFFF; v &= 0xFF;
      if (a < 0x2000) { this.ramOn = (v & 0x0F) === 0x0A; return; }
      if (a < 0x4000) { this.romBank = (v & 0x7F) || 1; return; }
      if (a < 0x6000) { this.ramBank = v; return; }
      if (a < 0x8000) return;   // RTC 래치
      if (a < 0xA000) { this.vram[this.vbank * 0x2000 + (a - 0x8000)] = v; return; }
      if (a < 0xC000) { if (this.ramBank <= 3) this.sram[this.ramBank * 0x2000 + (a - 0xA000)] = v; return; }
      if (a < 0xD000) { this.wram[a - 0xC000] = v; return; }
      if (a < 0xE000) { this.wram[this.wbank * 0x1000 + (a - 0xD000)] = v; return; }
      if (a < 0xFE00) { this.wr(a - 0x2000, v); return; }
      if (a < 0xFEA0) { this.oam[a - 0xFE00] = v; return; }
      if (a < 0xFF00) return;
      if (a < 0xFF80) { this.wrIO(a & 0x7F, v); return; }
      if (a < 0xFFFF) { this.hram[a - 0xFF80] = v; return; }
      this.ie = v;
    }
    rdIO(r) {
      switch (r) {
        case 0x00: { const sel = this.io[0]; return 0xC0 | (sel & 0x30) | 0x0F; }   // 버튼 안 누름
        case 0x04: return (this.divC >> 8) & 0xFF;
        case 0x0F: return this.io[0x0F] | 0xE0;
        case 0x41: return 0x80 | (this.io[0x41] & 0x78) | (this.ly === this.io[0x45] ? 4 : 0) | (this.io[0x40] & 0x80 ? this.mode : 0);
        case 0x44: return this.ly;
        case 0x4D: return (this.double ? 0x80 : 0) | (this.io[0x4D] & 1) | 0x7E;
        case 0x4F: return this.vbank | 0xFE;
        case 0x55: return this.hdmaActive ? ((this.hdmaLeft - 1) & 0x7F) : 0xFF;
        case 0x68: return this.bgpi; case 0x69: return this.bgPal[this.bgpi & 0x3F];
        case 0x6A: return this.obpi; case 0x6B: return this.obPal[this.obpi & 0x3F];
        case 0x70: return this.wbank | 0xF8;
      }
      return this.io[r];
    }
    wrIO(r, v) {
      if (r >= 0x10 && r < 0x40) { this.io[r] = v; this.soundLog.push(this.frames, r, v); return; }
      switch (r) {
        case 0x04: this.divC = 0; return;
        case 0x0F: this.io[0x0F] = v & 0x1F; return;
        case 0x41: this.io[0x41] = v & 0x78; return;
        case 0x44: return;
        case 0x46: { const s = v << 8; for (let i = 0; i < 0xA0; i++) this.oam[i] = this.rd(s + i); this.io[0x46] = v; return; }
        case 0x4D: this.io[0x4D] = v & 1; return;
        case 0x4F: this.vbank = v & 1; return;
        case 0x51: this.hdmaSrc = (this.hdmaSrc & 0xFF) | (v << 8); return;
        case 0x52: this.hdmaSrc = (this.hdmaSrc & 0xFF00) | (v & 0xF0); return;
        case 0x53: this.hdmaDst = (this.hdmaDst & 0xFF) | ((v & 0x1F) << 8); return;
        case 0x54: this.hdmaDst = (this.hdmaDst & 0xFF00) | (v & 0xF0); return;
        case 0x55:
          if (this.hdmaActive && !(v & 0x80)) { this.hdmaActive = false; return; }
          this.hdmaLeft = (v & 0x7F) + 1;
          if (v & 0x80) this.hdmaActive = true;
          else { while (this.hdmaLeft > 0) this.hdmaBlock(); }
          return;
        case 0x68: this.bgpi = v; return;
        case 0x69: this.bgPal[this.bgpi & 0x3F] = v; if (this.bgpi & 0x80) this.bgpi = 0x80 | ((this.bgpi + 1) & 0x3F); return;
        case 0x6A: this.obpi = v; return;
        case 0x6B: this.obPal[this.obpi & 0x3F] = v; if (this.obpi & 0x80) this.obpi = 0x80 | ((this.obpi + 1) & 0x3F); return;
        case 0x70: this.wbank = (v & 7) || 1; return;
      }
      this.io[r] = v;
    }
    hdmaBlock() {
      for (let i = 0; i < 16; i++) this.vram[this.vbank * 0x2000 + ((this.hdmaDst + i) & 0x1FFF)] = this.rd(this.hdmaSrc + i);
      this.hdmaSrc = (this.hdmaSrc + 16) & 0xFFFF; this.hdmaDst = (this.hdmaDst + 16) & 0x1FFF;
      if (--this.hdmaLeft <= 0) this.hdmaActive = false;
    }
    // ---------------------------------------------------------------- 시간 (m-cycle 단위로 받음)
    tick(m) {
      const clocks = m * 4;
      this.divC = (this.divC + clocks) & 0xFFFF;
      const tac = this.io[0x07];
      if (tac & 4) {
        const per = [1024, 16, 64, 256][tac & 3];
        this.timC += clocks;
        while (this.timC >= per) { this.timC -= per; if (++this.io[0x05] > 0xFF) { this.io[0x05] = this.io[0x06]; this.io[0x0F] |= 4; } }
      }
      // 화면은 실제 시간 기준 (2배속이면 절반)
      this.ppu(this.double ? clocks >> 1 : clocks);
    }
    setMode(md) {
      this.mode = md;
      if (md === 0 && this.hdmaActive && this.ly < 144) this.hdmaBlock();
      this.updStat();
    }
    updStat() {
      const s = this.io[0x41], lyc = this.ly === this.io[0x45];
      const line = (lyc && (s & 0x40)) || (this.mode === 0 && (s & 0x08)) || (this.mode === 2 && (s & 0x20)) || (this.mode === 1 && (s & 0x10));
      if (line && !this.statLine) this.io[0x0F] |= 2;
      this.statLine = !!line;
    }
    ppu(c) {
      if (!(this.io[0x40] & 0x80)) { this.dot += c; if (this.dot >= 70224) { this.dot -= 70224; this.frames++; this.frameDone = true; } return; }
      this.dot += c;
      while (true) {
        if (this.ly < 144) {
          if (this.mode === 2 && this.dot >= 80) { this.setMode(3); continue; }
          if (this.mode === 3 && this.dot >= 252) { this.renderLine(); this.setMode(0); continue; }
        }
        if (this.dot >= CLOCKS_PER_LINE) {
          this.dot -= CLOCKS_PER_LINE;
          this.ly++;
          if (this.ly === 144) { this.mode = 1; this.io[0x0F] |= 1; this.frames++; this.frameDone = true; this.updStat(); }
          else if (this.ly > 153) { this.ly = 0; this.winLine = 0; this.setMode(2); }
          else if (this.ly < 144) this.setMode(2);
          else this.updStat();
          continue;
        }
        break;
      }
    }
    // ---------------------------------------------------------------- 한 줄 그리기 (CGB)
    color(pal, bg, idx) {
      const p = bg ? this.bgPal : this.obPal, o = pal * 8 + idx * 2, c = p[o] | (p[o + 1] << 8);
      const r = (c & 31) << 3, g = ((c >> 5) & 31) << 3, b = ((c >> 10) & 31) << 3;
      return 0xFF000000 | (b | b >> 5) << 16 | (g | g >> 5) << 8 | (r | r >> 5);
    }
    renderLine() {
      const y = this.ly, lcdc = this.io[0x40], out = this.frame, base = y * 160, vr = this.vram;
      const bgOn = true, scx = this.io[0x43], scy = this.io[0x42];
      const tileAddr = (idx, bank) => (lcdc & 0x10 ? idx * 16 : 0x1000 + ((idx << 24) >> 24) * 16) + bank * 0x2000;
      const winOn = (lcdc & 0x20) && this.io[0x4A] <= y && this.io[0x4B] <= 166;
      const wx = this.io[0x4B] - 7;
      for (let x = 0; x < 160; x++) {
        let mx, my, map;
        if (winOn && x >= wx) { mx = x - wx; my = this.winLine; map = lcdc & 0x40 ? 0x1C00 : 0x1800; }
        else { mx = (x + scx) & 255; my = (y + scy) & 255; map = lcdc & 0x08 ? 0x1C00 : 0x1800; }
        const mi = map + (my >> 3) * 32 + (mx >> 3), idx = vr[mi], attr = vr[0x2000 + mi];
        let px = mx & 7, py = my & 7;
        if (attr & 0x20) px = 7 - px;
        if (attr & 0x40) py = 7 - py;
        const ta = tileAddr(idx, (attr >> 3) & 1) + py * 2, lo = vr[ta], hi = vr[ta + 1];
        const ci = ((lo >> (7 - px)) & 1) | (((hi >> (7 - px)) & 1) << 1);
        this.lineBg[x] = ci; this.lineBgPri[x] = attr & 0x80;
        out[base + x] = this.color(attr & 7, true, ci);
      }
      if (winOn && wx < 160) this.winLine++;
      if (lcdc & 0x02) {
        const tall = lcdc & 0x04 ? 16 : 8, list = [];
        for (let i = 0; i < 40 && list.length < 10; i++) { const sy = this.oam[i * 4] - 16; if (y >= sy && y < sy + tall) list.push(i); }
        for (let k = list.length - 1; k >= 0; k--) {
          const i = list[k], sy = this.oam[i * 4] - 16, sx = this.oam[i * 4 + 1] - 8, attr = this.oam[i * 4 + 3];
          let t = this.oam[i * 4 + 2]; if (tall === 16) t &= 0xFE;
          let row = y - sy; if (attr & 0x40) row = tall - 1 - row;
          const ta = ((attr >> 3) & 1) * 0x2000 + t * 16 + row * 2, lo = vr[ta], hi = vr[ta + 1];
          for (let px = 0; px < 8; px++) {
            const x = sx + px; if (x < 0 || x >= 160) continue;
            const bit = attr & 0x20 ? px : 7 - px, ci = ((lo >> bit) & 1) | (((hi >> bit) & 1) << 1);
            if (!ci) continue;
            if ((lcdc & 1) && this.lineBg[x] && (this.lineBgPri[x] || (attr & 0x80))) continue;
            out[base + x] = this.color(attr & 7, false, ci);
          }
        }
      }
    }
    // ---------------------------------------------------------------- CPU
    get af() { return (this.a << 8) | this.f; } set af(v) { this.a = (v >> 8) & 0xFF; this.f = v & 0xF0; }
    get bc() { return (this.b << 8) | this.c; } set bc(v) { this.b = (v >> 8) & 0xFF; this.c = v & 0xFF; }
    get de() { return (this.d << 8) | this.e; } set de(v) { this.d = (v >> 8) & 0xFF; this.e = v & 0xFF; }
    get hl() { return (this.h << 8) | this.l; } set hl(v) { this.h = (v >> 8) & 0xFF; this.l = v & 0xFF; }
    fetch() { const v = this.rd(this.pc); this.pc = (this.pc + 1) & 0xFFFF; return v; }
    fetch16() { const lo = this.fetch(); return lo | (this.fetch() << 8); }
    push(v) { this.sp = (this.sp - 1) & 0xFFFF; this.wr(this.sp, v >> 8); this.sp = (this.sp - 1) & 0xFFFF; this.wr(this.sp, v & 0xFF); }
    pop() { const lo = this.rd(this.sp); this.sp = (this.sp + 1) & 0xFFFF; const hi = this.rd(this.sp); this.sp = (this.sp + 1) & 0xFFFF; return lo | (hi << 8); }
    getR(i) { switch (i) { case 0: return this.b; case 1: return this.c; case 2: return this.d; case 3: return this.e; case 4: return this.h; case 5: return this.l; case 6: return this.rd(this.hl); default: return this.a; } }
    setR(i, v) { v &= 0xFF; switch (i) { case 0: this.b = v; break; case 1: this.c = v; break; case 2: this.d = v; break; case 3: this.e = v; break; case 4: this.h = v; break; case 5: this.l = v; break; case 6: this.wr(this.hl, v); break; default: this.a = v; } }
    alu(op, v) {
      const a = this.a; let r;
      switch (op) {
        case 0: r = a + v; this.f = ((r & 0xFF) ? 0 : 0x80) | (((a & 15) + (v & 15)) > 15 ? 0x20 : 0) | (r > 255 ? 0x10 : 0); this.a = r & 0xFF; break;
        case 1: { const cy = (this.f >> 4) & 1; r = a + v + cy; this.f = ((r & 0xFF) ? 0 : 0x80) | (((a & 15) + (v & 15) + cy) > 15 ? 0x20 : 0) | (r > 255 ? 0x10 : 0); this.a = r & 0xFF; break; }
        case 2: r = a - v; this.f = 0x40 | ((r & 0xFF) ? 0 : 0x80) | ((a & 15) < (v & 15) ? 0x20 : 0) | (r < 0 ? 0x10 : 0); this.a = r & 0xFF; break;
        case 3: { const cy = (this.f >> 4) & 1; r = a - v - cy; this.f = 0x40 | ((r & 0xFF) ? 0 : 0x80) | ((a & 15) - (v & 15) - cy < 0 ? 0x20 : 0) | (r < 0 ? 0x10 : 0); this.a = r & 0xFF; break; }
        case 4: this.a = a & v; this.f = (this.a ? 0 : 0x80) | 0x20; break;
        case 5: this.a = a ^ v; this.f = this.a ? 0 : 0x80; break;
        case 6: this.a = a | v; this.f = this.a ? 0 : 0x80; break;
        case 7: r = a - v; this.f = 0x40 | ((r & 0xFF) ? 0 : 0x80) | ((a & 15) < (v & 15) ? 0x20 : 0) | (r < 0 ? 0x10 : 0); break;
      }
    }
    cond(i) { switch (i) { case 0: return !(this.f & 0x80); case 1: return !!(this.f & 0x80); case 2: return !(this.f & 0x10); default: return !!(this.f & 0x10); } }
    addHL(v) { const r = this.hl + v; this.f = (this.f & 0x80) | (((this.hl & 0xFFF) + (v & 0xFFF)) > 0xFFF ? 0x20 : 0) | (r > 0xFFFF ? 0x10 : 0); this.hl = r & 0xFFFF; }
    spOff() { const e = (this.fetch() << 24) >> 24, sp = this.sp; this.f = (((sp & 15) + (e & 15)) > 15 ? 0x20 : 0) | (((sp & 0xFF) + (e & 0xFF)) > 0xFF ? 0x10 : 0); return (sp + e) & 0xFFFF; }
    interrupt() {
      const pend = this.ie & this.io[0x0F] & 0x1F;
      if (!pend) return 0;
      this.halted = false;
      if (!this.ime) return 0;
      for (let i = 0; i < 5; i++) if (pend & (1 << i)) { this.ime = false; this.io[0x0F] &= ~(1 << i); this.push(this.pc); this.pc = 0x40 + i * 8; return 5; }
      return 0;
    }
    step() {
      let m = this.interrupt();
      if (m) { this.tick(m); return m; }
      if (this.halted) { this.tick(1); return 1; }
      if (this.imeNext) { this.ime = true; this.imeNext = false; }
      m = this.exec(this.fetch());
      this.tick(m);
      return m;
    }
    exec(op) {
      switch (op) {
        case 0x00: return 1;
        case 0x10: this.fetch(); if (this.io[0x4D] & 1) { this.double = !this.double; this.io[0x4D] = 0; } return 1;
        case 0x76: this.halted = true; return 1;
        case 0xF3: this.ime = false; this.imeNext = false; return 1;
        case 0xFB: this.imeNext = true; return 1;
        case 0xCB: return this.execCB(this.fetch());
        case 0x08: { const a = this.fetch16(); this.wr(a, this.sp & 0xFF); this.wr(a + 1, this.sp >> 8); return 5; }
        case 0x18: { const e = (this.fetch() << 24) >> 24; this.pc = (this.pc + e) & 0xFFFF; return 3; }
        case 0x20: case 0x28: case 0x30: case 0x38: { const e = (this.fetch() << 24) >> 24; if (this.cond((op >> 3) & 3)) { this.pc = (this.pc + e) & 0xFFFF; return 3; } return 2; }
        case 0x01: this.bc = this.fetch16(); return 3; case 0x11: this.de = this.fetch16(); return 3; case 0x21: this.hl = this.fetch16(); return 3; case 0x31: this.sp = this.fetch16(); return 3;
        case 0x02: this.wr(this.bc, this.a); return 2; case 0x12: this.wr(this.de, this.a); return 2;
        case 0x22: this.wr(this.hl, this.a); this.hl = (this.hl + 1) & 0xFFFF; return 2; case 0x32: this.wr(this.hl, this.a); this.hl = (this.hl - 1) & 0xFFFF; return 2;
        case 0x0A: this.a = this.rd(this.bc); return 2; case 0x1A: this.a = this.rd(this.de); return 2;
        case 0x2A: this.a = this.rd(this.hl); this.hl = (this.hl + 1) & 0xFFFF; return 2; case 0x3A: this.a = this.rd(this.hl); this.hl = (this.hl - 1) & 0xFFFF; return 2;
        case 0x03: this.bc = (this.bc + 1) & 0xFFFF; return 2; case 0x13: this.de = (this.de + 1) & 0xFFFF; return 2; case 0x23: this.hl = (this.hl + 1) & 0xFFFF; return 2; case 0x33: this.sp = (this.sp + 1) & 0xFFFF; return 2;
        case 0x0B: this.bc = (this.bc - 1) & 0xFFFF; return 2; case 0x1B: this.de = (this.de - 1) & 0xFFFF; return 2; case 0x2B: this.hl = (this.hl - 1) & 0xFFFF; return 2; case 0x3B: this.sp = (this.sp - 1) & 0xFFFF; return 2;
        case 0x09: this.addHL(this.bc); return 2; case 0x19: this.addHL(this.de); return 2; case 0x29: this.addHL(this.hl); return 2; case 0x39: this.addHL(this.sp); return 2;
        case 0x07: { const c = this.a >> 7; this.a = ((this.a << 1) | c) & 0xFF; this.f = c << 4; return 1; }
        case 0x0F: { const c = this.a & 1; this.a = (this.a >> 1) | (c << 7); this.f = c << 4; return 1; }
        case 0x17: { const c = this.a >> 7; this.a = ((this.a << 1) | ((this.f >> 4) & 1)) & 0xFF; this.f = c << 4; return 1; }
        case 0x1F: { const c = this.a & 1; this.a = (this.a >> 1) | (((this.f >> 4) & 1) << 7); this.f = c << 4; return 1; }
        case 0x27: {
          let a = this.a, adj = 0, cy = 0;
          if (this.f & 0x40) { if (this.f & 0x20) adj |= 6; if (this.f & 0x10) { adj |= 0x60; cy = 1; } a = (a - adj) & 0xFF; }
          else { if ((this.f & 0x20) || (a & 15) > 9) adj |= 6; if ((this.f & 0x10) || a > 0x99) { adj |= 0x60; cy = 1; } a = (a + adj) & 0xFF; }
          this.a = a; this.f = (this.f & 0x40) | (a ? 0 : 0x80) | (cy << 4); return 1;
        }
        case 0x2F: this.a ^= 0xFF; this.f |= 0x60; return 1;
        case 0x37: this.f = (this.f & 0x80) | 0x10; return 1;
        case 0x3F: this.f = (this.f & 0x80) | ((this.f & 0x10) ^ 0x10); return 1;
        case 0xC3: this.pc = this.fetch16(); return 4;
        case 0xC2: case 0xCA: case 0xD2: case 0xDA: { const a = this.fetch16(); if (this.cond((op >> 3) & 3)) { this.pc = a; return 4; } return 3; }
        case 0xCD: { const a = this.fetch16(); this.push(this.pc); this.pc = a; return 6; }
        case 0xC4: case 0xCC: case 0xD4: case 0xDC: { const a = this.fetch16(); if (this.cond((op >> 3) & 3)) { this.push(this.pc); this.pc = a; return 6; } return 3; }
        case 0xC9: this.pc = this.pop(); return 4;
        case 0xD9: this.pc = this.pop(); this.ime = true; return 4;
        case 0xC0: case 0xC8: case 0xD0: case 0xD8: if (this.cond((op >> 3) & 3)) { this.pc = this.pop(); return 5; } return 2;
        case 0xE9: this.pc = this.hl; return 1;
        case 0xC1: this.bc = this.pop(); return 3; case 0xD1: this.de = this.pop(); return 3; case 0xE1: this.hl = this.pop(); return 3; case 0xF1: this.af = this.pop(); return 3;
        case 0xC5: this.push(this.bc); return 4; case 0xD5: this.push(this.de); return 4; case 0xE5: this.push(this.hl); return 4; case 0xF5: this.push(this.af); return 4;
        case 0xE0: this.wr(0xFF00 + this.fetch(), this.a); return 3; case 0xF0: this.a = this.rd(0xFF00 + this.fetch()); return 3;
        case 0xE2: this.wr(0xFF00 + this.c, this.a); return 2; case 0xF2: this.a = this.rd(0xFF00 + this.c); return 2;
        case 0xEA: this.wr(this.fetch16(), this.a); return 4; case 0xFA: this.a = this.rd(this.fetch16()); return 4;
        case 0xE8: this.sp = this.spOff(); return 4; case 0xF8: this.hl = this.spOff(); return 3; case 0xF9: this.sp = this.hl; return 2;
        case 0xC6: case 0xCE: case 0xD6: case 0xDE: case 0xE6: case 0xEE: case 0xF6: case 0xFE: this.alu((op >> 3) & 7, this.fetch()); return 2;
        case 0xC7: case 0xCF: case 0xD7: case 0xDF: case 0xE7: case 0xEF: case 0xF7: case 0xFF: this.push(this.pc); this.pc = op & 0x38; return 4;
      }
      if (op >= 0x40 && op < 0x80) { this.setR((op >> 3) & 7, this.getR(op & 7)); return ((op & 7) === 6 || ((op >> 3) & 7) === 6) ? 2 : 1; }
      if (op >= 0x80 && op < 0xC0) { this.alu((op >> 3) & 7, this.getR(op & 7)); return (op & 7) === 6 ? 2 : 1; }
      if ((op & 0xC7) === 0x04) { const i = (op >> 3) & 7, v = (this.getR(i) + 1) & 0xFF; this.setR(i, v); this.f = (this.f & 0x10) | (v ? 0 : 0x80) | ((v & 15) === 0 ? 0x20 : 0); return i === 6 ? 3 : 1; }
      if ((op & 0xC7) === 0x05) { const i = (op >> 3) & 7, v = (this.getR(i) - 1) & 0xFF; this.setR(i, v); this.f = (this.f & 0x10) | 0x40 | (v ? 0 : 0x80) | ((v & 15) === 15 ? 0x20 : 0); return i === 6 ? 3 : 1; }
      if ((op & 0xC7) === 0x06) { const i = (op >> 3) & 7; this.setR(i, this.fetch()); return i === 6 ? 3 : 2; }
      // 정의 안 된 명령: 멈춤
      this.halted = true; this.ime = false; this.bad = op;
      return 1;
    }
    execCB(op) {
      const i = op & 7, x = op >> 6, y = (op >> 3) & 7;
      let v = this.getR(i);
      if (x === 1) { this.f = (this.f & 0x10) | 0x20 | ((v >> y) & 1 ? 0 : 0x80); return i === 6 ? 3 : 2; }
      if (x === 2) { this.setR(i, v & ~(1 << y)); return i === 6 ? 4 : 2; }
      if (x === 3) { this.setR(i, v | (1 << y)); return i === 6 ? 4 : 2; }
      let c;
      switch (y) {
        case 0: c = v >> 7; v = ((v << 1) | c) & 0xFF; break;
        case 1: c = v & 1; v = (v >> 1) | (c << 7); break;
        case 2: c = v >> 7; v = ((v << 1) | ((this.f >> 4) & 1)) & 0xFF; break;
        case 3: c = v & 1; v = (v >> 1) | (((this.f >> 4) & 1) << 7); break;
        case 4: c = v >> 7; v = (v << 1) & 0xFF; break;
        case 5: c = v & 1; v = (v >> 1) | (v & 0x80); break;
        case 6: c = 0; v = ((v & 15) << 4) | (v >> 4); break;
        default: c = v & 1; v >>= 1; break;
      }
      this.setR(i, v); this.f = (v ? 0 : 0x80) | (c << 4);
      return i === 6 ? 4 : 2;
    }
    // ---------------------------------------------------------------- 상태 저장·불러오기 (롬은 그대로 두고 메모리·레지스터만)
    snapshot() {
      const s = {};
      for (const k of Object.keys(this)) {
        const v = this[k];
        if (k === 'rom' || k === 'frame' || k === 'soundLog') continue;
        s[k] = v instanceof Uint8Array ? v.slice() : v;
      }
      return s;
    }
    restore(s) {
      for (const k of Object.keys(s)) { const v = s[k]; this[k] = v instanceof Uint8Array ? v.slice() : v; }
      this.soundLog = []; this.frame = new Uint32Array(160 * 144);
    }
    // ---------------------------------------------------------------- 실행
    runFrame(maxSteps) {
      this.frameDone = false;
      let n = 0, lim = maxSteps || 400000;
      while (!this.frameDone && n < lim && !this.bad) { this.step(); n++; }
      return this.frame;
    }
    // pc 가 stop 에 닿거나 frames 만큼 지나면 멈춤. onFrame(emu) 은 화면이 한 장 끝날 때마다
    runUntil(stopPc, maxFrames, onFrame) {
      const start = this.frames;
      while (this.frames - start < maxFrames && !this.bad) {
        this.frameDone = false;
        let n = 0;
        while (!this.frameDone && n < 600000) { if (this.pc === stopPc) return true; this.step(); n++; if (this.bad) break; }
        if (onFrame) onFrame(this);
      }
      return false;
    }
  }
  return { Emu };
})();

// ===== 43-animrunner.js
// ================================================================ 기술 애니메이션을 롬의 진짜 코드로 재생 (에뮬레이터 안에서 배틀 화면을 꾸미고 PlayBattleAnim 호출)
// 주소는 롬마다 코드 모양으로 찾음 (한글판·북미판·개조롬 공통). 못 찾으면 null
const AnimRunner = (() => {
  const SENTINEL = 0xFFF0;   // 여기로 돌아오면 함수 끝 (HRAM 끝자락, 실제로 실행되지 않음)
  const find = (d, pat, s, e) => {
    outer: for (let i = s || 0; i + pat.length <= (e || d.length); i++) {
      for (let k = 0; k < pat.length; k++) if (pat[k] >= 0 && d[i + k] !== pat[k]) continue outer;
      return i;
    }
    return -1;
  };
  const W = (d, o) => d[o] | (d[o + 1] << 8);
  const Off = (bank, a) => bank * 0x4000 + (a & 0x3FFF);
  const cache = new WeakMap();

  // 필요한 주소 찾기
  function locate(d, animTab) {
    if (cache.has(d)) return cache.get(d);
    let r = null;
    try {
      const A = {};
      // rst $10 Bankswitch: ldh [hROMBank], a / ld [MBC3RomBank], a / ret
      if (d[0x10] !== 0xE0 || d[0x12] !== 0xEA) throw 0;
      A.hROMBank = 0xFF00 + d[0x11];
      const lo = 0x4000 + animTab % 0x4000;
      // ClearBattleAnims: ld hl, wFXAnimID / ld e, [hl] / inc hl / ld d, [hl] / ld hl, BattleAnimations / add hl, de ×2
      // (크리스탈식: ld a, [wFXAnimID] / ld e, a / ld a, [wFXAnimID+1] / ld d, a / ld hl, BattleAnimations)
      let c = find(d, [0x21, -1, -1, 0x5E, 0x23, 0x56, 0x21, lo & 0xFF, lo >> 8, 0x19, 0x19]);
      if (c >= 0) A.wFXAnimID = W(d, c + 1);
      else { c = find(d, [0xFA, -1, -1, 0x5F, 0xFA, -1, -1, 0x57, 0x21, lo & 0xFF, lo >> 8]); if (c < 0) throw 1; A.wFXAnimID = W(d, c + 1); }
      const ab = Math.floor(c / 0x4000);   // 애니메이션 엔진 뱅크
      // PlayBattleAnim: ld c, 6 / .wait: call BattleAnimDelayFrame / dec c / jr nz, .wait
      const p = find(d, [0x0E, 0x06, 0xCD, -1, -1, 0x0D, 0x20, 0xFA], ab * 0x4000, ab * 0x4000 + 0x4000);
      if (p < 0) throw 2;
      A.play = { bank: ab, addr: 0x4000 + p % 0x4000 };
      // PlayBattleAnim 안: ldh a, [hVBlank] / push af / ld a, VBLANK_CUTSCENE / ldh [hVBlank], a
      const hv = find(d, [0xF0, -1, 0xF5, 0x3E, -1, 0xE0], p, p + 0x30);
      A.hVBlank = hv >= 0 && d[hv + 6] === d[hv + 1] ? 0xFF00 + d[hv + 1] : -1;
      // BattleAnimRunScript: wFXAnimID+1 확인 뒤 wOptions 의 BATTLE_SCENE 비트 (ld a, [wOptions] / bit n, a  또는  ld hl, wOptions / bit n, [hl])
      A.wOptions = -1; A.optionBit = 7;
      const hi1 = A.wFXAnimID + 1;
      for (let q = ab * 0x4000; q < ab * 0x4000 + 0x3FF0 && A.wOptions < 0; q++) {
        if (!(d[q] === 0xFA && W(d, q + 1) === hi1 && d[q + 3] === 0xA7)) continue;
        for (let k = q + 4; k < q + 16; k++) {
          if (d[k] === 0xFA && d[k + 3] === 0xCB && (d[k + 4] & 0xC7) === 0x47) { A.wOptions = W(d, k + 1); A.optionBit = (d[k + 4] >> 3) & 7; break; }
          if (d[k] === 0x21 && d[k + 3] === 0xCB && (d[k + 4] & 0xC7) === 0x46) { A.wOptions = W(d, k + 1); A.optionBit = (d[k + 4] >> 3) & 7; break; }
        }
      }
      // ClearActorHud: ldh a, [hBattleTurn] / and a / jr z / … hlcoord 9, 7 / lb bc, 5, 11 (wTilemap = 그 주소 - 149)
      let h = -1, t = -1;
      for (let q = ab * 0x4000; q < ab * 0x4000 + 0x4000 && t < 0; q++) {
        q = find(d, [0x21, -1, -1, 0x01, 0x0B, 0x05], q, ab * 0x4000 + 0x4000);
        if (q < 0) break;
        for (let k = q - 16; k < q; k++) if (d[k] === 0xF0 && d[k + 2] === 0xA7 && (d[k + 3] === 0x28 || d[k + 3] === 0x20)) { t = k; h = q; }
      }
      if (t < 0) throw 4;
      A.wTilemap = W(d, h + 1) - (7 * 20 + 9);
      A.hBattleTurn = 0xFF00 + d[t + 1];
      // LoadSGBLayoutCGB: ld a, b / cp SCGB_DEFAULT / jr nz, +3 / ld a, [wDefaultSGBLayout]
      // (SGB 용과 CGB 용이 같은 모양이라 점프표 안에 _CGB_BattleColors 가 있는 쪽을 고름)
      A.battleColors = -1;
      for (let g = 0; A.battleColors < 0; g++) {
        g = find(d, [0x78, 0xFE, -1, 0x20, 0x03, 0xFA, -1, -1], g);
        if (g < 0) throw 5;
        // 점프표: ld de, CGBLayoutJumptable / add hl, de / ld a, [hli] / ld h, [hl] / ld l, a
        const jt = find(d, [0x11, -1, -1, 0x19, 0x2A, 0x66, 0x6F], g, g + 0x40);
        if (jt < 0) continue;
        const bank = Math.floor(g / 0x4000), jtab = Off(bank, W(d, jt + 1));
        // _CGB_BattleColors: ld de, wBGPals1 / call GetBattlemonBackpicPalettePointer / push hl
        for (let k = 0; k < 16; k++) {
          const f = Off(bank, W(d, jtab + k * 2));
          if (d[f] === 0x11 && d[f + 3] === 0xCD && d[f + 6] === 0xE5) { A.battleColors = k; A.colorsFn = f; A.layout = { bank, addr: 0x4000 + g % 0x4000 }; break; }
        }
      }
      // 그 안에서 부르는 두 함수가 읽는 종 번호 변수 (ld a, [wTempBattleMonSpecies] / call … / pop de / ret)
      const speciesIn = fnAddr => { const f = Off(A.layout.bank, fnAddr); for (let q = f; q < f + 24; q++) if (d[q] === 0xFA && d[q + 3] === 0xCD && d[q + 6] === 0xD1 && d[q + 7] === 0xC9) return W(d, q + 1); return -1; };
      A.wTempBattleMonSpecies = speciesIn(W(d, A.colorsFn + 4));
      let e2 = -1;
      for (let q = A.colorsFn + 7; q < A.colorsFn + 20; q++) if (d[q] === 0xCD && d[q + 3] === 0xE5) { e2 = q; break; }
      A.wTempEnemyMonSpecies = e2 >= 0 ? speciesIn(W(d, e2 + 1)) : -1;
      // GetBattleAnimByte: ld hl, wBattleAnimAddress / ld e, [hl] / inc hl / ld d, [hl] / ld a, BANK(BattleAnimations) / call GetFarByte
      // (금·은: 갈림 명령이 주소를 건너뛸 때 ld hl, wBattleAnimAddress / ld e, [hl] / inc hl / ld d, [hl] / inc de / inc de / ld [hl], d / dec hl / ld [hl], e / ret)
      let ga = find(d, [0x21, -1, -1, 0x5E, 0x23, 0x56, 0x13, 0x13, 0x72, 0x2B, 0x73, 0xC9], ab * 0x4000, ab * 0x4000 + 0x4000);
      if (ga < 0) ga = find(d, [0x21, -1, -1, 0x5E, 0x23, 0x56, 0x3E, Math.floor(animTab / 0x4000), 0xCD], ab * 0x4000, ab * 0x4000 + 0x4000);
      A.wBattleAnimAddress = ga >= 0 ? W(d, ga + 1) : -1;
      r = A;
    } catch (e) { r = null; locate.err = e; }
    cache.set(d, r);
    return r;
  }

  // 롬을 켜서 초기화가 끝날 때까지 돌린 상태 (한 번만 돌리고 저장해 둠). d = 지금 롬, base = 켜는 데 쓸 롬
  const boots = new WeakMap();
  function boot(d, base) {
    const key = base || d;
    let snap = boots.get(key);
    if (!snap) {
      const e0 = new GBEmu.Emu(key);
      for (let f = 0; f < 140; f++) e0.runFrame();
      snap = e0.snapshot();
      boots.set(key, snap);
    }
    const emu = new GBEmu.Emu(d);
    emu.restore(snap);
    return emu;
  }
  // 에뮬레이터 안의 함수 부르기 (돌아올 때까지 또는 프레임 한도까지)
  function call(emu, bank, addr, regs, maxFrames, onFrame) {
    if (bank) { emu.romBank = bank; }
    if (regs) Object.assign(emu, regs);
    emu.push(SENTINEL);
    emu.pc = addr;
    emu.halted = false;
    return emu.runUntil(SENTINEL, maxFrames, onFrame);
  }
  const putTilemap = (emu, A, x, y, tile) => { emu.wr(A.wTilemap + y * 20 + x, tile); };

  // 배틀 화면 꾸미기: 상대 앞모습 (12,0) 7×7 · 내 뒷모습 (2,6) 6×6 · 나머지 빈칸. 타일 번호는 게임과 같게
  function setupScene(emu, A, rom, playerMon, enemyMon) {
    const vr = emu.vram;
    // 빈칸 타일 $7F (흰색)
    vr.fill(0, 0x1000 + 0x7F * 16, 0x1000 + 0x80 * 16);
    // 앞모습: 7×7 칸에 아래·가운데 맞춤 (게임의 PadFrontpic 과 같은 자리), 세로줄 순서 타일 0~48
    const fr = rom.readPic(enemyMon, false), fpic = newPic(56, 56), n = fr.tiles * 8;
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) fpic.px[(56 - n + y) * 56 + (Math.floor((56 - n) / 2) + x)] = fr.img[y * n + x];
    vr.set(picToTiles(fpic, true), 0x1000);
    const bk = rom.readPic(playerMon, true), bpic = { w: 48, h: 48, px: bk.img };
    vr.set(picToTiles(bpic, true), 0x1000 + 0x31 * 16);
    for (let y = 0; y < 18; y++) for (let x = 0; x < 20; x++) putTilemap(emu, A, x, y, 0x7F);
    for (let cx = 0; cx < 7; cx++) for (let cy = 0; cy < 7; cy++) putTilemap(emu, A, 12 + cx, cy, cx * 7 + cy);
    for (let cx = 0; cx < 6; cx++) for (let cy = 0; cy < 6; cy++) putTilemap(emu, A, 2 + cx, 6 + cy, 0x31 + cx * 6 + cy);
    // 화면에도 바로 (BG 지도 $9800)
    for (let y = 0; y < 18; y++) for (let x = 0; x < 20; x++) { vr[0x1800 + y * 32 + x] = emu.rd(A.wTilemap + y * 20 + x); }
    emu.io[0x42] = 0; emu.io[0x43] = 0; emu.io[0x4A] = 0x90; emu.io[0x4B] = 7;
  }

  // 기술 애니메이션 재생 → { frames: [Uint32Array 160×144 …], sounds: [frame, reg, val …], trace: [프레임마다 스크립트 위치] }
  // opts.data: 고친 롬 데이터 (없으면 rom.data) · opts.bootData: 켤 때 쓸 롬 (보통 rom.data)
  function run(rom, move, opts) {
    const o = Object.assign({ player: 155, enemy: 152, maxFrames: 900, turn: 0 }, opts || {});
    const d = o.data || rom.data, mv = RomCry.moveAnims(rom.data);
    if (!mv) return null;
    const A = locate(rom.data, mv.tab);
    if (!A) return null;
    const emu = boot(d, o.bootData || rom.data);
    // 색: 게임의 배틀 색 만들기 함수 그대로 (종 번호만 넣어 줌)
    if (A.wTempBattleMonSpecies > 0) emu.wr(A.wTempBattleMonSpecies, o.player);
    if (A.wTempEnemyMonSpecies > 0) emu.wr(A.wTempEnemyMonSpecies, o.enemy);
    setupScene(emu, A, rom, o.player, o.enemy);
    emu.wr(A.hROMBank, A.layout.bank);
    call(emu, A.layout.bank, A.layout.addr, { b: A.battleColors }, 60);
    // 애니메이션 번호 · 누구 차례 · 배틀 장면 켜기
    emu.wr(A.wFXAnimID, move & 0xFF); emu.wr(A.wFXAnimID + 1, move >> 8);
    emu.wr(A.hBattleTurn, o.turn);
    if (A.wOptions > 0) emu.wr(A.wOptions, emu.rd(A.wOptions) & ~(1 << A.optionBit));
    emu.wr(A.hROMBank, A.play.bank);
    // 화면 갱신 방식은 보통 모드로 (인트로의 방식이 남아 있으면 애니메이션 뒤 기다리기가 안 끝남)
    if (A.hVBlank > 0) emu.wr(A.hVBlank, 0);
    emu.soundLog = [];
    const frames = [], trace = [], f0 = emu.frames;
    let started = false, endedAt = -1, stopped = false;
    let done = call(emu, A.play.bank, A.play.addr, null, o.maxFrames, e => {
      frames.push(e.frame.slice());
      const t = A.wBattleAnimAddress > 0 ? e.rd(A.wBattleAnimAddress) | (e.rd(A.wBattleAnimAddress + 1) << 8) : 0;
      trace.push(t);
      // 스크립트가 끝나고 40프레임 지나면 그만 (그 뒤는 배틀 화면 정리)
      if (t) { started = true; endedAt = -1; } else if (started && endedAt < 0) endedAt = frames.length;
      if (endedAt > 0 && frames.length - endedAt > 40) { stopped = true; e.pc = SENTINEL; }
    });
    if (stopped) done = true;
    // 끝에 계속 같은 그림이면 잘라냄
    const same = (a, b) => { for (let i = 0; i < a.length; i += 7) if (a[i] !== b[i]) return false; return true; };
    let end = frames.length;
    while (end > 2 && same(frames[end - 1], frames[end - 2])) end--;
    frames.length = Math.min(frames.length, end + 10); trace.length = frames.length;
    // 앞쪽 준비 프레임(화면 정리·색 넣기)은 빼고 스크립트가 시작하기 바로 전부터
    let cut = trace.findIndex(t => t !== 0);
    cut = cut < 0 ? 0 : Math.max(0, cut - 2);
    return { frames: frames.slice(cut), sounds: emu.soundLog, startFrame: f0 + cut, addr: A, trace: trace.slice(cut), finished: done, crashed: !!emu.bad, emu };
  }
  return { locate, run, boot };
})();

// ===== 44-animscript.js
// ================================================================ 기술 애니메이션 스크립트 읽기·쓰기 (pokegold macros/scripts/battle_anims.asm 명령 그대로)
// 한 기술의 스크립트 = 명령 목록. 갈림(점프·반복·조건)은 목록 안 번호로 바꿔서 들고 있다가 쓸 때 주소를 다시 계산
const AnimScript = (() => {
  const W = (d, o) => d[o] | (d[o + 1] << 8);
  const Off = (bank, a) => bank * 0x4000 + (a & 0x3FFF);
  // 명령: 이름 · 인자 수 · 갈림 인자 위치(인자 몇 번째부터 2바이트 주소인지) · 종류
  const CMD = {
    0xD0: { n: 'obj', a: 4, k: 'obj' }, 0xD1: { n: 'gfx', a: 1, k: 'gfx' }, 0xD2: { n: 'gfx', a: 2, k: 'gfx' }, 0xD3: { n: 'gfx', a: 3, k: 'gfx' }, 0xD4: { n: 'gfx', a: 4, k: 'gfx' }, 0xD5: { n: 'gfx', a: 5, k: 'gfx' },
    0xD6: { n: 'incobj', a: 1, k: 'adv' }, 0xD7: { n: 'setobj', a: 2, k: 'adv' }, 0xD8: { n: 'incbgeffect', a: 1, k: 'adv' },
    0xD9: { n: 'battlergfx_2row', a: 0, k: 'adv' }, 0xDA: { n: 'battlergfx_1row', a: 0, k: 'adv' }, 0xDB: { n: 'checkpokeball', a: 0, k: 'adv' }, 0xDC: { n: 'transform', a: 0, k: 'adv' },
    0xDD: { n: 'raisesub', a: 0, k: 'adv' }, 0xDE: { n: 'dropsub', a: 0, k: 'adv' }, 0xDF: { n: 'resetobp0', a: 0, k: 'adv' },
    0xE0: { n: 'sound', a: 2, k: 'sound' }, 0xE1: { n: 'cry', a: 1, k: 'sound' }, 0xE2: { n: 'minimizeopp', a: 0, k: 'adv' }, 0xE3: { n: 'oamon', a: 0, k: 'adv' }, 0xE4: { n: 'oamoff', a: 0, k: 'adv' },
    0xE5: { n: 'clearobjs', a: 0, k: 'adv' }, 0xE6: { n: 'beatup', a: 0, k: 'adv' }, 0xE7: { n: '0xe7', a: 0, k: 'adv' }, 0xE8: { n: 'updateactorpic', a: 0, k: 'adv' }, 0xE9: { n: 'minimize', a: 0, k: 'adv' },
    0xEA: { n: '0xea', a: 0, k: 'adv' }, 0xEB: { n: '0xeb', a: 0, k: 'adv' }, 0xEC: { n: '0xec', a: 0, k: 'adv' }, 0xED: { n: '0xed', a: 0, k: 'adv' },
    0xEE: { n: 'if_param_and', a: 3, br: 1, k: 'flow' }, 0xEF: { n: 'jumpuntil', a: 2, br: 0, k: 'flow' },
    0xF0: { n: 'bgeffect', a: 4, k: 'bg' }, 0xF1: { n: 'bgp', a: 1, k: 'pal' }, 0xF2: { n: 'obp0', a: 1, k: 'pal' }, 0xF3: { n: 'obp1', a: 1, k: 'pal' },
    0xF4: { n: 'keepsprites', a: 0, k: 'adv' }, 0xF5: { n: '0xf5', a: 0, k: 'adv' }, 0xF6: { n: '0xf6', a: 0, k: 'adv' }, 0xF7: { n: '0xf7', a: 0, k: 'adv' },
    0xF8: { n: 'if_param_equal', a: 3, br: 1, k: 'flow' }, 0xF9: { n: 'setvar', a: 1, k: 'flow' }, 0xFA: { n: 'incvar', a: 0, k: 'flow' }, 0xFB: { n: 'if_var_equal', a: 3, br: 1, k: 'flow' },
    0xFC: { n: 'jump', a: 2, br: 0, k: 'flow' }, 0xFD: { n: 'loop', a: 3, br: 1, k: 'flow' }, 0xFE: { n: 'call', a: 2, br: 0, k: 'call' }, 0xFF: { n: 'ret', a: 0, k: 'end' }
  };
  const lenOf = op => op <= 0xCF ? 1 : 1 + CMD[op].a;
  const ends = op => op === 0xFF || op === 0xFC;   // 다음 명령으로 안 넘어감

  // 한 기술의 스크립트에서 닿는 명령 주소들 (부르기(call)는 따라가지 않음)
  function reach(d, bank, entry) {
    const seen = new Map(), todo = [entry];
    while (todo.length) {
      let a = todo.pop();
      for (let k = 0; k < 1000 && !seen.has(a) && a >= 0x4000 && a < 0x8000; k++) {
        const op = d[Off(bank, a)], c = CMD[op];
        seen.set(a, op);
        if (c && c.br != null && op !== 0xFE) todo.push(W(d, Off(bank, a) + 1 + c.br));
        if (ends(op)) break;
        a += lenOf(op);
      }
    }
    return seen;
  }
  // 모든 기술(과 기술 뒤 특수 애니메이션)이 어느 주소를 같이 쓰는지 → Map(주소 → 쓰는 애니메이션 수)
  function sharing(d, tab, count) {
    const bank = Math.floor(tab / 0x4000), use = new Map(), calls = new Map();
    for (let m = 0; m < count; m++) {
      const e = W(d, tab + m * 2);
      if (e < 0x4000 || e >= 0x8000) continue;
      for (const [a, op] of reach(d, bank, e)) {
        use.set(a, (use.get(a) || 0) + 1);
        if (op === 0xFE) { const t = W(d, Off(bank, a) + 1); calls.set(t, (calls.get(t) || new Set()).add(m)); }
      }
    }
    return { use, calls };
  }
  // 읽기 → { bank, entry, cmds: [{ op, args, target (목록 번호) 또는 ext (밖 주소), addr }], size }
  function parse(d, bank, entry) {
    const seen = reach(d, bank, entry), addrs = [...seen.keys()].sort((x, y) => x - y), idx = new Map();
    addrs.forEach((a, i) => idx.set(a, i));
    const cmds = addrs.map(a => {
      const o = Off(bank, a), op = d[o], c = CMD[op], cmd = { op, args: [], addr: a };
      if (op <= 0xCF) return cmd;
      for (let i = 0; i < c.a; i++) cmd.args.push(d[o + 1 + i]);
      if (c.br != null) {
        const t = W(d, o + 1 + c.br);
        if (op !== 0xFE && idx.has(t)) cmd.target = idx.get(t); else cmd.ext = t;
        cmd.args.length = c.br;   // 주소 바이트는 빼고 들고 있음
      }
      return cmd;
    });
    // 갈림이 없는데 다음 명령이 바로 붙어 있지 않은 곳 (원래 따로 떨어진 덩어리) 표시
    let size = 0;
    for (const a of addrs) size += lenOf(seen.get(a));
    return { bank, entry, cmds, size, addrs };
  }
  // 바이트로 (base = 롬 안 주소 $4000~). 시작 명령이 목록 0번
  function encode(model, base) {
    const pos = [];
    let p = base;
    for (const c of model.cmds) { pos.push(p); p += lenOf(c.op); }
    const out = [];
    model.cmds.forEach((c, i) => {
      out.push(c.op);
      if (c.op <= 0xCF) return;
      const k = CMD[c.op];
      if (k.br != null) {
        for (let j = 0; j < k.br; j++) out.push(c.args[j] & 0xFF);
        const t = c.target != null ? pos[c.target] : c.ext;
        out.push(t & 0xFF, t >> 8);
      } else for (let j = 0; j < k.a; j++) out.push((c.args[j] || 0) & 0xFF);
    });
    return { bytes: out, pos };
  }
  const size = model => model.cmds.reduce((a, c) => a + lenOf(c.op), 0);
  // 끝이 ret 로 닫혀 있는지 · 갈림 대상이 목록 안에 있는지
  function check(model) {
    const errs = [];
    if (!model.cmds.length) errs.push('명령이 하나도 없어요');
    model.cmds.forEach((c, i) => { if (c.target != null && (c.target < 0 || c.target >= model.cmds.length)) errs.push((i + 1) + '번째 명령의 이동 대상이 없어요'); });
    const last = model.cmds[model.cmds.length - 1];
    if (last && !ends(last.op)) errs.push('마지막 명령이 "끝"이 아니에요');
    return errs;
  }
  // 목록에서 i 번째를 지우거나 넣을 때 갈림 번호 고치기
  function fixTargets(model, at, delta) {
    for (const c of model.cmds) if (c.target != null && c.target >= at) c.target += delta;
  }
  return { CMD, lenOf, ends, reach, sharing, parse, encode, size, check, fixTargets };
})();

// ===== 45-apu.js
// ================================================================ 게임보이 소리칩 (에뮬레이터가 기록한 소리 레지스터 쓰기 → 소리). 1프레임 = 1/59.73초
const GBApu = (() => {
  const SR = 22050, FR = 4194304 / 70224, DUTY = [[0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 0]];
  // log: [frame, reg(0x10~0x3F), value, …] · frames: 전체 길이(프레임) · from: 시작 프레임
  function render(log, frames, from) {
    from = from || 0;
    const total = Math.ceil(frames * SR / FR), out = new Float32Array(total), spf = SR / FR;
    const R = new Uint8Array(0x40), wave = new Uint8Array(32);
    const ch = [0, 1, 2, 3].map(() => ({ on: false, vol: 0, envDir: 0, envPer: 0, envT: 0, len: 0, lenOn: false, freq: 0, phase: 0, duty: 0, swPer: 0, swDir: 0, swSh: 0, swT: 0, lfsr: 0x7FFF, nclk: 0, short: false, divT: 0 }));
    const trigger = i => {
      const c = ch[i];
      c.on = true;
      if (i === 2) { c.on = (R[0x1A] & 0x80) !== 0; c.vol = [0, 4, 2, 1][(R[0x1C] >> 5) & 3]; if (!c.len) c.len = 256; }
      else { const env = R[[0x12, 0x17, 0, 0x21][i]]; c.vol = env >> 4; c.envDir = env & 8 ? 1 : -1; c.envPer = env & 7; c.envT = 0; if (!c.len) c.len = 64; if ((env & 0xF8) === 0) c.on = false; }
      if (i === 0) { const s = R[0x10]; c.swPer = (s >> 4) & 7; c.swDir = s & 8 ? -1 : 1; c.swSh = s & 7; c.swT = 0; }
      if (i === 3) { c.lfsr = 0x7FFF; }
    };
    const apply = (r, v) => {
      if (r >= 0x30) { wave[(r - 0x30) * 2] = v >> 4; wave[(r - 0x30) * 2 + 1] = v & 15; R[r] = v; return; }
      R[r] = v;
      switch (r) {
        case 0x11: ch[0].duty = v >> 6; ch[0].len = 64 - (v & 63); break;
        case 0x16: ch[1].duty = v >> 6; ch[1].len = 64 - (v & 63); break;
        case 0x1B: ch[2].len = 256 - v; break;
        case 0x20: ch[3].len = 64 - (v & 63); break;
        case 0x13: ch[0].freq = (ch[0].freq & 0x700) | v; break;
        case 0x18: ch[1].freq = (ch[1].freq & 0x700) | v; break;
        case 0x1D: ch[2].freq = (ch[2].freq & 0x700) | v; break;
        case 0x14: case 0x19: case 0x1E: case 0x23: {
          const i = { 0x14: 0, 0x19: 1, 0x1E: 2, 0x23: 3 }[r];
          if (i < 3) ch[i].freq = (ch[i].freq & 0xFF) | ((v & 7) << 8);
          ch[i].lenOn = (v & 0x40) !== 0;
          if (v & 0x80) trigger(i);
          break;
        }
        case 0x1A: if (!(v & 0x80)) ch[2].on = false; break;
        case 0x1C: ch[2].vol = [0, 4, 2, 1][(v >> 5) & 3]; break;
        case 0x26: if (!(v & 0x80)) for (const c of ch) c.on = false; break;
      }
    };
    let li = 0;
    const seq = 512 / SR;   // 프레임 시퀀서 512Hz
    let seqAcc = 0, step = 0, hp = 0, hpIn = 0;
    for (let s = 0; s < total; s++) {
      const f = from + s / spf;
      while (li < log.length && log[li] <= f) { apply(log[li + 1], log[li + 2]); li += 3; }
      seqAcc += seq;
      while (seqAcc >= 1) {
        seqAcc -= 1; step = (step + 1) & 7;
        if (!(step & 1)) for (let i = 0; i < 4; i++) { const c = ch[i]; if (c.lenOn && c.len > 0 && --c.len === 0) c.on = false; }
        if (step === 2 || step === 6) { const c = ch[0]; if (c.swPer && c.swSh) { if (++c.swT >= c.swPer) { c.swT = 0; const nf = c.freq + c.swDir * (c.freq >> c.swSh); if (nf > 2047) c.on = false; else if (nf >= 0) c.freq = nf; } } }
        if (step === 7) for (const i of [0, 1, 3]) { const c = ch[i]; if (c.envPer && ++c.envT >= c.envPer) { c.envT = 0; c.vol = Math.max(0, Math.min(15, c.vol + c.envDir)); } }
      }
      const nr50 = R[0x24], nr51 = R[0x25], mv = (((nr50 >> 4) & 7) + (nr50 & 7) + 2) / 16;
      let mix = 0;
      for (let i = 0; i < 4; i++) {
        const c = ch[i];
        if (!c.on || !((nr51 >> i) & 0x11)) continue;
        let v = 0;
        if (i < 2) { const hz = 131072 / (2048 - c.freq); c.phase = (c.phase + hz / SR) % 1; v = DUTY[c.duty][Math.floor(c.phase * 8)] ? c.vol : 0; }
        else if (i === 2) { const hz = 65536 / (2048 - c.freq); c.phase = (c.phase + hz / SR) % 1; v = c.vol ? (wave[Math.floor(c.phase * 32)] * c.vol / 4) : 0; }
        else {
          const nr = R[0x22], r = nr & 7, sh = nr >> 4, hz = 524288 / (r ? r : 0.5) / Math.pow(2, sh + 1);
          c.nclk += hz / SR;
          while (c.nclk >= 1) { c.nclk -= 1; const x = (c.lfsr ^ (c.lfsr >> 1)) & 1; c.lfsr = (c.lfsr >> 1) | (x << 14); if (nr & 8) c.lfsr = (c.lfsr & ~0x40) | (x << 6); }
          v = c.lfsr & 1 ? 0 : c.vol;
        }
        mix += v / 15 - 0.5 * (v ? 0 : 0);
      }
      const x = mix * mv * 0.18;
      hp = x - hpIn + 0.995 * hp; hpIn = x;
      out[s] = hp;
    }
    return out;
  }
  return { render, SR, FR };
})();

// ===== 50-data.js
// ================================================================ 게임 데이터 (RomEdit.cs · RomDex.cs · RomMart.cs · RomTypeMatchup.cs 와 같음)
const TYPES = [[0, '노말'], [1, '격투'], [2, '비행'], [3, '독'], [4, '땅'], [5, '바위'], [7, '벌레'], [8, '고스트'], [9, '강철'],
  [0x14, '불꽃'], [0x15, '물'], [0x16, '풀'], [0x17, '전기'], [0x18, '에스퍼'], [0x19, '얼음'], [0x1A, '드래곤'], [0x1B, '악']];
const TYPE_NAME = new Map(TYPES.concat([[0x13, '???']]));
const GRASS_CHANCE = [30, 30, 20, 10, 5, 4, 1], WATER_CHANCE = [60, 30, 10];
const GROWTH = ['보통 (100만)', '조금 빠름', '조금 느림', '보통보다 느림 (105만)', '빠름 (80만)', '느림 (125만)'];
const GENDER_VALS = [0, 31, 63, 127, 191, 254, 255];
const GENDER_NAMES = ['수컷만', '암컷 12.5%', '암컷 25%', '암컷 50%', '암컷 75%', '암컷만', '성별 없음'];
const EVO_METHODS = ['', '레벨업', '진화의 돌·도구', '통신교환', '친밀도', '레벨+공격/방어 비교'];
const MAX_MART_ITEMS = 15;

Object.assign(Rom.prototype, {
  loadData() {
    const safe = f => { try { f(); } catch (e) { console.warn(e); } };
    this.pokemonNames = []; this.itemNames = []; this.classNames = []; this.moveNames = [];
    this.wild = []; this.trainerClasses = []; this.marts = [];
    safe(() => this.loadNames());
    safe(() => this.loadWild());
    safe(() => this.loadTrainers());
    safe(() => this.loadDex());
    safe(() => this.loadMarts());
  },

  fixedName(off, len) {
    const b = Array.from(this.data.subarray(off, off + len)); b.push(0x50);
    const r = this.cs.decode(b, 0);
    return r ? r.text : '?';
  },

  encodeName(s) { return this.cs.encode(s, { firstBreak: true }, false); },

  // 첫 몇 개 이름으로 표를 찾아 '@'(끝) 으로 이어진 이름들을 읽음
  readList(first, max) {
    let pat;
    try { pat = []; for (const s of first.split('@').filter(x => x)) { pat.push(...this.encodeName(s), 0x50); } } catch (e) { return { names: [], off: -1 }; }
    let p = this.findPattern(pat, 0, this.data.length);
    if (p < 0) return { names: [], off: -1 };
    const start = p, list = [''];
    for (let i = 0; i < max; i++) {
      const r = this.cs.decode(this.data, p);
      if (!r || r.term !== 0x50 || r.end - p > 24) break;
      list.push(r.text); p = r.end + 1;
    }
    return { names: list, off: start, len: p - start };
  },

  // 게임의 이름 주소 표 (NamesPointers: 포켓몬·기술·(빈칸)·도구·(WRAM)·(WRAM)·트레이너 직업) — 모든 버전에 같은 모양으로 있음
  findNamesPointers() {
    const d = this.data, ok = i => Rom.banked(this.w(i)), wram = i => d[i] >= 0xC0 && d[i] <= 0xDF;
    for (let i = 0; i < 0x4000 - 24; i++) {
      if (d[i + 6] !== 0 || d[i + 7] !== 0 || d[i + 8] !== 0 || d[i + 12] !== 0 || d[i + 15] !== 0) continue;
      if (!wram(i + 14) || !wram(i + 17) || !ok(i + 1) || !ok(i + 4) || !ok(i + 10) || !ok(i + 19)) continue;
      if (!d[i] || !d[i + 3] || !d[i + 9] || !d[i + 18] || d[i + 9] * 0x4000 >= d.length) continue;
      return i;
    }
    return -1;
  },
  readNames(off, max) {
    const list = [''];
    let p = off;
    for (let i = 0; i < max; i++) {
      const r = this.cs.decode(this.data, p);
      if (!r || r.term !== 0x50 || r.end - p > 24) break;
      list.push(r.text); p = r.end + 1;
    }
    return list;
  },
  loadNames() {
    const d = this.data;
    // 포켓몬 이름 한 칸 길이: 일본판 5바이트, 그 밖 10바이트
    this.monNameLen = this.cs.kind === 'jp' ? 5 : 10;
    this.namesPtrs = this.findNamesPointers();
    const np = this.namesPtrs;
    if (np >= 0) this.pokemonNamesOff = this.off(d[np], this.w(np + 1));
    else {
      const f = this.findPattern([0xF5, 0xE5, 0x3E, -1, 0xD7, 0xFA, -1, -1, 0x3D, 0x21, -1, -1, 0x5F, 0x16, 0x00, 0x19], 0, 0x4000);
      if (f >= 0) this.pokemonNamesOff = this.off(d[f + 3], this.w(f + 10));
    }
    if (this.pokemonNamesOff >= 0) {
      this.pokemonNames = [''];
      for (let i = 0; i < 251; i++) this.pokemonNames.push(this.fixedName(this.pokemonNamesOff + i * this.monNameLen, this.monNameLen));
    }
    if (np >= 0) {
      this.itemNames = this.readNames(this.off(d[np + 9], this.w(np + 10)), 255);
      this.classNames = this.readNames(this.off(d[np + 18], this.w(np + 19)), 80);
    }
    if (this.itemNames.length < 2) this.itemNames = this.readList('마스터볼@하이퍼볼@', 255).names;
    if (this.classNames.length < 2) this.classNames = this.readList('체육관 관장@체육관 관장@', 80).names;
  },
  monName(i) { return this.pokemonNames[i] || ('#' + i); },
  itemName(i) { return i === 0 ? '(없음)' : this.itemNames[i] || ('도구 ' + i); },
  moveName(i) { return i === 0 ? '(없음)' : this.moveNames[i] || ('기술 ' + i); },

  // ------------------------------------------------ 야생 포켓몬
  loadWild() {
    const g = this.findPattern([0x21, -1, -1, 0x01, 0x2F, 0x00, 0xCD, -1, -1, 0xD8, 0x21, -1, -1, 0x11, -1, -1], 0x4000, this.data.length);
    const w = this.findPattern([0x21, -1, -1, 0x01, 0x09, 0x00, 0xCD, -1, -1, 0xD8, 0x21, -1, -1, 0x11, -1, -1], 0x4000, this.data.length);
    const read = (p, water) => {
      const size = water ? 9 : 47;
      for (let n = 0; n < 200 && p + size < this.data.length; n++, p += size) {
        if (this.data[p] === 0xFF) break;
        this.wild.push({ off: p, water, group: this.data[p], map: this.data[p + 1] });
      }
    };
    if (g >= 0) { const b = Math.floor(g / 0x4000); read(this.off(b, this.w(g + 11)), false); read(this.off(b, this.w(g + 14)), false); }
    if (w >= 0) { const b = Math.floor(w / 0x4000); read(this.off(b, this.w(w + 11)), true); read(this.off(b, this.w(w + 14)), true); }
  },
  wildFor(a) { return this.wild.filter(x => x.group === a.group && x.map === a.map); },
  // 시간대 t(0 아침, 1 낮, 2 밤), 칸 i 의 [레벨, 포켓몬] 위치
  wildSlot(t, time, i) { return t.water ? t.off + 3 + i * 2 : t.off + 5 + (time * 7 + i) * 2; },
  wildRate(t, time) { return t.off + 2 + time; },

  // ------------------------------------------------ 트레이너
  loadTrainers() {
    const t = this.findPattern([0x21, -1, -1, 0x7A, 0x3D, 0x4F, 0x06, 0x00, 0x09, 0x09, 0x3E, -1, 0xCD], 0x4000, this.data.length);
    if (t < 0) return;
    const bank = this.data[t + 11], tbl = this.w(t + 1);
    this.trainerBank = bank; this.trainerTbl = this.off(bank, tbl);
    let classes = (this.w(this.trainerTbl) - tbl) / 2;
    if (classes <= 0 || classes > 100) classes = Math.max(0, Math.min(100, this.classNames.length - 1));
    const ptrs = [];
    for (let i = 0; i < classes; i++) { const v = this.w(this.trainerTbl + i * 2); if (!Rom.banked(v)) break; ptrs.push(v); }
    for (let c = 0; c < ptrs.length; c++) {
      const start = ptrs[c];
      let end = 0x8000; for (const x of ptrs) if (x > start && x < end) end = x;
      const tc = { cls: c + 1, name: this.classNames[c + 1] || ('트레이너 ' + (c + 1)), off: this.off(bank, start), parties: [], tail: [] };
      let p = tc.off; const pend = this.off(bank, end);
      while (p < pend && tc.parties.length < 64) {
        const party = this.readParty(p, pend);
        if (!party) break;
        tc.parties.push(party); p += party.length;
      }
      tc.length = p - tc.off;
      if (end < 0x8000 && pend - p > 0 && pend - p <= 0x1000) tc.tail = Array.from(this.data.subarray(p, pend));
      this.trainerClasses.push(tc);
    }
  },
  readParty(p, pend) {
    const d = this.data, r = this.cs.decode(d, p);
    if (!r || r.term !== 0x50 || r.end - p > 20 || r.end + 2 >= pend) return null;
    const type = d[r.end + 1];
    if (type > 3) return null;
    const party = { name: r.text, type, mons: [] };
    let q = r.end + 2;
    while (q < pend && d[q] !== 0xFF) {
      if (party.mons.length >= 6) return null;
      const m = { level: d[q], species: d[q + 1], item: 0, moves: [0, 0, 0, 0] };
      if (m.level < 1 || m.level > 100 || m.species < 1 || m.species > 251) return null;
      let k = q + 2;
      if (type & 2) m.item = d[k++];
      if (type & 1) for (let i = 0; i < 4; i++) m.moves[i] = d[k++];
      party.mons.push(m); q = k;
    }
    if (q >= pend || !party.mons.length) return null;
    party.length = q + 1 - p;
    return party;
  },
  allocInBank(bank, n) {
    for (const r of this.free) if (Math.floor(r[0] / 0x4000) === bank && r[1] - r[0] >= n) { const p = r[0]; r[0] += n; return p; }
    return -1;
  },
  writeTrainerClass(tc) {
    const b = [];
    for (const pt of tc.parties) {
      let nm;
      try { nm = this.encodeName(pt.name); } catch (e) { return e.message; }
      if (nm.length > 10) return "'" + pt.name + "' 이름이 너무 길어요 (한글 5글자까지)";
      b.push(...nm, 0x50, pt.type);
      if (pt.mons.length < 1 || pt.mons.length > 6) return '포켓몬은 1~6마리여야 해요';
      for (const m of pt.mons) {
        b.push(m.level, m.species);
        if (pt.type & 2) b.push(m.item);
        if (pt.type & 1) b.push(...m.moves);
      }
      b.push(0xFF);
    }
    b.push(...tc.tail);
    let p = tc.off;
    if (b.length > tc.length + tc.tail.length) {
      p = this.allocInBank(this.trainerBank, b.length);
      if (p < 0) return '트레이너 데이터 공간이 부족해요 (포켓몬 수나 기술 지정을 줄여주세요)';
      const addr = 0x4000 + p % 0x4000, slot = this.trainerTbl + (tc.cls - 1) * 2;
      this.data[slot] = addr & 0xff; this.data[slot + 1] = addr >> 8;
      tc.off = p;
    }
    this.data.set(b, p);
    tc.length = Math.max(tc.length + tc.tail.length, b.length) - tc.tail.length;
    this.dirty = true;
    return null;
  },
  trainerLabel(cls, id) {
    const tc = this.trainerClasses.find(c => c.cls === cls);
    const pt = tc && tc.parties[id - 1];
    if (!pt) return '트레이너 ' + cls + '-' + id;
    return tc.name + ' ' + pt.name + ' — ' + pt.mons.map(m => this.monName(m.species) + ' Lv' + m.level).join(', ');
  },

  // ------------------------------------------------ 도감 (능력치 · 기술)
  findSequence(stride, count) {
    const d = this.data;
    let best = -1, bestHits = Math.floor(count * 6 / 10);
    for (let p = 0x4000; p + stride * count < d.length; p++) {
      if (d[p] !== 1 || d[p + stride] !== 2) continue;
      let hits = 0;
      for (let i = 0; i < count; i++) if (d[p + stride * i] === i + 1) hits++;
      if (hits > bestHits) { bestHits = hits; best = p; if (hits === count) break; }
    }
    return best;
  },
  loadDex() {
    this.baseStatsOff = this.findSequence(32, 251);
    this.movesOff = this.findSequence(7, 251);
    // 기술 이름표: 게임이 쓰는 이름 주소 표(포켓몬 이름 바로 다음 칸)를 따라감 → 이름을 길게 바꿔 옮긴 롬도 맞게 읽음
    this.moveNamesRef = -1;
    if (this.pokemonNamesOff >= 0) {
      const tri = o => [Math.floor(o / 0x4000), (0x4000 + o % 0x4000) & 0xff, (0x4000 + o % 0x4000) >> 8];
      const r = this.namesPtrs >= 0 ? this.namesPtrs : this.findPattern(tri(this.pokemonNamesOff), 0, 0x4000);
      if (r >= 0 && Rom.banked(this.w(r + 4))) {
        const start = this.off(this.data[r + 3], this.w(r + 4)), names = [''];
        let p = start;
        for (let i = 0; i < 251; i++) {
          const x = this.cs.decode(this.data, p);
          if (!x || x.term !== 0x50 || x.end - p > 24) break;
          names.push(x.text); p = x.end + 1;
        }
        if (names.length > 250) { this.moveNames = names; this.moveNamesOff = start; this.moveNamesLen = p - start; this.moveNamesRef = r + 3; }
      }
    }
    if (this.moveNamesRef < 0) {
      const mn = this.readList('막치기@태권당수@', 251);
      if (mn.names.length > 1) { this.moveNames = mn.names; this.moveNamesOff = mn.off; this.moveNamesLen = mn.len; }
    }
    const f = this.findPattern([0x4F, 0x06, 0x00, 0x21, -1, -1, 0x09, 0x09, 0x3E, -1, 0xCD], 0x4000, this.data.length);
    this.evosBank = -1;
    if (f >= 0) { this.evosBank = this.data[f + 9]; this.evosTbl = this.off(this.evosBank, this.w(f + 4)); }
    this.tmOff = this.findPattern([0xDF, 0x1D, 0xAE, 0xCD], 0, this.data.length);
  },
  statOff(mon) { return this.baseStatsOff + (mon - 1) * 32; },
  moveOff(move) { return this.movesOff + (move - 1) * 7; },
  setPokemonName(mon, name) {
    const b = this.encodeName(name), n = this.monNameLen || 10;
    if (b.length > n) throw new Error(this.cs.twoByte ? '이름이 너무 길어요 (한글 5글자까지)' : '이름이 너무 길어요 (' + n + '글자까지)');
    const off = this.pokemonNamesOff + (mon - 1) * n;
    for (let i = 0; i < n; i++) this.data[off + i] = i < b.length ? b[i] : 0x50;
    this.pokemonNames[mon] = name; this.dirty = true;
  },
  setMoveName(move, name) {
    if (!(this.moveNamesOff >= 0)) throw new Error('기술 이름표를 찾지 못했어요');
    if (this.encodeName(name).length > 14) throw new Error('이름이 너무 길어요 (한글 7글자까지)');
    const copy = this.moveNames.slice(); copy[move] = name;
    const all = [];
    for (let i = 1; i < copy.length; i++) all.push(...this.encodeName(copy[i]), 0x50);
    if (all.length > this.moveNamesLen) {
      const bank = Math.floor(this.moveNamesOff / 0x4000), addr = 0x4000 + this.moveNamesOff % 0x4000;
      const pat = [bank, addr & 0xff, addr >> 8];
      const ref = this.moveNamesRef >= 0 ? this.moveNamesRef : this.findPattern(pat, 0, this.data.length);
      if (ref < 0 || (this.moveNamesRef < 0 && this.findPattern(pat, ref + 1, this.data.length) >= 0)) throw new Error('기술 이름 전체 공간이 부족해요. 다른 기술 이름을 조금 줄여주세요.');
      const a = this.alloc(all.length + 32);
      if (!a) throw new Error('롬에 빈 공간이 부족해요');
      const na = 0x4000 + a.p % 0x4000;
      this.data[ref] = Math.floor(a.p / 0x4000); this.data[ref + 1] = na & 0xff; this.data[ref + 2] = na >> 8;
      this.moveNamesOff = a.p; this.moveNamesLen = all.length + 32;
    }
    for (let i = 0; i < this.moveNamesLen; i++) this.data[this.moveNamesOff + i] = i < all.length ? all[i] : 0x50;
    this.moveNames = copy; this.dirty = true;
  },
  evosOff(mon) { return this.off(this.evosBank, this.w(this.evosTbl + (mon - 1) * 2)); },
  readEvos(mon) {
    const d = this.data, evos = [], moves = [];
    let p = this.evosOff(mon); const start = p;
    while (d[p] !== 0 && evos.length < 8) {
      const e = { method: d[p], p1: d[p + 1], p2: 0, species: 0 };
      if (e.method === 5) { e.p2 = d[p + 2]; e.species = d[p + 3]; p += 4; } else { e.species = d[p + 2]; p += 3; }
      evos.push(e);
    }
    p++;
    while (d[p] !== 0 && moves.length < 64) { moves.push({ level: d[p], move: d[p + 1] }); p += 2; }
    p++;
    return { evos, moves, length: p - start };
  },
  writeEvos(mon, evos, moves) {
    const b = [];
    for (const e of evos) { b.push(e.method, e.p1); if (e.method === 5) b.push(e.p2); b.push(e.species); }
    b.push(0);
    for (const m of moves.slice().sort((x, y) => x.level - y.level)) b.push(m.level, m.move);
    b.push(0);
    let p = this.evosOff(mon);
    if (b.length > this.readEvos(mon).length) {
      p = this.allocInBank(this.evosBank, b.length);
      if (p < 0) return '진화·기술 데이터 공간이 부족해요';
      const addr = 0x4000 + p % 0x4000;
      this.data[this.evosTbl + (mon - 1) * 2] = addr & 0xff; this.data[this.evosTbl + (mon - 1) * 2 + 1] = addr >> 8;
    }
    this.data.set(b, p); this.dirty = true;
    return null;
  },
  // 그 레벨까지 배운 마지막 기술 4개 (게임이 기본으로 넣어주는 기술)
  defaultMoves(species, level) {
    const res = [0, 0, 0, 0];
    if (this.evosBank < 0) return res;
    const learned = [];
    for (const m of this.readEvos(species).moves) {
      if (m.level > level || learned.includes(m.move)) continue;
      if (learned.length === 4) learned.shift();
      learned.push(m.move);
    }
    learned.forEach((m, i) => res[i] = m);
    return res;
  },

  // ------------------------------------------------ 상점 · 가격
  loadMarts() {
    const d = this.data;
    const f = this.findPattern([0x21, -1, -1, 0x19, 0x19, 0x5E, 0x23, 0x56, 0x06, -1], 0, d.length);
    if (f >= 0) {
      this.martBank = d[f + 9];
      const tblAddr = this.w(f + 1);
      this.martTbl = this.off(this.martBank, tblAddr);
      let minPtr = 0x8000, n = 0;
      while (n < 80 && tblAddr + n * 2 < minPtr) {
        const a = this.w(this.martTbl + n * 2);
        if (!Rom.banked(a)) break;
        if (a > tblAddr) minPtr = Math.min(minPtr, a);
        n++;
      }
      for (let i = 0; i < n; i++) {
        const a = this.w(this.martTbl + i * 2);
        if (!Rom.banked(a)) break;
        const m = { id: i, off: this.off(this.martBank, a), items: [] };
        const cnt = d[m.off];
        if (cnt > 40) break;
        for (let k = 0; k < cnt; k++) m.items.push(d[m.off + 1 + k]);
        m.length = cnt + 2;
        this.marts.push(m);
      }
    }
    const g = this.findPattern([0x21, -1, -1, 0x3D, 0x4F, 0x06, 0x00, 0x3E, 0x07, 0xCD, -1, -1, 0x3E, -1], 0x4000, d.length);
    if (g >= 0) this.itemAttrOff = this.off(d[g + 13], this.w(g + 1) - 2);
    else this.itemAttrOff = this.findPattern([0x00, 0x00, -1, -1, -1, -1, -1, 0xB0, 0x04, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0x58, 0x02, -1, -1, -1, -1, -1, 0xC8, 0x00], 0x4000, d.length);
  },
  getPrice(item) { return this.itemAttrOff < 0 || item < 1 ? 0 : this.w(this.itemAttrOff + (item - 1) * 7); },
  setPrice(item, price) {
    if (this.itemAttrOff < 0 || item < 1) return;
    const o = this.itemAttrOff + (item - 1) * 7;
    this.data[o] = price & 0xff; this.data[o + 1] = price >> 8; this.dirty = true;
  },
  writeMart(m, items) {
    if (items.length < 1) return '물건이 하나 이상 있어야 해요';
    if (items.length > MAX_MART_ITEMS) return '물건은 ' + MAX_MART_ITEMS + '개까지 넣을 수 있어요';
    const b = [items.length, ...items, 0xFF];
    let p = m.off;
    if (b.length > m.length) {
      p = this.allocInBank(this.martBank, b.length);
      if (p < 0) return '상점 데이터 공간이 부족해요';
      const addr = 0x4000 + p % 0x4000;
      this.data[this.martTbl + m.id * 2] = addr & 0xff; this.data[this.martTbl + m.id * 2 + 1] = addr >> 8;
      m.off = p; m.length = b.length;
    }
    this.data.set(b, p);
    m.items = items.slice(); this.dirty = true;
    return null;
  },

  // ------------------------------------------------ 타입 상성
  typeMatchupsOff() {
    if (this._tmOff !== undefined) return this._tmOff;
    let o = this.findPattern([0x00, 0x05, 0x05, 0x00, 0x09, 0x05, 0x14, 0x14, 0x05], 0x20000, this.data.length);
    if (o < 0) o = this.findPattern([0x14, 0x16, 0x14, 0x14, 0x19, 0x14, 0x14, 0x07, 0x14], 0x20000, this.data.length);
    if (o < 0) o = this.findPattern([0x14, 0x14, 0x05, 0x14, 0x15, 0x05], 0x20000, this.data.length);
    // 상성을 바꾼 롬은 앞부분 모양이 달라서, 찾은 곳에서 표가 시작하는 데까지 거슬러 올라감
    const d = this.data, ids = new Set(TYPES.map(t => t[0]).concat([0x13]));
    const ok = p => p >= 0 && ids.has(d[p]) && ids.has(d[p + 1]) && [0, 5, 10, 20].includes(d[p + 2]);
    if (o >= 0) while (ok(o - 3)) o -= 3;
    return this._tmOff = o;
  },
  readTypeMatchups() {
    const list = [], off = this.typeMatchupsOff(), d = this.data;
    if (off < 0) return list;
    let p = off, foresight = false;
    while (p < d.length - 3) {
      if (d[p] === 0xFF) break;
      if (d[p] === 0xFE) { foresight = true; p++; continue; }
      list.push({ atk: d[p], def: d[p + 1], mult: d[p + 2], foresight });
      p += 3;
    }
    return list;
  },
  saveTypeMatchups(entries) {
    const off = this.typeMatchupsOff(), d = this.data;
    if (off < 0) return '타입 상성 표를 찾지 못했어요';
    const b = [];
    for (const e of entries) if (!e.foresight && e.mult !== 10) b.push(e.atk, e.def, e.mult);
    b.push(0xFE);
    for (const e of entries) if (e.foresight) b.push(e.atk, e.def, e.mult);
    b.push(0xFF);
    let len = 0; for (let p = off; p < d.length && d[p] !== 0xFF; p++) len++;
    len++;
    if (b.length > len) return '상성 표 공간이 부족해요 (원래보다 특별한 상성을 너무 많이 넣었어요)';
    for (let i = 0; i < len; i++) d[off + i] = i < b.length ? b[i] : 0xFF;
    this.dirty = true;
    return null;
  },

  // ------------------------------------------------ 바깥 지도 NPC 모습 목록 (RomOutdoorSprites.cs)
  // 금·은은 바깥 지도에서 지도 묶음마다 정해진 11가지 모습만 불러옴. 목록에 없는 모습은 게임에서 엉뚱한 인물로 보임
  outdoorTable() {
    if (this._outTbl !== undefined) return this._outTbl;
    this._outTbl = -1;
    const p = this.findPattern([0xFA, -1, -1, 0x3D, 0x4F, 0x06, 0x00, 0x21, -1, -1, 0x09, 0x09, 0x2A, 0x66, 0x6F, 0x0E], 0, 0x20000);
    if (p >= 0) {
      this._outLen = this.data[p + 16];
      if (this._outLen >= 1 && this._outLen <= 32) this._outTbl = this.off(Math.floor(p / 0x4000), this.w(p + 8));
    }
    return this._outTbl;
  },
  isOutdoor(a) { return a && (a.env === 1 || a.env === 2); },
  outdoorListOff(group) {
    const t = this.outdoorTable();
    if (t < 0 || group < 1) return -1;
    return this.off(Math.floor(t / 0x4000), this.w(t + (group - 1) * 2));
  },
  outdoorSprites(a) {
    if (!this.isOutdoor(a)) return null;
    const o = this.outdoorListOff(a.group);
    if (o < 0) return null;
    return Array.from(this.data.subarray(o, o + this._outLen));
  },
  spriteShows(a, sprite) { if (sprite <= 0) return true; const l = this.outdoorSprites(a); return !l || l.includes(sprite); },
  isStillSprite(sprite) {
    const g = this.gfx;
    if (!g.spritePtr || sprite < 1 || sprite >= 0x80) return false;
    return this.data[g.off(g.spriteBank, g.spritePtr) + (sprite - 1) * 6 + 4] === 3;
  },
  // 구역의 모든 오브젝트 (지운 것 포함) 모습
  areaObjects(a) {
    const d = this.data;
    let e = this.off(a.scriptBank, a.eventsAddr) + 2;
    e += 1 + d[e] * 5; e += 1 + d[e] * 8; e += 1 + d[e] * 5;
    const n = d[e++], res = [];
    for (let i = 0; i < n && i < 64; i++, e += 13) res.push({ sprite: d[e], hidden: d[e + 5] === 0xFF && d[e + 6] === 0x00 });
    return res;
  },
  usedOutdoorSprites(group) {
    const used = new Set();
    for (const x of this.allAreas) if (x.group === group && this.isOutdoor(x)) for (const ob of this.areaObjects(x)) if (!ob.hidden) used.add(ob.sprite);
    return used;
  },
  outdoorRegionText(a) {
    const list = this.outdoorSprites(a);
    if (!list) return null;
    const used = this.usedOutdoorSprites(a.group);
    const walking = list.filter(s => !this.isStillSprite(s));
    const free = walking.filter(s => !used.has(s)).length;
    const missing = [...used].filter(s => !this.isStillSprite(s) && !list.includes(s));
    let t = '이 지역 바깥 지도는 움직이는 NPC 모습을 ' + walking.length + '가지까지만 쓸 수 있어요 (게임 한계). 지금: ' +
      walking.map(s => (used.has(s) ? '' : '(안 씀) ') + Names.sprite(s)).join(', ') + ' · 빈 칸 ' + free + '개';
    if (missing.length) t += '\n⚠ 게임에서 다른 인물로 보이는 모습: ' + missing.map(s => Names.sprite(s)).join(', ') +
      (free === 0 ? ' → 위 모습 중 하나를 이 지역에서 안 쓰게 바꿔야 자리가 생겨요' : ' → 그 NPC 를 골라 [모습 적용]을 누르면 빈 칸에 들어가요');
    return t;
  },
  // sprite 모습을 이 구역 묶음의 바깥 지도 목록에 넣음. 안내 문구 (필요 없으면 null)
  ensureOutdoorSprite(a, sprite) {
    if (this.spriteShows(a, sprite)) return null;
    const lo = this.outdoorListOff(a.group);
    if (lo < 0) return null;
    const list = this.outdoorSprites(a), used = this.usedOutdoorSprites(a.group), still = this.isStillSprite(sprite);
    const slot = list.findIndex(s => !used.has(s) && this.isStillSprite(s) === still);
    if (slot < 0)
      return "⚠ '" + Names.sprite(sprite) + "' 모습은 이 지역 바깥 지도에서 게임에 다른 인물로 보여요. 이 지역은 NPC 모습을 " + list.length + '가지까지만 쓸 수 있는데 모두 쓰는 중이에요.\n이 지역에서 이미 쓰는 모습 중에서 고르세요: ' +
        [...new Set(list.filter(s => this.isStillSprite(s) === still))].map(s => Names.sprite(s)).join(', ');
    const old = list[slot], tbl = this.outdoorTable(), bank = Math.floor(tbl / 0x4000);
    let groups = 0; for (const x of this.allAreas) groups = Math.max(groups, x.group);
    const sharing = []; for (let g = 1; g <= groups; g++) if (g !== a.group && this.outdoorListOff(g) === lo) sharing.push(g);
    let target = lo;
    if (sharing.length) {
      const p = this.allocInBank(bank, this._outLen);
      if (p < 0) {
        for (const g of sharing) for (const x of this.allAreas)
          if (x.group === g && this.isOutdoor(x) && this.areaObjects(x).some(ob => !ob.hidden && ob.sprite === old))
            return '⚠ 이 지역 NPC 모습 목록을 늘릴 공간이 없어서 게임에서 다른 인물로 보일 수 있어요.';
      } else {
        this.data.copyWithin(p, lo, lo + this._outLen);
        const addr = 0x4000 + p % 0x4000;
        this.data[tbl + (a.group - 1) * 2] = addr & 0xFF; this.data[tbl + (a.group - 1) * 2 + 1] = addr >> 8;
        target = p;
      }
    }
    this.data[target + slot] = sprite; this.dirty = true;
    return "이 지역 바깥 지도에서도 '" + Names.sprite(sprite) + "' 모습이 보이도록 NPC 모습 목록에 넣었어요 (안 쓰던 '" + Names.sprite(old) + "' 모습과 바꿈).";
  },

  // ------------------------------------------------ NPC 수정
  moveOwner(o, x, y) {
    const d = this.data;
    if (o.isSign) { d[o.eventOff] = y; d[o.eventOff + 1] = x; }
    else { d[o.eventOff + 1] = y + 4; d[o.eventOff + 2] = x + 4; }
    o.x = x; o.y = y; this.dirty = true;
    // 이 NPC 가 다가오는 트리거가 있으면 새 자리에서 걸어오도록 길을 다시 만듦 → 안내 글
    const area = o.isSign ? null : this.areaOf(o);
    return area ? this.fixApproachTriggersNote(area) : null;
  },
  setLook(a, o, sprite, move) {
    this.data[o.eventOff] = sprite; this.data[o.eventOff + 3] = move;
    o.sprite = sprite; o.move = move; this.dirty = true;
    return this.ensureOutdoorSprite(a, sprite);
  },
  eventsSize(e) {
    const d = this.data;
    let p = e + 2;
    p += 1 + d[p] * 5; p += 1 + d[p] * 8; p += 1 + d[p] * 5;
    return p + 1 + d[p] * 13 - e;
  },
  // NPC·표지판 지우기 (중간 NPC 는 순서를 지키려고 안 보이게만 함)
  deleteOwner(a, o) {
    if (o.eventOff < 0) return '이 항목은 지울 수 없어요 (자동 이벤트)';
    const d = this.data, ev = this.off(a.scriptBank, a.eventsAddr), end = ev + this.eventsSize(ev);
    let p = ev + 2;
    p += 1 + d[p] * 5; p += 1 + d[p] * 8;
    const bgCount = p;
    p += 1 + d[p] * 5;
    const objCount = p, objStart = p + 1;
    if (o.isSign) { d.copyWithin(o.eventOff, o.eventOff + 5, end); d[bgCount]--; }
    else {
      const idx = (o.eventOff - objStart) / 13;
      if (idx === d[objCount] - 1) d[objCount]--;
      else { d[o.eventOff + 5] = 0xFF; d[o.eventOff + 6] = 0x00; }
    }
    this.dirty = true;
    this.loadArea(a);
    return null;
  }
});

// ===== 55-gift.js
// ================================================================ 선물 포켓몬 · 오박사 인트로 · 포켓몬 그림 (RomGift.cs · RomIntro.cs · RomSprite.cs 와 같음)
const ALL_TYPES = new Map(TYPES);
// get 이 들어 있는 메서드 묶음을 붙임 (Object.assign 은 get 을 그 자리에서 실행해 버림)
function mixin(target, src) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(src)); }

mixin(Rom.prototype, {
  // ------------------------------------------------ 포켓몬 앞·뒷모습 그림
  loadSprites() {
    if (this._spr) return;
    this._spr = true;
    this.picPtrOff = -1; this.monPalOff = -1; this.picBankFix = new Map();
    const d = this.data;
    const f = this.findPattern([0x21, -1, -1, 0xFA, -1, -1, 0x16, -1, 0xFE, 0xC9], 0x4000, d.length);
    this.picBankAdd = 0; this.picBanks = null;
    if (f >= 0) this.picPtrOff = this.off(d[f + 7], this.w(f + 1));
    else {
      // 크리스탈: 표의 뱅크 = 실제 뱅크 - $36 (FixPicBank), 그림은 "Pics 1"~"Pics 24" 뱅크에만
      const c = this.findPattern([0xFE, 0xC9, 0x28, 0x07, 0xFA, -1, -1, 0x16, -1, 0x18, 0x05, 0xFA, -1, -1, 0x16, -1, 0x21, -1, -1, 0x3D, 0x01, 0x06, 0x00, 0xCD], 0x4000, d.length);
      if (c >= 0) {
        this.picPtrOff = this.off(d[c + 8], this.w(c + 17));
        this.picBankAdd = 0x36;
        let lo = 255;
        for (let m = 0; m < 251; m++) lo = Math.min(lo, d[this.picPtrOff + m * 6] + 0x36, d[this.picPtrOff + m * 6 + 3] + 0x36);
        this.picBanks = [lo, lo + 23];
      }
    }
    const t = this.findPattern([0x13, -1, 0x14, -1, 0x1F, -1, 0xFF], 0x4000, d.length);
    if (t >= 0) { this.picBankFix.set(0x13, d[t + 1]); this.picBankFix.set(0x14, d[t + 3]); this.picBankFix.set(0x1F, d[t + 5]); }
    const cands = [];
    for (let g = 0x4000; ; g++) {
      g = this.findPattern([0x6F, 0x26, 0x00, 0x29, 0x29, 0x29, 0x01, -1, -1, 0x09, 0xC9], g, d.length);
      if (g < 0) break;
      cands.push(this.off(Math.floor(g / 0x4000), this.w(g + 7)));
    }
    for (const c of cands) if (d[c] === d[c + 4] && d[c + 1] === d[c + 5] && d[c + 2] === d[c + 6] && d[c + 3] === d[c + 7]) { this.monPalOff = c; break; }
    if (this.monPalOff < 0 && cands.length) this.monPalOff = cands[cands.length - 1];
  },
  get spritesAvailable() { this.loadSprites(); return this.picPtrOff >= 0 && this.monPalOff >= 0 && this.baseStatsOff >= 0; },
  picOff(mon, back) {
    const e = this.picPtrOff + (mon - 1) * 6 + (back ? 3 : 0);
    let bank = this.data[e] + this.picBankAdd;
    if (!this.picBankAdd && this.picBankFix.has(bank)) bank = this.picBankFix.get(bank);
    return this.off(bank, this.w(e + 1));
  },
  frontSize(mon) { const s = this.data[this.statOff(mon) + 17] & 0x0F; return s >= 5 && s <= 7 ? s : 7; },
  // 색 4개 (ABGR): 흰색, 밝은 색, 어두운 색, 검정
  monPalette(mon, shiny) {
    const o = this.monPalOff + mon * 8 + (shiny ? 4 : 0);
    return [0xFFFFFFFF, MapRender.c555(this.w(o)), MapRender.c555(this.w(o + 2)), 0xFF000000];
  },
  // 그림 → { img: Uint8Array(px*px) 색 번호, size: 칸 수 }. 타일은 세로줄 순서
  readPic(mon, back) {
    this.loadSprites();
    const tiles = back ? 6 : this.frontSize(mon);
    const raw = this.gfx.decompress(this.picOff(mon, back));
    const px = tiles * 8, img = new Uint8Array(px * px);
    for (let t = 0; t < tiles * tiles; t++) {
      const tx = Math.floor(t / tiles), ty = t % tiles;
      for (let y = 0; y < 8; y++) {
        const i = t * 16 + y * 2, lo = raw[i] || 0, hi = raw[i + 1] || 0;
        for (let x = 0; x < 8; x++) img[(ty * 8 + y) * px + tx * 8 + x] = ((lo >> (7 - x)) & 1) | (((hi >> (7 - x)) & 1) << 1);
      }
    }
    return { img, tiles };
  },
  // 포켓몬 앞모습 그림 → canvas (없으면 null)
  monPicture(mon, zoom) {
    try {
      if (!this.spritesAvailable || mon < 1 || mon > 251) return null;
      const { img, tiles } = this.readPic(mon, false), pal = this.monPalette(mon, false), n = tiles * 8;
      const id = new ImageData(n, n), buf = new Uint32Array(id.data.buffer);
      for (let i = 0; i < n * n; i++) buf[i] = pal[img[i]];
      const c = document.createElement('canvas'); c.width = n; c.height = n; c.getContext('2d').putImageData(id, 0, 0);
      const out = document.createElement('canvas'); out.width = out.height = 56 * (zoom || 1);
      const g = out.getContext('2d'); g.imageSmoothingEnabled = false;
      g.fillStyle = '#fff'; g.fillRect(0, 0, out.width, out.height);
      const s = n * (zoom || 1), o = (out.width - s) / 2;
      g.drawImage(c, o, out.height - s, s, s);
      return out;
    } catch (e) { return null; }
  },

  // ------------------------------------------------ 오박사 인트로
  findIntro() {
    if (this._intro) return;
    this._intro = true;
    this.introPicOff = this.introCryOff = -1;
    const d = this.data;
    for (let i = 4; i < 0x8000 - 14; i++) {
      if (d[i] === 0x08 && d[i + 1] === 0x3E && d[i + 3] === 0xCD && d[i + 6] === 0xCD && d[i + 9] === 0x21 && d[i + 12] === 0xC9 && d[i - 4] === 0x16) {
        this.introCryOff = i + 2;
        for (let j = i - 1; j >= Math.max(0, i - 0x200); j--)
          if (d[j] === 0x3E && d[j + 2] === 0xEA && d[j + 5] === 0xEA && d[j + 8] === 0xCD && d[j + 11] === 0x21) { this.introPicOff = j + 1; break; }
        break;
      }
    }
  },
  get hasIntro() { this.findIntro(); return this.introPicOff >= 0 || this.introCryOff >= 0; },
  get introPic() { this.findIntro(); return this.introPicOff >= 0 ? this.data[this.introPicOff] : 0; },
  get introCry() { this.findIntro(); return this.introCryOff >= 0 ? this.data[this.introCryOff] : 0; },
  setIntro(pic, cry) {
    this.findIntro();
    if (this.introPicOff >= 0) this.data[this.introPicOff] = pic;
    if (this.introCryOff >= 0) this.data[this.introCryOff] = cry;
    this.dirty = true;
  },

  // ------------------------------------------------ 선물 포켓몬
  giftsOf(o) { return this.gifts.filter(g => g.owner === o); },
  giftsIn(a) { return this.gifts.filter(g => g.area === a); },
  giftWhere(g) { return g.area.regionName + ' › ' + g.area.name + ' › ' + g.owner.name; },
  giftSpecies(g) { return this.data[g.off + 1]; },
  giftLevel(g) { return this.data[g.off + 2]; },
  giftItem(g) { return g.egg ? 0 : this.data[g.off + 3]; },
  giftHasPic(g) { return this.ownerPic.has(g.owner); },
  giftHasCry(g) { return this.ownerCry.has(g.owner); },
  giftPic(g) { const l = this.ownerPic.get(g.owner); return l ? this.data[l[0]] : 0; },
  giftCry(g) { const l = this.ownerCry.get(g.owner); return l ? this.data[l[0]] : 0; },
  setGiftPicCry(g, pic, cry) {
    let l;
    if (pic > 0 && (l = this.ownerPic.get(g.owner))) for (const off of l) this.data[off] = pic;
    if (cry > 0 && (l = this.ownerCry.get(g.owner))) for (const off of l) { this.data[off] = cry; this.data[off + 1] = 0; }
    this.dirty = true;
  },
  setGift(g, species, level, item) {
    const old = this.data[g.off + 1];
    this.data[g.off + 1] = species; this.data[g.off + 2] = level;
    if (!g.egg) this.data[g.off + 3] = item;
    const l = this.ownerPicCry.get(g.owner);
    if (old !== species && l) for (const off of l) if (this.data[off] === old) this.data[off] = species;
    this.dirty = true;
  },
  giftLen(g) { return this.data[g.off + 4] === 0 ? 5 : 9; },
  giftMovesAsm(g) {
    if (g.egg) return -1;
    const d = this.data, p = g.off + this.giftLen(g);
    if (d[p] !== 0x0E) return -1;
    const a = this.w(p + 2);
    if (!Rom.banked(a)) return -1;
    const asm = this.off(d[p + 1], a);
    return this.inRom(asm + 40) && (d[asm] === 0xFA || d[asm] === 0xC9) && d[asm + 3] === 0xB7 ? asm : -1;
  },
  giftMoves(g) {
    const d = this.data, asm = this.giftMovesAsm(g);
    if (asm < 0 || d[asm] !== 0xFA) return null;
    for (let p = asm; p < asm + 40; p++) {
      if (d[p] !== 0x11 || d[p + 1] !== 0x30 || d[p + 2] !== 0x00 || d[p + 3] !== 0x05) continue;
      let q = p + 9; const m = [];
      for (let i = 0; i < 4; i++) { if (d[q] !== 0x36) return null; m.push(d[q + 1]); q += i < 3 ? 3 : 2; }
      return m;
    }
    return null;
  },
  get partyMon1() {
    if (this._pm1 !== undefined) return this._pm1;
    const d = this.data, c = new Map();
    for (let i = 0; i < d.length - 6; i++)
      if (d[i] === 0x21 && d[i + 3] === 0x01 && d[i + 4] === 0x30 && d[i + 5] === 0x00) { const v = this.w(i + 1); if (v >= 0xC000 && v < 0xE000) c.set(v, (c.get(v) || 0) + 1); }
    const cand = [...c].filter(([, n]) => n >= 5).map(([v]) => v).sort((a, b) => a - b);
    this._pm1 = -1;
    for (const m of cand) {
      const cnt = m - 8; let uses = 0;
      for (let i = 0; i < d.length - 3; i++) if (d[i] === 0xFA && this.w(i + 1) === cnt) uses++;
      if (uses >= 20 && c.has(m + 2)) { this._pm1 = m; break; }
    }
    return this._pm1;
  },
  // 마지막으로 받은 포켓몬이 species 면 기술 4개·PP 를 바꾸는 코드
  movesAsmBytes(species, moves) {
    const mon1 = this.partyMon1;
    if (mon1 < 0) throw new Error('이 롬에서는 포켓몬 기술을 정하는 데 필요한 정보를 못 찾았어요 (기본 기술로 주세요)');
    const cnt = mon1 - 8, mv = mon1 + 2;
    const pp = moves.map(m => m > 0 && this.movesOff >= 0 ? this.data[this.moveOff(m) + 5] : 0);
    const c = [0xFA, cnt & 0xff, cnt >> 8, 0xB7, 0xC8, 0x47, 0x21, cnt & 0xff, cnt >> 8, 0x5F, 0x16, 0x00, 0x19, 0x7E, 0xFE, species, 0xC0,
      0x21, mv & 0xff, mv >> 8, 0x11, 0x30, 0x00, 0x05, 0x28, 0x03, 0x19, 0x18, 0xFA];
    for (let i = 0; i < 4; i++) { c.push(0x36, moves[i]); if (i < 3) c.push(0x23); }
    c.push(0x11, 0x12, 0x00, 0x19);
    for (let i = 0; i < 4; i++) { c.push(0x36, pp[i]); if (i < 3) c.push(0x23); }
    c.push(0xC9);
    return c;
  },
  // 선물 포켓몬의 기술 정하기. moves = null 이면 기본 기술로. 실패하면 이유
  setGiftMoves(g, moves) {
    const d = this.data;
    if (g.egg) return moves ? '알로 주는 포켓몬은 기술을 따로 정할 수 없어요' : null;
    const asm = this.giftMovesAsm(g);
    if (!moves) { if (asm >= 0) { d[asm] = 0xC9; this.dirty = true; } return null; }
    if (moves.every(m => m <= 0)) return '기술을 하나 이상 고르세요';
    let code;
    try { code = this.movesAsmBytes(d[g.off + 1], moves); } catch (e) { return e.message; }
    if (asm >= 0) { d.set(code, asm); this.dirty = true; return null; }
    const bank = Math.floor(g.off / 0x4000), len = this.giftLen(g);
    const sc = this.allocInBank(bank, len + 4 + 3);
    if (sc < 0) return '이 스크립트가 있는 곳에 빈 공간이 부족해요';
    const a = this.alloc(code.length + 1);
    if (!a) return '롬에 남은 빈 공간이 부족해요';
    d.set(code, a.p); d[a.p + code.length] = a.fill === 0xFF ? 0 : 0xFF;
    d.copyWithin(sc, g.off, g.off + len);
    const aa = 0x4000 + a.p % 0x4000, back = 0x4000 + (g.off + len) % 0x4000, to = 0x4000 + sc % 0x4000;
    d.set([0x0E, Math.floor(a.p / 0x4000), aa & 0xFF, aa >> 8, 0x03, back & 0xFF, back >> 8], sc + len);
    d[g.off] = 0x03; d[g.off + 1] = to & 0xFF; d[g.off + 2] = to >> 8;
    g.off = sc; this.dirty = true;
    return null;
  },

  // ------------------------------------------------ 포켓몬을 바꿀 때 대사 속 이름·타입도 같이
  monType(mon) { return mon >= 1 && mon <= 251 ? this.data[this.statOff(mon) + 7] : -1; },
  replaceMonInText(s, oldMon, newMon) {
    const N = this.pokemonNames;
    if (oldMon === newMon || oldMon < 1 || newMon < 1 || newMon >= N.length || oldMon >= N.length) return s;
    s = replaceWord(s, N[oldMon], N[newMon]);
    const ot = ALL_TYPES.get(this.monType(oldMon)), nt = ALL_TYPES.get(this.monType(newMon));
    if (ot && nt && ot !== nt)
      for (const [a, b] of [['포켓몬', '포켓몬'], [' 포켓몬', ' 포켓몬'], ['의 포켓몬', '의 포켓몬'], ['의\n포켓몬', '의\n포켓몬'], ['타입', '타입'], [' 타입', ' 타입']])
        s = s.split(ot + a).join(nt + b);
    return s;
  },
  setTextChecked(t, s) { t.edited = s === t.original ? null : s; this.validate(t); },
  mentionedOtherMon(g) {
    const cur = this.giftSpecies(g); let best = 0, bestLen = 0;
    for (const t of g.owner.texts)
      for (let m = 1; m <= 251 && m < this.pokemonNames.length; m++) {
        const n = this.pokemonNames[m];
        if (m === cur || !n || n.length < 2 || n.length <= bestLen) continue;
        if (t.current.includes(n)) { best = m; bestLen = n.length; }
      }
    return best;
  },
  updateGiftTexts(g, oldMon, newMon) {
    let n = 0;
    for (const t of g.owner.texts) {
      const s = this.replaceMonInText(t.current, oldMon, newMon);
      if (s === t.current) continue;
      this.setTextChecked(t, s); n++;
    }
    return n;
  },
  textsMentioning(mon) {
    const res = [];
    if (mon < 1 || mon >= this.pokemonNames.length) return res;
    const name = this.pokemonNames[mon], where = new Map();
    for (const a of this.allAreas) for (const o of a.owners.concat(a.extras)) for (const t of o.texts) if (!where.has(t)) where.set(t, a.regionName + ' › ' + a.name + ' › ' + o.name);
    for (const t of [...this.texts.values()].sort((x, y) => x.addr - y.addr))
      if (t.current.includes(name)) res.push([t, where.get(t) || '기타 대사 (' + t.addr.toString(16).toUpperCase() + ')']);
    return res;
  }
});

function hasBatchim(c) { const k = c.charCodeAt(0); return k >= 0xAC00 && k <= 0xD7A3 && (k - 0xAC00) % 28 !== 0; }
// 낱말을 바꾸고 바로 뒤 조사(가/이, 를/을, 는/은, 와/과, 로/으로)를 새 낱말 받침에 맞춤
function replaceWord(text, oldW, newW) {
  if (!oldW || oldW === newW) return text;
  const pairs = [['가', '이'], ['를', '을'], ['는', '은'], ['와', '과']];
  const last = w => w[w.length - 1];
  const oldB = hasBatchim(last(oldW)), newB = hasBatchim(last(newW));
  const isR = w => (last(w).charCodeAt(0) - 0xAC00) % 28 === 8;
  const oldRo = oldB && !isR(oldW) ? '으로' : '로', newRo = newB && !isR(newW) ? '으로' : '로';
  let out = '', i = 0;
  for (;;) {
    const k = text.indexOf(oldW, i);
    if (k < 0) { out += text.substring(i); break; }
    out += text.substring(i, k) + newW;
    i = k + oldW.length;
    if (text.startsWith(oldRo, i)) { out += newRo; i += oldRo.length; continue; }
    if (i < text.length) for (const p of pairs) if (text[i] === p[oldB ? 1 : 0]) { out += p[newB ? 1 : 0]; i++; break; }
  }
  return out;
}

// ===== 60-events.js
// ================================================================ NPC 이벤트 만들기·읽기 (RomEvents.cs · RomEventRead.cs · RomAi.cs 와 같음)
// 명령 번호는 한글판 금·은 (롬 안의 실제 스크립트로 확인한 것만 씀)
const EV = { Talk: 0, TalkOnce: 1, Choice: 2, Item: 3, Trade: 4, Pokemon: 5, Wild: 6, Trainer: 7, Shop: 8, Heal: 9, Warp: 10, EyeTrainer: 11 };
const EV_NAMES = ['말하기', '처음·다음 대사가 다른 NPC', '예/아니요 선택지', '아이템 주기', '아이템 교환',
  '포켓몬 주기', '야생 포켓몬 배틀', '말 걸면 트레이너 배틀', '상점', '포켓몬 회복 (간호순)', '순간이동 (예를 고르면)', '눈 마주치면 배틀하는 트레이너'];
const EV_TEXTS = [
  ['대사'], ['처음 말 걸 때 대사', '그 다음부터 대사'], ['질문 (예/아니요가 나옴)', '예를 골랐을 때 대사', '아니요를 골랐을 때 대사'],
  ['아이템 주기 전 대사', '받은 뒤 다시 말 걸면 대사'], ['교환하자는 질문 (예/아니요)', '교환한 뒤 대사', '거절하거나 아이템이 없을 때 대사'],
  ['포켓몬 주기 전 대사', '준 뒤 다시 말 걸면 대사'], ['배틀 전 대사 (울음소리 뒤 배틀)'], ['배틀 전 대사', '배틀에서 이겼을 때 상대 대사', '배틀 후 다시 말 걸면 대사'],
  [], [], ['데려다줄까? 질문 (예/아니요)', '아니요를 골랐을 때 대사'], ['눈 마주쳤을 때 대사', '배틀에서 이겼을 때 상대 대사', '배틀 후 말 걸면 대사']];
const evCanRepeat = k => k === EV.Item || k === EV.Trade || k === EV.Pokemon || k === EV.Wild || k === EV.Trainer;
const evCanVanish = k => k === EV.Pokemon || k === EV.Trainer || k === EV.Wild || k === EV.EyeTrainer;
// 대사 칸 이름. 여러 번 하는 아이템 주기·트레이너는 "끝난 뒤 대사"가 없음
function evTextLabels(k, repeat) { const l = EV_TEXTS[k]; return repeat && (k === EV.Item || k === EV.Trainer) ? l.slice(0, l.length - 1) : l; }
function newEvent(k) { return { kind: k || 0, t1: '', t2: '', t3: '', item: 0, qty: 1, item2: 0, qty2: 1, species: 0, level: 5, trainerClass: 0, trainerId: 0, mart: 0, warpGroup: 0, warpMap: 0, warpX: 0, warpY: 0, vanish: false, repeat: false, moves: null, sight: 3 }; }
const evNeedsFlag = e => e.kind === EV.TalkOnce || e.kind === EV.EyeTrainer || (evCanRepeat(e.kind) && !e.repeat);
const evHides = e => !e.repeat && (e.kind === EV.Wild || (e.vanish && evCanVanish(e.kind)));

// 스크립트 조립기: 이름표(라벨)로 점프하고, 대사는 스크립트 뒤에 붙임
// 명령 번호는 한글판 기준으로 쓰고, build 할 때 롬 버전 번호로 바꿈 (걷기 데이터 등 raw 칸은 그대로)
class ScriptBuilder {
  constructor() { this.code = []; this.labels = new Map(); this.fixes = []; this.texts = []; this.raws = []; }
  op(...b) { this.code.push(...b.map(x => x & 0xff)); return this; }
  data(...b) { const s = this.code.length; this.op(...b); this.raws.push([s, this.code.length]); return this; }
  rawBegin() { this.rawAt = this.code.length; return this; }
  rawEnd() { this.raws.push([this.rawAt, this.code.length]); return this; }
  w16(v) { this.code.push(v & 0xff, (v >> 8) & 0xff); return this; }
  to(op, label) { this.code.push(op); this.fixes.push([this.code.length, label]); this.code.push(0, 0); return this; }
  label(name) { this.labels.set(name, this.code.length); return this; }
  ref(label) { this.fixes.push([this.code.length, label]); this.code.push(0, 0); return this; }
  textRef(name, bytes) { if (!this.texts.some(t => t[0] === name)) this.texts.push([name, bytes]); return this.ref(name); }
  text(op, name, bytes) { if (!this.texts.some(t => t[0] === name)) this.texts.push([name, bytes]); return this.to(op, name); }
  get length() { return this.code.length + this.texts.reduce((s, t) => s + t[1].length, 0); }
  // baseAddr: 이 스크립트가 놓일 뱅크 안 주소 ($4000~$7FFF)
  build(baseAddr, rom) {
    const all = this.code.slice(), pos = new Map(this.labels);
    if (rom && rom.sv !== ScriptSet.kr) {
      for (let p = 0; p < this.code.length;) {
        const raw = this.raws.find(r => p >= r[0] && p < r[1]);
        if (raw) { p = raw[1]; continue; }
        const k = all[p], len = k === 0x2D ? (all[p + 4] !== 0 ? 9 : 5) : ScriptSet.kr.len[k];
        all[p] = rom.opRom(k);
        p += Math.max(1, len);
      }
    }
    for (const [name, b] of this.texts) { pos.set(name, all.length); all.push(...b); }
    for (const [at, name] of this.fixes) { const a = baseAddr + pos.get(name); all[at] = a & 0xff; all[at + 1] = a >> 8; }
    return all;
  }
}

mixin(Rom.prototype, {
  // 스크립트를 모든 갈래로 따라가며 명령 목록을 모음 (주소 순서) → [[명령, 인자…], …]
  // 각 명령의 .bank = 그 명령이 있는 뱅크 (대사 주소는 이 뱅크 기준). farsjump·farscall 도 따라감
  scriptOps(bank, addr) {
    const d = this.data, res = new Map(), todo = [];
    if (Rom.banked(addr)) todo.push([this.off(bank, addr), bank]);
    while (todo.length && res.size < 300) {
      let [pc, bk] = todo.pop();
      for (let n = 0; n < 120 && this.inRom(pc + 8); n++) {
        if (res.has(pc)) break;
        // 명령 번호는 한글판 기준으로 바꿔서 돌려줌 (인자는 그대로)
        const op = this.opK(d[pc]), len = this.opLen(pc);
        if (len <= 0) break;
        const ent = Array.from(d.subarray(pc, pc + len)); ent[0] = op; ent.bank = bk;
        res.set(pc, ent);
        if (op === 0x08 || op === 0x09 || op === 0x03 || op === 0x00) { const t = this.w(pc + 1); if (Rom.banked(t)) todo.push([this.off(bk, t), bk]); }
        if (op === 0x06 || op === 0x07 || op === 0x0A || op === 0x0B) { const t = this.w(pc + 2); if (Rom.banked(t)) todo.push([this.off(bk, t), bk]); }
        if (op === 0x01 || op === 0x04) { const fb = d[pc + 1], t = this.w(pc + 2); if (fb > 0 && fb * 0x4000 < d.length && Rom.banked(t)) todo.push([this.off(fb, t), fb]); }
        if (op === 0x04) break;
        if ([0x03, 0x91, 0x90, 0x92, 0x93, 0x52, 0x53, 0x0C, 0x3C, 0x8F, K_FARJUMPTEXT].includes(op)) break;
        pc += len;
      }
    }
    return [...res.keys()].sort((a, b) => a - b).map(k => res.get(k));
  },
  eventStarts(a) {
    const d = this.data;
    let p = this.off(a.scriptBank, a.eventsAddr) + 2;
    p += 1 + d[p] * 5; p += 1 + d[p] * 8;
    const bg = p + 1;
    p += 1 + d[p] * 5;
    return { bg, obj: p + 1 };
  },
  // 이벤트 표 안의 순번 (NPC 끼리, 표지판 끼리)
  eventIndex(a, o) { if (o.eventOff < 0) return -1; const s = this.eventStarts(a); return o.isSign ? (o.eventOff - s.bg) / 5 : (o.eventOff - s.obj) / 13; },
  ownerAt(a, sign, idx) { return a.owners.concat(a.extras).find(o => o.eventOff >= 0 && !!o.isSign === sign && this.eventIndex(a, o) === idx) || null; },
  warps(a) {
    const d = this.data, res = [];
    let e = this.off(a.scriptBank, a.eventsAddr) + 2;
    const n = d[e++];
    for (let i = 0; i < n && i < 64; i++, e += 5) res.push([d[e + 1], d[e]]);
    return res;
  },
  collisionOff(a) {
    const g = this.gfx;
    if (!g.ok) return -1;
    const ts = g.off(g.tilesetBank, g.tilesetPtr + a.tileset * 15);
    return this.off(this.data[ts + 6], this.w(ts + 7));
  },
  getBlock(a, bx, by) { return this.data[this.off(a.blocksBank, a.blocksAddr) + by * a.width + bx]; },
  collisionAt(a, cx, cy) {
    if (cx < 0 || cy < 0 || cx >= a.width * 2 || cy >= a.height * 2) return -1;
    const c = this.collisionOff(a);
    if (c < 0) return -1;
    const p = c + this.getBlock(a, cx >> 1, cy >> 1) * 4 + (cy & 1) * 2 + (cx & 1);
    return p < this.data.length ? this.data[p] : -1;
  },
  allocFlag() {
    // 원본에서 쓰지 않는 마지막 이벤트 번호들(1932~2047) 중 롬 어디에서도 안 쓰는 것
    for (let f = 2047; f >= 1932; f--) if (!this.usedFlags.has(f)) { this.usedFlags.add(f); return f; }
    return -1;
  },
  // 같은 뱅크 끝의 작은 빈칸 (findFree 보다 여유를 적게 둠) — 4바이트 점프 같은 짧은 것만
  allocSmallInBank(bank, n) {
    const r = this.smallFree && this.smallFree.get(bank);
    if (!r || r[1] - r[0] < n) return -1;
    const p = r[0]; r[0] += n; return p;
  },
  // 스크립트를 지도 뱅크에 놓음 → 뱅크 안 주소 (-1 = 실패). 그 뱅크가 꽉 차면 다른 뱅크에 두고 4바이트 farsjump 만 지도 뱅크에
  placeScript(bank, sb, sameBankOnly) {
    let p = this.allocInBank(bank, sb.length);
    if (p >= 0) { const addr = 0x4000 + p % 0x4000; this.data.set(sb.build(addr, this), p); return addr; }
    if (sameBankOnly) return -1;
    const stub = this.allocSmallInBank(bank, 4);
    if (stub < 0) return -1;
    const far = this.alloc(sb.length);
    if (!far) return -1;
    const fb = Math.floor(far.p / 0x4000), fa = 0x4000 + far.p % 0x4000;
    this.data.set(sb.build(fa, this), far.p);
    this.data.set([this.opRom(0x04), fb, fa & 0xff, fa >> 8], stub);   // farsjump
    return 0x4000 + stub % 0x4000;
  },
  textBytes(text) { return [0x00, ...this.cs.encode(text, { firstBreak: true }, true), this.cs.DONE]; },

  // 새 트레이너 팀을 직업 목록 맨 뒤에 추가하고 번호를 돌려줌 (실패하면 오류)
  addTrainerParty(cls, p) {
    const tc = this.trainerClasses.find(c => c.cls === cls);
    if (!tc) throw new Error('트레이너 직업을 찾지 못했어요');
    if (tc.tail.length) throw new Error('이 직업은 데이터 형식이 달라서 새 트레이너를 넣을 수 없어요. 다른 직업을 골라주세요');
    tc.parties.push(p);
    const err = this.writeTrainerClass(tc);
    if (err) { tc.parties.pop(); throw new Error(err); }
    return tc.parties.length;
  },
  trainerList() {
    const l = [];
    for (const tc of this.trainerClasses) tc.parties.forEach((p, i) => l.push({ cls: tc.cls, id: i + 1, label: this.trainerLabel(tc.cls, i + 1) }));
    return l;
  },

  // ------------------------------------------------ 이벤트 검사 · 조립
  checkEventText(t, what) {
    if (!t.trim()) return what + ' 칸이 비어 있어요';
    try { this.cs.encode(t, { firstBreak: true }, true); } catch (e) { return what + ': ' + e.message; }
    const long = t.replace(/\r/g, '').split('\n').find(l => l.length > 18);
    if (long != null) return what + ': 한 줄이 너무 길어요 (18자 이하) — "' + long + '"';
    return null;
  },
  checkEvent(ev) {
    const labels = evTextLabels(ev.kind, ev.repeat && evCanRepeat(ev.kind)), ts = [ev.t1, ev.t2, ev.t3];
    for (let i = 0; i < labels.length; i++) { const e = this.checkEventText(ts[i], labels[i]); if (e) return e; }
    const hasTeam = () => this.trainerList().some(t => t.cls === ev.trainerClass && t.id === ev.trainerId);
    switch (ev.kind) {
      case EV.Item: if (ev.item < 1 || ev.item >= this.itemNames.length) return '줄 아이템을 고르세요'; break;
      case EV.Trade: if (ev.item < 1 || ev.item2 < 1) return '받을 아이템과 줄 아이템을 고르세요'; if (ev.item === ev.item2) return '같은 아이템끼리는 교환할 수 없어요'; break;
      case EV.Pokemon: case EV.Wild:
        if (ev.species < 1 || ev.species > 251) return '포켓몬을 고르세요';
        if (ev.level < 1 || ev.level > 100) return '레벨은 1~100'; break;
      case EV.Trainer: if (!hasTeam()) return '트레이너 팀을 고르세요'; break;
      case EV.EyeTrainer: if (!hasTeam()) return '트레이너 팀을 고르세요'; if (ev.sight < 1 || ev.sight > 5) return '시야는 1~5칸'; break;
      case EV.Shop: if (!this.marts.some(m => m.id === ev.mart)) return '상점 물건 목록을 고르세요'; break;
      case EV.Warp: {
        const dest = this.allAreas.find(x => x.group === ev.warpGroup && x.map === ev.warpMap);
        if (!dest) return '도착할 구역을 고르세요';
        if (ev.warpX < 0 || ev.warpY < 0 || ev.warpX >= dest.width * 2 || ev.warpY >= dest.height * 2) return '도착 좌표가 그 지도 밖이에요 (걸음 칸 가로 0~' + (dest.width * 2 - 1) + ', 세로 0~' + (dest.height * 2 - 1) + ')';
        break;
      }
    }
    return null;
  },
  customMoves(e) {
    if (e.kind !== EV.Pokemon || !e.moves) return false;
    const d = this.defaultMoves(e.species, e.level);
    return e.moves.some((m, i) => m !== d[i]);
  },
  // 이벤트 스크립트 조립. objId = 이 NPC 의 오브젝트 번호(사라지기용), flag = 한 번만 하는 이벤트용 번호(-1 = 여러 번), asm = 기술 코드 위치
  buildEvent(ev, objId, flag, asm) {
    const s = new ScriptBuilder(), T = t => this.textBytes(t);
    const check = label => { if (flag >= 0) { s.op(0x31).w16(flag); s.to(0x09, label); } };   // checkevent, iftrue
    const set = () => { if (flag >= 0) s.op(0x33).w16(flag); };                                // setevent
    const vanish = evHides(ev) && flag >= 0;
    switch (ev.kind) {
      case EV.Talk: s.text(0x52, 't1', T(ev.t1)); break;                                        // jumptextfaceplayer
      case EV.TalkOnce:
        s.op(0x6B, 0x48); check('after');
        s.text(0x4D, 't1', T(ev.t1)).op(0x54, 0x4A); set(); s.op(0x91);
        s.label('after').text(0x4D, 't2', T(ev.t2)).op(0x54, 0x4A, 0x91);
        break;
      case EV.Choice:
        s.op(0x6B, 0x48).text(0x4D, 't1', T(ev.t1)).op(0x4F).to(0x08, 'no');
        s.text(0x4D, 't2', T(ev.t2)).op(0x54, 0x4A, 0x91);
        s.label('no').text(0x4D, 't3', T(ev.t3)).op(0x54, 0x4A, 0x91);
        break;
      case EV.Item:
        s.op(0x6B, 0x48); check('after');
        s.text(0x4D, 't1', T(ev.t1)).op(0x55).op(0x9E, ev.item, Math.max(1, ev.qty)).to(0x08, 'end');
        set();
        if (flag >= 0) s.label('after').text(0x4D, 't2', T(ev.t2)).op(0x54);
        s.label('end').op(0x4A, 0x91);
        break;
      case EV.Trade:
        s.op(0x6B, 0x48); check('done');
        s.text(0x4D, 't1', T(ev.t1)).op(0x4F).to(0x08, 'no');
        s.op(0x21, ev.item).to(0x08, 'no');                       // checkitem
        s.op(0x9E, ev.item2, Math.max(1, ev.qty2)).to(0x08, 'end');
        s.op(0x20, ev.item, 1); set();                              // takeitem
        s.label('done').text(0x4D, 't2', T(ev.t2)).op(0x54).to(0x03, 'end');
        s.label('no').text(0x4D, 't3', T(ev.t3)).op(0x54);
        s.label('end').op(0x4A, 0x91);
        break;
      case EV.Pokemon:
        s.op(0x6B, 0x48); check('after');
        s.text(0x4D, 't1', T(ev.t1)).op(0x55);
        s.op(0x2D, ev.species, ev.level, 0, 0);                    // givepoke
        if (asm >= 0) s.op(0x0E, Math.floor(asm / 0x4000)).w16(0x4000 + asm % 0x4000);   // callasm
        set();
        if (vanish) s.op(0x4A, 0x6E, objId, 0x91);                  // closetext, disappear
        s.label('after').text(0x4D, 't2', T(ev.t2)).op(0x54, 0x4A, 0x91);
        break;
      case EV.Wild:
        s.op(0x6B, 0x48).text(0x4D, 't1', T(ev.t1)).op(0x84).w16(ev.species).op(0x86, 0x54, 0x4A);
        s.op(0x5D, ev.species, ev.level, 0x5F);                    // loadwildmon, startbattle
        if (vanish) s.op(0x6E, objId);
        set(); s.op(0x60, 0x91);
        break;
      case EV.Trainer:
        s.op(0x6B, 0x48); check('after');
        s.text(0x4D, 't1', T(ev.t1)).op(0x54, 0x4A);
        s.text(0x64, 't2', T(ev.t2)).w16(0);                       // winlosstext
        s.op(0x5E, ev.trainerClass, ev.trainerId, 0x5F, 0x60);     // loadtrainer, startbattle, reloadmapafterbattle
        set();
        if (vanish) s.op(0x6E, objId);
        s.op(0x91);
        if (flag >= 0) s.label('after').text(0x4D, 't3', T(ev.t3)).op(0x54, 0x4A, 0x91);
        break;
      case EV.Shop: s.op(0x6B, 0x48, 0x94, 0).w16(ev.mart).op(0x4A, 0x91); break;
      case EV.Heal: s.op(0x0C, 0x00, 0x00); break;                 // jumpstd 0 = 간호순
      case EV.EyeTrainer:
        s.rawBegin().w16(flag).op(ev.trainerClass, ev.trainerId).textRef('t1', T(ev.t1)).textRef('t2', T(ev.t2)).w16(0).ref('after').rawEnd();
        s.label('after').op(0x66, 0x48).text(0x4D, 't3', T(ev.t3)).op(0x54, 0x4A, 0x91);
        break;
      case EV.Warp:
        s.op(0x6B, 0x48).text(0x4D, 't1', T(ev.t1)).op(0x4F).to(0x08, 'no');
        s.op(0x4A, 0x3C, ev.warpGroup, ev.warpMap, ev.warpX, ev.warpY, 0x91);
        s.label('no').text(0x4D, 't2', T(ev.t2)).op(0x54, 0x4A, 0x91);
        break;
    }
    return s;
  },
  // 이벤트 번호·기술 코드 준비 → { flag, asm } (실패하면 오류)
  prepareEvent(e, reuseFlag) {
    let flag = -1, asm = -1;
    if (evNeedsFlag(e) && reuseFlag >= 1932 && reuseFlag <= 2047) flag = reuseFlag;
    else if (evNeedsFlag(e)) { flag = this.allocFlag(); if (flag < 0) throw new Error('쓸 수 있는 이벤트 번호가 없어요'); }
    if (this.customMoves(e)) {
      try {
        const c = this.movesAsmBytes(e.species, e.moves);
        const a = this.alloc(c.length + 1);
        if (!a) throw new Error('롬에 남은 빈 공간이 부족해요');
        this.data.set(c, a.p); this.data[a.p + c.length] = a.fill === 0xFF ? 0 : 0xFF;
        asm = a.p;
      } catch (err) { if (flag >= 0) this.usedFlags.delete(flag); throw err; }
    }
    return { flag, asm };
  },

  // 새 NPC 를 이벤트와 함께 놓기. 실패하면 이유, 안내가 있으면 { note }
  addEventNpc(a, e, x, y, sprite, move) {
    const err = this.checkEvent(e);
    if (err) return err;
    const d = this.data, ev = this.off(a.scriptBank, a.eventsAddr), size = this.eventsSize(ev);
    const pcount = this.eventStarts(a).obj - 1, nObj = d[pcount];
    if (nObj >= 15) return '이 구역은 NPC가 너무 많아서 더 넣을 수 없어요 (최대 15명)';
    let prep;
    try { prep = this.prepareEvent(e, -1); } catch (x) { return x.message; }
    const { flag, asm } = prep;
    const sb = this.buildEvent(e, nObj + 2, flag, asm), eye = e.kind === EV.EyeTrainer;
    const A = off => 0x4000 + off % 0x4000;
    const fail = () => { if (flag >= 0) this.usedFlags.delete(flag); return '이 구역의 데이터 공간이 부족해서 NPC를 더 넣을 수 없어요'; };
    // 이벤트 표·NPC·스크립트를 한 번에 → 안 되면 이벤트 표만 지도 뱅크, 스크립트는 placeScript (다른 뱅크 + 점프)
    let p = this.allocInBank(a.scriptBank, size + 13 + sb.length), scriptAddr;
    if (p >= 0) { scriptAddr = A(p + size + 13); d.set(sb.build(scriptAddr, this), p + size + 13); }
    else {
      p = this.allocInBank(a.scriptBank, size + 13);
      if (p < 0) p = this.allocSmallInBank(a.scriptBank, size + 13);
      if (p < 0) return fail();
      scriptAddr = this.placeScript(a.scriptBank, sb, eye);
      if (scriptAddr < 0) return fail();
    }
    d.copyWithin(p, ev, ev + size);
    d[p + (pcount - ev)] = nObj + 1;
    const obj = p + size;
    const hide = evHides(e) && flag >= 0 ? flag : 0xFFFF;
    d.set([sprite, y + 4, x + 4, move, move === 0x02 ? 0x11 : 0x00, 0xFF, 0xFF, eye ? 2 : 0, eye ? e.sight : 0, scriptAddr & 0xff, scriptAddr >> 8, hide & 0xff, hide >> 8], obj);
    a.eventsAddr = A(p);
    d[a.attrOff + 9] = a.eventsAddr & 0xff; d[a.attrOff + 10] = a.eventsAddr >> 8;
    this.dirty = true;
    this.loadArea(a);
    const note = this.ensureOutdoorSprite(a, sprite);
    return note ? { note } : null;
  },

  // 이미 있는 NPC 의 말 걸었을 때 이벤트를 새 것으로 (모습·위치·움직임은 그대로)
  setNpcEvent(a, o, e, reuseFlag) {
    if (!o || !o.isObject) return 'NPC 를 먼저 고르세요 (표지판은 안 돼요)';
    const err = this.checkEvent(e);
    if (err) return err;
    const idx = this.eventIndex(a, o);
    let prep;
    try { prep = this.prepareEvent(e, reuseFlag); } catch (x) { return x.message; }
    const { flag, asm } = prep;
    const sb = this.buildEvent(e, idx + 2, flag, asm), eye = e.kind === EV.EyeTrainer;
    // 눈 마주침 트레이너 머리글은 지도 뱅크 안에 있어야 함
    const addr = this.placeScript(a.scriptBank, sb, eye);
    if (addr < 0) { if (flag >= 0) this.usedFlags.delete(flag); return '이 구역의 데이터 공간이 부족해요'; }
    const d = this.data, ob = o.eventOff;
    d[ob + 7] = (d[ob + 7] & 0xF0) | (eye ? 2 : 0);
    d[ob + 8] = eye ? e.sight : 0;
    d[ob + 9] = addr & 0xff; d[ob + 10] = addr >> 8;
    if (evHides(e) && flag >= 0) { d[ob + 11] = flag & 0xff; d[ob + 12] = flag >> 8; }
    this.dirty = true;
    this.loadArea(a);
    return null;
  },

  // ------------------------------------------------ NPC 가 지금 무슨 이벤트를 하는지
  textAt(bank, addr) { if (!Rom.banked(addr)) return ''; const t = this.parseText(this.off(bank, addr), 0); return t ? t.current : ''; },
  readMovesAsm(p) {
    const d = this.data;
    for (let i = p; i < p + 40 && i + 12 < d.length; i++)
      if (d[i] === 0x36 && d[i + 2] === 0x23 && d[i + 3] === 0x36 && d[i + 5] === 0x23 && d[i + 6] === 0x36 && d[i + 8] === 0x23 && d[i + 9] === 0x36 && d[i - 1] === 0xFA)
        return [d[i + 1], d[i + 4], d[i + 7], d[i + 10]];
    return null;
  },
  readNpcEvent(a, o) {
    const info = { ev: null, summary: '', lines: [], flag: -1 };
    const short1 = s => { s = s.replace(/\n/g, ' '); return s.length > 40 ? s.substring(0, 40) + '…' : s; };
    if (!o || o.eventOff < 0) { info.summary = '자동 이벤트'; return info; }
    if (o.isSign) { info.summary = '표지판·조사하는 곳'; info.lines.push(...o.texts.map(t => '대사: ' + RAW + short1(t.current))); return info; }
    const d = this.data, e = o.eventOff, bank = a.scriptBank;
    const type = d[e + 7] & 0x0F, ptr = this.w(e + 9), hide = this.w(e + 11);
    const T = x => this.textAt(bank, x);
    const opText = ops => ops.filter(v => v[0] === 0x4D || v[0] === 0x52 || v[0] === 0x53).map(v => this.textAt(v.bank, v[1] | v[2] << 8)).filter(s => s);
    if (type === 1) { info.summary = '아이템 볼'; return info; }
    if (type === 2) {
      const h = this.off(bank, ptr), tflag = this.w(h), cls = d[h + 2], id = d[h + 3];
      const after = this.scriptOps(bank, this.w(h + 10)), at = opText(after);
      const tev = Object.assign(newEvent(EV.EyeTrainer), { trainerClass: cls, trainerId: id, sight: Math.max(1, Math.min(5, d[e + 8])),
        t1: T(this.w(h + 4)), t2: T(this.w(h + 6)), t3: at[0] || '', vanish: hide === tflag });
      if (!tev.t3) tev.t3 = tev.t2;
      info.ev = tev; info.flag = tflag;
      info.summary = '눈 마주치면 배틀하는 트레이너';
      info.lines.push('팀: ' + this.trainerLabel(cls, id));
      info.lines.push('시야: ' + d[e + 8] + '칸' + (tev.vanish ? ' · 이기면 사라짐' : ''));
      for (const t of [...new Set([tev.t1, tev.t2, tev.t3].filter(x => x))]) info.lines.push('대사: ' + RAW + short1(t));
      if (after.length > 6) info.lines.push('⚠ 배틀 후 스크립트에 다른 동작도 있어요. 이벤트 탭으로 바꾸면 그 동작은 없어져요');
      return info;
    }
    const ops = this.scriptOps(bank, ptr);
    const has = op => ops.some(v => v[0] === op), first = op => ops.find(v => v[0] === op);
    const texts = [...new Set(ops.filter(v => v[0] === 0x4D || v[0] === 0x52 || v[0] === 0x53 || v[0] === 0x64).map(v => this.textAt(v.bank, v[1] | v[2] << 8)).filter(s => s))];
    const chk = first(0x31), st = first(0x33);
    const flag = chk ? (chk[1] | chk[2] << 8) : st && (st[1] | st[2] << 8) === hide ? hide : -1;
    const once = flag >= 0 && ops.some(v => v[0] === 0x33 && (v[1] | v[2] << 8) === flag);
    const vanish = has(0x6E) || (once && hide === flag);
    let ev = Object.assign(newEvent(0), { repeat: !once, vanish });
    if (texts[0]) ev.t1 = texts[0]; if (texts[1]) ev.t2 = texts[1]; if (texts[2]) ev.t3 = texts[2];
    info.flag = once ? flag : -1;
    // 이 편집기가 만든 farsjump 점프(4바이트)는 스토리 동작이 아님
    const story = ops.some(v => [0x69, 0x6A, 0x12, 0x14, 0x0F, 0x01, 0x6F, 0x7A, 0x79].includes(v[0]) || (v[0] === 0x04 && ops.indexOf(v) > 0));
    const core = ops.filter(v => v[0] !== 0x04);
    if (core.length === 1 && core[0][0] === 0x0C && core[0][1] === 0 && core[0][2] === 0) { ev.kind = EV.Heal; info.summary = '포켓몬 회복 (간호순)'; }
    else if (has(0x94)) { const m = first(0x94); ev.kind = EV.Shop; ev.mart = m[2] | m[3] << 8; info.summary = '상점'; info.lines.push('물건 목록 ' + ev.mart + '번'); }
    else if (has(0x3C)) {
      const w = first(0x3C); Object.assign(ev, { kind: EV.Warp, warpGroup: w[1], warpMap: w[2], warpX: w[3], warpY: w[4] });
      const dd = this.allAreas.find(x => x.group === w[1] && x.map === w[2]);
      info.summary = '순간이동'; info.lines.push('도착: ' + (dd ? dd.regionName + ' ' + dd.name : w[1] + '-' + w[2]) + ' (' + w[3] + ', ' + w[4] + ')');
    }
    else if (has(0x5D)) { const w = first(0x5D); Object.assign(ev, { kind: EV.Wild, species: w[1], level: w[2] }); info.summary = '야생 포켓몬 배틀'; info.lines.push(this.monName(w[1]) + ' Lv' + w[2]); }
    else if (has(0x5E)) { const w = first(0x5E); Object.assign(ev, { kind: EV.Trainer, trainerClass: w[1], trainerId: w[2] }); info.summary = '말 걸면 트레이너 배틀'; info.lines.push('팀: ' + this.trainerLabel(w[1], w[2])); }
    else if (has(0x2D)) {
      const w = first(0x2D); Object.assign(ev, { kind: EV.Pokemon, species: w[1], level: w[2] });
      ev.moves = this.defaultMoves(w[1], w[2]);
      const ca = first(0x0E);
      if (ca) { const mv = this.readMovesAsm(this.off(ca[1], ca[2] | ca[3] << 8)); if (mv) ev.moves = mv; }
      info.summary = '포켓몬 주기'; info.lines.push(this.monName(w[1]) + ' Lv' + w[2]);
      info.lines.push('기술: ' + ev.moves.filter(m => m > 0).map(m => this.moveName(m)).join(', '));
    }
    else if (has(0x21) && has(0x20) && (has(0x9E) || has(0x1F))) {
      const c = first(0x21), g = first(0x9E) || first(0x1F);
      Object.assign(ev, { kind: EV.Trade, item: c[1], item2: g[1], qty2: Math.max(1, g[2]) });
      info.summary = '아이템 교환'; info.lines.push(this.itemName(c[1]) + ' → ' + this.itemName(g[1]) + ' ' + ev.qty2 + '개');
    }
    else if (has(0x9E) || has(0x1F)) { const g = first(0x9E) || first(0x1F); Object.assign(ev, { kind: EV.Item, item: g[1], qty: Math.max(1, g[2]) }); info.summary = '아이템 주기'; info.lines.push(this.itemName(g[1]) + ' ' + ev.qty + '개'); }
    else if (has(0x4F)) { ev.kind = EV.Choice; info.summary = '예/아니요 선택지'; }
    else if (flag >= 0 && once && texts.length >= 2) { ev.kind = EV.TalkOnce; info.summary = '처음·다음 대사가 다른 NPC'; }
    else if (texts.length >= 1) { ev.kind = EV.Talk; info.summary = '말하기'; }
    else { info.summary = '알 수 없는 이벤트'; ev = null; }
    if (ev && evCanRepeat(ev.kind)) info.lines.push(once ? '한 번만' + (vanish ? ' (끝나면 사라짐)' : '') : '여러 번');
    for (const t of texts.slice(0, 4)) info.lines.push('대사: ' + RAW + short1(t));
    if (story) { info.summary += ' + 스토리 진행 (움직이기·장면 바꾸기 등)'; info.lines.push('⚠ 원래 게임 스토리용 동작이 섞여 있어요. 이벤트 탭으로 바꾸면 그 동작은 없어져요'); }
    if (ev) {
      const need = evTextLabels(ev.kind, ev.repeat && evCanRepeat(ev.kind)).length;
      if (need >= 2 && !ev.t2) ev.t2 = ev.t1;
      if (need >= 3 && !ev.t3) ev.t3 = ev.t2;
    }
    info.ev = ev;
    return info;
  }
});

function collKind(c) {
  if (c < 0) return '?';
  if (c === 0x07 || c === 0x12 || c === 0x15 || c === 0x1A || c === 0xFF || (c >= 0x90 && c <= 0x9F) || (c >= 0xB0 && c <= 0xBF)) return '벽';
  if (c >= 0x20 && c <= 0x3F) return '물';
  if (c === 0x14 || c === 0x18 || c === 0x1C) return '풀숲';
  if (c >= 0x60 && c <= 0x7F) return '문';
  if (c >= 0xA0 && c <= 0xAF) return '턱';
  return '바닥';
}

// ===== 62-warpcoord.js
// ================================================================ 워프 · 타일 밟기 트리거 (RomWarpCoord.cs 와 같음)
const TK = { Approach: 0, Talk: 1, Push: 2, Warp: 3, Original: 4, Battle: 5, GiveItem: 6, GivePokemon: 7 };
const TK_NAMES = ['🚶 NPC가 다가와서 말걸기', '💬 대사만 띄우기', '🚧 대사 후 한 칸 밀어내기 (길 막기)', '🚀 다른 곳으로 순간이동', '📜 지금 들어있는 동작 그대로 두기',
  '⚔ NPC가 다가와서 포켓몬 배틀', '🎁 NPC가 다가와서 도구 주기', '🥚 NPC가 다가와서 포켓몬 주기'];
const TK_MENU = [TK.Approach, TK.Battle, TK.GiveItem, TK.GivePokemon, TK.Talk, TK.Push, TK.Warp, TK.Original];
const DIR_NAMES = ['아래', '위', '왼쪽', '오른쪽'];
// 게임이 NPC 를 불러와 두는 범위 (주인공 기준 왼쪽 5칸 ~ 오른쪽 6칸, 위아래 5칸)
const RANGE_L = 5, RANGE_R = 6, RANGE_U = 5, RANGE_D = 5;
const tkApproaches = k => k === TK.Approach || k === TK.Battle || k === TK.GiveItem || k === TK.GivePokemon;

function tooFar(o, c) {
  const dx = o.x - c.x, dy = o.y - c.y;
  if (dx >= -RANGE_L && dx <= RANGE_R && dy >= -RANGE_U && dy <= RANGE_D) return null;
  return 'NPC #' + (o.index + 1) + ' ' + o.name + ' 이(가) 트리거 칸에서 너무 멀어요 (' + (dx < 0 ? '왼쪽' : '오른쪽') + ' ' + Math.abs(dx) + '칸, ' + (dy < 0 ? '위' : '아래') + ' ' + Math.abs(dy) +
    '칸). 게임은 화면 둘레까지만 NPC를 불러와서, 그보다 멀면 걸어오지 못하고 대사·배틀만 바로 나와요.\n트리거 칸 기준 왼쪽 ' + RANGE_L + '칸 · 오른쪽 ' + RANGE_R + '칸 · 위아래 ' + RANGE_U + '칸 안의 NPC를 고르거나 NPC를 가까이 옮기세요';
}
function newCoord(o) {
  return Object.assign({ sceneId: 0xFF, x: 0, y: 0, scriptPtr: 0, varId: 0, kind: TK.Original, origKind: TK.Talk, text: '', textRef: null, targetObj: -1, targetName: '',
    pushDir: 1, warpGroup: 0, warpMap: 0, warpX: 0, warpY: 0, dirty: false, trainerClass: 0, trainerId: 0, winText: '', item: 1, qty: 1, species: 1, level: 5, once: false, flag: -1 }, o || {});
}
function coordActionType(c) {
  const k = c.kind === TK.Original ? c.origKind : c.kind, who = c.targetName ? c.targetName + ' 이(가)' : 'NPC가';
  if (k === TK.Approach) return who + ' 다가와 말걸기';
  if (k === TK.Battle) return who + ' 다가와 배틀';
  if (k === TK.GiveItem) return who + ' 다가와 도구 주기';
  if (k === TK.GivePokemon) return who + ' 다가와 포켓몬 주기';
  if (k === TK.Push) return '막고 밀어내기';
  if (k === TK.Warp) return '순간이동';
  return '대사';
}
function coordText(c) {
  let t = (c.text || '').replace(/\r/g, '').replace(/\n/g, ' ');
  if (t.length > 18) t = t.substring(0, 18) + '…';
  return '(' + c.x + ',' + c.y + ')  [' + coordActionType(c) + ']' + (c.once ? ' (한 번만)' : '') + '  ' + RAW + t;
}

mixin(Rom.prototype, {
  areaOf(o) { return this.allAreas.find(a => a.owners.includes(o) || a.extras.includes(o)) || null; },
  areaName(g, m) { const d = this.allAreas.find(x => x.group === g && x.map === m); return d ? d.regionName + ' ' + d.name : '구역 ' + g + '-' + m; },

  getAreaWarps(a) {
    const d = this.data, list = [];
    let e = this.off(a.scriptBank, a.eventsAddr) + 2;
    const n = d[e++];
    for (let i = 0; i < n && i < 64; i++, e += 5) list.push({ y: d[e], x: d[e + 1], destWarpId: d[e + 2], destGroup: d[e + 3], destMap: d[e + 4] });
    return list;
  },
  getAreaObjects(a) {
    const d = this.data, list = [];
    let e = this.off(a.scriptBank, a.eventsAddr) + 2;
    e += 1 + d[e] * 5; e += 1 + d[e] * 8; e += 1 + d[e] * 5;
    const n = d[e++];
    for (let i = 0; i < n && i < 32; i++, e += 13) {
      const off = e, owner = a.owners.concat(a.extras).find(o => o.eventOff === off) || null;
      const type = d[e + 7] & 0x0F, hidden = d[e + 5] === 0xFF && d[e + 6] === 0x00;
      const name = owner ? owner.name : (type === 1 ? '아이템 볼' : Names.sprite(d[e]));
      list.push({ index: i, sprite: d[e], y: d[e + 1] - 4, x: d[e + 2] - 4, type, name: hidden ? '(지운 NPC)' : name, owner, hidden, off,
        get canApproach() { return !this.hidden && this.type !== 1; }, get scriptId() { return this.index + 2; } });
    }
    return list;
  },
  getAreaCoords(a) {
    const d = this.data, list = [];
    let e = this.off(a.scriptBank, a.eventsAddr) + 2;
    e += 1 + d[e] * 5;
    const n = d[e++];
    const objs = this.getAreaObjects(a);
    for (let i = 0; i < n && i < 64; i++, e += 8) {
      const c = newCoord({ sceneId: d[e], y: d[e + 1], x: d[e + 2], scriptPtr: this.w(e + 4), varId: this.w(e + 6) });
      if (Rom.banked(c.scriptPtr)) this.analyzeTrigger(a, c, objs);
      list.push(c);
    }
    return list;
  },
  // 트리거 스크립트에서 대사, 다가오는 NPC, 순간이동 등을 읽음
  analyzeTrigger(a, c, objs) {
    c.origKind = TK.Talk;
    const bank = a.scriptBank;
    for (const v of this.scriptOps(bank, c.scriptPtr)) {
      const code = v[0];
      if ((code === 0x4D || code === 0x52 || code === 0x53) && !c.text) {
        const tp = v[1] | v[2] << 8;
        if (Rom.banked(tp)) c.textRef = this.texts.get(this.off(v.bank, tp)) || this.parseText(this.off(v.bank, tp), 0);
        c.text = c.textRef ? c.textRef.current : this.textAt(v.bank, tp);
      }
      if (code === 0x69 && c.targetObj < 0 && v.length > 1 && v[1] >= 2) {
        const idx = v[1] - 2;
        if (idx < objs.length) { c.targetObj = idx; c.targetName = objs[idx].name; if (c.origKind === TK.Talk) c.origKind = TK.Approach; }
      }
      if (code === 0x31 && !c.once) { c.once = true; c.flag = v[1] | v[2] << 8; }
      if (code === 0x5E) { c.origKind = TK.Battle; c.trainerClass = v[1]; c.trainerId = v[2]; }
      if (code === 0x64) c.winText = this.textAt(v.bank, v[1] | v[2] << 8);
      if (code === 0x9E) { c.origKind = TK.GiveItem; c.item = v[1]; c.qty = v[2]; }
      if (code === 0x2D && v.length > 2) { c.origKind = TK.GivePokemon; c.species = v[1]; c.level = v[2]; }
      if (code === 0x3C && c.origKind !== TK.Approach) { c.origKind = TK.Warp; c.warpGroup = v[1]; c.warpMap = v[2]; c.warpX = v[3]; c.warpY = v[4]; }
    }
  },

  // 스크립트 첫 위치. 지도 뱅크가 꽉 차서 farsjump 로 다른 뱅크에 둔 것이면 그쪽 → { p, bank }
  scriptStart(a, addr) {
    const d = this.data, p = this.off(a.scriptBank, addr);
    if (this.opK(d[p]) === 0x04 && Rom.banked(this.w(p + 2))) return { p: this.off(d[p + 1], this.w(p + 2)), bank: d[p + 1] };
    return { p, bank: a.scriptBank };
  },
  // NPC 가 걸을 수 있는 칸인지
  npcCanWalk(a, x, y) {
    const col = this.collisionAt(a, x, y);
    if (col < 0) return false;
    if (col === 0x07 || col === 0x12 || col === 0x15 || col === 0x1A || col === 0xFF) return false;
    if (col >= 0x20 && col <= 0x3F) return false;
    if (col >= 0x60 && col <= 0x7F) return false;
    if (col >= 0x90 && col <= 0xBF) return false;
    return true;
  },
  // 이 편집기가 만든 다가오기 스크립트의 걸어오는 길이 지금 NPC 자리와 안 맞는지
  approachPathStale(a, c, objs) {
    if (!Rom.banked(c.scriptPtr) || c.targetObj < 0 || c.targetObj >= objs.length) return false;
    const d = this.data, o = objs[c.targetObj];
    let { p, bank } = this.scriptStart(a, c.scriptPtr);
    if (this.opK(d[p]) === 0x31 && this.opK(d[p + 3]) === 0x09) p += 6;
    let x = o.x, y = o.y;
    if (this.opK(d[p]) === 0x69 && d[p + 1] === o.scriptId && this.opK(d[p + 4]) === 0x76 && d[p + 5] === 0x00) {
      const m = this.off(bank, this.w(p + 2));
      for (let k = 0; k < 64 && this.inRom(m + k); k++) {
        const b = d[m + k];
        if (b === 0x47) break;
        if (b < 0x08 || b > 0x13) continue;
        const dir = (b - 0x08) & 3;
        if (dir === 0) y++; else if (dir === 1) y--; else if (dir === 2) x--; else x++;
        if (!this.npcCanWalk(a, x, y)) return true;
      }
    } else if (!(this.opK(d[p]) === 0x76 && d[p + 1] === 0x00 && this.opK(d[p + 3]) === 0x76 && d[p + 4] === o.scriptId)) return false;
    return Math.abs(x - c.x) + Math.abs(y - c.y) !== 1;
  },
  staleApproachTriggers(a, coords) {
    const objs = this.getAreaObjects(a), res = [];
    coords.forEach((c, i) => { if (c.kind === TK.Original && tkApproaches(c.origKind) && this.approachPathStale(a, c, objs)) res.push(i); });
    return res;
  },
  markForRebuild(c) { c.kind = c.origKind; c.sceneId = 0xFF; if (c.textRef) c.text = c.textRef.current; c.dirty = true; },
  // NPC 를 옮긴 직후: 그 구역의 다가오기 트리거 길을 다시 만듦. 안내 글 (없으면 null)
  fixApproachTriggersNote(a) {
    const coords = this.getAreaCoords(a), stale = this.staleApproachTriggers(a, coords);
    if (!stale.length) return null;
    for (const i of stale) this.markForRebuild(coords[i]);
    const err = this.saveAreaCoords(a, coords), which = stale.map(i => 'T' + (i + 1)).join(', ');
    if (err) return '⚠ 이 NPC가 다가오는 트리거 ' + which + ' 의 걸어오는 길을 다시 만들지 못했어요: ' + err;
    return '이 NPC가 다가오는 트리거 ' + which + ' 의 걸어오는 길도 새 자리에 맞게 다시 만들었어요.';
  },
  // 장면 변수가 있는 지도인지
  hasSceneVar(a) {
    if (!this._sceneMaps) {
      const d = this.data, s = new Set();
      const rec = j => d[j] >= 1 && d[j] <= 40 && d[j + 1] >= 1 && d[j + 1] <= 120 && (d[j + 3] & 0xF0) === 0xD0;
      for (let i = 0; i < d.length - 120; i++) {
        let k = 0;
        while (k < 200 && rec(i + k * 4)) k++;
        if (k >= 20 && d[i + k * 4] === 0xFF) { for (let j = 0; j < k; j++) s.add(d[i + j * 4] << 8 | d[i + j * 4 + 1]); break; }
        if (k > 0) i += k * 4 - 1;
      }
      this._sceneMaps = s;
    }
    return this._sceneMaps.has(a.group << 8 | a.map);
  },
  // 이 편집기가 만든 다가오기 트리거인데 장면 번호에 묶여서 스토리가 진행되면 안 켜지는 것
  sceneLockedTriggers(a, coords) {
    const objs = this.getAreaObjects(a), res = [], d = this.data;
    if (!this.hasSceneVar(a)) return res;
    coords.forEach((c, i) => {
      if (c.sceneId === 0xFF || c.kind !== TK.Original || !tkApproaches(c.origKind)) return;
      if (c.targetObj < 0 || c.targetObj >= objs.length || !Rom.banked(c.scriptPtr)) return;
      let { p } = this.scriptStart(a, c.scriptPtr); const id = objs[c.targetObj].scriptId;
      if (this.opK(d[p]) === 0x31 && this.opK(d[p + 3]) === 0x09) p += 6;
      if ((this.opK(d[p]) === 0x69 && d[p + 1] === id && this.opK(d[p + 4]) === 0x76 && d[p + 5] === 0x00) || (this.opK(d[p]) === 0x76 && d[p + 1] === 0x00 && this.opK(d[p + 3]) === 0x76 && d[p + 4] === id)) res.push(i);
    });
    return res;
  },
  // 너비 우선 탐색: NPC 자리에서 트리거 칸 옆 칸까지 (벽·물·다른 NPC 를 피해서). → { path: [step…], ex, ey } 또는 null
  findWalk(a, o, c, objs) {
    const minX = c.x - RANGE_L, maxX = c.x + RANGE_R, minY = c.y - RANGE_U, maxY = c.y + RANGE_D;
    const K = (x, y) => x * 65536 + y;
    const blocked = new Set();
    for (const other of objs) if (other !== o && !other.hidden) blocked.add(K(other.x, other.y));
    blocked.add(K(c.x, c.y));
    const goal = (x, y) => Math.abs(x - c.x) + Math.abs(y - c.y) === 1;
    if (goal(o.x, o.y)) return { path: [], ex: o.x, ey: o.y };
    const ddx = [0, 0, -1, 1], ddy = [1, -1, 0, 0];
    const prev = new Map(), prevDir = new Map(), q = [K(o.x, o.y)];
    prev.set(q[0], -1);
    for (let qi = 0; qi < q.length; qi++) {
      const cur = q[qi], cx = Math.floor(cur / 65536), cy = cur % 65536;
      const last = prevDir.has(cur) ? prevDir.get(cur) : 0;
      const order = prev.get(cur) === -1 ? [0, 1, 2, 3] : [last, ...[0, 1, 2, 3].filter(x => x !== last)];
      for (const dd of order) {
        const nx = cx + ddx[dd], ny = cy + ddy[dd];
        if (nx < minX || nx > maxX || ny < minY || ny > maxY || nx < 0 || ny < 0) continue;
        const key = K(nx, ny);
        if (prev.has(key) || blocked.has(key) || !this.npcCanWalk(a, nx, ny)) continue;
        prev.set(key, cur); prevDir.set(key, dd);
        if (goal(nx, ny)) {
          const path = [];
          for (let k = key; prev.get(k) !== -1; k = prev.get(k)) path.unshift(0x0C + prevDir.get(k));
          return { path, ex: nx, ey: ny };
        }
        q.push(key);
      }
    }
    return null;
  },
  // 트리거 스크립트 조립 → ScriptBuilder (실패하면 오류)
  buildTriggerScript(a, c, objs) {
    const s = new ScriptBuilder(), T = t => this.textBytes(t), at = '트리거 (' + c.x + ',' + c.y + ')';
    const hasText = (c.text || '').trim().length > 0;
    if (hasText) { const e = this.checkEventText(c.text, at + ' 대사'); if (e) throw new Error(e); }
    const once = c.once && c.kind !== TK.Push;
    if (once) { s.op(0x31).w16(Math.max(0, c.flag)); s.to(0x09, 'skip'); }
    const setFlag = () => { if (once) s.op(0x33).w16(Math.max(0, c.flag)); };
    if (tkApproaches(c.kind)) {
      if (c.targetObj < 0 || c.targetObj >= objs.length) throw new Error(at + ': 다가올 NPC를 고르세요');
      if (c.kind === TK.Battle) {
        if (!this.trainerList().some(t => t.cls === c.trainerClass && t.id === c.trainerId)) throw new Error(at + ': 배틀할 트레이너를 고르세요');
        if ((c.winText || '').trim()) { const we = this.checkEventText(c.winText, at + ' 이긴 뒤 대사'); if (we) throw new Error(we); }
      }
      if (c.kind === TK.GiveItem && (c.item < 1 || c.item >= this.itemNames.length)) throw new Error(at + ': 줄 도구를 고르세요');
      if (c.kind === TK.GivePokemon && (c.species < 1 || c.species > 251)) throw new Error(at + ': 줄 포켓몬을 고르세요');
      const o = objs[c.targetObj];
      if (!o.canApproach) throw new Error(at + ': 다가올 NPC #' + (o.index + 1) + ' 는 지워졌거나 아이템 볼이에요. 다른 NPC를 고르세요');
      const far = tooFar(o, c);
      if (far) throw new Error(at + ': ' + far);
      const w = this.findWalk(a, o, c, objs);
      if (!w) throw new Error(at + ': NPC #' + (o.index + 1) + ' 가 주인공 옆까지 걸어올 길이 없어요 (벽·물·건물·다른 NPC 에 막힘). 다른 NPC를 고르거나 트리거·NPC 위치를 바꾸세요');
      const go = w.path, back = go.slice().reverse().map(b => b ^ 1);
      const face = w.ex > c.x ? 3 : w.ex < c.x ? 2 : w.ey > c.y ? 0 : 1, id = o.scriptId;
      if (go.length) s.op(0x69, id).ref('go');
      s.op(0x76, 0x00, face);
      s.op(0x76, id, face ^ 1);
      if (c.kind === TK.Approach) { if (hasText) s.op(0x48).text(0x4D, 't', T(c.text)).op(0x54, 0x4A); setFlag(); }
      else if (c.kind === TK.Battle) {
        if (hasText) s.op(0x48).text(0x4D, 't', T(c.text)).op(0x54, 0x4A);
        if ((c.winText || '').trim()) s.text(0x64, 'w', T(c.winText)).w16(0);
        s.op(0x5E, c.trainerClass, c.trainerId, 0x5F, 0x60);
        setFlag();
      } else if (c.kind === TK.GiveItem) {
        s.op(0x48);
        if (hasText) s.text(0x4D, 't', T(c.text)).op(0x55);
        s.op(0x9E, c.item, Math.max(1, Math.min(99, c.qty))).to(0x08, 'full');
        setFlag();
        s.label('full').op(0x4A);
      } else {
        s.op(0x48);
        if (hasText) s.text(0x4D, 't', T(c.text)).op(0x55);
        s.op(0x2D, c.species, Math.max(1, Math.min(100, c.level)), 0, 0).to(0x08, 'full');
        setFlag();
        s.label('full').op(0x4A);
      }
      if (back.length) s.op(0x69, id).ref('back');
      s.op(0x91);
      if (once) s.label('skip').op(0x91);
      if (go.length) { s.label('go'); s.data(...go, 0x47); }
      if (back.length) { s.label('back'); s.data(...back, 0x47); }
      return s;
    }
    if (c.kind === TK.Talk) {
      if (!hasText) throw new Error(at + ': 대사를 적어 주세요');
      s.op(0x48).text(0x4D, 't', T(c.text)).op(0x54, 0x4A);
      setFlag(); s.op(0x91);
      if (once) s.label('skip').op(0x91);
    } else if (c.kind === TK.Push) {
      if (hasText) s.op(0x48).text(0x4D, 't', T(c.text)).op(0x54, 0x4A);
      s.op(0x69, 0x00).ref('push').op(0x91);
      s.label('push').data(0x0C + (c.pushDir & 3), 0x47);
    } else if (c.kind === TK.Warp) {
      const dest = this.allAreas.find(x => x.group === c.warpGroup && x.map === c.warpMap);
      if (!dest) throw new Error(at + ': 이동할 구역을 고르세요');
      if (c.warpX >= dest.width * 2 || c.warpY >= dest.height * 2) throw new Error(at + ': 도착 좌표가 그 지도 밖이에요 (가로 0~' + (dest.width * 2 - 1) + ', 세로 0~' + (dest.height * 2 - 1) + ')');
      if (hasText) s.op(0x48).text(0x4D, 't', T(c.text)).op(0x54, 0x4A);
      setFlag();
      s.op(0x3C, c.warpGroup, c.warpMap, c.warpX, c.warpY, 0x91);
      if (once) s.label('skip').op(0x91);
    }
    return s;
  },

  // 이벤트 표의 한 부분(워프 또는 트리거)을 바꿔 씀. 들어가면 그 자리, 아니면 같은 뱅크 빈 곳으로 옮김
  rewriteEvents(a, part, bytes) {
    const d = this.data, ev = this.off(a.scriptBank, a.eventsAddr), size = this.eventsSize(ev);
    let p = ev + 2;
    const wStart = p; p += 1 + d[p] * 5;
    const cStart = p; p += 1 + d[p] * 8;
    const [from, to] = part === 'warp' ? [wStart, cStart] : [cStart, p];
    const head = Array.from(d.subarray(ev, from)), tail = Array.from(d.subarray(to, ev + size));
    const all = head.concat(bytes, tail);
    if (all.length <= size) d.set(all, ev);
    else {
      let np = this.allocInBank(a.scriptBank, all.length);
      if (np < 0) np = this.allocSmallInBank(a.scriptBank, all.length);
      if (np < 0) return '이 구역의 데이터 공간이 부족해요';
      d.set(all, np);
      a.eventsAddr = 0x4000 + np % 0x4000;
      d[a.attrOff + 9] = a.eventsAddr & 0xFF; d[a.attrOff + 10] = a.eventsAddr >> 8;
    }
    this.dirty = true;
    this.loadArea(a);
    return null;
  },
  saveAreaWarps(a, warps) {
    const b = [warps.length];
    for (const w of warps) b.push(w.y, w.x, w.destWarpId, w.destGroup, w.destMap);
    return this.rewriteEvents(a, 'warp', b);
  },
  // 트리거 목록을 롬에 저장. 실패하면 이유
  saveAreaCoords(a, coords) {
    const objs = this.getAreaObjects(a);
    // 쓰기 전에 모두 검사 (중간에 실패해서 반만 바뀌지 않게)
    for (const c of coords) {
      if (c.x >= a.width * 2 || c.y >= a.height * 2) return '트리거 (' + c.x + ',' + c.y + ') 가 지도 밖에 있어요';
      if (c.kind === TK.Original || !(c.dirty || !Rom.banked(c.scriptPtr))) continue;
      try { this.buildTriggerScript(a, c, objs); } catch (e) { return e.message; }
    }
    const b = [coords.length];
    for (const c of coords) {
      let addr = c.scriptPtr;
      if (c.kind !== TK.Original && (c.dirty || !Rom.banked(addr))) {
        if (c.once && c.kind !== TK.Push && (c.flag < 1932 || c.flag > 2047)) {
          c.flag = this.allocFlag();
          if (c.flag < 0) return "쓸 수 있는 이벤트 번호가 없어요 ('한 번만'을 끄세요)";
        }
        let sb;
        try { sb = this.buildTriggerScript(a, c, objs); } catch (e) { return e.message; }
        addr = this.placeScript(a.scriptBank, sb, false);
        if (addr < 0) return '이 구역의 데이터 공간이 부족해서 트리거를 더 만들 수 없어요';
        c.scriptPtr = addr; c.dirty = false;
      }
      if (!Rom.banked(addr)) return '트리거 (' + c.x + ',' + c.y + ') 의 스크립트가 없어요';
      b.push(c.sceneId, c.y, c.x, 0, addr & 0xFF, addr >> 8, c.varId & 0xFF, c.varId >> 8);
    }
    return this.rewriteEvents(a, 'coord', b);
  }
});

// ===== 64-blocks.js
// ================================================================ 지도 블록 읽기·쓰기 (RomBlocks.cs · MapRender.cs 블록 부분과 같음)
// 지도 블록은 압축 없이 가로×세로 바이트로 들어 있어서 그 자리에 바로 고쳐 씀 (크기 변화 없음)
// 충돌(지나갈 수 있는지)은 블록마다 타일셋에 정해져 있으므로 블록을 바꾸면 같이 바뀜
mixin(MapRender.prototype, {
  tilesetEntry(tileset) { return this.off(this.tilesetBank, this.tilesetPtr + tileset * 15); },
  // 타일셋에 있는 블록 수. 보통 블록 표 바로 뒤에 충돌 표가 있어서 그 거리로 셈
  blockCount(a, maxUsed) {
    if (!this.ok) return 0;
    const d = this.d, ts = this.tilesetEntry(a.tileset);
    const meta = this.off(d[ts + 3], this.w(ts + 4)), coll = this.off(d[ts + 6], this.w(ts + 7)), diff = coll - meta;
    if (diff > 0 && diff % 16 === 0 && diff / 16 <= 256 && diff / 16 > maxUsed) return diff / 16;
    return Math.min(256, Math.max(16, Math.floor((maxUsed + 16) / 16) * 16));
  },
  // 블록 하나하나의 그림 (32×32 canvas). 같은 타일셋·색이면 다시 씀
  renderBlocks(a, count) {
    if (!this.ok) return [];
    this.blockCache = this.blockCache || new Map();
    const key = a.tileset + '/' + a.group + '/' + a.env + '/' + count;
    if (this.blockCache.has(key)) return this.blockCache.get(key);
    const p = this.prepare(a), res = [];
    for (let i = 0; i < count; i++) {
      const img = new ImageData(32, 32);
      this.drawBlock(new Uint32Array(img.data.buffer), 32, 0, 0, p, i);
      const c = document.createElement('canvas'); c.width = c.height = 32;
      c.getContext('2d').putImageData(img, 0, 0);
      res.push(c);
    }
    this.blockCache.set(key, res);
    return res;
  }
});

mixin(Rom.prototype, {
  blocksOff(a) { return this.off(a.blocksBank, a.blocksAddr); },
  blocksValid(a) { const o = this.blocksOff(a); return a.width > 0 && a.height > 0 && o >= 0x4000 && o + a.width * a.height <= this.data.length; },
  // 같은 블록 데이터를 함께 쓰는 다른 구역들 (예: 모든 포켓몬센터 1층)
  sharingBlocks(a) { const o = this.blocksOff(a); return this.allAreas.filter(x => x !== a && this.blocksOff(x) === o); },
  blockCount(a) {
    let max = 0;
    for (const x of this.allAreas) {
      if (x.tileset !== a.tileset || !this.blocksValid(x)) continue;
      const o = this.blocksOff(x);
      for (let i = 0; i < x.width * x.height; i++) if (this.data[o + i] > max) max = this.data[o + i];
    }
    return this.gfx.blockCount(a, max);
  },
  blockCollision(a, blk) {
    const c = this.collisionOff(a);
    if (c < 0 || c + blk * 4 + 4 > this.data.length) return null;
    return Array.from(this.data.subarray(c + blk * 4, c + blk * 4 + 4));
  },
  // 블록 하나를 바꾸고 되돌리기용 기록(위치, 전, 후)을 남김. 바뀌지 않으면 false
  setBlock(a, bx, by, blk, log) {
    if (bx < 0 || by < 0 || bx >= a.width || by >= a.height) return false;
    const o = this.blocksOff(a) + by * a.width + bx;
    if (this.data[o] === blk) return false;
    log.push([o, this.data[o], blk]);
    this.data[o] = blk; this.dirty = true;
    return true;
  },
  applyBlockLog(log, undo) {
    if (undo) for (let i = log.length - 1; i >= 0; i--) this.data[log[i][0]] = log[i][1];
    else for (const e of log) this.data[e[0]] = e[2];
    this.dirty = true;
  },
  // 다른 구역으로 가는 연결 (북·남·서·동) → [[group, map], …]
  connections(a) {
    const d = this.data, flags = d[a.attrOff + 11], res = [];
    let p = a.attrOff + 12;
    for (let bit = 3; bit >= 0; bit--) if (flags & (1 << bit)) { res.push([d[p], d[p + 1]]); p += 12; }
    return res;
  },
  // 함께 쓰던 블록 데이터를 이 구역 전용으로 복사. 실패하면 이유
  separateBlocks(a) {
    if (!this.sharingBlocks(a).length) return '이미 이 구역만 쓰는 블록이에요';
    if (this.allAreas.some(x => x !== a && x.attrOff === a.attrOff)) return '이 롬은 지도 정보 자체를 다른 구역과 같이 써서 따로 나눌 수 없어요';
    for (const x of this.allAreas) for (const c of this.connections(x)) if (c[0] === a.group && c[1] === a.map) return '다른 지도와 이어진 구역이라 블록을 옮길 수 없어요';
    const n = a.width * a.height, al = this.alloc(n + 1);
    if (!al) return '롬에 남은 빈 공간이 부족해요';
    const d = this.data;
    d.copyWithin(al.p, this.blocksOff(a), this.blocksOff(a) + n);
    // 끝에 빈 공간 채움값과 다른 바이트를 하나 둬서, 다음에 열 때 빈 공간으로 착각하지 않게 함
    d[al.p + n] = al.fill === 0xFF ? 0x00 : 0xFF;
    const bank = Math.floor(al.p / 0x4000), addr = 0x4000 + al.p % 0x4000;
    d[a.attrOff + 3] = bank; d[a.attrOff + 4] = addr & 0xff; d[a.attrOff + 5] = addr >> 8;
    a.blocksBank = bank; a.blocksAddr = addr;
    this.dirty = true;
    return null;
  }
});

// 충돌 값 → 표시 색 (바닥은 null)
function collColor(c) {
  if (c < 0) return null;
  if (c === 0x07 || c === 0x12 || c === 0x15 || c === 0x1A || c === 0xFF || (c >= 0x90 && c <= 0x9F) || (c >= 0xB0 && c <= 0xBF)) return 'rgba(230,40,40,.47)';
  if (c >= 0x20 && c <= 0x3F) return 'rgba(40,110,255,.43)';
  if (c === 0x14 || c === 0x18 || c === 0x1C) return 'rgba(40,220,60,.35)';
  if (c >= 0x60 && c <= 0x7F) return 'rgba(200,60,255,.51)';
  if (c >= 0xA0 && c <= 0xAF) return 'rgba(255,210,0,.51)';
  return null;
}

// ===== 66-sprite.js
// ================================================================ 포켓몬 그림 쓰기 · 사진 → 2세대 4색 변환 (RomSprite.cs 와 같음)
// 그림 = { w, h, px: Uint8Array(w*h) 색 번호 0~3 (가로줄 순서) }, 색 = [r, g, b]
const C555 = c => [Math.floor((c & 31) * 255 / 31), Math.floor(((c >> 5) & 31) * 255 / 31), Math.floor(((c >> 10) & 31) * 255 / 31)];
const TO555 = c => Math.floor((c[0] * 31 + 127) / 255) | Math.floor((c[1] * 31 + 127) / 255) << 5 | Math.floor((c[2] * 31 + 127) / 255) << 10;
const SNAP = c => C555(TO555(c));   // 실제 게임 화면에 보일 색 (5비트로 깎은 색)
const WHITE = [255, 255, 255], BLACK = [0, 0, 0];
const rgbCss = c => 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')';
const rgbHex = c => '#' + c.map(v => v.toString(16).padStart(2, '0')).join('');
const hexRgb = h => [parseInt(h.substr(1, 2), 16), parseInt(h.substr(3, 2), 16), parseInt(h.substr(5, 2), 16)];
function newPic(w, h) { return { w, h, px: new Uint8Array(w * h) }; }
function clonePic(p) { return { w: p.w, h: p.h, px: p.px.slice() }; }

// 2세대 LZ 압축 (간단한 방식: 0 반복, 같은 값 반복, 앞부분 복사, 그대로 쓰기)
const Lz = {
  cmd(o, cmd, len) { if (len <= 32) o.push((cmd << 5) | (len - 1)); else { o.push(0xE0 | (cmd << 2) | ((len - 1) >> 8)); o.push((len - 1) & 0xFF); } },
  compress(s) {
    const o = [], lit = [];
    const flush = () => { let i = 0; while (i < lit.length) { const n = Math.min(1024, lit.length - i); this.cmd(o, 0, n); for (let k = 0; k < n; k++) o.push(lit[i + k]); i += n; } lit.length = 0; };
    let p = 0;
    while (p < s.length) {
      let run = 1;
      while (p + run < s.length && s[p + run] === s[p] && run < 1024) run++;
      let bestLen = 0, bestSrc = 0;
      for (let src = Math.max(0, p - 0x7FFF); src < p; src++) {
        let l = 0;
        while (p + l < s.length && src + l < p && s[src + l] === s[p + l] && l < 1024) l++;
        if (l > bestLen) { bestLen = l; bestSrc = src; }
      }
      if (run >= 3 && run >= bestLen) { flush(); if (s[p] === 0) this.cmd(o, 3, run); else { this.cmd(o, 1, run); o.push(s[p]); } p += run; }
      else if (bestLen >= 4) {
        flush(); this.cmd(o, 4, bestLen);
        const dist = p - bestSrc;
        if (dist <= 128) o.push(0x80 | (dist - 1)); else { o.push(bestSrc >> 8); o.push(bestSrc & 0xFF); }
        p += bestLen;
      } else { lit.push(s[p]); p++; }
    }
    flush(); o.push(0xFF);
    return o;
  }
};

// 색 번호 그림 → 2bpp 타일 바이트. colMajor: 타일을 세로줄 순서로 (포켓몬 그림)
function picToTiles(pic, colMajor) {
  const tw = pic.w / 8, th = pic.h / 8, raw = [];
  for (let t = 0; t < tw * th; t++) {
    const tx = colMajor ? Math.floor(t / th) : t % tw, ty = colMajor ? t % th : Math.floor(t / tw);
    for (let y = 0; y < 8; y++) {
      let lo = 0, hi = 0;
      for (let x = 0; x < 8; x++) { const c = pic.px[(ty * 8 + y) * pic.w + tx * 8 + x]; lo |= (c & 1) << (7 - x); hi |= ((c >> 1) & 1) << (7 - x); }
      raw.push(lo, hi);
    }
  }
  return raw;
}
function tilesToPic(raw, tw, th, colMajor) {
  const pic = newPic(tw * 8, th * 8);
  for (let t = 0; t < tw * th; t++) {
    const tx = colMajor ? Math.floor(t / th) : t % tw, ty = colMajor ? t % th : Math.floor(t / tw);
    for (let y = 0; y < 8; y++) {
      const i = t * 16 + y * 2, lo = raw[i] || 0, hi = raw[i + 1] || 0;
      for (let x = 0; x < 8; x++) pic.px[(ty * 8 + y) * pic.w + tx * 8 + x] = ((lo >> (7 - x)) & 1) | (((hi >> (7 - x)) & 1) << 1);
    }
  }
  return pic;
}
// 그림 → canvas (pal: [r,g,b] 4개 또는 (x, y) => 4개, transparent0: 0번 투명)
function picCanvas(pic, pal, transparent0, zoom) {
  const id = new ImageData(pic.w, pic.h), d = id.data;
  for (let y = 0; y < pic.h; y++) for (let x = 0; x < pic.w; x++) {
    const i = y * pic.w + x, ci = pic.px[i] & 3;
    if (transparent0 && ci === 0) continue;
    const c = (typeof pal === 'function' ? pal(x, y) : pal)[ci];
    d[i * 4] = c[0]; d[i * 4 + 1] = c[1]; d[i * 4 + 2] = c[2]; d[i * 4 + 3] = 255;
  }
  const c = document.createElement('canvas'); c.width = pic.w; c.height = pic.h; c.getContext('2d').putImageData(id, 0, 0);
  if (!zoom || zoom === 1) return c;
  const z = document.createElement('canvas'); z.width = pic.w * zoom; z.height = pic.h * zoom;
  const g = z.getContext('2d'); g.imageSmoothingEnabled = false; g.drawImage(c, 0, 0, z.width, z.height);
  return z;
}
function downloadCanvas(c, name) { c.toBlob(b => { const u = URL.createObjectURL(b), a = el('a', { href: u, download: name }); document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 5000); }, 'image/png'); }
// 그림 파일 고르기 → { w, h, data: RGBA } (취소하면 null)
function pickImageFile() {
  return new Promise((resolve, reject) => {
    const inp = el('input', { type: 'file', accept: 'image/*' });
    inp.addEventListener('change', () => {
      const f = inp.files[0];
      if (!f) { resolve(null); return; }
      const url = URL.createObjectURL(f), img = new Image();
      img.onload = () => {
        const c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight;
        const g = c.getContext('2d'); g.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        resolve({ w: c.width, h: c.height, data: g.getImageData(0, 0, c.width, c.height).data });
      };
      img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('그림을 열 수 없어요')); };
      img.src = url;
    });
    inp.click();
  });
}
// 그림 파일 → 가장 가까운 색 번호 (크기가 다르면 맞춤). 투명한 곳은 0
function picFromImage(src, w, h, pal, transparent0) {
  const pic = newPic(w, h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const sx = Math.floor(x * src.w / w), sy = Math.floor(y * src.h / h), i = (sy * src.w + sx) * 4;
    let c = [src.data[i], src.data[i + 1], src.data[i + 2]];
    if (transparent0 && src.data[i + 3] < 128) { pic.px[y * w + x] = 0; continue; }
    if (src.data[i + 3] < 128) c = WHITE;
    let best = transparent0 ? 1 : 0, bd = Infinity;
    for (let k = transparent0 ? 1 : 0; k < 4; k++) { const d = (c[0] - pal[k][0]) ** 2 * 0.3 + (c[1] - pal[k][1]) ** 2 * 0.59 + (c[2] - pal[k][2]) ** 2 * 0.11; if (d < bd) { bd = d; best = k; } }
    pic.px[y * w + x] = best;
  }
  return pic;
}

// ---------------------------------------------------------------- 사진 → 2세대 4색 그림
const SpriteConvert = {
  dither: false,
  dist(a, b) { const dr = a[0] - b[0], dg = a[1] - b[1], db = a[2] - b[2]; return dr * dr * 0.30 + dg * dg * 0.59 + db * db * 0.11; },
  lum(c) { return c[0] * 0.30 + c[1] * 0.59 + c[2] * 0.11; },
  hsl(c) {
    const r = c[0] / 255, g = c[1] / 255, b = c[2] / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2;
    let h = 0, s = 0;
    if (mx !== mn) {
      const d = mx - mn;
      s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
      h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }
    return [h, s, l];
  },
  // 배경 지우기: 투명 정보가 없으면 네 모서리 색과 이어진 비슷한 색을 배경으로 봄
  mask(src) {
    const { w, h, data } = src, n = w * h, m = new Uint8Array(n), col = i => [data[i * 4], data[i * 4 + 1], data[i * 4 + 2]];
    let alpha = false;
    for (let i = 0; i < n; i++) if (data[i * 4 + 3] < 128) { alpha = true; break; }
    if (alpha) { for (let i = 0; i < n; i++) m[i] = data[i * 4 + 3] >= 128 ? 1 : 0; return m; }
    m.fill(1);
    const corners = [0, w - 1, (h - 1) * w, h * w - 1];
    for (const start of corners) {
      const bg = col(start), q = [start];
      for (let qi = 0; qi < q.length; qi++) {
        const i = q[qi];
        if (!m[i] || this.dist(col(i), bg) > 900) continue;
        m[i] = 0;
        const x = i % w, y = Math.floor(i / w);
        if (x > 0) q.push(i - 1); if (x < w - 1) q.push(i + 1); if (y > 0) q.push(i - w); if (y < h - 1) q.push(i + w);
      }
    }
    // 다리 사이처럼 막힌 곳의 배경도 지움 (모서리 배경색과 아주 비슷한 점)
    for (const corner of corners) {
      const bg = col(corner);
      if (this.lum(bg) > 230) continue;   // 흰 배경이면 몸 안의 흰 부분(눈·배)은 남겨 둠
      for (let i = 0; i < n; i++) if (m[i] && this.dist(col(i), bg) < 300) m[i] = 0;
    }
    return m;
  },
  // tiles: 칸 수(5~7), fixedPal: 이미 정해진 색에 맞출 때 → { img, tiles, c1, c2 }
  convert(src, tiles, fixedPal, outline) {
    const { w, h, data } = src, mask = this.mask(src), col = i => [data[i * 4], data[i * 4 + 1], data[i * 4 + 2]];
    let x0 = w, y0 = h, x1 = -1, y1 = -1;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (mask[y * w + x]) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
    if (x1 < 0) throw new Error('그림에서 포켓몬을 찾지 못했어요 (배경만 있는 것 같아요)');
    const cw = x1 - x0 + 1, ch = y1 - y0 + 1, size = tiles * 8;
    if (cw > size * 2 || ch > size * 2) return this.convertArt(src, mask, x0, y0, cw, ch, tiles, fixedPal, outline);
    const scale = Math.min(1, Math.min(size / cw, size / ch));
    const tw = Math.max(1, Math.round(cw * scale)), th = Math.max(1, Math.round(ch * scale));
    const C = [], on = [];
    for (let ty = 0; ty < th; ty++) for (let tx = 0; tx < tw; tx++) {
      const sx0 = x0 + Math.floor(tx / scale), sx1 = x0 + Math.max(Math.floor((tx + 1) / scale), Math.floor(tx / scale) + 1);
      const sy0 = y0 + Math.floor(ty / scale), sy1 = y0 + Math.max(Math.floor((ty + 1) / scale), Math.floor(ty / scale) + 1);
      // 칸 안에서 가장 많이 나온 색 (평균을 내면 색이 탁해짐)
      const votes = new Map(); let n = 0, total = 0;
      for (let y = sy0; y < Math.min(sy1, h); y++) for (let x = sx0; x < Math.min(sx1, w); x++) {
        total++;
        if (!mask[y * w + x]) continue;
        const k = TO555(col(y * w + x)); votes.set(k, (votes.get(k) || 0) + 1); n++;
      }
      on[ty * tw + tx] = n * 2 >= total && n > 0;
      if (n > 0) { let bk = 0, bv = -1; for (const [k, v] of votes) if (v > bv) { bv = v; bk = k; } C[ty * tw + tx] = C555(bk); }
    }
    const ON = (x, y) => on[y * tw + x];
    let c1, c2;
    if (fixedPal) { c1 = fixedPal[1]; c2 = fixedPal[2]; }
    else {
      const mids = [];
      const inner = (x, y) => ON(x, y) && x > 0 && y > 0 && x < tw - 1 && y < th - 1 && ON(x - 1, y) && ON(x + 1, y) && ON(x, y - 1) && ON(x, y + 1);
      for (let y = 0; y < th; y++) for (let x = 0; x < tw; x++) if (inner(x, y)) { const l = this.lum(C[y * tw + x]); if (l > 40 && l < 235) mids.push(C[y * tw + x]); }
      if (mids.length < 8) for (let y = 0; y < th; y++) for (let x = 0; x < tw; x++) if (ON(x, y)) { const l = this.lum(C[y * tw + x]); if (l > 40 && l < 235) mids.push(C[y * tw + x]); }
      if (mids.length < 2) { c1 = [200, 200, 200]; c2 = [110, 110, 110]; }
      else {
        const sorted = mids.slice().sort((p, q) => this.lum(q) - this.lum(p));
        let a = sorted[Math.floor(sorted.length / 4)], b = sorted[Math.floor(sorted.length * 3 / 4)];
        for (let it = 0; it < 12; it++) {
          const sa = [0, 0, 0, 0], sb = [0, 0, 0, 0];
          for (const c of mids) { const t = this.dist(c, a) <= this.dist(c, b) ? sa : sb; t[0] += c[0]; t[1] += c[1]; t[2] += c[2]; t[3]++; }
          if (sa[3]) a = [Math.floor(sa[0] / sa[3]), Math.floor(sa[1] / sa[3]), Math.floor(sa[2] / sa[3])];
          if (sb[3]) b = [Math.floor(sb[0] / sb[3]), Math.floor(sb[1] / sb[3]), Math.floor(sb[2] / sb[3])];
        }
        // 묶음에서 가장 많이 쓰인 실제 색 (선명한 색 유지)
        const mode = (center, isA) => {
          const cnt = new Map();
          for (const c of mids) { if ((this.dist(c, a) <= this.dist(c, b)) !== isA) continue; const k = TO555(c); cnt.set(k, (cnt.get(k) || 0) + 1); }
          if (!cnt.size) return center;
          let bk = 0, bv = -1; for (const [k, v] of cnt) if (v > bv) { bv = v; bk = k; }
          return C555(bk);
        };
        let ma = mode(a, true), mb = mode(b, false);
        if (this.lum(ma) < this.lum(mb)) [ma, mb] = [mb, ma];
        c1 = ma; c2 = mb;
      }
      c1 = SNAP(c1); c2 = SNAP(c2);
    }
    const pal = [WHITE, c1, c2, BLACK];
    let img = newPic(size, size);
    const ox = Math.floor((size - tw) / 2), oy = size - th;
    for (let y = 0; y < th; y++) for (let x = 0; x < tw; x++) {
      if (!ON(x, y)) continue;
      let best = 0, bd = Infinity;
      for (let k = 0; k < 4; k++) { const dd = this.dist(C[y * tw + x], pal[k]); if (dd < bd) { bd = dd; best = k; } }
      img.px[(oy + y) * size + ox + x] = best;
    }
    if (outline) {
      const copy = clonePic(img);
      for (let y = 0; y < th; y++) for (let x = 0; x < tw; x++) {
        if (!ON(x, y)) continue;
        if (x === 0 || y === 0 || x === tw - 1 || y === th - 1 || !ON(x - 1, y) || !ON(x + 1, y) || !ON(x, y - 1) || !ON(x, y + 1)) copy.px[(oy + y) * size + ox + x] = 3;
      }
      img = copy;
    }
    return { img, tiles, c1, c2 };
  },
  // 일러스트·사진 → 2세대 도트 (면적 평균 → 대비·윤곽 → 밝기 3단계 → 흰 부분 → 테두리)
  convertArt(src, mask, x0, y0, cw, ch, tiles, fixedPal, outline) {
    const { w, h, data } = src, size = tiles * 8, scale = Math.min(size / cw, size / ch);
    const tw = Math.max(1, Math.round(cw * scale)), th = Math.max(1, Math.round(ch * scale));
    const C = [], on = [], N = tw * th;
    for (let ty = 0; ty < th; ty++) for (let tx = 0; tx < tw; tx++) {
      const sx0 = x0 + Math.floor(tx / scale), sx1 = Math.min(w, x0 + Math.floor((tx + 1) / scale));
      const sy0 = y0 + Math.floor(ty / scale), sy1 = Math.min(h, y0 + Math.floor((ty + 1) / scale));
      let r = 0, g = 0, b = 0, n = 0, total = 0;
      for (let y = sy0; y < Math.max(sy1, sy0 + 1); y++) for (let x = sx0; x < Math.max(sx1, sx0 + 1); x++) {
        total++;
        const i = y * w + x;
        if (!mask[i]) continue;
        r += data[i * 4]; g += data[i * 4 + 1]; b += data[i * 4 + 2]; n++;
      }
      on[ty * tw + tx] = n * 2 >= total && n > 0;
      if (n > 0) C[ty * tw + tx] = [Math.floor(r / n), Math.floor(g / n), Math.floor(b / n)];
    }
    const L = new Float64Array(N), vals = [];
    for (let i = 0; i < N; i++) if (on[i]) { L[i] = this.lum(C[i]); vals.push(L[i]); }
    if (!vals.length) throw new Error('그림에서 포켓몬을 찾지 못했어요');
    vals.sort((p, q) => p - q);
    const pct = q => vals[Math.min(vals.length - 1, Math.floor(q * vals.length))];
    const lo = pct(0.02), hi = Math.max(lo + 1, pct(0.98));
    const S = new Float64Array(N), E = new Float64Array(N);
    for (let i = 0; i < N; i++) if (on[i]) S[i] = Math.max(0, Math.min(255, (L[i] - lo) * 255 / (hi - lo)));
    for (let y = 0; y < th; y++) for (let x = 0; x < tw; x++) {
      const i = y * tw + x;
      if (!on[i]) continue;
      let s = 0, n = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= tw || ny >= th || !on[ny * tw + nx]) continue;
        s += S[ny * tw + nx]; n++;
      }
      E[i] = Math.max(0, Math.min(255, S[i] + 0.7 * (S[i] - s / n)));
    }
    const ev = []; for (let i = 0; i < N; i++) if (on[i]) ev.push(E[i]);
    ev.sort((p, q) => p - q);
    const epct = q => ev[Math.min(ev.length - 1, Math.floor(q * ev.length))];
    let m0 = epct(0.15), m1 = epct(0.5), m2 = epct(0.85);
    for (let it = 0; it < 15; it++) {
      let s0 = 0, s1 = 0, s2 = 0, n0 = 0, n1 = 0, n2 = 0;
      for (const v of ev) {
        const d0 = Math.abs(v - m0), d1 = Math.abs(v - m1), d2 = Math.abs(v - m2);
        if (d0 <= d1 && d0 <= d2) { s0 += v; n0++; } else if (d1 <= d2) { s1 += v; n1++; } else { s2 += v; n2++; }
      }
      if (n0) m0 = s0 / n0; if (n1) m1 = s1 / n1; if (n2) m2 = s2 / n2;
    }
    const t1 = Math.min((m0 + m1) / 2, epct(0.22)), t2 = Math.max(epct(0.55), Math.min((m1 + m2) / 2, epct(0.85)));
    const level = new Uint8Array(N);
    for (let y = 0; y < th; y++) for (let x = 0; x < tw; x++) {
      const i = y * tw + x;
      if (!on[i]) continue;
      const c = C[i], mx = Math.max(...c), mn = Math.min(...c);
      const whiteish = L[i] > 215 && (mx - mn) < 40;
      const e = E[i] + (this.dither ? (((x + y) & 1) === 0 ? 6 : -6) : 0);
      level[i] = whiteish ? 0 : e < t1 ? 3 : e < t2 ? 2 : 1;
    }
    let c1, c2;
    if (fixedPal) { c1 = fixedPal[1]; c2 = fixedPal[2]; }
    else {
      const mean = lv => { let r = 0, g = 0, b = 0, n = 0; for (let i = 0; i < N; i++) if (on[i] && level[i] === lv) { r += C[i][0]; g += C[i][1]; b += C[i][2]; n++; } return n ? [Math.floor(r / n), Math.floor(g / n), Math.floor(b / n)] : [128, 128, 128]; };
      c1 = this.lift(mean(1), 0.62, 0.85); c2 = this.lift(mean(2), 0.36, 0.55);
      if (this.hsl(c1)[2] < this.hsl(c2)[2] + 0.15) c1 = this.lift(c1, this.hsl(c2)[2] + 0.2, 0.9);
      c1 = SNAP(c1); c2 = SNAP(c2);
    }
    let img = newPic(size, size);
    const ox = Math.floor((size - tw) / 2), oy = size - th;
    for (let y = 0; y < th; y++) for (let x = 0; x < tw; x++) if (on[y * tw + x]) img.px[(oy + y) * size + ox + x] = level[y * tw + x];
    if (outline) {
      const copy = clonePic(img), ON = (x, y) => on[y * tw + x];
      for (let y = 0; y < th; y++) for (let x = 0; x < tw; x++) {
        if (!ON(x, y)) continue;
        if (x === 0 || y === 0 || x === tw - 1 || y === th - 1 || !ON(x - 1, y) || !ON(x + 1, y) || !ON(x, y - 1) || !ON(x, y + 1)) copy.px[(oy + y) * size + ox + x] = 3;
      }
      img = copy;
    }
    return { img, tiles, c1, c2 };
  },
  // 색상은 그대로, 밝기를 [minL, maxL] 사이로, 채도는 조금 올림
  lift(c, minL, maxL) {
    const [hd, s0, l0] = this.hsl(c), hue = hd / 360, sat = Math.min(1, s0 * 1.2 + 0.05), l = Math.max(minL, Math.min(maxL, l0));
    const f = (p, q, t) => { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1 / 6) return p + (q - p) * 6 * t; if (t < 0.5) return q; if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6; return p; };
    const qq = l < 0.5 ? l * (1 + sat) : l + sat - l * sat, pp = 2 * l - qq;
    return [Math.floor(f(pp, qq, hue + 1 / 3) * 255), Math.floor(f(pp, qq, hue) * 255), Math.floor(f(pp, qq, hue - 1 / 3) * 255)];
  },
  // 앞모습 그림으로 뒷모습 비슷하게: 좌우 뒤집고 윗부분을 크게 (2세대 뒷모습처럼 아래가 잘림)
  backSource(src) {
    const { w, h, data } = src, mask = this.mask(src);
    let x0 = w, y0 = h, x1 = -1, y1 = -1;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (mask[y * w + x]) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
    if (x1 < 0) throw new Error('그림에서 포켓몬을 찾지 못했어요');
    const cw = x1 - x0 + 1, ch = Math.floor((y1 - y0 + 1) * 0.68), out = new Uint8ClampedArray(cw * ch * 4);
    for (let y = 0; y < ch; y++) for (let x = 0; x < cw; x++) {
      const i = (y0 + y) * w + (x1 - x), o = (y * cw + x) * 4;
      if (!mask[i]) continue;
      out[o] = data[i * 4]; out[o + 1] = data[i * 4 + 1]; out[o + 2] = data[i * 4 + 2]; out[o + 3] = 255;
    }
    return { w: cw, h: ch, data: out };
  }
};

mixin(Rom.prototype, {
  monPaletteRGB(mon, shiny) { const o = this.monPalOff + mon * 8 + (shiny ? 4 : 0); return [WHITE, C555(this.w(o)), C555(this.w(o + 2)), BLACK]; },
  setMonPalette(mon, shiny, c1, c2) {
    const o = this.monPalOff + mon * 8 + (shiny ? 4 : 0), a = TO555(c1), b = TO555(c2);
    this.data[o] = a & 0xff; this.data[o + 1] = a >> 8; this.data[o + 2] = b & 0xff; this.data[o + 3] = b >> 8;
    this.dirty = true;
  },
  readPicP(mon, back) { const r = this.readPic(mon, back); return { w: r.tiles * 8, h: r.tiles * 8, px: r.img, tiles: r.tiles }; },
  // 그림을 압축해서 빈 공간에 쓰고 주소를 바꿈. 실패하면 이유
  // 압축한 그림을 넣을 빈 자리 (없으면 -1)
  allocPic(len) {
    this.loadSprites();   // picBankFix · picBanks
    for (const r of this.free) {
      const bank = Math.floor(r[0] / 0x4000);
      if (this.picBankFix.has(bank) || r[1] - r[0] < len) continue;   // FixPicBank 이 바꾸는 뱅크에는 안 씀
      if (this.picBanks && (bank < this.picBanks[0] || bank > this.picBanks[1])) continue;   // 크리스탈은 그림 뱅크만
      const p = r[0]; r[0] += len; return p;
    }
    return -1;
  },
  writePic(mon, back, pic, tiles) {
    const comp = Lz.compress(picToTiles(pic, true));
    const p = this.allocPic(comp.length);
    if (p < 0) return '롬에 그림을 넣을 빈 공간이 부족해요';
    this.data.set(comp, p);
    const e = this.picPtrOff + (mon - 1) * 6 + (back ? 3 : 0), addr = 0x4000 + p % 0x4000;
    this.data[e] = Math.floor(p / 0x4000) - (this.picBankAdd || 0); this.data[e + 1] = addr & 0xff; this.data[e + 2] = addr >> 8;
    if (!back) this.data[this.statOff(mon) + 17] = tiles | (tiles << 4);
    this.gfx.gfxCache.delete(p);
    this.dirty = true;
    return null;
  }
});

// ===== 67-owsprite.js
// ================================================================ 필드 캐릭터(주인공·NPC) 그림 읽기·쓰기 (RomOwSprite.cs 와 같음)
// 그림은 압축 없는 2bpp 타일. 한 장면 = 16×16 = 타일 4개 (왼위, 오른위, 왼아래, 오른아래)
const OW_WALK_FRAMES = ['아래', '위', '옆', '아래 걷기', '위 걷기', '옆 걷기'];
function owFrames(s) { return s.tiles / 4; }
function owFrameNames(s) { const f = owFrames(s); return f === 6 ? OW_WALK_FRAMES : f === 3 ? OW_WALK_FRAMES.slice(0, 3) : ['모습']; }
function owKind(s) { return s.type === 1 ? '걷는 캐릭터 (6장면)' : s.type === 2 ? '서 있는 캐릭터 (3장면)' : '움직이지 않는 물건 (1장면)'; }

mixin(Rom.prototype, {
  owSprites() {
    const g = this.gfx, res = [];
    if (!g.ok || !g.spritePtr) return res;
    const t = g.off(g.spriteBank, g.spritePtr), banks = this.data.length / 0x4000;
    for (let id = 1; id < 0x80; id++) {
      const e = t + (id - 1) * 6;
      if (e + 6 > this.data.length) break;
      const addr = this.w(e), n = this.data[e + 2], bank = this.data[e + 3], type = this.data[e + 4], pal = this.data[e + 5];
      if (bank < 1 || bank >= banks || !Rom.banked(addr) || type < 1 || type > 3 || pal > 7 || n === 0 || n % 64 !== 0) break;
      const s = { id, entry: e, bank, addr, type, pal, tiles: n / 16 * (type === 1 ? 2 : 1), get off() { return this.bank * 0x4000 + (this.addr - 0x4000); } };
      if (s.off + s.tiles * 16 > this.data.length) break;
      res.push(s);
    }
    return res;
  },
  // 장면들을 가로로 이어 붙인 그림 (가로 장면수×16, 세로 16)
  readOw(s) {
    const pic = newPic(owFrames(s) * 16, 16);
    for (let t = 0; t < s.tiles; t++) {
      const f = Math.floor(t / 4), q = t % 4, x0 = f * 16 + (q % 2) * 8, y0 = Math.floor(q / 2) * 8, o = s.off + t * 16;
      for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++)
        pic.px[(y0 + y) * pic.w + x0 + x] = ((this.data[o + y * 2] >> (7 - x)) & 1) | (((this.data[o + y * 2 + 1] >> (7 - x)) & 1) << 1);
    }
    return pic;
  },
  // 그림 크기가 그대로라 원래 자리에 씀
  writeOw(s, pic) {
    for (let t = 0; t < s.tiles; t++) {
      const f = Math.floor(t / 4), q = t % 4, x0 = f * 16 + (q % 2) * 8, y0 = Math.floor(q / 2) * 8, o = s.off + t * 16;
      for (let y = 0; y < 8; y++) {
        let lo = 0, hi = 0;
        for (let x = 0; x < 8; x++) { const c = pic.px[(y0 + y) * pic.w + x0 + x]; lo |= (c & 1) << (7 - x); hi |= ((c >> 1) & 1) << (7 - x); }
        this.data[o + y * 2] = lo; this.data[o + y * 2 + 1] = hi;
      }
    }
    this.dirty = true;
  },
  sharingOw(s, all) { return all.filter(x => x.id !== s.id && x.off < s.off + s.tiles * 16 && s.off < x.off + x.tiles * 16); },
  // 이 캐릭터만 쓰는 그림으로 복사 (빈 공간). 실패하면 이유
  separateOw(s) {
    const n = s.tiles * 16, a = this.alloc(n + 1);
    if (!a) return '롬에 남은 빈 공간이 부족해요';
    this.data.copyWithin(a.p, s.off, s.off + n);
    this.data[a.p + n] = a.fill === 0xFF ? 0x00 : 0xFF;
    s.bank = Math.floor(a.p / 0x4000); s.addr = 0x4000 + a.p % 0x4000;
    this.data[s.entry] = s.addr & 0xff; this.data[s.entry + 1] = s.addr >> 8; this.data[s.entry + 3] = s.bank;
    this.dirty = true;
    return null;
  },
  setOwPal(s, pal) { s.pal = pal; this.data[s.entry + 5] = pal; this.dirty = true; },
  objPalBase() { const g = this.gfx; return g.ok && g.objPalPtr ? g.off(g.palBank, g.objPalPtr) : -1; },
  // 캐릭터 색 묶음(0~7). 0번 색은 투명
  objPal(pal) {
    const b = this.objPalBase();
    if (b < 0) return [[255, 255, 255], [211, 211, 211], [128, 128, 128], [0, 0, 0]];
    const o = b + 64 + (pal & 7) * 8;
    return [0, 1, 2, 3].map(i => C555(this.w(o + i * 2)));
  },
  // 색 묶음 바꾸기. 아침·낮·밤·어두운 곳 4벌 중 낮과 같던 색은 같은 색으로, 시간마다 다르던 색은 원래 비율대로
  setObjPal(pal, cols) {
    const b = this.objPalBase();
    if (b < 0) return;
    for (let i = 1; i < 4; i++) {
      const day = this.w(b + 64 + pal * 8 + i * 2), nw = TO555(cols[i]);
      for (let set = 0; set < 4; set++) {
        const o = b + set * 64 + pal * 8 + i * 2, old = this.w(o);
        let v;
        if (set === 1 || old === day) v = nw;
        else { v = 0; for (let sh = 0; sh <= 10; sh += 5) { const dc = (day >> sh) & 31, oc = (old >> sh) & 31, nc = (nw >> sh) & 31; v |= (dc === 0 ? oc : Math.min(31, Math.floor(nc * oc / dc))) << sh; } }
        this.data[o] = v & 0xff; this.data[o + 1] = v >> 8;
      }
    }
    this.dirty = true;
  }
});

// ===== 68-pixelcanvas.js
// ================================================================ 도트 그리기 판 (PixelEditor.cs 의 PixelCanvas · BrushUi) — 도트 편집 창·타이틀 창이 같이 씀
// o = { pic, palAt(x, y) → [rgb×4], transparent0, frameW, overlay(g, zoom), onChange(), onPick(x, y), onHover(cell), importPic(img) → pic, exportName }
function pixelCanvas(o) {
  const st = { pic: clonePic(o.pic), tool: 0, color: 3, brush: 1, round: false, mirror: false, grid: true, zoom: 8, undo: [], redo: [], hover: null, frameW: o.frameW || 0 };
  const W = st.pic.w, H = st.pic.h, T0 = !!o.transparent0;
  const ctl = { st };
  const cv = el('canvas', { style: 'image-rendering:pixelated;cursor:crosshair;display:block' });
  const wrap = el('div', { style: 'overflow:auto;background:#464646;padding:8px;flex:1;min-width:0;max-height:62vh' }, cv);
  const toolNames = ['연필 (B)', '채우기 (G)', '직선 (L)', '네모 (R)', '색 집기 (I)'];
  const toolBtns = toolNames.map((n, i) => el('button', { text: n, style: 'width:140px', onclick: () => { st.tool = i; showTools(); } }));
  const showTools = () => toolBtns.forEach((b, i) => { b.style.background = i === st.tool ? '#cfe0ff' : ''; b.style.fontWeight = i === st.tool ? 'bold' : ''; });
  const undoBtn = el('button', { text: '되돌리기', onclick: () => ctl.undo() }), redoBtn = el('button', { text: '다시하기', onclick: () => ctl.redo() });
  ctl.snapshot = () => { st.undo.push(st.pic.px.slice()); st.redo = []; };
  ctl.undo = () => { if (!st.undo.length) return; st.redo.push(st.pic.px.slice()); st.pic.px = st.undo.pop(); ctl.changed(); };
  ctl.redo = () => { if (!st.redo.length) return; st.undo.push(st.pic.px.slice()); st.pic.px = st.redo.pop(); ctl.changed(); };
  const set = (x, y, c) => {
    if (x < 0 || y < 0 || x >= W || y >= H) return;
    st.pic.px[y * W + x] = c;
    if (st.mirror) { const fw = st.frameW || W, f0 = Math.floor(x / fw) * fw, mx = f0 + (fw - 1 - (x - f0)); if (mx >= 0 && mx < W) st.pic.px[y * W + mx] = c; }
  };
  // 붓 한 번 찍기: (x, y) 를 가운데로 굵기만큼
  const stamp = (x, y, c) => {
    const s = Math.max(1, st.brush), a = Math.floor((s - 1) / 2), r = s / 2;
    for (let dy = 0; dy < s; dy++) for (let dx = 0; dx < s; dx++) {
      if (st.round && s > 2) { const cx = dx - (s - 1) / 2, cy = dy - (s - 1) / 2; if (cx * cx + cy * cy > r * r) continue; }
      set(x - a + dx, y - a + dy, c);
    }
  };
  const line = (a, b, c) => {
    let dx = Math.abs(b[0] - a[0]), dy = -Math.abs(b[1] - a[1]), sx = a[0] < b[0] ? 1 : -1, sy = a[1] < b[1] ? 1 : -1, err = dx + dy, x = a[0], y = a[1];
    for (;;) { stamp(x, y, c); if (x === b[0] && y === b[1]) break; const e2 = 2 * err; if (e2 >= dy) { err += dy; x += sx; } if (e2 <= dx) { err += dx; y += sy; } }
  };
  const fill = (x, y, c) => {
    const from = st.pic.px[y * W + x];
    if (from === c) return;
    const stack = [[x, y]];
    while (stack.length) {
      const [px, py] = stack.pop();
      if (px < 0 || py < 0 || px >= W || py >= H || st.pic.px[py * W + px] !== from) continue;
      st.pic.px[py * W + px] = c;
      stack.push([px + 1, py], [px - 1, py], [px, py + 1], [px, py - 1]);
    }
  };
  let drag = null, last = null, before = null;
  const shape = to => {
    st.pic.px = before.slice();
    if (st.tool === 2) line(drag, to, st.color);
    else { const a = drag; line(a, [to[0], a[1]], st.color); line([to[0], a[1]], to, st.color); line(to, [a[0], to[1]], st.color); line([a[0], to[1]], a, st.color); }
  };
  const cell = e => { const r = cv.getBoundingClientRect(), k = r.width / cv.width; const x = Math.floor((e.clientX - r.left) / k / st.zoom), y = Math.floor((e.clientY - r.top) / k / st.zoom); return x >= 0 && y >= 0 && x < W && y < H ? [x, y] : null; };
  cv.addEventListener('contextmenu', e => e.preventDefault());
  cv.addEventListener('mousedown', e => {
    const c = cell(e); if (!c) return;
    e.preventDefault();
    if (e.button === 2 || st.tool === 4) { st.color = st.pic.px[c[1] * W + c[0]]; if (o.onPick) o.onPick(c[0], c[1]); return; }
    if (e.button !== 0) return;
    ctl.snapshot();
    if (st.tool === 0) { stamp(c[0], c[1], st.color); last = c; drag = c; }
    else if (st.tool === 1) fill(c[0], c[1], st.color);
    else if (st.tool === 2 || st.tool === 3) { drag = c; before = st.pic.px.slice(); shape(c); }
    ctl.changed();
  });
  cv.addEventListener('mousemove', e => {
    const c = cell(e);
    if ((c && (!st.hover || c[0] !== st.hover[0] || c[1] !== st.hover[1])) || (!c && st.hover)) { st.hover = c; if (o.onHover) o.onHover(c); ctl.draw(); }
    if (!c || !(e.buttons & 1) || !drag) return;
    if (st.tool === 0 && (c[0] !== last[0] || c[1] !== last[1])) { line(last, c, st.color); last = c; ctl.changed(); }
    else if ((st.tool === 2 || st.tool === 3) && before) { shape(c); ctl.changed(); }
  });
  cv.addEventListener('mouseup', () => { drag = last = before = null; });
  cv.addEventListener('mouseleave', () => { st.hover = null; if (o.onHover) o.onHover(null); ctl.draw(); });
  cv.addEventListener('wheel', e => { if (e.ctrlKey) { e.preventDefault(); ctl.zoomBy(e.deltaY < 0 ? 2 : -2); } }, { passive: false });
  ctl.zoomBy = d => { st.zoom = Math.max(2, Math.min(40, st.zoom + d)); ctl.draw(); };

  ctl.draw = () => {
    const z = st.zoom, w = W * z, h = H * z;
    if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
    const g = cv.getContext('2d'); g.imageSmoothingEnabled = false;
    if (T0) { const k = Math.max(4, z / 2); for (let y = 0; y < h; y += k) for (let x = 0; x < w; x += k) { g.fillStyle = ((x / k + y / k) & 1) ? '#bebebe' : '#e1e1e1'; g.fillRect(x, y, k, k); } }
    else g.clearRect(0, 0, w, h);
    g.drawImage(picCanvas(st.pic, o.palAt, T0), 0, 0, w, h);
    if (o.overlay) o.overlay(g, z);
    g.lineWidth = 1;
    if (st.grid && z >= 5) { g.strokeStyle = 'rgba(0,0,0,.24)'; g.beginPath(); for (let x = 0; x <= W; x++) { g.moveTo(x * z + .5, 0); g.lineTo(x * z + .5, h); } for (let y = 0; y <= H; y++) { g.moveTo(0, y * z + .5); g.lineTo(w, y * z + .5); } g.stroke(); }
    g.strokeStyle = 'rgba(0,90,255,.47)'; g.beginPath(); for (let x = 0; x <= W; x += 8) { g.moveTo(x * z + .5, 0); g.lineTo(x * z + .5, h); } for (let y = 0; y <= H; y += 8) { g.moveTo(0, y * z + .5); g.lineTo(w, y * z + .5); } g.stroke();
    if (st.frameW && !o.hideFrames) { g.strokeStyle = 'orangered'; g.lineWidth = 3; g.beginPath(); for (let x = 0; x <= W; x += st.frameW) { g.moveTo(x * z, 0); g.lineTo(x * z, h); } g.stroke(); }
    if (st.mirror) { const fw = st.frameW || W; g.strokeStyle = 'rgba(255,0,200,.63)'; g.lineWidth = 1; g.setLineDash([4, 3]); g.beginPath(); for (let x = 0; x < W; x += fw) { g.moveTo((x + fw / 2) * z, 0); g.lineTo((x + fw / 2) * z, h); } g.stroke(); g.setLineDash([]); }
    if (st.hover) {
      const s = st.tool === 0 || st.tool === 2 || st.tool === 3 ? Math.max(1, st.brush) : 1, a = Math.floor((s - 1) / 2);
      g.strokeStyle = 'yellow'; g.lineWidth = 2;
      if (st.round && s > 2) { g.beginPath(); g.arc((st.hover[0] - a + s / 2) * z, (st.hover[1] - a + s / 2) * z, s * z / 2, 0, 7); g.stroke(); }
      else g.strokeRect((st.hover[0] - a) * z, (st.hover[1] - a) * z, s * z, s * z);
    }
  };
  ctl.changed = () => { undoBtn.disabled = !st.undo.length; redoBtn.disabled = !st.redo.length; if (o.onChange) o.onChange(); ctl.draw(); };
  // 연필 굵기 (1~50칸)
  const bnum = num(1, 1, 50), bbar = el('input', { type: 'range', min: 1, max: 50, value: 1, style: 'width:145px' });
  ctl.setBrush = v => { st.brush = Math.max(1, Math.min(50, v)); bnum.value = st.brush; bbar.value = st.brush; ctl.draw(); };
  bnum.addEventListener('input', () => ctl.setBrush(+bnum.value || 1)); bbar.addEventListener('input', () => ctl.setBrush(+bbar.value));
  const [rc, rl] = check('둥근 붓', false); rc.addEventListener('change', () => { st.round = rc.checked; ctl.draw(); });
  const [mc, ml] = check(o.mirrorLabel || '좌우 대칭으로 찍기', false); mc.addEventListener('change', () => { st.mirror = mc.checked; if (o.onMirror) o.onMirror(mc.checked); ctl.draw(); });
  const [gc, gl] = check('격자 보기', true); gc.addEventListener('change', () => { st.grid = gc.checked; ctl.draw(); });
  ctl.left = el('div', { style: 'width:170px;display:flex;flex-direction:column;gap:4px;flex-shrink:0' },
    el('b', { text: '도구' }), ...toolBtns, el('div', { class: 'hint', text: '오른쪽 클릭 = 색 집기' }),
    el('b', { text: '연필 굵기 (1~50칸)', style: 'margin-top:8px' }), el('div', { class: 'bar' }, bnum, rl), bbar, el('div', { class: 'hint', text: '[ ] 키 = 가늘게·굵게' }),
    ml, gl, ...(o.leftExtra || []),
    el('div', { class: 'bar' }, el('button', { text: '확대 +', onclick: () => ctl.zoomBy(o.zoomStep || 2) }), el('button', { text: '축소 −', onclick: () => ctl.zoomBy(-(o.zoomStep || 2)) })),
    el('div', { class: 'hint', text: 'Ctrl+휠 = 확대·축소' }),
    el('div', { class: 'bar' }, undoBtn, redoBtn),
    el('button', { text: '그림 파일 불러오기…', style: 'margin-top:8px', onclick: async () => {
      try {
        const img = await pickImageFile(); if (!img) return;
        ctl.snapshot();
        st.pic = o.importPic ? o.importPic(img, st.pic) : picFromImage(img, W, H, o.palAt(0, 0), T0);
        ctl.changed();
      } catch (e) { alert('그림을 열 수 없어요: ' + e.message); }
    } }),
    el('button', { text: 'PNG로 저장…', onclick: () => downloadCanvas(picCanvas(st.pic, o.palAt, T0), (o.exportName || '그림') + '.png') }),
    o.noClear ? null : el('button', { text: '모두 지우기', onclick: () => { ctl.snapshot(); st.pic.px.fill(0); ctl.changed(); } }));
  ctl.wrap = wrap; ctl.cv = cv;
  // 키: Ctrl+Z/Y, B G L R I 도구, 1~4 색, [ ] 굵기
  const onKey = e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z')) { e.preventDefault(); e.stopPropagation(); ctl.undo(); }
    else if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || e.key === 'Y')) { e.preventDefault(); e.stopPropagation(); ctl.redo(); }
    else if (!e.ctrlKey && !e.metaKey) {
      const t = ['b', 'g', 'l', 'r', 'i'].indexOf(e.key.toLowerCase());
      if (t >= 0) { st.tool = t; showTools(); }
      else if (e.key >= '1' && e.key <= '4') { st.color = +e.key - 1; if (ctl.onColorKey) ctl.onColorKey(); }
      else if (e.key === '[') ctl.setBrush(st.brush - 1);
      else if (e.key === ']') ctl.setBrush(st.brush + 1);
    }
  };
  document.addEventListener('keydown', onKey, true);
  ctl.dispose = () => document.removeEventListener('keydown', onKey, true);
  // 창 크기에 맞는 확대
  ctl.fit = () => { st.zoom = Math.max(2, Math.min(40, Math.floor(Math.min((wrap.clientWidth - 30) / W, (Math.min(window.innerHeight * 0.6, 600) - 30) / H)))); ctl.draw(); };
  showTools();
  return ctl;
}

// R·G·B (게임보이 컬러 0~31) 입력 칸 3개 → { els, set(rgb), enable(bool) }
function rgbInputs(onChange) {
  const nr = num(0, 0, 31), ng = num(0, 0, 31), nb = num(0, 0, 31);
  for (const n of [nr, ng, nb]) { n.style.width = '52px'; n.addEventListener('input', () => onChange(C555((+nr.value & 31) | (+ng.value & 31) << 5 | (+nb.value & 31) << 10))); }
  return {
    els: [el('span', { text: 'R' }), nr, el('span', { text: 'G' }), ng, el('span', { text: 'B' }), nb],
    set(c) { const v = TO555(c); nr.value = v & 31; ng.value = (v >> 5) & 31; nb.value = (v >> 10) & 31; },
    enable(on) { nr.disabled = ng.disabled = nb.disabled = !on; }
  };
}

// ===== 69-title.js
// ================================================================ 타이틀 화면 (배경: 로고·구름·저작권 글자) 읽기·쓰기 (RomTitle.cs 와 같음)
// 한글 금·은: 로고 타일(압축)을 VRAM $9000 에, 배치표(반복·증가 묶음 압축)를 $9800 에 풀고,
// 영역별 색 번호(속성)는 코드가 네모로 칠함. 색은 배경 팔레트 5개. 호오(날아다니는 새)는 스프라이트라 따로임
const TITLE_W = 32, TITLE_H = 18;
function titleHasHigh(t) { return t.loads.some(l => l.dest === 0x8800); }
function titleHighCount(t) { return t.objTop ? 120 : 128; }
function titleMaxTiles(t) { return 128 + (titleHasHigh(t) || t.hookCall >= 0 ? titleHighCount(t) : 0); }

mixin(Rom.prototype, {
  // 코드 모양으로 타이틀 데이터를 찾음. 못 찾으면 null
  findTitle() {
    const d = this.data;
    const m = this.findPattern([0x21, -1, -1, 0x11, 0x00, 0x98, 0x3E, -1, 0xCD, -1, -1, 0xFE, 0xFF], 0x4000, 0x8000);
    if (m < 0) return null;
    const t = { loads: [], objTop: false, hookCall: -1, decomp: 0, mapPtr: m + 1, mapBankPtrs: [], palOff: -1, tiles: [], map: new Array(TITLE_W * TITLE_H).fill(0), attr: new Array(TITLE_W * TITLE_H).fill(0) };
    const bank = d[m + 7];
    for (let i = m + 6; i < m + 64; i++) if (d[i] === 0x3E && d[i + 1] === bank && d[i + 2] === 0xCD) t.mapBankPtrs.push(i + 1);
    t.mapOff = this.off(bank, this.w(t.mapPtr));
    const call = this.findPattern([0xCD, m & 0xff, (0x4000 + m % 0x4000) >> 8], 0x4000, 0x8000);
    if (call < 0) return null;
    for (let i = Math.max(0x4000, call - 0x60); i < call; i++) {
      if (d[i] !== 0x21 || d[i + 3] !== 0x11 || d[i + 6] !== 0x3E || d[i + 8] !== 0xCD) continue;
      const dest = this.w(i + 4);
      if (dest !== 0x9000 && dest !== 0x8800) continue;
      t.loads = t.loads.filter(x => x.dest !== dest);
      t.loads.push({ ptr: i + 1, bankPtr: i + 7, dest });
      if (dest === 0x9000) t.decomp = this.w(i + 9);
    }
    if (!t.loads.some(l => l.dest === 0x9000)) return null;
    for (let i = Math.max(0x4000, call - 0x60); i < call; i++) if (d[i] === 0x11 && d[i + 1] === 0x80 && d[i + 2] === 0x8F) t.objTop = true;
    // 배치표 그리기 바로 앞의 call: 전에 이 편집기가 끼워 넣은 코드면 그 안의 $8800 풀기를 읽고, 아니면 끼울 자리로 기억
    if (d[call - 3] === 0xCD && !titleHasHigh(t)) {
      const target = this.w(call - 2);
      if (target >= 0x4000) {
        const h = this.off(Math.floor(call / 0x4000), target);
        if (d[h] === 0x21 && d[h + 3] === 0x11 && d[h + 4] === 0x00 && d[h + 5] === 0x88 && d[h + 6] === 0x3E && d[h + 8] === 0xCD && d[h + 11] === 0xC3)
          t.loads.push({ ptr: h + 1, bankPtr: h + 7, dest: 0x8800 });
        else if (t.decomp !== 0) t.hookCall = call - 3;
      }
    }
    for (let i = 0; i < 256; i++) t.tiles.push(new Uint8Array(16));
    for (const ld of t.loads) {
      const first = ld.dest === 0x9000 ? 0 : 128;
      const raw = this.gfx.decompress(this.off(d[ld.bankPtr], this.w(ld.ptr)));
      for (let i = 0; i < raw.length / 16 && i < 128; i++) t.tiles[first + i] = raw.slice(i * 16, i * 16 + 16);
    }
    let p = t.mapOff, n = 0;
    // 영문판 금·은: 배치표가 압축 없이 FF 까지 그대로 (jr z / inc hl / ld [de],a / inc de)
    t.raw = d[m + 13] === 0x28 && d[m + 15] === 0x23 && d[m + 16] === 0x12 && d[m + 17] === 0x13;
    if (t.raw) {
      while (n < t.map.length && d[p] !== 0xFF) t.map[n++] = d[p++];
      if (n < TITLE_W * 12) return null;
    } else {
      while (n < t.map.length && d[p] !== 0xFF) {
        const b = d[p++], v = d[p++];
        for (let i = 0; i < (b & 0x7F) && n < t.map.length; i++) t.map[n++] = (b & 0x80) ? (v + i) & 0xFF : v;
      }
      if (n !== t.map.length) return null;
    }
    this.readTitleAttr(call - 0x80, t);
    for (let g = 0; ; g++) {
      g = this.findPattern([0x21, -1, -1, 0x11, -1, -1, 0x01, 0x28, 0x00, 0xCD, -1, -1, 0x21, -1, -1], g, d.length);
      if (g < 0) break;
      if (this.w(g + 13) === this.w(g + 1) + 0x28) { t.palOff = this.off(Math.floor(g / 0x4000), this.w(g + 1)); break; }
    }
    return t;
  },
  // 영역별 색 번호: VRAM 1번 뱅크로 바꾼 뒤 "ld hl / ld bc / ld a / call 칠하기" 를 흉내 냄
  readTitleAttr(from, t) {
    const d = this.data, s = this.findPattern([0x3E, 0x01, 0xE0, 0x4F], from, from + 0x200);
    if (s < 0) return;
    let pc = s + 4, hl = 0, bc = 0, a = 0;
    const setA = (i, v) => { if (i >= 0 && i < t.attr.length) t.attr[i] = v & 7; };
    for (let k = 0; k < 40 && pc < s + 120; k++) {
      const op = d[pc];
      if (op === 0x21) { hl = this.w(pc + 1); pc += 3; }
      else if (op === 0x01) { bc = this.w(pc + 1); pc += 3; }
      else if (op === 0x3E) { a = d[pc + 1]; if (d[pc + 2] === 0xE0 && d[pc + 3] === 0x4F) break; pc += 2; }
      else if (op === 0xAF) { a = 0; pc++; }
      else if (op === 0xCD) {
        const target = this.w(pc + 1);
        if (target < 0x4000) for (let i = 0; i < bc; i++) setA(hl - 0x9800 + i, a);
        else for (let r = 0; r < (bc >> 8); r++) for (let c = 0; c < (bc & 0xFF); c++) setA(hl - 0x9800 + r * 32 + c, a);
        pc += 3;
      } else break;
    }
  },
  titlePals(t) {
    const res = [];
    for (let p = 0; p < 5; p++) res.push([0, 1, 2, 3].map(i => t.palOff < 0 ? [[255, 255, 255], [192, 192, 192], [128, 128, 128], [0, 0, 0]][i] : C555(this.w(t.palOff + p * 8 + i * 2))));
    return res;
  },
  // 배경 전체(32×18 타일)를 색 번호 그림으로
  titleImage(t) {
    const pic = newPic(TITLE_W * 8, TITLE_H * 8);
    for (let i = 0; i < t.map.length; i++) {
      const b = t.tiles[t.map[i] & 0xFF], x0 = i % 32 * 8, y0 = Math.floor(i / 32) * 8;
      for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) pic.px[(y0 + y) * pic.w + x0 + x] = ((b[y * 2] >> (7 - x)) & 1) | (((b[y * 2 + 1] >> (7 - x)) & 1) << 1);
    }
    return pic;
  },
  // 서로 다른 8×8 칸 수
  titleTileCount(pic) {
    const set = new Set();
    for (let ty = 0; ty < TITLE_H; ty++) for (let tx = 0; tx < TITLE_W; tx++) {
      let s = '';
      for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) s += pic.px[(ty * 8 + y) * pic.w + tx * 8 + x];
      set.add(s);
    }
    return set.size;
  },
  // 그림 → 타일 나누기 → 같은 타일 합치기 → 압축해서 빈 공간에 쓰고 코드의 주소를 바꿈. 실패하면 이유
  writeTitle(t, pic, pals) {
    const d = this.data, tiles = [], index = new Map(), map = new Array(t.map.length);
    for (let i = 0; i < map.length; i++) {
      const b = [], x0 = i % 32 * 8, y0 = Math.floor(i / 32) * 8;
      for (let y = 0; y < 8; y++) {
        let lo = 0, hi = 0;
        for (let x = 0; x < 8; x++) { const c = pic.px[(y0 + y) * pic.w + x0 + x]; lo |= (c & 1) << (7 - x); hi |= ((c >> 1) & 1) << (7 - x); }
        b.push(lo, hi);
      }
      const key = b.join(',');
      let k = index.get(key);
      if (k === undefined) { k = tiles.length; index.set(key, k); tiles.push(b); }
      map[i] = k;
    }
    if (tiles.length > titleMaxTiles(t)) return '그림이 너무 복잡해요: 서로 다른 8×8 칸이 ' + tiles.length + '개예요 (이 롬은 최대 ' + titleMaxTiles(t) + '개). 같은 무늬를 반복하거나 빈 칸을 늘려 주세요';
    const w16 = (o, v) => { d[o] = v & 0xff; d[o + 1] = v >> 8; };
    // 128칸이 넘는데 $8800 에 푸는 코드가 없으면 끼워 넣음: ld hl,타일 / ld de,$8800 / ld a,뱅크 / call FarDecompress / jp 원래 부르던 곳
    if (tiles.length > 128 && !titleHasHigh(t)) {
      if (t.hookCall < 0) return '이 롬은 타이틀 타일을 128개까지만 넣을 수 있어요';
      const bank = Math.floor(t.hookCall / 0x4000), hp = this.allocInBank(bank, 14);
      if (hp < 0) return '타이틀 코드 뱅크에 빈 공간이 없어서 128칸을 넘길 수 없어요';
      const orig = this.w(t.hookCall + 1);
      d.set([0x21, 0, 0, 0x11, 0x00, 0x88, 0x3E, 0, 0xCD, t.decomp & 0xff, t.decomp >> 8, 0xC3, orig & 0xff, orig >> 8], hp);
      w16(t.hookCall + 1, 0x4000 + hp % 0x4000);
      t.loads.push({ ptr: hp + 1, bankPtr: hp + 7, dest: 0x8800 });
      t.hookCall = -1;
    }
    for (const ld of t.loads) {
      const first = ld.dest === 0x9000 ? 0 : 128;
      const part = tiles.slice(first, first + (ld.dest === 0x8800 ? titleHighCount(t) : 128));
      if (!part.length) continue;
      const comp = Lz.compress(part.flat());
      const a = this.alloc(comp.length + 1);
      if (!a) return '롬에 남은 빈 공간이 부족해요';
      d.set(comp, a.p); d[a.p + comp.length] = a.fill === 0xFF ? 0 : 0xFF;
      w16(ld.ptr, 0x4000 + a.p % 0x4000); d[ld.bankPtr] = Math.floor(a.p / 0x4000);
    }
    // 배치표: 같은 타일 반복(0~127) / 1씩 늘어나는 타일(128+) 묶음
    const enc = [];
    if (t.raw) enc.push(...map);
    else for (let i = 0; i < map.length;) {
      let inc = 1; while (i + inc < map.length && inc < 127 && map[i + inc] === map[i] + inc) inc++;
      let rep = 1; while (i + rep < map.length && rep < 127 && map[i + rep] === map[i]) rep++;
      if (inc >= rep && inc > 1) { enc.push(0x80 | inc, map[i]); i += inc; } else { enc.push(rep, map[i]); i += rep; }
    }
    enc.push(0xFF);
    const mp = this.alloc(enc.length + 1);
    if (!mp) return '롬에 남은 빈 공간이 부족해요';
    d.set(enc, mp.p); d[mp.p + enc.length] = mp.fill === 0xFF ? 0 : 0xFF;
    w16(t.mapPtr, 0x4000 + mp.p % 0x4000); for (const bp of t.mapBankPtrs) d[bp] = Math.floor(mp.p / 0x4000);
    if (t.palOff >= 0) for (let p = 0; p < 5; p++) for (let i = 0; i < 4; i++) w16(t.palOff + p * 8 + i * 2, TO555(pals[p][i]));
    t.mapOff = mp.p; t.map = map;
    for (let i = 0; i < 256; i++) t.tiles[i] = i < tiles.length ? Uint8Array.from(tiles[i]) : new Uint8Array(16);
    this.dirty = true;
    return null;
  }
});

// ===== 70-audioconv.js
// ================================================================ 음악 파일(MP3·WAV·FLAC·OGG·M4A … + MIDI) → 게임보이 4채널 칩튠 (AudioConverter.cs 와 같음)
//  · 템포·박자 위치 자동 감지 (온셋 자기상관)
//  · FFT 배음 합산으로 멜로디 / 화음 / 베이스 음 높이 추적 (비터비로 매끄럽게 이음)
//  · 대역별 타격 감지로 킥 / 스네어 / 하이햇
const AudioConverter = (() => {
  const MAX_STEPS = 4000, MAX_SECONDS = 180;
  let lastInfo = '';
  const put = (t, ch, step, midi, dur, vol) => {
    if (step < 0 || step >= t.totalSteps) return;
    const n = t.channels[ch][step];
    if (ch === 3) { n.pitch = midi; n.octave = 0; }
    else { n.pitch = ((midi % 12) + 12) % 12 + 1; n.octave = Math.max(1, Math.min(7, Math.floor(midi / 12) - 1)); }
    n.duration = Math.max(1, Math.min(16, dur)); n.volume = Math.max(1, Math.min(15, vol));
  };
  // 다음 음이 시작하기 전에 끝나도록 길이 자르기
  const clipDurations = t => {
    for (let ch = 0; ch < 3; ch++) {
      const c = t.channels[ch]; let last = -1;
      for (let i = 0; i < c.length; i++) { if (!c[i].pitch) continue; if (last >= 0 && last + c[last].duration > i) c[last].duration = Math.max(1, i - last); last = i; }
    }
  };
  const fold = (m, lo, hi) => { while (m < lo) m += 12; while (m > hi) m -= 12; return m; };

  // ================================================================ MIDI
  function convertMidi(bytes, title, targetSteps, transpose) {
    const b = bytes;
    if (b.length < 14 || b[0] !== 0x4D || b[1] !== 0x54 || b[2] !== 0x68 || b[3] !== 0x64) throw new Error('유효한 MIDI 파일이 아닙니다.');
    const numTracks = (b[10] << 8) | b[11];
    let division = (b[12] << 8) | b[13];
    if (division <= 0 || (division & 0x8000)) division = 96;
    let p = 14, usPerQuarter = -1;
    const notes = [];
    for (let t = 0; t < numTracks && p < b.length - 8; t++) {
      if (b[p] !== 0x4D || b[p + 1] !== 0x54 || b[p + 2] !== 0x72 || b[p + 3] !== 0x6B) break;
      const trkLen = (b[p + 4] << 24) | (b[p + 5] << 16) | (b[p + 6] << 8) | b[p + 7];
      p += 8;
      const end = Math.min(b.length, p + trkLen);
      let abs = 0, lastStatus = 0;
      const open = new Map();
      const vlq = () => { let v = 0; while (p < end) { const x = b[p++]; v = v * 128 + (x & 0x7F); if (!(x & 0x80)) break; } return v; };
      while (p < end) {
        abs += vlq();
        if (p >= end) break;
        let status = b[p];
        if (status & 0x80) { p++; if (status < 0xF0) lastStatus = status; } else status = lastStatus;
        const type = status & 0xF0, chn = status & 0x0F;
        if (status === 0xFF) {
          const meta = b[p++], len = vlq();
          if (meta === 0x51 && len === 3 && usPerQuarter < 0) usPerQuarter = (b[p] << 16) | (b[p + 1] << 8) | b[p + 2];
          p += len;
        } else if (status === 0xF0 || status === 0xF7) { p += vlq(); }
        else if (type === 0x90 || type === 0x80) {
          const note = b[p++], vel = b[p++], key = chn << 8 | note;
          const on = open.get(key);
          if (on) { on.endTick = abs; open.delete(key); }
          if (type === 0x90 && vel > 0) { const ev = { tick: abs, endTick: -1, note, velocity: vel, channel: chn }; notes.push(ev); open.set(key, ev); }
        } else if (type === 0xA0 || type === 0xB0 || type === 0xE0) p += 2;
        else if (type === 0xC0 || type === 0xD0) p += 1;
        else break;
      }
      for (const ev of open.values()) ev.endTick = abs;
      p = end;
    }
    if (!notes.length) throw new Error('MIDI 안에 음표가 없어요.');
    if (usPerQuarter <= 0) usPerQuarter = 500000;
    const ticksPerStep = Math.max(1, division / 4), bpm = Math.round(60000000 / usPerQuarter);
    const lastTick = Math.max(...notes.map(n => Math.max(n.tick, n.endTick)));
    let steps = targetSteps > 0 ? targetSteps : Math.ceil(lastTick / ticksPerStep) + 1;
    steps = Math.max(16, Math.min(MAX_STEPS, steps));
    const track = RomMusic.newTrack(title, steps, Math.max(30, Math.min(400, bpm)));
    const byStep = [];
    for (const n of notes) { const s = Math.round(n.tick / ticksPerStep); if (s < 0 || s >= steps) continue; (byStep[s] = byStep[s] || []).push(n); }
    const durOf = n => Math.max(1, Math.round(((n.endTick > n.tick ? n.endTick : n.tick + ticksPerStep) - n.tick) / ticksPerStep));
    const drumKindGm = note => [35, 36, 41, 43].includes(note) ? 1 : [37, 38, 39, 40, 45, 47, 48, 50].includes(note) ? 2 : [49, 52, 55, 57].includes(note) ? 4 : 3;
    for (let s = 0; s < steps; s++) {
      const list = byStep[s];
      if (!list) continue;
      const drums = list.filter(n => n.channel === 9);
      if (drums.length) put(track, 3, s, Math.min(...drums.map(n => drumKindGm(n.note))), 1, Math.max(8, Math.floor(Math.max(...drums.map(n => n.velocity)) / 8)));
      const tones = list.filter(n => n.channel !== 9).map(n => ({ n, m: n.note + transpose })).sort((x, y) => y.m - x.m);
      if (!tones.length) continue;
      // 제일 높은 음 = 멜로디, 제일 낮은 음 = 베이스, 그 사이 다른 음 = 화음
      const mel = tones[0], low = tones[tones.length - 1];
      put(track, 0, s, fold(mel.m, 55, 88), durOf(mel.n), Math.max(9, Math.floor(mel.n.velocity / 8) + 2));
      if (tones.length > 1 && low.m < 60) put(track, 2, s, fold(low.m, 33, 57), durOf(low.n), 15);
      const mid = tones.slice(1).find(x => x !== low && x.m % 12 !== mel.m % 12) || (tones.length > 1 && low.m >= 60 ? low : null);
      if (mid) put(track, 1, s, fold(mid.m, 52, 81), durOf(mid.n), Math.max(7, Math.floor(mid.n.velocity / 10)));
    }
    clipDurations(track);
    lastInfo = 'MIDI: 템포 ' + track.bpm + ' BPM · ' + steps + '스텝 (' + Math.round(steps * 15 / track.bpm) + '초)';
    return track;
  }

  // ================================================================ 분석 도우미
  const hann = n => { const w = new Float64Array(n); for (let i = 0; i < n; i++) w[i] = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / (n - 1)); return w; };
  function fft(re, im) {
    const n = re.length;
    for (let i = 1, j = 0; i < n; i++) {
      let bit = n >> 1;
      for (; j & bit; bit >>= 1) j ^= bit;
      j ^= bit;
      if (i < j) { let t = re[i]; re[i] = re[j]; re[j] = t; t = im[i]; im[i] = im[j]; im[j] = t; }
    }
    for (let len = 2; len <= n; len <<= 1) {
      const ang = -2 * Math.PI / len, wr = Math.cos(ang), wi = Math.sin(ang);
      for (let i = 0; i < n; i += len) {
        let cr = 1, ci = 0;
        for (let k = 0; k < len / 2; k++) {
          const a = i + k, b = a + len / 2;
          const tr = re[b] * cr - im[b] * ci, ti = re[b] * ci + im[b] * cr;
          re[b] = re[a] - tr; im[b] = im[a] - ti; re[a] += tr; im[a] += ti;
          const nr = cr * wr - ci * wi; ci = cr * wi + ci * wr; cr = nr;
        }
      }
    }
  }
  const percentile = (v, q) => { if (!v.length) return 0; const s = Array.from(v).sort((a, b) => a - b); return s[Math.min(s.length - 1, Math.floor(q * s.length))]; };
  // 주변(±win) 중앙값 × k 를 넘어야 '튀는 것'
  function adaptive(v, win, k) {
    const th = new Float64Array(v.length), floor = percentile(v, 0.5) * 0.5 + 1e-9;
    for (let i = 0; i < v.length; i++) th[i] = Math.max(floor, percentile(v.slice(Math.max(0, i - win), Math.min(v.length, i + win + 1)), 0.5) * k);
    return th;
  }
  const maxIn = (env, st, len, hop) => { const a = Math.max(0, Math.floor(st / hop)), b = Math.min(env.length, Math.floor((st + len) / hop) + 1); let m = 0; for (let i = a; i < b; i++) m = Math.max(m, env[i]); return m; };
  // 타격 세기의 자기상관으로 템포 찾기 (70~180 BPM, 120 근처를 조금 선호)
  function detectTempo(env, hop) {
    const n = env.length; let mean = 0; for (const v of env) mean += v; mean /= n;
    const e = Float64Array.from(env, v => v - mean);
    let best = 0, bestBpm = 120;
    for (let b = 70; b <= 180; b += 0.5) {
      const lag = 60 / b / hop; let sum = 0;
      for (const mult of [1, 2, 4, 0.5]) {
        const L = lag * mult, li = Math.floor(L), fr = L - li;
        let c = 0;
        for (let i = 0; i + li + 1 < n; i++) c += e[i] * (e[i + li] * (1 - fr) + e[i + li + 1] * fr);
        sum += c * (mult === 0.5 ? 0.5 : 1);
      }
      const prior = Math.exp(-0.5 * Math.pow(Math.log2(b / 120) / 0.9, 2));
      if (sum * prior > best) { best = sum * prior; bestBpm = b; }
    }
    return bestBpm;
  }
  // 16분음표 격자가 타격과 가장 잘 맞는 시작 위치 (초)
  function detectPhase(env, hop, stepSec) {
    let best = -1, bestP = 0;
    for (let k = 0; k < 16; k++) {
      const p = stepSec * k / 16; let sum = 0;
      for (let t = p; t / hop < env.length; t += stepSec) sum += env[Math.floor(t / hop)];
      if (sum > best) { best = sum; bestP = p; }
    }
    return bestP;
  }
  // 음역 [lo, hi] 안에서 가장 그럴듯한 음을 비터비로 이어 고르기 (-1 = 쉼표)
  function track(sal, minMidi, lo, hi, avoid, rms, rmsRef, restLevel) {
    const steps = sal.length, n = hi - lo + 1;
    const bests = new Float64Array(steps);
    for (let s = 0; s < steps; s++) for (let m = lo; m <= hi; m++) bests[s] = Math.max(bests[s], sal[s][m - minMidi]);
    const refv = percentile(bests, 0.85) + 1e-9;
    let score = new Float64Array(n + 1), next = new Float64Array(n + 1);
    const from = []; const obs = new Float64Array(n + 1);
    for (let s = 0; s < steps; s++) {
      const quiet = rms[s] < rmsRef * 0.12;
      obs[0] = restLevel;
      for (let i = 1; i <= n; i++) {
        const m = lo + i - 1;
        let v = sal[s][m - minMidi] / refv;
        if (avoid && avoid[s] >= 0 && (m - avoid[s]) % 12 === 0) v *= 0.7;
        obs[i] = quiet ? 0 : Math.min(1.5, v);
      }
      const fr = new Int16Array(n + 1);
      for (let j = 0; j <= n; j++) {
        let bestv = -Infinity, arg = 0;
        if (s === 0) bestv = 0;
        else for (let i = 0; i <= n; i++) {
          const tr = i === j ? 0 : (i === 0 || j === 0) ? -0.12 : -0.06 - 0.025 * Math.min(12, Math.abs(i - j));
          const v = score[i] + tr;
          if (v > bestv) { bestv = v; arg = i; }
        }
        next[j] = bestv + obs[j]; fr[j] = arg;
      }
      from.push(fr);
      const t = score; score = next; next = t;
    }
    const res = new Int16Array(steps);
    let cur = 0, bv = -Infinity;
    for (let j = 0; j <= n; j++) if (score[j] > bv) { bv = score[j]; cur = j; }
    for (let s = steps - 1; s >= 0; s--) { res[s] = cur === 0 ? -1 : lo + cur - 1; cur = from[s][cur]; }
    return res;
  }
  // 배음 합산 점수 (기본음이 약하면 한 옥타브 아래로 잘못 잡힌 것이라 깎음)
  function salience(mag, rate, minMidi, maxMidi, harmonics) {
    const N = mag.length * 2, sv = new Float64Array(maxMidi - minMidi + 1);
    for (let m = minMidi; m <= maxMidi; m++) {
      const f0 = 440 * Math.pow(2, (m - 69) / 12);
      let sum = 0, w = 1, fund = 0;
      for (let h = 1; h <= harmonics; h++, w *= 0.8) {
        const b = f0 * h * N / rate;
        if (b >= N / 2 - 2) break;
        const k = Math.round(b), pk = Math.max(mag[k], mag[k - 1], mag[k + 1]);
        if (h === 1) fund = pk;
        sum += w * pk;
      }
      sv[m - minMidi] = sum * (0.55 + 0.45 * Math.min(1, fund / (sum / 2.5 + 1e-9)));
    }
    return sv;
  }
  // 이 음의 배음 자리에서 그 음이 낼 만큼 빼기
  function removePartials(mag, rate, midi) {
    const N = mag.length * 2, f0 = 440 * Math.pow(2, (midi - 69) / 12), k0 = Math.round(f0 * N / rate);
    if (k0 < 2 || k0 >= mag.length - 2) return;
    const a = Math.max(mag[k0], mag[k0 - 1], mag[k0 + 1]);
    for (let h = 1; h <= 10; h++) {
      const k = Math.round(f0 * h * N / rate);
      if (k + 2 >= mag.length) break;
      const expect = a * Math.pow(0.75, h - 1);
      for (let j = k - 2; j <= k + 2; j++) mag[j] = Math.max(0, mag[j] - expect * (j === k ? 1 : Math.abs(j - k) === 1 ? 0.8 : 0.4));
    }
  }
  // 화음: 남은 소리에서 멜로디·베이스와 다른 음 중 가장 센 음
  function harmony(harSal, sal, minMidi, lo, hi, mel, bass, rms, rmsRef) {
    const steps = harSal.length, res = new Int16Array(steps), melRef = new Float64Array(steps);
    for (let s = 0; s < steps; s++) for (let m = lo; m <= hi; m++) melRef[s] = Math.max(melRef[s], sal[s][m - minMidi]);
    const refv = percentile(melRef, 0.85) + 1e-9;
    for (let s = 0; s < steps; s++) {
      res[s] = -1;
      if (rms[s] < rmsRef * 0.12) continue;
      let best = 0;
      for (let m = lo; m <= hi; m++) {
        if (mel[s] >= 0 && (Math.abs(m - mel[s]) % 12 === 0 || Math.abs(m - mel[s]) <= 1)) continue;
        if (bass[s] >= 0 && Math.abs(m - bass[s]) % 12 === 0) continue;
        const v = harSal[s][m - minMidi] / refv;
        if (v > best) { best = v; res[s] = m; }
      }
      if (best < 0.3) res[s] = -1;
      if (res[s] < 0 && s > 0 && res[s - 1] >= 0 && sal[s][res[s - 1] - minMidi] / refv > 0.3) res[s] = res[s - 1];
    }
    for (let s = 1; s + 1 < steps; s++) if (res[s - 1] === res[s + 1] && res[s] !== res[s - 1]) res[s] = res[s - 1];
    return res;
  }
  // 음 배열 → 트랙 채널 (같은 음은 이어서 길게, 그 음이 다시 세게 울리면 새로 침)
  function emit(t, ch, notes, sal, minMidi, rms, vRef, transpose, lo, hi, vMin, vMax) {
    const steps = notes.length;
    let s = 0;
    while (s < steps) {
      if (notes[s] < 0) { s++; continue; }
      let e = s + 1;
      const k = notes[s] - minMidi;
      while (e < steps && notes[e] === notes[s] && e - s < 16 && sal[e][k] < sal[e - 1][k] * 1.25) e++;
      put(t, ch, s, fold(notes[s] + transpose, lo, hi), e - s, vMin + Math.round((vMax - vMin) * Math.min(1, rms[s] / vRef)));
      s = e;
    }
  }

  // ================================================================ 오디오 (targetSteps 0 = 곡 전체, bpm 0 = 자동 감지)
  // progress(문구) 를 부르며 단계마다 화면을 갱신할 틈을 줌
  async function convertAudio(x, rate, title, targetSteps, bpm, transpose, progress) {
    const tick = async msg => { if (progress) progress(msg); await new Promise(r => setTimeout(r, 0)); };
    let peak = 0; for (const v of x) peak = Math.max(peak, Math.abs(v));
    if (peak < 1e-4) throw new Error('소리가 거의 없는 파일이에요.');
    for (let i = 0; i < x.length; i++) x[i] /= peak;
    // 1. 짧은 간격(약 12ms)의 대역별 타격 세기
    await tick('박자를 찾는 중…');
    const OnN = 1024, Hop = 256, hopSec = Hop / rate, frames = Math.max(1, Math.floor((x.length - OnN) / Hop));
    const full = new Float64Array(frames), lowB = new Float64Array(frames), midB = new Float64Array(frames), highB = new Float64Array(frames);
    {
      const win = hann(OnN);
      let prev = new Float64Array(OnN / 2), cur = new Float64Array(OnN / 2), prevPerc = new Float64Array(OnN / 2), perc = new Float64Array(OnN / 2);
      const med = new Float64Array(9), re = new Float64Array(OnN), im = new Float64Array(OnN), binHz = rate / OnN;
      for (let f = 0; f < frames; f++) {
        const o = f * Hop;
        for (let i = 0; i < OnN; i++) { re[i] = x[o + i] * win[i]; im[i] = 0; }
        fft(re, im);
        let a = 0, l = 0, m = 0, h = 0;
        for (let k = 1; k < OnN / 2; k++) cur[k] = Math.log(1 + Math.sqrt(re[k] * re[k] + im[k] * im[k]));
        // 타악기 성분: 주파수 방향 중앙값
        for (let k = 1; k < OnN / 2; k++) {
          let c = 0;
          for (let j = Math.max(1, k - 4); j <= Math.min(OnN / 2 - 1, k + 4); j++) {
            const v = cur[j]; let q = c++;
            while (q > 0 && med[q - 1] > v) { med[q] = med[q - 1]; q--; }
            med[q] = v;
          }
          perc[k] = med[c >> 1];
        }
        for (let k = 1; k < OnN / 2; k++) {
          const dd = cur[k] - prev[k], dp = perc[k] - prevPerc[k], hz = k * binHz;
          if (dd > 0) { a += dd; if (hz >= 35 && hz < 160) l += dd; }
          if (dp > 0) { if (hz >= 1000 && hz < 4500) m += dp; else if (hz >= 5500) h += dp; }
        }
        let sw = prev; prev = cur; cur = sw; sw = prevPerc; prevPerc = perc; perc = sw;
        full[f] = a; lowB[f] = l; midB[f] = m; highB[f] = h;
        if ((f & 2047) === 2047) await tick('박자를 찾는 중… ' + Math.round(f * 100 / frames) + '%');
      }
    }
    // 2. 템포와 박자 위치
    const tempo = bpm > 0 ? bpm : detectTempo(full, hopSec), stepSec = 60 / tempo / 4, phase = detectPhase(full, hopSec, stepSec);
    let steps = targetSteps > 0 ? targetSteps : Math.floor((x.length / rate - phase) / stepSec);
    steps = Math.max(16, Math.min(MAX_STEPS, steps));
    const tr = RomMusic.newTrack(title, steps, Math.round(tempo));
    // 3. 스텝마다 FFT → 음 높이별 배음 합산 점수
    await tick('음 높이를 찾는 중…');
    const N = 4096, MinMidi = 28, MaxMidi = 96;
    const sal = [], rms = new Float64Array(steps), win4 = hann(N), re4 = new Float64Array(N), im4 = new Float64Array(N), mag4 = new Float64Array(N / 2);
    const spectrum = s => {
      const c = Math.floor((phase + (s + 0.5) * stepSec) * rate);
      let e = 0;
      for (let i = 0; i < N; i++) { const q = c - N / 2 + i, v = q >= 0 && q < x.length ? x[q] : 0; re4[i] = v * win4[i]; im4[i] = 0; e += v * v; }
      fft(re4, im4);
      for (let k = 0; k < N / 2; k++) mag4[k] = Math.sqrt(Math.sqrt(re4[k] * re4[k] + im4[k] * im4[k]));
      return Math.sqrt(e / N);
    };
    for (let s = 0; s < steps; s++) {
      rms[s] = spectrum(s); sal.push(salience(mag4, rate, MinMidi, MaxMidi, 6));
      if ((s & 255) === 255) await tick('음 높이를 찾는 중… ' + Math.round(s * 100 / steps) + '%');
    }
    const rmsRef = percentile(rms, 0.6);
    // 4. 베이스 → 멜로디 순서로 음 고르기
    await tick('멜로디·베이스를 나누는 중…');
    const bass = track(sal, MinMidi, 28, 52, null, rms, rmsRef, 0.35);
    const mel = track(sal, MinMidi, 55, 90, bass, rms, rmsRef, 0.28);
    await tick('화음을 찾는 중…');
    const harSal = [];
    for (let s = 0; s < steps; s++) {
      spectrum(s);
      if (bass[s] >= 0) removePartials(mag4, rate, bass[s]);
      if (mel[s] >= 0) removePartials(mag4, rate, mel[s]);
      harSal.push(salience(mag4, rate, MinMidi, MaxMidi, 4));
      if ((s & 255) === 255) await tick('화음을 찾는 중… ' + Math.round(s * 100 / steps) + '%');
    }
    const har = harmony(harSal, sal, MinMidi, 48, 79, mel, bass, rms, rmsRef);
    // 5. 같은 음이 이어지면 길게
    const vRef = percentile(rms, 0.9) + 1e-9;
    emit(tr, 0, mel, sal, MinMidi, rms, vRef, transpose, 55, 88, 9, 15);
    emit(tr, 1, har, sal, MinMidi, rms, vRef, transpose, 52, 81, 6, 10);
    emit(tr, 2, bass, sal, MinMidi, rms, vRef, transpose, 33, 57, 13, 15);
    // 6. 드럼: 대역별 세기가 주변보다 확 튀면
    await tick('드럼을 찾는 중…');
    const lo = new Float64Array(steps), mi = new Float64Array(steps), hi = new Float64Array(steps);
    for (let s = 0; s < steps; s++) { const st = phase + s * stepSec - stepSec * 0.3; lo[s] = maxIn(lowB, st, stepSec, hopSec); mi[s] = maxIn(midB, st, stepSec, hopSec); hi[s] = maxIn(highB, st, stepSec, hopSec); }
    const loTop = percentile(lo, 0.95) + 1e-9, loTh = adaptive(lo, 32, 1.7), miTh = adaptive(mi, 32, 1.6), hiTh = adaptive(hi, 32, 1.5);
    for (let s = 0; s < steps; s++) {
      let kind = 0, strength = 0;
      const rl = lo[s] / loTh[s], rm = mi[s] / miTh[s], rh = hi[s] / hiTh[s], lowNorm = lo[s] / loTop;
      if (rm > 1.5 && rh > 0.7 && (rm > 2.0 || lowNorm < 0.7)) { kind = 2; strength = rm; }
      else if (rl > 1 && lowNorm > 0.45) { kind = 1; strength = rl; }
      else if (rh > 1.0) { kind = 3; strength = rh; }
      if (kind) put(tr, 3, s, kind, 1, Math.floor(Math.min(15, 8 + strength * 3)));
    }
    clipDurations(tr);
    lastInfo = '템포 ' + Math.round(tempo) + ' BPM' + (bpm > 0 ? '' : ' (자동 감지)') + ' · ' + steps + '스텝 (' + Math.round(steps * stepSec) + '초) · 시작 위치 ' + phase.toFixed(2) + '초';
    return tr;
  }

  // 음악 파일 → 모노 22050Hz (브라우저가 아는 형식은 모두: MP3, WAV, FLAC, OGG, M4A/AAC …). 앞 3분까지
  async function decodeFile(buf) {
    const C = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    const ctx = new C(1, 1, 22050);
    let ab;
    try { ab = await ctx.decodeAudioData(buf.slice(0)); }
    catch (e) { throw new Error('이 음악 파일을 읽지 못했어요. 브라우저가 이 형식을 모를 수 있어요 (MP3·WAV·FLAC·OGG·M4A 는 대부분 돼요).'); }
    const n = Math.min(ab.length, ab.sampleRate * MAX_SECONDS), out = new Float32Array(n);
    for (let c = 0; c < ab.numberOfChannels; c++) { const d = ab.getChannelData(c); for (let i = 0; i < n; i++) out[i] += d[i] / ab.numberOfChannels; }
    return { x: out, rate: ab.sampleRate };
  }

  return { MAX_STEPS, convertMidi, convertAudio, decodeFile, get lastInfo() { return lastInfo; } };
})();

// ===== 71-musicwrite.js
// ================================================================ 구역 배경음악 · 편집한 곡을 롬 음악 번호에 써 넣기 (RomMusicWrite.cs 와 같음)
mixin(Rom.prototype, {
  // 곡 번호마다 몇 개 구역에서 쓰는지
  musicUsage() {
    const u = new Map(), seen = new Set();
    for (const a of this.allAreas) { if (seen.has(a.headerOff)) continue; seen.add(a.headerOff); const id = this.areaMusic(a); u.set(id, (u.get(id) || 0) + 1); }
    return u;
  },
  // 곡 번호를 처음 바꾸기 전에 원래 음악 표를 롬 안에 복사해 둠 (원곡 메뉴·되돌리기용, 저장 후 다시 열어도 남음)
  ensureMusicBackup() {
    if (this._musicBackup || RomMusic.findBackup(this.data) >= 0) { this._musicBackup = true; return null; }
    const count = RomMusic.songCount(this.data);
    if (!count) return '음악 표를 찾지 못했어요';
    const sig = RomMusic.BACKUP_SIG, a = this.alloc(sig.length + count * 3 + 1);
    if (!a) return '롬에 남은 빈 공간이 부족해요';
    const orig = RomMusic.originalTable(this.data);
    this.data.set(sig, a.p); this.data.set(orig.subarray(0, count * 3), a.p + sig.length);
    this.data[a.p + sig.length + count * 3] = a.fill === 0xFF ? 0 : 0xFF;
    this._musicBackup = true; this.dirty = true;
    return null;
  },
  // 음악 번호 slot 이 offset 의 곡을 가리키게 (원곡 백업을 먼저 만듦). 실패하면 이유
  setSongSlot(slot, offset) {
    const err = this.ensureMusicBackup();
    if (err) return err;
    if (!RomMusic.setSongPointer(this.data, slot, offset)) return '음악 번호가 올바르지 않아요';
    this.dirty = true;
    return null;
  },
  restoreSongSlot(slot) { return this.setSongSlot(slot, RomMusic.originalOffset(this.data, slot)); },
  // 편집한 곡을 빈 공간에 쓰고 음악 번호 slot 이 그 곡을 가리키게 함. 실패하면 이유
  writeCustomSong(track, slot) {
    if (RomMusic.songCount(this.data) <= slot || slot < 1) return '음악 번호가 올바르지 않아요';
    const berr = this.ensureMusicBackup();
    if (berr) return berr;
    const size = RomMusic.encode(this.data, track, 0x4000).length, a = this.alloc(size + 1);
    if (!a) return '롬에 남은 빈 공간이 부족해요 (곡이 ' + size + '바이트)';
    const bytes = RomMusic.encode(this.data, track, 0x4000 + a.p % 0x4000);
    this.data.set(bytes, a.p); this.data[a.p + bytes.length] = a.fill === 0xFF ? 0 : 0xFF;
    RomMusic.setSongPointer(this.data, slot, a.p);
    this.dirty = true;
    return null;
  }
});

// ===== 90-ui.js
// ================================================================ 화면 (데스크톱 툴과 같은 배치: 위 버튼줄 · 왼쪽 목록 · 오른쪽 위 지도 · 아래 탭)
const CSS = `
.gsc{--bg:#f0f0f0;--panel:#fff;--line:#c9ced6;--ink:#1d2330;--sub:#6b7280;--accent:#2f6fec;--accent-ink:#fff;--warn:#c0392b;--ok:#1e874b;--save:#ffd65c;--play:#c8f0c8;
  font:14px/1.5 "Malgun Gothic","Apple SD Gothic Neo",sans-serif;color:var(--ink);background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:8px;box-sizing:border-box;max-width:100%;overflow:hidden}
.gsc *{box-sizing:border-box}
.gsc h2{margin:0;font-size:17px}
.gsc .top{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-bottom:8px}
.gsc .top .sp{flex:1}
.gsc .status{color:var(--sub);font-size:13px;padding:0 4px}
.gsc .status.bad{color:var(--warn)}
.gsc button{font:inherit;font-size:13.5px;border:1px solid var(--line);background:var(--panel);color:var(--ink);border-radius:4px;padding:4px 12px;cursor:pointer}
.gsc button:hover:not(:disabled){border-color:var(--accent)}
.gsc button.pri{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}
.gsc button.save,.gsc button.apply{background:var(--save);border-color:#d9b23a}
.gsc button.play{background:var(--play);border-color:#8fcf8f}
.gsc button:disabled{opacity:.45;cursor:default}
.gsc input[type=search],.gsc select,.gsc textarea{font:inherit;border:1px solid var(--line);border-radius:4px;padding:4px 8px;background:var(--panel);color:var(--ink)}
.gsc input[type=search]{width:100%}
.gsc select{max-width:100%}
.gsc .pick{position:fixed;z-index:2147483200;background:var(--panel);border:1px solid var(--accent);border-radius:6px;box-shadow:0 6px 20px rgba(0,0,0,.25);padding:6px;max-width:calc(100vw - 8px)}
.gsc .pick input[type=search]{margin-bottom:4px}
.gsc .pick-list{overflow:auto}
.gsc .pick-opt{padding:3px 8px;border-radius:3px;cursor:pointer;white-space:nowrap}
.gsc .pick-opt.cur{font-weight:bold}
.gsc .pick-opt.on{background:var(--accent);color:var(--accent-ink)}
.gsc .pick-none{padding:6px 8px;color:var(--sub)}
.gsc .drop{border:2px dashed var(--line);border-radius:10px;padding:40px 16px;text-align:center;color:var(--sub);background:var(--panel)}
.gsc .drop.over{border-color:var(--accent);background:#eef3ff}
.gsc .drop b{color:var(--ink);font-size:16px}
.gsc .main{display:grid;grid-template-columns:300px minmax(0,1fr);gap:8px;height:780px}
.gsc .left{display:flex;flex-direction:column;min-height:0}
.gsc .tree{overflow:auto;flex:1;margin-top:6px;background:var(--panel);border:1px solid var(--line);border-radius:4px;padding:4px;font-size:13.5px}
.gsc .tree details{margin-left:0}
.gsc .tree details details{margin-left:14px}
.gsc .tree summary{cursor:pointer;padding:1px 4px;border-radius:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.gsc .tree summary.on,.gsc .tree .it.on{background:var(--accent);color:var(--accent-ink)}
.gsc .tree .it{padding:1px 4px 1px 30px;cursor:pointer;border-radius:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.gsc .tree .it:hover,.gsc .tree summary:hover{background:#e8eefc}
.gsc .tree .it.on:hover,.gsc .tree summary.on:hover{background:var(--accent)}
.gsc .right{display:grid;grid-template-rows:minmax(0,45fr) minmax(0,55fr);grid-template-columns:minmax(0,1fr);gap:6px;min-height:0;min-width:0}
.gsc .mapbox{display:flex;flex-direction:column;min-height:0;min-width:0}
.gsc .tabbox{min-width:0}
.gsc .maplabel{color:var(--sub);font-size:13px;display:flex;gap:8px;align-items:center;min-height:26px}
.gsc .maplabel.pick{color:var(--warn);font-weight:bold}
.gsc .mapwrap{overflow:auto;flex:1;background:#262626;border-radius:3px;min-height:0}
.gsc .mapwrap .empty{color:#ddd;padding:12px}
.gsc canvas.map{image-rendering:pixelated;image-rendering:crisp-edges;display:block;cursor:pointer}
.gsc .tabbox{display:flex;flex-direction:column;min-height:0}
.gsc .tabs{display:flex;flex-wrap:wrap;gap:0;border-bottom:1px solid var(--line)}
.gsc .tabs button{border:1px solid transparent;border-bottom:none;border-radius:4px 4px 0 0;background:none;padding:5px 14px;margin-bottom:-1px}
.gsc .tabs button.on{background:var(--panel);border-color:var(--line);font-weight:bold}
.gsc .tabpage{flex:1;overflow:auto;background:var(--panel);border:1px solid var(--line);border-top:none;padding:10px;min-height:0}
.gsc .hint{color:var(--sub);font-size:12.5px;white-space:pre-line}
.gsc .ttl{font-size:16px;font-weight:bold;margin-bottom:6px}
.gsc .tx{margin-bottom:10px}
.gsc .tx .note{font-size:12px;color:var(--sub)}
.gsc .tx textarea{width:100%;min-height:70px;resize:vertical;font-size:15px}
.gsc .tx.mod textarea{border-color:var(--ok);background:#f2fbf5}
.gsc .tx .err{color:var(--warn);font-size:12px}
.gsc .bar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:6px}
.gsc fieldset{border:1px solid var(--line);border-radius:4px;padding:6px 10px 10px;margin:0 0 10px}
.gsc legend{padding:0 4px;color:var(--ink)}
.gsc input.num,.gsc input.txt{font:inherit;border:1px solid var(--line);border-radius:4px;padding:3px 6px;background:var(--panel);color:var(--ink)}
.gsc input.txt{width:140px}
.gsc .side{display:grid;grid-template-columns:240px minmax(0,1fr);gap:10px}
.gsc .box{background:var(--panel);border:1px solid var(--line);border-radius:4px;padding:8px;min-width:0;display:flex;flex-direction:column}
.gsc .list{overflow:auto;max-height:560px;flex:1;margin-top:6px}
.gsc .list .it{padding:3px 8px;cursor:pointer;border-radius:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:13px}
.gsc .list .it:hover{background:var(--bg)}
.gsc .list .it.on{background:var(--accent);color:var(--accent-ink)}
.gsc .list .grp2{font-weight:bold;font-size:12px;color:var(--sub);padding:6px 4px 2px}
.gsc .grp{margin:10px 0 4px;font-weight:bold}
.gsc table.grid{border-collapse:collapse;font-size:13px}
.gsc table.grid td,.gsc table.grid th{border:1px solid var(--line);padding:3px 5px;text-align:left}
.gsc table.grid th{background:var(--bg);font-weight:normal;color:var(--sub)}
.gsc .scrollx{overflow:auto;max-width:100%}
.gsc .ok{color:var(--ok)} .gsc .bad{color:var(--warn)}
.gsc .mon{border:1px solid var(--line);border-radius:6px;padding:6px;margin-bottom:6px}
.gsc .tm{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:2px;font-size:12px;max-height:220px;overflow:auto;border:1px solid var(--line);border-radius:6px;padding:4px}
.gsc table.types td.c{width:30px;height:26px;text-align:center;cursor:pointer;user-select:none;font-weight:bold;padding:0}
.gsc table.types td.m0{background:#555;color:#fff}.gsc table.types td.m5{background:#f4b6b6}.gsc table.types td.m20{background:#a8e0a8}
.gsc table.types th.v{writing-mode:vertical-rl;padding:4px 2px;font-size:12px}
.gsc .songs{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:4px}
.gsc .song{display:flex;align-items:center;gap:6px;padding:4px 6px;border:1px solid var(--line);border-radius:6px;background:var(--panel);cursor:pointer;font-size:13px}
.gsc .song.on{border-color:var(--accent);background:#eef3ff}
.gsc .song .n{color:var(--sub);font-size:11px;width:28px}
.gsc .song .chg{color:var(--warn);font-size:11px}
.gsc .dlg-bg{position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:2147483100;display:flex;align-items:center;justify-content:center;padding:16px}
.gsc .dlg{background:var(--bg);border-radius:8px;box-shadow:0 10px 40px rgba(0,0,0,.35);width:min(1100px,100%);max-height:100%;display:flex;flex-direction:column}
.gsc .dlg.small{width:min(560px,100%)}
.gsc .dlg-bg.wide{padding:0}
.gsc .dlg.wide{width:100%;height:100%;max-height:none;border-radius:0}
.gsc .gsc-rollbox{max-height:400px}
.gsc .dlg.wide .gsc-rollbox{max-height:62vh}
.gsc .dlg-head{display:flex;align-items:center;padding:8px 12px;border-bottom:1px solid var(--line);font-weight:bold}
.gsc .dlg-head span{flex:1}
.gsc .dlg-body{padding:12px;overflow:auto;flex:1}
.gsc .credit{margin-top:8px;font-size:11px;color:var(--sub);text-align:right}
.gsc.gsc-full{position:fixed;inset:0;z-index:2147483000;max-width:none;border-radius:0;border:none;overflow:auto;margin:0;display:flex;flex-direction:column}
.gsc.gsc-full .main{flex:1;height:auto;min-height:0}
.gsc.w-mid .main,.gsc.w-narrow .main{grid-template-columns:minmax(0,1fr);grid-template-rows:260px 900px;height:auto}
.gsc.w-mid .side,.gsc.w-narrow .side{grid-template-columns:minmax(0,1fr)}
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
// [[값, 이름], …] 로 고르기 상자
function sel(options, value, onchange) {
  const s = el('select');
  for (const [v, t] of options) { const o = el('option', { value: v, text: t }); if (v === value) o.selected = true; s.append(o); }
  if (onchange) s.addEventListener('change', () => onchange(+s.value));
  return s;
}
function num(value, min, max, onchange) {
  const i = el('input', { type: 'number', min, max, value, style: 'width:70px' });
  i.className = 'num';
  if (onchange) i.addEventListener('change', () => { let v = Math.round(+i.value); if (isNaN(v)) v = min; v = Math.max(min, Math.min(max, v)); i.value = v; onchange(v); });
  return i;
}
// 고를 게 많은 칸(포켓몬·기술·물건 등)은 누르면 검색창이 달린 목록이 열림. 고르면 원래 select 값이 바뀌고 change 가 일어남
const PICK_MIN = 15;
function searchableSelects(host) {
  let cur = null;
  const close = () => { if (cur) { cur.box.remove(); cur = null; } };
  const open = (s, typed) => {
    close();
    const r = s.getBoundingClientRect();
    const q = el('input', { type: 'search', placeholder: '검색 (이름·번호)' });
    const list = el('div', { class: 'pick-list' });
    const box = el('div', { class: 'pick' }, q, list);
    box.style.left = Math.max(4, Math.min(r.left, innerWidth - 284)) + 'px';
    box.style.minWidth = Math.max(r.width, 280) + 'px';
    const below = innerHeight - r.bottom;
    if (below < 260 && r.top > below) box.style.bottom = (innerHeight - r.top + 2) + 'px';
    else box.style.top = (r.bottom + 2) + 'px';
    list.style.maxHeight = Math.max(160, Math.min(340, Math.max(below, r.top) - 60)) + 'px';
    let shown = [], hi = 0;
    const mark = () => shown.forEach((d, i) => d.classList.toggle('on', i === hi));
    const choose = d => {
      s.value = d.dataset.v; close(); s.focus();
      s.dispatchEvent(new Event('input', { bubbles: true })); s.dispatchEvent(new Event('change', { bubbles: true }));
    };
    const fill = () => {
      const words = q.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      list.replaceChildren(); shown = []; hi = 0;
      for (const o of s.options) {
        const t = o.textContent;
        if (o.disabled || !words.every(w => t.toLowerCase().includes(w))) continue;
        const d = el('div', { class: 'pick-opt', text: t, 'data-raw': '1' });
        d.dataset.v = o.value;
        if (o.selected) { hi = shown.length; d.classList.add('cur'); }
        d.addEventListener('mousedown', e => { e.preventDefault(); choose(d); });
        d.addEventListener('mousemove', () => { if (shown[hi] !== d) { hi = shown.indexOf(d); mark(); } });
        list.append(d); shown.push(d);
      }
      if (words.length) hi = 0;
      if (!shown.length) list.append(el('div', { class: 'pick-none', text: '찾는 게 없어요' }));
      mark();
      if (shown[hi]) shown[hi].scrollIntoView({ block: 'nearest' });
    };
    q.addEventListener('input', fill);
    q.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); if (!shown.length) return; hi = (hi + (e.key === 'ArrowDown' ? 1 : shown.length - 1)) % shown.length; mark(); shown[hi].scrollIntoView({ block: 'nearest' }); }
      else if (e.key === 'Enter') { e.preventDefault(); if (shown[hi]) choose(shown[hi]); }
      else if (e.key === 'Escape' || e.key === 'Tab') { e.preventDefault(); close(); s.focus(); }
      e.stopPropagation();
    });
    (s.closest('.dlg-bg') || host).append(box);
    cur = { box, s };
    q.value = typed || '';
    fill();
    q.focus();
  };
  const want = s => s && s.tagName === 'SELECT' && !s.disabled && !s.multiple && s.options.length >= PICK_MIN;
  host.addEventListener('mousedown', e => {
    if (cur && cur.box.contains(e.target)) return;
    if (want(e.target) && e.button === 0) { e.preventDefault(); if (cur && cur.s === e.target) close(); else { e.target.focus(); open(e.target); } return; }
    close();
  }, true);
  host.addEventListener('keydown', e => {
    const s = e.target;
    if (!want(s) || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'F4') { e.preventDefault(); open(s); }
    else if (e.key.length === 1) { e.preventDefault(); open(s, e.key); }
    else if (e.key === 'Process') open(s);
  }, true);
  document.addEventListener('mousedown', e => { if (cur && !host.contains(e.target)) close(); }, true);
  window.addEventListener('resize', close);
  document.addEventListener('scroll', e => { if (cur && !cur.box.contains(e.target)) close(); }, true);
}
function check(label, on) { const c = el('input', { type: 'checkbox' }); c.checked = !!on; return [c, el('label', null, c, ' ' + label)]; }

const TAB_NAMES = ['대사', '야생 포켓몬', '프렌들리숍', '선물 포켓몬', '지도 블록', 'NPC · 이벤트', '워프 · 트리거'];
const T_TEXT = 0, T_WILD = 1, T_SHOP = 2, T_GIFT = 3, T_BLOCK = 4, T_EVENT = 5, T_WARP = 6;

class App {
  constructor(host) {
    this.host = host;
    host.gscApp = this; host.gscI18N = I18N; host.gscRom = Rom;
    this.rom = null; this.area = null; this.owner = null; this.tab = T_TEXT; this.scale = 2;
    this.spriteCache = new Map(); this.undo = [];
    if (!document.getElementById('gsc-style')) document.head.append(el('style', { id: 'gsc-style', text: CSS }));
    host.classList.add('gsc');
    // 화면 크기가 아니라 블로그 글 칸 너비에 맞춰 배치를 바꿈
    const fit = () => {
      const w = host.clientWidth;
      host.classList.toggle('w-mid', w < 900 && w >= 560);
      host.classList.toggle('w-narrow', w < 560);
    };
    fit();
    if (window.ResizeObserver) new ResizeObserver(fit).observe(host); else window.addEventListener('resize', fit);
    document.addEventListener('keydown', e => this.onKey(e));
    window.addEventListener('beforeunload', e => { if (this.rom && this.rom.hasChanges) { e.preventDefault(); e.returnValue = ''; } });
    host.addEventListener('dragover', e => e.preventDefault());
    host.addEventListener('drop', e => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f && this.confirmDiscard()) this.load(f); });
    I18N.watch(host);
    searchableSelects(host);
    this.build();
  }

  // 화면 언어 바꾸기: 화면을 새로 그리고 보던 자리로 돌아감
  langSelect() {
    const s = el('select', { class: 'gsc-lang', title: 'Language', 'data-raw': '1' },
      el('option', { value: 'ko', text: '🌐 한국어' }), el('option', { value: 'en', text: '🌐 English' }));
    s.value = I18N.lang;
    s.addEventListener('change', () => this.setLang(s.value));
    return s;
  }
  setLang(l) {
    if (l === I18N.lang) return;
    for (const d of this.host.querySelectorAll('.dlg-bg')) d.remove();
    Player.stop();
    I18N.set(l);
    const { area, owner, tab } = this;
    this.build();
    if (!this.rom) return;
    this.saveBtn.disabled = false; for (const b of this.toolBtns) b.disabled = false;
    this.buildTree();
    this.mapCache = null;
    if (area) { this.area = null; this.selectArea(area, owner); }
    this.setTab(tab);
    this.say(this.rom.fileName);
  }

  // ---------------------------------------------------------------- 큰 틀 (데스크톱 MainForm 과 같은 배치)
  build() {
    const B = (text, cls, fn) => { const b = el('button', { class: cls || '', text, onclick: fn }); b.disabled = true; return b; };
    this.file = el('input', { type: 'file', accept: '.gbc,.gb', style: 'display:none', onchange: () => { if (this.file.files[0]) this.load(this.file.files[0]); this.file.value = ''; } });
    const openBtn = el('button', { text: '롬 열기', onclick: () => { if (this.confirmDiscard()) this.file.click(); } });
    this.saveBtn = B('저장하기', 'save', () => this.save());
    this.toolBtns = [
      this.playBtn = B('▶ 게임으로 확인', 'play', () => this.playTest()),
      B('포켓몬 편집', '', () => this.dialog('포켓몬 편집', () => el('div', null, this.presetBar('pokemon'), this.tab_dex()))),
      B('포켓몬 그림', '', () => this.spriteDialog()),
      B('트레이너 그림', '', () => this.trainerPicDialog()),
      B('울음소리 에디터', '', () => this.cryEditor()),
      B('기술 사운드 에디터', '', () => this.sfxEditor()),
      B('🎬 기술 애니메이션', '', () => this.battleAnimEditor()),
      B('캐릭터 그림', '', () => this.owDialog()),
      B('타이틀 화면', '', () => this.titleDialog()),
      B('기술 편집', '', () => this.dialog('기술 편집', () => el('div', null, this.presetBar('moves'), this.tab_moves()))),
      B('트레이너 편집', '', () => this.dialog('트레이너 편집', () => this.tab_trainer(), () => this.refreshArea())),
      B('타입 상성', '', () => this.dialog('타입 상성', () => this.tab_types())),
      B('BGM 에디터', '', () => this.bgmEditor()),
      B('오박사 인트로', '', () => this.dialog('오박사 인트로 포켓몬', () => this.introDialog(), null, true))
    ];
    this.status = el('span', { class: 'status', text: '롬 파일(.gbc)을 열거나 이 창에 끌어다 놓으세요.' });
    const top = el('div', { class: 'top' }, openBtn, this.saveBtn, ...this.toolBtns, this.status, el('span', { class: 'sp' }), this.langSelect(), this.fullBtn(), this.file);

    // 왼쪽: 대사 검색 + 지역 › 구역 › NPC 목록
    this.search = el('input', { type: 'search', placeholder: '대사 검색 (엔터)' });
    this.search.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); this.buildTree(); } });
    this.search.addEventListener('search', () => { if (!this.search.value) this.buildTree(); });
    this.tree = el('div', { class: 'tree' });
    const left = el('div', { class: 'left' }, this.search, this.tree);

    // 오른쪽 위: 지도
    this.mapLabel = el('div', { class: 'maplabel', text: '지도' });
    this.mapWrap = el('div', { class: 'mapwrap' }, el('div', { class: 'empty', text: '왼쪽 목록에서 구역이나 NPC 를 고르면 지도가 나와요' }));
    this.canvas = el('canvas', { class: 'map' });
    this.canvas.addEventListener('click', e => this.mapClick(e));
    this.canvas.addEventListener('dblclick', e => this.mapDblClick(e));
    // 지도 블록 탭에서는 칠하기
    for (const t of ['mousedown', 'mousemove', 'mouseup', 'mouseleave', 'contextmenu'])
      this.canvas.addEventListener(t, e => { if (this.tab === T_BLOCK && this.area && !this.picking) this.blockMouse(t, e); });
    document.addEventListener('mouseup', e => { if (this.blk && (this.blk.painting || this.blk.rectStart)) this.blockMouse('mouseup', e); });
    const mapBox = el('div', { class: 'mapbox' }, this.mapLabel, this.mapWrap);

    // 오른쪽 아래: 탭
    this.tabBtns = TAB_NAMES.map((n, i) => el('button', { text: n, onclick: () => this.setTab(i) }));
    this.page = el('div', { class: 'tabpage' });
    const tabBox = el('div', { class: 'tabbox' }, el('div', { class: 'tabs' }, ...this.tabBtns), this.page);

    this.mainBox = el('div', { class: 'main' }, left, el('div', { class: 'right' }, mapBox, tabBox));
    this.host.replaceChildren(top, this.mainBox, this.credit());
    this.setTab(this.rom ? this.tab : T_TEXT);
  }

  credit() { return el('div', { class: 'credit', text: '포켓몬스터는 Nintendo·Creatures·GAME FREAK 의 상표예요. 이 도구는 비공식 팬 도구이고, 롬 파일은 직접 가진 것을 쓰세요. 롬은 브라우저 안에서만 열리고 어디에도 올라가지 않아요.' }); }

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
  }

  say(s, bad) { this.status.textContent = s; this.status.classList.toggle('bad', !!bad); }
  confirmDiscard() { return !this.rom || !this.rom.hasChanges || confirm('저장하지 않은 수정이 있어요. 버리고 계속할까요?'); }
  notYet(name) { alert("'" + name + "' 은(는) 웹판에 아직 옮기는 중이에요. 데스크톱 툴에서는 쓸 수 있어요."); }

  onKey(e) {
    if (!this.rom || !this.host.isConnected) return;
    if (e.key === 'Escape') {
      if (this.picking) { this.picking = null; this.setMapLabel(); this.say('취소했어요'); return; }
      const dlgs = this.host.querySelectorAll('.dlg-bg');
      if (dlgs.length) { dlgs[dlgs.length - 1].querySelector('.dlg-close').click(); return; }
      if (this.host.classList.contains('gsc-full')) this.toggleFull();
      return;
    }
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
    if (this.host.querySelector('.dlg-bg')) return;
    if (this.tab === T_BLOCK) {
      // 블록 탭에서는 Delete 로 NPC 를 지우지 않음
      if ((e.key === 'z' || e.key === 'Z') && (e.ctrlKey || e.metaKey)) { e.preventDefault(); this.blockUndo(); }
      else if ((e.key === 'y' || e.key === 'Y') && (e.ctrlKey || e.metaKey)) { e.preventDefault(); this.blockRedo(); }
      return;
    }
    if (e.key === 'Delete' && !e.ctrlKey) { e.preventDefault(); this.deleteSelected(); }
    else if ((e.key === 'z' || e.key === 'Z') && (e.ctrlKey || e.metaKey)) { e.preventDefault(); this.undoDelete(); }
  }

  // ---------------------------------------------------------------- 롬 열기
  load(f) {
    const r = new FileReader();
    r.onload = () => {
      let rom;
      try { rom = new Rom(new Uint8Array(r.result), f.name); }
      catch (e) { console.error(e); alert(e.message || String(e)); return; }
      Player.stop();
      this.rom = rom; this.area = null; this.owner = null; this.spriteCache.clear(); this.undo = []; this.wt = null; this.evSt = null; this.mapCache = null; this.blk = null;
      this.saveBtn.disabled = false; for (const b of this.toolBtns) b.disabled = false;
      this.search.value = '';
      this.buildTree();
      this.mapWrap.replaceChildren(el('div', { class: 'empty', text: '왼쪽 목록에서 구역이나 NPC 를 고르면 지도가 나와요' }));
      this.mapLabel.textContent = '지도';
      this.setTab(this.tab);
      this.say(rom.fileName + '  ·  ' + rom.versionName + '  ·  대사 ' + rom.texts.size.toLocaleString() + '개');
    };
    r.readAsArrayBuffer(f);
  }

  // ---------------------------------------------------------------- 왼쪽 목록
  ownerLabel(o) { return (o.texts.some(t => t.modified) ? '✎ ' : '') + o.name; }
  buildTree() {
    if (!this.rom) return;
    const q = this.search.value.trim();
    this.tree.replaceChildren();
    this.areaNodes = new Map(); this.ownerNodes = new Map();
    let firstHit = null;
    for (const reg of this.rom.regions) {
      const rd = el('details', null, el('summary', { text: reg.name }));
      let any = false;
      for (const a of reg.areas) {
        const owners = q ? a.owners.filter(o => o.texts.some(t => t.current.includes(q))) : a.owners;
        if (q && !owners.length) continue;
        const sum = el('summary', { text: a.name });
        const ad = el('details', null, sum);
        sum.addEventListener('click', () => this.selectArea(a, null));
        this.areaNodes.set(a, sum);
        for (const o of owners) {
          const it = el('div', { class: 'it', text: this.ownerLabel(o), onclick: () => this.selectOwner(a, o, true) });
          this.ownerNodes.set(o, it);
          ad.append(it);
          if (!firstHit) firstHit = [a, o];
        }
        if (q) ad.open = true;
        rd.append(ad); any = true;
      }
      if (q) rd.open = true;
      if (any) this.tree.append(rd);
    }
    if (q) { if (firstHit) this.selectOwner(firstHit[0], firstHit[1], true); else alert('찾는 대사가 없어요.'); }
    else if (this.area) this.markTree();
  }
  markTree() {
    for (const n of this.tree.querySelectorAll('.on')) n.classList.remove('on');
    let node = this.owner && this.ownerNodes.get(this.owner);
    if (!node) node = this.area && this.areaNodes.get(this.area);
    if (!node) return;
    node.classList.add('on');
    for (let p = node.parentElement; p && p !== this.tree; p = p.parentElement) if (p.tagName === 'DETAILS') p.open = true;
    node.scrollIntoView({ block: 'nearest' });
  }
  refreshTreeLabel(o) { const n = this.ownerNodes && this.ownerNodes.get(o); if (n) n.textContent = this.ownerLabel(o); }

  // 구역·NPC 고르기 (트리 또는 지도)
  selectArea(a, o) {
    const changed = a !== this.area;
    this.area = a; this.owner = o || null; this.picking = null;
    if (changed) this.showMap();
    else this.drawMap();
    this.setMapLabel();
    this.markTree();
    this.setTab(this.tab);
  }
  selectOwner(a, o, fromTree) {
    this.selectArea(a, o);
    // 점원 → 상점, 포켓몬 주는 NPC → 선물 탭 (대사 탭을 보고 있을 때)
    if (fromTree && this.tab === T_TEXT) {
      if (o.mart != null) this.setTab(T_SHOP);
      else if (this.rom.giftsOf(o).length) this.setTab(T_GIFT);
    }
  }
  refreshArea() { if (this.area) { this.buildTree(); this.drawMap(); this.setTab(this.tab); } }

  // ---------------------------------------------------------------- 지도
  setMapLabel(pick) {
    const l = this.mapLabel;
    l.classList.toggle('pick', !!pick);
    if (pick) { l.textContent = pick; return; }
    l.replaceChildren();
    if (!this.area) { l.textContent = '지도'; return; }
    const zoom = sel([[1, '1배'], [2, '2배'], [3, '3배']], this.scale, v => { this.scale = v; this.drawMap(); });
    l.append(el('span', { text: this.area.name + (this.tab === T_BLOCK ? '  —  블록 칠하기 모드 (지도 블록 탭)' : '  —  클릭: 고르기 · Delete: 지우기 · Ctrl+Z: 되돌리기') }), el('span', { style: 'flex:1' }), zoom);
  }
  showMap() { this.mapWrap.replaceChildren(this.canvas); this.drawMap(); this.mapWrap.scrollTop = this.mapWrap.scrollLeft = 0; }

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
    const base = this.mapBase(a);
    const s = this.scale, cv = this.canvas;
    if (!base) { this.mapWrap.replaceChildren(el('div', { class: 'empty', text: '이 구역 지도는 그릴 수 없어요' })); return; }
    if (cv.parentElement !== this.mapWrap) this.mapWrap.replaceChildren(cv);
    if (cv.width !== base.width * s || cv.height !== base.height * s) { cv.width = base.width * s; cv.height = base.height * s; }
    const g = cv.getContext('2d');
    g.imageSmoothingEnabled = false;
    g.drawImage(base, 0, 0, cv.width, cv.height);
    const T = 16 * s;
    if (this.tab === T_BLOCK) { this.drawBlockMode(g, T); return; }
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
        // 바깥 지도에서 게임에 다른 인물로 보이는 NPC
        if (o.isObject && !this.rom.spriteShows(a, o.sprite)) {
          g.globalAlpha = 1; g.fillStyle = '#e33'; g.font = 'bold ' + (9 * s) + 'px sans-serif'; g.textAlign = 'right'; g.fillText('?', o.x * T + T - 1, o.y * T + 9 * s);
        }
      }
      g.globalAlpha = 1;
      if (o.texts && o.texts.some(t => t.modified)) { g.fillStyle = '#2b8a3e'; g.beginPath(); g.arc(o.x * T + 3 * s, o.y * T + 3 * s, 2.5 * s, 0, 7); g.fill(); }
      if (o === this.owner) { g.strokeStyle = '#ff2'; g.lineWidth = 2; g.strokeRect(o.x * T + 1, o.y * T + 1, T - 2, T - 2); }
    };
    for (const o of a.extras) drawObj(o, true);
    for (const o of a.owners) drawObj(o, false);
    this.drawOverlay(g, T);
    if (this.owner && this.owner.x >= 0) {
      const wrap = this.mapWrap, x = this.owner.x * T, y = this.owner.y * T;
      if (x < wrap.scrollLeft || x > wrap.scrollLeft + wrap.clientWidth - T || y < wrap.scrollTop || y > wrap.scrollTop + wrap.clientHeight - T) {
        wrap.scrollLeft = x - wrap.clientWidth / 2; wrap.scrollTop = y - wrap.clientHeight / 2;
      }
    }
  }

  // 지도 그림 (1배, 구역마다 기억). 블록을 바꾸면 mapCache 를 비움
  mapBase(a) {
    this.mapCache = this.mapCache || new Map();
    if (!this.mapCache.has(a)) {
      const img = this.rom.gfx.renderMap(a);
      let c = null;
      if (img) { c = document.createElement('canvas'); c.width = img.width; c.height = img.height; c.getContext('2d').putImageData(img, 0, 0); }
      this.mapCache.set(a, c);
    }
    return this.mapCache.get(a);
  }

  mapXY(e) {
    const r = this.canvas.getBoundingClientRect();
    const T = 16 * this.scale * (r.width / this.canvas.width);
    return [Math.floor((e.clientX - r.left) / T), Math.floor((e.clientY - r.top) / T)];
  }
  // 지도에서 칸 고르기 (NPC 옮기기 등). act(x, y)
  startPick(msg, act) { this.picking = act; this.setMapLabel('▶ ' + msg + ' (취소하려면 Esc)'); }

  mapClick(e) {
    if (!this.area) return;
    const [x, y] = this.mapXY(e);
    if (this.picking) { const act = this.picking; this.picking = null; this.setMapLabel(); act(x, y); return; }
    if (this.tab === T_BLOCK) return;
    const a = this.area;
    const hit = a.owners.find(o => o.x === x && o.y === y) || a.extras.find(o => o.x === x && o.y === y);
    const wh = this.wtHit(x, y);
    if (wh && (this.tab === T_WARP || !hit)) { this.wtSelect(wh); this.say(wh.coord != null ? '타일 트리거 T' + (wh.coord + 1) : '워프 W' + (wh.warp + 1) + ' · 더블클릭하면 도착 지도'); return; }
    if (!hit) { this.say('(' + x + ', ' + y + ') 칸'); return; }
    this.selectArea(a, hit);
    // 지도에서 고른 NPC 에 맞는 탭으로: 트리거로 다가오는 NPC → 워프·트리거, 그 밖의 NPC → NPC · 이벤트
    const ti = this.triggerFor(hit);
    if (ti >= 0) { this.wt.sub = 'trig'; this.wt.selC = ti; this.setTab(T_WARP); this.drawMap(); this.say("'" + hit.name + "' 은(는) 타일 트리거 T" + (ti + 1) + ' 을(를) 밟으면 다가오는 NPC예요'); return; }
    if (this.rom.giftsOf(hit).length) this.setTab(T_GIFT);
    else if (hit.mart != null) this.setTab(T_SHOP);
    else if (hit.eventOff >= 0) this.setTab(T_EVENT);
    if (hit.isObject && !this.rom.spriteShows(a, hit.sprite))
      this.say("⚠ '" + hit.name + "' 은(는) 게임에선 다른 인물로 보여요. NPC · 이벤트 탭에서 [모습·방향 적용]을 누르면 이 지역 빈 칸에 넣어 고쳐요", true);
    else this.say(hit.name + ' (' + x + ', ' + y + ')');
  }
  mapDblClick(e) {
    if (!this.area || this.picking || this.tab === T_BLOCK) return;
    const [x, y] = this.mapXY(e), wh = this.wtHit(x, y);
    if (wh && wh.warp != null) this.warpPreview(wh.warp);
  }

  // ---------------------------------------------------------------- Delete 로 지우기 · Ctrl+Z 되돌리기
  deleteSelected() {
    const o = this.owner, a = this.area;
    if (!o || !a) { this.say('지울 NPC를 먼저 고르세요'); return; }
    if (o.eventOff < 0) { this.say("'자동 이벤트'는 지울 수 없어요"); return; }
    const off = this.rom.off(a.scriptBank, a.eventsAddr), snap = this.rom.data.slice(off, off + this.rom.eventsSize(off));
    const err = this.rom.deleteOwner(a, o);
    if (err) { this.say(err, true); return; }
    this.undo.push({ a, off, snap, name: o.name });
    this.wtAfterNpc();
    this.owner = null; this.buildTree(); this.drawMap(); this.setTab(this.tab);
    this.say("'" + o.name + "' 을(를) 지웠어요  ·  되돌리려면 Ctrl+Z");
  }
  undoDelete() {
    const u = this.undo.pop();
    if (!u) { this.say('되돌릴 삭제가 없어요'); return; }
    this.rom.data.set(u.snap, u.off); this.rom.dirty = true;
    this.rom.loadArea(u.a);
    this.area = u.a; this.owner = u.a.owners.find(x => x.name === u.name) || null;
    this.wtAfterNpc();
    this.buildTree(); this.showMap(); this.setTab(this.tab);
    this.say("'" + u.name + "' 을(를) 되돌렸어요");
  }

  // ---------------------------------------------------------------- 탭
  setTab(i) {
    const prev = this.tab;
    this.tab = i;
    if (this.area && prev !== i && (prev === T_BLOCK || i === T_BLOCK || prev === T_WARP || i === T_WARP)) {
      if (prev === T_BLOCK) this.blockEndStroke();
      this.drawMap(); this.setMapLabel();
    }
    this.tabBtns.forEach((b, k) => b.classList.toggle('on', k === i));
    const p = this.page;
    p.replaceChildren();
    if (!this.rom) { p.append(el('div', { class: 'hint', text: '롬을 열면 쓸 수 있어요.' })); return; }
    try {
      const fn = [this.pageText, this.pageWild, this.pageShop, this.pageGift, this.pageBlock, this.pageEvent, this.pageWarp][i];
      p.append(fn.call(this));
    } catch (e) { console.error(e); p.append(el('div', { class: 'bad', text: '오류: ' + e.message })); }
  }

  // [대사] 탭
  pageText() {
    const box = el('div');
    const a = this.area, o = this.owner;
    if (!a) { box.append(el('div', { class: 'ttl', text: '왼쪽에서 지역 → 구역 → NPC 를 고르세요' })); return box; }
    if (!o) {
      box.append(el('div', { class: 'ttl', text: a.regionName + '  ›  ' + a.name }), el('div', { class: 'hint', text: '왼쪽 목록이나 지도에서 NPC 를 고르면 대사가 나와요.' }));
      return box;
    }
    box.append(el('div', { class: 'ttl', text: a.regionName + '  ›  ' + a.name + '  ›  ' + o.name }));
    if (!o.texts.length) box.append(el('div', { class: 'hint', text: '이 NPC 는 대사가 없어요.' }));
    o.texts.forEach((t, i) => box.append(this.textEditor(t, (i + 1) + '번째 대사' + (this.rom.textNote.has(t) ? ' · ' + this.rom.textNote.get(t) : ''), o)));
    box.append(el('div', { class: 'hint', style: 'margin-top:8px', text: '엔터 = 다음 줄      빈 줄 = 다음 말풍선\n' + nameHint(this.rom) + ' 같은 중괄호는 이름 등이 들어가는 자리예요\n다 고친 뒤 [저장하기]를 누르면 새 롬 파일로 저장돼요 (원래 롬은 그대로)' }));
    return box;
  }

  textEditor(t, title, owner) {
    const box = el('div', { class: 'tx' + (t.modified ? ' mod' : '') });
    const err = el('div', { class: 'err' });
    const ta = el('textarea', { spellcheck: 'false' });
    ta.value = t.current;
    ta.rows = Math.min(10, t.current.split('\n').length + 1);
    const check = () => { this.rom.validate(t); err.textContent = t.error || ''; box.classList.toggle('mod', t.modified); };
    ta.addEventListener('input', () => { t.edited = ta.value; check(); });
    ta.addEventListener('change', () => { if (owner) this.refreshTreeLabel(owner); this.drawMap(); });
    const reset = el('button', { text: '원래대로', style: 'font-size:12px;padding:1px 8px', onclick: () => { t.edited = null; ta.value = t.current; check(); if (owner) this.refreshTreeLabel(owner); } });
    box.append(el('div', { class: 'bar' }, el('span', { class: 'note', text: title + (t.readOnly ? ' (길게 늘릴 수 없음)' : '') }), el('span', { style: 'flex:1' }), reset), ta, err);
    check();
    return box;
  }


  // ---------------------------------------------------------------- 창 (데스크톱의 따로 뜨는 창)
  // wide: 머리줄에 [넓게 보기] 버튼 (창을 화면 가득)
  dialog(title, make, onClose, small, wide) {
    const close = () => { bg.remove(); if (onClose) onClose(); };
    const body = el('div', { class: 'dlg-body' });
    const wideBtn = wide ? el('button', { text: '⛶ 넓게 보기', style: 'margin-right:6px', onclick: () => {
      const on = dlg.classList.toggle('wide'); bg.classList.toggle('wide', on);
      wideBtn.textContent = on ? '✕ 원래 크기로' : '⛶ 넓게 보기';
    } }) : null;
    const dlg = el('div', { class: 'dlg' + (small ? ' small' : '') },
      el('div', { class: 'dlg-head' }, el('span', { text: title }), wideBtn, el('button', { class: 'dlg-close', text: '닫기', onclick: close })), body);
    const bg = el('div', { class: 'dlg-bg' }, dlg);
    bg.addEventListener('mousedown', e => { if (e.target === bg) close(); });
    this.host.append(bg);
    try { body.append(make()); } catch (e) { console.error(e); body.append(el('div', { class: 'bad', text: '오류: ' + e.message })); }
    return close;
  }

  // ---------------------------------------------------------------- BGM
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
    else this.say(name + ' 로 저장했어요 (내려받기)');
    this.buildTree(); this.setTab(this.tab);
  }
}

// ===== 95-tabs.js
// ================================================================ 데이터 편집 탭들 (야생 · 트레이너 · 상점 · 포켓몬 · 기술 · 타입 상성)
const pad3 = n => String(n).padStart(3, '0');

// 왼쪽 목록 (찾기 칸 + 항목들). items: [{ label, value, group? }]
function listPanel(items, onPick, placeholder, current) {
  const q = el('input', { type: 'search', placeholder: placeholder || '찾기' });
  const list = el('div', { class: 'list' });
  let on = null;
  const fill = () => {
    const s = q.value.trim();
    list.replaceChildren();
    let lastGroup = null;
    for (const it of items) {
      if (s && it.label.indexOf(s) < 0 && (it.group || '').indexOf(s) < 0) continue;
      if (it.group && it.group !== lastGroup) { list.append(el('div', { class: 'grp2', text: it.group })); lastGroup = it.group; }
      const d = el('div', { class: 'it', text: it.label, title: it.label });
      d.addEventListener('click', () => { if (on) on.classList.remove('on'); on = d; d.classList.add('on'); onPick(it.value, d); });
      if (current !== undefined && it.value === current) { on = d; d.classList.add('on'); }
      list.append(d);
    }
  };
  q.addEventListener('input', fill);
  fill();
  setTimeout(() => { if (on) on.scrollIntoView({ block: 'nearest' }); }, 0);
  const box = el('div', { class: 'box' }, q, list);
  // 밖에서 고른 칸 바꾸기 (onPick 은 부르지 않음)
  box.select = v => { current = v; fill(); if (on) on.scrollIntoView({ block: 'nearest' }); };
  return box;
}

Object.assign(App.prototype, {
  monOptions(withNone) { const r = this.rom, o = []; if (withNone) o.push([0, '(없음)']); for (let i = 1; i < r.pokemonNames.length; i++) o.push([i, pad3(i) + ' ' + r.pokemonNames[i]]); return o; },
  itemOptions() { const r = this.rom, o = [[0, '(없음)']]; for (let i = 1; i < r.itemNames.length; i++) o.push([i, r.itemNames[i]]); return o; },
  moveOptions() { const r = this.rom, o = [[0, '(없음)']]; for (let i = 1; i < r.moveNames.length; i++) o.push([i, pad3(i) + ' ' + r.moveNames[i]]); return o; },
  typeOptions() { return TYPES.map(([v, n]) => [v, n]); },
  notFound(what) { return el('div', { class: 'box' }, el('div', { text: '이 롬에서 ' + what + ' 데이터를 찾지 못했어요.' })); },
  okMsg(box, msg, bad) { box.textContent = msg; box.className = bad ? 'bad' : 'ok'; },
  areaByGM(g, m) { return this.rom.allAreas.find(a => a.group === g && a.map === m); },

  // ---------------------------------------------------------------- 트레이너
  tab_trainer() {
    const rom = this.rom;
    if (!rom.trainerClasses.length) return this.notFound('트레이너');
    const items = [];
    for (const tc of rom.trainerClasses) tc.parties.forEach((p, i) => items.push({ value: tc.cls * 256 + i + 1, label: p.name + ' — ' + p.mons.map(m => rom.monName(m.species) + ' ' + m.level).join(', '), group: tc.name }));
    const right = el('div', { class: 'box' });
    const show = key => {
      const tc = rom.trainerClasses.find(c => c.cls === key >> 8), pt = tc && tc.parties[(key & 255) - 1];
      right.replaceChildren();
      if (!pt) return;
      // 편집용 복사본
      const ed = { name: pt.name, type: pt.type, mons: pt.mons.map(m => ({ level: m.level, species: m.species, item: m.item, moves: m.moves.slice() })) };
      const msg = el('div');
      const monsBox = el('div');
      const nameIn = el('input', { class: 'txt', value: ed.name }); nameIn.addEventListener('input', () => ed.name = nameIn.value);
      const cbMoves = el('input', { type: 'checkbox' }), cbItem = el('input', { type: 'checkbox' });
      cbMoves.checked = !!(ed.type & 1); cbItem.checked = !!(ed.type & 2);
      const typeChange = () => { ed.type = (cbMoves.checked ? 1 : 0) | (cbItem.checked ? 2 : 0); drawMons(); };
      cbMoves.addEventListener('change', () => {
        if (cbMoves.checked) for (const m of ed.mons) if (!m.moves.some(x => x)) m.moves = rom.defaultMoves(m.species, m.level);
        typeChange();
      });
      cbItem.addEventListener('change', typeChange);
      const monOpts = this.monOptions(false), itemOpts = this.itemOptions(), moveOpts = this.moveOptions();
      const drawMons = () => {
        monsBox.replaceChildren();
        ed.mons.forEach((m, i) => {
          const box = el('div', { class: 'mon' });
          const row = el('div', { class: 'bar' }, el('b', { text: (i + 1) + '.' }),
            sel(monOpts, m.species, v => m.species = v), el('span', { text: 'Lv' }), num(m.level, 1, 100, v => m.level = v));
          if (ed.type & 2) row.append(el('span', { text: '도구' }), sel(itemOpts, m.item, v => m.item = v));
          row.append(el('button', { text: '✕', title: '이 포켓몬 빼기', onclick: () => { if (ed.mons.length > 1) { ed.mons.splice(i, 1); drawMons(); } } }));
          box.append(row);
          if (ed.type & 1) {
            const mr = el('div', { class: 'bar' });
            for (let k = 0; k < 4; k++) mr.append(sel(moveOpts, m.moves[k], v => m.moves[k] = v));
            mr.append(el('button', { text: '기본 기술', title: '그 레벨까지 배운 기술로 채우기', onclick: () => { m.moves = rom.defaultMoves(m.species, m.level); drawMons(); } }));
            box.append(mr);
          }
          monsBox.append(box);
        });
        if (ed.mons.length < 6) monsBox.append(el('button', { text: '+ 포켓몬 추가', onclick: () => { const l = ed.mons[ed.mons.length - 1]; ed.mons.push({ level: l ? l.level : 5, species: l ? l.species : 1, item: 0, moves: [0, 0, 0, 0] }); drawMons(); } }));
      };
      drawMons();
      const apply = el('button', { class: 'pri', text: '적용', onclick: () => {
        const backup = { name: pt.name, type: pt.type, mons: pt.mons };
        Object.assign(pt, { name: ed.name.trim(), type: ed.type, mons: ed.mons.map(m => ({ level: m.level, species: m.species, item: m.item, moves: m.moves.slice() })) });
        const err = rom.writeTrainerClass(tc);
        if (err) { Object.assign(pt, backup); this.okMsg(msg, err, true); return; }
        this.okMsg(msg, '적용했어요');
      } });
      right.append(el('div', { class: 'bar' }, el('b', { text: tc.name }), el('span', { class: 'hint', text: (key & 255) + '번' })),
        el('div', { class: 'bar' }, el('span', { text: '이름' }), nameIn,
          el('label', null, cbMoves, ' 기술 직접 정하기'), el('label', null, cbItem, ' 도구 지니게 하기')),
        monsBox, el('div', { class: 'bar', style: 'margin-top:8px' }, apply, msg));
      const where = [];
      for (const a of rom.allAreas) for (const o of a.owners.concat(a.extras)) if (o.trainer && o.trainer.cls === tc.cls && o.trainer.id === (key & 255)) where.push([a, o]);
      if (where.length) right.append(el('div', { class: 'bar' }, el('span', { class: 'hint', text: '나오는 곳:' }),
        ...where.map(([a, o]) => el('button', { text: a.regionName + ' › ' + a.name + ' › ' + o.name, onclick: () => this.goTo(a, o) }))));
    };
    let first = items[0].value;
    if (this.pick && this.pick.trainer) { first = this.pick.trainer.cls * 256 + this.pick.trainer.id; this.pick = null; }
    show(first);
    return el('div', { class: 'side' }, listPanel(items, show, '트레이너 · 포켓몬 찾기', first), right);
  },

  // ---------------------------------------------------------------- 포켓몬 (도감 능력치 · 진화 · 기술)
  tab_dex() {
    const rom = this.rom;
    if (rom.baseStatsOff < 0 || !rom.pokemonNames.length) return this.notFound('포켓몬 능력치');
    const items = this.monOptions(false).map(([v, t]) => ({ value: v, label: t }));
    const right = el('div', { class: 'box' });
    const typeOpts = this.typeOptions(), itemOpts = this.itemOptions(), monOpts = this.monOptions(false), moveOpts = this.moveOptions();
    const tms = [];
    if (rom.tmOff >= 0) for (let i = 0; i < 57; i++) tms.push((i < 50 ? '기술머신' + String(i + 1).padStart(2, '0') : '비전머신' + String(i - 49).padStart(2, '0')) + ' ' + rom.moveName(rom.data[rom.tmOff + i]));
    const show = mon => {
      right.replaceChildren();
      const d = rom.data, o = rom.statOff(mon), msg = el('div');
      const nameIn = el('input', { class: 'txt', value: rom.pokemonNames[mon] });
      const t1 = sel(typeOpts, d[o + 7]), t2 = sel(typeOpts, d[o + 8]);
      const statNames = ['HP', '공격', '방어', '스피드', '특수공격', '특수방어'];
      const stats = statNames.map((n, i) => num(Math.max(1, d[o + 1 + i]), 1, 255));
      const total = el('b');
      const sum = () => total.textContent = '합계 ' + stats.reduce((s, x) => s + (+x.value || 0), 0);
      stats.forEach(s => s.addEventListener('input', sum)); sum();
      const cr = num(d[o + 9], 0, 255), exp = num(d[o + 10], 0, 255), egg = num(d[o + 15], 0, 255);
      const i1 = sel(itemOpts, d[o + 11]), i2 = sel(itemOpts, d[o + 12]);
      const gi = GENDER_VALS.indexOf(d[o + 13]);
      const gender = sel(GENDER_NAMES.map((n, i) => [i, n]), gi >= 0 ? gi : 3);
      const growth = sel(GROWTH.map((n, i) => [i, n]), d[o + 22]);
      const tmBoxes = tms.map((n, i) => { const c = el('input', { type: 'checkbox' }); c.checked = !!((d[o + 24 + (i >> 3)] >> (i & 7)) & 1); return [c, el('label', null, c, ' ' + n)]; });

      // 진화 · 레벨업 기술
      const ev = rom.evosBank >= 0 ? rom.readEvos(mon) : { evos: [], moves: [] };
      const evos = ev.evos.map(e => Object.assign({}, e)), learn = ev.moves.map(m => Object.assign({}, m));
      const evoBox = el('div'), learnBox = el('div');
      const drawEvos = () => {
        evoBox.replaceChildren();
        evos.forEach((e, i) => {
          const r = el('div', { class: 'bar' }, sel(EVO_METHODS.slice(1).map((n, k) => [k + 1, n]), e.method, v => { e.method = v; e.p1 = v === 3 ? 0xFF : v === 4 ? 1 : v === 2 ? 1 : 16; e.p2 = 1; drawEvos(); }));
          if (e.method === 1 || e.method === 5) r.append(el('span', { text: 'Lv' }), num(e.p1, 1, 100, v => e.p1 = v));
          if (e.method === 2) r.append(sel(itemOpts.slice(1), e.p1, v => e.p1 = v));
          if (e.method === 3) r.append(sel([[0xFF, '(도구 없이)']].concat(itemOpts.slice(1)), e.p1, v => e.p1 = v));
          if (e.method === 4) r.append(sel([[1, '언제나'], [2, '아침·낮'], [3, '밤']], e.p1, v => e.p1 = v));
          if (e.method === 5) r.append(sel([[1, '공격 > 방어'], [2, '공격 < 방어'], [3, '공격 = 방어']], e.p2, v => e.p2 = v));
          r.append(el('span', { text: '→' }), sel(monOpts, e.species, v => e.species = v), el('button', { text: '✕', onclick: () => { evos.splice(i, 1); drawEvos(); } }));
          evoBox.append(r);
        });
        evoBox.append(el('button', { text: '+ 진화 추가', onclick: () => { evos.push({ method: 1, p1: 16, p2: 1, species: Math.min(251, mon + 1) }); drawEvos(); } }));
      };
      const drawLearn = () => {
        learnBox.replaceChildren();
        learn.forEach((m, i) => learnBox.append(el('div', { class: 'bar' }, el('span', { text: 'Lv' }), num(m.level, 1, 100, v => m.level = v),
          sel(moveOpts.slice(1), m.move, v => m.move = v), el('button', { text: '✕', onclick: () => { learn.splice(i, 1); drawLearn(); } }))));
        learnBox.append(el('button', { text: '+ 기술 추가', onclick: () => { const l = learn[learn.length - 1]; learn.push({ level: l ? Math.min(100, l.level + 1) : 1, move: 1 }); drawLearn(); } }));
      };
      drawEvos(); drawLearn();

      const apply = el('button', { class: 'pri', text: '적용', onclick: () => {
        try {
          const nm = nameIn.value.trim();
          if (nm !== rom.pokemonNames[mon]) rom.setPokemonName(mon, nm);
          d[o + 7] = +t1.value; d[o + 8] = +t2.value;
          stats.forEach((s, i) => d[o + 1 + i] = Math.max(1, Math.min(255, +s.value || 1)));
          d[o + 9] = +cr.value & 255; d[o + 10] = +exp.value & 255; d[o + 15] = +egg.value & 255;
          d[o + 11] = +i1.value; d[o + 12] = +i2.value;
          d[o + 13] = GENDER_VALS[+gender.value]; d[o + 22] = +growth.value;
          tmBoxes.forEach(([c], i) => { const b = o + 24 + (i >> 3), bit = 1 << (i & 7); d[b] = c.checked ? d[b] | bit : d[b] & ~bit; });
          rom.dirty = true;
          if (rom.evosBank >= 0) {
            if (learn.some(m => !(m.level >= 1 && m.level <= 100))) throw new Error('레벨업 기술의 레벨은 1~100 이어야 해요');
            const e = rom.writeEvos(mon, evos, learn);
            if (e) throw new Error(e);
          }
          this.okMsg(msg, '적용했어요');
        } catch (e) { this.okMsg(msg, e.message, true); }
      } });

      const grid = el('table', { class: 'grid' });
      statNames.forEach((n, i) => grid.append(el('tr', null, el('th', { text: n }), el('td', null, stats[i]))));
      grid.append(el('tr', null, el('th', { text: '' }), el('td', null, total)));
      const etc = el('table', { class: 'grid' },
        el('tr', null, el('th', { text: '잡히는 정도' }), el('td', null, cr, el('span', { class: 'hint', text: ' (높을수록 잘 잡힘)' }))),
        el('tr', null, el('th', { text: '기본 경험치' }), el('td', null, exp)),
        el('tr', null, el('th', { text: '야생이 지닌 도구' }), el('td', null, i1, ' ', i2)),
        el('tr', null, el('th', { text: '성별' }), el('td', null, gender)),
        el('tr', null, el('th', { text: '성장 속도' }), el('td', null, growth)),
        el('tr', null, el('th', { text: '알 부화 걸음' }), el('td', null, egg, el('span', { class: 'hint', text: ' ×256 걸음' }))));
      right.append(el('div', { class: 'bar' }, el('b', { text: pad3(mon) }), el('span', { text: '이름' }), nameIn, el('span', { text: '타입' }), t1, t2),
        el('div', { class: 'bar', style: 'align-items:flex-start' }, grid, etc),
        el('div', { class: 'grp', text: '진화' }), evoBox,
        el('div', { class: 'grp', text: '레벨업으로 배우는 기술' }), learnBox);
      if (tms.length) right.append(el('div', { class: 'grp', text: '기술머신 · 비전머신으로 배울 수 있는 기술' }), el('div', { class: 'tm' }, ...tmBoxes.map(x => x[1])));
      right.append(el('div', { class: 'bar', style: 'margin-top:8px' }, apply, msg));
    };
    show(1);
    return el('div', { class: 'side' }, listPanel(items, show, '포켓몬 찾기', 1), right);
  },

  // ---------------------------------------------------------------- 기술
  tab_moves() {
    const rom = this.rom;
    if (rom.movesOff < 0 || rom.moveNames.length < 2) return this.notFound('기술');
    const items = this.moveOptions().slice(1).map(([v, t]) => ({ value: v, label: t }));
    const right = el('div', { class: 'box' });
    const effects = moveEffects();
    const show = mv => {
      right.replaceChildren();
      const d = rom.data, o = rom.moveOff(mv), msg = el('div');
      const nameIn = el('input', { class: 'txt', value: rom.moveNames[mv] });
      const eff = sel(effects.map((n, i) => [i, n]).concat(d[o + 1] >= effects.length ? [[d[o + 1], '효과 ' + d[o + 1]]] : []), d[o + 1]);
      const power = num(d[o + 2], 0, 255), type = sel(this.typeOptions().concat(TYPE_NAME.has(d[o + 3]) && !TYPES.some(t => t[0] === d[o + 3]) ? [[d[o + 3], TYPE_NAME.get(d[o + 3])]] : []), d[o + 3]);
      const acc = num(Math.min(100, Math.round(d[o + 4] * 100 / 255)), 0, 100), pp = num(Math.max(1, Math.min(40, d[o + 5])), 1, 40);
      const chance = num(Math.min(100, Math.round(d[o + 6] * 100 / 255)), 0, 100);
      const apply = el('button', { class: 'pri', text: '적용', onclick: () => {
        try {
          const nm = nameIn.value.trim();
          if (nm !== rom.moveNames[mv]) rom.setMoveName(mv, nm);
          d[o + 1] = +eff.value; d[o + 2] = Math.min(255, +power.value || 0); d[o + 3] = +type.value;
          d[o + 4] = Math.min(255, Math.round((+acc.value || 0) * 255 / 100)); d[o + 5] = Math.max(1, Math.min(40, +pp.value || 1));
          d[o + 6] = Math.min(255, Math.round((+chance.value || 0) * 255 / 100));
          rom.dirty = true;
          this.okMsg(msg, '적용했어요');
        } catch (e) { this.okMsg(msg, e.message, true); }
      } });
      right.append(el('table', { class: 'grid' },
        el('tr', null, el('th', { text: '이름' }), el('td', null, nameIn)),
        el('tr', null, el('th', { text: '효과' }), el('td', null, eff)),
        el('tr', null, el('th', { text: '위력' }), el('td', null, power)),
        el('tr', null, el('th', { text: '타입' }), el('td', null, type)),
        el('tr', null, el('th', { text: '명중률' }), el('td', null, acc, ' %')),
        el('tr', null, el('th', { text: 'PP' }), el('td', null, pp)),
        el('tr', null, el('th', { text: '추가 효과 확률' }), el('td', null, chance, ' %'))),
        el('div', { class: 'bar', style: 'margin-top:8px' }, apply, msg),
        this.moveGfxSection(mv));
    };
    show(1);
    return el('div', { class: 'side' }, listPanel(items, show, '기술 찾기', 1), right);
  },

  // ---------------------------------------------------------------- 타입 상성
  tab_types() {
    const rom = this.rom;
    const entries = rom.readTypeMatchups();
    if (!entries.length) return this.notFound('타입 상성');
    const normal = entries.filter(e => !e.foresight), foresight = entries.filter(e => e.foresight);
    const grid = new Map();
    for (const e of normal) grid.set(e.atk * 256 + e.def, e.mult);
    const label = m => m === 0 ? '0' : m === 5 ? '½' : m === 20 ? '2' : m === 10 ? '' : (m / 10) + '';
    const cycle = { 10: 20, 20: 5, 5: 0, 0: 10 };
    const msg = el('div');
    const tbl = el('table', { class: 'grid types' });
    const head = el('tr', null, el('th', { text: '공격 ↓ / 방어 →' }));
    for (const [, n] of TYPES) head.append(el('th', { class: 'v', text: n }));
    tbl.append(head);
    for (const [atk, an] of TYPES) {
      const tr = el('tr', null, el('th', { text: an }));
      for (const [def] of TYPES) {
        const k = atk * 256 + def, m = grid.has(k) ? grid.get(k) : 10;
        const td = el('td', { class: 'c m' + m, text: label(m), title: an + ' → ' + TYPE_NAME.get(def) });
        td.addEventListener('mousedown', ev => {
          ev.preventDefault();
          const cur = grid.has(k) ? grid.get(k) : 10, nx = cycle[cur] !== undefined ? cycle[cur] : 10;
          if (nx === 10) grid.delete(k); else grid.set(k, nx);
          td.className = 'c m' + nx; td.textContent = label(nx);
        });
        tr.append(td);
      }
      tbl.append(tr);
    }
    const apply = el('button', { class: 'pri', text: '타입 상성 적용', onclick: () => {
      // 원래 순서를 최대한 지키고, 새로 생긴 것은 뒤에
      const list = [], seen = new Set();
      for (const e of normal) { const k = e.atk * 256 + e.def; if (grid.has(k) && !seen.has(k)) { list.push({ atk: e.atk, def: e.def, mult: grid.get(k), foresight: false }); seen.add(k); } }
      for (const [k, m] of grid) if (!seen.has(k)) list.push({ atk: k >> 8, def: k & 255, mult: m, foresight: false });
      const err = rom.saveTypeMatchups(list.concat(foresight));
      this.okMsg(msg, err || '적용했어요', !!err);
    } });
    return el('div', { class: 'box' },
      el('div', { class: 'hint', text: '칸을 누를 때마다 보통 → 2배(굉장함) → ½배(반감) → 0배(무효) 순서로 바뀌어요. 고스트·노말/격투 무효(꿰뚫어보기로 풀리는 것)는 따로 그대로 둬요.' }),
      el('div', { class: 'scrollx', style: 'margin:8px 0' }, tbl),
      el('div', { class: 'bar' }, apply, msg));
  }
});

// 기술 효과 이름 (RomDex.cs DexText.Effects 와 같음)
function moveEffects() {
  if (moveEffects.list) return moveEffects.list;
  const stat = { ATTACK: '공격', DEFENSE: '방어', SPEED: '스피드', SP_ATK: '특수공격', SP_DEF: '특수방어', ACCURACY: '명중률', EVASION: '회피율' };
  moveEffects.list = EFFECT_CONSTS.split(' ').map(c => {
    if (EFFECT_KO[c]) return EFFECT_KO[c];
    if (c.startsWith('UNUSED')) return '(미사용)';
    const m = /^(ATTACK|DEFENSE|SPEED|SP_ATK|SP_DEF|ACCURACY|EVASION)_(UP|DOWN)(_2|_HIT)?$/.exec(c);
    if (m) {
      const st = stat[m[1]], up = m[2] === 'UP', k = m[3] || '';
      if (k === '_HIT') return '공격 + 상대 ' + st + ' 하락 (확률)';
      return up ? '자신 ' + st + ' ' + (k === '_2' ? '크게 상승' : '상승') : '상대 ' + st + ' ' + (k === '_2' ? '크게 하락' : '하락');
    }
    return c;
  });
  return moveEffects.list;
}

// ===== 96-panels.js
// ================================================================ 아래 탭들 (Panels.cs · ShopPanel.cs · GiftPanel.cs · EventPanel.cs) · 오박사 인트로 · BGM 에디터
Object.assign(App.prototype, {
  goTo(a, o) { for (const d of this.host.querySelectorAll('.dlg-bg')) d.remove(); Player.stop(); this.selectArea(a, o || null); },

  // ---------------------------------------------------------------- [야생 포켓몬] 탭 (WildPanel)
  pageWild() {
    const rom = this.rom, a = this.area, box = el('div');
    const note = s => el('div', { class: 'hint', text: s });
    if (!a) { box.append(note('왼쪽에서 구역을 고르세요.')); return box; }
    const tables = rom.wildFor(a);
    if (!tables.length) { box.append(note('이 구역에는 야생 포켓몬이 나오지 않아요.')); return box; }
    if (rom.pokemonNames.length < 252) { box.append(note('포켓몬 이름표를 찾지 못해서 편집할 수 없어요.')); return box; }
    const changed = () => { rom.dirty = true; this.say('야생 포켓몬을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.'); };
    const opts = this.monOptions(false);
    // 칸마다 포켓몬을 무작위로 (레벨은 그대로, 같은 칸은 아침·낮·밤 모두 같은 포켓몬)
    const LEGEND = [144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251];
    const legendChk = el('input', { type: 'checkbox' });
    const randomize = () => {
      const pool = [];
      for (let n = 1; n <= 251; n++) if (legendChk.checked || !LEGEND.includes(n)) pool.push(n);
      for (const t of tables) {
        const times = t.water ? 1 : 3, slots = (t.water ? WATER_CHANCE : GRASS_CHANCE).length;
        for (let i = 0; i < slots; i++) {
          const mon = pool[Math.floor(Math.random() * pool.length)];
          for (let ti = 0; ti < times; ti++) rom.data[rom.wildSlot(t, ti, i) + 1] = mon;
        }
      }
      changed();
      this.setTab(T_WILD);
    };
    // 레벨을 정한 범위 안에서 무작위로 (같은 칸은 아침·낮·밤 모두 같은 레벨)
    const lv = this.wildLv || (this.wildLv = { lo: 2, hi: 10 });
    const randomLevel = () => {
      const lo = Math.min(lv.lo, lv.hi), hi = Math.max(lv.lo, lv.hi);
      for (const t of tables) {
        const times = t.water ? 1 : 3, slots = (t.water ? WATER_CHANCE : GRASS_CHANCE).length;
        for (let i = 0; i < slots; i++) {
          const v = lo + Math.floor(Math.random() * (hi - lo + 1));
          for (let ti = 0; ti < times; ti++) rom.data[rom.wildSlot(t, ti, i)] = v;
        }
      }
      changed();
      this.setTab(T_WILD);
    };
    box.append(el('div', { class: 'bar' }, el('button', { text: '🎲 랜덤 포켓몬으로 바꾸기', onclick: randomize }),
      el('label', null, legendChk, ' 전설·환상 포켓몬 포함')));
    box.append(el('div', { class: 'bar' }, el('button', { text: '🎲 레벨 랜덤으로 바꾸기', onclick: randomLevel }),
      ' Lv ', num(lv.lo, 1, 100, v => { lv.lo = v; }), ' ~ ', num(lv.hi, 1, 100, v => { lv.hi = v; })));
    for (const t of tables) {
      const times = t.water ? ['모든 시간'] : ['아침', '낮', '밤'];
      const tbl = el('table', { class: 'grid' });
      tbl.append(el('tr', null, el('th', { text: '' }), ...times.map(s => el('th', { text: s, style: 'font-weight:bold;color:var(--ink)' }))));
      const rate = el('tr', null, el('th', { text: '만날 확률' }));
      times.forEach((_, ti) => {
        const off = rom.wildRate(t, ti);
        rate.append(el('td', null, num(Math.min(100, Math.round(rom.data[off] * 100 / 255)), 0, 100, v => { rom.data[off] = Math.min(255, Math.round(v * 255 / 100)); changed(); }), ' %'));
      });
      tbl.append(rate);
      const chance = t.water ? WATER_CHANCE : GRASS_CHANCE;
      for (let i = 0; i < chance.length; i++) {
        const tr = el('tr', null, el('th', { text: '칸 ' + (i + 1) + ' (' + chance[i] + '%)' }));
        times.forEach((_, ti) => {
          const off = rom.wildSlot(t, ti, i);
          tr.append(el('td', null, sel(opts, rom.data[off + 1], v => { rom.data[off + 1] = v; changed(); }), ' Lv ',
            num(Math.max(1, Math.min(100, rom.data[off])), 1, 100, v => { rom.data[off] = v; changed(); })));
        });
        tbl.append(tr);
      }
      box.append(el('fieldset', null, el('legend', { text: t.water ? '물 위 (파도타기)' : '풀숲 · 동굴' }), el('div', { class: 'scrollx' }, tbl)));
    }
    return box;
  },

  // ---------------------------------------------------------------- [프렌들리숍] 탭 (ShopPanel)
  martSpots() {
    const spots = new Map();
    for (const a of this.rom.allAreas) for (const o of a.owners.concat(a.extras)) if (o.mart != null) { if (!spots.has(o.mart)) spots.set(o.mart, []); spots.get(o.mart).push([a, o]); }
    return spots;
  },
  pageShop() {
    const rom = this.rom, box = el('div');
    if (!rom.marts.length || rom.itemAttrOff < 0) { box.append(el('div', { class: 'hint', text: '이 롬에서 상점 데이터를 찾지 못했어요' })); return box; }
    const spots = this.martSpots();
    let cur = null;
    if (this.owner && this.owner.mart != null) cur = rom.marts.find(m => m.id === this.owner.mart);
    if (!cur && this.area) for (const [id, l] of spots) if (l.some(([a]) => a === this.area)) { cur = rom.marts.find(m => m.id === id); break; }
    if (!cur && this.martSel != null) cur = rom.marts.find(m => m.id === this.martSel);
    const label = m => { const s = spots.get(m.id); return s ? s[0][0].regionName + ' › ' + s[0][0].name + ' › ' + s[0][1].name : '상점 ' + (m.id + 1) + ' (위치 모름)'; };
    const shopBox = sel([[-1, '(상점을 고르세요)']].concat(rom.marts.map(m => [m.id, label(m)])), cur ? cur.id : -1, id => {
      this.martSel = id;
      const s = spots.get(id);
      if (s) this.selectArea(s[0][0], s[0][1]); else this.setTab(T_SHOP);
    });
    shopBox.style.width = '460px';
    box.append(el('div', { class: 'bar' }, el('span', { text: '상점' }), shopBox));
    if (!cur) { box.append(el('div', { class: 'hint', text: '지도에서 점원을 클릭하거나 위에서 상점을 고르세요' })); return box; }
    const places = (spots.get(cur.id) || []).length;
    box.append(el('div', { class: 'hint', text: '물건 ' + cur.items.length + '개' + (places > 1 ? '  ·  이 목록은 ' + places + '곳에서 같이 써요' : '') }));
    const itemOpts = this.itemOptions().slice(1).map(([v, t]) => [v, pad3(v) + ' ' + t]);
    const rows = el('div'), err = el('div');
    const list = cur.items.map(it => ({ item: it, price: rom.getPrice(it) }));
    const draw = () => {
      rows.replaceChildren();
      list.forEach((r, i) => {
        const sell = el('span', { class: 'hint', text: '원   (되팔 때 ' + Math.floor(r.price / 2) + '원)' });
        const price = num(Math.min(65535, r.price), 0, 65535, v => { r.price = v; sell.textContent = '원   (되팔 때 ' + Math.floor(v / 2) + '원)'; });
        rows.append(el('div', { class: 'bar' },
          sel(itemOpts, r.item, v => { r.item = v; r.price = rom.getPrice(v); draw(); }), el('span', { text: '가격' }), price, sell,
          el('button', { text: '▲', onclick: () => { if (i > 0) { [list[i - 1], list[i]] = [list[i], list[i - 1]]; draw(); } } }),
          el('button', { text: '빼기', onclick: () => { list.splice(i, 1); draw(); } })));
      });
      add.disabled = list.length >= MAX_MART_ITEMS;
    };
    const add = el('button', { text: '물건 추가', onclick: () => { if (list.length < MAX_MART_ITEMS) { list.push({ item: 18, price: rom.getPrice(18) }); draw(); } } });
    draw();
    const apply = el('button', { class: 'apply', text: '적용', style: 'margin-top:10px', onclick: () => {
      const e = rom.writeMart(cur, list.map(r => r.item));
      if (e) { this.okMsg(err, e, true); return; }
      for (const r of list) if (rom.getPrice(r.item) !== r.price) rom.setPrice(r.item, r.price);
      this.martSel = cur.id; this.setTab(T_SHOP);
      this.say('상점을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
    } });
    box.append(rows, add, el('div', null, apply), err,
      el('div', { class: 'hint', style: 'margin-top:8px', text: '· 지도에서 점원을 클릭하면 그 상점이 열려요\n· 가격은 아이템마다 하나라서, 바꾸면 다른 상점과 되팔 때 값(절반)도 같이 바뀌어요\n· 적용한 뒤 [저장하기]를 눌러야 롬 파일에 기록돼요' }));
    return box;
  },

  // ---------------------------------------------------------------- [선물 포켓몬] 탭 (GiftPanel)
  pageGift() {
    const rom = this.rom, box = el('div');
    if (!rom.gifts.length) { box.append(el('div', { class: 'hint', text: '이 롬에서 선물 포켓몬을 찾지 못했어요' })); return box; }
    let list = this.owner ? rom.giftsOf(this.owner) : [];
    if (!list.length && this.area) list = rom.giftsIn(this.area);
    if (!list.length && this.giftSel) list = [this.giftSel];
    const label = g => rom.giftWhere(g) + '  —  ' + rom.monName(rom.giftSpecies(g)) + ' Lv' + rom.giftLevel(g) + (g.egg ? ' (알)' : '');
    const giftBox = sel([[-1, '(선물 포켓몬을 고르세요)']].concat(rom.gifts.map((g, i) => [i, label(g)])), list.length ? rom.gifts.indexOf(list[0]) : -1, i => {
      const g = rom.gifts[i]; if (!g) return;
      this.giftSel = g; this.selectArea(g.area, g.owner); this.setTab(T_GIFT);
    });
    giftBox.style.width = '520px';
    box.append(el('div', { class: 'bar' }, el('span', { text: '선물 포켓몬' }), giftBox));
    if (!list.length) { box.append(el('div', { class: 'hint', text: '지도에서 몬스터볼이나 NPC를 클릭하거나 위에서 고르세요' })); }
    if (list.length > 1) box.append(el('div', { class: 'hint', text: '이 구역의 선물 포켓몬 ' + list.length + '마리' }));
    const monOpts = this.monOptions(false), moveOpts = this.moveOptions(), itemOpts = this.itemOptions();
    const err = el('div'), applies = [];
    for (const g of list) {
      const ed = { mon: rom.giftSpecies(g), lv: Math.max(1, Math.min(100, rom.giftLevel(g))), item: rom.giftItem(g) };
      const custom0 = rom.giftMoves(g);
      const defaults = () => rom.defaultMoves(ed.mon, ed.lv);
      let moves = (custom0 || defaults()).slice();
      const preview = el('div', { class: 'hint' });
      const [own, ownL] = check('이 포켓몬만 기술 직접 정하기', custom0 != null);
      own.disabled = g.egg;
      const mvBoxes = el('span');
      const drawMoves = () => {
        mvBoxes.replaceChildren(...[0, 1, 2, 3].map(i => { const s = sel(moveOpts, moves[i] || 0, v => moves[i] = v); s.disabled = !own.checked; s.style.width = '150px'; return s; }));
        if (!own.checked) preview.textContent = '받을 때 기술 (그 레벨까지 배운 기본 기술): ' + defaults().filter(x => x > 0).map(x => rom.moveName(x)).join(', ');
        else preview.textContent = '이 선물 포켓몬만 위 기술 4개를 가지고 와요 (다른 곳의 같은 포켓몬은 그대로)';
      };
      const upd = () => { if (!own.checked) moves = defaults(); drawMoves(); picUpd(); };
      own.addEventListener('change', () => { if (own.checked) moves = (rom.giftMoves(g) || defaults()).slice(); drawMoves(); });
      const monSel = sel(monOpts, ed.mon, v => { ed.mon = v; upd(); });
      const lvIn = num(ed.lv, 1, 100, v => { ed.lv = v; upd(); });
      const row = el('div', { class: 'bar' }, el('span', { text: '포켓몬' }), monSel, el('span', { text: '레벨' }), lvIn);
      if (!g.egg) row.append(el('span', { text: '지닌 도구' }), sel(itemOpts, ed.item, v => ed.item = v));
      // 고를 때 보이는 그림·울음소리
      const hasPic = rom.giftHasPic(g), hasCry = rom.giftHasCry(g);
      const pc = { pic: hasPic ? rom.giftPic(g) : ed.mon, cry: hasCry ? rom.giftCry(g) : ed.mon };
      const [same, sameL] = check('그림·울음소리도 받는 포켓몬과 같게', (!hasPic || rom.giftPic(g) === ed.mon) && (!hasCry || rom.giftCry(g) === ed.mon));
      const picImg = el('span');
      const picSel = sel(monOpts, pc.pic, v => { pc.pic = v; showPic(); }), crySel = sel(monOpts, pc.cry, v => pc.cry = v);
      const showPic = () => { const c = rom.monPicture(pc.pic, 1); picImg.replaceChildren(c || ''); };
      const picUpd = () => {
        if (!hasPic && !hasCry) return;
        if (same.checked) { pc.pic = pc.cry = ed.mon; picSel.value = crySel.value = ed.mon; }
        picSel.disabled = !hasPic || same.checked; crySel.disabled = !hasCry || same.checked;
        showPic();
      };
      same.addEventListener('change', picUpd);
      const picRow = el('div', { class: 'bar' }, sameL);
      if (hasPic) picRow.append(el('span', { text: '고를 때 그림' }), picSel);
      if (hasCry) picRow.append(el('span', { text: '울음소리' }), crySel);
      if (hasPic) picRow.append(picImg);
      const [textChk, textL] = check('포켓몬을 바꾸면 이 NPC 대사 속 이름·타입도 같이 바꾸기', true);
      const sync = el('button', { text: '🔁 대사를 지금 포켓몬에 맞추기', onclick: () => this.syncGiftTexts(g, err) });
      const fs = el('fieldset', null, el('legend', { text: rom.giftWhere(g) + (g.egg ? '  (알로 줌)' : '') }), row, el('div', { class: 'bar' }, textL, sync));
      if (hasPic || hasCry) fs.append(picRow);
      if (!g.egg) fs.append(el('div', { class: 'bar' }, ownL, mvBoxes));
      fs.append(preview);
      box.append(fs);
      drawMoves(); picUpd();
      applies.push(changes => {
        const oldMon = rom.giftSpecies(g), newMon = ed.mon;
        if (textChk.checked) { changes.texts += rom.updateGiftTexts(g, oldMon, newMon); if (oldMon !== newMon) changes.mons.push([oldMon, newMon]); }
        rom.setGift(g, newMon, ed.lv, ed.item);
        if (hasPic || hasCry) rom.setGiftPicCry(g, pc.pic, pc.cry);
        return rom.setGiftMoves(g, own.checked ? moves.map(m => m || 0) : null);
      });
    }
    if (list.length) {
      box.append(el('button', { class: 'apply', text: '적용', onclick: () => {
        const changes = { texts: 0, mons: [] };
        const errs = applies.map(f => f(changes)).filter(x => x);
        if (errs.length) { this.okMsg(err, errs.join('\n'), true); return; }
        let msg = '적용했어요. [저장하기]를 눌러야 롬 파일에 기록돼요';
        if (changes.texts) msg += '\n대사 ' + changes.texts + '개에서 포켓몬 이름·타입도 바꿨어요 ([대사] 탭에서 확인)';
        this.buildTree(); this.drawMap();
        this.setTab(T_GIFT);
        this.say(msg.split('\n')[0]);
        // 라이벌·공박사 등 다른 대사에서도 옛 이름이 나오면 골라서 바꾸게
        const next = () => {
          const mc = changes.mons.shift();
          if (!mc) return;
          const found = rom.textsMentioning(mc[0]);
          if (found.length) this.monTextDialog(found, mc[0], mc[1], next); else next();
        };
        next();
      } }), err);
    }
    box.append(el('div', { class: 'hint', style: 'margin-top:8px', text:
      '· 지도에서 공박사 연구소의 몬스터볼(스타팅 포켓몬)이나 포켓몬을 주는 NPC를 클릭하세요\n' +
      '· [이 포켓몬만 기술 직접 정하기]를 켜면 이 선물 포켓몬만 고른 기술 4개를 가지고 와요 (포켓몬 전체 데이터는 안 바뀜)\n' +
      '   끄면 원래처럼 그 레벨까지 배우는 기술을 가져요\n' +
      '· 고를 때 나오는 그림·울음소리는 따로 정할 수 있어요 (끄면 받는 포켓몬과 같게)\n' +
      '· 새 게임 때 오박사가 보여주는 포켓몬은 위쪽 [오박사 인트로] 버튼에서 바꿔요\n' +
      '· 라이벌이 고르는 포켓몬은 [트레이너 편집]의 라이벌 팀에서 바꿀 수 있어요' }));
    return box;
  },

  syncGiftTexts(g, err) {
    const rom = this.rom, cur = rom.giftSpecies(g), old = rom.mentionedOtherMon(g);
    if (!old) { this.okMsg(err, '이 NPC 대사에는 다른 포켓몬 이름이 없어요 (이미 맞아요)'); return; }
    const n = rom.updateGiftTexts(g, old, cur);
    this.buildTree();
    this.okMsg(err, '이 NPC 대사 ' + n + "개에서 '" + rom.monName(old) + "' → '" + rom.monName(cur) + "' 로 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요");
    const found = rom.textsMentioning(old);
    if (found.length) this.monTextDialog(found, old, cur);
  },

  // 다른 대사에서도 옛 포켓몬 이름 바꾸기 (MonTextForm)
  monTextDialog(found, oldMon, newMon, after) {
    const rom = this.rom;
    const checks = found.map(() => { const c = el('input', { type: 'checkbox' }); c.checked = true; return c; });
    const before = el('textarea', { readonly: '', style: 'width:100%;height:100px' }), aft = el('textarea', { readonly: '', style: 'width:100%;height:100px' });
    const tbl = el('table', { class: 'grid', style: 'width:100%' }, el('tr', null, el('th', { text: '바꾸기' }), el('th', { text: '어디서 나오는 대사' }), el('th', { text: '바뀐 뒤 대사' })));
    found.forEach(([t, where], i) => {
      const tr = el('tr', { style: 'cursor:pointer' }, el('td', null, checks[i]), el('td', { text: where }), el('td', { text: RAW + rom.replaceMonInText(t.current, oldMon, newMon).replace(/\n/g, ' / ') }));
      tr.addEventListener('click', e => { if (e.target !== checks[i]) { before.value = t.current; aft.value = rom.replaceMonInText(t.current, oldMon, newMon); } });
      tbl.append(tr);
    });
    if (found.length) { before.value = found[0][0].current; aft.value = rom.replaceMonInText(found[0][0].current, oldMon, newMon); }
    let close;
    const ok = el('button', { class: 'apply', text: '✅ 체크한 대사 바꾸기', onclick: () => {
      let n = 0;
      found.forEach(([t], i) => {
        if (!checks[i].checked) return;
        const s = rom.replaceMonInText(t.current, oldMon, newMon);
        if (s !== t.current) { rom.setTextChecked(t, s); n++; }
      });
      close();
      if (n) { this.buildTree(); this.say('다른 대사 ' + n + '개에서도 포켓몬 이름을 바꿨어요 ([대사] 탭에서 확인)'); }
    } });
    close = this.dialog("다른 대사에서도 '" + rom.monName(oldMon) + "' → '" + rom.monName(newMon) + "' 로 바꾸기", () => el('div', null,
      el('div', { class: 'hint', style: 'color:#334;margin-bottom:6px', text: "게임 대사 중 '" + rom.monName(oldMon) + "' 이(가) 나오는 곳 " + found.length + '개를 찾았어요. 바꿀 대사만 체크하세요 (이름·조사·타입 표현을 같이 바꿔요).\n예: 라이벌·공박사가 그 포켓몬을 말하는 대사는 체크, 다른 뜻으로 쓰인 곳은 체크 해제' }),
      el('div', { style: 'max-height:340px;overflow:auto' }, tbl),
      el('div', { class: 'side', style: 'grid-template-columns:1fr 1fr;margin-top:8px' }, el('div', null, el('b', { text: '지금 대사' }), before), el('div', null, el('b', { text: '바뀐 뒤' }), aft)),
      el('div', { class: 'bar', style: 'margin-top:8px;justify-content:flex-end' },
        el('button', { text: '모두 체크', onclick: () => checks.forEach(c => c.checked = true) }),
        el('button', { text: '모두 해제', onclick: () => checks.forEach(c => c.checked = false) }),
        el('button', { text: '안 바꾸기', onclick: () => close() }), ok)), after);
  },

  // ---------------------------------------------------------------- 오박사 인트로 (IntroForm)
  introDialog() {
    const rom = this.rom, box = el('div');
    box.append(el('div', { class: 'hint', text: '새 게임을 시작하면 오박사가 "이 세계에는 포켓몬이라는 생물이…" 하며 보여주는 포켓몬이에요.' }));
    const monOpts = this.monOptions(false);
    const st = { pic: Math.max(1, Math.min(251, rom.introPic)), cry: Math.max(1, Math.min(251, rom.introCry)) };
    const preview = el('div', { style: 'width:140px;height:140px;border:1px solid var(--line);background:#fff;display:flex;align-items:center;justify-content:center' });
    const show = () => { const c = rom.monPicture(st.pic, 2); preview.replaceChildren(c || ''); };
    const cry = sel(monOpts, st.cry, v => st.cry = v);
    const pic = sel(monOpts, st.pic, v => { st.pic = v; if (same.checked) { st.cry = v; cry.value = v; } show(); });
    const [same, sameL] = check('울음소리도 같은 포켓몬으로', st.pic === st.cry);
    cry.disabled = same.checked;
    same.addEventListener('change', () => { cry.disabled = same.checked; if (same.checked) { st.cry = st.pic; cry.value = st.pic; } });
    box.append(el('div', { class: 'bar', style: 'margin-top:12px;align-items:flex-start;gap:24px' },
      el('div', null, el('div', { text: '포켓몬 그림:' }), pic, el('div', { style: 'margin-top:8px' }, sameL), el('div', { text: '포켓몬 울음소리:', style: 'margin-top:6px' }), cry),
      preview));
    if (!rom.hasIntro) box.append(el('div', { class: 'bad', text: '이 롬에서는 오박사 인트로 위치를 찾지 못했어요.' }));
    const ok = el('button', { class: 'apply', text: '적용', onclick: () => {
      rom.setIntro(st.pic, st.cry);
      alert('오박사 인트로: 그림 ' + rom.monName(st.pic) + ', 울음소리 ' + rom.monName(st.cry) + '\n[저장하기]를 눌러야 롬 파일에 기록돼요.');
      this.say('오박사 인트로 포켓몬을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
      for (const d of this.host.querySelectorAll('.dlg-bg')) d.remove();
    } });
    ok.disabled = !rom.hasIntro;
    box.append(el('div', { class: 'bar', style: 'margin-top:12px;justify-content:flex-end' }, ok));
    show();
    return box;
  }
});

// ===== 97-eventpanel.js
// ================================================================ [NPC · 이벤트] 탭 (EventPanel.cs · NewPartyForm.cs · SpotPickForm.cs 와 같음)
const LOOK_MOVE_IDS = [6, 7, 8, 9, 3, 2];
const LOOK_MOVE_NAMES = ['아래를 보고 서 있음', '위를 보고 서 있음', '왼쪽을 보고 서 있음', '오른쪽을 보고 서 있음', '제자리에서 두리번', '돌아다님'];
const EV_SAMPLES = [
  ['안녕! 오늘 날씨\n정말 좋구나!'],
  ['처음 보는 얼굴이네!\n\n나는 이 마을에\n오래 살았단다', '또 왔구나!\n잘 지내지?'],
  ['포켓몬을\n좋아하니?', '그렇구나!\n나도 정말 좋아해!', '그래…?\n아쉽네…'],
  ['여행에 도움이\n될 거야!\n받아 두렴', '잘 쓰고 있니?'],
  ['그 아이템을 주면\n좋은 걸 줄게!\n바꿀래?', '고마워!\n소중히 쓸게!', '그래? 아쉽네…'],
  ['이 포켓몬을\n키워 줄 수 있니?', '잘 키워 주렴!'],
  ['크와아앙!'],
  ['나랑 승부하자!', '졌다…!', '다음엔 안 질 거야!'],
  [], [],
  ['다른 곳으로\n데려다줄까?', '필요하면\n언제든 말해!'],
  ['눈이 마주쳤다!\n승부다!', '으윽 졌다…', '너 정말 강하구나!']];
// 영문판·일본판 롬에 넣을 예시 대사 (게임 글자로 들어가는 말이라 롬 언어를 따름)
const EV_SAMPLES_EN = [
  ['Hi! Nice weather\ntoday, huh?'],
  ["We haven't met\nbefore, have we?\n\nI've lived here\nfor a long time.", 'Back again?\nHow are you?'],
  ['Do you like\nPOKéMON?', 'Me too!\nI love them!', "Oh…\nThat's too bad…"],
  ['This should help\non your journey!\nTake it!', 'Is it useful?'],
  ["Give me that item\nand I'll give you\nsomething good!\nTrade?", "Thanks!\nI'll treasure it!", 'Oh? Too bad…'],
  ['Could you raise\nthis POKéMON\nfor me?', 'Take good care\nof it!'],
  ['Gyaoo!'],
  ["Let's battle!", 'I lost…!', "I won't lose\nnext time!"],
  [], [],
  ['Want me to take\nyou somewhere?', 'Just ask if you\nneed me!'],
  ["Our eyes met!\nLet's battle!", 'Ugh, I lost…', "You're really\nstrong!"]];
const EV_SAMPLES_JP = [
  ['こんにちは！\nきょうは　いい\nてんきだね！'],
  ['はじめて　みる\nかおだね！\n\nわたしは　この\nまちに　ながく\nすんでいるのよ', 'また　きたのね！\nげんき？'],
  ['ポケモンは\nすき？', 'そうなんだ！\nわたしも　だいすき！', 'そう…\nざんねん…'],
  ['たびに　やくだつ\nものだよ！\nうけとって！', 'つかってる？'],
  ['その　どうぐを\nくれたら\nいいものを　あげる！\nこうかんする？', 'ありがとう！\nたいせつに　するね！', 'そう？　ざんねん…'],
  ['この　ポケモンを\nそだてて\nくれない？', 'だいじに\nそだててね！'],
  ['ギャオーッ！'],
  ['しょうぶだ！', 'まけた…！', 'つぎは　まけないぞ！'],
  [], [],
  ['ほかの　ばしょへ\nつれて　いこうか？', 'ようが　あったら\nいつでも　いってね！'],
  ['めが　あったら\nしょうぶだ！', 'うう　まけた…', 'きみ　つよいね！']];
// 롬 언어에 맞는 예시 대사 묶음 · 이름 표시 ({주인공} / {PLAYER})
function romSamples(rom) { const k = rom && rom.cs.kind; return k === 'en' ? EV_SAMPLES_EN : k === 'jp' ? EV_SAMPLES_JP : EV_SAMPLES; }
function nameHint(rom) { return rom && !Object.values(rom.cs.TOKENS).includes('주인공') ? '{PLAYER} {RIVAL}' : '{주인공} {라이벌}'; }
const EV_SPRITE_FOR =[0x27, 0x2F, 0x28, 0x40, 0x2B, 0x10, 0x9E, 0x35, 0x39, 0x37, 0x3F, 0x25];
const EV_DESCS = [
  '말 걸면 대사를 해요.',
  '처음 말 걸 때와 그 다음부터 대사가 달라요.',
  '질문 뒤에 예/아니요가 나오고, 고른 것에 따라 다른 대사를 해요.',
  '말 걸면 아이템을 줘요 (가방이 꽉 차면 다음에 다시 줌). 한 번만이면 받은 뒤에는 다른 대사, 여러 번이면 말 걸 때마다 줘요.',
  "예를 고르고 '받을 아이템'을 가지고 있으면 1개 가져가고 '줄 아이템'을 줘요. 한 번만 또는 여러 번.",
  '말 걸면 포켓몬을 줘요 (손에 6마리면 PC 로 감). 기술 4개를 하나하나 정할 수 있어요 (PC 로 간 경우엔 기본 기술). 한 번만 또는 여러 번.',
  '말 걸면 울음소리 뒤에 야생 포켓몬 배틀 (잡을 수 있어요). 한 번만이면 끝나고 사라지고, 여러 번이면 말 걸 때마다 배틀해요. 모습은 포켓몬 모양을 고르면 좋아요.',
  '말 걸면 트레이너 배틀. 한 번만이면 이긴 뒤엔 다른 대사(또는 사라짐), 여러 번이면 말 걸 때마다 배틀. 눈이 마주치면 다가오는 트레이너는 맨 아래 종류예요.',
  "말 걸면 상점이 열려요. 파는 물건은 '프렌들리숍' 탭의 목록 중 하나예요 (목록을 고치면 같은 목록을 쓰는 상점도 같이 바뀜).",
  '포켓몬센터 간호순과 똑같이 포켓몬을 회복해 줘요 (대사도 같아요).',
  '예를 고르면 다른 구역의 원하는 자리로 순간이동해요. 도착 구역을 고르고 [지도에서 도착 위치 고르기…]로 그 지도에서 직접 클릭하세요.',
  '게임 기본 트레이너처럼, 시야 안에서 눈이 마주치면 다가와서 배틀해요. 이기면 다음부터는 배틀 후 대사 (또는 사라짐). 한 방향을 보고 서 있어야 해요.'];
const EV_SPRITES = (() => { const l = []; for (let i = 1; i <= 0x5F; i++) if (i !== 0x53) l.push(i); for (let i = 0x80; i < 0x80 + 0x23; i++) l.push(i); return l; })();

Object.assign(App.prototype, {
  // 탭 상태 (데스크톱처럼 다른 NPC 를 골라도 적던 내용이 남음)
  evState() {
    if (!this.evSt) {
      this.evSt = { kind: 0, t: ['', '', ''], item: 17, qty: 1, item2: 4, qty2: 1, species: 25, level: 5, moves: null, team: 30, mart: 0,
        dest: 0, wx: 0, wy: 0, repeat: false, vanish: false, sight: 3, sprite: 0x27, move: 0, loadedFlag: -1, loadedOwner: null, msg: '', bad: false };
      this.evSetKind(0);
    }
    return this.evSt;
  },
  evSetKind(k) {
    const st = this.evSt;
    st.kind = k;
    const s = romSamples(this.rom)[k];
    st.t = [s[0] || '', s[1] || '', s[2] || ''];
    if (k === EV.Wild) st.level = 30; else if (k === EV.Pokemon) st.level = 5;
    if (k === EV.EyeTrainer && st.move > 3) st.move = 0;
    st.sprite = EV_SPRITE_FOR[k]; st.moves = null; st.msg = '';
  },
  evMsg(text, bad) { const st = this.evState(); st.msg = text; st.bad = bad; },
  evMake() {
    const st = this.evState(), rom = this.rom;
    const e = Object.assign(newEvent(st.kind), { t1: st.t[0], t2: st.t[1], t3: st.t[2], item: st.item, qty: st.qty, item2: st.item2, qty2: st.qty2,
      species: st.species, level: st.level, mart: st.mart, warpX: st.wx, warpY: st.wy, sight: st.sight,
      vanish: st.vanish && evCanVanish(st.kind) && st.kind !== EV.Wild, repeat: st.repeat && evCanRepeat(st.kind) });
    if (e.kind === EV.Pokemon) e.moves = (st.moves || rom.defaultMoves(st.species, st.level)).slice();
    const t = rom.trainerList()[st.team]; if (t) { e.trainerClass = t.cls; e.trainerId = t.id; }
    const d = rom.allAreas[st.dest]; if (d) { e.warpGroup = d.group; e.warpMap = d.map; }
    return e;
  },

  pageEvent() {
    const rom = this.rom, a = this.area, o = this.owner, st = this.evState();
    const k = st.kind, rerender = () => this.setTab(T_EVENT);
    const kinds = el('div', { class: 'list', style: 'border:1px solid var(--line);border-radius:4px;max-height:none;width:250px;font-size:14px' });
    EV_NAMES.forEach((n, i) => kinds.append(el('div', { class: 'it' + (i === k ? ' on' : ''), text: n, onclick: () => { this.evSetKind(i); rerender(); } })));
    const left = el('div', null, el('b', { text: '이벤트 종류' }), kinds);
    const col = el('div', { style: 'flex:1;min-width:0' });

    // ---- 지도에서 고른 NPC
    const info = el('fieldset', null, el('legend', { text: '지도에서 고른 NPC' }));
    let evInfo = null;
    if (!a || !o || o.eventOff < 0) info.append(el('b', { text: '지도에서 NPC를 클릭하면 어떤 NPC 인지, 무슨 이벤트를 하는지 나와요' }));
    else {
      try { evInfo = rom.readNpcEvent(a, o); } catch (x) { evInfo = { summary: '읽지 못함 (' + x.message + ')', lines: [], ev: null }; }
      const idx = rom.eventIndex(a, o), mi = LOOK_MOVE_IDS.indexOf(o.move);
      info.append(el('b', { text: o.name + '  ·  ' + evInfo.summary }),
        el('div', { style: 'white-space:pre-line;margin:2px 0 6px', text: (o.isSign ? '표지판 ' + idx + '번 · 위치 (' + o.x + ', ' + o.y + ')'
          : 'NPC ' + idx + '번 · 모습 ' + Names.sprite(o.sprite) + ' · 위치 (' + o.x + ', ' + o.y + ') · ' + (mi >= 0 ? LOOK_MOVE_NAMES[mi] : '특별한 움직임'))
          + (evInfo.lines.length ? '\n· ' + evInfo.lines.join('\n· ') : '') }));
      const loadBtn = el('button', { class: 'play', text: '이 이벤트 불러와서 고치기', onclick: () => this.evLoad(evInfo, o) });
      loadBtn.disabled = !evInfo.ev || !o.isObject;
      info.append(el('div', { class: 'bar' }, loadBtn,
        el('button', { text: '지도에서 위치 옮기기', onclick: () => {
          this.evMsg('옮길 자리를 지도에서 클릭하세요 (Esc = 취소)'); rerender();
          this.startPick('지도에서 자리를 클릭하세요', (x, y) => {
            const idx = rom.eventIndex(a, o), note = rom.moveOwner(o, x, y);
            this.evMsg(note || '', !!(note && note.startsWith('⚠')));
            this.afterNpcChange(a, a.owners.includes(o) || a.extras.includes(o) ? o : rom.ownerAt(a, false, idx));
          });
        } }),
        el('button', { text: '이 NPC 지우기', style: 'color:var(--warn)', onclick: () => { if (confirm("'" + o.name + "' 을(를) 지울까요? (지운 뒤 Ctrl+Z 로 되돌릴 수 있어요)")) this.deleteSelected(); } })));
      if (o.isObject) {
        const allowed = rom.outdoorSprites(a);
        const ids = EV_SPRITES.includes(o.sprite) ? EV_SPRITES.slice() : [o.sprite, ...EV_SPRITES];
        ids.sort((x, y) => (allowed && allowed.includes(x) ? 0 : 1) - (allowed && allowed.includes(y) ? 0 : 1) || ids.indexOf(x) - ids.indexOf(y));
        const look = sel(ids.map(s => [s, (allowed && allowed.includes(s) ? '✓ ' : '') + Names.sprite(s)]), o.sprite);
        const lookMove = sel(LOOK_MOVE_NAMES.map((n, i) => [i, n]), mi >= 0 ? mi : 0);
        const pic = this.spriteCanvas(o.sprite, o.pal);
        look.addEventListener('change', () => pic.replaceWith(this.spriteCanvas(+look.value, o.pal, pic)));
        info.append(el('div', { class: 'bar' }, el('span', { text: '모습' }), pic, look, el('span', { text: '방향' }), lookMove,
          el('button', { text: '모습·방향 적용', onclick: () => {
            const note = rom.setLook(a, o, +look.value, LOOK_MOVE_IDS[+lookMove.value]);
            this.evMsg(note || '', note && note.startsWith('⚠'));
            this.afterNpcChange(a, o);
          } })));
        const text = rom.outdoorRegionText(a);
        if (text) {
          const wrong = allowed && !allowed.includes(o.sprite);
          info.append(el('div', { class: 'hint', style: wrong ? 'color:#d9480f' : '', text: (wrong ? "⚠ 이 NPC 의 모습 '" + Names.sprite(o.sprite) + "' 은(는) 이 지역 목록에 없어서 게임에선 다른 인물로 보여요 (지도의 ? 표시). ✓ 붙은 모습은 그대로 보여요.\n" : '✓ 붙은 모습은 이 지역에서 게임에 그대로 보여요.\n') + text }));
        }
      }
    }
    col.append(info, el('div', { class: 'hint', style: 'margin:4px 0 8px', text: EV_DESCS[k] }));

    // ---- 종류별 칸
    const itemOpts = this.itemOptions().slice(1).map(([v, t]) => [v, pad3(v) + ' ' + t]);
    const monOpts = this.monOptions(false);
    if (k === EV.Item || k === EV.Trade) {
      const r = el('div', { class: 'bar' }, el('span', { text: k === EV.Trade ? '받을 아이템' : '줄 아이템' }), sel(itemOpts, st.item, v => st.item = v));
      if (k === EV.Item) r.append(el('span', { text: '개수' }), num(st.qty, 1, 99, v => st.qty = v));
      col.append(r);
    }
    if (k === EV.Trade) col.append(el('div', { class: 'bar' }, el('span', { text: '줄 아이템' }), sel(itemOpts, st.item2, v => st.item2 = v), el('span', { text: '개수' }), num(st.qty2, 1, 99, v => st.qty2 = v)));
    if (k === EV.Pokemon || k === EV.Wild)
      col.append(el('div', { class: 'bar' }, el('span', { text: '포켓몬' }), sel(monOpts, st.species, v => { st.species = v; st.moves = null; rerender(); }),
        el('span', { text: '레벨' }), num(st.level, 1, 100, v => { st.level = v; st.moves = null; rerender(); })));
    if (k === EV.Pokemon) {
      if (!st.moves) st.moves = rom.defaultMoves(st.species, st.level);
      const mo = this.moveOptions().map(([v, t]) => [v, v ? pad3(v) + ' ' + rom.moveName(v) : t]);
      col.append(el('div', { class: 'bar' }, el('span', { text: '기술' }), ...[0, 1, 2, 3].map(i => { const s = sel(mo, st.moves[i], v => st.moves[i] = v); s.style.width = '140px'; return s; }),
        el('button', { text: '기본 기술로', onclick: () => { st.moves = null; rerender(); } })));
    }
    if (k === EV.Trainer || k === EV.EyeTrainer) {
      const teams = rom.trainerList();
      if (st.team >= teams.length) st.team = Math.max(0, teams.length - 1);
      const r = el('div', { class: 'bar' }, el('span', { text: '트레이너 팀' }), (() => { const s = sel(teams.map((t, i) => [i, t.label]), st.team, v => st.team = v); s.style.width = '440px'; return s; })(),
        el('button', { text: '새 팀 만들기…', onclick: () => this.newPartyDialog((cls, id) => {
          const i = rom.trainerList().findIndex(t => t.cls === cls && t.id === id);
          if (i >= 0) st.team = i;
          this.evMsg('새 트레이너 팀을 만들었어요 (' + rom.trainerLabel(cls, id) + ')'); rerender();
        }) }));
      if (k === EV.EyeTrainer) r.append(el('span', { text: '시야' }), num(st.sight, 1, 5, v => st.sight = v), el('span', { text: '칸' }));
      col.append(r);
    }
    if (k === EV.Shop) {
      const spots = this.martSpots();
      const ms = sel(rom.marts.map(m => [m.id, m.id + '번 [' + (spots.has(m.id) ? spots.get(m.id)[0][0].regionName : '쓰는 곳 없음') + '] ' + m.items.slice(0, 5).map(i => rom.itemName(i)).join(', ') + (m.items.length > 5 ? ' …' : '')]), st.mart, v => st.mart = v);
      ms.style.width = '440px';
      col.append(el('div', { class: 'bar' }, el('span', { text: '파는 물건' }), ms));
    }
    if (k === EV.Warp) {
      const areas = rom.allAreas, d = areas[st.dest];
      const note = el('span', { class: 'hint', text: d ? '(가로 0~' + (d.width * 2 - 1) + ', 세로 0~' + (d.height * 2 - 1) + ')' : '' });
      const ds = sel(areas.map((x, i) => [i, x.regionName + ' · ' + x.name]), st.dest, v => { st.dest = v; rerender(); });
      ds.style.width = '300px';
      const wx = num(st.wx, 0, 255, v => st.wx = v), wy = num(st.wy, 0, 255, v => st.wy = v);
      col.append(el('div', { class: 'bar' }, el('span', { text: '도착 구역' }), ds,
        el('button', { text: '지도에서 도착 위치 고르기…', style: 'background:#c8e6ff', onclick: () => this.spotPickDialog(areas[st.dest], st.wx, st.wy, (x, y) => { st.wx = x; st.wy = y; rerender(); }) }),
        el('span', { text: 'x' }), wx, el('span', { text: 'y' }), wy, note));
    }
    // 대사 칸
    const labels = evTextLabels(k, st.repeat && evCanRepeat(k));
    labels.forEach((l, i) => {
      const ta = el('textarea', { spellcheck: 'false', style: 'width:420px;max-width:100%;height:64px;font-size:15px' });
      ta.value = st.t[i];
      ta.addEventListener('input', () => st.t[i] = ta.value);
      col.append(el('div', { style: 'margin-top:6px' }, el('div', { text: l }), ta));
    });
    if (labels.length) col.append(el('div', { class: 'hint', text: '엔터 = 다음 줄, 빈 줄 = 다음 말풍선, 한 줄 18자까지. ' + nameHint(rom) + ' 사용 가능' }));
    if (evCanRepeat(k)) { const [c, l] = check('여러 번 할 수 있게 (체크 안 하면 한 번만)', st.repeat); c.addEventListener('change', () => { st.repeat = c.checked; rerender(); }); col.append(el('div', null, l)); }
    if (evCanVanish(k) && k !== EV.Wild) { const [c, l] = check('이벤트가 끝나면 NPC가 사라짐 (다시 와도 없음)', st.vanish); c.disabled = st.repeat; c.addEventListener('change', () => st.vanish = c.checked); col.append(el('div', null, l)); }

    // ---- 새 NPC 로 놓기
    const spSel = sel(EV_SPRITES.map(s => [s, Names.sprite(s)]), st.sprite, v => { st.sprite = v; spPic.replaceWith(spPic = this.spriteCanvas(v, -1)); });
    let spPic = this.spriteCanvas(st.sprite, -1);
    const mvSel = sel(LOOK_MOVE_NAMES.map((n, i) => [i, n]), st.move, v => st.move = v);
    const addBtn = el('button', { class: 'apply', text: '지도에서 자리 골라 새 NPC 추가', onclick: () => this.evAdd() });
    addBtn.disabled = !a;
    col.append(el('fieldset', { style: 'margin-top:10px' }, el('legend', { text: '새 NPC 로 놓기' }),
      el('div', { class: 'bar' }, el('span', { text: '모습' }), spPic, spSel, el('span', { text: '방향' }), mvSel, addBtn)));
    // ---- 고른 NPC 바꾸기
    const setBtn = el('button', { text: '고른 NPC의 이벤트를 이걸로 바꾸기', style: 'background:#c8e6ff', onclick: () => this.evSetSelected() });
    setBtn.disabled = !(o && o.isObject);
    col.append(el('fieldset', null, el('legend', { text: '지도에서 고른 NPC 바꾸기 (모습·위치는 그대로, 말 걸었을 때 이벤트만)' }),
      el('div', { class: 'bar' }, el('b', { text: o && o.isObject ? o.name : '지도에서 NPC를 클릭하세요' }), setBtn)));
    if (st.msg) col.append(el('div', { class: st.bad ? 'bad' : 'ok', style: 'white-space:pre-line', text: st.msg }));
    return el('div', { class: 'bar', style: 'align-items:flex-start;gap:14px;flex-wrap:nowrap' }, left, col);
  },

  spriteCanvas(sprite, pal) {
    const c = el('canvas', { width: 16, height: 16, style: 'width:32px;height:32px;background:#eee;border-radius:4px;image-rendering:pixelated' });
    const sp = this.spriteImg(sprite, pal);
    if (sp) c.getContext('2d').drawImage(sp, 0, 0);
    return c;
  },

  afterNpcChange(a, o) {
    this.wtAfterNpc();
    this.buildTree(); this.drawMap();
    if (o && !a.owners.includes(o) && !a.extras.includes(o)) o = null;
    this.owner = o; this.markTree();
    this.setTab(T_EVENT);
    this.say('NPC를 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
  },

  // 고른 NPC 의 지금 이벤트를 칸들에 불러옴
  evLoad(info, owner) {
    const st = this.evState(), e = info.ev, rom = this.rom;
    if (!e) return;
    this.evSetKind(e.kind);
    const ts = [e.t1, e.t2, e.t3];
    for (let i = 0; i < 3; i++) if (ts[i]) st.t[i] = ts[i];
    if (e.item > 0) st.item = e.item; if (e.item2 > 0) st.item2 = e.item2;
    st.qty = Math.max(1, Math.min(99, e.qty)); st.qty2 = Math.max(1, Math.min(99, e.qty2));
    if (e.species > 0) st.species = e.species;
    st.level = Math.max(1, Math.min(100, e.level));
    st.moves = e.moves ? e.moves.slice() : null;
    const ti = rom.trainerList().findIndex(t => t.cls === e.trainerClass && t.id === e.trainerId); if (ti >= 0) st.team = ti;
    if (e.kind === EV.Shop) st.mart = e.mart;
    const di = rom.allAreas.findIndex(x => x.group === e.warpGroup && x.map === e.warpMap); if (di >= 0) st.dest = di;
    st.wx = e.warpX; st.wy = e.warpY;
    st.repeat = e.repeat; st.vanish = e.vanish; st.sight = Math.max(1, Math.min(5, e.sight));
    st.loadedFlag = info.flag; st.loadedOwner = owner;
    this.evMsg('불러왔어요. 고친 뒤 [고른 NPC의 이벤트를 이걸로 바꾸기]를 누르세요');
    this.setTab(T_EVENT);
  },

  evAdd() {
    const rom = this.rom, a = this.area, st = this.evState();
    if (!a) return;
    const e = this.evMake(), c = rom.checkEvent(e);
    if (c) { this.evMsg(c, true); this.setTab(T_EVENT); return; }
    if (e.kind === EV.EyeTrainer && st.move > 3) { this.evMsg('눈 마주침 트레이너는 한 방향을 보고 서 있어야 해요 (방향을 위·아래·왼쪽·오른쪽 중 하나로)', true); this.setTab(T_EVENT); return; }
    const sp = st.sprite, mv = LOOK_MOVE_IDS[st.move];
    this.evMsg('지도에서 놓을 자리를 클릭하세요 (Esc = 취소)'); this.setTab(T_EVENT);
    this.startPick('지도에서 새 NPC 를 놓을 자리를 클릭하세요', (x, y) => {
      const r = rom.addEventNpc(a, e, x, y, sp, mv);
      if (typeof r === 'string') { this.evMsg(r, true); this.setTab(T_EVENT); return; }
      let msg = "'" + EV_NAMES[e.kind] + "' NPC 를 놓았어요. [저장하기]를 눌러야 롬에 기록돼요";
      if (r && r.note) msg += '\n' + r.note;
      this.evMsg(msg, !!(r && r.note && r.note.startsWith('⚠')));
      const added = a.owners.concat(a.extras).find(o => o.x === x && o.y === y && o.isObject);
      this.afterNpcChange(a, added);
    });
  },

  evSetSelected() {
    const rom = this.rom, a = this.area, o = this.owner, st = this.evState();
    if (!a || !o) return;
    const e = this.evMake();
    const mi = LOOK_MOVE_IDS.indexOf(o.move);
    if (e.kind === EV.EyeTrainer && (mi > 3 || mi < 0)) { this.evMsg('눈 마주침 트레이너는 한 방향을 보고 서 있어야 해요. 위 [모습·방향 적용]으로 방향부터 바꿔 주세요', true); this.setTab(T_EVENT); return; }
    if (!confirm("'" + o.name + "' 의 말 걸었을 때 이벤트를 '" + EV_NAMES[e.kind] + "'(으)로 바꿀까요?\n원래 하던 이벤트(대사·스토리 진행 등)는 더 이상 안 해요.")) return;
    const idx = rom.eventIndex(a, o);
    const r = rom.setNpcEvent(a, o, e, o === st.loadedOwner ? st.loadedFlag : -1);
    st.loadedOwner = null; st.loadedFlag = -1;
    if (r) { this.evMsg(r, true); this.setTab(T_EVENT); return; }
    this.evMsg('이벤트를 바꿨어요. [저장하기]를 눌러야 롬에 기록돼요');
    this.afterNpcChange(a, rom.ownerAt(a, false, idx));
  },

  // ---------------------------------------------------------------- 새 트레이너 팀 만들기 창 (NewPartyForm)
  newPartyDialog(onDone, start, startClass) {
    const rom = this.rom;
    if (!rom.trainerClasses.length) return;
    let ci = rom.trainerClasses.findIndex(c => c.cls === startClass);
    if (ci < 0) ci = Math.min(rom.trainerClasses.length - 1, 24);
    const ed = { cls: ci, name: start ? start.name : '', moves: start ? !!(start.type & 1) : false, items: start ? !!(start.type & 2) : false,
      mons: start ? start.mons.map(m => ({ species: m.species, level: m.level, item: m.item, moves: m.moves.slice() })) : [{ species: 19, level: 10, item: 0, moves: [0, 0, 0, 0] }] };
    const monOpts = this.monOptions(false), itemOpts = this.itemOptions(), moveOpts = this.moveOptions();
    const box = el('div'), rows = el('div'), err = el('div', { class: 'bad' });
    const clsSel = sel(rom.trainerClasses.map((c, i) => [i, c.name + '  (' + [...new Set(c.parties.map(p => p.name))].slice(0, 3).join(', ') + ')']), ed.cls, v => ed.cls = v);
    clsSel.style.width = '420px';
    const nameIn = el('input', { class: 'txt', value: ed.name }); nameIn.addEventListener('input', () => ed.name = nameIn.value);
    const [mvC, mvL] = check('포켓몬마다 기술 직접 정하기', ed.moves), [itC, itL] = check('포켓몬에게 도구 지니게 하기', ed.items);
    const draw = () => {
      rows.replaceChildren();
      ed.mons.forEach((m, i) => {
        if (!m.moves.some(x => x)) m.moves = rom.defaultMoves(m.species, m.level);
        const r = el('div', { class: 'bar mon' }, sel(monOpts, m.species, v => m.species = v), el('span', { text: 'Lv' }), num(m.level, 1, 100, v => m.level = v));
        if (ed.items) r.append(el('span', { text: '도구' }), sel(itemOpts, m.item, v => m.item = v));
        if (ed.moves) { for (let k = 0; k < 4; k++) { const s = sel(moveOpts, m.moves[k], v => m.moves[k] = v); s.style.width = '112px'; r.append(s); } r.append(el('button', { text: '기본 기술', onclick: () => { m.moves = rom.defaultMoves(m.species, m.level); draw(); } })); }
        r.append(el('button', { text: '빼기', onclick: () => { if (ed.mons.length > 1) { ed.mons.splice(i, 1); draw(); } } }));
        rows.append(r);
      });
      add.disabled = ed.mons.length >= 6;
    };
    const add = el('button', { text: '포켓몬 추가', onclick: () => { if (ed.mons.length < 6) { ed.mons.push({ species: 19, level: 10, item: 0, moves: [0, 0, 0, 0] }); draw(); } } });
    mvC.addEventListener('change', () => { ed.moves = mvC.checked; draw(); });
    itC.addEventListener('change', () => { ed.items = itC.checked; draw(); });
    let close;
    const ok = el('button', { class: 'apply', text: '이 팀으로 정하기', onclick: () => {
      const n = ed.name.trim();
      if (!n) { err.textContent = '트레이너 이름을 써주세요'; return; }
      try { if (rom.encodeName(n).length > 10) { err.textContent = '이름이 너무 길어요 (한글 5글자까지)'; return; } } catch (x) { err.textContent = x.message; return; }
      if (ed.moves && ed.mons.some(m => !m.moves.some(x => x))) { err.textContent = '기술이 하나도 없는 포켓몬이 있어요'; return; }
      const cls = rom.trainerClasses[ed.cls].cls;
      const party = { name: n, type: (ed.moves ? 1 : 0) | (ed.items ? 2 : 0), mons: ed.mons.map(m => ({ level: m.level, species: m.species, item: m.item, moves: m.moves.slice() })) };
      let id;
      try { id = rom.addTrainerParty(cls, party); } catch (x) { err.textContent = x.message; return; }
      close();
      onDone(cls, id);
    } });
    box.append(el('div', { class: 'bar' }, el('span', { text: '직업' }), clsSel, el('span', { text: '이름' }), nameIn),
      el('div', { class: 'hint', text: '직업에 따라 배틀 때 나오는 트레이너 그림·이름 앞 글자·음악이 정해져요' }),
      el('div', { class: 'bar' }, mvL, itL), rows, add, el('div', { class: 'bar', style: 'margin-top:12px' }, ok, el('button', { text: '취소', onclick: () => close() }), err));
    draw();
    close = this.dialog('새 트레이너 팀 만들기', () => box);
  },

  // ---------------------------------------------------------------- 다른 구역 지도에서 칸 고르기 (SpotPickForm)
  spotPickDialog(area, x0, y0, onPick) {
    const rom = this.rom, Z = 2, C = 16 * Z;
    if (!area) return;
    const img = rom.gfx.renderMap(area);
    let selXY = [Math.min(x0, area.width * 2 - 1), Math.min(y0, area.height * 2 - 1)], hover = [-1, -1];
    const cv = el('canvas', { class: 'map' });
    cv.width = area.width * 32 * Z; cv.height = area.height * 32 * Z;
    const base = document.createElement('canvas');
    if (img) { base.width = img.width; base.height = img.height; base.getContext('2d').putImageData(img, 0, 0); }
    const info = el('b');
    const showInfo = () => {
      const kind = collKind(rom.collisionAt(area, selXY[0], selXY[1])), bad = kind === '벽' || kind === '물';
      info.textContent = '고른 칸: x ' + selXY[0] + ', y ' + selXY[1] + (bad ? '  ⚠ ' + kind + '이라 서 있을 수 없는 칸이에요' : '');
      info.style.color = bad ? 'var(--warn)' : 'var(--ok)';
    };
    const draw = () => {
      const g = cv.getContext('2d'); g.imageSmoothingEnabled = false;
      g.fillStyle = '#282828'; g.fillRect(0, 0, cv.width, cv.height);
      if (img) g.drawImage(base, 0, 0, cv.width, cv.height);
      g.strokeStyle = 'rgba(0,0,0,.2)'; g.lineWidth = 1;
      for (let x = 0; x <= area.width * 2; x++) { g.beginPath(); g.moveTo(x * C + .5, 0); g.lineTo(x * C + .5, cv.height); g.stroke(); }
      for (let y = 0; y <= area.height * 2; y++) { g.beginPath(); g.moveTo(0, y * C + .5); g.lineTo(cv.width, y * C + .5); g.stroke(); }
      g.fillStyle = 'rgba(180,60,255,.43)'; for (const [wx, wy] of rom.warps(area)) g.fillRect(wx * C, wy * C, C, C);
      g.strokeStyle = 'red'; g.lineWidth = 2; for (const o of area.owners.concat(area.extras)) if (o.x >= 0 && !o.isSign && o.eventOff >= 0) g.strokeRect(o.x * C + 2, o.y * C + 2, C - 4, C - 4);
      if (hover[0] >= 0) { g.strokeStyle = '#fff'; g.strokeRect(hover[0] * C, hover[1] * C, C, C); }
      g.fillStyle = 'rgba(255,220,0,.47)'; g.fillRect(selXY[0] * C, selXY[1] * C, C, C);
      g.strokeStyle = 'yellow'; g.lineWidth = 3; g.strokeRect(selXY[0] * C, selXY[1] * C, C, C);
    };
    const cell = e => { const r = cv.getBoundingClientRect(), k = r.width / cv.width; const x = Math.floor((e.clientX - r.left) / k / C), y = Math.floor((e.clientY - r.top) / k / C); return x >= 0 && y >= 0 && x < area.width * 2 && y < area.height * 2 ? [x, y] : [-1, -1]; };
    let close;
    cv.addEventListener('mousemove', e => { const c = cell(e); if (c[0] !== hover[0] || c[1] !== hover[1]) { hover = c; draw(); } });
    cv.addEventListener('click', e => { const c = cell(e); if (c[0] >= 0) { selXY = c; showInfo(); draw(); } });
    cv.addEventListener('dblclick', () => { close(); onPick(selXY[0], selXY[1]); });
    const wrap = el('div', { class: 'mapwrap', style: 'max-height:60vh' }, cv);
    close = this.dialog('도착 위치 고르기 — ' + area.regionName + ' · ' + area.name, () => el('div', null,
      el('div', { class: 'hint', text: '주인공이 나타날 칸을 클릭하세요. 빨강 = NPC, 보라 = 문·계단(워프)' }), wrap,
      el('div', { class: 'bar', style: 'margin-top:8px' }, el('button', { class: 'apply', text: '여기로 정하기', onclick: () => { close(); onPick(selXY[0], selXY[1]); } }),
        el('button', { text: '취소', onclick: () => close() }), info)));
    draw(); showInfo();
    setTimeout(() => { wrap.scrollLeft = selXY[0] * C - wrap.clientWidth / 2; wrap.scrollTop = selXY[1] * C - wrap.clientHeight / 2; }, 0);
  }
});

// ===== 98-warppanel.js
// ================================================================ [워프 · 트리거] 탭 (WarpTriggerPanel.cs · WarpPreviewForm 과 같음)
Object.assign(App.prototype, {
  // 이 구역의 워프·트리거 편집 상태 (같은 구역이면 저장 안 한 편집을 그대로 둠)
  wtDisplay(a, force) {
    const rom = this.rom;
    if (!a) { this.wt = null; return null; }
    const old = this.wt;
    if (!force && old && old.area === a) {
      if (old.warpsDirty || old.coordsDirty) { this.wtRefreshObjects(); return old; }
      if (old.loaded) return old;
    }
    const wt = { area: a, warps: rom.getAreaWarps(a), coords: rom.getAreaCoords(a), objects: rom.getAreaObjects(a), warpsDirty: false, coordsDirty: false,
      sub: old ? old.sub : 'trig', selC: 0, selW: 0, overlay: old ? old.overlay : true, status: '', bad: false, loaded: true };
    // 예전 버전에서 장면 0 으로 만든 트리거 → 항상($FF), NPC 를 옮겨서 길이 안 맞는 트리거 → 저장하면 다시 만들어지게
    const locked = rom.sceneLockedTriggers(a, wt.coords);
    for (const i of locked) wt.coords[i].sceneId = 0xFF;
    const stale = rom.staleApproachTriggers(a, wt.coords);
    for (const i of stale) rom.markForRebuild(wt.coords[i]);
    if (locked.length || stale.length) wt.coordsDirty = true;
    const warn = [];
    if (stale.length) warn.push('NPC 자리가 바뀌어서 ' + stale.map(i => 'T' + (i + 1)).join(', ') + ' 의 걸어오는 길이 안 맞아요');
    if (locked.length) warn.push(locked.map(i => 'T' + (i + 1)).join(', ') + ' 은(는) 스토리가 진행되면(예: 포켓몬을 받은 뒤) 안 켜지게 돼 있었어요 → 항상 켜지게 바꿨어요');
    if (warn.length) { wt.status = '⚠ ' + warn.join(' / ') + ' · [💾 트리거 저장]을 누르면 고쳐져요'; wt.bad = true; }
    this.wt = wt;
    return wt;
  },
  // NPC 를 추가·삭제·옮긴 뒤: 트리거 편집은 그대로 두고 NPC 목록만 다시 읽음
  wtRefreshObjects() {
    const wt = this.wt;
    if (!wt) return;
    wt.objects = this.rom.getAreaObjects(wt.area);
    for (const c of wt.coords) if (c.targetObj >= 0 && c.targetObj < wt.objects.length) c.targetName = wt.objects[c.targetObj].name;
  },
  // NPC 가 바뀐 뒤: 저장 안 한 편집이 있으면 NPC 목록만, 없으면 다시 읽게
  wtAfterNpc() {
    const wt = this.wt;
    if (!wt) return;
    if (wt.warpsDirty || wt.coordsDirty) this.wtRefreshObjects(); else wt.loaded = false;
  },
  wtStatus(s, bad) { if (this.wt) { this.wt.status = s; this.wt.bad = !!bad; } },
  // 이 NPC 가 다가오는 트리거 번호 (없으면 -1)
  triggerFor(o) {
    const wt = this.area ? this.wtDisplay(this.area) : null;
    if (!wt || !o || o.eventOff < 0) return -1;
    const obj = wt.objects.find(x => x.off === o.eventOff);
    if (!obj) return -1;
    return wt.coords.findIndex(c => c.targetObj === obj.index && tkApproaches(c.kind === TK.Original ? c.origKind : c.kind));
  },

  // ---------------------------------------------------------------- 지도 위 표시 (drawMap 이 부름)
  drawOverlay(g, T) {
    const wt = this.area ? this.wtDisplay(this.area) : null;
    if (!wt || !wt.overlay) return;
    const onTab = this.tab === T_WARP, s = this.scale;
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = 'bold ' + (7 * s) + 'px sans-serif';
    const mark = (x, y, fill, stroke, label, sel) => {
      g.fillStyle = fill; g.fillRect(x * T, y * T, T, T);
      g.strokeStyle = sel ? '#ff2' : stroke; g.lineWidth = sel ? 3 : 1.5; g.strokeRect(x * T + 1, y * T + 1, T - 2, T - 2);
      g.fillStyle = '#fff'; g.strokeStyle = '#000'; g.lineWidth = 2.5; g.strokeText(label, x * T + T / 2, y * T + T / 2); g.fillText(label, x * T + T / 2, y * T + T / 2);
    };
    wt.warps.forEach((w, i) => mark(w.x, w.y, 'rgba(150,60,255,.45)', '#7b2cff', 'W' + (i + 1), onTab && wt.sub === 'warp' && wt.selW === i));
    wt.coords.forEach((c, i) => mark(c.x, c.y, 'rgba(255,140,0,.45)', '#e8590c', 'T' + (i + 1), onTab && wt.sub === 'trig' && wt.selC === i));
    if (!onTab) return;
    // NPC 번호표 (다가올 NPC 고를 때 쓰는 #번호)
    g.font = 'bold ' + (6 * s) + 'px sans-serif';
    for (const o of wt.objects) {
      if (!o.canApproach) continue;
      const lx = o.x * T + 2 * s, ly = o.y * T - 1 * s, txt = '#' + (o.index + 1);
      g.fillStyle = 'rgba(30,60,160,.9)'; const w = g.measureText(txt).width + 4;
      g.fillRect(lx - 2, ly - 4 * s, w, 8 * s);
      g.fillStyle = '#fff'; g.textAlign = 'left'; g.fillText(txt, lx, ly);
    }
    // 고른 트리거로 다가오는 NPC → 빨간 화살표
    const c = wt.sub === 'trig' ? wt.coords[wt.selC] : null;
    if (c) {
      const k = c.kind === TK.Original ? c.origKind : c.kind;
      const o = tkApproaches(k) && c.targetObj >= 0 ? wt.objects[c.targetObj] : null;
      if (o) {
        const x1 = o.x * T + T / 2, y1 = o.y * T + T / 2, x2 = c.x * T + T / 2, y2 = c.y * T + T / 2;
        g.strokeStyle = '#e03131'; g.lineWidth = 3; g.setLineDash([6, 4]);
        g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); g.setLineDash([]);
        const ang = Math.atan2(y2 - y1, x2 - x1), h = 10;
        g.fillStyle = '#e03131'; g.beginPath(); g.moveTo(x2, y2);
        g.lineTo(x2 - h * Math.cos(ang - 0.4), y2 - h * Math.sin(ang - 0.4)); g.lineTo(x2 - h * Math.cos(ang + 0.4), y2 - h * Math.sin(ang + 0.4)); g.fill();
      }
    }
  },
  // 지도 칸의 워프·트리거 → { warp: i } / { coord: i } / null
  wtHit(x, y) {
    const wt = this.area ? this.wtDisplay(this.area) : null;
    if (!wt || !wt.overlay) return null;
    const ci = wt.coords.findIndex(c => c.x === x && c.y === y);
    if (ci >= 0) return { coord: ci };
    const wi = wt.warps.findIndex(w => w.x === x && w.y === y);
    return wi >= 0 ? { warp: wi } : null;
  },
  wtSelect(hit) {
    const wt = this.wt;
    if (hit.coord != null) { wt.sub = 'trig'; wt.selC = hit.coord; } else { wt.sub = 'warp'; wt.selW = hit.warp; }
    this.setTab(T_WARP); this.drawMap();
  },

  // ---------------------------------------------------------------- 탭 화면
  pageWarp() {
    const rom = this.rom, a = this.area;
    if (!a) return el('div', { class: 'hint', text: '왼쪽에서 구역을 고르세요.' });
    const wt = this.wtDisplay(a);
    const rerender = () => { this.setTab(T_WARP); this.drawMap(); };
    const [ov, ovL] = check('🌀 지도에 워프(W)·트리거(T)·NPC 번호(#) 표시', wt.overlay);
    ov.addEventListener('change', () => { wt.overlay = ov.checked; this.drawMap(); });
    ovL.style.fontWeight = 'bold'; ovL.style.color = '#3b3b98';
    const top = el('div', { class: 'bar' }, ovL, wt.status ? el('span', { style: 'font-weight:bold;color:' + (wt.bad ? '#d9480f' : 'var(--ok)'), text: wt.status }) : null);
    const subTabs = el('div', { class: 'tabs', style: 'margin-bottom:6px' },
      el('button', { class: wt.sub === 'trig' ? 'on' : '', text: '⚡ 타일 밟기 트리거', onclick: () => { wt.sub = 'trig'; rerender(); } }),
      el('button', { class: wt.sub === 'warp' ? 'on' : '', text: '🌀 워프 (문 · 계단 · 동굴 입구)', onclick: () => { wt.sub = 'warp'; rerender(); } }));
    const body = wt.sub === 'trig' ? this.wtTriggerPage(wt, rerender) : this.wtWarpPage(wt, rerender);
    return el('div', null, top, subTabs, body);
  },

  wtSplit(title, items, sel, onSel, buttons, detailTitle, detail) {
    const list = el('div', { class: 'list', style: 'border:1px solid var(--line);border-radius:4px;max-height:300px;min-height:120px' });
    items.forEach((t, i) => list.append(el('div', { class: 'it' + (i === sel ? ' on' : ''), text: t, title: t, onclick: () => onSel(i) })));
    return el('div', { style: 'display:grid;grid-template-columns:minmax(0,4fr) minmax(0,6fr);gap:8px' },
      el('div', null, el('div', { style: 'font-weight:bold;color:#1c3d9a', text: title }), list, el('div', { class: 'bar', style: 'margin-top:4px' }, ...buttons)),
      el('fieldset', { style: 'margin:0;min-width:0' }, el('legend', { text: detailTitle }), detail));
  },
  wtRow(label, ...ctl) { return el('div', { class: 'bar' }, el('span', { style: 'width:118px;text-align:right;color:#444', text: label }), ...ctl); },

  // ---------------------------------------------------------------- 트리거
  wtTriggerPage(wt, rerender) {
    const rom = this.rom, a = wt.area;
    if (wt.selC >= wt.coords.length) wt.selC = wt.coords.length - 1;
    const c = wt.coords[wt.selC];
    const changed = (behaviour) => {
      if (behaviour && c.kind !== TK.Original) c.dirty = true;
      wt.coordsDirty = true; this.wtStatus('트리거를 고쳤어요 · [💾 트리거 저장]을 눌러야 기록돼요');
    };
    const detail = el('div');
    if (!c) detail.append(el('div', { class: 'hint', text: wt.coords.length ? '' : '이 구역엔 트리거가 없어요. [➕ 지도에 트리거 놓기]를 누르고 지도에서 칸을 클릭하세요.' }));
    else {
      const orig = c.kind === TK.Original, show = orig ? c.origKind : c.kind;
      if (orig && c.textRef) c.text = c.textRef.current;
      detail.append(this.wtRow('밟는 칸 X / Y:', num(c.x, 0, 255, v => { c.x = v; changed(false); rerender(); }), num(c.y, 0, 255, v => { c.y = v; changed(false); rerender(); }),
        el('button', { text: '📍 지도에서 옮기기', style: 'background:#fff0d2', onclick: () => this.startPick('지도에서 칸을 클릭하세요', (x, y) => { c.x = x; c.y = y; changed(false); rerender(); }) })));
      const kinds = TK_MENU.filter(k => k !== TK.Original || c.kind === TK.Original);
      detail.append(this.wtRow('밟으면:', sel(kinds.map(k => [k, TK_NAMES[k]]), c.kind, v => {
        // 배틀·도구·포켓몬을 새로 고르면 기본은 한 번만
        if (v !== c.kind && (v === TK.Battle || v === TK.GiveItem || v === TK.GivePokemon) && !c.once) c.once = true;
        c.kind = v; changed(true); rerender();
      })));
      if (tkApproaches(c.kind) || (orig && c.targetObj >= 0)) {
        const npcs = [[-1, '(없음)']].concat(wt.objects.filter(o => o.canApproach).map(o => [o.index, '#' + (o.index + 1) + ' ' + o.name + '  (' + o.x + ',' + o.y + ')']));
        const ns = sel(npcs, c.targetObj, v => { c.targetObj = v; const o = wt.objects[v]; c.targetName = o ? o.name : ''; changed(true); rerender(); });
        ns.disabled = orig; ns.style.width = '300px';
        detail.append(this.wtRow('다가올 NPC:', ns, el('span', { class: 'hint', text: '지도의 #번호' })));
      }
      const ta = el('textarea', { spellcheck: 'false', style: 'width:300px;max-width:100%;height:54px' });
      ta.value = c.text || '';
      ta.readOnly = orig && !c.textRef;
      const terr = el('div', { class: 'bad', style: 'margin-left:124px;font-size:12px' });
      ta.addEventListener('input', () => {
        const v = ta.value.replace(/\r/g, '');
        if (orig && c.textRef) {
          // 롬에 원래 있던 대사: 스크립트는 그대로 두고 그 대사만 ([대사] 탭과 같은 대사)
          const t = c.textRef;
          t.edited = v === t.original ? null : v; c.text = v;
          rom.validate(t);
          const long = v.split('\n').find(l => l.replace(/\{[^}]*\}/g, '가가가가').length > 18);
          terr.textContent = t.error || (long != null ? '한 줄이 18자를 넘으면 게임에서 잘려요: ' + long : '');
          this.wtStatus(t.modified ? '대사를 고쳤어요 · [대사] 탭에도 반영 · [저장하기]로 기록돼요' : '');
          this.refreshTreeLabel(this.owner);
        } else { c.text = v; changed(true); }
      });
      detail.append(this.wtRow('대사 (한 줄 18자):', ta), terr);
      const dis = x => { if (orig) x.disabled = true; return x; };
      if (show === TK.Battle) {
        const teams = rom.trainerList();
        const ts = dis(sel([[-1, '(트레이너를 고르세요)']].concat(teams.map((t, i) => [i, t.label])), teams.findIndex(t => t.cls === c.trainerClass && t.id === c.trainerId), v => { const t = teams[v]; if (t) { c.trainerClass = t.cls; c.trainerId = t.id; } changed(true); }));
        ts.style.width = '300px';
        detail.append(this.wtRow('배틀할 트레이너:', ts, dis(el('button', { text: '➕ 새 팀 만들기...', style: 'background:#e6f5e6', onclick: () => this.newPartyDialog((cls, id) => {
          c.trainerClass = cls; c.trainerId = id; changed(true); this.wtStatus('새 트레이너 팀을 만들었어요: ' + rom.trainerLabel(cls, id) + ' · [💾 트리거 저장]'); rerender();
        }) }))));
        const wta = dis(el('textarea', { style: 'width:300px;max-width:100%;height:40px' })); wta.value = c.winText || '';
        wta.addEventListener('input', () => { c.winText = wta.value; changed(true); });
        detail.append(this.wtRow('상대가 진 대사:', wta, el('span', { class: 'hint', text: '배틀에서 이기면' })));
      }
      if (show === TK.GiveItem)
        detail.append(this.wtRow('줄 도구 / 개수:', dis(sel(this.itemOptions().slice(1).map(([v, t]) => [v, pad3(v) + ' ' + t]), c.item, v => { c.item = v; changed(true); })), dis(num(c.qty, 1, 99, v => { c.qty = v; changed(true); }))));
      if (show === TK.GivePokemon)
        detail.append(this.wtRow('줄 포켓몬 / 레벨:', dis(sel(this.monOptions(false), c.species, v => { c.species = v; changed(true); })), dis(num(c.level, 1, 100, v => { c.level = v; changed(true); }))));
      if (c.kind !== TK.Push) {
        const [oc, ol] = check('한 번만 (이벤트가 끝나면 다시 밟아도 안 일어남)', c.once);
        oc.disabled = orig; oc.addEventListener('change', () => { c.once = oc.checked; changed(true); });
        detail.append(el('div', { style: 'margin-left:124px' }, ol));
      }
      if (c.kind === TK.Push) detail.append(this.wtRow('밀려날 방향:', sel(DIR_NAMES.map((n, i) => [i, n]), c.pushDir & 3, v => { c.pushDir = v; changed(true); }), el('span', { class: 'hint', text: '주인공이 이쪽으로 한 칸 걸어가요' })));
      if (c.kind === TK.Warp) {
        const areas = rom.allAreas;
        const ds = sel([[-1, '(구역을 고르세요)']].concat(areas.map((x, i) => [i, x.regionName + ' ' + x.name])), areas.findIndex(x => x.group === c.warpGroup && x.map === c.warpMap), v => { const d = areas[v]; if (d) { c.warpGroup = d.group; c.warpMap = d.map; } changed(true); });
        ds.style.width = '200px';
        detail.append(this.wtRow('이동할 곳 / X / Y:', ds, num(c.warpX, 0, 255, v => { c.warpX = v; changed(true); }), num(c.warpY, 0, 255, v => { c.warpY = v; changed(true); }),
          el('button', { text: '지도에서 고르기…', onclick: () => { const d = areas.find(x => x.group === c.warpGroup && x.map === c.warpMap); if (d) this.spotPickDialog(d, c.warpX, c.warpY, (x, y) => { c.warpX = x; c.warpY = y; changed(true); rerender(); }); } })));
      }
      const scene = el('input', { class: 'num', style: 'width:55px', value: c.sceneId.toString(16).toUpperCase() });
      scene.addEventListener('change', () => { const v = parseInt(scene.value, 16); if (!isNaN(v) && v >= 0 && v <= 255) { c.sceneId = v; changed(false); } scene.value = c.sceneId.toString(16).toUpperCase(); });
      detail.append(this.wtRow('발동 장면 번호:', scene, el('span', { class: 'hint', text: 'FF = 항상 켜짐 (추천) · 0,1… = 그 지도 스토리 단계일 때만' })));
      // 설명
      let hint;
      if (orig && c.textRef) hint = '롬에 들어있는 이벤트예요 (' + coordActionType(c) + '). 그대로 두면 지금처럼 동작해요.\n대사 칸은 [대사] 탭의 같은 대사와 연결돼 있어서 여기서 고치면 바로 반영돼요 ({ } 표시는 지우지 마세요).\n고친 대사는 메인 화면 [저장하기]로 기록돼요.';
      else if (orig) hint = '롬에 들어있는 이벤트예요 (' + coordActionType(c) + "). 그대로 두면 지금처럼 동작해요.\n이 이벤트는 대사가 없거나 읽을 수 없는 형태예요. 위 '밟으면'을 고르면 새 동작으로 다시 만들어요.";
      else hint = {
        [TK.Battle]: "주인공이 이 칸을 밟으면 고른 NPC가 걸어와서 대사 후 고른 트레이너 팀으로 배틀해요.\n지면 원래 게임처럼 포켓몬센터로 돌아가요. '한 번만'을 켜면 이긴 뒤엔 다시 안 일어나요.",
        [TK.GiveItem]: '고른 NPC가 걸어와서 대사 후 도구를 줘요. 가방이 꽉 차면 안 주고 다음에 다시 줘요.',
        [TK.GivePokemon]: '고른 NPC가 걸어와서 대사 후 포켓몬을 줘요 (그 레벨까지 배우는 기술). 파티가 꽉 차면 박스로 가요.',
        [TK.Approach]: '주인공이 이 칸을 밟으면 고른 NPC가 옆 칸까지 걸어와 말을 걸고 제자리로 돌아가요.\n지도에 빨간 화살표로 NPC가 오는 길이 보여요.',
        [TK.Push]: '대사를 보여준 뒤 주인공을 한 칸 밀어내서 지나가지 못하게 막아요.',
        [TK.Warp]: '이 칸을 밟으면 (대사가 있으면 보여준 뒤) 고른 구역의 X, Y 로 순간이동해요.'
      }[c.kind] || '이 칸을 밟으면 대사창이 떠요.';
      let far = null;
      if (tkApproaches(show) && c.targetObj >= 0 && c.targetObj < wt.objects.length) far = tooFar(wt.objects[c.targetObj], c);
      detail.append(el('div', { class: 'hint', style: 'color:' + (far ? '#d9480f' : '#8b4513') + ';margin:6px 0 0 8px', text: (far ? '⚠ ' + far + '\n\n' : '') + hint }));
    }
    const addBtn = el('button', { text: '➕ 지도에 트리거 놓기', style: 'background:#e6f5e6;font-weight:bold', onclick: () => {
      this.wtStatus('▶ 지도에서 트리거를 놓을 칸(주인공이 밟을 곳)을 클릭하세요'); this.setTab(T_WARP);
      this.startPick('지도에서 트리거를 놓을 칸(주인공이 밟을 곳)을 클릭하세요', (x, y) => {
        // 가장 가까운 NPC 를 '다가올 NPC' 로 미리 골라 둠
        const near = wt.objects.filter(o => o.canApproach && o.x >= 0).sort((p, q) => (Math.abs(p.x - x) + Math.abs(p.y - y)) - (Math.abs(q.x - x) + Math.abs(q.y - y)))[0];
        wt.coords.push(newCoord({ x, y, sceneId: 0xFF, kind: near ? TK.Approach : TK.Talk, targetObj: near ? near.index : -1, targetName: near ? near.name : '',
          text: { en: 'Wait a moment!', jp: 'ちょっと　まって！' }[this.rom.cs.kind] || '잠깐 기다려!', warpGroup: a.group, warpMap: a.map, dirty: true }));
        wt.coordsDirty = true; wt.selC = wt.coords.length - 1; wt.sub = 'trig';
        this.wtStatus('(' + x + ',' + y + ') 에 트리거를 놓았어요 · 동작·대사를 정하고 [💾 트리거 저장]');
        rerender();
      });
    } });
    const delBtn = el('button', { text: '❌ 삭제', style: 'background:#ffe6e6', onclick: () => {
      if (!c) return;
      wt.coords.splice(wt.selC, 1); wt.coordsDirty = true; this.wtStatus('트리거를 지웠어요 · [💾 트리거 저장]을 눌러야 기록돼요'); rerender();
    } });
    const saveBtn = el('button', { class: 'save', text: '💾 트리거 저장', style: 'font-weight:bold', onclick: () => {
      const err = rom.saveAreaCoords(a, wt.coords);
      if (err) { alert(err); return; }
      const keep = wt.selC;
      this.wtDisplay(a, true); this.wt.selC = keep; this.wt.sub = 'trig';
      this.wtStatus('트리거 저장 완료! 메인 화면 [저장하기]로 파일에 기록돼요');
      this.owner = null; this.buildTree(); rerender();
      this.say('워프·트리거를 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
    } });
    return this.wtSplit('⚡ 이 구역의 트리거 (지도의 주황 T 칸)', wt.coords.map((x, i) => 'T' + (i + 1) + '  ' + coordText(x)), wt.selC,
      i => { wt.selC = i; rerender(); }, [addBtn, delBtn, saveBtn], '선택한 트리거 상세 설정', detail);
  },

  // ---------------------------------------------------------------- 워프
  wtWarpPage(wt, rerender) {
    const rom = this.rom, a = wt.area;
    if (wt.selW >= wt.warps.length) wt.selW = wt.warps.length - 1;
    const w = wt.warps[wt.selW];
    const changed = () => { wt.warpsDirty = true; this.wtStatus('워프를 고쳤어요 · [💾 워프 저장]을 눌러야 기록돼요'); };
    const detail = el('div');
    if (w) {
      const areas = rom.allAreas;
      const ds = sel([[-1, '(구역을 고르세요)']].concat(areas.map((x, i) => [i, x.regionName + ' ' + x.name])), areas.findIndex(x => x.group === w.destGroup && x.map === w.destMap), v => { const d = areas[v]; if (d) { w.destGroup = d.group; w.destMap = d.map; } changed(); rerender(); });
      ds.style.width = '300px';
      detail.append(
        this.wtRow('문 위치 X / Y:', num(w.x, 0, 255, v => { w.x = v; changed(); rerender(); }), num(w.y, 0, 255, v => { w.y = v; changed(); rerender(); }),
          el('button', { text: '📍 지도에서 옮기기', style: 'background:#dcebfc', onclick: () => this.startPick('지도에서 칸을 클릭하세요', (x, y) => { w.x = x; w.y = y; changed(); rerender(); }) })),
        this.wtRow('도착 구역:', ds),
        this.wtRow('도착 워프 번호:', num(Math.max(1, w.destWarpId), 1, 32, v => { w.destWarpId = v; changed(); rerender(); }), el('span', { class: 'hint', text: '도착 구역의 W번호 칸에 나타나요' })),
        this.wtRow('', el('button', { text: '🗺 도착 지도 보기', style: 'background:#e1ebff', onclick: () => this.warpPreview(wt.selW) }), el('span', { class: 'hint', text: '지도의 W 칸을 더블클릭해도 돼요' })));
    }
    const addBtn = el('button', { text: '➕ 지도에 워프 놓기', style: 'background:#e6f5e6;font-weight:bold', onclick: () => {
      this.wtStatus('▶ 지도에서 워프(문)를 놓을 칸을 클릭하세요'); this.setTab(T_WARP);
      this.startPick('지도에서 워프(문)를 놓을 칸을 클릭하세요', (x, y) => {
        wt.warps.push({ x, y, destWarpId: 1, destGroup: a.group, destMap: a.map });
        wt.warpsDirty = true; wt.selW = wt.warps.length - 1; wt.sub = 'warp';
        this.wtStatus('(' + x + ',' + y + ') 에 워프를 놓았어요 · 도착 구역을 고르고 [💾 워프 저장]');
        rerender();
      });
    } });
    const delBtn = el('button', { text: '❌ 삭제', style: 'background:#ffe6e6', onclick: () => {
      if (!w) return;
      wt.warps.splice(wt.selW, 1); wt.warpsDirty = true; this.wtStatus('워프를 지웠어요 · [💾 워프 저장]을 눌러야 기록돼요'); rerender();
    } });
    const saveBtn = el('button', { class: 'save', text: '💾 워프 저장', style: 'font-weight:bold', onclick: () => {
      const err = rom.saveAreaWarps(a, wt.warps);
      if (err) { alert('워프를 저장할 공간이 부족합니다.'); return; }
      const keep = wt.selW;
      this.wtDisplay(a, true); this.wt.selW = keep; this.wt.sub = 'warp';
      this.wtStatus('워프 저장 완료! 메인 화면 [저장하기]로 파일에 기록돼요');
      this.owner = null; this.buildTree(); rerender();
      this.say('워프·트리거를 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
    } });
    return this.wtSplit('🌀 이 구역의 워프 (지도의 보라 W 칸)',
      wt.warps.map((x, i) => 'W' + (i + 1) + '  워프 (' + x.x + ',' + x.y + ') → ' + rom.areaName(x.destGroup, x.destMap) + ' (워프 ' + x.destWarpId + '번)'), wt.selW,
      i => { wt.selW = i; rerender(); }, [addBtn, delBtn, saveBtn], '선택한 워프 상세 설정', detail);
  },

  // ---------------------------------------------------------------- 워프 도착지 미리보기 (WarpPreviewForm)
  warpPreview(idx) {
    const rom = this.rom, wt = this.wt, from = this.area;
    const w = wt && wt.warps[idx];
    if (!w) return;
    const dest = rom.allAreas.find(x => x.group === w.destGroup && x.map === w.destMap);
    if (!dest) { this.wtStatus('도착 구역 ' + w.destGroup + '-' + w.destMap + ' 을(를) 찾지 못했어요', true); this.setTab(T_WARP); return; }
    const Z = 2, C = 16 * Z, history = [];
    let area, arrive, warps;
    const cv = el('canvas', { class: 'map' }), info = el('b', { style: 'color:#1c3d9a' });
    const wrap = el('div', { class: 'mapwrap', style: 'height:56vh' }, cv);
    const back = el('button', { text: '◀ 이전 지도', onclick: () => { const h = history.pop(); if (h) show(h[0], h[1]); } });
    const show = (a, arr) => {
      area = a; arrive = arr; back.disabled = !history.length;
      warps = rom.getAreaWarps(a);
      const img = rom.gfx.renderMap(a), g = cv.getContext('2d');
      cv.width = a.width * 32 * Z; cv.height = a.height * 32 * Z;
      g.imageSmoothingEnabled = false;
      if (img) { const b = document.createElement('canvas'); b.width = img.width; b.height = img.height; b.getContext('2d').putImageData(img, 0, 0); g.drawImage(b, 0, 0, cv.width, cv.height); }
      for (const o of a.owners.concat(a.extras)) if (o.x >= 0 && !o.isSign) { const sp = this.spriteImg(o.sprite, o.pal); if (sp) g.drawImage(sp, o.x * C, o.y * C, C, C); }
      g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = 'bold 14px sans-serif';
      warps.forEach((x, i) => {
        g.fillStyle = 'rgba(150,60,255,.45)'; g.fillRect(x.x * C, x.y * C, C, C);
        g.strokeStyle = i === arr ? '#ff3b9a' : '#7b2cff'; g.lineWidth = i === arr ? 5 : 1.5; g.strokeRect(x.x * C + 2, x.y * C + 2, C - 4, C - 4);
        g.fillStyle = '#fff'; g.strokeStyle = '#000'; g.lineWidth = 3; g.strokeText('W' + (i + 1), x.x * C + C / 2, x.y * C + C / 2); g.fillText('W' + (i + 1), x.x * C + C / 2, x.y * C + C / 2);
      });
      if (arr >= 0 && arr < warps.length) {
        info.textContent = '도착: ' + a.regionName + ' ' + a.name + '  ·  W' + (arr + 1) + ' 칸 (' + warps[arr].x + ',' + warps[arr].y + ')';
        setTimeout(() => { wrap.scrollLeft = warps[arr].x * C - wrap.clientWidth / 2; wrap.scrollTop = warps[arr].y * C - wrap.clientHeight / 2; }, 0);
      } else info.textContent = '도착: ' + a.regionName + ' ' + a.name + '  ·  ' + (arr + 1) + '번 워프가 이 지도에 없어요 (게임에서 이상한 곳에 나올 수 있어요)';
      if (!img) info.textContent += '  (지도 그림을 못 그렸어요)';
    };
    cv.addEventListener('dblclick', e => {
      const r = cv.getBoundingClientRect(), k = r.width / cv.width;
      const x = Math.floor((e.clientX - r.left) / k / C), y = Math.floor((e.clientY - r.top) / k / C);
      const i = warps.findIndex(q => q.x === x && q.y === y);
      if (i < 0) return;
      const next = rom.allAreas.find(q => q.group === warps[i].destGroup && q.map === warps[i].destMap);
      if (!next) return;
      history.push([area, arrive]); show(next, warps[i].destWarpId - 1);
    });
    let close;
    close = this.dialog('워프 도착지', () => el('div', null,
      el('div', { class: 'bar' }, info),
      el('div', { class: 'bar' },
        el('button', { class: 'apply', text: '➡ 이 구역으로 가기', style: 'font-weight:bold', onclick: () => {
          const a2 = area, i2 = arrive; close();
          this.selectArea(a2, null);
          const wt2 = this.wtDisplay(a2); wt2.sub = 'warp'; wt2.selW = Math.max(0, i2);
          this.setTab(T_WARP); this.drawMap();
          const ww = wt2.warps[i2];
          if (ww) { const T = 16 * this.scale; this.mapWrap.scrollLeft = ww.x * T - this.mapWrap.clientWidth / 2; this.mapWrap.scrollTop = ww.y * T - this.mapWrap.clientHeight / 2; }
        } }), back, el('button', { text: '닫기', onclick: () => close() })),
      wrap,
      el('div', { class: 'hint', text: '분홍 굵은 테두리 = 도착 위치 · 이 지도의 W 칸을 더블클릭하면 그 워프의 도착지로 계속 따라가요 · 출발: ' + from.regionName + ' ' + from.name + '  W' + (idx + 1) + ' (' + w.x + ',' + w.y + ')' })));
    show(dest, w.destWarpId - 1);
  }
});

// ===== 99-battleanim.js
// ================================================================ 기술 애니메이션 편집기
// 롬의 진짜 애니메이션 스크립트를 읽어 고치고, 롬의 진짜 배틀 애니메이션 코드(에뮬레이터)로 미리보기
const ANIM_OBJ_NAMES = ('HIT_BIG_YFIX,HIT_YFIX,HIT_SMALL_YFIX,HIT_BIG,HIT,HIT_SMALL,PUNCH,KICK,PALM,FANG,PUNCH_SHAKE,EMBER,DRAGON_RAGE,FLAMETHROWER,FIRE_SPIN,FIRE_BLAST,BURNED,BLIZZARD,ICE,ICE_BEAM,RAZOR_LEAF,' +
  'POKE_BALL,POKE_BALL_BLOCKED,EXPLOSION1,EXPLOSION2,ACID,SLUDGE,BETA_BALL_POOF,BALL_POOF,BIG_ROCK,SMALL_ROCK,STRENGTH,SEISMIC_TOSS,BUBBLE,SURF,SING,WATER_GUN,HYDRO_PUMP,POWDER,BEAM,BEAM_TIP,' +
  'ICE_BUILDUP,FROZEN,MASTER_BALL_SPARKLE,RECOVER,THUNDER_CENTER,THUNDER_LEFT,THUNDER_RIGHT,THUNDER_WAVE,SPARKS_CIRCLE_BIG,THUNDERBOLT_BALL,SPARKS_CIRCLE,THUNDERSHOCK_BALL,CLAMP,BITE,CUT_DOWN_LEFT,' +
  'CUT_DOWN_RIGHT,CUT_UP_RIGHT,CUT_LONG_DOWN_LEFT,CUT_LONG_DOWN_RIGHT,SOLAR_BEAM_CHARGE,ABSORB_CENTER,GUST,VINE_WHIP1,VINE_WHIP2,RAZOR_WIND1,RAZOR_WIND2,SONICBOOM_JP,WARP,ABSORB,EGG,FOCUS,BIND1,BIND2,' +
  'LEECH_SEED,SOUND,WAVE,CONFUSE_RAY,LEER,LEER_TIP,SCREEN,HARDEN,CHICK,AMNESIA,ASLEEP,SKULL,DIG_SAND,DIG_PILE,SAND,PARALYZED,STRING_SHOT,HAZE,MIST,SMOG,POISON_GAS,HORN,NEEDLE,PETAL_DANCE,SLUDGE_BOMB,' +
  'PAY_DAY,SONICBOOM_JP_UNUSED,MIMIC,ATTRACT,BONEMERANG,BONE_CLUB,BONE_RUSH,SWIFT,KINESIS,FLASH,SHINY,SKY_ATTACK,LICK,WITHDRAW,DRAIN,GROWTH,CONVERSION2,SMOKE,SMOKESCREEN,SWORDS_DANCE,SPEED_LINE,' +
  'SHARPEN,DEFENSE_CURL,METRONOME_HAND,METRONOME_SPARKLE,DISABLE,AGILITY,HEART,FLAME_WHEEL,SACRED_FIRE,COTTON_SPORE,MILK_DRINK,ANGER,HEAL_BELL,HEAL_BELL_NOTE,BATON_PASS,LOCK_ON,MIND_READER,SAFEGUARD,' +
  'PROTECT,THIEF,OCTAZOOKA,PRESENT,SPIKES,POWDER_SNOW,DRAGONBREATH,CONVERSION,SPIDER_WEB,CAKE_UNUSED,NIGHTMARE,IN_NIGHTMARE,LOVELY_KISS,SWEET_KISS,SKETCH,ENCORE_HAND,ENCORE_STAR,DESTINY_BOND,' +
  'MORNING_SUN,GLIMMER,MOONLIGHT,HIDDEN_POWER,CROSS_CHOP1,CROSS_CHOP2,SANDSTORM,ZAP_CANNON,SPITE,CURSE,PERISH_SONG,FORESIGHT,RAPID_SPIN,SWAGGER,BELLY_DRUM_HAND,BELLY_DRUM_NOTE,MEAN_LOOK,BETA_PURSUIT,' +
  'SHOOTING_SPARKLE,RAIN,B0,PSYCH_UP,ANCIENTPOWER,AEROBLAST,SHADOW_BALL,ROCK_SMASH,FLOWER,COTTON,ENEMYFEET_1ROW,PLAYERHEAD_1ROW,ENEMYFEET_2ROW,PLAYERHEAD_2ROW').split(',');
const ANIM_BG_NAMES = ['끝', '번쩍 (색 반전)', '번쩍 (흰색)', '밝아지기', '어두워지기', '밝기 번갈아', '물체 색 회색↔노랑', '물체 가운데 색 회색↔노랑', '배경 색 반전 반복', '포켓몬 숨기기', '포켓몬 보이기',
  '포켓몬 들어오기', '포켓몬 돌아가기', '파도타기 물결', '회오리', '순간이동', '나이트헤드', '포켓몬을 물체로 (1줄)', '포켓몬을 물체로 (2줄)', '그림자분신', '녹기', '빠른 번쩍임', '포켓몬 밝아지기',
  '포켓몬 어두워지기', '포켓몬 밝아지기 반복', '포켓몬 어두워지기 반복', '포켓몬 밝게·어둡게 반복', '포켓몬 번쩍 반복', '두 포켓몬 어두워지기 반복', '포켓몬 하얗게 됐다 돌아오기', '포켓몬 하얀색에서 돌아오기',
  '화면 좌우 흔들기', '화면 위아래 흔들기', '껍질에 숨기', '아래로 튀기', '구멍파기', '몸통박치기 (돌진)', '포켓몬 흔들흔들', '포켓몬 지우기', '포켓몬 물결 일그러짐', '사이코키네시스 일렁임',
  '(미완성) 내보내기 1', '(미완성) 내보내기 2', '바둥바둥', '(미완성) 따라가때리기', '구르기', '받아던지기', '물 시작', '물', '물 끝', '포켓몬 떨림', '내 포켓몬 흔들흔들', '화면 흔들흔들'];
const ANIM_BG_EN = ['End', 'Flash (inverted)', 'Flash (white)', 'White hues', 'Black hues', 'Alternate hues', 'Obj colors gray↔yellow', 'Obj mid color gray↔yellow', 'BG colors inverted cycle', 'Hide mon', 'Show mon',
  'Enter mon', 'Return mon', 'Surf', 'Whirlpool', 'Teleport', 'Night Shade', 'Battler → object (1 row)', 'Battler → object (2 rows)', 'Double Team', 'Acid Armor', 'Rapid flash', 'Fade mon to light',
  'Fade mon to black', 'Fade mon to light (repeat)', 'Fade mon to black (repeat)', 'Mon light/dark cycle', 'Flash mon (repeat)', 'Fade both mons to black (repeat)', 'Mon to white and back', 'Mon from white',
  'Shake screen X', 'Shake screen Y', 'Withdraw', 'Bounce down', 'Dig', 'Tackle', 'Wobble mon', 'Remove mon', 'Wave deform mon', 'Psychic', '(beta) Send out 1', '(beta) Send out 2', 'Flail', '(beta) Pursuit',
  'Rollout', 'Vital Throw', 'Start water', 'Water', 'End water', 'Vibrate mon', 'Wobble player', 'Wobble screen'];
const ANIM_WORD_KO = { HIT: '타격', BIG: '큰', SMALL: '작은', YFIX: '(높이 보정)', PUNCH: '펀치', KICK: '킥', PALM: '손바닥', FANG: '이빨', SHAKE: '흔들림', EMBER: '불꽃세례', DRAGON: '드래곤', RAGE: '분노', FLAMETHROWER: '화염방사',
  FIRE: '불꽃', SPIN: '소용돌이', BLAST: '폭발', BURNED: '화상', BLIZZARD: '눈보라', ICE: '얼음', BEAM: '빔', RAZOR: '칼날', LEAF: '잎', POKE: '몬스터', BALL: '볼', BLOCKED: '막힘', EXPLOSION1: '폭발1', EXPLOSION2: '폭발2',
  ACID: '산', SLUDGE: '오물', BETA: '(미완성)', POOF: '펑', ROCK: '바위', STRENGTH: '괴력', SEISMIC: '지구', TOSS: '던지기', BUBBLE: '거품', SURF: '파도', SING: '노래', WATER: '물', GUN: '대포', HYDRO: '하이드로', PUMP: '펌프',
  POWDER: '가루', TIP: '끝', BUILDUP: '쌓임', FROZEN: '얼음', MASTER: '마스터', SPARKLE: '반짝임', RECOVER: '회복', THUNDER: '번개', CENTER: '가운데', LEFT: '왼쪽', RIGHT: '오른쪽', WAVE: '파동', SPARKS: '불꽃튐', CIRCLE: '원',
  THUNDERBOLT: '10만볼트', THUNDERSHOCK: '전기쇼크', CLAMP: '껍질끼우기', BITE: '물기', CUT: '베기', DOWN: '아래', UP: '위', LONG: '긴', SOLAR: '솔라', CHARGE: '모으기', ABSORB: '흡수', GUST: '바람', VINE: '덩굴',
  WHIP1: '채찍1', WHIP2: '채찍2', WIND1: '바람1', WIND2: '바람2', SONICBOOM: '소닉붐', JP: '(일본판)', WARP: '순간이동', EGG: '알', FOCUS: '기 모으기', BIND1: '조이기1', BIND2: '조이기2', LEECH: '씨뿌리기', SEED: '',
  SOUND: '소리', CONFUSE: '이상한', RAY: '빛', LEER: '째려보기', SCREEN: '장막', HARDEN: '단단해지기', CHICK: '병아리', AMNESIA: '망각술', ASLEEP: '잠', SKULL: '해골', DIG: '구멍파기', SAND: '모래', PILE: '더미',
  PARALYZED: '마비', STRING: '실', SHOT: '뿜기', HAZE: '흑안개', MIST: '흰안개', SMOG: '스모그', POISON: '독', GAS: '가스', HORN: '뿔', NEEDLE: '바늘', PETAL: '꽃잎', DANCE: '댄스', BOMB: '폭탄', PAY: '고양이', DAY: '돈받기',
  UNUSED: '(안 씀)', MIMIC: '흉내내기', ATTRACT: '헤롱헤롱', BONEMERANG: '뼈다귀부메랑', BONE: '뼈', CLUB: '몽둥이', RUSH: '러시', SWIFT: '스피드스타', KINESIS: '숟가락휘기', FLASH: '플래시', SHINY: '반짝', SKY: '불새',
  ATTACK: '', LICK: '핥기', WITHDRAW: '껍질에숨기', DRAIN: '흡수', GROWTH: '성장', CONVERSION2: '텍스처2', SMOKE: '연기', SMOKESCREEN: '연막', SWORDS: '칼춤', SPEED: '빠르기', LINE: '선', SHARPEN: '각지기',
  DEFENSE: '웅크리기', CURL: '', METRONOME: '손가락흔들기', HAND: '손', DISABLE: '사슬묶기', AGILITY: '고속이동', HEART: '하트', FLAME: '불꽃', WHEEL: '바퀴', SACRED: '성스러운', COTTON: '솜', SPORE: '포자',
  MILK: '우유', DRINK: '마시기', ANGER: '화남', HEAL: '치료', BELL: '방울', NOTE: '음표', BATON: '바톤', PASS: '터치', LOCK: '록온', ON: '', MIND: '마음', READER: '읽기', SAFEGUARD: '신비의부적', PROTECT: '방어',
  THIEF: '도둑', OCTAZOOKA: '대포무노포', PRESENT: '프레젠트', SPIKES: '압정', SNOW: '눈', DRAGONBREATH: '용의숨결', CONVERSION: '텍스처', SPIDER: '거미', WEB: '줄', CAKE: '케이크', NIGHTMARE: '악몽', IN: '속',
  LOVELY: '악마의', KISS: '키스', SWEET: '천사의', SKETCH: '스케치', ENCORE: '앙코르', STAR: '별', DESTINY: '길동무', BOND: '', MORNING: '아침', SUN: '햇살', GLIMMER: '반짝', MOONLIGHT: '달의불빛', HIDDEN: '잠재',
  POWER: '파워', CROSS: '크로스', CHOP1: '촙1', CHOP2: '촙2', SANDSTORM: '모래바람', ZAP: '전자포', CANNON: '', SPITE: '원한', CURSE: '저주', PERISH: '멸망의', SONG: '노래', FORESIGHT: '꿰뚫어보기', RAPID: '고속',
  SWAGGER: '뽐내기', BELLY: '배북', DRUM: '북', MEAN: '검은', LOOK: '눈빛', PURSUIT: '따라가때리기', SHOOTING: '흐르는', RAIN: '비', B0: 'B0', PSYCH: '자기암시', ANCIENTPOWER: '원시의힘', AEROBLAST: '에어로블라스트',
  SHADOW: '섀도', SMASH: '깨기', FLOWER: '꽃', ENEMYFEET: '상대 발', PLAYERHEAD: '내 머리', '1ROW': '1줄', '2ROW': '2줄' };
const ANIM_FPS = 4194304 / 70224;

Object.assign(App.prototype, {
  _gb: GBEmu, _animRunner: AnimRunner, _animScript: AnimScript, _apu: GBApu,   // 자동 테스트용

  battleAnimEditor(startMove) {
    const rom = this.rom, mv = RomCry.moveAnims(rom.data), AG = rom.loadAnimGfx();
    if (!mv || !AG || !AG.asm) { alert('이 롬에서 기술 애니메이션 데이터를 찾지 못했어요. (금·은 구조와 다른 롬일 수 있어요)'); return; }
    const bank = Math.floor(mv.tab / 0x4000), A = AnimRunner.locate(rom.data, mv.tab);
    const ko = rom.cs.kind === 'ko' || rom.cs.kind === 'koen';
    const W = (o) => rom.data[o] | (rom.data[o + 1] << 8);
    // 표에 있는 애니메이션 수 (기술 251개 + 특수)
    let animCount = 252;
    while (animCount < 320) { const a = W(mv.tab + animCount * 2); if (a < 0x4000 || a >= 0x8000) break; animCount++; }
    const share = AnimScript.sharing(rom.data, mv.tab, animCount);
    // 색만 다르게 복사해 둔 물체면 원래 물체 번호 (아니면 -1)
    const PAL_TAG = ko ? { 0: '상대 색', 1: '내 색', 2: '회색', 3: '노랑', 4: '빨강', 5: '초록', 6: '파랑', 7: '갈색' } : { 0: 'enemy', 1: 'player', 2: 'gray', 3: 'yellow', 4: 'red', 5: 'green', 6: 'blue', 7: 'brown' };
    const cloneOf = id => {
      const t = AG.asm.objTab, d = rom.data, objs = AG.asm.objs;
      if (!objs[id]) return -1;
      for (let j = 0; j < objs.length; j++) {
        if (j === id || /BETA|UNUSED|^B0$|JP/.test(ANIM_OBJ_NAMES[j] || '')) continue;
        let same = true;
        for (let k = 0; k < 6; k++) if (k !== 4 && d[t + j * 6 + k] !== d[t + id * 6 + k]) { same = false; break; }
        if (same && d[t + j * 6 + 4] !== d[t + id * 6 + 4]) return j;
      }
      return -1;
    };
    // 원래 롬에서 애니메이션이 쓰던 물체들 (그 밖의 칸에 있는 물체는 색만 바꿔 복사한 것)
    let origUsed = null;
    const objName = id => {
      if (!origUsed) { origUsed = new Set(); for (const s of allScripts()) for (const c of s) if (c.op === 0xD0) origUsed.add(c.args[0]); }
      const base = origUsed.has(id) && !/BETA|UNUSED|^B0$/.test(ANIM_OBJ_NAMES[id] || '') ? -1 : cloneOf(id);
      if (base >= 0) return objName0(base) + ' (' + PAL_TAG[objInfo(id).pal] + ')';
      return objName0(id);
    };
    const objName0 = id => {
      const n = ANIM_OBJ_NAMES[id];
      if (!n) return (ko ? '물체 ' : 'Object ') + id;
      if (!ko) return n.toLowerCase().split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return n.split('_').map(w => ANIM_WORD_KO[w] != null ? ANIM_WORD_KO[w] : w).filter(Boolean).join(' ');
    };
    const bgName = id => (ko ? ANIM_BG_NAMES : ANIM_BG_EN)[id] || ('효과 ' + id);
    const gfxName = g => (ko ? ANIM_GFX_KO : ANIM_GFX_NAMES)[g] || ('그림 ' + g);
    const sfxName = id => {
      const n = RomCry.sfxName(id), two = n.match(/^(.*)_2$/);
      if (SFX_MOVE[n]) return rom.moveName(SFX_MOVE[n]);
      if (two && SFX_MOVE[two[1]]) return rom.moveName(SFX_MOVE[two[1]]) + ' 2';
      return ko && SFX_KO[n] ? SFX_KO[n] : sfxTitle(n);
    };
    const objInfo = id => AG.asm.objs[id] || null;   // { fs, gfx, pal }
    // 모든 애니메이션(+ 그 안에서 부르는 공용 동작)의 명령 목록 — 지금 고치는 기술은 고친 내용으로
    const allScripts = () => {
      const out = [], seenCall = new Set();
      const addCalls = cmds => { for (const c of cmds) if (c.op === 0xFE && !seenCall.has(c.ext)) { seenCall.add(c.ext); const s = AnimScript.parse(rom.data, bank, c.ext).cmds; out.push(s); addCalls(s); } };
      for (let m = 0; m < animCount; m++) {
        const cmds = m === st.move && st.model ? st.model.cmds : AnimScript.parse(rom.data, bank, W(mv.tab + m * 2)).cmds;
        out.push(cmds); addCalls(cmds);
      }
      return out;
    };
    const S = RomCry.findSfx(rom.data);

    const st = { move: 0, model: null, base: null, undo: [], redo: [], sel: 0, res: null, frame: 0, playing: false, player: 155, enemy: 152, turn: 0, speed: 1, loop: true, sound: true, cmdFrame: [], busy: false, dirtyRun: false };

    // ---------------------------------------------------------------- 무대 (게임 화면 ×3) + 물체 위치 표시
    const Z = 3, stage = el('canvas', { width: 160 * Z, height: 144 * Z, style: 'display:block;image-rendering:pixelated;background:#fff;border:2px solid #333;border-radius:4px;cursor:default' });
    const sg = stage.getContext('2d'); sg.imageSmoothingEnabled = false;
    const frameCanvas = el('canvas', { width: 160, height: 144 }), fg = frameCanvas.getContext('2d'), fimg = fg.createImageData(160, 144);
    const drawFrame = () => {
      const fr = st.res && st.res.frames[st.frame];
      if (fr) { new Uint32Array(fimg.data.buffer).set(fr); fg.putImageData(fimg, 0, 0); sg.drawImage(frameCanvas, 0, 0, 160 * Z, 144 * Z); }
      else { sg.fillStyle = '#fff'; sg.fillRect(0, 0, stage.width, stage.height); }
      // 물체 등장 위치 (내가 쓸 때만 화면 좌표가 맞음): 지금까지 나온 물체 + 고른 명령
      if (st.model && st.turn === 0 && showMarks.checked) st.model.cmds.forEach((c, i) => {
        if (c.op !== 0xD0) return;
        const f = st.cmdFrame[i];
        if (i !== st.sel && (f == null || f > st.frame || st.frame - f > 90)) return;
        const x = (c.args[1] - 8) * Z, y = (c.args[2] - 16) * Z, on = i === st.sel;
        sg.strokeStyle = on ? '#e8590c' : 'rgba(47,111,236,.8)'; sg.lineWidth = on ? 3 : 2;
        sg.beginPath(); sg.arc(x, y, on ? 10 : 7, 0, Math.PI * 2); sg.stroke();
        sg.beginPath(); sg.moveTo(x - 14, y); sg.lineTo(x + 14, y); sg.moveTo(x, y - 14); sg.lineTo(x, y + 14); sg.stroke();
        sg.fillStyle = on ? '#e8590c' : '#2f6fec'; sg.font = 'bold 12px Arial'; sg.fillText(String(i + 1), x + 9, y - 9);
      });
      frameInfo.textContent = st.res ? (st.frame + 1) + ' / ' + st.res.frames.length + ' 프레임 · ' + (st.frame / ANIM_FPS).toFixed(2) + '초' : '';
      scrub.max = st.res ? st.res.frames.length - 1 : 0; scrub.value = st.frame;
      drawTimeline();
    };
    // 무대에서 물체 위치 끌기
    let drag = null;
    stage.addEventListener('mousedown', e => {
      if (!st.model || st.turn !== 0) return;
      const r = stage.getBoundingClientRect(), mx = (e.clientX - r.left) * stage.width / r.width, my = (e.clientY - r.top) * stage.height / r.height;
      let best = -1, bd = 22;
      st.model.cmds.forEach((c, i) => { if (c.op !== 0xD0) return; const dd = Math.hypot((c.args[1] - 8) * Z - mx, (c.args[2] - 16) * Z - my); if (dd < bd && (i === st.sel || (st.cmdFrame[i] != null && st.cmdFrame[i] <= st.frame && st.frame - st.cmdFrame[i] <= 90))) { bd = dd; best = i; } });
      if (best < 0) return;
      pause(); selectCmd(best);
      snapshot();
      drag = { i: best, x0: e.clientX, y0: e.clientY, ax: st.model.cmds[best].args[1], ay: st.model.cmds[best].args[2], k: stage.width / r.width / Z };
      const mm = ev => {
        const c = st.model.cmds[drag.i];
        c.args[1] = Math.max(0, Math.min(255, Math.round(drag.ax + (ev.clientX - drag.x0) * drag.k)));
        c.args[2] = Math.max(0, Math.min(255, Math.round(drag.ay + (ev.clientY - drag.y0) * drag.k)));
        drawFrame(); showInspector();
      };
      const up = () => { document.removeEventListener('mousemove', mm); document.removeEventListener('mouseup', up); drag = null; changed(true); };
      document.addEventListener('mousemove', mm); document.addEventListener('mouseup', up);
    });
    stage.addEventListener('mousemove', e => {
      if (drag || !st.model) return;
      const r = stage.getBoundingClientRect(), mx = (e.clientX - r.left) * stage.width / r.width, my = (e.clientY - r.top) * stage.height / r.height;
      const near = st.turn === 0 && st.model.cmds.some((c, i) => c.op === 0xD0 && Math.hypot((c.args[1] - 8) * Z - mx, (c.args[2] - 16) * Z - my) < 22 && (i === st.sel || (st.cmdFrame[i] != null && st.cmdFrame[i] <= st.frame)));
      stage.style.cursor = near ? 'move' : 'default';
    });

    // ---------------------------------------------------------------- 재생
    const playBtn = el('button', { text: '▶ 재생', style: 'font-weight:bold;background:#dcf5dc;min-width:84px', onclick: () => st.playing ? pause() : play() });
    const scrub = el('input', { type: 'range', min: 0, max: 0, value: 0, style: 'flex:1;min-width:200px' });
    scrub.addEventListener('input', () => { pause(); st.frame = +scrub.value; drawFrame(); });
    const frameInfo = el('span', { class: 'hint', style: 'min-width:150px' });
    const speedSel = sel([[1, '보통 속도'], [0.5, '느리게 (½)'], [0.25, '아주 느리게 (¼)']], 1, v => { st.speed = v; if (st.playing) { pause(); play(); } });
    const [loopC, loopL] = check('반복', true); loopC.addEventListener('change', () => st.loop = loopC.checked);
    const [sndC, sndL] = check('소리', true); sndC.addEventListener('change', () => { st.sound = sndC.checked; if (!st.sound) Player.stop(); });
    const [showMarks, marksL] = check('물체 위치 표시', true); showMarks.addEventListener('change', drawFrame);
    let raf = 0, t0 = 0, f0 = 0, audio = null;
    const play = () => {
      if (!st.res || !st.res.frames.length) return;
      if (st.frame >= st.res.frames.length - 1) st.frame = 0;
      st.playing = true; playBtn.textContent = '⏸ 멈춤';
      t0 = performance.now(); f0 = st.frame;
      if (st.sound && st.speed === 1) {
        if (!audio) audio = GBApu.render(st.res.sounds, st.res.frames.length + 30, st.res.startFrame);
        Player.playOnce(audio, st.frame / ANIM_FPS);
      }
      cancelAnimationFrame(raf);
      const step = () => {
        if (!st.playing) return;
        let f = f0 + Math.floor((performance.now() - t0) / 1000 * ANIM_FPS * st.speed);
        if (f >= st.res.frames.length) {
          if (!st.loop) { st.frame = st.res.frames.length - 1; pause(); drawFrame(); return; }
          f0 = 0; t0 = performance.now(); f = 0;
          if (st.sound && st.speed === 1 && audio) Player.playOnce(audio, 0);
        }
        if (f !== st.frame) { st.frame = f; drawFrame(); }
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const pause = () => { st.playing = false; playBtn.textContent = '▶ 재생'; cancelAnimationFrame(raf); Player.stop(); };
    const toStart = () => { pause(); st.frame = 0; drawFrame(); };

    // ---------------------------------------------------------------- 미리보기 만들기 (고친 스크립트를 롬 복사본에 넣고 진짜 코드로 실행)
    const runStatus = el('span', { class: 'hint' });
    const placeFor = model => {
      // 원래 자리에 들어가면 그 자리, 아니면 같은 뱅크의 빈 곳
      const size = AnimScript.size(model), b = st.base;
      if (b.contiguous && b.exclusive && size <= b.size) return { addr: b.entry, inPlace: true };
      for (const r of rom.free) if (Math.floor(r[0] / 0x4000) === bank && Math.floor((r[0] + size - 1) / 0x4000) === bank && r[1] - r[0] >= size) return { addr: 0x4000 + r[0] % 0x4000, off: r[0], inPlace: false };
      return null;
    };
    const buildData = () => {
      const d = rom.data.slice();
      if (!st.model) return d;
      const pl = placeFor(st.model);
      if (!pl) return null;
      const enc = AnimScript.encode(st.model, pl.addr);
      d.set(enc.bytes, bank * 0x4000 + (pl.addr & 0x3FFF));
      d[mv.tab + st.move * 2] = pl.addr & 0xFF; d[mv.tab + st.move * 2 + 1] = pl.addr >> 8;
      st.pos = enc.pos;
      return d;
    };
    let runTimer = 0;
    const rerun = (keepFrame) => {
      clearTimeout(runTimer);
      runTimer = setTimeout(() => {
        if (!A) { runStatus.textContent = '이 롬은 미리보기용 코드를 찾지 못해서 화면 재생은 안 돼요 (편집·저장은 돼요)'; return; }
        const d = buildData();
        if (!d) { runStatus.textContent = '⚠ 데이터가 너무 커서 넣을 자리가 없어요 — 명령을 줄여 주세요'; return; }
        const wasPlaying = st.playing; pause();
        runStatus.textContent = '미리보기 만드는 중…';
        setTimeout(() => {
          const t = performance.now();
          const res = AnimRunner.run(rom, st.move, { data: d, player: st.player, enemy: st.enemy, turn: st.turn, maxFrames: 1200 });
          // 스크립트의 "끝"을 지난 뒤는 배틀 화면 정리(HP 칸 다시 그리기)라 미리보기 화면에선 깨져 보임 → 거기까지만
          if (res && st.pos && res.trace.length) {
            const endAt = new Set(st.model.cmds.map((c, i) => c.op === 0xFF ? st.pos[i] + 1 : -1).filter(x => x > 0));
            let started = false, cut = -1;
            for (let f = 0; f < res.trace.length; f++) {
              const t = res.trace[f];
              if (t) started = true;
              if (endAt.has(t) || (started && !t)) { cut = f + 2; break; }
            }
            if (cut > 0 && cut < res.frames.length) { res.frames.length = cut; res.trace.length = cut; }
          }
          st.res = res; audio = null;
          // 명령마다 처음 실행된 프레임
          st.cmdFrame = [];
          if (res && st.pos) st.model.cmds.forEach((c, i) => {
            const p = st.pos[i];
            for (let f = 0; f < res.trace.length; f++) { const prev = f ? res.trace[f - 1] : 0; if (res.trace[f] > p && (prev <= p || prev > res.trace[f])) { st.cmdFrame[i] = f; break; } }
          });
          const edited = JSON.stringify(st.model.cmds) !== st.baseJson;
          runStatus.textContent = !res ? '미리보기를 만들지 못했어요'
            : res.crashed ? (edited ? '⚠ 미리보기 중 게임 코드가 멈췄어요 — 고친 내용 때문일 수 있어요. [원래대로]와 비교해 보세요'
              : '⚠ 미리보기 환경에서 게임 코드가 멈췄어요. 이 롬의 추가 코드가 배틀 정보를 필요로 하는 것 같아요 (실제 게임에서는 괜찮을 수 있어요)')
            : !res.finished ? '⚠ 애니메이션이 끝나지 않아요 (20초 넘게 계속돼요)' : '✅ 실제 게임 엔진으로 재생 (' + Math.round(performance.now() - t) + 'ms)';
          if (!keepFrame) st.frame = 0;
          st.frame = Math.min(st.frame, res ? res.frames.length - 1 : 0);
          drawFrame(); showList();
          if (wasPlaying) play();
        }, 10);
      }, 150);
    };

    // ---------------------------------------------------------------- 시간표 (가로 = 프레임)
    const tl = el('canvas', { height: 132, style: 'display:block;cursor:pointer' });
    const tlWrap = el('div', { style: 'overflow-x:auto;border:1px solid var(--line);background:#fff;margin-top:6px' }, tl);
    const ROWS = [['obj', '물체', '#2f6fec'], ['sound', '효과음', '#1e874b'], ['bg', '화면 효과', '#a0522d'], ['gfx', '그림·색', '#7b4fd0'], ['other', '기타', '#888']];
    const rowOf = c => { const k = c.op <= 0xCF ? 'wait' : AnimScript.CMD[c.op].k; return k === 'obj' ? 0 : k === 'sound' ? 1 : k === 'bg' ? 2 : (k === 'gfx' || k === 'pal') ? 3 : k === 'wait' ? -1 : 4; };
    let tlHits = [];
    const drawTimeline = () => {
      const n = st.res ? st.res.frames.length : 60, PX = Math.max(3, Math.min(8, Math.floor((tlWrap.clientWidth - 70) / Math.max(1, n))));
      tl.width = Math.max(tlWrap.clientWidth - 2 || 600, 70 + n * PX + 10);
      const g = tl.getContext('2d'), H = 22;
      g.fillStyle = '#fff'; g.fillRect(0, 0, tl.width, tl.height);
      ROWS.forEach(([, name, col], r) => { g.fillStyle = r % 2 ? '#f7f8fa' : '#fff'; g.fillRect(0, 4 + r * H, tl.width, H); g.fillStyle = col; g.font = 'bold 11px sans-serif'; g.fillText(name, 4, 4 + r * H + 15); });
      g.fillStyle = '#ddd'; for (let f = 0; f <= n; f += 10) g.fillRect(70 + f * PX, 0, 1, 4 + ROWS.length * H);
      g.fillStyle = '#999'; g.font = '9px Arial'; for (let f = 0; f <= n; f += 30) g.fillText((f / ANIM_FPS).toFixed(1) + 's', 70 + f * PX + 2, tl.height - 4);
      tlHits = [];
      if (st.model) st.model.cmds.forEach((c, i) => {
        const f = st.cmdFrame[i], r = rowOf(c);
        if (f == null || r < 0) return;
        const x = 70 + f * PX, y = 4 + r * H + 3, on = i === st.sel;
        g.fillStyle = on ? '#e8590c' : ROWS[r][2];
        const w = c.op === 0xD0 ? 10 : 8;
        g.fillRect(x - 1, y, w, H - 6);
        g.fillStyle = '#fff'; g.font = 'bold 9px Arial'; g.fillText(String(i + 1), x, y + 11);
        tlHits.push({ x: x - 1, y, w, h: H - 6, i });
      });
      // 재생 줄
      g.fillStyle = '#e8590c'; g.fillRect(70 + st.frame * PX, 0, 2, 4 + ROWS.length * H);
      tl._px = PX;
      if (st.playing) { const x = 70 + st.frame * PX; if (x > tlWrap.scrollLeft + tlWrap.clientWidth - 40) tlWrap.scrollLeft = x - 80; }
    };
    tl.addEventListener('mousedown', e => {
      const r = tl.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      const h = tlHits.find(t => x >= t.x - 2 && x <= t.x + t.w + 2 && y >= t.y && y <= t.y + t.h);
      if (h) { selectCmd(h.i); st.frame = st.cmdFrame[h.i]; pause(); drawFrame(); return; }
      if (x > 70 && st.res) { pause(); st.frame = Math.max(0, Math.min(st.res.frames.length - 1, Math.floor((x - 70) / tl._px))); drawFrame(); }
    });

    // ---------------------------------------------------------------- 명령 목록 (쉬운 말로)
    const listBox = el('div', { style: 'max-height:300px;overflow:auto;border:1px solid var(--line);background:#fff' });
    const describe = (c, i) => {
      if (c.op <= 0xCF) return ['⏳', c.op + '프레임 기다리기 (' + (c.op / ANIM_FPS).toFixed(2) + '초)'];
      const k = AnimScript.CMD[c.op];
      switch (c.op) {
        case 0xD0: { const o = objInfo(c.args[0]); return ['✨', objName(c.args[0]) + ' 나타내기 · 위치 ' + c.args[1] + ', ' + c.args[2] + (o ? ' · 그림 ' + gfxName(o.gfx) : '')]; }
        case 0xD1: case 0xD2: case 0xD3: case 0xD4: case 0xD5: return ['🖼', '그림 불러오기: ' + c.args.map(gfxName).join(', ')];
        case 0xE0: return ['🔊', '효과음: ' + sfxName(c.args[1])];
        case 0xE1: return ['🐾', '울음소리 (음높이 ' + c.args[0] + ')'];
        case 0xF0: return ['🌈', '화면 효과: ' + bgName(c.args[0]) + ' (' + (c.args[2] ? '쓰는 쪽' : '맞는 쪽') + ')'];
        case 0xF1: case 0xF2: case 0xF3: return ['🎨', (c.op === 0xF1 ? '배경' : '물체') + ' 색 바꾸기 (' + c.args[0].toString(2).padStart(8, '0') + ')'];
        case 0xD6: return ['➡', (c.args[0]) + '번째 물체에 신호 보내기 (다음 동작으로)'];
        case 0xD7: return ['➡', (c.args[0]) + '번째 물체 상태를 ' + c.args[1] + '(으)로'];
        case 0xD8: return ['➡', (c.args[0]) + '번째 화면 효과에 신호 보내기'];
        case 0xE5: return ['🧹', '물체 모두 지우기'];
        case 0xFE: { const n = (share.calls.get(c.ext) || new Set()).size; return ['📦', '공용 동작 실행 (' + n + '개 애니메이션이 같이 씀)']; }
        case 0xFC: return ['↪', (c.target != null ? (c.target + 1) + '번 명령으로 이동' : '다른 곳으로 이동')];
        case 0xFD: return ['🔁', (c.target != null ? (c.target + 1) + '번부터' : '') + ' 다시 반복 (' + c.args[0] + '번)'];
        case 0xF8: return ['❓', '설정 값이 ' + c.args[0] + '이면 ' + (c.target != null ? (c.target + 1) + '번으로' : '이동')];
        case 0xFB: return ['❓', '변수가 ' + c.args[0] + '이면 ' + (c.target != null ? (c.target + 1) + '번으로' : '이동')];
        case 0xEE: return ['❓', '설정 값 & ' + c.args[0] + '이면 ' + (c.target != null ? (c.target + 1) + '번으로' : '이동')];
        case 0xEF: return ['🔁', '조건이 될 때까지 ' + (c.target != null ? (c.target + 1) + '번으로' : '') + ' 되돌기'];
        case 0xF9: return ['🔢', '변수를 ' + c.args[0] + '(으)로'];
        case 0xFA: return ['🔢', '변수 1 늘리기'];
        case 0xFF: return ['⏹', '끝'];
        default: return ['⚙', '고급 명령: ' + k.n + (c.args.length ? ' (' + c.args.join(', ') + ')' : '')];
      }
    };
    const showList = () => {
      listBox.replaceChildren();
      if (!st.model) return;
      st.model.cmds.forEach((c, i) => {
        const [ic, t] = describe(c, i), f = st.cmdFrame[i];
        const row = el('div', { style: 'display:flex;gap:6px;align-items:center;padding:3px 6px;border-bottom:1px solid #eef;cursor:pointer;' + (i === st.sel ? 'background:#ffe8d6;font-weight:bold' : '') },
          el('span', { text: String(i + 1), style: 'color:#999;min-width:22px;text-align:right' }), el('span', { text: ic }), el('span', { text: t, style: 'flex:1' }),
          el('span', { class: 'hint', text: f != null ? (f / ANIM_FPS).toFixed(2) + 's' : '' }));
        row.addEventListener('click', () => { selectCmd(i); if (st.cmdFrame[i] != null) { pause(); st.frame = st.cmdFrame[i]; drawFrame(); } });
        listBox.append(row);
      });
      const r = listBox.children[st.sel]; if (r) r.scrollIntoView({ block: 'nearest' });
    };
    const selectCmd = i => { st.sel = Math.max(0, Math.min(st.model.cmds.length - 1, i)); showList(); showInspector(); drawFrame(); };

    // ---------------------------------------------------------------- 고치기 · 되돌리기
    const snapshot = () => { st.undo.push(JSON.stringify(st.model.cmds)); if (st.undo.length > 200) st.undo.shift(); st.redo = []; updUndo(); };
    const changed = (run) => { updSize(); showList(); showInspector(); markDirty(); if (run !== false) rerun(true); };
    const undoBtn = el('button', { text: '↶ 되돌리기', title: 'Ctrl+Z', onclick: () => undo() }), redoBtn = el('button', { text: '↷ 다시하기', title: 'Ctrl+Y', onclick: () => redo() });
    const updUndo = () => { undoBtn.disabled = !st.undo.length; redoBtn.disabled = !st.redo.length; };
    const undo = () => { if (!st.undo.length) return; st.redo.push(JSON.stringify(st.model.cmds)); st.model.cmds = JSON.parse(st.undo.pop()); st.sel = Math.min(st.sel, st.model.cmds.length - 1); updUndo(); changed(); };
    const redo = () => { if (!st.redo.length) return; st.undo.push(JSON.stringify(st.model.cmds)); st.model.cmds = JSON.parse(st.redo.pop()); updUndo(); changed(); };
    const dirtyNote = el('b', { style: 'color:#e8590c' });
    const markDirty = () => { dirtyNote.textContent = JSON.stringify(st.model.cmds) !== st.baseJson ? '● 고친 내용 있음 (아직 롬에 안 씀)' : ''; };
    const sizeInfo = el('span', { class: 'hint' });
    const freeInBank = () => rom.free.filter(r => Math.floor(r[0] / 0x4000) === bank).reduce((a, r) => a + r[1] - r[0], 0);
    const updSize = () => {
      const n = AnimScript.size(st.model), pl = placeFor(st.model);
      sizeInfo.textContent = '데이터 ' + n + '바이트 (원래 ' + st.base.size + ') · 뱅크 빈 공간 ' + freeInBank() + '바이트' + (pl ? '' : ' · ⚠ 넣을 자리 없음');
      sizeInfo.style.color = pl ? '' : 'var(--warn)';
    };
    // 명령 넣기·지우기·옮기기
    const insertAt = (i, cmd) => { snapshot(); AnimScript.fixTargets(st.model, i, 1); st.model.cmds.splice(i, 0, cmd); st.sel = i; changed(); };
    const removeAt = i => {
      const c = st.model.cmds[i];
      if (c.op === 0xFF && st.model.cmds.filter(x => x.op === 0xFF).length <= 1) { alert('마지막 "끝" 명령은 지울 수 없어요.'); return; }
      snapshot();
      // 지운 명령을 가리키던 갈림은 그 다음 명령(지운 뒤 같은 번호)을 가리킴
      st.model.cmds.splice(i, 1); AnimScript.fixTargets(st.model, i + 1, -1);
      st.sel = Math.min(i, st.model.cmds.length - 1); changed();
    };
    const moveCmd = (i, dir) => {
      const j = i + dir, cs = st.model.cmds;
      if (j < 0 || j >= cs.length || cs[i].op === 0xFF || cs[j].op === 0xFF) return;
      snapshot();
      [cs[i], cs[j]] = [cs[j], cs[i]];
      for (const x of cs) { if (x.target === i) x.target = j; else if (x.target === j) x.target = i; }
      st.sel = j; changed();
    };
    const lastLoaded = () => { const s = new Set(); for (const c of st.model.cmds) if (c.op >= 0xD1 && c.op <= 0xD5) c.args.forEach(g => s.add(g)); return s; };
    // 물체 그림이 안 불러와져 있으면 그림 불러오기 명령에 더함 (최대 5개)
    const ensureGfx = g => {
      if (!g || lastLoaded().has(g)) return true;
      const i = st.model.cmds.findIndex(c => c.op >= 0xD1 && c.op <= 0xD4);
      if (i >= 0) { st.model.cmds[i].op++; st.model.cmds[i].args.push(g); return true; }
      if (st.model.cmds.some(c => c.op === 0xD5)) return false;
      AnimScript.fixTargets(st.model, 0, 1); st.model.cmds.unshift({ op: 0xD1, args: [g] }); st.sel++;
      return true;
    };
    const addMenu = sel([[0, '＋ 명령 넣기 ▼'], [1, '✨ 물체 나타내기'], [2, '🔊 효과음'], [3, '🌈 화면 효과'], [4, '⏳ 기다리기'], [5, '🧹 물체 모두 지우기'], [6, '🐾 울음소리']], 0, v => {
      addMenu.value = 0;
      if (!st.model) return;
      const at = Math.min(st.sel + 1, st.model.cmds.length - 1);   // 고른 명령 뒤 ("끝" 앞)
      const ref = st.model.cmds.slice(0, at + 1).reverse().find(c => c.op === 0xD0);
      if (v === 1) { const id = ref ? ref.args[0] : 4; snapshot(); AnimScript.fixTargets(st.model, at, 1); st.model.cmds.splice(at, 0, { op: 0xD0, args: [id, ref ? ref.args[1] : 136, ref ? ref.args[2] : 56, 0] }); st.sel = at; ensureGfx((objInfo(id) || {}).gfx); changed(); }
      if (v === 2) insertAt(at, { op: 0xE0, args: [0, RomCry.sfxName(49) === 'POUND' ? 49 : 0] });
      if (v === 3) insertAt(at, { op: 0xF0, args: [0x1F, 0, 0, 0x40] });
      if (v === 4) insertAt(at, { op: 8, args: [] });
      if (v === 5) insertAt(at, { op: 0xE5, args: [] });
      if (v === 6) insertAt(at, { op: 0xE1, args: [0] });
    });

    // ---------------------------------------------------------------- 고른 명령 고치기 (쉬운 칸)
    const insp = el('div', { style: 'border:1px solid var(--line);border-radius:6px;padding:8px;background:#fafbfd;min-height:120px' });
    const field = (label, ...kids) => el('div', { class: 'bar', style: 'margin:3px 0' }, el('span', { text: label, style: 'min-width:86px;color:var(--sub)' }), ...kids);
    const setArg = (k, v, run) => { const c = st.model.cmds[st.sel]; if (c.args[k] === v) return; snapshot(); c.args[k] = v; changed(run); };
    const numIn = (v, min, max, f) => { const n = num(v, min, max, f); n.style.width = '70px'; return n; };
    const objThumb = id => {
      const o = objInfo(id); if (!o) return null;
      try {
        const { pic, n } = rom.readAnimGfx(o.gfx), sh = rom.animShapes(o.gfx);
        const s = sh.find(x => x.pal === o.pal) || sh[0]; if (!s) return null;
        const c = rom.animShapeCanvas(pic, n, s, rom.animPal(o.pal), 2);
        if (c) c.style.cssText = 'background:repeating-conic-gradient(#e1e1e1 0% 25%, #bebebe 0% 50%) 0 0/8px 8px;border:1px solid #ccc;max-width:none';
        return c;
      } catch (e) { return null; }
    };
    const showInspector = () => {
      insp.replaceChildren();
      const c = st.model && st.model.cmds[st.sel];
      if (!c) return;
      const [ic, t] = describe(c, st.sel);
      insp.append(el('div', { style: 'font-weight:bold;margin-bottom:6px' }, ic + ' ' + (st.sel + 1) + '번: ' + t));
      if (c.op <= 0xCF) {
        insp.append(field('기다리는 시간', numIn(c.op, 0, 0xCF, v => { snapshot(); c.op = v; changed(); }), el('span', { class: 'hint', text: '프레임 (60프레임 = 1초)' })));
        insp.append(el('div', { class: 'bar' }, ...[2, 4, 8, 16, 32].map(v => el('button', { text: v + 'F', onclick: () => { snapshot(); c.op = v; changed(); } })),
          el('button', { text: '× 2배 길게', onclick: () => { snapshot(); c.op = Math.min(0xCF, c.op * 2); changed(); } }), el('button', { text: '÷ 절반', onclick: () => { snapshot(); c.op = Math.max(0, c.op >> 1); changed(); } })));
      } else if (c.op === 0xD0) {
        const objOpts = ANIM_OBJ_NAMES.map((_, i) => [i, '#' + String(i).padStart(3, '0') + ' ' + objName(i) + (objInfo(i) ? ' · ' + gfxName(objInfo(i).gfx) : '') + (/BETA|UNUSED|JP/.test(ANIM_OBJ_NAMES[i]) ? ' ⚠ 게임에서 안 쓰던 물체' : '')]);
        const thumb = el('div');
        const refreshThumb = () => { thumb.replaceChildren(); const tc = objThumb(c.args[0]); if (tc) thumb.append(tc); };
        const s = sel(objOpts, c.args[0], v => { snapshot(); c.args[0] = v; const ok = ensureGfx((objInfo(v) || {}).gfx); if (!ok) alert('그림 불러오기 칸이 꽉 차서 이 물체 그림을 더할 수 없어요 (최대 5개).'); changed(); refreshThumb(); });
        s.style.maxWidth = '320px';
        refreshThumb();
        insp.append(field('물체', s), el('div', { style: 'margin:4px 0 4px 92px' }, thumb));
        insp.append(field('위치 X', numIn(c.args[1], 0, 255, v => setArg(1, v)), el('span', { text: 'Y' }), numIn(c.args[2], 0, 255, v => setArg(2, v)), el('span', { class: 'hint', text: '화면 위 동그라미를 끌어도 돼요' })));
        insp.append(el('div', { class: 'bar', style: 'margin-left:92px' },
          el('button', { text: '내 포켓몬 쪽', onclick: () => { snapshot(); c.args[1] = 48; c.args[2] = 88; changed(); } }),
          el('button', { text: '상대 포켓몬 쪽', onclick: () => { snapshot(); c.args[1] = 136; c.args[2] = 48; changed(); } }),
          el('button', { text: '화면 가운데', onclick: () => { snapshot(); c.args[1] = 88; c.args[2] = 72; changed(); } })));
        insp.append(field('세부 값', numIn(c.args[3], 0, 255, v => setArg(3, v)), el('span', { class: 'hint', text: '물체마다 뜻이 달라요 (방향·속도·모양 등). 바꿔 보면서 확인하세요' })));
        const o = objInfo(c.args[0]);
        if (o) {
          // 색 묶음: 이 기술의 이 물체만 다른 색 묶음으로 (같은 물체를 안 쓰는 물체 칸에 복사해서 색만 다르게)
          const PALN = ko ? { 0: '상대 포켓몬 색', 1: '내 포켓몬 색', 2: '회색', 3: '노랑', 4: '빨강', 5: '초록', 6: '파랑', 7: '갈색' } : { 0: 'Enemy mon', 1: 'Player mon', 2: 'Gray', 3: 'Yellow', 4: 'Red', 5: 'Green', 6: 'Blue', 7: 'Brown' };
          const sw = p => { const pl = rom.animPal(p); return el('span', { style: 'display:inline-flex;gap:1px;vertical-align:middle' }, ...pl.slice(1).map(cc => el('span', { style: 'width:12px;height:12px;border:1px solid #888;background:' + rgbCss(cc) }))); };
          const palBox = el('span', { class: 'bar', style: 'gap:4px' });
          for (const p of [2, 3, 4, 5, 6, 7]) {
            palBox.append(el('button', { title: PALN[p], style: 'padding:2px 5px;' + (o.pal === p ? 'outline:3px solid #e8590c' : ''), onclick: () => {
              if (o.pal === p) return;
              const scripts = allScripts();
              const nid = rom.animObjWithPal(c.args[0], p, scripts);
              if (nid < 0) { alert('색을 따로 쓸 빈 물체 칸이 없어요. (게임에서 안 쓰는 물체 칸을 빌려서 만드는데, 다 썼어요)'); return; }
              snapshot(); c.args[0] = nid; changed();
            } }, sw(p), ' ' + PALN[p]));
          }
          insp.append(field('색 묶음', palBox));
          const usedNow = new Set(); for (const s of allScripts()) for (const x of s) if (x.op === 0xD0) usedNow.add(x.args[0]);
          const freeSlots = AG.asm.objs.filter((_, i) => !usedNow.has(i) && !/FEET|HEAD/.test(ANIM_OBJ_NAMES[i] || '')).length;
          insp.append(el('div', { class: 'hint', style: 'margin-left:92px', text: '이 기술의 이 물체만 다른 색 묶음으로 바꿔요 (다른 기술은 그대로). 게임보이 엔진은 기술 그림 색 칸이 6개뿐이라, 6개 중에서 골라요. 색 묶음 자체의 색을 바꾸면 그 묶음을 쓰는 모든 기술이 같이 바뀌어요. (색을 따로 만들 수 있는 남은 칸: ' + freeSlots + '개, 같은 물체+같은 색은 칸을 같이 써요)' }));
          const users = new Set(); AG.byGfx[o.gfx].forEach(m => users.add(m));
          insp.append(el('div', { class: 'hint', style: 'margin-top:6px', text: '그림 "' + gfxName(o.gfx) + '"은(는) 기술 ' + users.size + '개가 같이 써요. 그림이나 색을 고치면 그 기술들도 같이 바뀌어요.' }),
            el('div', { class: 'bar' }, el('button', { text: '🖌 이 기술 그림·색 고치기…', onclick: () => { pause(); this.dialog('기술 그림 · ' + rom.moveName(st.move), () => this.moveGfxSection(st.move), () => rerun(true), false, true); } })));
          if (!lastLoaded().has(o.gfx)) insp.append(el('div', { style: 'color:var(--warn)', text: '⚠ 이 물체의 그림(' + gfxName(o.gfx) + ')을 불러오는 명령이 없어요. 물체를 고르면 자동으로 더해요.' }));
        }
      } else if (c.op >= 0xD1 && c.op <= 0xD5) {
        const gopts = ANIM_GFX_NAMES.map((_, g) => [g, '#' + String(g).padStart(2, '0') + ' ' + gfxName(g)]).slice(1);
        c.args.forEach((g, k) => insp.append(field((k + 1) + '번 그림', sel(gopts, g, v => setArg(k, v)),
          c.args.length > 1 ? el('button', { text: '빼기', onclick: () => { snapshot(); c.args.splice(k, 1); c.op--; changed(); } }) : null)));
        if (c.op < 0xD5) insp.append(el('button', { text: '＋ 그림 더 불러오기', onclick: () => { snapshot(); c.args.push(1); c.op++; changed(); } }));
        insp.append(el('div', { class: 'hint', text: '물체가 쓰는 그림 묶음을 미리 불러와요. 최대 5개, 불러온 순서대로 화면 그림 칸에 들어가요.' }));
      } else if (c.op === 0xE0) {
        const sopts = Array.from({ length: S ? S.count : 0 }, (_, i) => [i, '#' + String(i).padStart(3, '0') + ' ' + sfxName(i)]);
        const s = sel(sopts, c.args[1], v => setArg(1, v));
        s.style.maxWidth = '300px';
        insp.append(field('효과음', s, el('button', { text: '▶', title: '이 소리만 듣기', onclick: () => { const cry = RomCry.decode(rom.data, RomCry.sfxOff(rom.data, S, c.args[1])); if (!cry.music) Player.playOnce(RomCry.render(cry, 0, 0x100)); } })));
        insp.append(field('나오는 쪽', sel([[0, '가운데'], [1, '왼쪽'], [2, '오른쪽'], [3, '가운데 (2)']], c.args[0] & 3, v => setArg(0, (c.args[0] & ~3) | v))));
        insp.append(el('div', { class: 'hint', text: '효과음 자체를 고치려면 [기술 사운드 에디터]에서 고쳐요.' }));
      } else if (c.op === 0xE1) {
        insp.append(field('음높이', numIn(c.args[0], 0, 255, v => setArg(0, v)), el('span', { class: 'hint', text: '쓰는 포켓몬의 울음소리를 이 높이로' })));
      } else if (c.op === 0xF0) {
        const s = sel(ANIM_BG_NAMES.map((_, i) => [i, '#' + String(i).padStart(2, '0') + ' ' + bgName(i) + (/미완성/.test(ANIM_BG_NAMES[i]) ? ' ⚠' : '')]), c.args[0], v => setArg(0, v));
        s.style.maxWidth = '300px';
        insp.append(field('화면 효과', s), field('대상', sel([[0, '맞는 쪽 (상대)'], [1, '쓰는 쪽 (나)']], c.args[2] ? 1 : 0, v => setArg(2, v))),
          field('세부 값', numIn(c.args[3], 0, 255, v => setArg(3, v)), el('span', { class: 'hint', text: '효과마다 뜻이 달라요 (세기·길이 등)' })),
          field('기타 값', numIn(c.args[1], 0, 255, v => setArg(1, v))));
      } else if (c.op === 0xFE) {
        const n = (share.calls.get(c.ext) || new Set()).size;
        insp.append(el('div', { class: 'hint', text: '여러 애니메이션이 같이 쓰는 동작 묶음이에요 (' + n + '개가 씀). 그대로 두면 같이 쓰고, 이 기술에서만 고치려면 아래 버튼으로 풀어서 넣으세요.' }),
          el('button', { text: '📦 이 기술 전용으로 풀어 넣기', onclick: () => inlineCall(st.sel) }));
      } else if (c.op === 0xFD) {
        insp.append(field('반복 횟수', numIn(c.args[0], 1, 255, v => setArg(0, v))), el('div', { class: 'hint', text: (c.target != null ? (c.target + 1) + '번 명령부터 여기까지를' : '') + ' 반복해요.' }));
      } else if (c.op === 0xFF) {
        insp.append(el('div', { class: 'hint', text: '애니메이션 끝이에요. 이 뒤에 명령을 넣으려면 바로 앞 명령을 고르고 [＋ 명령 넣기]를 쓰세요.' }));
      } else {
        const k = AnimScript.CMD[c.op];
        insp.append(el('div', { class: 'hint', text: '게임 엔진의 고급 명령이에요 (' + k.n + '). 잘 모르면 그대로 두는 게 안전해요.' }));
        c.args.forEach((v, j) => insp.append(field('값 ' + (j + 1), numIn(v, 0, 255, x => setArg(j, x)))));
      }
      // 공통 단추
      insp.append(el('div', { class: 'bar', style: 'margin-top:8px;border-top:1px solid var(--line);padding-top:6px' },
        el('button', { text: '▲', title: '위로', onclick: () => moveCmd(st.sel, -1) }), el('button', { text: '▼', title: '아래로', onclick: () => moveCmd(st.sel, 1) }),
        el('button', { text: '⧉ 복제', onclick: () => { if (c.op === 0xFF) return; insertAt(st.sel + 1, JSON.parse(JSON.stringify(Object.assign({}, c, { target: c.target })))); } }),
        el('button', { text: '🗑 지우기', onclick: () => removeAt(st.sel) })));
    };
    // 공용 동작 묶음을 이 기술 안으로 복사해 넣기 (ret 는 빼고, 그 안의 갈림은 다시 연결)
    const inlineCall = i => {
      const c = st.model.cmds[i], sub = AnimScript.parse(rom.data, bank, c.ext);
      if (sub.cmds.some(x => x.op === 0xFE)) { if (!confirm('이 묶음 안에 또 다른 공용 동작이 있어요. 그 부분은 공용으로 남겨요. 계속할까요?')) return; }
      snapshot();
      const body = sub.cmds.map(x => JSON.parse(JSON.stringify(x)));
      const n = body.length;
      // 묶음의 끝(ret)은 "다음 명령으로 이동"으로 바꿔서 원래 흐름으로 돌아가게
      body.forEach(x => { if (x.target != null) x.target += i; if (x.op === 0xFF) { x.op = 0xFC; x.args = []; x.target = i + n; } });
      st.model.cmds.splice(i, 1, ...body);
      for (const x of st.model.cmds.slice(0, i).concat(st.model.cmds.slice(i + n))) if (x.target != null && x.target > i) x.target += n - 1;
      // 마지막 이동이 바로 다음이면 지움 (불필요)
      if (st.model.cmds[i + n - 1] && st.model.cmds[i + n - 1].op === 0xFC && st.model.cmds[i + n - 1].target === i + n) { st.model.cmds.splice(i + n - 1, 1); AnimScript.fixTargets(st.model, i + n, -1); }
      changed();
    };

    // ---------------------------------------------------------------- 다른 기술에서 효과 가져오기
    const importFrom = () => {
      const items = this.moveOptions().slice(1).map(([v, t]) => [v, t]);
      const pick = sel(items, st.move === 1 ? 2 : 1, v => showSrc(v));
      pick.style.maxWidth = '260px';
      const box = el('div', { style: 'max-height:320px;overflow:auto;border:1px solid var(--line);background:#fff;padding:4px' });
      let src = null, checks = [];
      const showSrc = m => {
        const e = W(mv.tab + m * 2); src = AnimScript.parse(rom.data, bank, e);
        box.replaceChildren(); checks = [];
        src.cmds.forEach((c, i) => {
          const [ic, t] = describe(c, i), [cb, lb] = check(ic + ' ' + t, c.op === 0xD0 || c.op === 0xE0 || c.op <= 0xCF || c.op === 0xF0);
          if (c.op === 0xFF || c.target != null) { cb.checked = false; cb.disabled = true; }
          checks.push(cb); box.append(el('div', null, lb));
        });
      };
      showSrc(+pick.value);
      let close;
      close = this.dialog('다른 기술에서 효과 가져오기', () => el('div', null,
        el('div', { class: 'bar' }, el('span', { text: '가져올 기술:' }), pick),
        el('div', { class: 'hint', text: '가져올 명령을 체크하세요. 지금 고른 명령 뒤에 그대로 들어가고, 필요한 그림 불러오기는 자동으로 더해요. (이동·반복 같은 흐름 명령은 빼요)' }), box,
        el('div', { class: 'bar', style: 'justify-content:flex-end;margin-top:8px' }, el('button', { text: '취소', onclick: () => close() }),
          el('button', { class: 'apply', text: '✅ 넣기', onclick: () => {
            const add = src.cmds.filter((c, i) => checks[i].checked).map(c => { const x = JSON.parse(JSON.stringify(c)); delete x.addr; return x; });
            if (!add.length) { close(); return; }
            snapshot();
            const at = Math.min(st.sel + 1, st.model.cmds.length - 1);
            AnimScript.fixTargets(st.model, at, add.length);
            st.model.cmds.splice(at, 0, ...add);
            let full = false;
            const n0 = st.model.cmds.length;
            for (const c of add) if (c.op === 0xD0 && !ensureGfx((objInfo(c.args[0]) || {}).gfx)) full = true;
            st.sel = at + (st.model.cmds.length - n0); close(); changed();
            if (full) alert('그림 불러오기 칸이 꽉 차서 일부 물체 그림을 더하지 못했어요 (최대 5개). 미리보기에서 확인하세요.');
          } }))), null, true);
    };

    // ---------------------------------------------------------------- 명령 여러 개 지우기 (체크해서 한꺼번에 · 모두 지우기)
    const bulkDelete = () => {
      if (!st.model) return;
      pause();
      const box = el('div', { style: 'max-height:380px;overflow:auto;border:1px solid var(--line);background:#fff;padding:4px' });
      const checks = [];
      const KIND = c => c.op <= 0xCF ? 'wait' : AnimScript.CMD[c.op].k;
      st.model.cmds.forEach((c, i) => {
        const [ic, t] = describe(c, i), [cb, lb] = check((i + 1) + '. ' + ic + ' ' + t, false);
        const isEnd = c.op === 0xFF && i === st.model.cmds.length - 1;
        if (isEnd) { cb.disabled = true; lb.title = '마지막 "끝"은 남겨야 해요'; }
        checks.push(cb);
        box.append(el('div', { style: isEnd ? 'color:var(--sub)' : '' }, lb));
      });
      const count = el('b');
      const upd = () => { count.textContent = checks.filter(c => c.checked).length + '개 고름'; };
      checks.forEach(c => c.addEventListener('change', upd)); upd();
      const pickKind = k => { st.model.cmds.forEach((c, i) => { if (!checks[i].disabled && KIND(c) === k) checks[i].checked = true; }); upd(); };
      const setAll = v => { checks.forEach(c => { if (!c.disabled) c.checked = v; }); upd(); };
      const doDelete = () => {
        const del = new Set(checks.map((c, i) => c.checked ? i : -1).filter(i => i >= 0));
        if (!del.size) { close(); return; }
        snapshot();
        // 남는 명령의 새 번호 · 지운 명령을 가리키던 갈림은 그 뒤에 남는 첫 명령으로
        const keep = st.model.cmds.map((_, i) => i).filter(i => !del.has(i)), newIdx = new Map(keep.map((i, k) => [i, k]));
        const after = i => { for (let j = i; j < st.model.cmds.length; j++) if (newIdx.has(j)) return newIdx.get(j); return keep.length - 1; };
        st.model.cmds = keep.map(i => { const c = st.model.cmds[i]; if (c.target != null) c.target = after(c.target); return c; });
        if (!st.model.cmds.length || !AnimScript.ends(st.model.cmds[st.model.cmds.length - 1].op)) st.model.cmds.push({ op: 0xFF, args: [] });
        st.sel = Math.min(st.sel, st.model.cmds.length - 1);
        close(); changed();
        this.say(del.size + '개 명령을 지웠어요. [되돌리기]로 되살릴 수 있어요.');
      };
      let close;
      close = this.dialog('명령 여러 개 지우기 · ' + rom.moveName(st.move), () => el('div', null,
        el('div', { class: 'hint', text: '지울 명령을 체크하세요. 마지막 "끝"은 남아요. 지운 뒤에도 [↶ 되돌리기]로 되살릴 수 있어요.' }),
        el('div', { class: 'bar', style: 'margin:6px 0' },
          el('button', { text: '모두 체크', onclick: () => setAll(true) }), el('button', { text: '모두 해제', onclick: () => setAll(false) }),
          el('span', { class: 'hint', text: '종류별로 체크:' }),
          el('button', { text: '✨ 물체', onclick: () => pickKind('obj') }), el('button', { text: '🔊 효과음', onclick: () => pickKind('sound') }),
          el('button', { text: '🌈 화면 효과', onclick: () => pickKind('bg') }), el('button', { text: '⏳ 기다리기', onclick: () => pickKind('wait') }), count),
        box,
        el('div', { class: 'bar', style: 'justify-content:space-between;margin-top:8px' },
          el('button', { text: '🧹 모두 지우기 (끝만 남기기)', style: 'color:var(--warn)', onclick: () => { setAll(true); doDelete(); } }),
          el('span', { class: 'bar' }, el('button', { text: '취소', onclick: () => close() }), el('button', { class: 'apply', text: '🗑 체크한 명령 지우기', onclick: doDelete })))), null, true);
    };

    // ---------------------------------------------------------------- 기술 고르기 · 불러오기 · 저장
    const load = m => {
      pause();
      objName(0);   // 원래 쓰던 물체 목록을 고치기 전에 기억
      st.move = m;
      const e = W(mv.tab + m * 2);
      st.model = AnimScript.parse(rom.data, bank, e);
      const exclusive = st.model.addrs.every(a => (share.use.get(a) || 0) <= 1);
      const contiguous = st.model.cmds.every((c, i) => i === 0 || c.addr === st.model.cmds[i - 1].addr + AnimScript.lenOf(st.model.cmds[i - 1].op));
      st.base = { entry: e, size: AnimScript.size(st.model), exclusive, contiguous, addrs: st.model.addrs.slice() };
      st.model.cmds.forEach(c => delete c.addr);
      st.baseJson = JSON.stringify(st.model.cmds);
      st.undo = []; st.redo = []; updUndo();
      st.sel = 0; st.frame = 0; st.res = null;
      title.textContent = pad3(m) + ' ' + rom.moveName(m);
      shareNote.textContent = exclusive ? '' : 'ℹ 이 기술 애니메이션의 일부를 다른 애니메이션도 같이 써요. 저장하면 이 기술만 새 자리에 따로 저장돼서 다른 기술은 그대로예요.';
      updSize(); markDirty(); showList(); showInspector(); drawFrame();
      rerun();
    };
    const save = () => {
      const errs = AnimScript.check(st.model);
      if (errs.length) { alert('저장할 수 없어요:\n' + errs.join('\n')); return false; }
      const pl = placeFor(st.model);
      if (!pl) { alert('이 기술 데이터가 너무 커서 넣을 자리가 없어요.\n명령을 줄이거나 기다리기를 합쳐 주세요. (뱅크 빈 공간 ' + freeInBank() + '바이트)'); return false; }
      const enc = AnimScript.encode(st.model, pl.addr), off = bank * 0x4000 + (pl.addr & 0x3FFF);
      if (!pl.inPlace) {
        // 빈 곳에서 떼어 쓰고, 원래 자리가 이 기술 혼자 쓰던 곳이면 빈 곳으로 돌려줌
        for (const r of rom.free) if (r[0] === pl.off) { r[0] += enc.bytes.length; break; }
        if (st.base.exclusive && st.base.contiguous) rom.free.push([bank * 0x4000 + (st.base.entry & 0x3FFF), bank * 0x4000 + (st.base.entry & 0x3FFF) + st.base.size]);
      } else if (enc.bytes.length < st.base.size) {
        rom.free.push([off + enc.bytes.length, off + st.base.size]);
      }
      rom.data.set(enc.bytes, off);
      rom.data[mv.tab + st.move * 2] = pl.addr & 0xFF; rom.data[mv.tab + st.move * 2 + 1] = pl.addr >> 8;
      rom.dirty = true;
      this.say(rom.moveName(st.move) + ' 기술 애니메이션을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
      const keep = st.move;
      Object.assign(share, AnimScript.sharing(rom.data, mv.tab, animCount));
      load(keep);
      okNote.textContent = '✅ 롬에 넣었어요 (' + enc.bytes.length + '바이트' + (pl.inPlace ? ', 원래 자리' : ', 새 자리') + ')';
      setTimeout(() => okNote.textContent = '', 4000);
      return true;
    };
    const revert = () => { if (JSON.stringify(st.model.cmds) === st.baseJson) return; snapshot(); st.model.cmds = JSON.parse(st.baseJson); changed(); };

    // ---------------------------------------------------------------- 화면 짜기
    const title = el('b', { style: 'font-size:16px' }), shareNote = el('div', { class: 'hint' }), okNote = el('b', { style: 'color:var(--ok)' });
    const monOpts = this.monOptions(false).filter(o => o[0] > 0);
    const pSel = sel(monOpts, st.player, v => { st.player = v; rerun(true); }), eSel = sel(monOpts, st.enemy, v => { st.enemy = v; rerun(true); });
    pSel.style.maxWidth = eSel.style.maxWidth = '150px';
    const turnSel = sel([[0, '내가 쓰기 (나 → 상대)'], [1, '상대가 쓰기 (상대 → 나)']], 0, v => { st.turn = v; rerun(true); });
    const items = this.moveOptions().slice(1).map(([v, t]) => ({ value: v, label: t }));
    // 고친 내용이 있으면 툴 안에서 물어봄 (브라우저 확인창은 막히거나 놓치기 쉬워서)
    const askSwitch = (m) => {
      let close;
      close = this.dialog('적용하지 않은 변경이 있어요', () => el('div', null,
        el('div', { text: '"' + rom.moveName(st.move) + '" 애니메이션을 고친 내용이 아직 롬에 안 들어갔어요. 어떻게 할까요?' }),
        el('div', { class: 'bar', style: 'justify-content:flex-end;margin-top:12px' },
          el('button', { text: '취소 (계속 고치기)', onclick: () => { close(); list.select(st.move); } }),
          el('button', { text: '버리고 이동', onclick: () => { load(m); close(); } }),
          el('button', { class: 'apply', text: '💾 적용하고 이동', onclick: () => { if (save()) load(m); close(); } }))), () => list.select(st.move), true);
    };
    const list = listPanel(items, m => {
      if (m === st.move) return;
      if (st.model && JSON.stringify(st.model.cmds) !== st.baseJson) { askSwitch(m); return; }
      load(m);
    }, '기술 찾기', startMove || 1);
    const onKey = e => {
      if (!stage.isConnected) { document.removeEventListener('keydown', onKey, true); return; }
      if (/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
      if (e.key === ' ') { e.preventDefault(); e.stopPropagation(); st.playing ? pause() : play(); }
      else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); undo(); }
      else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') { e.preventDefault(); redo(); }
      else if (e.key === 'Delete') { e.preventDefault(); removeAt(st.sel); }
      else if (e.key === 'ArrowRight' && st.res) { e.preventDefault(); pause(); st.frame = Math.min(st.res.frames.length - 1, st.frame + 1); drawFrame(); }
      else if (e.key === 'ArrowLeft' && st.res) { e.preventDefault(); pause(); st.frame = Math.max(0, st.frame - 1); drawFrame(); }
      else if (e.key === 'Home') { e.preventDefault(); toStart(); }
    };
    document.addEventListener('keydown', onKey, true);
    const center = el('div', { style: 'display:flex;flex-direction:column;gap:6px;min-width:0' },
      el('div', { class: 'bar' }, title, dirtyNote, okNote),
      shareNote,
      el('div', { style: 'display:flex;gap:10px;align-items:flex-start;flex-wrap:wrap' },
        el('div', null, stage,
          el('div', { class: 'bar', style: 'margin-top:6px' }, el('button', { text: '⏮', title: '처음으로 (Home)', onclick: toStart }), playBtn, scrub),
          el('div', { class: 'bar' }, frameInfo, speedSel, loopL, sndL, marksL),
          el('div', { class: 'bar' }, el('span', { text: '내 포켓몬' }), pSel, el('span', { text: '상대' }), eSel),
          el('div', { class: 'bar' }, turnSel, runStatus)),
        el('div', { style: 'flex:1;min-width:300px;display:flex;flex-direction:column;gap:6px' },
          el('div', { class: 'bar' }, addMenu, el('button', { text: '📥 다른 기술에서 가져오기…', onclick: importFrom }), el('button', { text: '🗑 여러 개 지우기…', onclick: bulkDelete }), undoBtn, redoBtn),
          listBox, insp)),
      el('div', { class: 'hint', text: '🎞 시간표 — 아래 칸을 누르면 그 시간으로 가요 · 색 블록 = 그 시간에 실행되는 명령 (누르면 골라져요) · 스페이스바 = 재생/멈춤 · ←→ = 한 프레임씩 · Ctrl+Z / Ctrl+Y = 되돌리기 / 다시하기' }),
      tlWrap,
      el('div', { class: 'bar', style: 'margin-top:6px' }, el('button', { class: 'apply', text: '💾 적용 (롬에 넣기)', style: 'font-weight:bold', onclick: save }),
        el('button', { text: '↩ 원래대로', onclick: revert }), sizeInfo),
      el('div', { class: 'hint', text: '미리보기는 롬 안의 진짜 배틀 애니메이션 코드를 그대로 실행해서 보여줘요. 적용한 뒤 메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요. 금·은 엔진에 있는 명령만 쓸 수 있어서, 넣은 것은 실제 게임에서도 똑같이 돌아가요.' }));
    this.dialog('기술 애니메이션 편집기', () => el('div', { class: 'side', style: 'grid-template-columns:200px minmax(0,1fr)' }, list, center), () => { pause(); document.removeEventListener('keydown', onKey, true); }, false, true);
    // 처음부터 넓게
    const dlgs = this.host.querySelectorAll('.dlg'), dlg = dlgs[dlgs.length - 1];
    const wb = [...dlg.querySelectorAll('.dlg-head button')].find(b => b.textContent.includes('넓게'));
    if (wb) wb.click();
    load(startMove || 1);
  }
});

// ===== 99-bgm.js
// ================================================================ BGM 에디터 (BgmForm.cs) · 음악 파일 변환 창 (AudioImportForm.cs) · 게임에 넣기 창 (SongAssignForm.cs)
const PITCH_NAMES = ['쉼표', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const DRUM_NAMES = ['쉼표', '킥 (Kick)', '스네어 (Snare)', '하이햇 (HiHat)', '크래시 (Crash)'];
const durName = d => ({ 1: ' (16분)', 2: ' (8분)', 3: ' (점8분)', 4: ' (4분)', 6: ' (점4분)', 8: ' (2분)', 12: ' (점2분)', 16: ' (온음)' })[d] || '';

Object.assign(App.prototype, {
  _music: RomMusic, _audioConverter: AudioConverter,   // 자동 테스트용
  bgmEditor() {
    const rom = this.rom, a = this.area, n = RomMusic.songCount(rom.data);
    const st = { track: RomMusic.newTrack('새 BGM', 32, 130), ch: 0, sel: 0, mute: [false, false, false, false], romSamples: null, playing: false };
    const status = el('b', { style: 'color:var(--ok)' });
    const playBtn = el('button', { text: '▶ 전체 재생', style: 'font-weight:bold;background:#dcf5dc', onclick: () => play() });
    const stopBtn = el('button', { text: '■ 정지', style: 'font-weight:bold;background:#ffdcdc', onclick: () => pause() });
    const homeBtn = el('button', { text: '⏮ 처음으로', title: '빨간 줄을 맨 앞으로 (Home 키)', onclick: () => seek(0) });
    const bpmIn = num(130, 30, 400, v => { if (st.track.bpm !== v) markEdited(); st.track.bpm = v; });
    const stop = () => { Player.stop(); playBtn.style.background = '#dcf5dc'; };
    // 재생 위치 (스텝). 멈추면 그 자리에 서 있고, 다시 재생하면 거기서부터
    st.cursor = 0;
    const sps = () => { const t = st.track; return t.romSongId >= 0 && !t.edited ? RomMusic.FRAME_RATE / (st.unit || 1) : Math.max(30, Math.min(400, t.bpm)) * 4 / 60; };
    const nowStep = () => { const p = Player.pos(); return p >= 0 && st.stepsPerSec ? p * st.stepsPerSec : st.cursor; };
    const pause = () => { if (Player.playing) st.cursor = nowStep() % Math.max(1, st.track.totalSteps); stop(); };
    const seek = step => { st.cursor = Math.max(0, Math.min(st.track.totalSteps - 1, step)); if (Player.playing) play(); };
    const play = () => {
      stop();
      const t = st.track;
      let samples;
      if (t.romSongId >= 0 && !t.edited) {
        // 고치지 않은 원곡은 롬 데이터를 그대로 합성 (음소거한 채널만 빼고)
        if (st.mute.some(x => x)) { const r = RomMusic.render(rom.data, t.romSongId, st.mute, 240, t.romOriginal); samples = r && r.samples; }
        else samples = st.romSamples;
        st.stepsPerSec = RomMusic.FRAME_RATE / (st.unit || 1);   // 원곡: 프레임 → 스텝
      } else { samples = RomMusic.renderTrack(t, st.mute); st.stepsPerSec = Math.max(30, Math.min(400, t.bpm)) * 4 / 60; }
      if (!samples) return;
      Player.play(samples, false, st.cursor / sps()); playBtn.style.background = '#b4ffb4';
    };
    const markEdited = () => { if (st.track.edited) return; st.track.edited = true; if (st.track.romSongId >= 0) status.textContent = '✏ 편집본: 고친 음표로 재생돼요 (원곡 음색 일부 생략)'; };
    // 롬에 들어있는 진짜 BGM 을 불러와 원곡 그대로 재생 + 편집 표에 펼침. original: 곡 번호를 바꿨어도 처음 원곡
    const loadRomSong = (id, doPlay, original) => {
      stop(); st.cursor = 0;
      status.textContent = '불러오는 중…';
      setTimeout(() => {
        const r = RomMusic.render(rom.data, id, null, 240, original);
        if (!r) { status.textContent = '이 곡은 읽을 수 없어요'; return; }
        st.romSamples = r.samples; st.unit = r.unitFrames;
        st.track = RomMusic.toTrack(r, id); st.track.romOriginal = original;
        bpmIn.value = Math.max(30, Math.min(400, st.track.bpm));
        rebuildRows();
        const replaced = RomMusic.isReplaced(rom.data, id);
        status.textContent = original
          ? '🎶 원곡: [0x' + hex2(id) + '] ' + RomMusic.name(id) + (replaced ? '  ·  지금 게임에선 다른 곡으로 바뀌어 있어요 ([게임에 넣기]로 되돌릴 수 있어요)' : '  ·  게임 속 소리 그대로 재생돼요')
          : '🎶 지금 게임에서 나오는 곡: [0x' + hex2(id) + '] ' + RomMusic.name(id) + (replaced ? ' (바꾼 곡)' : '');
        if (doPlay) play();
      }, 10);
    };
    // 원곡 BGM 불러오기 (분류별)
    const preset = el('select', { style: 'max-width:260px' });
    preset.append(el('option', { value: '', text: '🎵 원곡 BGM 불러오기 ▼' }));
    for (const [g, ids] of RomMusic.groups) {
      const og = el('optgroup', { label: g });
      for (const id of ids) if (id < n) og.append(el('option', { value: id, text: '[0x' + hex2(id) + '] ' + RomMusic.name(id) }));
      preset.append(og);
    }
    const allG = el('optgroup', { label: '📋 전곡 (번호순)' });
    for (let id = 1; id < n; id++) allG.append(el('option', { value: id, text: '[0x' + hex2(id) + '] ' + RomMusic.name(id) }));
    preset.append(allG);
    preset.addEventListener('change', () => { if (preset.value) loadRomSong(+preset.value, true, true); preset.value = ''; });
    // 지금 구역 BGM
    const curBgm = a ? rom.areaMusic(a) : -1;
    const mapSel = sel(Array.from({ length: Math.max(0, n - 1) }, (_, i) => [i + 1, '[0x' + hex2(i + 1) + '] ' + RomMusic.name(i + 1)]), curBgm);
    mapSel.style.width = '230px';
    const top = el('div', { class: 'bar' }, playBtn, stopBtn, homeBtn, el('span', { text: '템포(BPM):' }), bpmIn, preset,
      el('button', { text: '🎧 MP3/MIDI 도트 변환 🌟', style: 'font-weight:bold;background:#dcf0ff', onclick: () => this.audioImportDialog(t => {
        stop(); st.cursor = 0; st.track = t; bpmIn.value = t.bpm; rebuildRows(); status.textContent = '가져온 곡: 편집본으로 재생돼요';
        alert('도트 칩튠으로 변환된 음악을 성공적으로 가져왔습니다!\n아래 건반과 표에서 음 하나하나를 자유롭게 수정할 수 있습니다.');
      }) }),
      el('b', { text: '현재 구역 BGM 지정:', style: 'margin-left:10px' }), mapSel,
      el('button', { text: '▶ 들어보기', onclick: () => loadRomSong(+mapSel.value, true, false) }),
      el('button', { text: '구역 BGM 적용', style: 'background:#ffe6a0', onclick: () => {
        if (!a) { alert('선택된 구역이 없습니다.'); return; }
        rom.setAreaMusic(a, +mapSel.value);
        alert("'" + a.regionName + ' (' + a.name + ")' 구역의 배경음악이 [" + RomMusic.name(+mapSel.value) + ']로 변경되었습니다!\n\n메인 화면에서 [저장하기]를 누르면 파일에 기록됩니다.');
        this.say(a.name + ' 배경음악 → ' + RomMusic.name(+mapSel.value) + '. [저장하기]를 눌러야 롬 파일에 기록돼요.');
      } }),
      el('button', { text: '🎮 지금 곡을 게임에 넣기 (타이틀·배틀·구역)...', style: 'font-weight:bold;background:#ffc878', onclick: () => { stop(); this.songAssignDialog(st.track, a, (id, msg) => {
        if (st.track.romSongId < 0 || st.track.edited) {
          // 새로 써 넣은 곡을 다시 읽어서, 이제부터는 롬에 들어간 그대로 재생
          const r = RomMusic.render(rom.data, id, null);
          if (r) { st.romSamples = r.samples; st.unit = r.unitFrames; st.track.romSongId = id; st.track.edited = false; st.track.romOriginal = false; }
        }
        mapSel.value = id;
        status.textContent = '🎮 게임에 곡을 넣었어요 · [저장하기]를 눌러야 기록돼요';
        alert(msg);
      }); } }), status);
    // 채널 탭
    const chNames = ['🔊 CH1: 리드 멜로디 (사각파)', '🎵 CH2: 화음·서브 (사각파)', '🎸 CH3: 베이스 라인 (웨이브)', '🥁 CH4: 퍼커션/드럼 (노이즈)'];
    let drawRoll = () => {};
    const chBtns = chNames.map((nm, i) => el('button', { text: nm, onclick: () => { st.ch = i; showCh(); updateGrid(); } }));
    const showCh = () => chBtns.forEach((b, i) => { b.style.background = i === st.ch ? '#fff' : '#ebebeb'; b.style.fontWeight = i === st.ch ? 'bold' : ''; });
    const chBar = el('div', { class: 'bar', style: 'background:#e4e8f0;padding:4px;border-radius:4px' });
    chBtns.forEach((b, i) => { const [m, ml] = check('Mute', false); m.addEventListener('change', () => st.mute[i] = m.checked); chBar.append(b, ml); });
    // 스텝 표
    const tbody = el('tbody');
    const grid = el('div', { style: 'max-height:42vh;overflow:auto;border:1px solid var(--line);background:#fff' },
      el('table', { class: 'grid', style: 'width:100%' }, el('thead', null, el('tr', null, ...['스텝', '음표 / 드럼', '옥타브', '길이 (스텝)', '볼륨 (1~15)'].map(t => el('th', { text: t, style: 'position:sticky;top:0;background:#f4f4f4' })))), tbody));
    const chColor = ['#e6f5ff', '#ebffeb', '#fff5e6', '#ffebeb'];
    const rowCells = i => {
      const nt = st.track.channels[st.ch][i], drum = st.ch === 3;
      return [nt.pitch ? (drum ? (DRUM_NAMES[nt.pitch] || '드럼' + nt.pitch) : PITCH_NAMES[nt.pitch] + nt.octave) : '-',
        drum || !nt.pitch ? '-' : String(nt.octave), nt.pitch ? nt.duration + ' 스텝' + durName(nt.duration) : '', nt.pitch ? String(nt.volume) : ''];
    };
    const paintRow = i => {
      const tr = tbody.children[i]; if (!tr) return;
      const c = rowCells(i), nt = st.track.channels[st.ch][i];
      for (let k = 0; k < 4; k++) tr.children[k + 1].textContent = c[k];
      tr.children[1].style.background = nt.pitch ? chColor[st.ch] : '';
      tr.children[1].style.fontWeight = nt.pitch ? 'bold' : '';
      tr.style.outline = i === st.sel ? '2px solid var(--accent)' : '';
    };
    const rebuildRows = () => {
      tbody.replaceChildren();
      st.sel = 0;
      for (let i = 0; i < st.track.totalSteps; i++) {
        const tr = el('tr', { style: 'cursor:pointer' }, el('th', { text: '#' + String(i + 1).padStart(2, '0') }), el('td'), el('td'), el('td'), el('td'));
        tr.addEventListener('click', () => {
          const old = st.sel; st.sel = i; paintRow(old); paintRow(i); drawRoll(true);
          const nt = st.track.channels[st.ch][i];
          if (nt.pitch) Player.play(RomMusic.previewNote(st.ch, nt.pitch, nt.octave), true);
        });
        tbody.append(tr);
      }
      updateGrid();
    };
    const updateGrid = () => { for (let i = 0; i < st.track.totalSteps; i++) paintRow(i); drawRoll(); };
    const advance = () => { if (st.sel < st.track.totalSteps - 1) { const old = st.sel; st.sel++; paintRow(old); paintRow(st.sel); tbody.children[st.sel].scrollIntoView({ block: 'nearest' }); drawRoll(true); } };
    // 건반
    const durSel = sel([[1, '1스텝 (16분)'], [2, '2스텝 (8분)'], [4, '4스텝 (4분)'], [8, '8스텝 (2분)']], 1);
    const insertNote = (pitch, octave) => {
      const nt = st.track.channels[st.ch][st.sel];
      if (!nt) return;
      Object.assign(nt, { pitch, octave, duration: +durSel.value, volume: 12 });
      markEdited(); Player.play(RomMusic.previewNote(st.ch, pitch, octave), true); paintRow(st.sel); advance();
    };
    const insertDrum = type => {
      st.ch = 3; showCh(); updateGrid();
      const nt = st.track.channels[3][st.sel];
      if (!nt) return;
      Object.assign(nt, { pitch: type, duration: 1, volume: 14 });
      markEdited(); Player.play(RomMusic.previewNote(3, type, 0), true); paintRow(st.sel); advance();
    };
    const keys = el('div', { style: 'position:relative;height:110px;background:#3c3c41;border-radius:4px;overflow-x:auto;overflow-y:hidden' });
    const names = ['C', 'D', 'E', 'F', 'G', 'A', 'B'], white = [1, 3, 5, 6, 8, 10, 12], black = [2, 4, -1, 7, 9, 11, -1];
    let wx = 8;
    for (let oct = 3; oct <= 5; oct++) for (let w = 0; w < 7; w++) {
      const p = white[w], o = oct;
      keys.append(el('button', { text: names[w] + oct, style: 'position:absolute;left:' + wx + 'px;top:8px;width:36px;height:94px;background:#fff;color:#000;font:bold 11px Arial;padding:0;display:flex;align-items:flex-end;justify-content:center;border-radius:0 0 4px 4px', onclick: () => insertNote(p, o) }));
      if (black[w] > 0) { const bp = black[w]; keys.append(el('button', { style: 'position:absolute;left:' + (wx + 24) + 'px;top:8px;width:24px;height:58px;background:#000;border-color:#000;z-index:2;padding:0', onclick: () => insertNote(bp, o) })); }
      wx += 38;
    }
    ['🥁 킥', '🎯 스네어', '🔔 하이햇', '💥 크래시'].forEach((t, i) => keys.append(el('button', { text: t, style: 'position:absolute;left:' + (wx + 24 + Math.floor(i / 2) * 80) + 'px;top:' + (8 + (i % 2) * 48) + 'px;width:74px;height:44px;background:#ffebeb;font-weight:bold;padding:0', onclick: () => insertDrum(i + 1) })));
    const kbBar = el('div', { class: 'bar' }, el('b', { style: 'color:navy', text: '🎹 마우스로 건반을 누르면 음이 연주되고 현재 스텝에 바로 기록됩니다! [Delete: 쉼표]' }),
      el('button', { text: '현재 스텝 쉼표(지우기)', onclick: () => clearStep() }), el('span', { text: '음 길이:' }), durSel);
    const clearStep = () => { const nt = st.track.channels[st.ch][st.sel]; if (nt) { nt.pitch = 0; markEdited(); paintRow(st.sel); drawRoll(); } };
    // ---- 피아노 롤 (작곡 프로그램처럼): 가로 = 스텝, 세로 = 음 높이, 왼쪽 = 건반·음 이름
    // 막대 끌기: 위아래 = 음 높이 · 좌우 = 자리 옮기기 · 오른쪽 끝 = 길이 · 휠 = 볼륨 · 오른쪽 클릭 = 지우기 · 빈 곳 두 번 누르기 = 음 넣기
    const R_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'], R_BLACK = [1, 3, 6, 8, 10];
    const R_COLORS = [[47, 111, 236], [30, 135, 75], [200, 120, 20], [192, 57, 43]];
    const R_GUT = 50, R_DRUM_ROWS = 4, R_DRUM_H = 12;
    const rCanvas = el('canvas', { style: 'position:sticky;left:0;display:block' });
    // 재생 위치 선 (작곡 프로그램처럼 오른쪽으로 움직임)
    const rHead = el('div', { style: 'position:absolute;top:0;left:0;width:2px;background:#e8590c;box-shadow:0 0 3px #e8590c;pointer-events:none;display:none;z-index:3' });
    const rSpacer = el('div', { style: 'position:relative' }, rCanvas, rHead);
    const rWrap = el('div', { style: 'overflow-x:auto;flex:1;min-width:0' }, rSpacer);
    const rGut = el('canvas', { width: R_GUT, style: 'display:block;flex-shrink:0;border-right:1px solid var(--line)' });
    const rInfo = el('div', { class: 'hint', style: 'min-height:18px' });
    const rBox = el('div', { class: 'gsc-rollbox', style: 'display:flex;align-items:flex-start;border:1px solid var(--line);background:#fff;overflow-y:auto' }, rGut, rWrap);
    // 창 크기가 바뀌면 (넓게 보기 등) 다시 그림
    if (window.ResizeObserver) { let w = 0; new ResizeObserver(() => { if (rWrap.clientWidth !== w) { w = rWrap.clientWidth; rView = null; drawRoll(); } }).observe(rWrap); }
    const isWide = () => !!rBox.closest('.dlg.wide');
    const midiOfN = n => (n.octave + 1) * 12 + n.pitch - 1;
    const nameOf = m => R_NAMES[((m % 12) + 12) % 12] + (Math.floor(m / 12) - 1);
    const DRUM_SHORT = ['', '킥', '스네어', '하이햇', '크래시'];
    let rView = null, rDrag = null, rHits = [];
    // 실제로 울리는 길이 (다음 음이 나오면 거기서 끊김)
    const realDur = (l, s) => { let d = Math.max(1, Math.min(16, l[s].duration)); for (let k = s + 1; k < s + d && k < l.length; k++) if (l[k].pitch > 0) return k - s; return Math.min(d, st.track.totalSteps - s); };
    drawRoll = scrollToSel => {
      const t = st.track; if (!t) return;
      if (!rDrag || !rView) {
        let lo = 200, hi = -200;
        for (let c = 0; c < 3; c++) for (const n of t.channels[c]) if (n.pitch > 0) { const m = midiOfN(n); lo = Math.min(lo, m); hi = Math.max(hi, m); }
        if (lo > hi) { lo = 48; hi = 72; }
        lo -= 3; hi += 3;
        if (hi - lo < 24) { const c = Math.round((lo + hi) / 2); lo = c - 12; hi = c + 12; }
        lo = Math.max(24, lo); hi = Math.min(108, hi);
        const rowH = Math.max(9, Math.min(16, Math.floor((isWide() ? innerHeight * 0.58 : 340) / (hi - lo + 1))));   // 넘치면 위아래로 스크롤
        rView = { lo, hi, rowH, PX: 14, top: 2 };
      }
      const { lo, hi, rowH, PX, top } = rView, pianoH = (hi - lo + 1) * rowH, dTop = top + pianoH, H = dTop + R_DRUM_ROWS * R_DRUM_H + 14;
      const W = Math.max(200, rWrap.clientWidth || 600);
      rSpacer.style.width = (t.totalSteps * PX + 20) + 'px'; rSpacer.style.height = H + 'px'; rHead.style.height = H + 'px';
      if (rCanvas.width !== W) rCanvas.width = W;
      rCanvas.height = rGut.height = H;
      if (scrollToSel === true) { const x = st.sel * PX; if (x < rWrap.scrollLeft || x > rWrap.scrollLeft + W - 40) rWrap.scrollLeft = Math.max(0, x - W / 3); }
      const sx = rWrap.scrollLeft, s0 = Math.max(0, Math.floor(sx / PX) - 16), s1 = Math.min(t.totalSteps, Math.ceil((sx + W) / PX) + 1);
      const g = rCanvas.getContext('2d'), gg = rGut.getContext('2d');
      const yM = m => top + (hi - m) * rowH;
      g.fillStyle = '#fff'; g.fillRect(0, 0, W, H); gg.fillStyle = '#fff'; gg.fillRect(0, 0, R_GUT, H);
      for (let m = lo; m <= hi; m++) {
        const y = yM(m), black = R_BLACK.includes(((m % 12) + 12) % 12);
        if (black) { g.fillStyle = '#f2f4f8'; g.fillRect(0, y, W, rowH); }
        g.fillStyle = m % 12 === 0 ? '#c9ced6' : '#eceef2'; g.fillRect(0, y + rowH - 1, W, 1);
        gg.fillStyle = black ? '#333' : '#fff'; gg.fillRect(0, y, black ? 30 : R_GUT, rowH);
        gg.fillStyle = '#d0d0d0'; gg.fillRect(0, y + rowH - 1, R_GUT, 1);
        if (m % 12 === 0 || (rowH >= 9 && !black)) { gg.fillStyle = m % 12 === 0 ? '#000' : '#888'; gg.font = (m % 12 === 0 ? 'bold ' : '') + Math.min(11, rowH + 1) + 'px Arial'; gg.textBaseline = 'middle'; gg.fillText(nameOf(m), black ? 32 : 20, y + rowH / 2); }
      }
      g.fillStyle = '#f7f0ef'; g.fillRect(0, dTop, W, R_DRUM_ROWS * R_DRUM_H);
      gg.font = 'bold 10px Arial'; gg.textBaseline = 'middle';
      for (let k = 1; k <= R_DRUM_ROWS; k++) { const y = dTop + (k - 1) * R_DRUM_H; gg.fillStyle = '#f7f0ef'; gg.fillRect(0, y, R_GUT, R_DRUM_H); gg.fillStyle = '#c0392b'; gg.fillText(I18N.lang === 'en' ? ['', 'Kick', 'Snare', 'HiHat', 'Crash'][k] : DRUM_SHORT[k], 4, y + R_DRUM_H / 2); g.fillStyle = '#ead9d6'; g.fillRect(0, y + R_DRUM_H - 1, W, 1); }
      // 마디 줄 (16스텝) · 박 줄 (4스텝)
      for (let s = Math.floor(s0 / 4) * 4; s <= s1; s += 4) { g.fillStyle = s % 16 === 0 ? '#bfc5ce' : '#e3e6eb'; g.fillRect(s * PX - sx, 0, 1, H - 14); }
      g.fillStyle = '#888'; g.font = '9px Arial'; g.textBaseline = 'top';
      for (let s = Math.ceil(s0 / 16) * 16; s <= s1; s += 16) g.fillText(String(s / 16 + 1), s * PX - sx + 2, H - 12);
      // 고른 스텝
      g.fillStyle = 'rgba(47,111,236,.10)'; g.fillRect(st.sel * PX - sx, 0, PX, H - 14);
      rHits = [];
      let selM = null;
      const order = [0, 1, 2, 3].filter(c => c !== st.ch).concat([st.ch]);
      for (const c of order) {
        if (st.mute[c]) continue;
        const l = t.channels[c], mine = c === st.ch, col = R_COLORS[c];
        for (let s = s0; s < s1 && s < l.length; s++) {
          const n = l[s]; if (!n.pitch) continue;
          const d = realDur(l, s), x = s * PX - sx, w = d * PX - 1;
          let y, h, label;
          if (c === 3) { y = dTop + (Math.max(1, Math.min(4, n.pitch)) - 1) * R_DRUM_H + 1; h = R_DRUM_H - 2; label = ''; }
          else { const m = midiOfN(n); y = yM(m) + 1; h = rowH - 2; label = nameOf(m); }
          g.fillStyle = 'rgba(' + col.join(',') + ',' + ((mine ? 0.35 : 0.12) + (mine ? 0.65 : 0.28) * n.volume / 15) + ')';
          g.fillRect(x, y, w, h);
          if (mine) { g.fillStyle = 'rgb(' + col.join(',') + ')'; g.fillRect(x, y, 2, h); g.fillRect(x + w - 2, y, 2, h); }
          if (mine && s === st.sel) { g.strokeStyle = '#000'; g.lineWidth = 2; g.strokeRect(x - 1, y - 1, w + 2, h + 2); g.lineWidth = 1; if (c !== 3) selM = midiOfN(n); }
          if (mine && label && w > 22 && h >= 5) { g.fillStyle = n.volume > 7 ? '#fff' : '#000'; g.font = 'bold ' + Math.max(8, Math.min(11, h + 1)) + 'px Arial'; g.textBaseline = 'middle'; g.fillText(label, x + 4, y + h / 2 + 0.5); }
          rHits.push({ x: x + sx, y, w, h, c, s });
        }
      }
      if (selM != null && selM >= lo && selM <= hi) { gg.fillStyle = 'rgba(47,111,236,.45)'; gg.fillRect(0, yM(selM), R_GUT, rowH); }
    };
    rWrap.addEventListener('scroll', () => drawRoll());
    this.host.gscBgmRoll = () => ({ hits: rHits, canvas: rCanvas, wrap: rWrap });   // 자동 테스트용
    const rPos = e => { const r = rCanvas.getBoundingClientRect(); return [e.clientX - r.left + rWrap.scrollLeft, e.clientY - r.top]; };
    const rHit = (x, y) => { for (let k = rHits.length - 1; k >= 0; k--) { const h = rHits[k]; if (x >= h.x - 2 && x <= h.x + h.w + 2 && y >= h.y - 2 && y <= h.y + h.h + 2) return h; } return null; };
    const rDescribe = (c, s) => {
      const n = st.track.channels[c][s]; if (!n || !n.pitch) return '';
      return chNames[c].replace(/^\S+\s/, '') + ' · ' + (s + 1) + '번째 스텝 · ' + (c === 3 ? DRUM_NAMES[n.pitch] : nameOf(midiOfN(n))) + ' · 길이 ' + n.duration + '스텝 · 볼륨 ' + n.volume;
    };
    const selectStep = (c, s) => {
      if (c !== st.ch) { st.ch = c; showCh(); updateGrid(); }
      const old = st.sel; st.sel = s; paintRow(old); paintRow(s);
      if (tbody.children[s]) tbody.children[s].scrollIntoView({ block: 'nearest' });
    };
    const blank = c => ({ pitch: 0, octave: c === 2 ? 3 : 4, duration: 1, volume: 12 });
    const preview = (c, n) => Player.play(RomMusic.previewNote(c, n.pitch, n.octave), true);
    rCanvas.addEventListener('mousemove', e => {
      if (rDrag) return;
      const [x, y] = rPos(e), h = rHit(x, y);
      rCanvas.style.cursor = !h ? 'crosshair' : x > h.x + h.w - 6 ? 'ew-resize' : 'grab';
    });
    rCanvas.addEventListener('contextmenu', e => {
      const [x, y] = rPos(e), h = rHit(x, y);
      if (!h) return;
      e.preventDefault();
      selectStep(h.c, h.s); st.track.channels[h.c][h.s].pitch = 0; markEdited(); paintRow(h.s); drawRoll();
    });
    rCanvas.addEventListener('mousedown', e => {
      if (e.button !== 0) return;
      const [x, y] = rPos(e), h = rHit(x, y);
      if (!h) { seek(x / rView.PX); return; }   // 빈 곳 클릭 = 빨간 줄을 거기로
      e.preventDefault();
      selectStep(h.c, h.s);
      const l = st.track.channels[h.c], n = l[h.s];
      rDrag = { mode: x > h.x + h.w - 6 ? 'len' : 'move', c: h.c, s: h.s, x0: e.clientX, y0: e.clientY, snap: l.map(o => Object.assign({}, o)), note: Object.assign({}, n), m: h.c === 3 ? n.pitch : midiOfN(n), key: '', at: h.s };
      rCanvas.style.cursor = rDrag.mode === 'len' ? 'ew-resize' : 'grabbing';
      rInfo.textContent = rDescribe(h.c, h.s);
      preview(h.c, n);
      const move = ev => {
        const d = rDrag, dx = ev.clientX - d.x0, dy = ev.clientY - d.y0, L = st.track.channels[d.c];
        for (let i = 0; i < L.length; i++) Object.assign(L[i], d.snap[i]);   // 처음 상태에서 다시 계산
        let at = d.s;
        if (d.mode === 'len') L[d.s].duration = Math.max(1, Math.min(16, d.note.duration + Math.round(dx / rView.PX)));
        else {
          at = Math.max(0, Math.min(st.track.totalSteps - 1, d.s + Math.round(dx / rView.PX)));
          const nn = Object.assign({}, d.note);
          if (d.c === 3) nn.pitch = Math.max(1, Math.min(4, d.m + Math.round(dy / R_DRUM_H)));
          else { const m = Math.max(24, Math.min(107, d.m - Math.round(dy / rView.rowH))); nn.pitch = m % 12 + 1; nn.octave = Math.max(1, Math.min(7, Math.floor(m / 12) - 1)); }
          if (at !== d.s) Object.assign(L[d.s], blank(d.c));
          Object.assign(L[at], nn);
        }
        const key = at + ':' + L[at].pitch + ':' + L[at].octave + ':' + L[at].duration;
        if (key !== d.key) {
          const pitchChanged = d.key && key.split(':').slice(1, 3).join() !== d.key.split(':').slice(1, 3).join();
          d.key = key; d.at = at;
          const old = st.sel; st.sel = at; paintRow(old);
          drawRoll(); rInfo.textContent = rDescribe(d.c, at);
          if (pitchChanged) preview(d.c, L[at]);
        }
      };
      const up = () => {
        document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up);
        const d = rDrag; rDrag = null; rCanvas.style.cursor = 'grab';
        const L = st.track.channels[d.c], changed = L.some((o, i) => o.pitch !== d.snap[i].pitch || o.octave !== d.snap[i].octave || o.duration !== d.snap[i].duration);
        if (changed) { markEdited(); updateGrid(); }
        selectStep(d.c, d.at); drawRoll();
      };
      document.addEventListener('mousemove', move); document.addEventListener('mouseup', up);
    });
    rCanvas.addEventListener('wheel', e => {
      const [x, y] = rPos(e), h = rHit(x, y);
      if (!h) return;
      e.preventDefault();
      selectStep(h.c, h.s);
      const n = st.track.channels[h.c][h.s];
      n.volume = Math.max(1, Math.min(15, n.volume + (e.deltaY < 0 ? 1 : -1)));
      markEdited(); paintRow(h.s); drawRoll(); rInfo.textContent = rDescribe(h.c, h.s);
    }, { passive: false });
    rCanvas.addEventListener('dblclick', e => {
      const [x, y] = rPos(e);
      if (rHit(x, y)) return;
      const s = Math.max(0, Math.min(st.track.totalSteps - 1, Math.floor(x / rView.PX)));
      const pianoBottom = rView.top + (rView.hi - rView.lo + 1) * rView.rowH;
      let c = st.ch, n;
      if (y >= pianoBottom) { c = 3; n = { pitch: Math.max(1, Math.min(4, Math.floor((y - pianoBottom) / R_DRUM_H) + 1)), octave: 0, duration: 1, volume: 14 }; }
      else {
        if (c === 3) c = 0;
        const m = rView.hi - Math.floor((y - rView.top) / rView.rowH);
        n = { pitch: m % 12 + 1, octave: Math.max(1, Math.min(7, Math.floor(m / 12) - 1)), duration: +durSel.value, volume: 12 };
      }
      Object.assign(st.track.channels[c][s], n);
      markEdited(); selectStep(c, s); paintRow(s); drawRoll(); preview(c, n); rInfo.textContent = rDescribe(c, s);
    });
    const onKey = e => {
      if (e.key === 'Delete' && e.target.tagName !== 'INPUT') { e.preventDefault(); e.stopPropagation(); clearStep(); }
      // 스페이스바 = 재생 / 멈춤 (글자 칸에 쓰는 중이면 빼고)
      else if (e.key === ' ' && !/INPUT|SELECT|TEXTAREA/.test(e.target.tagName) && !e.target.isContentEditable) { e.preventDefault(); e.stopPropagation(); if (Player.playing) pause(); else play(); }
      else if (e.key === 'Home' && !/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) { e.preventDefault(); seek(0); }
    };
    // 재생 위치 선 움직이기 · 화면 밖으로 나가면 따라가기
    let alive = true;
    const tick = () => {
      if (!alive || (rBox.isConnected === false && st.shown)) { document.removeEventListener('keydown', onKey, true); return; }
      if (rBox.isConnected) st.shown = true;
      const t = Player.pos();
      if (!rView) rHead.style.display = 'none';
      else if (t < 0 || !st.stepsPerSec) {
        // 멈춰 있을 때: 멈춘 자리 (또는 클릭한 자리)에 서 있음
        if (!Player.playing) playBtn.style.background = '#dcf5dc';
        rHead.style.display = ''; rHead.style.left = st.cursor * rView.PX + 'px';
      } else {
        const x = t * st.stepsPerSec * rView.PX, W = rWrap.clientWidth;
        rHead.style.display = ''; rHead.style.left = x + 'px';
        if (x < rWrap.scrollLeft || x > rWrap.scrollLeft + W * 0.85) rWrap.scrollLeft = Math.max(0, x - W * 0.15);
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    document.addEventListener('keydown', onKey, true);
    grid.style.maxHeight = '26vh';
    const rollHint = el('div', { class: 'hint', text: '🎼 피아노 롤 — 막대를 위아래로 끌면 음 높이 · 좌우로 끌면 자리 옮기기 · 오른쪽 끝을 끌면 길이 · 마우스 휠 = 볼륨 · 오른쪽 클릭 = 지우기 · 빈 곳을 두 번 누르면 음 넣기 (아래 빨간 칸 = 드럼) · 진한 막대 = 지금 채널 · 빈 곳 클릭 = 재생 줄 옮기기 · 스페이스바 = 재생/멈춤 · Home = 처음으로' });
    this.dialog('포켓몬 2세대 BGM 칩튠 시퀀서 & 음표 에디터', () => el('div', null, top, chBar, rollHint, rBox, rInfo, grid, kbBar, keys), () => { alive = false; stop(); document.removeEventListener('keydown', onKey, true); }, false, true);
    showCh();
    // 처음엔 지금 구역의 BGM (없으면 연두마을) 을 원곡 그대로 불러옴
    if (n > 0) loadRomSong(curBgm > 0 && curBgm < n ? curBgm : 0x3C, false, false); else rebuildRows();
  },

  // ---------------------------------------------------------------- 음악 파일 → 칩튠 변환 창 (AudioImportForm)
  audioImportDialog(onDone) {
    let file = null, conv = null;
    const fileInfo = el('div', { class: 'hint', text: '선택된 파일 없음' }), result = el('div', { style: 'color:#1c3d9a;white-space:pre-line;margin:6px 0' }, '변환 준비 완료');
    const fileInput = el('input', { type: 'file', accept: 'audio/*,.mid,.midi', style: 'display:none' });
    const setFile = f => { file = f; fileInfo.textContent = '파일: ' + f.name + ' (' + (f.name.split('.').pop() || '').toUpperCase() + ')'; result.textContent = '파일이 선택되었습니다. [✨ 8비트 도트 칩튠으로 변환하기]를 누르세요.'; };
    fileInput.addEventListener('change', () => { if (fileInput.files[0]) setFile(fileInput.files[0]); });
    const [autoBpm, autoBpmL] = check('템포 자동 감지', true), [autoLen, autoLenL] = check('곡 전체 변환', true);
    const bpmIn = num(120, 30, 400), stepIn = num(64, 16, AudioConverter.MAX_STEPS), transIn = num(0, -24, 24);
    stepIn.step = 16; bpmIn.disabled = stepIn.disabled = true;
    autoBpm.addEventListener('change', () => bpmIn.disabled = autoBpm.checked);
    autoLen.addEventListener('change', () => stepIn.disabled = autoLen.checked);
    const previewBtn = el('button', { text: '▶ 변환 사운드 미리듣기', onclick: () => { if (conv) Player.play(RomMusic.renderTrack(conv)); } });
    const stopBtn = el('button', { text: '■ 정지', onclick: () => Player.stop() });
    const importBtn = el('button', { class: 'apply', text: '✅ BGM 에디터로 가져오기', style: 'font-weight:bold', onclick: () => { Player.stop(); close(); onDone(conv); } });
    previewBtn.disabled = stopBtn.disabled = importBtn.disabled = true;
    const convBtn = el('button', { text: '✨ 8비트 도트 칩튠으로 변환하기', style: 'font-weight:bold;background:#dcf5e6', onclick: async () => {
      if (!file) { alert('먼저 음악 파일을 선택해주세요.'); return; }
      convBtn.disabled = true;
      result.textContent = '오디오 멜로디와 비트를 분석하여 도트 칩튠 사운드로 변환하는 중...';
      try {
        const steps = autoLen.checked ? 0 : +stepIn.value, trans = +transIn.value, title = file.name.replace(/\.[^.]+$/, '');
        const buf = await file.arrayBuffer();
        if (/\.midi?$/i.test(file.name)) conv = AudioConverter.convertMidi(new Uint8Array(buf), title, steps, trans);
        else {
          result.textContent = '음악 파일을 여는 중…';
          const { x, rate } = await AudioConverter.decodeFile(buf);
          conv = await AudioConverter.convertAudio(x, rate, title, steps, autoBpm.checked ? 0 : +bpmIn.value, trans, m => result.textContent = m);
        }
        bpmIn.value = Math.max(30, Math.min(400, conv.bpm)); stepIn.value = Math.max(16, Math.min(AudioConverter.MAX_STEPS, conv.totalSteps));
        const cnt = ch => conv.channels[ch].filter(x => x.pitch > 0).length;
        result.textContent = '🎉 변환 성공! ' + AudioConverter.lastInfo + '\n[CH1 멜로디: ' + cnt(0) + '음, CH2 화음: ' + cnt(1) + '음, CH3 베이스: ' + cnt(2) + '음, CH4 드럼: ' + cnt(3) + '타]';
        previewBtn.disabled = stopBtn.disabled = importBtn.disabled = false;
        Player.play(RomMusic.renderTrack(conv));
      } catch (e) { console.error(e); alert('변환 중 오류가 발생했습니다: ' + e.message); result.textContent = '변환 실패: ' + e.message; }
      finally { convBtn.disabled = false; }
    } });
    const drop = el('div', { style: 'border:2px dashed var(--line);border-radius:8px;padding:14px;text-align:center;background:#fff' },
      el('button', { text: '📂 파일 찾기...', style: 'background:#ebf0ff', onclick: () => fileInput.click() }), el('div', { class: 'hint', text: '또는 여기에 끌어다 놓기' }), fileInput);
    drop.addEventListener('dragover', e => e.preventDefault());
    drop.addEventListener('drop', e => { e.preventDefault(); e.stopPropagation(); if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]); });
    let close;
    close = this.dialog('음악 파일 (MP3 · FLAC · WAV · OGG · M4A · MIDI …) → 8비트 도트 게임 칩튠 BGM 변환기', () => el('div', null,
      el('div', { style: 'font-weight:bold;color:#3b3b98;margin-bottom:10px;white-space:pre-line', text: '🎵 음악 파일(MP3, FLAC, WAV, OGG, M4A, MIDI 등)을 고르거나 끌어다 놓으세요.\n템포를 찾고 멜로디 · 화음 · 베이스 · 드럼을 나눠서 게임보이 4채널 칩튠으로 바꿔요.' }),
      el('b', { text: '1. 음악 파일 선택:' }), drop, fileInfo,
      el('fieldset', { style: 'margin-top:10px' }, el('legend', { text: '2. 변환 설정' }),
        el('div', { class: 'bar' }, autoBpmL, el('span', { text: 'BPM:' }), bpmIn, el('span', { class: 'hint', text: '박자가 어긋나면 끄고 직접 적으세요' })),
        el('div', { class: 'bar' }, autoLenL, el('span', { text: '스텝:' }), stepIn, el('span', { class: 'hint', text: '1스텝 = 16분음표 (최대 3분)' })),
        el('div', { class: 'bar' }, el('span', { text: '조옮김  반음:' }), transIn, el('span', { class: 'hint', text: '멜로디가 너무 낮거나 높을 때' }))),
      el('div', { class: 'bar', style: 'margin-top:10px' }, convBtn, previewBtn, stopBtn), result,
      el('div', { class: 'bar', style: 'justify-content:space-between' }, el('button', { text: '닫기', onclick: () => { Player.stop(); close(); } }), importBtn)), () => Player.stop(), true);
  },

  // ---------------------------------------------------------------- 이 곡을 게임에 넣기 창 (SongAssignForm)
  songAssignDialog(track, current, onDone) {
    const rom = this.rom, count = RomMusic.songCount(rom.data);
    const original = track.romSongId > 0 && !track.edited;
    const usage = rom.musicUsage(), chosen = new Set();
    const spare = [0x5B, 0x40, 0x4B, 0x5A, 0x3F, 0x1D, 0x55, 0x58];
    const slotText = id => '[0x' + hex2(id) + '] ' + RomMusic.name(id) + (RomMusic.isReplaced(rom.data, id) ? '  ★바뀜' : '') + (usage.get(id) ? '  · 지도 ' + usage.get(id) + '곳' : '') + (spare.includes(id) ? '  (덜 쓰는 곡)' : '');
    const slotSel = sel(Array.from({ length: count - 1 }, (_, i) => [i + 1, slotText(i + 1)]), original ? 0x01 : 0x5B);
    slotSel.style.width = '330px';
    const refreshSlots = () => { for (const o of slotSel.options) o.textContent = slotText(+o.value); };
    const [useSlot, useSlotL] = check(original ? '① 게임 속 이 음악을 이 곡으로 바꾸기 (구역 없이)' : '① 게임 속 이 음악을 이 곡으로 바꾸기', !original);
    useSlot.disabled = !original;   // 편집·가져온 곡은 음악 번호 하나에 꼭 써 넣어야 함
    useSlotL.style.fontWeight = 'bold';
    const warn = el('div', { style: 'color:#8b4513;margin-top:4px' });
    const updateWarn = () => {
      slotSel.disabled = !useSlot.checked;
      const id = +slotSel.value, u = usage.get(id) || 0;
      if (!useSlot.checked) { warn.textContent = '게임 속 음악은 그대로 두고, 아래에서 고른 구역의 배경음악만 바꿔요.'; return; }
      warn.textContent = u > 0 ? "⚠ 게임에서 '" + RomMusic.name(id) + "' 이(가) 나오던 곳 (지도 " + u + '곳 포함)에서 이제 새 곡이 나와요. 그 구역들의 원래 곡을 살리고 싶으면 다른 번호를 고르세요.'
        : "게임에서 '" + RomMusic.name(id) + "' 이(가) 나오는 장면에서 이제 새 곡이 나와요.";
    };
    slotSel.addEventListener('change', updateWarn); useSlot.addEventListener('change', updateWarn);
    const scenes = [['🎬 타이틀 화면', 0x01], ['📋 메인 메뉴', 0x54], ['🎞 오프닝', 0x52], ['🌿 야생 배틀', 0x29], ['⚔ 트레이너 배틀', 0x2A], ['🏅 관장 배틀', 0x2E], ['😠 라이벌 배틀', 0x30], ['🏥 포켓몬센터', 0x09], ['🚲 자전거', 0x13], ['🌊 파도타기', 0x21]];
    const quick = el('div', { class: 'bar' }, ...scenes.filter(s => s[1] < count).map(([t, id]) => el('button', { text: t, onclick: () => { if (!useSlot.disabled) useSlot.checked = true; slotSel.value = id; updateWarn(); } })));
    const restore = el('button', { text: '↩ 이 번호 원곡으로 되돌리기', style: 'background:#e1f0e1', onclick: () => {
      const id = +slotSel.value;
      if (!RomMusic.isReplaced(rom.data, id)) { alert("'" + RomMusic.name(id) + "' 은(는) 이미 원곡이에요."); return; }
      const err = rom.restoreSongSlot(id);
      if (err) { alert(err); return; }
      refreshSlots(); alert("게임 속 '" + RomMusic.name(id) + "' 음악을 원곡으로 되돌렸어요.\n\n메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요.");
    } });
    const restoreAll = el('button', { text: '↩ 모든 음악 원곡으로', onclick: () => {
      let k = 0;
      for (let id = 1; id < count; id++) if (RomMusic.isReplaced(rom.data, id) && !rom.restoreSongSlot(id)) k++;
      refreshSlots(); alert(k === 0 ? '바뀐 음악이 없어요. 모두 원곡이에요.' : '바꿨던 음악 ' + k + '개를 모두 원곡으로 되돌렸어요.\n\n메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요.');
    } });
    // 구역 고르기
    const q = el('input', { type: 'search', placeholder: '🔍 구역 찾기', style: 'width:180px' });
    const list = el('div', { style: 'max-height:36vh;overflow:auto;border:1px solid var(--line);background:#fff;padding:4px' });
    const title = el('span');
    const fill = () => {
      const s = q.value.trim();
      list.replaceChildren();
      for (const a of rom.allAreas) {
        const nm = a.regionName + ' ' + a.name;
        if (s && !nm.includes(s)) continue;
        const m = rom.areaMusic(a), [c, l] = check(nm + '   — 지금: ' + (m >= 0 ? RomMusic.name(m) : '?'), chosen.has(a));
        c.addEventListener('change', () => { if (c.checked) chosen.add(a); else chosen.delete(a); title.textContent = '(구역 ' + chosen.size + '곳 고름)'; });
        list.append(el('div', null, l));
      }
      title.textContent = '(구역 ' + chosen.size + '곳 고름)';
    };
    q.addEventListener('input', fill);
    let close;
    const apply = () => {
      const slot = useSlot.checked, slotId = +slotSel.value;
      if (!slot && !chosen.size) { alert('① 바꿀 게임 음악을 고르거나, ② 곡을 틀 구역을 하나 이상 고르세요.'); return; }
      const lines = [];
      let id;
      if (original) {
        id = track.romSongId;
        if (slot && (slotId !== id || (track.romOriginal && RomMusic.isReplaced(rom.data, id)))) {
          // 원곡은 데이터를 복사할 필요 없이 그 음악 번호가 같은 곡을 가리키게
          const perr = rom.setSongSlot(slotId, track.romOriginal ? RomMusic.originalOffset(rom.data, id) : RomMusic.songOffset(rom.data, id));
          if (perr) { alert(perr); return; }
          lines.push("게임 속 '" + RomMusic.name(slotId) + "' 음악이 이제 '" + RomMusic.name(id) + "' 원곡으로 나와요.");
        }
      } else {
        id = slotId;
        const err = rom.writeCustomSong(track, id);
        if (err) { alert('곡을 넣지 못했어요: ' + err); return; }
        lines.push("게임 속 '" + RomMusic.name(id) + "' 음악(0x" + hex2(id) + ")이 이제 '" + track.title + "' 로 나와요.");
      }
      // 원곡을 구역에 넣는데 그 곡 번호가 다른 곡으로 바뀌어 있으면, 원곡이 나오도록 그 번호를 되돌림
      if (original && track.romOriginal && chosen.size && RomMusic.isReplaced(rom.data, id)) {
        const rerr = rom.restoreSongSlot(id);
        if (rerr) { alert(rerr); return; }
        lines.push('곡 번호 0x' + hex2(id) + " 가 다른 곡으로 바뀌어 있어서 원곡 '" + RomMusic.name(id) + "' 으로 되돌렸어요.");
      }
      for (const a of chosen) rom.setAreaMusic(a, id);
      if (chosen.size) lines.push('구역 ' + chosen.size + '곳의 배경음악도 이 곡으로 바꿨어요.');
      close();
      this.say('게임에 곡을 넣었어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
      onDone(slot && original ? slotId : id, lines.join('\n') + '\n\n메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요.');
    };
    close = this.dialog('이 곡을 게임에 넣기', () => el('div', null,
      el('div', { style: 'font-weight:bold;color:#1c3d9a;font-size:15px', text: original ? '🎶 넣을 곡: 원곡 [0x' + hex2(track.romSongId) + '] ' + RomMusic.name(track.romSongId)
        : '🎶 넣을 곡: ' + track.title + ' (편집·가져온 곡, ' + track.totalSteps + '스텝 · 템포 ' + track.bpm + ')' }),
      el('div', { style: 'margin-top:10px' }, useSlotL), quick, el('div', { class: 'bar' }, slotSel, restore, restoreAll), warn,
      el('div', { style: 'font-weight:bold;margin-top:12px', text: '② (골라도 되고 안 골라도 돼요) 이 곡을 배경음악으로 틀 구역:' }),
      el('div', { class: 'bar' }, q,
        el('button', { text: '같은 지역 전체', onclick: () => { if (current) for (const a of rom.allAreas) if (a.regionName === current.regionName) chosen.add(a); fill(); } }),
        el('button', { text: '지금 곡과 같은 곡 쓰는 곳 전부', onclick: () => { if (current) { const m = rom.areaMusic(current); for (const a of rom.allAreas) if (rom.areaMusic(a) === m) chosen.add(a); } fill(); } }),
        el('button', { text: '모두 해제', onclick: () => { chosen.clear(); fill(); } }), title),
      list,
      el('div', { class: 'bar', style: 'justify-content:flex-end;margin-top:8px' }, el('button', { text: '취소', onclick: () => close() }), el('button', { class: 'apply', text: '✅ 게임에 넣기', style: 'font-weight:bold', onclick: apply }))));
    updateWarn(); fill();
  }
});

// ===== 99-blockpanel.js
// ================================================================ [지도 블록] 탭 (BlockPanel.cs · MapView 블록 칠하기와 같음)
Object.assign(App.prototype, {
  blkState() {
    if (!this.blk) this.blk = { area: null, blocks: [], sel: 0, stroke: [], undo: [], redo: [], okShared: new Set(), coll: false, painting: false, rectStart: null, hover: null, hoverText: '' };
    return this.blk;
  },
  blockDisplay(a) {
    const b = this.blkState(), rom = this.rom;
    if (b.area === a) return b;
    this.blockEndStroke(true);
    b.area = a; b.hoverText = ''; b.hover = null;
    b.blocks = a && rom.gfx.ok && rom.blocksValid(a) ? rom.gfx.renderBlocks(a, rom.blockCount(a)) : [];
    if (b.sel < 0 || b.sel >= b.blocks.length) b.sel = 0;
    return b;
  },
  describeBlock(blk) {
    const b = this.blk;
    if (!b || !b.area) return '';
    const c = this.rom.blockCollision(b.area, blk);
    return '블록 ' + blk + (c ? '  ·  충돌 ' + c.map(hex2).join(' ') : '');
  },

  pageBlock() {
    const rom = this.rom, a = this.area, b = this.blockDisplay(a);
    const box = el('div');
    if (!a || !b.blocks.length) { box.append(el('b', { text: !a ? '왼쪽에서 구역을 고르세요' : '이 구역은 블록을 편집할 수 없어요' })); return box; }
    const selPic = el('canvas', { width: 32, height: 32, style: 'width:64px;height:64px;image-rendering:pixelated;background:#282828' });
    selPic.getContext('2d').drawImage(b.blocks[b.sel], 0, 0);
    const [coll, collL] = check('지나갈 수 있는 곳 표시', b.coll);
    coll.addEventListener('change', () => { b.coll = coll.checked; this.drawMap(); this.setTab(T_BLOCK); });
    const undoBtn = el('button', { text: '되돌리기 (Ctrl+Z)', onclick: () => this.blockUndo() }); undoBtn.disabled = !b.undo.length;
    const redoBtn = el('button', { text: '다시하기 (Ctrl+Y)', onclick: () => this.blockRedo() }); redoBtn.disabled = !b.redo.length;
    box.append(el('div', { class: 'bar' }, selPic, el('b', { text: '고른 블록: ' + this.describeBlock(b.sel) }), collL, undoBtn, redoBtn),
      el('div', { class: 'hint', text: '아래에서 블록을 고르고 위 지도에 칠하세요.   왼쪽 클릭·드래그: 칠하기   Shift+드래그: 네모로 채우기   오른쪽 클릭: 지도에 있는 블록 집기\n블록마다 지나갈 수 있는지가 정해져 있어서, 블록을 바꾸면 충돌(벽·물·풀숲)도 같이 바뀌어요.' }));
    if (b.coll) {
      const lg = el('div', { class: 'bar', style: 'font-size:12.5px' });
      for (const [c, t] of [['rgb(230,40,40)', '못 지나감'], ['rgb(40,110,255)', '물'], ['rgb(40,220,60)', '풀숲'], ['rgb(200,60,255)', '문·계단·구멍'], ['rgb(255,210,0)', '턱']])
        lg.append(el('span', { style: 'display:inline-block;width:14px;height:14px;background:' + c }), el('span', { text: t, style: 'margin-right:8px' }));
      lg.append(el('span', { class: 'hint', text: '(색 없음: 걸을 수 있는 바닥)' }));
      box.append(lg);
    }
    const others = rom.sharingBlocks(a);
    if (others.length)
      box.append(el('div', { class: 'bar' }, el('span', { style: 'color:#e8590c', text: '⚠ 이 지도 모양은 다른 구역 ' + others.length + '곳(' + others.slice(0, 3).map(x => x.regionName + ' ' + x.name).join(', ') + (others.length > 3 ? ' 등' : '') + ')과 같이 써요. 고치면 모두 같이 바뀌어요.' }),
        el('button', { text: '이 구역만 따로 고치기', onclick: () => this.blockSeparate() })));
    this.blkHoverLabel = el('div', { class: 'hint', text: b.hoverText || ' ' });
    box.append(this.blkHoverLabel);
    // 블록 팔레트
    const pal = el('div', { style: 'background:#282828;border-radius:4px;padding:4px;display:grid;grid-template-columns:repeat(auto-fill,68px);gap:4px;max-height:360px;overflow:auto' });
    b.blocks.forEach((blk, i) => {
      const c = el('canvas', { width: 32, height: 32, title: this.describeBlock(i), style: 'width:64px;height:64px;image-rendering:pixelated;cursor:pointer;outline:' + (i === b.sel ? '3px solid red' : 'none') + ';outline-offset:1px' });
      c.getContext('2d').drawImage(blk, 0, 0);
      c.addEventListener('click', () => { b.sel = i; this.setTab(T_BLOCK); });
      c.addEventListener('mouseenter', () => { if (i !== b.sel) c.style.outline = '2px solid #fff'; });
      c.addEventListener('mouseleave', () => { if (i !== b.sel) c.style.outline = 'none'; });
      pal.append(c);
    });
    box.append(pal);
    setTimeout(() => { const s = pal.children[b.sel]; if (s) s.scrollIntoView({ block: 'nearest' }); }, 0);
    return box;
  },

  // ---------------------------------------------------------------- 지도 위 (drawMap 이 부름)
  drawBlockMode(g, T) {
    const a = this.area, b = this.blockDisplay(a), s = this.scale;
    // 블록을 칠할 때는 NPC 를 흐리게만 (표지판은 숨김)
    g.globalAlpha = 0.5;
    for (const o of a.extras.concat(a.owners)) if (o.x >= 0 && !o.isSign) { const sp = this.spriteImg(o.sprite, o.pal); if (sp) g.drawImage(sp, o.x * T, o.y * T, T, T); }
    g.globalAlpha = 1;
    if (b.coll) {
      for (let y = 0; y < a.height * 2; y++)
        for (let x = 0; x < a.width * 2; x++) {
          const c = collColor(this.rom.collisionAt(a, x, y));
          if (c) { g.fillStyle = c; g.fillRect(x * T, y * T, T, T); }
        }
    }
    const B = 32 * s;
    if (b.rectStart && b.hover) {
      const x0 = Math.min(b.rectStart[0], b.hover[0]), y0 = Math.min(b.rectStart[1], b.hover[1]);
      const x1 = Math.max(b.rectStart[0], b.hover[0]), y1 = Math.max(b.rectStart[1], b.hover[1]);
      g.fillStyle = 'rgba(255,255,0,.27)'; g.fillRect(x0 * B, y0 * B, (x1 - x0 + 1) * B, (y1 - y0 + 1) * B);
      g.strokeStyle = 'yellow'; g.lineWidth = 2; g.strokeRect(x0 * B, y0 * B, (x1 - x0 + 1) * B, (y1 - y0 + 1) * B);
    } else if (b.hover) { g.strokeStyle = '#fff'; g.lineWidth = 2; g.strokeRect(b.hover[0] * B + 1, b.hover[1] * B + 1, B - 2, B - 2); }
  },

  blockAt(e) {
    const a = this.area, r = this.canvas.getBoundingClientRect(), B = 32 * this.scale * (r.width / this.canvas.width);
    const x = Math.floor((e.clientX - r.left) / B), y = Math.floor((e.clientY - r.top) / B);
    return x >= 0 && y >= 0 && x < a.width && y < a.height ? [x, y] : null;
  },
  blockMouse(type, e) {
    const b = this.blockDisplay(this.area), p = type === 'mouseleave' ? null : this.blockAt(e);
    if (type === 'contextmenu') {
      e.preventDefault();
      if (p) { b.sel = this.rom.getBlock(this.area, p[0], p[1]); this.setTab(T_BLOCK); }
      return;
    }
    if (type === 'mousedown') {
      if (!p || e.button !== 0) return;
      e.preventDefault();
      if (e.shiftKey) { b.rectStart = p; b.hover = p; this.drawMap(); return; }
      b.painting = true; this.blockPaintAt(p[0], p[1]);
      return;
    }
    if (type === 'mousemove') {
      const changed = !p !== !b.hover || (p && b.hover && (p[0] !== b.hover[0] || p[1] !== b.hover[1]));
      if (!changed) return;
      b.hover = p;
      if (p) { b.hoverText = '지도 칸 (' + p[0] + ', ' + p[1] + ')  ·  ' + this.describeBlock(this.rom.getBlock(this.area, p[0], p[1])); if (this.blkHoverLabel) this.blkHoverLabel.textContent = b.hoverText; }
      if (b.painting && p) this.blockPaintAt(p[0], p[1]); else this.drawMap();
      return;
    }
    if (type === 'mouseup') {
      if (b.rectStart) {
        const q = p || b.hover;
        if (q) {
          const x0 = Math.min(b.rectStart[0], q[0]), y0 = Math.min(b.rectStart[1], q[1]), x1 = Math.max(b.rectStart[0], q[0]), y1 = Math.max(b.rectStart[1], q[1]);
          b.rectStart = null;
          for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) if (!this.blockPaintAt(x, y, true)) break;
        }
        b.rectStart = null;
        this.blockEndStroke(); this.drawMap();
      } else if (b.painting) { b.painting = false; this.blockEndStroke(); }
      return;
    }
    if (type === 'mouseleave' && !b.painting && !b.rectStart && b.hover) { b.hover = null; this.drawMap(); }
  },

  // 같이 쓰는 블록이면 처음 칠할 때 한 번 물어봄. 칠해도 되면 true
  blockConfirmShared() {
    const b = this.blk, a = b.area, off = this.rom.blocksOff(a);
    if (b.okShared.has(off)) return true;
    const others = this.rom.sharingBlocks(a);
    if (!others.length) { b.okShared.add(off); return true; }
    if (confirm('이 지도 모양은 다른 구역 ' + others.length + '곳과 같이 써요.\n\n[확인] 모두 같이 바꾸기\n[취소] 다른 방법 고르기')) { b.okShared.add(off); return true; }
    if (confirm('이 구역만 따로 고칠까요? (빈 공간에 복사)\n\n[확인] 이 구역만 따로 고치기\n[취소] 그만두기')) return this.blockSeparate();
    return false;
  },
  blockPaintAt(x, y, noRedraw) {
    const b = this.blk, a = b.area, rom = this.rom;
    if (!a || b.sel < 0) return false;
    if (!b.okShared.has(rom.blocksOff(a))) {
      const was = b.painting; b.painting = false;
      const go = this.blockConfirmShared();
      if (!go) { b.rectStart = null; return false; }
      b.painting = was;
    }
    if (rom.setBlock(a, x, y, b.sel, b.stroke)) {
      const base = this.mapBase(a);
      if (base) base.getContext('2d').drawImage(b.blocks[b.sel], x * 32, y * 32);
      if (!noRedraw) this.drawMap();
    }
    return true;
  },
  blockEndStroke(quiet) {
    const b = this.blk;
    if (!b || !b.stroke.length || !b.area) return;
    b.undo.push([b.area, b.stroke]); b.redo = [];
    const n = b.stroke.length;
    b.stroke = [];
    for (const x of this.rom.sharingBlocks(b.area)) this.mapCache.delete(x);
    this.say('블록 ' + n + '칸을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
    if (!quiet && this.tab === T_BLOCK) this.setTab(T_BLOCK);
  },
  blockRedrawAll() { this.mapCache = new Map(); this.drawMap(); if (this.tab === T_BLOCK) this.setTab(T_BLOCK); },
  blockUndo() {
    this.blockEndStroke();
    const b = this.blkState(), u = b.undo.pop();
    if (!u) { this.say('되돌릴 블록 편집이 없어요'); return; }
    this.rom.applyBlockLog(u[1], true); b.redo.push(u);
    this.blockRedrawAll();
    this.say('블록 ' + u[1].length + '칸을 되돌렸어요');
  },
  blockRedo() {
    const b = this.blkState(), u = b.redo.pop();
    if (!u) { this.say('다시 할 블록 편집이 없어요'); return; }
    this.rom.applyBlockLog(u[1], false); b.undo.push(u);
    this.blockRedrawAll();
    this.say('블록 ' + u[1].length + '칸을 다시 바꿨어요');
  },
  blockSeparate() {
    const b = this.blk, a = b && b.area;
    if (!a) return false;
    const err = this.rom.separateBlocks(a);
    if (err) { alert(err); return false; }
    b.okShared.add(this.rom.blocksOff(a));
    this.say('이 구역만 쓰는 지도 모양으로 복사했어요. 이제 다른 구역은 바뀌지 않아요.');
    if (this.tab === T_BLOCK) this.setTab(T_BLOCK);
    return true;
  }
});

// ===== 99-cry.js
// ================================================================ 울음소리 에디터 · 소리 파일 → 울음소리 변환 창
const CRY_CH_NAMES = { 4: '🔊 CH1 사각파', 5: '🎵 CH2 사각파', 6: '🎸 CH3 웨이브', 7: '🥁 CH4 노이즈' };
const CRY_DUTY = ['12.5%', '25%', '50%', '75%'];
// 기술 이름이 붙은 효과음 → 기술 번호 (이름은 롬에 들어 있는 기술 이름을 그대로 씀)
const SFX_MOVE = { POUND: 1, KARATE_CHOP: 2, DOUBLESLAP: 3, COMET_PUNCH: 4, MEGA_PUNCH: 5, PAY_DAY: 6, SCRATCH: 10, VICEGRIP: 11, RAZOR_WIND: 13, SWORDS_DANCE: 14, CUT: 15, WING_ATTACK: 17,
  WHIRLWIND: 18, FLY: 19, BIND: 20, VINE_WHIP: 22, STOMP: 23, DOUBLE_KICK: 24, MEGA_KICK: 25, JUMP_KICK: 26, HEADBUTT: 29, HORN_ATTACK: 30, TACKLE: 33, TAIL_WHIP: 39, POISON_STING: 40,
  LEER: 43, BITE: 44, SING: 47, SUPERSONIC: 48, EMBER: 52, WATER_GUN: 55, HYDRO_PUMP: 56, SURF: 57, PSYBEAM: 60, BUBBLEBEAM: 61, HYPER_BEAM: 63, PECK: 64, SUBMISSION: 66, STRENGTH: 70,
  THUNDERSHOCK: 84, THUNDER: 87, TOXIC: 92, PSYCHIC: 94, RAGE: 99, SCREECH: 103, METRONOME: 118, EGG_BOMB: 121, LICK: 122, BONE_CLUB: 125, KINESIS: 134, FLASH: 148, SHARPEN: 159,
  SKETCH: 166, THIEF: 168, SPIDER_WEB: 169, MIND_READER: 170, NIGHTMARE: 171, SNORE: 173, CURSE: 174, AEROBLAST: 177, SPITE: 180, PROTECT: 182, SWEET_KISS: 186, BELLY_DRUM: 187,
  SLUDGE_BOMB: 188, ZAP_CANNON: 192, FORESIGHT: 193, PERISH_SONG: 195, OUTRAGE: 200, SANDSTORM: 201, GIGA_DRAIN: 202, MILK_DRINK: 208, SPARK: 209, MEAN_LOOK: 212, ATTRACT: 213,
  HEAL_BELL: 215, RETURN: 216, PRESENT: 217, BATON_PASS: 226, ENCORE: 227, SWEET_SCENT: 230, MORNING_SUN: 234, MOONLIGHT: 236, RAIN_DANCE: 240, BEAT_UP: 251 };
// 그 밖의 효과음 한국어 이름 (한글판 롬일 때)
const SFX_KO = { DEX_FANFARE_50_79: '도감 팡파르 (50~79마리)', ITEM: '아이템 받음', CAUGHT_MON: '포켓몬을 잡았다', POKEBALLS_PLACED_ON_TABLE: '몬스터볼 탁자에 놓기', POTION: '상처약',
  FULL_HEAL: '회복', MENU: '메뉴', READ_TEXT: '글 넘김', READ_TEXT_2: '글 넘김 2', DEX_FANFARE_20_49: '도감 팡파르 (20~49마리)', DEX_FANFARE_80_109: '도감 팡파르 (80~109마리)', POISON: '독',
  GOT_SAFARI_BALLS: '사파리볼 받음', BOOT_PC: '컴퓨터 켜기', SHUT_DOWN_PC: '컴퓨터 끄기', CHOOSE_PC_OPTION: '컴퓨터 메뉴 고르기', ESCAPE_ROPE: '동굴탈출로프', PUSH_BUTTON: '버튼 누르기',
  SECOND_PART_OF_ITEMFINDER: '다우징머신 (뒷부분)', WARP_TO: '순간이동 (사라짐)', WARP_FROM: '순간이동 (나타남)', CHANGE_DEX_MODE: '도감 보기 바꾸기', JUMP_OVER_LEDGE: '턱 뛰어넘기',
  GRASS_RUSTLE: '풀숲 바스락', WRONG: '틀림', SQUEAK: '찍찍', BOAT: '배', WALL_OPEN: '벽 열림', PLACE_PUZZLE_PIECE_DOWN: '퍼즐 조각 놓기', ENTER_DOOR: '문 들어가기', SWITCH_POKEMON: '포켓몬 교체',
  TALLY: '계산', TRANSACTION: '사고팔기', EXIT_BUILDING: '건물 나가기', BUMP: '부딪힘', SAVE: '저장', POKEFLUTE: '포켓몬 피리', ELEVATOR_END: '엘리베이터 도착', THROW_BALL: '볼 던지기',
  BALL_POOF: '볼에서 나옴', FAINT: '기절', RUN: '도망', SLOT_MACHINE_START: '슬롯머신 시작', FANFARE: '팡파르', MOVE_PUZZLE_PIECE: '퍼즐 조각 옮기기', POWDER: '가루', CHARGE: '충전',
  SHINE: '반짝임', UNKNOWN_5F: '알 수 없음 5F', UNKNOWN_60: '알 수 없음 60', UNKNOWN_61: '알 수 없음 61', SWITCH_POCKETS: '가방 주머니 바꾸기', UNKNOWN_63: '알 수 없음 63', BURN: '화상',
  TITLE_SCREEN_ENTRANCE: '타이틀 화면 등장', UNKNOWN_66: '알 수 없음 66', GET_COIN_FROM_SLOTS: '슬롯 코인 받음', CALL: '전화 걸기', HANG_UP: '전화 끊기', NO_SIGNAL: '신호 없음',
  ELEVATOR: '엘리베이터', EXP_BAR: '경험치 막대', LEVEL_UP: '레벨 업', KEY_ITEM: '중요한 물건 받음', FANFARE_2: '팡파르 2', REGISTER_PHONE_NUMBER: '전화번호 등록', '3RD_PLACE': '3등',
  GET_EGG_UNUSED: '알 받음 (안 씀)', GET_EGG: '알 받음', MOVE_DELETED: '기술 잊음', '2ND_PLACE': '2등', '1ST_PLACE': '1등', CHOOSE_A_CARD: '카드 고르기', GET_TM: '기술머신 받음',
  GET_BADGE: '배지 받음', QUIT_SLOTS: '슬롯 그만두기', EGG_CRACK: '알 금 감', DEX_FANFARE_LESS_THAN_20: '도감 팡파르 (20마리 미만)', DEX_FANFARE_140_169: '도감 팡파르 (140~169마리)',
  DEX_FANFARE_170_199: '도감 팡파르 (170~199마리)', DEX_FANFARE_200_229: '도감 팡파르 (200~229마리)', DEX_FANFARE_230_PLUS: '도감 팡파르 (230마리 이상)', EVOLVED: '진화했다',
  MASTER_BALL: '마스터볼', EGG_HATCH: '알 부화', GS_INTRO_CHARIZARD_FIREBALL: '오프닝 리자몽 불꽃', GS_INTRO_POKEMON_APPEARS: '오프닝 포켓몬 등장', GAME_FREAK_LOGO_GS: '게임프리크 로고',
  NOT_VERY_EFFECTIVE: '효과가 별로인 공격', DAMAGE: '보통 공격', SUPER_EFFECTIVE: '효과가 굉장한 공격', BALL_BOUNCE: '볼 튀기', BALL_WOBBLE: '볼 흔들림', HIT_END_OF_EXP_BAR: '경험치 가득',
  GIVE_TRADEMON: '교환 보내기', GET_TRADEMON: '교환 받기', TRAIN_ARRIVED: '기차 도착', STOP_SLOT: '슬롯 멈춤', '2_BOOPS': '삐삐' };
const sfxTitle = n => n.toLowerCase().split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

Object.assign(App.prototype, {
  _cry: RomCry,   // 자동 테스트용
  // 기술 사운드 에디터 = 같은 화면에 효과음 표를 연결
  sfxEditor() { this.cryEditor(true); },
  cryEditor(sfxMode) {
    const rom = this.rom, d = rom.data, t = RomCry.find(d), S = sfxMode ? RomCry.findSfx(d) : null;
    if (!t) { alert('이 롬에서 울음소리 데이터를 찾지 못했어요.'); return; }
    if (sfxMode && !S) { alert('이 롬에서 효과음 데이터를 찾지 못했어요.'); return; }
    // 효과음 → 그 소리를 쓰는 기술들 [{ m, at }]
    const sfxUses = () => { const u = Array.from({ length: 256 }, () => []); if (S && S.moves) for (let m = 1; m <= 251; m++) for (const x of S.moves.byMove[m] || []) u[x.sfx].push({ m, at: x.at }); return u; };
    let SU = sfxUses();
    // 효과음 이름: 롬 언어대로 (기술 소리는 롬의 기술 이름, 그 밖은 한글판이면 한국어 · 아니면 영어)
    const koRom = rom.cs.kind === 'ko' || rom.cs.kind === 'koen';
    const sfxDisp = id => {
      const n = RomCry.sfxName(id), two = n.match(/^(.*)_2$/);
      if (SFX_MOVE[n]) return rom.moveName(SFX_MOVE[n]);
      if (two && SFX_MOVE[two[1]]) return rom.moveName(SFX_MOVE[two[1]]) + ' 2';
      return koRom && SFX_KO[n] ? SFX_KO[n] : sfxTitle(n);
    };
    const sfxLabel = id => '#' + String(id).padStart(3, '0') + ' ' + sfxDisp(id);
    // 이 소리를 쓰는 기술 이름 (소리 이름과 같은 건 빼고)
    const usedBy = (id, max) => { const own = sfxDisp(id).replace(/ 2$/, ''), l = [...new Set(SU[id].map(x => rom.moveName(x.m)))].filter(nm => nm !== own); return l.length ? ' — ' + (max && l.length > max ? l.slice(0, max).join(', ') + ' …' : l.join(', ')) : ''; };
    const sfxOpts = () => Array.from({ length: S ? S.count : 0 }, (_, i) => [i, sfxLabel(i) + usedBy(i, 2)]);
    const users = () => { const u = Array.from({ length: t.count }, () => []); for (let m = 1; m <= 251; m++) { const b = RomCry.header(d, t, m).base; if (b < t.count) u[b].push(m); } return u; };
    let U = users();
    const st = { mon: 0, h: null, cry: null, edited: false, ch: 0, sel: 0 };
    const err = el('div'), title = el('b', { style: 'font-size:15px' }), status = el('div', { class: 'hint' });
    // 재생 줄 자리 (프레임). 멈추면 거기 서 있고, 다시 재생하면 거기서부터. 끝까지 가면 출발한 자리로 돌아감
    let cursorF = 0;
    const play = (cry, h, fromCursor) => { Player.stop(); const s = RomCry.render(cry, h.pitch, h.length); if (s.length) Player.playOnce(s, fromCursor ? cursorF / RomMusic.FRAME_RATE : 0); };
    const pause = () => { const p = Player.pos(); if (p >= 0) cursorF = p * RomMusic.FRAME_RATE; Player.stop(); };
    const seekF = f => { cursorF = Math.max(0, f); if (Player.playing) play(st.cry, st.h, true); };
    const monLabel = m => pad3(m) + ' ' + rom.monName(m);
    const baseLabel = id => '#' + String(id).padStart(2, '0') + '  (' + (U[id].length ? U[id].slice(0, 3).map(m => rom.monName(m)).join(', ') + (U[id].length > 3 ? (I18N.lang === 'en' ? ' +' + (U[id].length - 3) + ' more' : ' 외 ' + (U[id].length - 3) + '마리') : '') : (I18N.lang === 'en' ? 'unused' : '쓰는 포켓몬 없음')) + ')';
    const baseOpts = () => Array.from({ length: t.count }, (_, i) => [i, baseLabel(i)]);
    const baseSel = sel(baseOpts(), 0, v => { st.h.base = v; st.cry = RomCry.decode(d, RomCry.baseOff(d, t, v)); st.edited = false; refresh(); play(st.cry, st.h); });
    baseSel.style.maxWidth = '360px';
    // 음높이 · 길이 (숫자 + 밀대)
    const pair = (min, max, key) => {
      const after = () => { markHeader(); if (key === 'pitch') rows(); };   // 표의 음 이름도 들리는 높이로
      const n = num(0, min, max, v => { st.h[key] = v; r.value = v; after(); });
      const r = el('input', { type: 'range', min, max, style: 'width:180px;vertical-align:middle' });
      r.addEventListener('input', () => { st.h[key] = +r.value; n.value = r.value; after(); });
      r.addEventListener('change', () => play(st.cry, st.h));
      return { n, r, set: v => { n.value = v; r.value = v; } };
    };
    const pitchIn = pair(-512, 512, 'pitch'), lenIn = pair(32, 768, 'length');
    const markHeader = () => { status.textContent = '(아직 적용 안 함)'; drawRoll(); };
    const copySel = sfxMode
      ? sel([[-1, '(다른 효과음 그대로 가져오기 ▼)']].concat(sfxOpts()), -1, id => {
        if (id < 0) return;
        st.cry = RomCry.decode(d, RomCry.sfxOff(d, S, id)); st.edited = true;
        copySel.value = -1; markHeader(); refresh(); play(st.cry, st.h);
      })
      : sel([[0, '(다른 포켓몬 울음소리 그대로 쓰기 ▼)']].concat(this.monOptions(false).filter(o => o[0] > 0)), 0, m => {
        if (!m) return;
        st.h = RomCry.header(d, t, m); st.cry = RomCry.decode(d, RomCry.baseOff(d, t, st.h.base)); st.edited = false;
        copySel.value = 0; markHeader(); refresh(); play(st.cry, st.h);
      });
    copySel.style.maxWidth = '260px';
    // 음표 표
    const chBar = el('div', { class: 'bar', style: 'background:#e4e8f0;padding:4px;border-radius:4px' });
    const tbody = el('tbody');
    const grid = el('div', { style: 'max-height:34vh;overflow:auto;border:1px solid var(--line);background:#fff' },
      el('table', { class: 'grid', style: 'width:100%' }, el('thead', null, el('tr', null, ...['#', '길이 (프레임)', '볼륨 (0~15)', '볼륨 변화 (−7~7)', '소리 높이', '음색', ''].map(s => el('th', { text: s, style: 'position:sticky;top:0;background:#f4f4f4' })))), tbody));
    const edit = () => {
      if (!st.edited) { st.edited = true; if (!sfxMode) slotSel.value = pickSlot(); }
      markHeader(); if (!sfxMode) { slotRow.style.display = ''; updateSlot(); } drawRoll();
    };
    const fade = n => (n.env & 7) * ((n.env & 8) ? 1 : -1);
    const cur = () => st.cry.channels[st.ch];
    const isNoise = c => c && (c.id & 3) === 3;
    const cloneNote = n => Object.assign({}, n, { pattern: n.pattern && n.pattern.slice() });
    // 음 하나만 들려주기 (이 포켓몬의 음높이·길이 그대로)
    const playNote = n => { const c = cur(); if (!c || !n) return; Player.stop(); const s = RomCry.render({ channels: [{ id: c.id, notes: [n] }] }, st.h.pitch, st.h.length); if (s.length) Player.play(s, true); };
    const select = (i, scroll) => {
      const old = tbody.children[st.sel]; if (old) old.style.outline = '';
      st.sel = i;
      const tr = tbody.children[i];
      if (tr) { tr.style.outline = '2px solid var(--accent)'; if (scroll) tr.scrollIntoView({ block: 'nearest' }); }
      drawRoll();
    };
    const rows = () => {
      tbody.replaceChildren();
      const c = cur();
      if (!c) return;
      const noise = isNoise(c);
      st.sel = Math.max(0, Math.min(st.sel, c.notes.length - 1));
      c.notes.forEach((n, i) => {
        const hz = el('span', { class: 'hint' });
        // 음 이름은 이 포켓몬의 음높이를 더한, 실제로 들리는 높이
        const showHz = () => { hz.textContent = noise ? ' ' + noiseName((n.freq + st.h.pitch) & 0xFF) : ' ' + regName((n.freq + st.h.pitch) & 0x7FF); };
        const lenN = num(n.len + 1, 1, 64, v => { n.len = v - 1; edit(); });
        const volN = num(n.env >> 4, 0, 15, v => { n.env = (v << 4) | (n.env & 15); edit(); });
        const fadeN = num(fade(n), -7, 7, v => { n.env = (n.env & 0xF0) | (v > 0 ? 8 | v : -v); edit(); });
        const frN = num(noise ? n.freq & 0xFF : n.freq & 0x7FF, 0, noise ? 255 : 2047, v => { n.freq = v; showHz(); edit(); });
        const dutyS = noise ? el('span', { text: '-' }) : sel(CRY_DUTY.map((s, k) => [k, s]).concat(n.pattern ? [[9, '바뀜 ' + n.pattern.map(k => CRY_DUTY[k]).join('→')]] : []), n.pattern ? 9 : n.duty, v => { if (v < 4) { n.duty = v; n.pattern = null; } edit(); });
        [lenN, volN, fadeN, frN].forEach(x => x.style.width = '64px');
        showHz();
        const tr = el('tr', { style: 'cursor:pointer' }, el('th', { text: String(i + 1) }), el('td', null, lenN), el('td', null, volN), el('td', null, fadeN), el('td', null, frN, hz), el('td', null, dutyS),
          el('td', null, el('button', { text: '▶', title: '이 음만 듣기', onclick: () => playNote(n) })));
        tr.addEventListener('mousedown', () => { if (st.sel !== i) select(i); });
        tbody.append(tr);
      });
      if (!c.notes.length) tbody.append(el('tr', null, el('td', { colspan: 7, class: 'hint', text: '음이 없어요. 아래 건반을 누르면 음이 들어가요' })));
      select(st.sel);
      pianoBox.style.display = noise ? 'none' : '';
      noiseBox.style.display = noise ? '' : 'none';
    };
    const chTabs = () => {
      chBar.replaceChildren(...st.cry.channels.map((c, i) => el('button', { text: (CRY_CH_NAMES[c.id] || 'CH' + c.id) + ' · ' + c.notes.length + '음', style: i === st.ch ? 'background:#fff;font-weight:bold' : 'background:#ebebeb', onclick: () => { if (st.ch !== i) { st.ch = i; st.sel = 0; chTabs(); rows(); } } })));
    };
    const reflow = () => { chTabs(); rows(); };
    // 소리 높이 ↔ 음 이름
    const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const regHz = r => 131072 / (2048 - (r & 0x7FF));
    const regName = r => { const hz = regHz(r), m = Math.round(69 + 12 * Math.log2(hz / 440)); return NOTE_NAMES[((m % 12) + 12) % 12] + (Math.floor(m / 12) - 1) + ' (' + Math.round(hz) + 'Hz)'; };
    const midiReg = m => Math.max(0, Math.min(2047, Math.round(2048 - 131072 / (440 * Math.pow(2, (m - 69) / 12)))));
    const NOISE_PADS = [[0x10, '쉭 (아주 높음)'], [0x21, '치익'], [0x32, '스윽'], [0x43, '샤아'], [0x54, '쏴아'], [0x65, '후우'], [0x76, '부우'], [0x87, '쿠웅 (아주 낮음)']];
    const noiseName = v => { let best = NOISE_PADS[0]; for (const p of NOISE_PADS) if (Math.abs((p[0] >> 4) - (v >> 4)) < Math.abs((best[0] >> 4) - (v >> 4))) best = p; return '≈ ' + best[1]; };
    // 건반·노이즈 버튼: 고른 음 바꾸기 또는 뒤에 새 음 넣기
    const modeSel = sel([[0, '고른 음의 높이 바꾸기'], [1, '고른 음 뒤에 새 음 넣기']], 0);
    const newLen = sel([[1, '1프레임'], [2, '2프레임'], [3, '3프레임'], [4, '4프레임'], [6, '6프레임'], [8, '8프레임'], [12, '12프레임'], [16, '16프레임']], 4);
    const newVol = num(12, 0, 15), newFade = num(-1, -7, 7);
    newVol.style.width = newFade.style.width = '56px';
    const press = (freq, isNoiseKey) => {
      const c = cur();
      if (!c || isNoise(c) !== isNoiseKey) return;
      const v = +newVol.value, f = +newFade.value, env = (v << 4) | (f > 0 ? 8 | f : -f);
      freq = isNoiseKey ? (freq - st.h.pitch) & 0xFF : Math.max(0, Math.min(2047, freq - st.h.pitch));   // 누른 높이 그대로 들리게
      let n = c.notes[st.sel];
      if (+modeSel.value === 0 && n) n.freq = freq;
      else {
        n = n ? Object.assign(cloneNote(n), { freq, len: +newLen.value - 1, env }) : { len: +newLen.value - 1, env, freq, duty: 2, pattern: null, sweep: 0 };
        c.notes.splice(c.notes.length ? st.sel + 1 : 0, 0, n);
        if (c.notes.length > 1) st.sel++;
      }
      edit(); reflow(); select(st.sel, true); playNote(n);
    };
    const pianoBox = el('div', { style: 'position:relative;height:96px;background:#3c3c41;border-radius:4px;overflow-x:auto;overflow-y:hidden' });
    {
      const white = [0, 2, 4, 5, 7, 9, 11], black = [1, 3, -1, 6, 8, 10, -1];
      let wx = 6;
      for (let oct = 2; oct <= 6; oct++) for (let w = 0; w < 7; w++) {
        const m = (oct + 1) * 12 + white[w];
        pianoBox.append(el('button', { text: NOTE_NAMES[white[w]] + oct, style: 'position:absolute;left:' + wx + 'px;top:6px;width:28px;height:84px;background:#fff;color:#000;font:bold 10px Arial;padding:0;display:flex;align-items:flex-end;justify-content:center;border-radius:0 0 4px 4px', onclick: () => press(midiReg(m), false) }));
        if (black[w] > 0) { const bm = (oct + 1) * 12 + black[w]; pianoBox.append(el('button', { style: 'position:absolute;left:' + (wx + 19) + 'px;top:6px;width:18px;height:52px;background:#000;border-color:#000;z-index:2;padding:0', onclick: () => press(midiReg(bm), false) })); }
        wx += 30;
      }
    }
    const noiseBox = el('div', { class: 'bar', style: 'display:none;background:#3c3c41;border-radius:4px;padding:8px' },
      ...NOISE_PADS.map(([v, s]) => el('button', { text: '🥁 ' + s, style: 'background:#ffebeb;font-weight:bold', onclick: () => press(v, true) })));
    // 고른 음 다루기
    const tools = el('div', { class: 'bar' },
      el('button', { text: '＋ 끝에 음 추가', onclick: () => { const c = cur(); if (!c) return; const l = c.notes[c.notes.length - 1]; c.notes.push(l ? cloneNote(l) : { len: +newLen.value - 1, env: 0xC1, freq: isNoise(c) ? 0x43 : midiReg(69), duty: 2, pattern: null, sweep: 0 }); st.sel = c.notes.length - 1; edit(); reflow(); select(st.sel, true); } }),
      el('button', { text: '⧉ 복사', title: '고른 음을 바로 뒤에 복사', onclick: () => { const c = cur(), n = c && c.notes[st.sel]; if (!n) return; c.notes.splice(st.sel + 1, 0, cloneNote(n)); st.sel++; edit(); reflow(); select(st.sel, true); } }),
      el('button', { text: '▲ 위로', onclick: () => move(-1) }), el('button', { text: '▼ 아래로', onclick: () => move(1) }),
      el('button', { text: '🗑 지우기 (Delete)', onclick: () => del() }),
      el('button', { text: '채널 비우기', onclick: () => { const c = cur(); if (c && c.notes.length && confirm('이 채널의 음을 모두 지울까요?')) { c.notes.length = 0; edit(); reflow(); } } }),
      el('button', { text: '⇧ 전체 반음 올리기', onclick: () => transpose(1) }), el('button', { text: '⇩ 전체 반음 내리기', onclick: () => transpose(-1) }));
    const move = dir => { const c = cur(), j = st.sel + dir; if (!c || j < 0 || j >= c.notes.length) return; [c.notes[st.sel], c.notes[j]] = [c.notes[j], c.notes[st.sel]]; st.sel = j; edit(); reflow(); select(j, true); };
    const del = () => { const c = cur(); if (!c || !c.notes[st.sel]) return; c.notes.splice(st.sel, 1); st.sel = Math.max(0, st.sel - 1); edit(); reflow(); };
    const transpose = k => {
      const c = cur(); if (!c || isNoise(c)) return;
      for (const n of c.notes) { const hz = regHz(n.freq) * Math.pow(2, k / 12); n.freq = Math.max(0, Math.min(2047, Math.round(2048 - 131072 / hz))); }
      edit(); rows();
    };
    const onKey = e => {
      if (!host.contains(e.target) && e.target !== document.body) return;
      if (/INPUT|SELECT|TEXTAREA/.test(e.target.tagName) || e.target.isContentEditable) return;
      // 스페이스바 = 재생 / 멈춤
      if (e.key === ' ') { e.preventDefault(); e.stopPropagation(); if (Player.playing) pause(); else play(st.cry, st.h, true); }
      else if (e.key === 'Home') { e.preventDefault(); seekF(0); }
      else if (e.key === 'Delete') { e.preventDefault(); e.stopPropagation(); del(); }
      else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { const c = cur(); if (!c) return; e.preventDefault(); select(Math.max(0, Math.min(c.notes.length - 1, st.sel + (e.key === 'ArrowDown' ? 1 : -1))), true); playNote(c.notes[st.sel]); }
    };
    const host = this.host;
    document.addEventListener('keydown', onKey, true);
    // 피아노 롤 (작곡 프로그램처럼): 가로 = 시간, 세로 = 음 높이, 왼쪽 = 건반·음 이름
    // 막대 끌기: 위아래 = 음 높이 (Shift = 반음보다 잘게) · 오른쪽 끝 끌기 = 길이 · 휠 = 볼륨 · 빈 곳 두 번 누르기 = 지금 채널에 음 넣기
    const ROLL_COLORS = { 4: [47, 111, 236], 5: [30, 135, 75], 6: [200, 120, 20], 7: [192, 57, 43] };
    const GUT = 46, NH = 44;
    const roll = el('canvas', { style: 'display:block;cursor:default' });
    const gutter = el('canvas', { width: GUT, style: 'display:block;flex-shrink:0;border-right:1px solid var(--line)' });
    // 재생 위치 선 (작곡 프로그램처럼 오른쪽으로 움직임)
    const rollHead = el('div', { style: 'position:absolute;top:0;left:0;width:2px;background:#e8590c;box-shadow:0 0 3px #e8590c;pointer-events:none;display:none;z-index:3' });
    const rollWrap = el('div', { style: 'overflow-x:auto;flex:1;min-width:0;position:relative' }, roll, rollHead);
    const rollInfo = el('div', { class: 'hint', style: 'min-height:18px' });
    const rollBox = el('div', { class: 'gsc-rollbox', style: 'display:flex;align-items:flex-start;border:1px solid var(--line);background:#fff;margin-bottom:2px;overflow-y:auto' }, gutter, rollWrap);
    // 창 크기가 바뀌면 (넓게 보기 등) 다시 그림
    if (window.ResizeObserver) { let w = 0; new ResizeObserver(() => { if (rollWrap.clientWidth !== w) { w = rollWrap.clientWidth; view = null; drawRoll(); } }).observe(rollWrap); }
    const isWide = () => !!rollBox.closest('.dlg.wide');
    const midiOf = r => 69 + 12 * Math.log2(regHz(r) / 440);
    const noteName = m => NOTE_NAMES[((m % 12) + 12) % 12] + (Math.floor(m / 12) - 1);
    const BLACK = [1, 3, 6, 8, 10];
    let rollHits = [], view = null, drag = null;
    const tempoOf = c => isNoise(c) ? 0x100 : st.h.length;
    const layout = () => {
      const timeline = [];
      let total = 0, lo = 200, hi = -200;
      st.cry.channels.forEach((c, ci) => {
        const noise = isNoise(c), tempo = tempoOf(c);
        let f = 0, frac = 0;
        c.notes.forEach((n, i) => {
          const r = frac + (((n.len + 1) & 0xFF) * tempo); frac = r & 0xFF;
          const fr = Math.max(1, r >> 8);
          timeline.push({ ci, i, n, noise, f, fr }); f += fr;
          if (!noise) { const m = midiOf((n.freq + st.h.pitch) & 0x7FF); lo = Math.min(lo, Math.floor(m)); hi = Math.max(hi, Math.ceil(m)); }
        });
        total = Math.max(total, f);
      });
      return { timeline, total, lo, hi };
    };
    const drawRoll = () => {
      if (!st.cry) return;
      const L = layout();
      // 세로 범위: 끌고 있을 때는 고정, 아니면 음에 맞춰 (위아래 여유 3반음, 최소 2옥타브)
      if (!drag || !view) {
        let lo = L.lo > L.hi ? 57 : L.lo - 3, hi = L.lo > L.hi ? 81 : L.hi + 3;
        if (hi - lo < 24) { const c = Math.round((lo + hi) / 2); lo = c - 12; hi = c + 12; }
        lo = Math.max(24, lo); hi = Math.min(108, hi);
        const rowH = Math.max(7, Math.min(18, Math.floor((isWide() ? innerHeight * 0.55 : 340) / (hi - lo + 1))));
        const PX = Math.max(6, Math.min(16, Math.floor(((rollWrap.clientWidth || 600) - 40) / Math.max(1, L.total))));
        view = { lo, hi, rowH, PX, top: 4 };
      }
      const { lo, hi, rowH, PX, top } = view, pianoH = (hi - lo + 1) * rowH, H = top + pianoH + NH;
      view.total = L.total;
      roll.width = Math.max(rollWrap.clientWidth || 300, (L.total + 8) * PX); roll.height = gutter.height = H;
      const yM = m => top + (hi - m) * rowH;   // 반음 줄의 위쪽
      const g = roll.getContext('2d'), gg = gutter.getContext('2d');
      g.fillStyle = '#fff'; g.fillRect(0, 0, roll.width, H);
      gg.fillStyle = '#fff'; gg.fillRect(0, 0, GUT, H);
      for (let m = lo; m <= hi; m++) {
        const y = yM(m), black = BLACK.includes(((m % 12) + 12) % 12);
        if (black) { g.fillStyle = '#f2f4f8'; g.fillRect(0, y, roll.width, rowH); }
        g.fillStyle = m % 12 === 0 ? '#c9ced6' : '#eceef2'; g.fillRect(0, y + rowH - 1, roll.width, 1);
        gg.fillStyle = black ? '#333' : '#fff'; gg.fillRect(0, y, black ? 28 : GUT, rowH);
        gg.fillStyle = '#d0d0d0'; gg.fillRect(0, y + rowH - 1, GUT, 1);
        if (m % 12 === 0 || (rowH >= 9 && !black)) { gg.fillStyle = m % 12 === 0 ? '#000' : '#888'; gg.font = (m % 12 === 0 ? 'bold ' : '') + Math.min(11, rowH + 1) + 'px Arial'; gg.textBaseline = 'middle'; gg.fillText(noteName(m), black ? 30 : 18, y + rowH / 2); }
      }
      // 노이즈 칸
      const ny = top + pianoH;
      g.fillStyle = '#f7f0ef'; g.fillRect(0, ny, roll.width, NH);
      gg.fillStyle = '#f7f0ef'; gg.fillRect(0, ny, GUT, NH); gg.fillStyle = '#c0392b'; gg.font = 'bold 10px Arial'; gg.fillText(I18N.lang === 'en' ? 'Noise' : '노이즈', 4, ny + NH / 2);
      // 시간 눈금 (10프레임마다)
      g.fillStyle = '#e3e6eb';
      for (let f = 0; f <= L.total + 30; f += 10) g.fillRect(f * PX, 0, 1, H);
      g.fillStyle = '#999'; g.font = '9px Arial'; g.textBaseline = 'top';
      for (let f = 10; f <= L.total + 30; f += 10) g.fillText((f / FRAME_RATE_CRY).toFixed(2) + 's', f * PX + 2, ny + NH - 11);
      rollHits = [];
      let selM = null;
      // 지금 채널은 맨 위에 그림
      const order = L.timeline.filter(s => s.ci !== st.ch).concat(L.timeline.filter(s => s.ci === st.ch));
      for (const s of order) {
        const col = ROLL_COLORS[st.cry.channels[s.ci].id] || [90, 90, 90], vol = s.n.env >> 4, mine = s.ci === st.ch;
        const x = s.f * PX, w = Math.max(3, s.fr * PX - 1);
        let y, h, label;
        if (s.noise) { const k = ((s.n.freq + st.h.pitch) >> 4) & 15; y = ny + 3 + k * (NH - 16) / 15; h = 9; label = noiseName((s.n.freq + st.h.pitch) & 0xFF).replace('≈ ', ''); }
        else { const m = midiOf((s.n.freq + st.h.pitch) & 0x7FF); y = yM(m) + 1; h = rowH - 2; label = noteName(Math.round(m)); }
        g.fillStyle = 'rgba(' + col.join(',') + ',' + ((mine ? 0.35 : 0.15) + (mine ? 0.65 : 0.3) * vol / 15) + ')';
        g.fillRect(x, y, w, h);
        if (mine) { g.fillStyle = 'rgba(' + col.join(',') + ',1)'; g.fillRect(x, y, 2, h); g.fillRect(x + w - 2, y, 2, h); }
        const isSel = mine && s.i === st.sel;
        if (isSel) { g.strokeStyle = '#000'; g.lineWidth = 2; g.strokeRect(x - 1, y - 1, w + 2, h + 2); g.lineWidth = 1; if (!s.noise) selM = Math.round(midiOf((s.n.freq + st.h.pitch) & 0x7FF)); }
        if (mine && w > 20 && h >= 5) { g.fillStyle = vol > 7 ? '#fff' : '#000'; g.font = 'bold ' + Math.max(8, Math.min(11, h + 1)) + 'px Arial'; g.textBaseline = 'middle'; g.fillText(label, x + 4, y + h / 2 + 0.5); }
        rollHits.push({ x, y, w, h, ci: s.ci, i: s.i, noise: s.noise });
      }
      if (selM != null && selM >= lo && selM <= hi) { gg.fillStyle = 'rgba(47,111,236,.45)'; gg.fillRect(0, yM(selM), GUT, rowH); }
    };
    const FRAME_RATE_CRY = RomMusic.FRAME_RATE;
    const hitAt = (x, y) => { for (let k = rollHits.length - 1; k >= 0; k--) { const h = rollHits[k]; if (x >= h.x - 2 && x <= h.x + h.w + 2 && y >= h.y - 2 && y <= h.y + h.h + 2) return h; } return null; };
    const pos = e => { const r = roll.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    const describe = (c, n) => {
      if (!n) return '';
      const noise = isNoise(c);
      return (CRY_CH_NAMES[c.id] || '') + ' · ' + (st.sel + 1) + '번째 음 · ' + (noise ? noiseName((n.freq + st.h.pitch) & 0xFF) : regName((n.freq + st.h.pitch) & 0x7FF)) + ' · 길이 ' + (n.len + 1) + ' · 볼륨 ' + (n.env >> 4);
    };
    roll.addEventListener('mousemove', e => {
      if (drag) return;
      const [x, y] = pos(e), h = hitAt(x, y);
      roll.style.cursor = !h ? 'crosshair' : x > h.x + h.w - 6 ? 'ew-resize' : 'grab';
    });
    roll.addEventListener('mousedown', e => {
      if (e.button !== 0) return;
      const [x, y] = pos(e), h = hitAt(x, y);
      if (!h) { seekF(x / view.PX); return; }   // 빈 곳 클릭 = 재생 줄을 거기로
      e.preventDefault();
      if (h.ci !== st.ch) { st.ch = h.ci; st.sel = h.i; reflow(); }
      select(h.i, true);
      const c = cur(), n = c.notes[h.i];
      drag = { mode: x > h.x + h.w - 6 ? 'len' : 'pitch', x0: e.clientX, y0: e.clientY, n, c, freq: n.freq, len: n.len, lastKey: null, moved: false };
      roll.style.cursor = drag.mode === 'len' ? 'ew-resize' : 'grabbing';
      rollInfo.textContent = describe(c, n);
      playNote(n);
      const move = ev => {
        const dx = ev.clientX - drag.x0, dy = ev.clientY - drag.y0, d = drag;
        if (Math.abs(dx) + Math.abs(dy) > 2) d.moved = true;
        if (d.mode === 'len') d.n.len = Math.max(0, Math.min(63, d.len + Math.round(dx / view.PX * 256 / tempoOf(d.c))));
        else if (isNoise(d.c)) {
          const k = Math.max(0, Math.min(15, ((d.freq + st.h.pitch) >> 4 & 15) + Math.round(dy / ((NH - 16) / 15))));
          d.n.freq = ((k << 4) | (d.freq & 15)) - st.h.pitch & 0xFF;
        } else if (ev.shiftKey) d.n.freq = Math.max(0, Math.min(2047, d.freq - Math.round(dy)));
        else {
          const m = Math.round(midiOf((d.freq + st.h.pitch) & 0x7FF) - dy / view.rowH);
          d.n.freq = Math.max(0, Math.min(2047, midiReg(m) - st.h.pitch));
        }
        const key = d.n.freq + ':' + d.n.len;
        if (key !== d.lastKey) { d.lastKey = key; drawRoll(); rollInfo.textContent = describe(d.c, d.n); if (d.mode === 'pitch' && d.moved) playNote(d.n); }
      };
      const up = () => {
        document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up);
        const d = drag; drag = null; roll.style.cursor = 'grab';
        if (d.n.freq !== d.freq || d.n.len !== d.len) { edit(); rows(); select(st.sel); }
        else drawRoll();
      };
      document.addEventListener('mousemove', move); document.addEventListener('mouseup', up);
    });
    // 휠 = 볼륨
    roll.addEventListener('wheel', e => {
      const [x, y] = pos(e), h = hitAt(x, y);
      if (!h) return;
      e.preventDefault();
      if (h.ci !== st.ch) { st.ch = h.ci; reflow(); }
      const n = cur().notes[h.i], v = Math.max(0, Math.min(15, (n.env >> 4) + (e.deltaY < 0 ? 1 : -1)));
      n.env = (v << 4) | (n.env & 15);
      st.sel = h.i; edit(); rows(); select(h.i); rollInfo.textContent = describe(cur(), n);
    }, { passive: false });
    // 빈 곳 두 번 누르기 = 그 시간·높이에 음 넣기 (지금 채널)
    roll.addEventListener('dblclick', e => {
      const [x, y] = pos(e);
      if (hitAt(x, y)) return;
      const c = cur(); if (!c) return;
      const t = x / view.PX, noise = isNoise(c), tempo = tempoOf(c);
      let f = 0, frac = 0, at = c.notes.length;
      for (let i = 0; i < c.notes.length; i++) { const r = frac + (((c.notes[i].len + 1) & 0xFF) * tempo); frac = r & 0xFF; f += Math.max(1, r >> 8); if (t < f) { at = i + 1; break; } }
      const pianoBottom = view.top + (view.hi - view.lo + 1) * view.rowH;
      let freq;
      if (noise) freq = (Math.max(0, Math.min(15, Math.round((y - pianoBottom - 3) / ((NH - 16) / 15)))) << 4 | 1) - st.h.pitch & 0xFF;
      else { if (y > pianoBottom) return; freq = Math.max(0, Math.min(2047, midiReg(view.hi - Math.floor((y - view.top) / view.rowH)) - st.h.pitch)); }
      const v = +newVol.value, fd = +newFade.value;
      const n = { len: +newLen.value - 1, env: (v << 4) | (fd > 0 ? 8 | fd : -fd), freq, duty: 2, pattern: null, sweep: 0 };
      const prev = c.notes[at - 1]; if (prev && !noise) { n.duty = prev.duty; n.pattern = prev.pattern && prev.pattern.slice(); }
      c.notes.splice(at, 0, n); st.sel = at;
      edit(); reflow(); select(at, true); playNote(n);
    });
    // 새 울음소리를 넣을 자리 (기본 울음소리 번호)
    const slotSel = sel(baseOpts(), 0, () => updateSlot());
    slotSel.style.maxWidth = '360px';
    const slotWarn = el('div', { style: 'color:#8b4513' });
    const updateSlot = () => {
      const others = U[+slotSel.value].filter(m => m !== st.mon);
      slotWarn.textContent = others.length ? '⚠ 이 번호를 쓰는 다른 포켓몬 ' + others.length + '마리 (' + others.slice(0, 6).map(m => rom.monName(m)).join(', ') + (others.length > 6 ? ' …' : '') + ')의 울음소리도 같이 바뀌어요.'
        : '이 번호는 ' + rom.monName(st.mon) + '만 써서 다른 포켓몬에는 영향이 없어요.';
    };
    const slotRow = el('div', { style: 'display:none;margin-top:6px' },
      el('div', { class: 'bar' }, el('b', { text: '고친 소리를 넣을 기본 울음소리 번호:' }), slotSel), slotWarn,
      el('div', { class: 'hint', text: '게임의 기본 울음소리 68개를 포켓몬들이 나눠 쓰고, 빈 번호는 없어요. 한 마리만 쓰는 번호를 고르면 다른 포켓몬은 그대로예요.' }));
    const pickSlot = () => {
      const own = st.h.base;
      if (U[own].every(m => m === st.mon)) return own;
      let best = 0; for (let i = 1; i < t.count; i++) if (U[i].length < U[best].length) best = i;
      return best;
    };
    const refresh = () => {
      baseSel.value = st.h.base; pitchIn.set(st.h.pitch); lenIn.set(st.h.length);
      st.ch = Math.min(st.ch, st.cry.channels.length - 1);
      chTabs(); rows(); drawRoll();
      slotRow.style.display = st.edited && !sfxMode ? '' : 'none';
      if (st.edited && !sfxMode) { slotSel.value = pickSlot(); updateSlot(); }
      musicNote.style.display = st.cry.music ? '' : 'none';
    };
    const musicNote = el('div', { style: 'display:none;color:#c0392b;font-weight:bold', text: '⚠ 이 효과음은 음악 형식(팡파르·멜로디)이라 여기서는 미리듣기·편집이 안 돼요. 다른 효과음을 가져오거나 소리 파일로 새로 만들면 바꿀 수 있어요.' });
    // 효과음 모드: 이 소리를 쓰는 기술 목록 + 기술마다 다른 효과음으로 바꾸기
    const movesBox = el('div');
    const showMoves = () => {
      if (!sfxMode) return;
      movesBox.replaceChildren();
      const l = SU[st.mon];
      if (!S.moves) { movesBox.append(el('div', { class: 'hint', text: '기술 애니메이션 표를 찾지 못했어요' })); return; }
      if (!l.length) { movesBox.append(el('div', { class: 'hint', text: '이 소리를 쓰는 기술이 없어요 (메뉴·필드 등에서 나는 효과음이에요)' })); return; }
      const seen = new Set();
      for (const x of l) {
        if (seen.has(x.m)) continue;
        seen.add(x.m);
        const s = sel(sfxOpts(), st.mon, v => {
          for (const y of SU[st.mon].filter(y => y.m === x.m)) d[y.at] = v;
          rom.dirty = true;
          S.moves.byMove[x.m] = S.moves.byMove[x.m].map(y => y.sfx === st.mon ? Object.assign({}, y, { sfx: v }) : y);
          SU = sfxUses(); showMoves();
          this.say(rom.moveName(x.m) + ' 기술 소리를 ' + sfxDisp(v) + '(으)로 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
        });
        s.style.maxWidth = '320px';
        movesBox.append(el('div', { class: 'bar' }, el('b', { text: pad3(x.m) + ' ' + rom.moveName(x.m), style: 'min-width:150px' }), el('span', { text: '→ 소리:' }), s,
          el('button', { text: '▶', title: '이 기술의 첫 소리 듣기', onclick: () => { const ids = (S.moves.byMove[x.m] || []).map(y => y.sfx); const c = RomCry.decode(d, RomCry.sfxOff(d, S, ids[0] != null ? ids[0] : st.mon)); play(c, { pitch: 0, length: 0x100 }); } })));
      }
    };
    const load = m => {
      cursorF = 0; st.mon = m; st.edited = false; st.ch = 0; st.sel = 0;
      if (sfxMode) { st.h = { base: m, pitch: 0, length: 0x100 }; st.cry = RomCry.decode(d, RomCry.sfxOff(d, S, m)); title.textContent = sfxLabel(m); }
      else { st.h = RomCry.header(d, t, m); st.cry = RomCry.decode(d, RomCry.baseOff(d, t, st.h.base)); title.textContent = monLabel(m); }
      status.textContent = ''; err.textContent = '';
      refresh(); showMoves();
    };
    const apply = () => {
      try {
        if (sfxMode) {
          if (!st.edited) { this.okMsg(err, '바꾼 게 없어요'); return; }
          if (st.cry.music) { this.okMsg(err, '음악 형식 효과음은 여기서 고칠 수 없어요', true); return; }
          const len = RomCry.encode(st.cry, 0x4000).length;
          let p = -1;
          for (const r of rom.free) if (r[1] - r[0] >= len && Math.floor(r[0] / 0x4000) === Math.floor((r[0] + len - 1) / 0x4000)) { p = r[0]; r[0] += len; break; }
          if (p < 0) { this.okMsg(err, '롬에 소리를 넣을 빈 공간이 부족해요', true); return; }
          const addr = 0x4000 + p % 0x4000, e = S.tab + st.mon * 3;
          d.set(RomCry.encode(st.cry, addr), p);
          d[e] = Math.floor(p / 0x4000); d[e + 1] = addr & 0xFF; d[e + 2] = addr >> 8;
          rom.dirty = true;
          load(st.mon);
          this.okMsg(err, '적용했어요');
          this.say(sfxDisp(st.mon) + ' 효과음을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
          return;
        }
        const h = Object.assign({}, st.h);
        if (st.edited) {
          const slot = +slotSel.value, len = RomCry.encode(st.cry, 0x4000).length;
          let p = -1;
          for (const r of rom.free) if (r[1] - r[0] >= len && Math.floor(r[0] / 0x4000) === Math.floor((r[0] + len - 1) / 0x4000)) { p = r[0]; r[0] += len; break; }
          if (p < 0) { this.okMsg(err, '롬에 울음소리를 넣을 빈 공간이 부족해요', true); return; }
          d.set(RomCry.encode(st.cry, 0x4000 + p % 0x4000), p);
          const e = t.tab + slot * 3, addr = 0x4000 + p % 0x4000;
          d[e] = Math.floor(p / 0x4000); d[e + 1] = addr & 0xFF; d[e + 2] = addr >> 8;
          h.base = slot;
        }
        RomCry.setHeader(d, t, st.mon, h);
        rom.dirty = true;
        U = users();
        for (const s of [baseSel, slotSel]) for (const o of s.options) o.textContent = baseLabel(+o.value);
        load(st.mon);
        this.okMsg(err, '적용했어요');
        this.say(rom.monName(st.mon) + ' 울음소리를 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
      } catch (e) { console.error(e); this.okMsg(err, e.message, true); }
    };
    const importAudio = () => this.cryImportDialog(cry => {
      st.cry = cry; st.h.pitch = 0; st.h.length = 0x100; st.edited = true; st.ch = 0; st.sel = 0; markHeader();
      refresh(); play(st.cry, st.h);
    });
    const firstSfx = sfxMode ? Math.max(0, SU.findIndex(u => u.length)) : 25;
    const items = sfxMode
      ? Array.from({ length: S.count }, (_, i) => ({ value: i, label: sfxLabel(i) + usedBy(i), group: SU[i].length ? '⚔ 기술 소리' : '🔔 그 밖의 효과음' }))
        .sort((a, b) => (a.group[0] === '⚔' ? 0 : 1) - (b.group[0] === '⚔' ? 0 : 1) || a.value - b.value)
      : this.monOptions(false).filter(o => o[0] > 0).map(([v, s]) => ({ value: v, label: s }));
    const list = listPanel(items, m => {
      if (m === st.mon) return;
      if (status.textContent && !confirm('적용하지 않은 변경이 있어요. 버릴까요?')) return;
      load(m); play(st.cry, st.h);
    }, sfxMode ? '기술·소리 찾기' : '포켓몬 찾기', firstSfx);
    const body = el('div', null,
      el('div', { class: 'bar' }, title,
        el('button', { text: '▶ 들어보기', style: 'font-weight:bold;background:#dcf5dc', onclick: () => play(st.cry, st.h, true) }),
        el('button', { text: '■ 정지', style: 'font-weight:bold;background:#ffdcdc', onclick: () => pause() }),
        el('button', { text: '⏮ 처음으로', title: '재생 줄을 맨 앞으로 (Home 키)', onclick: () => seekF(0) }),
        el('button', { text: '▶ 원래 소리', onclick: () => {
          if (sfxMode) { play(RomCry.decode(d, RomCry.sfxOff(d, S, st.mon)), st.h); return; }
          const h = RomCry.header(d, t, st.mon); play(RomCry.decode(d, RomCry.baseOff(d, t, h.base)), h);
        } }),
        el('button', { text: '↩ 되돌리기', onclick: () => load(st.mon) }), status),
      el('div', { class: 'bar' },
        el('button', { text: sfxMode ? '🎧 소리 파일로 효과음 만들기 🌟' : '🎧 소리 파일로 울음소리 만들기 🌟', style: 'font-weight:bold;background:#dcf0ff', onclick: importAudio }), copySel),
      musicNote,
      sfxMode
        ? el('fieldset', null, el('legend', { text: '이 소리를 쓰는 기술' }), movesBox,
          el('div', { class: 'hint', text: '여러 기술이 같은 효과음을 같이 쓸 수 있어요. 이 소리를 고치면 위 기술들 소리가 모두 바뀌어요. 기술 하나만 다른 소리로 바꾸려면 [→ 소리]에서 다른 효과음을 고르세요.' }))
        : el('fieldset', null, el('legend', { text: '이 포켓몬의 울음소리' }),
          el('div', { class: 'bar' }, el('span', { text: '기본 울음소리:' }), baseSel),
          el('div', { class: 'bar' }, el('span', { text: '음높이:' }), pitchIn.n, pitchIn.r, el('span', { class: 'hint', text: '0 = 그대로, 클수록 높은 소리' })),
          el('div', { class: 'bar' }, el('span', { text: '길이:' }), lenIn.n, lenIn.r, el('span', { class: 'hint', text: '256 = 보통, 클수록 느리고 길게' })),
          el('div', { class: 'hint', text: '2세대 포켓몬 울음소리는 기본 울음소리 68개 중 하나에 음높이·길이만 바꿔서 만들어요. 위 세 가지만 바꾸면 다른 포켓몬에는 영향이 없어요.' })),
      el('fieldset', null, el('legend', { text: sfxMode ? '효과음 음표 (고치면 새 소리로 넣어요)' : '기본 울음소리 음표 (고치면 새 소리로 넣어요)' }),
        el('div', { class: 'hint', text: '🎼 피아노 롤 — 막대를 위아래로 끌면 음 높이 (Shift = 더 잘게) · 오른쪽 끝을 끌면 길이 · 마우스 휠 = 볼륨 · 빈 곳을 두 번 누르면 음 넣기 · 파랑·초록 = 사각파, 빨강 = 노이즈 · 빈 곳 클릭 = 재생 줄 옮기기 · 스페이스바 = 재생/멈춤 · Home = 처음으로' }), rollBox, rollInfo,
        chBar, grid, tools,
        el('div', { class: 'bar', style: 'margin-top:4px' }, el('b', { style: 'color:navy', text: '🎹 건반을 누르면:' }), modeSel,
          el('span', { text: '새 음 길이:' }), newLen, el('span', { text: '볼륨:' }), newVol, el('span', { text: '볼륨 변화:' }), newFade),
        pianoBox, noiseBox,
        el('div', { class: 'hint', text: '표에서 음을 누르면 골라져요 (↑↓ 키로 옮기기 · Delete 키로 지우기) · 길이 1프레임 = 1/60초 · 볼륨 변화: −면 점점 작게, +면 점점 크게 (숫자가 작을수록 빠르게)' }), slotRow),
      el('div', { class: 'bar' }, el('button', { class: 'apply', text: '적용', onclick: apply }), err),
      el('div', { class: 'hint', text: '적용한 뒤 메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요' }));
    load(firstSfx);
    this.dialog(sfxMode ? '기술 사운드 에디터' : '포켓몬 울음소리 에디터', () => el('div', { class: 'side', style: 'grid-template-columns:200px minmax(0,1fr)' }, list, body), () => { Player.stop(); document.removeEventListener('keydown', onKey, true); alive = false; }, false, true);
    setTimeout(drawRoll, 0);
    // 재생 위치 선 움직이기 (1프레임 = 1/60초)
    let alive = true, shown = false;
    const tick = () => {
      if (!alive || (shown && !rollWrap.isConnected)) { document.removeEventListener('keydown', onKey, true); return; }
      if (rollWrap.isConnected) shown = true;
      const t = Player.pos();
      if (!view) rollHead.style.display = 'none';
      else {
        const x = (t < 0 ? cursorF : t * RomMusic.FRAME_RATE) * view.PX, W = rollWrap.clientWidth;   // 멈춰 있으면 멈춘 자리
        rollHead.style.display = ''; rollHead.style.left = x + 'px'; rollHead.style.height = roll.height + 'px';
        if (t >= 0 && (x < rollWrap.scrollLeft || x > rollWrap.scrollLeft + W * 0.85)) rollWrap.scrollLeft = Math.max(0, x - W * 0.15);
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  },

  // ---------------------------------------------------------------- 소리 파일 → 울음소리
  cryImportDialog(onDone) {
    let file = null, cry = null;
    const info = el('div', { class: 'hint', text: '선택된 파일 없음' }), result = el('div', { style: 'color:#1c3d9a;white-space:pre-line;margin:6px 0', text: '변환 준비 완료' });
    const fileInput = el('input', { type: 'file', accept: 'audio/*', style: 'display:none' });
    const setFile = f => { file = f; info.textContent = '파일: ' + f.name; result.textContent = '[✨ 울음소리로 변환하기]를 누르세요.'; };
    fileInput.addEventListener('change', () => { if (fileInput.files[0]) setFile(fileInput.files[0]); });
    const secSel = sel([[0.5, '0.5초'], [0.8, '0.8초'], [1, '1초'], [1.5, '1.5초 (보통)'], [2, '2초'], [3, '3초']], 1.5);
    const shiftIn = num(0, -24, 24), sq2In = num(60, 0, 100), noiseIn = num(70, 0, 100);
    const previewBtn = el('button', { text: '▶ 다시 듣기', onclick: () => { if (cry) Player.play(RomCry.render(cry, 0, 0x100), true); } });
    const importBtn = el('button', { class: 'apply', text: '✅ 울음소리 에디터로 가져오기', style: 'font-weight:bold', onclick: () => { close(); onDone(cry); } });
    previewBtn.disabled = importBtn.disabled = true;
    const convBtn = el('button', { text: '✨ 울음소리로 변환하기', style: 'font-weight:bold;background:#dcf5e6', onclick: async () => {
      if (!file) { alert('먼저 소리 파일을 선택해주세요.'); return; }
      convBtn.disabled = true; result.textContent = '변환하는 중…';
      try {
        const { x, rate } = await AudioConverter.decodeFile(await file.arrayBuffer());
        cry = RomCry.convert(x, rate, { maxSec: +secSel.value, shift: +shiftIn.value, sq2: +sq2In.value / 100, noise: +noiseIn.value / 100 });
        const cnt = cry.channels.map(c => c.notes.length);
        result.textContent = '🎉 변환 성공! 사각파 ' + cnt[0] + '음 · 사각파 ' + cnt[1] + '음 · 노이즈 ' + cnt[2] + '음';
        previewBtn.disabled = importBtn.disabled = false;
        Player.play(RomCry.render(cry, 0, 0x100), true);
      } catch (e) { console.error(e); result.textContent = '변환 실패: ' + e.message; }
      finally { convBtn.disabled = false; }
    } });
    const drop = el('div', { style: 'border:2px dashed var(--line);border-radius:8px;padding:14px;text-align:center;background:#fff' },
      el('button', { text: '📂 파일 찾기...', style: 'background:#ebf0ff', onclick: () => fileInput.click() }), el('div', { class: 'hint', text: '또는 여기에 끌어다 놓기' }), fileInput);
    drop.addEventListener('dragover', e => e.preventDefault());
    drop.addEventListener('drop', e => { e.preventDefault(); e.stopPropagation(); if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]); });
    let close;
    close = this.dialog('소리 파일 → 2세대 울음소리 변환', () => el('div', null,
      el('div', { style: 'font-weight:bold;color:#3b3b98;margin-bottom:10px;white-space:pre-line', text: '🐾 동물 소리·목소리·효과음 파일(MP3, WAV, OGG, M4A 등)을 고르세요.\n소리의 높낮이와 크기를 따라가는 사각파 2개 + 노이즈로 바꿔요.' }),
      drop, info,
      el('fieldset', { style: 'margin-top:10px' }, el('legend', { text: '변환 설정' }),
        el('div', { class: 'bar' }, el('span', { text: '최대 길이:' }), secSel, el('span', { class: 'hint', text: '앞뒤 조용한 부분은 자동으로 잘라요' })),
        el('div', { class: 'bar' }, el('span', { text: '조옮김 반음:' }), shiftIn, el('span', { class: 'hint', text: '소리가 너무 낮거나 높을 때' })),
        el('div', { class: 'bar' }, el('span', { text: '두 번째 사각파 세기 %:' }), sq2In, el('span', { text: '노이즈 세기 %:' }), noiseIn)),
      el('div', { class: 'bar', style: 'margin-top:10px' }, convBtn, previewBtn), result,
      el('div', { class: 'bar', style: 'justify-content:space-between' }, el('button', { text: '닫기', onclick: () => close() }), importBtn)), () => Player.stop(), true);
  }
});

// ===== 99-movegfx.js
// ================================================================ 기술 그림 (배틀 애니메이션에 나오는 그림 묶음)
// AnimObjGFX 표: 한 줄 4바이트 = 타일 수 · 뱅크 · 주소 (LZ 압축 2bpp). 기술 애니메이션이 anim_1gfx~anim_5gfx 로 불러씀
const ANIM_GFX_NAMES = ['', 'Hit', 'Cut', 'Fire', 'Water', 'Lightning', 'Plant', 'Smoke', 'Explosion', 'Rocks', 'Ice', 'PokeBall', 'Poison', 'Bubble', 'Noise', 'Powder', 'Beam',
  'Speed', 'Charge', 'Wind', 'Whip', 'Egg', 'Rope', 'Psychic', 'Reflect', 'Status', 'Sand', 'Web', 'Haze', 'Horn', 'Flower', 'Misc', 'SkyAttack', 'Globe', 'Shapes', 'Objects',
  'Shine', 'Angels', 'Wave', 'Aeroblast'];
const ANIM_GFX_KO = ['', '타격', '베기', '불꽃', '물', '번개', '풀', '연기', '폭발', '바위', '얼음', '몬스터볼', '독', '거품', '소리', '가루', '광선', '빠르기', '충전', '바람', '채찍',
  '알', '줄', '사이코', '리플렉터', '상태 이상', '모래', '거미줄', '안개', '뿔', '꽃', '여러 가지', '불새', '구슬', '도형', '물건', '반짝임', '천사', '파동', '에어로블라스트'];
const ANIM_GRAY = [[255, 255, 255], [176, 176, 176], [96, 96, 96], [0, 0, 0]];
mixin(Rom.prototype, {
  loadAnimGfx() {
    if (this._agfx !== undefined) return this._agfx;
    this._agfx = null;
    const d = this.data;
    // 1번 타격 21칸 · 2번 베기 6칸 · 3번 불꽃 6칸 · 4번 물 20칸 · 5번 번개 26칸
    const p = this.findPattern([0x15, -1, -1, -1, 0x06, -1, -1, -1, 0x06, -1, -1, -1, 0x14, -1, -1, -1, 0x1A], 0x4000, d.length);
    if (p < 0) return null;
    const tab = p - 4, count = ANIM_GFX_NAMES.length;
    for (let i = 1; i < count; i++) { const a = this.w(tab + i * 4 + 2); if (a < 0x4000 || a >= 0x8000) return null; }
    const anims = RomCry.moveAnims(d), byGfx = Array.from({ length: count }, () => []), byMove = [];
    if (anims) {
      const bank = Math.floor(anims.tab / 0x4000);
      for (let m = 1; m <= 251; m++) {
        const a = this.w(anims.tab + m * 2);
        byMove[m] = a >= 0x4000 && a < 0x8000 ? RomCry.animGfx(d, bank, a).filter(g => g > 0 && g < count) : [];
        for (const g of byMove[m]) byGfx[g].push(m);
      }
    }
    // 조립 정보: 물체 표(6바이트) → 프레임 묶음 → 조각 배치(OAM). 그림 묶음은 8×8 조각이라 이걸로 맞춰 봐야 알아볼 수 있음
    //  물체 1~3 = 큰·보통·작은 타격 (BATTLE_ANIM_FRAMESET 0~2, 그림 1번) / 프레임 묶음 0~2 = oamframe 0~2, 6 / oamdelete
    const obj = this.findPattern([0x01, 0xFF, 0x00, 0x00, -1, 0x01, 0x01, 0xFF, 0x01, 0x00, -1, 0x01, 0x01, 0xFF, 0x02, 0x00, -1, 0x01], 0x4000, d.length);
    const fs0 = this.findPattern([0x00, 0x06, 0xFC, 0x01, 0x06, 0xFC, 0x02, 0x06, 0xFC], 0x4000, d.length);
    let asm = null;
    if (obj >= 0 && fs0 >= 0) {
      const bank = Math.floor(fs0 / 0x4000), a = 0x4000 + fs0 % 0x4000;
      let fst = -1;
      for (let i = bank * 0x4000; i < bank * 0x4000 + 0x3FFA; i++) if (this.w(i) === a && this.w(i + 2) === a + 3 && this.w(i + 4) === a + 6) { fst = i; break; }
      // 조각 배치 표: 0번 = 조각 16개, 2번 = 8번 칸부터 조각 4개
      let oam = -1;
      for (let s = bank * 0x4000; s < bank * 0x4000 + 0x3FF0; s++) if (d[s] === 0 && d[s + 1] === 0x10 && d[s + 8] === 0x08 && d[s + 9] === 0x04 && this.w(s + 2) >= 0x4000 && this.w(s + 2) < 0x8000) { oam = s; break; }
      if (fst >= 0 && oam >= 0) {
        const nfs = Math.max(1, (this.w(fst) - 0x4000 - fst % 0x4000) / 2), objs = [];
        for (let i = 0; i < 256; i++) { const e = obj + i * 6; if (d[e + 2] >= nfs || d[e + 5] >= count) break; objs.push({ fs: d[e + 2], gfx: d[e + 5], pal: d[e + 4] }); }
        asm = { bank, fst, oam, objs, objTab: obj };
      }
    }
    // 기술 그림 색 6묶음 (회색·노랑·빨강·초록·파랑·갈색 = 물체 색 번호 2~7): ld hl, BattleObjectPals / ld de, wOBPals + 2 팔레트 / ld bc, 6 팔레트 / call CopyBytes
    let pals = -1;
    for (let q = 0; ; q++) {
      q = this.findPattern([0x21, -1, -1, 0x11, -1, -1, 0x01, 0x30, 0x00, 0xCD], q, d.length);
      if (q < 0) break;
      const o = this.off(Math.floor(q / 0x4000), this.w(q + 1));
      if (q >= 0x4000 && this.w(q + 1) >= 0x4000 && d[o] === 0xFF && d[o + 1] === 0x7F && d[o + 8] === 0xFF && d[o + 9] === 0x7F) { pals = o; break; }
    }
    return this._agfx = { tab, count, byGfx, byMove, found: !!anims, asm, pals };
  },
  // 물체 색 번호 → [rgb×4] (2~7 = 기술 그림 색, 0·1 = 배틀 중인 포켓몬 색이라 회색으로 보여줌)
  animPal(p) {
    const A = this.loadAnimGfx();
    if (!A || A.pals < 0 || p < 2 || p > 7) return ANIM_GRAY;
    const o = A.pals + (p - 2) * 8;
    return [0, 1, 2, 3].map(i => C555(this.w(o + i * 2)));
  },
  setAnimPal(p, cols) {
    const o = this.loadAnimGfx().pals + (p - 2) * 8;
    for (let i = 1; i < 4; i++) { const v = TO555(cols[i]); this.data[o + i * 2] = v & 0xFF; this.data[o + i * 2 + 1] = v >> 8; }
    this.dirty = true;
  },
  // 그림 묶음 g 를 쓰는 물체들의 색 번호들 (많이 쓰는 순)
  animGfxPals(g) {
    const m = this.loadAnimGfx().asm, cnt = new Map();
    if (m) for (const o of m.objs) if (o.gfx === g) cnt.set(o.pal, (cnt.get(o.pal) || 0) + 1);
    return [...cnt.keys()].sort((a, b) => cnt.get(b) - cnt.get(a));
  },
  // 물체 id 와 똑같은데 색 묶음만 pal 인 물체 번호 (없으면 안 쓰는 물체 칸에 복사해서 만듦). 칸이 없으면 -1
  // 안 쓰는 칸 = 어떤 애니메이션 스크립트에도 안 나오는 물체 (미완성·안 쓰는 물체부터)
  animObjWithPal(id, pal, scripts) {
    const m = this.loadAnimGfx().asm, d = this.data, at = i => m.objTab + i * 6;
    const same = i => { for (let k = 0; k < 6; k++) if (k !== 4 && d[at(i) + k] !== d[at(id) + k]) return false; return d[at(i) + 4] === pal; };
    for (let i = 0; i < m.objs.length; i++) if (same(i)) return i;
    const used = new Set();
    for (const s of scripts) for (const c of s) if (c.op === 0xD0) used.add(c.args[0]);
    const names = typeof ANIM_OBJ_NAMES !== 'undefined' ? ANIM_OBJ_NAMES : [];
    const free = [...Array(m.objs.length).keys()].filter(i => !used.has(i) && i !== id && !/FEET|HEAD/.test(names[i] || ''))
      .sort((a, b) => (/BETA|UNUSED|^B0$/.test(names[b] || '') ? 1 : 0) - (/BETA|UNUSED|^B0$/.test(names[a] || '') ? 1 : 0));
    if (!free.length) return -1;
    const slot = free[0];
    for (let k = 0; k < 6; k++) d[at(slot) + k] = d[at(id) + k];
    d[at(slot) + 4] = pal;
    m.objs[slot] = { fs: d[at(slot) + 2], gfx: d[at(slot) + 5], pal };
    this.dirty = true;
    return slot;
  },
  // 색 번호 p 를 쓰는 그림 묶음들
  animPalUsers(p) {
    const m = this.loadAnimGfx().asm, s = new Set();
    if (m) for (const o of m.objs) if (o.pal === p) s.add(o.gfx);
    return [...s];
  },
  // 그림 묶음 g 로 게임이 조립하는 모양들 [{ set, flags }] (프레임 묶음마다 첫 장면, 같은 모양은 한 번만)
  animShapes(g) {
    const A = this.loadAnimGfx(), m = A && A.asm;
    if (!m) return [];
    const d = this.data, out = [], seen = new Set();
    for (const o of m.objs) {
      if (o.gfx !== g) continue;
      let p = this.off(m.bank, this.w(m.fst + o.fs * 2));
      for (let k = 0; k < 40; k++) {
        const c = d[p];
        if (c === 0xFD) { p += 2; continue; }
        if (c >= 0xFC) break;
        const key = c + ':' + (d[p + 1] & 0xC0) + ':' + o.pal;
        if (!seen.has(key)) { seen.add(key); out.push({ set: c, flags: d[p + 1] & 0xC0, pal: o.pal }); }
        break;
      }
    }
    return out;
  },
  // 그림 묶음 g 를 쓰는 물체들의 움직임 (프레임 묶음마다 한 번) → [[{ set, flags, dur } | { wait }], …] + 끝 방식
  // 프레임 명령: oamframe = 조각 배치 번호, 길이(아래 6비트)|뒤집기(위 2비트) · $FD n = 기다리기 · $FE = 처음부터 · $FC = 지우기 · $FF = 끝
  animMotions(g) {
    const A = this.loadAnimGfx(), m = A && A.asm;
    if (!m) return [];
    const d = this.data, out = [], seen = new Set();
    for (const o of m.objs) {
      if (o.gfx !== g || seen.has(o.fs + ':' + o.pal)) continue;
      seen.add(o.fs + ':' + o.pal);
      let p = this.off(m.bank, this.w(m.fst + o.fs * 2));
      const frames = [];
      let end = 'delete';
      for (let k = 0; k < 64; k++) {
        const c = d[p];
        if (c === 0xFD) { frames.push({ wait: Math.max(1, d[p + 1]) }); p += 2; continue; }
        if (c === 0xFE) { end = 'loop'; break; }
        if (c === 0xFF) { end = 'hold'; break; }
        if (c === 0xFC) break;
        frames.push({ set: c, flags: d[p + 1] & 0xC0, dur: Math.max(1, d[p + 1] & 0x3F) });
        p += 2;
      }
      if (frames.some(f => f.set != null)) out.push({ frames, end, pal: o.pal });
    }
    return out;
  },
  // 조각 배치 하나 → 조각들 [{ x, y, t, a }] (가운데 기준 좌표)
  animSprites(shape) {
    const m = this.loadAnimGfx().asm, d = this.data, e = m.oam + shape.set * 4, vt = d[e], cnt = d[e + 1], p = this.off(m.bank, this.w(e + 2));
    const s8 = v => v >= 128 ? v - 256 : v, spr = [];
    for (let i = 0; i < cnt && i < 64; i++) {
      let y = s8(d[p + i * 4]), x = s8(d[p + i * 4 + 1]), a = d[p + i * 4 + 3];
      if (shape.flags & 0x40) { x = -x - 8; a ^= 0x20; }
      if (shape.flags & 0x80) { y = -y - 8; a ^= 0x40; }
      spr.push({ x, y, t: vt + d[p + i * 4 + 2], a });
    }
    return spr;
  },
  // 조각들을 (x0, y0) 기준 w×h 그림에 그리기
  animComposite(pic, n, spr, x0, y0, w, h) {
    const out = newPic(w, h);
    for (const s of spr) {
      if (s.t >= n) continue;
      const tw = pic.w / 8, tx = (s.t % tw) * 8, ty = Math.floor(s.t / tw) * 8;
      for (let yy = 0; yy < 8; yy++) for (let xx = 0; xx < 8; xx++) {
        const v = pic.px[(ty + yy) * pic.w + tx + xx];
        if (!v) continue;
        const px = s.a & 0x20 ? 7 - xx : xx, py = s.a & 0x40 ? 7 - yy : yy, X = s.x - x0 + px, Y = s.y - y0 + py;
        if (X >= 0 && Y >= 0 && X < w && Y < h) out.px[Y * w + X] = v;
      }
    }
    return out;
  },
  // 조립한 모양 → canvas (pic: 그림 묶음 그림, 가로 16칸씩)
  animShapeCanvas(pic, n, shape, pal, zoom) {
    const spr = this.animSprites(shape);
    if (!spr.length) return null;
    const x0 = Math.min(...spr.map(s => s.x)), y0 = Math.min(...spr.map(s => s.y));
    const w = Math.max(...spr.map(s => s.x)) + 8 - x0, h = Math.max(...spr.map(s => s.y)) + 8 - y0;
    if (w > 160 || h > 144) return null;
    const out = newPic(w, h);
    for (const s of spr) {
      if (s.t >= n) continue;
      const tw = pic.w / 8, tx = (s.t % tw) * 8, ty = Math.floor(s.t / tw) * 8;
      for (let yy = 0; yy < 8; yy++) for (let xx = 0; xx < 8; xx++) {
        const v = pic.px[(ty + yy) * pic.w + tx + xx];
        if (!v) continue;
        const px = s.a & 0x20 ? 7 - xx : xx, py = s.a & 0x40 ? 7 - yy : yy;
        out.px[(s.y - y0 + py) * w + s.x - x0 + px] = v;
      }
    }
    return picCanvas(out, pal, true, zoom);
  },
  animGfxTiles(g) { return this.data[this.loadAnimGfx().tab + g * 4]; },
  animGfxOff(g) { const e = this.loadAnimGfx().tab + g * 4; return this.off(this.data[e + 1], this.w(e + 2)); },
  // 그림 묶음 → 그림 (가로 16칸씩)
  readAnimGfx(g) {
    const n = this.animGfxTiles(g), raw = Array.from(this.gfx.decompress(this.animGfxOff(g))).slice(0, n * 16);
    const tw = Math.min(16, n), th = Math.ceil(n / tw);
    while (raw.length < tw * th * 16) raw.push(0);
    return { pic: tilesToPic(raw, tw, th, false), n };
  },
  writeAnimGfx(g, pic, n) {
    const comp = Lz.compress(picToTiles(pic, false).slice(0, n * 16));
    const p = this.allocPic(comp.length);
    if (p < 0) return '롬에 그림을 넣을 빈 공간이 부족해요';
    this.data.set(comp, p);
    const e = this.loadAnimGfx().tab + g * 4, addr = 0x4000 + p % 0x4000;
    this.data[e + 1] = Math.floor(p / 0x4000); this.data[e + 2] = addr & 0xFF; this.data[e + 3] = addr >> 8;
    this.gfx.gfxCache.delete(p);
    this.dirty = true;
    return null;
  }
});

Object.assign(App.prototype, {
  // 기술 편집 창 아래쪽: 이 기술 애니메이션에 나오는 그림들
  moveGfxSection(mv) {
    const rom = this.rom, A = rom.loadAnimGfx();
    const fs = el('fieldset', { style: 'margin-top:12px' }, el('legend', { text: '기술 그림 (배틀 애니메이션)' }),
      el('div', { class: 'bar' }, el('button', { text: '🎬 이 기술 애니메이션 편집기로 열기 (실제 게임처럼 재생)', style: 'font-weight:bold;background:#dcf0ff', onclick: () => this.battleAnimEditor(mv) })));
    if (!A || !A.found) { fs.append(el('div', { class: 'hint', text: '이 롬에서 기술 애니메이션 그림을 찾지 못했어요' })); return fs; }
    const ko = rom.cs.kind === 'ko' || rom.cs.kind === 'koen';
    const gName = g => '#' + String(g).padStart(2, '0') + ' ' + (ko ? ANIM_GFX_KO[g] : ANIM_GFX_NAMES[g]);
    const gl = A.byMove[mv] || [];
    if (!gl.length) { fs.append(el('div', { class: 'hint', text: '이 기술 애니메이션은 따로 불러오는 그림이 없어요 (화면 흔들기·색 바꾸기만 써요)' })); return fs; }
    // 움직임 미리보기: 프레임마다 미리 그려 두고 시간에 맞춰 바꿔 보여줌 (1 = 1/60초)
    const speedSel = sel([[1, '보통 속도'], [0.5, '느리게 (½)'], [0.25, '아주 느리게 (¼)']], 1);
    const players = [];
    const motionCanvas = (pic, n, mo) => {
      const Z = 3, frames = mo.frames.map(f => f.set != null ? { spr: rom.animSprites(f), dur: f.dur } : { spr: null, dur: f.wait });
      const all = frames.flatMap(f => f.spr || []);
      if (!all.length) return null;
      const x0 = Math.min(...all.map(s => s.x)), y0 = Math.min(...all.map(s => s.y));
      const w = Math.max(...all.map(s => s.x)) + 8 - x0, h = Math.max(...all.map(s => s.y)) + 8 - y0;
      if (w > 160 || h > 144) return null;
      const pal = rom.animPal(mo.pal);
      const seq = frames.map(f => ({ img: f.spr ? picCanvas(rom.animComposite(pic, n, f.spr, x0, y0, w, h), pal, true, Z) : null, dur: f.dur }));
      if (mo.end === 'delete') seq.push({ img: null, dur: 24 });
      if (mo.end === 'hold') seq.push({ img: seq.filter(s => s.img).pop().img, dur: 40 });
      const total = seq.reduce((a, s) => a + s.dur, 0);
      const cv = el('canvas', { width: w * Z, height: h * Z, style: 'background:repeating-conic-gradient(#e1e1e1 0% 25%, #bebebe 0% 50%) 0 0/8px 8px;border:1px solid #ccc' });
      const g2 = cv.getContext('2d');
      let last = -1;
      players.push(Object.assign(t => {
        let f = Math.floor(t * 60 * +speedSel.value) % total, i = 0;
        while (f >= seq[i].dur) { f -= seq[i].dur; i++; }
        if (i === last) return;
        last = i; g2.clearRect(0, 0, cv.width, cv.height);
        if (seq[i].img) g2.drawImage(seq[i].img, 0, 0);
      }, { cv }));
      return cv;
    };
    const t0 = performance.now();
    const tick = () => { if (!fs.isConnected && players.started) return; if (fs.isConnected) players.started = true; const t = (performance.now() - t0) / 1000; for (const p of players) if (p.cv.isConnected) p(t); requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
    fs.append(el('div', { class: 'hint', text: '그림 묶음은 여러 기술이 같이 써요. 바꾸면 같은 그림을 쓰는 기술이 모두 바뀌어요. 1번 색은 투명이고, 나머지 3색은 색 묶음(회색·노랑·빨강·초록·파랑·갈색)에서 정해져요.' }));
    // 색 묶음 (물체 색 번호 2~7). 0·1 은 배틀 중인 포켓몬 색
    const PAL_NAME = ko ? { 0: '상대 포켓몬 색', 1: '내 포켓몬 색', 2: '회색', 3: '노랑', 4: '빨강', 5: '초록', 6: '파랑', 7: '갈색' }
      : { 0: 'Enemy Pokémon colors', 1: 'Your Pokémon colors', 2: 'Gray', 3: 'Yellow', 4: 'Red', 5: 'Green', 6: 'Blue', 7: 'Brown' };
    const palEditable = p => A.pals >= 0 && p >= 2 && p <= 7;
    const paints = [];
    for (const g of gl) {
      const row = el('div', { style: 'display:flex;flex-direction:column;gap:6px;margin-top:8px;padding-top:8px;border-top:1px solid var(--line)' });
      const msg = el('div');
      const CHECK = 'background:repeating-conic-gradient(#e1e1e1 0% 25%, #bebebe 0% 50%) 0 0/8px 8px;image-rendering:pixelated;max-width:none';
      const usedPals = rom.animGfxPals(g);
      let curPal = usedPals.length ? usedPals[0] : 2;
      const paint = () => {
        const PAL = rom.animPal(curPal);
        const { pic, n } = rom.readAnimGfx(g), Z = 3, c = picCanvas(pic, PAL, true, Z);
        // 8×8 조각 경계선
        const gx = c.getContext('2d'); gx.fillStyle = 'rgba(47,111,236,.35)';
        for (let x = 8; x < pic.w; x += 8) gx.fillRect(x * Z, 0, 1, c.height);
        for (let y = 8; y < pic.h; y += 8) gx.fillRect(0, y * Z, c.width, 1);
        c.style.cssText = CHECK + ';border:1px solid #888';
        // 게임이 조각을 붙이고 뒤집어서 만드는 실제 모양
        const shapes = el('div', { class: 'bar', style: 'align-items:flex-end;gap:6px;margin-top:6px' });
        for (const s of rom.animShapes(g)) { const sc = rom.animShapeCanvas(pic, n, s, rom.animPal(s.pal), 3); if (sc) { sc.style.cssText = CHECK + ';border:1px solid #ccc'; shapes.append(sc); } }
        // 움직임 미리보기: 게임의 프레임 순서·길이 그대로 계속 반복 재생
        const motions = el('div', { class: 'bar', style: 'align-items:flex-end;gap:6px;margin-top:6px' });
        for (const mo of rom.animMotions(g)) { const mc = motionCanvas(pic, n, mo); if (mc) motions.append(mc); }
        const sheet = el('div', null, el('div', { class: 'hint', text: '저장된 조각 (8×8 칸 ' + n + '개)' }), c,
          shapes.children.length ? el('div', { class: 'hint', style: 'margin-top:6px', text: '게임에서 조각을 붙이고 뒤집어서 만드는 모양' }) : null, shapes.children.length ? shapes : null,
          motions.children.length ? el('div', { class: 'bar', style: 'margin-top:6px' }, el('span', { class: 'hint', text: '▶ 움직임 미리보기 (게임 프레임 그대로 반복)' }), speedSel) : null, motions.children.length ? motions : null);
        const others = A.byGfx[g].filter(m => m !== mv);
        // 색: 이 그림이 쓰는 색 묶음 고르기 + 그 색 묶음의 3색 바꾸기 (같은 색 묶음을 쓰는 다른 그림도 같이 바뀜)
        const palSel = sel((usedPals.length ? usedPals : [2]).map(p => [p, PAL_NAME[p] || ('색 ' + p)]), curPal, v => { curPal = v; paint(); });
        const sw = [1, 2, 3].map(k => {
          const i = el('input', { type: 'color', value: rgbHex(PAL[k]), style: 'width:40px;height:26px' });
          i.disabled = !palEditable(curPal);
          i.addEventListener('change', () => {
            const cols = rom.animPal(curPal).map(c => c.slice()); cols[k] = SNAP(hexRgb(i.value));
            rom.setAnimPal(curPal, cols);
            for (const p of paints) p();
            this.say('기술 그림 색 묶음 [' + PAL_NAME[curPal] + ']을(를) 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
          });
          return i;
        });
        const palUsers = rom.animPalUsers(curPal).filter(x => x !== g);
        const palBar = el('div', null,
          el('div', { class: 'bar' }, el('span', { text: '색 묶음:' }), palSel, el('span', { text: '밝은색' }), sw[0], el('span', { text: '중간색' }), sw[1], el('span', { text: '어두운색' }), sw[2]),
          el('div', { class: 'hint', style: 'max-width:520px', text: !palEditable(curPal) ? '이 색은 배틀 중인 포켓몬 색을 그대로 써서 여기서는 못 바꿔요.'
            : (palUsers.length ? '이 색 묶음을 같이 쓰는 그림 ' + palUsers.length + '개: ' + palUsers.map(x => ko ? ANIM_GFX_KO[x] : ANIM_GFX_NAMES[x]).join(', ') + ' — 색을 바꾸면 같이 바뀌어요.' : '이 그림만 쓰는 색 묶음이에요.')
              + ' 💡 이 기술만 다른 색으로 하려면 위 [🎬 애니메이션 편집기]에서 물체를 고르고 "색 묶음"을 바꾸세요.' }));
        row.replaceChildren(sheet, el('div', null,
          el('b', { text: gName(g) + '  (' + n + '칸 · ' + pic.w + '×' + pic.h + ' 픽셀)' }),
          el('div', { class: 'hint', style: 'max-width:420px', text: others.length ? '같이 쓰는 기술 ' + others.length + '개: ' + others.slice(0, 12).map(m => rom.moveName(m)).join(', ') + (others.length > 12 ? ' …' : '') : '이 기술만 쓰는 그림이에요' }),
          palBar,
          el('div', { class: 'bar' },
            el('button', { text: '도트로 그리기…', style: 'background:#c8e6ff', onclick: () => edit(rom.readAnimGfx(g)) }),
            el('button', { text: '그림 파일 불러오기…', onclick: () => importFile(rom.readAnimGfx(g)) }),
            el('button', { text: 'PNG로 저장', onclick: () => downloadCanvas(picCanvas(pic, PAL, true), 'anim_' + ANIM_GFX_NAMES[g] + '.png') })), msg));
      };
      paints.push(paint);
      const save = (pic, n) => {
        const e = rom.writeAnimGfx(g, pic, n);
        if (e) { this.okMsg(msg, e, true); return; }
        paint(); this.okMsg(msg, '적용했어요');
        this.say('기술 그림 ' + gName(g) + '을(를) 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
      };
      const edit = ({ pic, n }) => { const ok = palEditable(curPal); this.pixelEditor({ title: gName(g) + ' · ' + PAL_NAME[curPal], pic, pal: rom.animPal(curPal), editable: [false, ok, ok, ok], transparent0: true,
        note: pic.w + '×' + pic.h + ' 픽셀 (8×8 칸 ' + n + '개, 가로 16칸씩). 1번 = 투명, 2~4번 = 밝은색·중간색·어두운색' + (ok ? ' (색을 바꾸면 [' + PAL_NAME[curPal] + '] 색 묶음을 쓰는 그림이 모두 바뀌어요)' : '') + '. 숫자키 1~4 = 색 고르기',
        onOk: (p, pl, palChanged) => { if (palChanged && ok) { rom.setAnimPal(curPal, pl); for (const q of paints) q(); } save(p, n); } }); };
      const importFile = async ({ pic, n }) => {
        let src;
        try { src = await pickImageFile(); } catch (e) { alert('그림을 열 수 없어요: ' + e.message); return; }
        if (!src) return;
        if (src.w !== pic.w || src.h !== pic.h) alert('그림 크기를 ' + pic.w + '×' + pic.h + ' 픽셀로 맞춰서 넣어요 (PNG로 저장한 그림을 고쳐서 넣으면 제일 좋아요).');
        // 지금 색 묶음에서 가장 가까운 색 고르기 (투명한 곳 = 1번)
        const gray = picFromImage(src, pic.w, pic.h, rom.animPal(curPal), true);
        save(gray, n);
      };
      paint();
      fs.append(row);
    }
    return fs;
  }
});

// ===== 99-owsprite.js
// ================================================================ 필드 캐릭터 그림 창 (OwSpriteForm.cs)
Object.assign(App.prototype, {
  owDialog() {
    const rom = this.rom;
    let all = rom.owSprites();
    if (!all.length) { alert('이 롬에서 필드 캐릭터 그림 데이터를 찾지 못했어요.'); return; }
    const Z = 5;
    const st = { cur: null, img: null, pals: new Map(), palNum: 0, imgDirty: false, palDirty: false };
    const dirty = () => st.imgDirty || st.palDirty || st.pals.size > 0;
    const palOf = p => st.pals.get(p) || rom.objPal(p);
    const icon = s => { const im = rom.readOw(s), one = newPic(16, 16); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) one.px[y * 16 + x] = im.px[y * im.w + x]; return picCanvas(one, palOf(s.pal), true, 2); };
    const info = el('div'), share = el('div', { style: 'color:#e8590c' }), note = el('div', { style: 'color:#e8590c' }), err = el('div');
    const frames = el('div', { class: 'bar', style: 'align-items:flex-start' });
    const palSel = el('div', { class: 'bar' }), palNote = el('div', { class: 'hint' });
    const sepBtn = el('button', { text: '이 캐릭터만 따로 쓰기', onclick: () => {
      const e = rom.separateOw(st.cur);
      if (e) { this.okMsg(err, e, true); return; }
      all = rom.owSprites(); st.cur = all.find(x => x.id === st.cur.id);
      show(); this.okMsg(err, '이 캐릭터만 쓰는 그림으로 복사했어요');
    } });
    const show = () => {
      const s = st.cur;
      if (!s) return;
      info.textContent = hex2(s.id) + '번 ' + Names.sprite(s.id) + ' · ' + owKind(s) + ' · 그림 위치 ' + hex2(s.bank) + ':' + s.addr.toString(16).toUpperCase().padStart(4, '0');
      const sh = rom.sharingOw(s, all);
      share.textContent = sh.length ? '⚠ 이 그림을 다른 캐릭터 ' + sh.length + '개(' + sh.slice(0, 3).map(x => Names.sprite(x.id)).join(', ') + ')도 같이 써요. 고치면 같이 바뀌어요.' : '';
      sepBtn.style.display = sh.length ? '' : 'none';
      frames.replaceChildren();
      const pal = palOf(st.palNum), names = owFrameNames(s);
      for (let f = 0; f < owFrames(s); f++) {
        const one = newPic(16, 16);
        for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) one.px[y * 16 + x] = st.img.px[y * st.img.w + f * 16 + x];
        const c = picCanvas(one, pal, true, Z);
        c.style.background = 'repeating-conic-gradient(#e1e1e1 0% 25%, #bebebe 0% 50%) 0 0/20px 20px';
        frames.append(el('div', { style: 'text-align:center;font-size:12px;color:#666' }, c, el('div', { text: names[f] })));
      }
      palSel.replaceChildren(el('span', { text: '색 묶음' }));
      for (let p = 0; p < 8; p++) {
        const c = palOf(p), n = all.filter(x => x.pal === p).length;
        const b = el('button', { title: p + '번 묶음 (' + n + '명 사용)', style: 'padding:2px 6px;' + (p === st.palNum ? 'outline:3px solid var(--accent)' : ''), onclick: () => { if (p !== st.palNum) { st.palNum = p; st.palDirty = true; show(); } } },
          ...[1, 2, 3].map(i => el('span', { style: 'display:inline-block;width:16px;height:16px;background:' + rgbCss(c[i]) })), el('span', { text: ' ' + p }));
        palSel.append(b);
      }
      const users = all.filter(x => x.pal === st.palNum && x.id !== s.id).length;
      palNote.textContent = '이 캐릭터는 ' + st.palNum + '번 색 묶음을 써요. 같은 묶음을 쓰는 캐릭터 ' + users + '명. 묶음의 색은 [도트로 그리기]에서 바꿀 수 있어요.';
      note.textContent = dirty() ? '(아직 적용 안 함)' : '';
    };
    const load = s => { st.cur = s; st.img = rom.readOw(s); st.palNum = s.pal; st.imgDirty = st.palDirty = false; st.pals.clear(); err.textContent = ''; show(); };
    const drawIt = () => {
      const s = st.cur;
      this.pixelEditor({ title: hex2(s.id) + ' ' + Names.sprite(s.id), pic: st.img, pal: palOf(st.palNum), editable: [false, true, true, true], transparent0: true, frameW: 16, frameNames: owFrameNames(s),
        note: owKind(s) + ' — 16×16 장면 ' + owFrames(s) + '장 (빨간 세로줄로 나눔). 1번 색은 투명, 2~4번 색은 RGB 로 바꿀 수 있어요.\n색을 바꾸면 ' + st.palNum + '번 색 묶음을 쓰는 다른 캐릭터 ' +
          all.filter(x => x.pal === st.palNum && x.id !== s.id).length + "명도 같이 바뀌어요. 걷는 장면은 '좌우 대칭'을 끄고, 정면은 켜고 그리면 편해요. 숫자키 1~4 = 색",
        onOk: (p, pl, palChanged) => { st.img = p; st.imgDirty = true; if (palChanged) st.pals.set(st.palNum, pl); show(); } });
    };
    const copyFrom = () => {
      const same = all.filter(x => x.id !== st.cur.id && owFrames(x) === owFrames(st.cur));
      let close;
      const lst = el('div', { class: 'list', style: 'max-height:60vh' });
      for (const s of same) lst.append(el('div', { class: 'it', style: 'display:flex;align-items:center;gap:8px', onclick: () => { close(); st.img = rom.readOw(s); st.imgDirty = true; show(); } }, icon(s), el('span', { text: hex2(s.id) + ' ' + Names.sprite(s.id) })));
      close = this.dialog('바탕으로 쓸 캐릭터 (누르면 그 그림으로 시작)', () => lst, null, true);
    };
    const apply = () => {
      if (!st.cur || !dirty()) return;
      if (st.imgDirty) {
        const sh = rom.sharingOw(st.cur, all);
        if (sh.length) {
          if (!confirm('이 그림은 다른 캐릭터 ' + sh.length + '개도 같이 써요.\n\n[확인] 모두 같이 바꾸기\n[취소] 다른 방법 고르기')) {
            if (!confirm('이 캐릭터만 따로 복사해서 바꿀까요?\n\n[확인] 이 캐릭터만 바꾸기\n[취소] 그만두기')) return;
            const e = rom.separateOw(st.cur);
            if (e) { this.okMsg(err, e, true); return; }
            all = rom.owSprites(); st.cur = all.find(x => x.id === st.cur.id);
          }
        }
        rom.writeOw(st.cur, st.img);
      }
      if (st.palDirty) rom.setOwPal(st.cur, st.palNum);
      for (const [p, c] of st.pals) rom.setObjPal(p, c);
      st.imgDirty = st.palDirty = false; st.pals.clear();
      all = rom.owSprites(); st.cur = all.find(x => x.id === st.cur.id);
      this.spriteCache.clear(); this.mapCache = new Map(); this.drawMap();
      fillList(); show(); this.okMsg(err, '적용했어요');
      this.say('캐릭터 그림을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
    };
    const q = el('input', { type: 'search', placeholder: '캐릭터 찾기' }), lst = el('div', { class: 'list', style: 'max-height:62vh' });
    const fillList = () => {
      const s = q.value.trim();
      lst.replaceChildren();
      for (const o of all) {
        if (s && !Names.sprite(o.id).includes(s) && String(o.id) !== s) continue;
        const it = el('div', { class: 'it' + (st.cur && o.id === st.cur.id ? ' on' : ''), style: 'display:flex;align-items:center;gap:8px', onclick: () => {
          if (st.cur && o.id === st.cur.id) return;
          if (dirty() && !confirm('적용하지 않은 변경이 있어요. 버릴까요?')) return;
          load(o); fillList();
        } }, icon(o), el('span', { text: hex2(o.id) + ' ' + Names.sprite(o.id) }));
        lst.append(it);
      }
    };
    q.addEventListener('input', fillList);
    load(all[0]); fillList();
    const body = el('div', null, info, frames, el('div', { class: 'bar' }, share, sepBtn),
      el('div', { class: 'bar' }, el('button', { text: '도트로 그리기…', style: 'background:#c8e6ff', onclick: drawIt }), el('button', { text: '다른 캐릭터 그림을 바탕으로…', onclick: copyFrom }),
        el('button', { text: 'PNG로 저장…', onclick: () => downloadCanvas(picCanvas(st.img, palOf(st.palNum), true), hex2(st.cur.id) + '_' + Names.sprite(st.cur.id) + '.png') })),
      note,
      el('fieldset', null, el('legend', { text: '색' }), palSel, palNote),
      el('div', { class: 'bar' }, el('button', { class: 'apply', text: '적용', onclick: apply }), err),
      el('div', { class: 'hint', text: '· 필드 캐릭터는 16×16 장면 여러 장이고, 색은 투명 + 3색이에요 (2세대 규칙)\n· 색은 캐릭터마다 따로가 아니라 8개 색 묶음 중 하나를 골라 써요. 묶음의 색을 바꾸면 같은 묶음을 쓰는 모든 캐릭터 색이 바뀌어요\n· 새 캐릭터 번호를 늘릴 수는 없어서, 잘 안 쓰는 캐릭터 하나를 골라 새 모습으로 바꾸는 방식이에요\n· 적용한 뒤 메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요' }));
    this.dialog('필드 캐릭터 그림 편집 (주인공·NPC·물건)', () => el('div', { class: 'side', style: 'grid-template-columns:250px minmax(0,1fr)' }, el('div', { class: 'box' }, q, lst), body));
  }
});

// ===== 99-pixel.js
// ================================================================ 도트 편집 창 (PixelEditor.cs) · 포켓몬 그림 창 (SpriteForm.cs)
Object.assign(App.prototype, {
  _spriteConvert: SpriteConvert,   // 자동 테스트용
  // o = { title, pic, pal: [rgb×4], editable: [bool×4], transparent0, frameW, frameNames, note, onOk(pic, pal, palChanged) }
  pixelEditor(o) {
    const T0 = !!o.transparent0, editable = o.editable;
    const pal = o.pal.map(c => c.slice());
    let palChanged = false;
    const preview = el('div'), pos = el('div', { class: 'hint' });
    const pc = pixelCanvas({ pic: o.pic, palAt: () => pal, transparent0: T0, frameW: o.frameW || 0,
      onHover: c => pos.textContent = c ? 'x ' + c[0] + ', y ' + c[1] + (o.frameW ? '  (장면 ' + (Math.floor(c[0] / o.frameW) + 1) + ')' : '') : '',
      onPick: () => showColors(),
      onChange: () => {
        const c = picCanvas(pc.st.pic, pal, T0, 2);
        if (T0) c.style.background = 'repeating-conic-gradient(#e1e1e1 0% 25%, #bebebe 0% 50%) 0 0/8px 8px';
        preview.replaceChildren(c);
      },
      exportName: o.title });
    // 색
    const sw = [0, 1, 2, 3].map(i => el('button', { style: 'width:54px;height:40px;font-size:11px;text-align:right;vertical-align:bottom', onclick: () => { pc.st.color = i; showColors(); } }));
    sw.forEach((b, i) => b.addEventListener('contextmenu', e => { e.preventDefault(); if (editable[i]) { pc.st.color = i; showColors(); pickInput.click(); } }));
    const pickInput = el('input', { type: 'color', style: 'width:0;height:0;opacity:0;position:absolute' });
    const setCol = c => { if (!editable[pc.st.color]) return; pal[pc.st.color] = SNAP(c); palChanged = true; showColors(true); pc.changed(); };
    pickInput.addEventListener('input', () => setCol(hexRgb(pickInput.value)));
    const rgb = rgbInputs(c => setCol(c));
    const info = el('span', { class: 'hint' });
    const showColors = keepNums => {
      sw.forEach((b, i) => {
        const c = pal[i];
        b.style.background = T0 && i === 0 ? '#dcdcdc' : rgbCss(c);
        b.style.color = SpriteConvert.hsl(c)[2] < 0.5 && !(T0 && i === 0) ? '#fff' : '#000';
        b.textContent = (T0 && i === 0 ? '투명 ' : editable[i] ? '' : '고정 ') + (i + 1);
        b.style.border = i === pc.st.color ? '4px solid red' : '1px solid gray';
      });
      const c = pal[pc.st.color];
      if (!keepNums) rgb.set(c);
      rgb.enable(editable[pc.st.color]);
      pickInput.value = rgbHex(c);
      info.textContent = editable[pc.st.color] ? rgbHex(c).toUpperCase() + '  ([색 고르기…], 색칸 오른쪽 클릭, R·G·B 로 바꾸기)' : '이 색은 2세대 규칙상 고정이라 바꿀 수 없어요';
    };
    pc.onColorKey = showColors;
    const right = el('div', { style: 'width:240px;flex-shrink:0' }, el('b', { text: '게임 크기 미리보기 (×2)' }), preview,
      o.frameNames ? el('div', { class: 'hint', text: '장면 순서 (왼쪽부터): ' + o.frameNames.join(', ') }) : null, pos);
    const top = el('div', { class: 'bar' }, el('b', { text: '색' }), ...sw,
      el('button', { text: '색 고르기…', onclick: () => { if (editable[pc.st.color]) pickInput.click(); } }), pickInput, ...rgb.els, info);
    let close;
    close = this.dialog(o.title, () => el('div', null, top, o.note ? el('div', { class: 'hint', style: 'margin-bottom:6px', text: o.note }) : null,
      el('div', { style: 'display:flex;gap:10px;align-items:flex-start' }, pc.left, pc.wrap, right),
      el('div', { class: 'bar', style: 'justify-content:flex-end;margin-top:8px' },
        el('button', { class: 'apply', text: '확인', onclick: () => { close(); o.onOk(pc.st.pic, pal, palChanged); } }),
        el('button', { text: '취소', onclick: () => close() }))), () => pc.dispose());
    setTimeout(() => pc.fit(), 0);
    showColors(); pc.changed();
  },

  // ---------------------------------------------------------------- 포켓몬 그림 창 (SpriteForm)
  spriteDialog() {
    const rom = this.rom;
    if (!rom.spritesAvailable) { alert('이 롬에서 포켓몬 그림 데이터를 찾지 못했어요.'); return; }
    const Z = 3;
    const st = { mon: 0, front: null, back: null, frontTiles: 7, fd: false, bd: false, pd: false, normal: null, shiny: null, src: null, showShiny: false, outline: true, takeColors: true, autoBack: true };
    const pal = () => st.showShiny ? st.shiny : st.normal;
    const frontBox = el('div', { style: 'width:' + (56 * Z + 4) + 'px;height:' + (56 * Z + 4) + 'px;border:1px solid #888;background:#fff;position:relative' });
    const backBox = el('div', { style: 'width:' + (56 * Z + 4) + 'px;height:' + (56 * Z + 4) + 'px;border:1px solid #888;background:#fff;position:relative' });
    const frontNote = el('div', { style: 'color:#e8590c;font-size:12.5px;min-height:18px' }), backNote = el('div', { style: 'color:#e8590c;font-size:12.5px;min-height:18px' });
    const err = el('div');
    const sizeSel = sel([[5, '5×5 칸 (작음)'], [6, '6×6 칸 (보통)'], [7, '7×7 칸 (큼)']], 7, t => {
      if (!st.front || t === st.frontTiles) return;
      if (st.src) convertFront(st.src, t);
      else { st.front = resizePic(st.front, st.frontTiles, t); st.frontTiles = t; st.fd = true; frontNote.textContent = '(아직 적용 안 함)'; redraw(); }
    });
    const swatches = [0, 1, 2, 3].map(k => { const i = el('input', { type: 'color', style: 'width:44px;height:28px' }); i.addEventListener('input', () => {
      const c = SNAP(hexRgb(i.value));
      if (k < 2) { st.normal = st.normal.slice(); st.normal[k + 1] = c; } else { st.shiny = st.shiny.slice(); st.shiny[k - 1] = c; }
      st.pd = true; redraw();
    }); return i; });
    const show = (box, pic, tiles) => {
      box.replaceChildren();
      if (!pic) return;
      const size = tiles * 8, c = picCanvas(pic, pal(), false, Z);
      c.style.cssText = 'position:absolute;left:' + ((56 - size) / 2 * Z + 1) + 'px;top:' + ((56 - size) * Z + 1) + 'px';
      box.append(c);
    };
    const redraw = () => {
      for (let i = 0; i < 4; i++) swatches[i].value = rgbHex(i < 2 ? st.normal[i + 1] : st.shiny[i - 1]);
      show(frontBox, st.front, st.frontTiles); show(backBox, st.back, 6);
    };
    const resizePic = (img, from, to) => {
      const fs = from * 8, ts = to * 8, r = newPic(ts, ts), dx = Math.floor((ts - fs) / 2), dy = ts - fs;
      for (let y = 0; y < fs; y++) for (let x = 0; x < fs; x++) { const nx = x + dx, ny = y + dy; if (nx >= 0 && ny >= 0 && nx < ts && ny < ts) r.px[ny * ts + nx] = img.px[y * fs + x]; }
      return r;
    };
    const load = m => {
      st.mon = m; err.textContent = ''; frontNote.textContent = backNote.textContent = '';
      st.fd = st.bd = st.pd = false; st.src = null;
      const f = rom.readPicP(m, false), b = rom.readPicP(m, true);
      st.front = f; st.frontTiles = f.tiles; st.back = b;
      st.normal = rom.monPaletteRGB(m, false); st.shiny = rom.monPaletteRGB(m, true);
      sizeSel.value = st.frontTiles;
      redraw();
    };
    const convertFront = (src, tiles) => {
      const res = SpriteConvert.convert(src, tiles, st.takeColors ? null : st.normal, st.outline);
      st.src = src; st.front = res.img; st.frontTiles = tiles; st.fd = true; frontNote.textContent = '(아직 적용 안 함)';
      if (st.takeColors) { st.normal = [WHITE, res.c1, res.c2, BLACK]; st.pd = true; }
      if (st.autoBack) { st.back = SpriteConvert.convert(SpriteConvert.backSource(src), 6, st.normal, st.outline).img; st.bd = true; backNote.textContent = '(앞모습 그림으로 만듦 · 아직 적용 안 함)'; }
      sizeSel.value = tiles;
      redraw();
    };
    const unown = () => { if (st.mon === 201) { alert('안농은 글자마다 그림이 따로 있어서 여기서는 바꿀 수 없어요.'); return true; } return false; };
    const importPic = async isBack => {
      if (unown()) return;
      let src;
      try { src = await pickImageFile(); } catch (e) { alert('그림을 열 수 없어요: ' + e.message); return; }
      if (!src) return;
      try {
        if (!isBack) convertFront(src, +sizeSel.value);
        else { st.back = SpriteConvert.convert(src, 6, st.normal, st.outline).img; st.bd = true; backNote.textContent = '(아직 적용 안 함)'; redraw(); }
        err.textContent = '';
      } catch (e) { this.okMsg(err, e.message, true); }
    };
    const drawPic = isBack => {
      if (unown()) return;
      const img = isBack ? st.back : st.front, sh = st.showShiny, px = isBack ? 48 : st.frontTiles * 8;
      this.pixelEditor({ title: pad3(st.mon) + ' ' + rom.monName(st.mon) + ' ' + (isBack ? '뒷모습' : '앞모습'), pic: img, pal: pal(), editable: [false, true, true, false],
        note: (isBack ? '뒷모습' : '앞모습') + ' ' + px + '×' + px + ' 픽셀 (' + px / 8 + '×' + px / 8 + ' 칸). 2세대 포켓몬 그림은 4색: 1번 흰색·4번 검정은 고정이고, 2·3번 색은 RGB 로 마음대로 바꿀 수 있어요.\n' +
          (sh ? '빛나는' : '보통') + ' 색은 앞·뒷모습이 같이 써요. 앞모습 크기(5·6·7칸)는 창을 닫은 뒤 [크기]에서 바꿔요. 숫자키 1~4 = 색 고르기',
        onOk: (p, pl, palChanged) => {
          if (isBack) { st.back = p; st.bd = true; backNote.textContent = '(아직 적용 안 함)'; }
          else { st.front = p; st.fd = true; frontNote.textContent = '(아직 적용 안 함)'; st.src = null; }
          if (palChanged) { if (sh) st.shiny = pl; else st.normal = pl; st.pd = true; }
          redraw();
        } });
    };
    const exportPic = (img, what) => { if (img) downloadCanvas(picCanvas(img, pal(), false), pad3(st.mon) + '_' + rom.monName(st.mon) + '_' + what + '.png'); };
    const apply = () => {
      try {
        if (st.fd) { const e = rom.writePic(st.mon, false, st.front, st.frontTiles); if (e) { this.okMsg(err, e, true); return; } }
        if (st.bd) { const e = rom.writePic(st.mon, true, st.back, 6); if (e) { this.okMsg(err, e, true); return; } }
        if (st.pd) { rom.setMonPalette(st.mon, false, st.normal[1], st.normal[2]); rom.setMonPalette(st.mon, true, st.shiny[1], st.shiny[2]); }
        st.fd = st.bd = st.pd = false; st.src = null; frontNote.textContent = backNote.textContent = '';
        this.okMsg(err, '적용했어요');
        this.say('포켓몬 그림을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
      } catch (e) { this.okMsg(err, e.message, true); }
    };
    const items = this.monOptions(false).map(([v, t]) => ({ value: v, label: t }));
    const list = listPanel(items, m => {
      if (m === st.mon) return;
      if ((st.fd || st.bd || st.pd) && !confirm('적용하지 않은 변경이 있어요. 버릴까요?')) return;
      load(m);
    }, '포켓몬 찾기', 1);
    const opt = (label, key) => { const [c, l] = check(label, st[key]); c.addEventListener('change', () => { st[key] = c.checked; if (key === 'showShiny') redraw(); }); return l; };
    const [dc, dl] = check('점무늬로 중간 명암 표현하기 (원작 도트 느낌)', SpriteConvert.dither);
    dc.addEventListener('change', () => { SpriteConvert.dither = dc.checked; if (st.src) convertFront(st.src, st.frontTiles); });
    const names = ['보통 밝은색', '보통 어두운색', '빛나는 밝은색', '빛나는 어두운색'];
    const body = el('div', null,
      el('div', { class: 'bar', style: 'align-items:flex-start;gap:12px' },
        el('fieldset', null, el('legend', { text: '앞모습 (상대 쪽)' }), frontBox, frontNote,
          el('div', { class: 'bar' }, el('button', { text: '도트로 그리기…', style: 'background:#c8e6ff', onclick: () => drawPic(false) }), el('button', { text: '앞모습 사진 가져오기…', onclick: () => importPic(false) }), el('button', { text: 'PNG로 저장', onclick: () => exportPic(st.front, '앞모습') })),
          el('div', { class: 'bar' }, el('span', { text: '크기' }), sizeSel)),
        el('fieldset', null, el('legend', { text: '뒷모습 (내 쪽)' }), backBox, backNote,
          el('div', { class: 'bar' }, el('button', { text: '도트로 그리기…', style: 'background:#c8e6ff', onclick: () => drawPic(true) }), el('button', { text: '뒷모습 사진 가져오기…', onclick: () => importPic(true) }), el('button', { text: 'PNG로 저장', onclick: () => exportPic(st.back, '뒷모습') })),
          el('div', { class: 'hint', text: '뒷모습은 6×6 칸 고정' }))),
      el('fieldset', null, el('legend', { text: '색' }),
        el('div', { class: 'bar' }, ...names.flatMap((n, i) => [el('span', { text: n }), swatches[i]])), opt('빛나는(색이 다른) 포켓몬 색으로 보기', 'showShiny'),
        el('div', { class: 'hint', text: '흰색과 검정은 고정이고, 포켓몬마다 색 2개를 정할 수 있어요 (2세대 규칙). 색 칸을 누르면 바꿀 수 있어요.' })),
      el('fieldset', null, el('legend', { text: '사진 바꾸기 설정' }),
        el('div', null, opt('검은 테두리 자동으로 넣기 (큰 사진·그림일 때 추천)', 'outline')), el('div', null, opt('앞모습 사진의 색으로 포켓몬 색도 바꾸기', 'takeColors')),
        el('div', null, opt('앞모습 그림 한 장으로 뒷모습도 자동으로 만들기 (좌우 뒤집고 윗부분 확대)', 'autoBack')), el('div', null, dl),
        el('div', { class: 'hint', text: '· 배경이 투명한 PNG가 제일 좋아요. 배경이 있으면 모서리 색을 배경으로 보고 자동으로 지워요\n· 큰 그림은 칸 크기에 맞게 줄이고, 원작처럼 4색으로 또렷하게 바꿔요 (흐릿한 번짐 없음)\n· 이미 도트로 된 작은 그림(56×56 이하)은 줄이지 않고 그대로 써요' })),
      el('div', { class: 'bar' }, el('button', { class: 'apply', text: '적용', onclick: apply }), err),
      el('div', { class: 'hint', text: '적용한 뒤 메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요' }));
    load(1);
    this.dialog('포켓몬 그림 편집', () => el('div', { class: 'side', style: 'grid-template-columns:200px minmax(0,1fr)' }, list, body));
  }
});

// ===== 99-playtest.js
// ================================================================ [▶ 게임으로 확인] (TestRun.cs 의 웹판)
// 지금 고친 내용을 테스트 롬으로 만들어 브라우저 안 에뮬레이터(EmulatorJS, 오픈소스)로 바로 켬. 원래 롬 파일은 그대로
const EMU_DATA = 'https://cdn.emulatorjs.org/stable/data/';

mixin(Rom.prototype, {
  // 고친 대사를 롬 데이터에 넣음 ([저장하기]와 같은 방법). 파일로는 아직 안 썼으니 저장할 게 남아 있다고 표시 → 넣지 못한 대사 목록
  commitTexts() {
    const errors = [];
    let n = 0;
    for (const t of this.texts.values()) {
      if (!t.modified) continue;
      this.validate(t);
      if (t.error) { errors.push(t.current.split('\n')[0] + ' … : ' + t.error); continue; }
      const e = this.writeText(t);
      if (e) errors.push(t.current.split('\n')[0] + ' … : ' + e);
      else { t.original = t.current; t.edited = null; n++; }
    }
    if (n) this.dirty = true;
    this.fixChecksum();
    return errors;
  }
});

Object.assign(App.prototype, {
  playTest() {
    const rom = this.rom;
    if (!rom) return;
    const bad = [...rom.texts.values()].filter(t => t.modified && (rom.validate(t), t.error));
    if (bad.length) { alert('고쳐야 할 대사가 ' + bad.length + '개 있어요 (빨간 글씨). 먼저 고쳐주세요.'); return; }
    const errors = rom.commitTexts();
    if (errors.length) alert('넣지 못한 대사가 있어요:\n\n' + errors.slice(0, 10).join('\n'));
    this.buildTree();
    const bytes = rom.data.slice();
    const romUrl = URL.createObjectURL(new Blob([bytes], { type: 'application/octet-stream' }));
    this.playSaveSlot = this.playSaveSlot || 'GSCTool-테스트';
    const frameBox = el('div', { style: 'position:relative;width:100%;max-width:640px;aspect-ratio:10/9;background:#000;margin:0 auto' });
    const note = el('div', { class: 'hint' });
    let frame = null;
    const start = () => {
      if (frame) frame.remove();
      frame = el('iframe', { allow: 'autoplay; gamepad; fullscreen', style: 'position:absolute;inset:0;width:100%;height:100%;border:0' });
      // 에뮬레이터는 따로 떨어진 틀 안에서 돌려서 툴 화면과 섞이지 않게 함. 세이브는 같은 이름이면 다음 테스트에도 이어짐
      frame.srcdoc = '<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;height:100%;background:#000;overflow:hidden}#wrap{width:100%;height:100%}</style></head><body><div id="wrap"><div id="game"></div></div>' +
        '<script>EJS_player="#game";EJS_core="gambatte";EJS_gameName=' + JSON.stringify(this.playSaveSlot) + ';EJS_gameUrl=' + JSON.stringify(romUrl) +
        ';EJS_pathtodata=' + JSON.stringify(EMU_DATA) + ';EJS_startOnLoaded=true;EJS_color="#2f6fec";<\/script>' +
        '<script src="' + EMU_DATA + 'loader.js"><\/script></body></html>';
      frameBox.append(frame);
      setTimeout(() => { try { frame.focus(); } catch (e) { } }, 500);
    };
    const download = () => {
      const a = el('a', { href: romUrl, download: rom.fileName.replace(/(\.gbc?)$/i, '') + '_테스트.gbc' });
      document.body.append(a); a.click(); a.remove();
    };
    const fresh = el('button', { text: '🆕 테스트 세이브 지우고 새 게임으로', onclick: () => {
      if (!confirm('테스트용 세이브를 새로 시작할까요? (원래 게임 세이브와는 상관없어요)')) return;
      this.playSaveSlot = 'GSCTool-테스트-' + Date.now();
      start();
    } });
    let close;
    close = this.dialog('▶ 게임으로 확인 — 지금 고친 내용으로 테스트', () => el('div', null,
      el('div', { class: 'bar' },
        el('button', { text: '🔄 다시 켜기', onclick: start }), fresh,
        el('button', { text: '💾 테스트 롬 내려받기 (내 에뮬레이터로 열기)', onclick: download })),
      frameBox,
      el('div', { class: 'hint', style: 'margin-top:8px', text:
        '· 고친 내용(대사·NPC·지도·음악 등)을 넣은 테스트 롬으로 켜요. 원래 롬 파일은 그대로고, 고친 걸 남기려면 메인 화면 [저장하기]를 눌러요\n' +
        '· 키보드: 방향키 이동, Z = A 버튼, X = B 버튼, Enter = START, Shift(오른쪽) = SELECT (에뮬레이터 화면 아래 메뉴에서 키를 바꿀 수 있어요)\n' +
        '· 테스트 세이브는 이 브라우저에 남아서 다음에 [▶ 게임으로 확인]을 눌러도 이어서 할 수 있어요. 진행 중인 세이브(.sav)는 에뮬레이터 메뉴의 세이브 불러오기로 넣을 수 있어요\n' +
        '· 에뮬레이터는 오픈소스 EmulatorJS 를 그 사이트(cdn.emulatorjs.org)에서 불러와요. 롬 파일은 내 컴퓨터 안에서만 쓰이고 어디로도 올라가지 않아요\n' +
        '· 화면이 안 나오면 [테스트 롬 내려받기]로 받아서 쓰던 에뮬레이터로 열어 보세요' }), note),
      () => { if (frame) frame.remove(); setTimeout(() => URL.revokeObjectURL(romUrl), 1000); });
    start();
    this.say('▶ 테스트 롬으로 게임을 켰어요 (원래 롬 파일은 그대로 · 고친 걸 남기려면 [저장하기])');
  }
});

// ===== 99-preset.js
// ================================================================ 프리셋: 포켓몬·기술 능력치를 파일로 내보내고 다른 롬에 불러오기
// 포켓몬·기술 번호는 금·은 롬마다 같아서 번호로 저장 (한글판 ↔ 북미판 ↔ 개조롬)
const PRESET_FORMAT = 'gsc-tool-preset';
mixin(Rom.prototype, {
  presetOk() { return this.baseStatsOff >= 0 && this.movesOff >= 0 && this.pokemonNames.length > 251; },
  // 포켓몬 한 마리 → 저장할 값
  presetMon(mon, o) {
    const d = this.data, s = this.statOff(mon), r = {
      types: [d[s + 7], d[s + 8]], stats: [1, 2, 3, 4, 5, 6].map(i => d[s + i]), catchRate: d[s + 9], baseExp: d[s + 10], items: [d[s + 11], d[s + 12]],
      gender: d[s + 13], eggSteps: d[s + 15], growth: d[s + 22], eggGroups: d[s + 23], tmhm: Array.from(d.subarray(s + 24, s + 32))
    };
    if (o.names) r.name = this.pokemonNames[mon];
    if (o.evos && this.evosBank >= 0) { const e = this.readEvos(mon); r.evos = e.evos; r.learnset = e.moves; }
    return r;
  },
  presetMove(mv, o) {
    const d = this.data, m = this.moveOff(mv), r = { effect: d[m + 1], power: d[m + 2], type: d[m + 3], accuracy: d[m + 4], pp: d[m + 5], chance: d[m + 6] };
    if (o.names) r.name = this.moveNames[mv];
    return r;
  },
  // 프리셋 값 넣기 → 문제 있으면 이유 (부분만 들어갈 수 있음)
  applyPresetMon(mon, p, o) {
    const d = this.data, s = this.statOff(mon), b = (v, lo, hi) => Number.isInteger(v) && v >= lo && v <= hi;
    const errs = [];
    if (p.types && b(p.types[0], 0, 255) && b(p.types[1], 0, 255)) { d[s + 7] = p.types[0]; d[s + 8] = p.types[1]; }
    if (p.stats && p.stats.length === 6 && p.stats.every(v => b(v, 1, 255))) p.stats.forEach((v, i) => d[s + 1 + i] = v);
    if (b(p.catchRate, 0, 255)) d[s + 9] = p.catchRate;
    if (b(p.baseExp, 0, 255)) d[s + 10] = p.baseExp;
    if (p.items) p.items.forEach((v, i) => { if (b(v, 0, 255)) d[s + 11 + i] = v; });
    if (b(p.gender, 0, 255)) d[s + 13] = p.gender;
    if (b(p.eggSteps, 0, 255)) d[s + 15] = p.eggSteps;
    if (b(p.growth, 0, 255)) d[s + 22] = p.growth;
    if (b(p.eggGroups, 0, 255)) d[s + 23] = p.eggGroups;
    if (o.tmhm && p.tmhm && p.tmhm.length === 8 && p.tmhm.every(v => b(v, 0, 255))) d.set(p.tmhm, s + 24);
    if (o.names && typeof p.name === 'string' && p.name && p.name !== this.pokemonNames[mon]) { try { this.setPokemonName(mon, p.name); } catch (e) { errs.push(pad3(mon) + ' 이름: ' + e.message); } }
    if (o.evos && this.evosBank >= 0 && Array.isArray(p.evos) && Array.isArray(p.learnset)) {
      const ev = p.evos.filter(e => b(e.method, 1, 5) && b(e.species, 1, 251)).map(e => ({ method: e.method, p1: e.p1 & 255, p2: (e.p2 || 0) & 255, species: e.species }));
      const ls = p.learnset.filter(m => b(m.level, 1, 100) && b(m.move, 1, this.moveNames.length - 1));
      const e = this.writeEvos(mon, ev, ls);
      if (e) errs.push(pad3(mon) + ' 진화·기술: ' + e);
    }
    this.dirty = true;
    return errs;
  },
  applyPresetMove(mv, p, o) {
    const d = this.data, m = this.moveOff(mv), b = (v, lo, hi) => Number.isInteger(v) && v >= lo && v <= hi, errs = [];
    if (b(p.effect, 0, 255)) d[m + 1] = p.effect;
    if (b(p.power, 0, 255)) d[m + 2] = p.power;
    if (b(p.type, 0, 255)) d[m + 3] = p.type;
    if (b(p.accuracy, 0, 255)) d[m + 4] = p.accuracy;
    if (b(p.pp, 1, 40)) d[m + 5] = p.pp;
    if (b(p.chance, 0, 255)) d[m + 6] = p.chance;
    if (o.names && typeof p.name === 'string' && p.name && p.name !== this.moveNames[mv]) { try { this.setMoveName(mv, p.name); } catch (e) { errs.push(pad3(mv) + ' 이름: ' + e.message); } }
    this.dirty = true;
    return errs;
  }
});

Object.assign(App.prototype, {
  // 포켓몬 편집·기술 편집 창 위에 붙는 단추줄
  presetBar(kind) {
    return el('div', { class: 'bar', style: 'margin-bottom:6px' },
      el('button', { text: '📤 프리셋 내보내기…', onclick: () => this.presetExport(kind) }),
      el('button', { text: '📥 프리셋 불러오기…', onclick: () => this.presetImport(kind) }),
      el('span', { class: 'hint', text: '고친 능력치를 파일로 저장해서 다른 롬에 그대로 넣을 수 있어요' }));
  },

  // ---------------------------------------------------------------- 내보내기
  presetExport(kind) {
    const rom = this.rom;
    if (!rom.presetOk()) { alert('이 롬에서는 프리셋을 만들 수 없어요 (능력치 표를 찾지 못했어요).'); return; }
    const opt = (label, on) => check(label, on);
    const [cMon, lMon] = opt('🐾 포켓몬 능력치 (타입·능력치·잡히는 정도·도구·성별·성장·알)', kind !== 'moves');
    const [cEvo, lEvo] = opt('　진화 · 레벨업 기술 포함', true);
    const [cTm, lTm] = opt('　기술머신·비전머신 호환 포함', true);
    const [cMove, lMove] = opt('⚔ 기술 능력치 (효과·위력·타입·명중·PP·추가 효과)', kind !== 'pokemon');
    const [cName, lName] = opt('이름도 넣기 (포켓몬·기술 이름)', true);
    const [cDiff, lDiff] = opt('원본 롬과 비교해서 바뀐 것만 넣기 (원본 롬 파일을 골라요)', false);
    const info = el('div', { class: 'hint' });
    let close;
    const go = async () => {
      const o = { names: cName.checked, evos: cEvo.checked, tmhm: cTm.checked };
      let base = null;
      if (cDiff.checked) {
        const f = await new Promise(res => { const i = el('input', { type: 'file', accept: '.gbc,.gb' }); i.addEventListener('change', () => res(i.files[0] || null)); i.click(); });
        if (!f) return;
        try { base = new Rom(new Uint8Array(await f.arrayBuffer()), f.name); } catch (e) { alert('원본 롬을 열 수 없어요: ' + e.message); return; }
        if (!base.presetOk()) { alert('원본 롬에서 능력치 표를 찾지 못했어요.'); return; }
      }
      const out = { format: PRESET_FORMAT, version: 1, from: rom.fileName + ' (' + rom.versionName + ')', lang: rom.cs.kind, created: new Date().toISOString(), options: o, pokemon: {}, moves: {} };
      const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
      if (cMon.checked) for (let m = 1; m <= 251; m++) {
        const v = rom.presetMon(m, o);
        if (!o.tmhm) delete v.tmhm;
        if (base) { const w = base.presetMon(m, o); if (!o.tmhm) delete w.tmhm; if (same(v, w)) continue; }
        out.pokemon[m] = v;
      }
      if (cMove.checked) for (let m = 1; m < Math.min(252, rom.moveNames.length); m++) {
        const v = rom.presetMove(m, o);
        if (base && same(v, base.presetMove(m, o))) continue;
        out.moves[m] = v;
      }
      const np = Object.keys(out.pokemon).length, nm = Object.keys(out.moves).length;
      if (!np && !nm) { this.okMsg(info, '넣을 게 없어요 (원본과 바뀐 게 없어요)', true); return; }
      const name = (rom.fileName || 'rom').replace(/\.[^.]+$/, '') + '_프리셋_' + (base ? '바뀐것' : '전체') + '.json';
      const blob = new Blob([JSON.stringify(out, null, 1)], { type: 'application/json' }), u = URL.createObjectURL(blob), a = el('a', { href: u, download: name });
      document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 5000);
      this.okMsg(info, '✅ 내보냈어요: 포켓몬 ' + np + '마리 · 기술 ' + nm + '개 → ' + name);
    };
    close = this.dialog('프리셋 내보내기', () => el('div', null,
      el('div', { class: 'hint', text: '지금 롬의 능력치를 파일(.json)로 저장해요. 다른 롬을 연 뒤 [📥 프리셋 불러오기]로 넣으면 같은 번호의 포켓몬·기술에 그대로 들어가요.' }),
      el('div', { style: 'margin:8px 0' }, el('div', null, lMon), el('div', null, lEvo), el('div', null, lTm), el('div', null, lMove), el('div', null, lName), el('div', { style: 'margin-top:6px' }, lDiff)),
      el('div', { class: 'hint', text: '💡 "바뀐 것만"을 켜면 내가 고친 포켓몬·기술만 들어가서, 다른 개조롬에 넣어도 나머지는 건드리지 않아요.' }),
      info,
      el('div', { class: 'bar', style: 'justify-content:flex-end;margin-top:8px' }, el('button', { text: '닫기', onclick: () => close() }),
        el('button', { class: 'apply', text: '📤 파일로 내보내기', onclick: go }))), null, true);
  },

  // ---------------------------------------------------------------- 불러오기 (미리 보고 고르기)
  async presetImport(kind) {
    const rom = this.rom;
    if (!rom.presetOk()) { alert('이 롬에서는 프리셋을 넣을 수 없어요 (능력치 표를 찾지 못했어요).'); return; }
    const f = await new Promise(res => { const i = el('input', { type: 'file', accept: '.json,application/json' }); i.addEventListener('change', () => res(i.files[0] || null)); i.click(); });
    if (!f) return;
    let p;
    try { p = JSON.parse(await f.text()); } catch (e) { alert('프리셋 파일을 읽을 수 없어요 (JSON 형식이 아니에요).'); return; }
    if (!p || p.format !== PRESET_FORMAT || !p.pokemon || !p.moves) { alert('이 툴에서 만든 프리셋 파일이 아니에요.'); return; }
    if (p.version > 1) alert('더 새 버전의 툴에서 만든 프리셋이에요. 일부는 안 들어갈 수 있어요.');
    const monIds = Object.keys(p.pokemon).map(Number).filter(m => m >= 1 && m <= 251).sort((a, b) => a - b);
    const moveIds = Object.keys(p.moves).map(Number).filter(m => m >= 1 && m < rom.moveNames.length).sort((a, b) => a - b);
    const sameLang = p.lang === rom.cs.kind || (['ko', 'koen'].includes(p.lang) && ['ko', 'koen'].includes(rom.cs.kind));
    const [cName, lName] = check('이름도 덮어쓰기' + (sameLang ? '' : ' (⚠ 프리셋과 롬의 언어가 달라요)'), sameLang && !!(p.options && p.options.names));
    const [cEvo, lEvo] = check('진화 · 레벨업 기술도 넣기', !!(p.options && p.options.evos));
    const [cTm, lTm] = check('기술머신 호환도 넣기', !!(p.options && p.options.tmhm));
    // 고르기 목록
    const box = el('div', { style: 'max-height:340px;overflow:auto;border:1px solid var(--line);background:#fff;padding:4px' });
    const rows = [];
    const TYPE = new Map(TYPES);
    const diffText = (a, b) => { const out = []; for (const k of Object.keys(a)) if (k !== 'name' && JSON.stringify(a[k]) !== JSON.stringify(b[k])) out.push(k); return out; };
    const LABEL = { types: '타입', stats: '능력치', catchRate: '잡히는 정도', baseExp: '경험치', items: '도구', gender: '성별', eggSteps: '알', growth: '성장', eggGroups: '알 그룹', tmhm: '기술머신', evos: '진화', learnset: '레벨업 기술',
      effect: '효과', power: '위력', type: '타입', accuracy: '명중', pp: 'PP', chance: '추가 효과' };
    if (monIds.length) box.append(el('div', { class: 'grp', text: '🐾 포켓몬 ' + monIds.length + '마리' }));
    for (const m of monIds) {
      const v = p.pokemon[m], cur = rom.presetMon(m, { names: true, evos: true });
      const ch = diffText(v, cur);
      const [c, l] = check(pad3(m) + ' ' + rom.monName(m) + (v.name && v.name !== rom.monName(m) ? ' → ' + v.name : '') + (v.stats ? '  [' + v.stats.join('/') + '] ' + (v.types || []).map(t => TYPE.get(t) || t).join('·') : '') + (ch.length ? '  · 바뀜: ' + ch.map(k => LABEL[k] || k).join(', ') : '  · 지금과 같음'), ch.length > 0 || (v.name && v.name !== rom.monName(m)));
      rows.push({ c, kind: 'mon', id: m }); box.append(el('div', null, l));
    }
    if (moveIds.length) box.append(el('div', { class: 'grp', text: '⚔ 기술 ' + moveIds.length + '개' }));
    for (const m of moveIds) {
      const v = p.moves[m], cur = rom.presetMove(m, { names: true }), ch = diffText(v, cur);
      const [c, l] = check(pad3(m) + ' ' + rom.moveName(m) + (v.name && v.name !== rom.moveName(m) ? ' → ' + v.name : '') + '  [위력 ' + v.power + ' · 명중 ' + Math.round(v.accuracy * 100 / 255) + '% · PP ' + v.pp + ' · ' + (TYPE.get(v.type) || v.type) + ']' + (ch.length ? '  · 바뀜: ' + ch.map(k => LABEL[k] || k).join(', ') : '  · 지금과 같음'), ch.length > 0 || (v.name && v.name !== rom.moveName(m)));
      rows.push({ c, kind: 'move', id: m }); box.append(el('div', null, l));
    }
    const count = el('b');
    const upd = () => count.textContent = rows.filter(r => r.c.checked).length + '개 고름';
    rows.forEach(r => r.c.addEventListener('change', upd)); upd();
    const setAll = (k, v) => { rows.forEach(r => { if (!k || r.kind === k) r.c.checked = v; }); upd(); };
    const msg = el('div');
    let close;
    const apply = () => {
      const o = { names: cName.checked, evos: cEvo.checked, tmhm: cTm.checked }, errs = [];
      let n = 0;
      for (const r of rows) if (r.c.checked) { errs.push(...(r.kind === 'mon' ? rom.applyPresetMon(r.id, p.pokemon[r.id], o) : rom.applyPresetMove(r.id, p.moves[r.id], o))); n++; }
      this.say('프리셋을 넣었어요 (' + n + '개). [저장하기]를 눌러야 롬 파일에 기록돼요.');
      close();
      alert('✅ 프리셋 ' + n + '개를 넣었어요.' + (errs.length ? '\n\n일부는 못 넣었어요:\n' + errs.slice(0, 15).join('\n') + (errs.length > 15 ? '\n…' : '') : '') + '\n\n열려 있는 편집 창은 닫았다 다시 열면 바뀐 값이 보여요.\n메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요.');
    };
    close = this.dialog('프리셋 불러오기 · ' + f.name, () => el('div', null,
      el('div', { class: 'hint', text: '만든 롬: ' + (p.from || '?') + (p.created ? ' · ' + p.created.slice(0, 10) : '') + ' — 넣을 것을 고르세요. 지금 롬과 다른 것만 미리 체크돼 있어요.' }),
      el('div', { class: 'bar', style: 'margin:6px 0' }, el('button', { text: '모두 체크', onclick: () => setAll(null, true) }), el('button', { text: '모두 해제', onclick: () => setAll(null, false) }),
        monIds.length ? el('button', { text: '🐾 포켓몬만', onclick: () => { setAll(null, false); setAll('mon', true); } }) : null,
        moveIds.length ? el('button', { text: '⚔ 기술만', onclick: () => { setAll(null, false); setAll('move', true); } }) : null, count),
      box,
      el('div', { style: 'margin-top:6px' }, el('div', null, lName), el('div', null, lEvo), el('div', null, lTm)),
      msg,
      el('div', { class: 'bar', style: 'justify-content:flex-end;margin-top:8px' }, el('button', { text: '취소', onclick: () => close() }),
        el('button', { class: 'apply', text: '📥 고른 것 넣기', onclick: apply }))), null, false);
  }
});

// ===== 99-title.js
// ================================================================ 타이틀 화면 그리기 창 (TitleForm.cs)
Object.assign(App.prototype, {
  titleDialog() {
    const rom = this.rom, t = rom.findTitle();
    if (!t) { alert('이 롬에서 타이틀 화면 데이터를 찾지 못했어요 (타이틀 코드를 크게 바꾼 개조롬일 수 있어요).'); return; }
    let pals = rom.titlePals(t), selPal = 0, dirty = false, palDirty = false, showRegions = false;
    const attrAt = (x, y) => t.attr[Math.floor(y / 8) * 32 + Math.floor(x / 8)] % 5;
    const count = el('b'), pos = el('span', { class: 'hint' }), err = el('span');
    const palLabels = [];
    const updateCount = () => { const n = rom.titleTileCount(pc.st.pic), mx = titleMaxTiles(t); count.textContent = '서로 다른 8×8 칸 ' + n + ' / ' + mx; count.style.color = n > mx ? 'var(--warn)' : 'var(--ok)'; };
    const [rg, rgl] = check('색 영역 보기', false);
    rg.addEventListener('change', () => { showRegions = rg.checked; pc.draw(); });
    const pc = pixelCanvas({ pic: rom.titleImage(t), palAt: (x, y) => pals[attrAt(x, y)], exportName: '타이틀화면', zoomStep: 1, noClear: true, hideFrames: true,
      mirrorLabel: '좌우 대칭', onMirror: on => { pc.st.frameW = on ? 160 : 0; }, leftExtra: [rgl],
      overlay: (g, z) => {
        g.strokeStyle = 'red'; g.lineWidth = 2; g.beginPath(); g.moveTo(160 * z, 0); g.lineTo(160 * z, 144 * z); g.stroke();
        if (!showRegions) return;
        const rc = [null, 'rgba(255,0,255,.27)', 'rgba(255,0,0,.27)', 'rgba(255,200,0,.27)', 'rgba(0,160,255,.27)'];
        for (let i = 0; i < t.attr.length; i++) { const a = t.attr[i] % 5; if (!a) continue; g.fillStyle = rc[a]; g.fillRect(i % 32 * 8 * z, Math.floor(i / 32) * 8 * z, 8 * z, 8 * z); }
      },
      onChange: () => { dirty = true; updateCount(); },
      onPick: (x, y) => { selPal = attrAt(x, y); showColors(); },
      onHover: c => {
        if (!c) { pos.textContent = ''; return; }
        const a = attrAt(c[0], c[1]);
        pos.textContent = 'x ' + c[0] + ', y ' + c[1] + ' · 색 묶음 ' + (a + 1) + (c[0] >= 160 ? ' · 화면 밖 (구름 줄은 흘러가며 보임)' : '');
        palLabels.forEach((l, i) => l.style.color = i === a ? 'red' : '');
      },
      // 160×144 그림이면 화면 부분만, 아니면 256×144 전체에 맞춤
      importPic: (src, cur) => {
        const pic = clonePic(cur), w = src.w * 144 / Math.max(1, src.h) <= 200 ? 160 : 256;
        for (let y = 0; y < 144; y++) for (let x = 0; x < w; x++) {
          const i = (Math.floor(y * src.h / 144) * src.w + Math.floor(x * src.w / w)) * 4;
          let c = [src.data[i], src.data[i + 1], src.data[i + 2]];
          if (src.data[i + 3] < 128) c = WHITE;
          const pal = pals[attrAt(x, y)];
          let best = 0, bd = Infinity;
          for (let k = 0; k < 4; k++) { const dd = (c[0] - pal[k][0]) ** 2 * 0.3 + (c[1] - pal[k][1]) ** 2 * 0.59 + (c[2] - pal[k][2]) ** 2 * 0.11; if (dd < bd) { bd = dd; best = k; } }
          pic.px[y * pic.w + x] = best;
        }
        return pic;
      } });
    pc.st.color = 3;
    // 위: 색 묶음 5개
    const sw = [];
    const top = el('div', { class: 'bar' });
    for (let p = 0; p < 5; p++) {
      palLabels[p] = el('span', { text: '묶음 ' + (p + 1) });
      const box = el('span', { style: 'margin-right:12px;display:inline-flex;align-items:center;gap:2px' }, palLabels[p]);
      sw[p] = [];
      for (let i = 0; i < 4; i++) {
        const b = el('button', { style: 'width:34px;height:34px;padding:0;font-size:10px;text-align:right;vertical-align:bottom', onclick: () => { selPal = p; pc.st.color = i; showColors(); } });
        b.addEventListener('contextmenu', e => { e.preventDefault(); selPal = p; pc.st.color = i; showColors(); pickColor(); });
        sw[p].push(b); box.append(b);
      }
      top.append(box);
    }
    const pickInput = el('input', { type: 'color', style: 'width:0;height:0;opacity:0;position:absolute' });
    const setColor = c => { if (t.palOff < 0) return; pals[selPal] = pals[selPal].slice(); pals[selPal][pc.st.color] = SNAP(c); palDirty = true; showColors(true); pc.draw(); };
    pickInput.addEventListener('input', () => setColor(hexRgb(pickInput.value)));
    const pickColor = () => { if (t.palOff < 0) { alert('이 롬에서는 타이틀 색 위치를 찾지 못해서 색은 바꿀 수 없어요 (그림은 바꿀 수 있어요).'); return; } pickInput.click(); };
    const rgb = rgbInputs(c => setColor(c));
    const selLabel = el('b'), hexLabel = el('span', { class: 'hint' });
    const showColors = keepNums => {
      for (let p = 0; p < 5; p++) for (let i = 0; i < 4; i++) {
        const b = sw[p][i], c = pals[p][i], on = i === pc.st.color;
        b.style.background = rgbCss(c); b.textContent = i + 1;
        b.style.color = SpriteConvert.hsl(c)[2] < 0.5 ? '#fff' : '#000';
        b.style.border = on ? (p === selPal ? '4px solid red' : '2px solid lightcoral') : '1px solid gray';
      }
      const c = pals[selPal][pc.st.color];
      if (!keepNums) rgb.set(c);
      rgb.enable(t.palOff >= 0);
      pickInput.value = rgbHex(c);
      selLabel.textContent = '바꿀 색: 묶음 ' + (selPal + 1) + '의 ' + (pc.st.color + 1) + '번';
      hexLabel.textContent = t.palOff >= 0 ? rgbHex(c).toUpperCase() : '이 롬은 타이틀 색 위치를 못 찾아서 색은 못 바꿔요';
      pc.draw();
    };
    pc.onColorKey = showColors;
    const colorRow = el('div', { class: 'bar' }, selLabel, el('button', { text: '색 바꾸기…', style: 'background:#c8e6ff', onclick: pickColor }), pickInput, ...rgb.els, hexLabel);
    const note = el('div', { class: 'hint', text:
      "· 화면을 영역으로 나눠 영역마다 4색 묶음 하나를 써요 (2세대 규칙). 찍는 색은 1~4번 '자리'이고, 실제 색은 그 자리가 속한 영역의 묶음 색이에요\n" +
      '· 색칸을 누르면 그 자리 색으로 찍고, 그 색을 [색 바꾸기…]나 R·G·B 숫자로 바꿀 수 있어요 (색칸 오른쪽 클릭 = 바로 바꾸기). 숫자키 1~4 = 색 자리\n' +
      '· 왼쪽 160픽셀(빨간 선 안)이 화면에 보여요. 구름 줄은 옆으로 흘러가서 256픽셀 전체가 보여요' +
      (t.loads.length === 1 && t.loads[0].dest === 0x9000 ? '\n· 날아다니는 호오는 그림 위에 따로 움직이는 스프라이트라 여기엔 안 보여요 (가운데 빈 하늘)' : '') });
    let close;
    const apply = () => {
      const e = rom.writeTitle(t, pc.st.pic, pals);
      if (e) { this.okMsg(err, e, true); return; }
      dirty = palDirty = false;
      this.okMsg(err, '적용했어요. 메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요');
      this.say('타이틀 화면을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
    };
    const tryClose = () => { if ((dirty || palDirty) && !confirm('적용하지 않은 변경이 있어요. 닫을까요?')) return; close(); };
    close = this.dialog('타이틀 화면 그리기', () => el('div', null, top, colorRow, note,
      el('div', { style: 'display:flex;gap:10px;align-items:flex-start;margin-top:6px' }, pc.left, pc.wrap),
      el('div', { class: 'bar', style: 'margin-top:8px' }, el('button', { class: 'apply', text: '적용', onclick: apply }), el('button', { text: '닫기', onclick: tryClose }), count, err, pos)), () => pc.dispose());
    dirty = false;
    setTimeout(() => pc.fit(), 0);
    showColors(); pc.changed(); dirty = false;
  }
});

// ===== 99-trainerpic.js
// ================================================================ 트레이너 그림 · 주인공 그림 (금·은)
// 금·은은 게임 시작(오박사 이야기)과 명예의 전당에서 주인공 그림으로 트레이너 직업 '칼(CAL)' 의 그림을 씀.
// 트레이너 카드의 주인공 그림은 따로 있는 5×7 칸 그림 (압축 안 함)
const CAL_CLASS = 0x0C;
// 배틀 때 주인공 뒷모습 (ChrisBackpic, 6×6 칸 압축 그림)
const BACK_PIC = 0x100;
mixin(Rom.prototype, {
  loadTrainerPics() {
    if (this._tpic !== undefined) return this._tpic;
    this._tpic = null;
    this.loadSprites();
    const d = this.data;
    // GetTrainerPic: ld hl, TrainerPicPointers / ld a, [wTrainerClass] / dec a / ld bc, 3 / call AddNTimes / ld a, BANK / call GetFarByte
    const p = this.findPattern([0x21, -1, -1, 0xFA, -1, -1, 0x3D, 0x01, 0x03, 0x00, 0xCD, -1, -1, 0x3E, -1, 0xCD], 0x4000, d.length);
    if (p < 0 || this.version.crystal) return null;
    let n = 0;
    for (let q = Math.max(0, p - 0x20); q < p; q++) if (d[q] === 0xA7 && d[q + 1] === 0xC8 && d[q + 2] === 0xFE && d[q + 4] === 0xD0) n = d[q + 3];
    if (n < 2 || n > 100) n = Math.max(2, Math.min(100, this.classNames.length));
    const t = { tab: this.off(d[p + 14], this.w(p + 1)), count: n - 1, pal: -1, card: -1 };
    // GetTrainerPalettePointer: ld l, a / ld h, 0 / add hl, hl ×2 / ld bc, TrainerPalettes / add hl, bc / ret
    const g = this.findPattern([0x6F, 0x26, 0x00, 0x29, 0x29, 0x01, -1, -1, 0x09, 0xC9], 0x4000, d.length);
    if (g >= 0) t.pal = this.off(Math.floor(g / 0x4000), this.w(g + 6));
    // 트레이너 카드: ld hl, ChrisPicAndTrainerCardGFX / ld de, vTiles2 / ld bc, (35 + 6) tiles / ld a, BANK
    const c = this.findPattern([0x21, -1, -1, 0x11, 0x00, 0x90, 0x01, 0x90, 0x02, 0x3E, -1, 0xCD], 0x4000, d.length);
    if (c >= 0) t.card = this.off(d[c + 10], this.w(c + 1));
    // 배틀 뒷모습: ld hl, ChrisBackpic / ld a, [wBattleType] / cp BATTLETYPE_TUTORIAL / jr nz / ld hl, DudeBackpic / ld de, vTiles2 tile $31 / ld b, BANK / ld c, 7*7
    // (튜토리얼 배틀의 아저씨 뒷모습과 뱅크 번호를 같이 씀). 다른 곳(명예의 전당 등)에도 같은 그림을 부르는 코드가 있음
    const b = this.findPattern([0x21, -1, -1, 0xFA, -1, -1, 0xFE, 0x03, 0x20, 0x03, 0x21, -1, -1, 0x11, 0x10, 0x93, 0x06, -1, 0x0E, 0x31], 0x4000, d.length);
    if (b >= 0) {
      const addr = this.w(b + 1), bank = d[b + 17], others = [];
      for (let q = 0x4000; ; q++) {
        q = this.findPattern([0x21, addr & 0xFF, addr >> 8, 0x11, 0x10, 0x93, 0x06, bank], q, d.length);
        if (q < 0) break;
        others.push(q);
      }
      t.back = { site: b, others, addr, dude: this.w(b + 11), bank };
    }
    return this._tpic = t;
  },
  trainerPicOff(cls) {
    const t = this.loadTrainerPics(), e = t.tab + (cls - 1) * 3;
    let bank = this.data[e];
    if (this.picBankFix.has(bank)) bank = this.picBankFix.get(bank);
    return this.off(bank, this.w(e + 1));
  },
  readTrainerPic(cls) {
    if (cls === BACK_PIC) {   // 배틀 뒷모습 (6×6 칸, 세로줄 순서)
      const b = this.loadTrainerPics().back;
      return tilesToPic(this.gfx.decompress(this.off(b.bank, b.addr)).slice(0, 36 * 16), 6, 6, true);
    }
    if (cls === 0) {   // 트레이너 카드 그림 (5×7 칸, 가로줄 순서)
      const o = this.loadTrainerPics().card;
      return tilesToPic(this.data.subarray(o, o + 35 * 16), 5, 7, false);
    }
    return tilesToPic(this.gfx.decompress(this.trainerPicOff(cls)), 7, 7, true);
  },
  writeTrainerPic(cls, pic) {
    const t = this.loadTrainerPics();
    if (cls === 0) { this.data.set(picToTiles(pic, false), t.card); this.dirty = true; return null; }
    if (cls === BACK_PIC) {
      // 새 뒷모습 + 튜토리얼 아저씨 뒷모습을 같은 뱅크에 같이 넣음 (뱅크 번호를 둘이 같이 써서)
      const b = t.back, d = this.data;
      const comp = Lz.compress(picToTiles(pic, true)), dude = Lz.compress(Array.from(this.gfx.decompress(this.off(b.bank, b.dude))));
      const p = this.allocPic(comp.length + dude.length);
      if (p < 0) return '롬에 그림을 넣을 빈 공간이 부족해요';
      d.set(comp, p); d.set(dude, p + comp.length);
      const bank = Math.floor(p / 0x4000), a = 0x4000 + p % 0x4000, da = a + comp.length;
      d[b.site + 1] = a & 0xFF; d[b.site + 2] = a >> 8; d[b.site + 11] = da & 0xFF; d[b.site + 12] = da >> 8; d[b.site + 17] = bank;
      for (const q of b.others) { d[q + 1] = a & 0xFF; d[q + 2] = a >> 8; d[q + 7] = bank; }
      Object.assign(b, { addr: a, dude: da, bank });
      this.gfx.gfxCache.delete(p); this.gfx.gfxCache.delete(p + comp.length);
      this.dirty = true;
      return null;
    }
    const comp = Lz.compress(picToTiles(pic, true));
    const p = this.allocPic(comp.length);
    if (p < 0) return '롬에 그림을 넣을 빈 공간이 부족해요';
    this.data.set(comp, p);
    const e = t.tab + (cls - 1) * 3, addr = 0x4000 + p % 0x4000;
    this.data[e] = Math.floor(p / 0x4000); this.data[e + 1] = addr & 0xff; this.data[e + 2] = addr >> 8;
    this.gfx.gfxCache.delete(p);
    this.dirty = true;
    return null;
  },
  // 트레이너 색 2개 (흰색·검정은 고정). 0번 = 트레이너 카드 색 (_CGB_TrainerCard: xor a / call GetTrainerPalettePointer)
  trainerPaletteRGB(cls) {
    const o = this.loadTrainerPics().pal + cls * 4;
    return [WHITE, C555(this.w(o)), C555(this.w(o + 2)), BLACK];
  },
  setTrainerPalette(cls, c1, c2) {
    const o = this.loadTrainerPics().pal + cls * 4, a = TO555(c1), b = TO555(c2);
    this.data[o] = a & 0xff; this.data[o + 1] = a >> 8; this.data[o + 2] = b & 0xff; this.data[o + 3] = b >> 8;
    this.dirty = true;
  }
});

Object.assign(App.prototype, {
  trainerPicDialog() {
    const rom = this.rom, t = rom.loadTrainerPics();
    if (!t) { alert('이 롬에서는 트레이너 그림을 바꿀 수 없어요 (지금은 금·은만 돼요).'); return; }
    const Z = 3, hasPal = t.pal >= 0;
    const st = { cls: -1, pic: null, pal: null, dirty: false, palDirty: false, outline: true, takeColors: true };
    const W = () => st.cls === 0 ? 40 : st.cls === BACK_PIC ? 48 : 56;
    const Hh = () => st.cls === BACK_PIC ? 48 : 56;
    const palOk = () => hasPal;
    // 배틀 뒷모습은 0번 색 칸 (GetPlayerOrMonPalettePointer: and a / jp nz, … / ld hl, PlayerPalette = 트레이너 색 표 0번) → 트레이너 카드와 같은 색
    const palSlot = c => c === BACK_PIC ? 0 : c;
    const box = el('div', { style: 'width:' + (56 * Z + 4) + 'px;height:' + (56 * Z + 4) + 'px;border:1px solid #888;background:#fff;position:relative' });
    const note = el('div', { style: 'color:#e8590c;font-size:12.5px;min-height:18px' });
    const title = el('b'), info = el('div', { class: 'hint' }), err = el('div');
    const swatches = [1, 2].map(k => { const i = el('input', { type: 'color', style: 'width:44px;height:28px' }); i.addEventListener('input', () => {
      st.pal = st.pal.slice(); st.pal[k] = SNAP(hexRgb(i.value)); st.palDirty = true; note.textContent = '(아직 적용 안 함)'; redraw();
    }); return i; });
    const palBox = el('div', { class: 'bar' }, el('span', { text: '밝은색' }), swatches[0], el('span', { text: '어두운색' }), swatches[1]);
    const redraw = () => {
      box.replaceChildren();
      swatches.forEach((s, i) => { s.value = rgbHex(st.pal[i + 1]); s.disabled = !palOk(); });
      if (!st.pic) return;
      const c = picCanvas(st.pic, st.pal, false, Z);
      c.style.cssText = 'position:absolute;left:' + ((56 - W()) / 2 * Z + 1) + 'px;top:' + ((56 - Hh()) * Z + 1) + 'px';
      box.append(c);
    };
    const label = c => c === BACK_PIC ? '★ 주인공 — 배틀 뒷모습' : c === 0 ? '★ 주인공 — 트레이너 카드' : pad3(c) + ' ' + (rom.classNames[c] || '트레이너 ' + c) + (c === CAL_CLASS ? ' ★ 주인공' : '');
    const load = c => {
      st.cls = c; st.dirty = st.palDirty = false; err.textContent = note.textContent = '';
      st.pic = rom.readTrainerPic(c);
      st.pal = hasPal ? rom.trainerPaletteRGB(palSlot(c)) : [WHITE, [170, 170, 170], [85, 85, 85], BLACK];
      title.textContent = label(c);
      info.textContent = c === BACK_PIC ? '배틀할 때 화면 왼쪽 아래에 나오는 주인공 뒷모습이에요. 48×48 픽셀 (6×6 칸). 색은 트레이너 카드 그림과 같은 색을 같이 써요 (하나를 바꾸면 둘 다 바뀌어요).'
        : c === 0 ? '메뉴에서 내 이름(트레이너 카드)을 열면 나오는 주인공 그림이에요. 40×56 픽셀 (5×7 칸). 색은 배틀 뒷모습과 같이 쓰고, 게임 시작 때 주인공 그림 색과는 따로예요.'
        : c === CAL_CLASS ? '게임을 처음 시작할 때 오박사가 이름을 물어볼 때, 그리고 명예의 전당에 나오는 주인공 그림이에요. 56×56 픽셀 (7×7 칸).'
          : '배틀할 때 나오는 이 직업의 트레이너 그림이에요. 56×56 픽셀 (7×7 칸). 같은 직업 트레이너가 모두 같이 바뀌어요.';
      redraw();
    };
    const changed = () => { st.dirty = true; note.textContent = '(아직 적용 안 함)'; redraw(); };
    const draw = () => this.pixelEditor({ title: label(st.cls), pic: st.pic, pal: st.pal, editable: [false, palOk(), palOk(), false],
      note: W() + '×' + Hh() + ' 픽셀. 1번 흰색·4번 검정은 고정이고, ' + (palOk() ? '2·3번 색은 마음대로 바꿀 수 있어요.' : '색은 바꿀 수 없어요 (그림만).') + ' 숫자키 1~4 = 색 고르기',
      onOk: (p, pl, palChanged) => { st.pic = p; if (palChanged) { st.pal = pl; st.palDirty = true; } changed(); } });
    const importPic = async () => {
      let src;
      try { src = await pickImageFile(); } catch (e) { alert('그림을 열 수 없어요: ' + e.message); return; }
      if (!src) return;
      try {
        const take = st.takeColors && palOk();
        const res = SpriteConvert.convert(src, st.cls === BACK_PIC ? 6 : 7, take ? null : st.pal, st.outline);
        if (take) { st.pal = [WHITE, res.c1, res.c2, BLACK]; st.palDirty = true; }
        if (st.cls === 0) { const p = newPic(40, 56); for (let y = 0; y < 56; y++) for (let x = 0; x < 40; x++) p.px[y * 40 + x] = res.img.px[y * 56 + x + 8]; st.pic = p; }
        else st.pic = res.img;
        changed();
      } catch (e) { this.okMsg(err, e.message, true); }
    };
    const apply = () => {
      try {
        if (st.dirty) { const e = rom.writeTrainerPic(st.cls, st.pic); if (e) { this.okMsg(err, e, true); return; } }
        if (st.palDirty && palOk()) rom.setTrainerPalette(palSlot(st.cls), st.pal[1], st.pal[2]);
        st.dirty = st.palDirty = false; note.textContent = '';
        this.okMsg(err, '적용했어요');
        this.say('트레이너 그림을 바꿨어요. [저장하기]를 눌러야 롬 파일에 기록돼요.');
      } catch (e) { this.okMsg(err, e.message, true); }
    };
    const opt = (text, key) => { const [c, l] = check(text, st[key]); c.addEventListener('change', () => { st[key] = c.checked; }); return l; };
    const items = [];
    if (t.card >= 0) items.push({ value: 0, label: label(0), group: '주인공' });
    if (t.back) items.push({ value: BACK_PIC, label: label(BACK_PIC), group: '주인공' });
    items.push({ value: CAL_CLASS, label: label(CAL_CLASS), group: '주인공' });
    for (let c = 1; c <= t.count; c++) if (c !== CAL_CLASS) items.push({ value: c, label: label(c), group: '트레이너 직업' });
    const list = listPanel(items, c => {
      if (c === st.cls) return;
      if ((st.dirty || st.palDirty) && !confirm('적용하지 않은 변경이 있어요. 버릴까요?')) return;
      load(c);
    }, '트레이너 찾기', CAL_CLASS);
    const body = el('div', null,
      el('div', { style: 'margin-bottom:6px' }, title), info,
      el('div', { class: 'bar', style: 'align-items:flex-start;gap:12px;margin-top:6px' },
        el('div', null, box, note),
        el('div', null,
          el('div', { class: 'bar' }, el('button', { text: '도트로 그리기…', style: 'background:#c8e6ff', onclick: draw })),
          el('div', { class: 'bar' }, el('button', { text: '사진 가져오기…', onclick: importPic })),
          el('div', { class: 'bar' }, el('button', { text: 'PNG로 저장', onclick: () => downloadCanvas(picCanvas(st.pic, st.pal, false), label(st.cls).replace(/[★ —]+/g, '_') + '.png') })),
          hasPal ? palBox : null)),
      el('fieldset', null, el('legend', { text: '사진 바꾸기 설정' }),
        el('div', null, opt('검은 테두리 자동으로 넣기 (큰 사진·그림일 때 추천)', 'outline')), el('div', null, opt('사진의 색으로 트레이너 색도 바꾸기', 'takeColors')),
        el('div', { class: 'hint', text: '· 배경이 투명한 PNG가 제일 좋아요\n· 트레이너 카드 그림은 가로 40픽셀이라 사진 가운데 부분을 써요' })),
      el('div', { class: 'bar' }, el('button', { class: 'apply', text: '적용', onclick: apply }), err),
      el('div', { class: 'hint', text: '적용한 뒤 메인 화면에서 [저장하기]를 눌러야 롬 파일에 기록돼요' }));
    load(CAL_CLASS);
    this.dialog('트레이너 그림 편집', () => el('div', { class: 'side', style: 'grid-template-columns:240px minmax(0,1fr)' }, list, body));
  }
});

// ===== zz-mount.js
// ================================================================ 블로그 글에 붙이기 (모든 조각이 정의된 뒤 마지막에)
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
