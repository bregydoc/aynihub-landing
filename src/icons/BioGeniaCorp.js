import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  vertical-align: middle;
  margin: 0 auto;
  /* width: ${props => (props.width ? props.width : "32px")}; */
  height: ${props => (props.height ? props.height : "32px")};
  fill: ${props => (props.fill ? props.fill : "#ffffff")};
`;

const BioGeniaCorp = props => {
  const { color, size } = props;
  return (
    <Svg fill={color} height={size} viewBox="0 0 221 32">
      <path
        d="M0,1.95975232 L9.25696594,1.95975232 C12.1259173,1.95975232 14.2775986,2.34674536 15.7120743,3.12074303 C17.14655,3.89474071 17.8637771,5.20019721 17.8637771,7.0371517 C17.8637771,9.86482322 16.1610077,11.5572728 12.755418,12.1145511 L12.755418,12.1764706 C16.8834056,12.692469 18.9473684,14.4881167 18.9473684,17.5634675 C18.9473684,19.8132207 18.1011437,21.3869924 16.4086687,22.2848297 C14.7161938,23.182667 12.2807176,23.6315789 9.10216718,23.6315789 L0,23.6315789 L0,23.0433437 L2.0123839,23.0433437 L2.0123839,2.54798762 L0,2.54798762 L0,1.95975232 Z M8.0495356,12.6718266 L8.0495356,23.0433437 L9.50464396,23.0433437 C10.6398406,23.0433437 11.4344663,22.6511907 11.8885449,21.8668731 C12.3426235,21.0825554 12.5696594,19.9267362 12.5696594,18.3993808 L12.5696594,16.7585139 C12.5696594,15.396278 12.2910245,14.3746164 11.7337461,13.6934985 C11.1764678,13.0123805 10.1857656,12.6718266 8.76160991,12.6718266 L8.0495356,12.6718266 Z M8.0495356,2.54798762 L8.0495356,12.0835913 L8.85448916,12.0835913 C9.92776594,12.0835913 10.6759525,11.7585172 11.0990712,11.1083591 C11.5221899,10.4582011 11.7337461,9.46233901 11.7337461,8.12074303 L11.7337461,6.66563467 C11.7337461,5.13827926 11.5479895,4.07017848 11.1764706,3.46130031 C10.8049517,2.85242214 10.0928845,2.54798762 9.04024768,2.54798762 L8.0495356,2.54798762 Z M25.6191949,6.75851393 C24.5252782,6.75851393 23.7461322,6.47987895 23.2817336,5.92260062 C22.817335,5.36532229 22.5851392,4.67389474 22.5851392,3.84829721 C22.5851392,3.02269969 22.8379746,2.34159195 23.3436531,1.80495356 C23.8493316,1.26831517 24.6181577,1 25.6501546,1 C26.6821515,1 27.4664574,1.24251563 28.0030958,1.72755418 C28.5397342,2.21259272 28.8080494,2.90402028 28.8080494,3.80185759 C28.8080494,4.69969489 28.550054,5.41692198 28.0340556,5.95356037 C27.5180571,6.49019876 26.7131116,6.75851393 25.6191949,6.75851393 Z M20.9442723,8.89473684 L28.5294116,8.89473684 L28.5294116,23.0743034 L30.2631577,23.0743034 L30.2631577,23.6315789 L21.0681113,23.6315789 L21.0681113,23.0743034 L22.7708977,23.0743034 L22.7708977,9.45201238 L20.9442723,9.45201238 L20.9442723,8.89473684 Z M41.8885446,17.5325077 L41.8885446,14.9009288 C41.8885446,12.8988548 41.7801865,11.4386011 41.5634672,10.5201238 C41.3467478,9.60164659 40.8462368,9.14241486 40.0619192,9.14241486 C39.6078406,9.14241486 39.2414872,9.27141254 38.962848,9.52941176 C38.6842088,9.78741099 38.4829724,10.2156833 38.3591328,10.8142415 C38.1733734,11.7430387 38.080495,13.1568533 38.080495,15.0557276 L38.080495,17.4705882 C38.080495,19.7203415 38.1475738,21.0722372 38.2817334,21.5263158 C38.415893,21.9803944 38.5552105,22.3519077 38.6996901,22.6408669 C38.9267294,23.1362254 39.3704814,23.3839009 40.0309594,23.3839009 C40.835917,23.3839009 41.3622276,22.9195093 41.6099068,21.9907121 C41.7956663,21.3302341 41.8885446,19.8441808 41.8885446,17.5325077 Z M39.9690399,23.9411765 C37.3890477,23.9411765 35.4386028,23.2807084 34.1176467,21.9597523 C32.7966907,20.6387963 32.1362226,18.7451104 32.1362226,16.2786378 C32.1362226,13.8121652 32.8431299,11.9133193 34.2569656,10.5820433 C35.6708014,9.25076734 37.6573656,8.58513932 40.216718,8.58513932 C42.7760703,8.58513932 44.6852359,9.19916827 45.9442721,10.4272446 C47.2033084,11.6553209 47.832817,13.5283672 47.832817,16.0464396 C47.832817,21.3096238 45.2115842,23.9411765 39.9690399,23.9411765 Z M61.4705878,23.3219814 C62.4819447,23.3219814 63.1269331,23.1362248 63.4055723,22.7647059 C63.6842115,22.393187 63.8235289,21.7636783 63.8235289,20.876161 L63.8235289,14.869969 L61.8421048,14.869969 L61.8421048,14.1888545 L70.7585135,14.1888545 L70.7585135,14.869969 L69.5510831,14.869969 L69.5510831,23.6006192 L69.0866868,23.6006192 C68.715168,23.0846207 68.1888574,22.8266254 67.5077395,22.8266254 C67.2187803,22.8266254 66.3570759,23.012382 64.9226002,23.3839009 C63.4881245,23.7554198 62.2652265,23.9411765 61.2538695,23.9411765 C57.8895596,23.9411765 55.2838065,23.0330328 53.436532,21.2167183 C51.5892576,19.4004037 50.6656342,16.6708128 50.6656342,13.0278638 C50.6656342,9.38491471 51.6305368,6.57276533 53.5603711,4.59133127 C55.4902053,2.60989721 58.0856385,1.61919505 61.3467488,1.61919505 C62.605785,1.61919505 63.8699622,1.77915217 65.1393184,2.09907121 C66.4086746,2.41899025 67.1465413,2.57894737 67.3529407,2.57894737 C67.5593401,2.57894737 67.7141373,2.5325082 67.817337,2.43962848 C67.9205367,2.34674876 68.0340546,2.18679164 68.1578943,1.95975232 L68.4984515,1.95975232 L68.7461296,8.67801858 L68.188854,8.67801858 C67.1774971,6.67594458 66.1609954,5.10217291 65.1393184,3.95665635 C64.1176415,2.81113978 62.977302,2.23839009 61.7182658,2.23839009 C58.5603553,2.23839009 56.9814237,5.32401455 56.9814237,11.495356 L56.9814237,13.9411765 C56.9814237,17.0371672 57.3684167,19.3746051 58.1424144,20.9535604 C58.9164121,22.5325156 60.0257921,23.3219814 61.4705878,23.3219814 Z M81.2383895,23.9411765 C78.5758375,23.9411765 76.5789534,23.2549088 75.2476774,21.8823529 C73.9164014,20.5097971 73.2507734,18.6006314 73.2507734,16.1547988 C73.2507734,13.7089661 73.9989599,11.8359198 75.4953554,10.5356037 C76.9917509,9.23528762 78.8957567,8.58513932 81.2074297,8.58513932 C85.8926957,8.58513932 88.1424152,10.938057 87.9566557,15.6439628 L79.2260056,15.6439628 L79.2260056,16.8513932 C79.2260056,18.8741071 79.4840009,20.4014396 79.9999994,21.4334365 C80.5159978,22.4654334 81.4138217,22.9814241 82.6934978,22.9814241 C85.0877307,22.9814241 86.6563424,21.7017672 87.3993802,19.1424149 L87.9566557,19.2352941 C87.5644969,20.7213697 86.8575896,21.8771889 85.8359127,22.7027864 C84.8142358,23.5283839 83.2817433,23.9411765 81.2383895,23.9411765 Z M79.2569653,15.0247678 L82.4458198,15.0247678 L82.4458198,13.5077399 C82.4458198,11.835905 82.3477816,10.6955655 82.1517022,10.0866873 C81.9556228,9.47780913 81.5634698,9.17337461 80.9752316,9.17337461 C80.3869933,9.17337461 79.9535611,9.49844876 79.674922,10.1486068 C79.3962828,10.7987649 79.2569653,11.9184647 79.2569653,13.5077399 L79.2569653,15.0247678 Z M90.1393181,8.89473684 L97.6006184,8.89473684 L97.6006184,11.7430341 C97.9308574,10.7935969 98.4365283,10.0299307 99.1176463,9.45201238 C99.7987642,8.87409412 100.830746,8.58513932 102.213622,8.58513932 C105.412812,8.58513932 107.012383,10.3085483 107.012383,13.755418 L107.012383,23.0743034 L108.746129,23.0743034 L108.746129,23.6315789 L99.9845193,23.6315789 L99.9845193,23.0743034 L101.253869,23.0743034 L101.253869,13.0123839 C101.253869,11.7739876 101.171311,10.974202 101.006191,10.6130031 C100.841072,10.2518042 100.541797,10.0712074 100.108358,10.0712074 C99.4478803,10.0712074 98.8648108,10.5046396 98.3591324,11.371517 C97.8534539,12.2383944 97.6006184,13.2910155 97.6006184,14.5294118 L97.6006184,23.0743034 L98.9318878,23.0743034 L98.9318878,23.6315789 L90.1393181,23.6315789 L90.1393181,23.0743034 L91.8421045,23.0743034 L91.8421045,9.45201238 L90.1393181,9.45201238 L90.1393181,8.89473684 Z M114.705881,6.75851393 C113.611965,6.75851393 112.832819,6.47987895 112.36842,5.92260062 C111.904022,5.36532229 111.671826,4.67389474 111.671826,3.84829721 C111.671826,3.02269969 111.924661,2.34159195 112.43034,1.80495356 C112.936018,1.26831517 113.704844,1 114.736841,1 C115.768838,1 116.553144,1.24251563 117.089782,1.72755418 C117.626421,2.21259272 117.894736,2.90402028 117.894736,3.80185759 C117.894736,4.69969489 117.636741,5.41692198 117.120742,5.95356037 C116.604744,6.49019876 115.799798,6.75851393 114.705881,6.75851393 Z M110.030959,8.89473684 L117.616098,8.89473684 L117.616098,23.0743034 L119.349844,23.0743034 L119.349844,23.6315789 L110.154798,23.6315789 L110.154798,23.0743034 L111.857584,23.0743034 L111.857584,9.45201238 L110.030959,9.45201238 L110.030959,8.89473684 Z M128.405572,16.3560372 L129.303404,16.3560372 L129.303404,13.9721362 C129.303404,12.0113421 129.195046,10.6955658 128.978327,10.0247678 C128.761608,9.35396981 128.343655,9.01857585 127.724457,9.01857585 C127.352938,9.01857585 127.017544,9.11661409 126.718265,9.3126935 C126.418986,9.50877291 126.269349,9.77708808 126.269349,10.1176471 C126.269349,10.458206 126.331268,10.8039198 126.455107,11.1547988 L127.229101,11.1547988 C127.394221,11.5882375 127.476779,12.1093881 127.476779,12.7182663 C127.476779,13.3271444 127.218784,13.853455 126.702785,14.2972136 C126.186787,14.7409723 125.536639,14.9628483 124.752321,14.9628483 C122.977286,14.9628483 122.089782,14.1063037 122.089782,12.3931889 C122.089782,9.85447647 124.246623,8.58513932 128.56037,8.58513932 C131.016523,8.58513932 132.714133,9.0030918 133.65325,9.83900929 C134.592367,10.6749268 135.061918,12.2074192 135.061918,14.4365325 L135.061918,20.7213622 C135.061918,21.794639 135.361193,22.3312693 135.959751,22.3312693 C136.661509,22.3312693 137.074302,21.2683285 137.198141,19.1424149 L137.662538,19.1733746 C137.579978,20.9896892 137.239424,22.2383867 136.640866,22.9195046 C136.042308,23.6006226 135.061925,23.9411765 133.699689,23.9411765 C131.222897,23.9411765 129.798762,23.1775102 129.427243,21.6501548 C129.158924,22.4344724 128.756452,23.012382 128.219813,23.3839009 C127.683175,23.7554198 126.898869,23.9411765 125.866872,23.9411765 C122.812161,23.9411765 121.284829,22.6924789 121.284829,20.1950464 C121.284829,18.7296108 121.867898,17.7234289 123.034055,17.1764706 C124.200211,16.6295122 125.990699,16.3560372 128.405572,16.3560372 Z M127.167182,20.1640867 C127.167182,21.2373635 127.223941,21.928791 127.33746,22.2383901 C127.45098,22.5479892 127.667696,22.7027864 127.987615,22.7027864 C128.307534,22.7027864 128.606809,22.4396311 128.885448,21.9133127 C129.164087,21.3869943 129.303404,20.6594474 129.303404,19.7306502 L129.303404,16.8513932 L129.086686,16.8513932 C127.80701,16.8513932 127.167182,17.7904963 127.167182,19.6687307 L127.167182,20.1640867 Z M151.05263,2.23839009 C147.85344,2.23839009 146.253869,5.32401455 146.253869,11.495356 L146.253869,13.9411765 C146.253869,16.8720477 146.676981,19.1682063 147.523219,20.8297214 C148.369456,22.4912364 149.618154,23.3219814 151.269349,23.3219814 C153.539742,23.3219814 155.624344,21.1135412 157.523219,16.6965944 L158.080494,16.6965944 L157.863776,23.6006192 L157.523219,23.6006192 C157.399379,23.3735799 157.285861,23.2136228 157.182661,23.120743 C157.079462,23.0278633 156.929824,22.9814241 156.733745,22.9814241 C156.537665,22.9814241 155.789479,23.1413813 154.489163,23.4613003 C153.188847,23.7812193 151.867911,23.9411765 150.526315,23.9411765 C147.162005,23.9411765 144.556252,23.0330328 142.708977,21.2167183 C140.861703,19.4004037 139.938079,16.6708128 139.938079,13.0278638 C139.938079,9.38491471 140.902982,6.57276533 142.832816,4.59133127 C144.76265,2.60989721 147.358084,1.61919505 150.619194,1.61919505 C151.87823,1.61919505 153.111448,1.77915217 154.318884,2.09907121 C155.526321,2.41899025 156.233228,2.57894737 156.439627,2.57894737 C156.646027,2.57894737 156.800824,2.5325082 156.904024,2.43962848 C157.007223,2.34674876 157.120741,2.18679164 157.244581,1.95975232 L157.585138,1.95975232 L157.832816,8.67801858 L157.275541,8.67801858 C156.346743,6.59338483 155.392161,4.99897353 154.411763,3.89473684 C153.431366,2.79050015 152.311667,2.23839009 151.05263,2.23839009 Z M171.03715,17.5325077 L171.03715,14.9009288 C171.03715,12.8988548 170.928792,11.4386011 170.712073,10.5201238 C170.495354,9.60164659 169.994843,9.14241486 169.210525,9.14241486 C168.756446,9.14241486 168.390093,9.27141254 168.111454,9.52941176 C167.832815,9.78741099 167.631578,10.2156833 167.507739,10.8142415 C167.321979,11.7430387 167.229101,13.1568533 167.229101,15.0557276 L167.229101,17.4705882 C167.229101,19.7203415 167.29618,21.0722372 167.430339,21.5263158 C167.564499,21.9803944 167.703816,22.3519077 167.848296,22.6408669 C168.075335,23.1362254 168.519087,23.3839009 169.179565,23.3839009 C169.984523,23.3839009 170.510833,22.9195093 170.758513,21.9907121 C170.944272,21.3302341 171.03715,19.8441808 171.03715,17.5325077 Z M169.117646,23.9411765 C166.537653,23.9411765 164.587209,23.2807084 163.266252,21.9597523 C161.945296,20.6387963 161.284828,18.7451104 161.284828,16.2786378 C161.284828,13.8121652 161.991736,11.9133193 163.405571,10.5820433 C164.819407,9.25076734 166.805971,8.58513932 169.365324,8.58513932 C171.924676,8.58513932 173.833842,9.19916827 175.092878,10.4272446 C176.351914,11.6553209 176.981423,13.5283672 176.981423,16.0464396 C176.981423,21.3096238 174.36019,23.9411765 169.117646,23.9411765 Z M189.195045,9.76160991 C188.431367,9.76160991 187.760579,10.256961 187.182661,11.247678 C186.604743,12.238395 186.315788,13.4148539 186.315788,14.7770898 L186.315788,23.0743034 L188.51393,23.0743034 L188.51393,23.6315789 L178.854488,23.6315789 L178.854488,23.0743034 L180.557274,23.0743034 L180.557274,9.45201238 L178.854488,9.45201238 L178.854488,8.89473684 L186.315788,8.89473684 L186.315788,11.8668731 C186.584107,10.8142362 187.100098,10.0041308 187.863776,9.43653251 C188.627453,8.86893421 189.494318,8.58513932 190.464395,8.58513932 C191.434472,8.58513932 192.223938,8.8586144 192.832816,9.40557276 C193.441694,9.95253111 193.746128,10.7265172 193.746128,11.7275542 C193.746128,12.7285912 193.519093,13.4974173 193.065014,14.0340557 C192.610935,14.5706941 191.914348,14.8390093 190.975231,14.8390093 C190.036113,14.8390093 189.344686,14.5294149 188.900927,13.9102167 C188.457169,13.2910186 188.40041,12.434474 188.730649,11.3405573 L189.8452,11.3405573 C190.361198,10.2879204 190.144482,9.76160991 189.195045,9.76160991 Z M206.486066,15.3034056 C206.486066,13.177492 206.382868,11.7481977 206.176469,11.0154799 C205.97007,10.2827621 205.567597,9.91640867 204.969039,9.91640867 C204.37048,9.91640867 203.83385,10.3034017 203.359131,11.0773994 C202.884413,11.8513971 202.647057,12.8885384 202.647057,14.1888545 L202.647057,19.8544892 C202.647057,20.7420065 202.822494,21.4953529 203.173373,22.1145511 C203.524252,22.7337492 204.040243,23.0433437 204.721361,23.0433437 C205.402478,23.0433437 205.86687,22.5892718 206.114549,21.6811146 C206.362229,20.7729573 206.486066,19.1837059 206.486066,16.9133127 L206.486066,15.3034056 Z M202.585138,8.89473684 L202.585138,11.3405573 C203.390095,9.50360279 204.81423,8.58513932 206.857583,8.58513932 C208.632618,8.58513932 210.010313,9.2249678 210.99071,10.504644 C211.971107,11.7843201 212.461299,13.7244452 212.461299,16.3250774 C212.461299,18.9257096 211.929828,20.845195 210.866871,22.0835913 C209.803915,23.3219876 208.209503,23.9411765 206.08359,23.9411765 C205.092873,23.9411765 204.349846,23.8173387 203.854487,23.5696594 C203.359129,23.3219802 202.956656,22.9401471 202.647057,22.4241486 L202.647057,30.4427245 L206.640865,30.4427245 L206.640865,31 L195.185757,31 L195.185757,30.4427245 L196.888543,30.4427245 L196.888543,9.45201238 L195.247676,9.45201238 L195.247676,8.89473684 L202.585138,8.89473684 Z M218.142413,23.9411765 C217.254896,23.9411765 216.589268,23.6780212 216.145509,23.1517028 C215.70175,22.6253844 215.479874,21.9855559 215.479874,21.2321981 C215.479874,20.4788404 215.71207,19.8441718 216.176469,19.3281734 C216.640867,18.8121749 217.296176,18.5541796 218.142413,18.5541796 C218.98865,18.5541796 219.659438,18.7708957 220.154797,19.2043344 C220.650155,19.6377731 220.897831,20.2879214 220.897831,21.1547988 C220.897831,22.0216762 220.665635,22.7027839 220.201237,23.1981424 C219.736838,23.6935009 219.05057,23.9411765 218.142413,23.9411765 Z"
        id="BioGeniaCorp."
      />
    </Svg>
  );
};

export default BioGeniaCorp;

{
  /* <svg width="221px" height="32px" viewBox="0 0 221 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="Rectangle" x="0" y="0" width="221" height="32"></rect>
        <path d="M0,1.95975232 L9.25696594,1.95975232 C12.1259173,1.95975232 14.2775986,2.34674536 15.7120743,3.12074303 C17.14655,3.89474071 17.8637771,5.20019721 17.8637771,7.0371517 C17.8637771,9.86482322 16.1610077,11.5572728 12.755418,12.1145511 L12.755418,12.1764706 C16.8834056,12.692469 18.9473684,14.4881167 18.9473684,17.5634675 C18.9473684,19.8132207 18.1011437,21.3869924 16.4086687,22.2848297 C14.7161938,23.182667 12.2807176,23.6315789 9.10216718,23.6315789 L0,23.6315789 L0,23.0433437 L2.0123839,23.0433437 L2.0123839,2.54798762 L0,2.54798762 L0,1.95975232 Z M8.0495356,12.6718266 L8.0495356,23.0433437 L9.50464396,23.0433437 C10.6398406,23.0433437 11.4344663,22.6511907 11.8885449,21.8668731 C12.3426235,21.0825554 12.5696594,19.9267362 12.5696594,18.3993808 L12.5696594,16.7585139 C12.5696594,15.396278 12.2910245,14.3746164 11.7337461,13.6934985 C11.1764678,13.0123805 10.1857656,12.6718266 8.76160991,12.6718266 L8.0495356,12.6718266 Z M8.0495356,2.54798762 L8.0495356,12.0835913 L8.85448916,12.0835913 C9.92776594,12.0835913 10.6759525,11.7585172 11.0990712,11.1083591 C11.5221899,10.4582011 11.7337461,9.46233901 11.7337461,8.12074303 L11.7337461,6.66563467 C11.7337461,5.13827926 11.5479895,4.07017848 11.1764706,3.46130031 C10.8049517,2.85242214 10.0928845,2.54798762 9.04024768,2.54798762 L8.0495356,2.54798762 Z M25.6191949,6.75851393 C24.5252782,6.75851393 23.7461322,6.47987895 23.2817336,5.92260062 C22.817335,5.36532229 22.5851392,4.67389474 22.5851392,3.84829721 C22.5851392,3.02269969 22.8379746,2.34159195 23.3436531,1.80495356 C23.8493316,1.26831517 24.6181577,1 25.6501546,1 C26.6821515,1 27.4664574,1.24251563 28.0030958,1.72755418 C28.5397342,2.21259272 28.8080494,2.90402028 28.8080494,3.80185759 C28.8080494,4.69969489 28.550054,5.41692198 28.0340556,5.95356037 C27.5180571,6.49019876 26.7131116,6.75851393 25.6191949,6.75851393 Z M20.9442723,8.89473684 L28.5294116,8.89473684 L28.5294116,23.0743034 L30.2631577,23.0743034 L30.2631577,23.6315789 L21.0681113,23.6315789 L21.0681113,23.0743034 L22.7708977,23.0743034 L22.7708977,9.45201238 L20.9442723,9.45201238 L20.9442723,8.89473684 Z M41.8885446,17.5325077 L41.8885446,14.9009288 C41.8885446,12.8988548 41.7801865,11.4386011 41.5634672,10.5201238 C41.3467478,9.60164659 40.8462368,9.14241486 40.0619192,9.14241486 C39.6078406,9.14241486 39.2414872,9.27141254 38.962848,9.52941176 C38.6842088,9.78741099 38.4829724,10.2156833 38.3591328,10.8142415 C38.1733734,11.7430387 38.080495,13.1568533 38.080495,15.0557276 L38.080495,17.4705882 C38.080495,19.7203415 38.1475738,21.0722372 38.2817334,21.5263158 C38.415893,21.9803944 38.5552105,22.3519077 38.6996901,22.6408669 C38.9267294,23.1362254 39.3704814,23.3839009 40.0309594,23.3839009 C40.835917,23.3839009 41.3622276,22.9195093 41.6099068,21.9907121 C41.7956663,21.3302341 41.8885446,19.8441808 41.8885446,17.5325077 Z M39.9690399,23.9411765 C37.3890477,23.9411765 35.4386028,23.2807084 34.1176467,21.9597523 C32.7966907,20.6387963 32.1362226,18.7451104 32.1362226,16.2786378 C32.1362226,13.8121652 32.8431299,11.9133193 34.2569656,10.5820433 C35.6708014,9.25076734 37.6573656,8.58513932 40.216718,8.58513932 C42.7760703,8.58513932 44.6852359,9.19916827 45.9442721,10.4272446 C47.2033084,11.6553209 47.832817,13.5283672 47.832817,16.0464396 C47.832817,21.3096238 45.2115842,23.9411765 39.9690399,23.9411765 Z M61.4705878,23.3219814 C62.4819447,23.3219814 63.1269331,23.1362248 63.4055723,22.7647059 C63.6842115,22.393187 63.8235289,21.7636783 63.8235289,20.876161 L63.8235289,14.869969 L61.8421048,14.869969 L61.8421048,14.1888545 L70.7585135,14.1888545 L70.7585135,14.869969 L69.5510831,14.869969 L69.5510831,23.6006192 L69.0866868,23.6006192 C68.715168,23.0846207 68.1888574,22.8266254 67.5077395,22.8266254 C67.2187803,22.8266254 66.3570759,23.012382 64.9226002,23.3839009 C63.4881245,23.7554198 62.2652265,23.9411765 61.2538695,23.9411765 C57.8895596,23.9411765 55.2838065,23.0330328 53.436532,21.2167183 C51.5892576,19.4004037 50.6656342,16.6708128 50.6656342,13.0278638 C50.6656342,9.38491471 51.6305368,6.57276533 53.5603711,4.59133127 C55.4902053,2.60989721 58.0856385,1.61919505 61.3467488,1.61919505 C62.605785,1.61919505 63.8699622,1.77915217 65.1393184,2.09907121 C66.4086746,2.41899025 67.1465413,2.57894737 67.3529407,2.57894737 C67.5593401,2.57894737 67.7141373,2.5325082 67.817337,2.43962848 C67.9205367,2.34674876 68.0340546,2.18679164 68.1578943,1.95975232 L68.4984515,1.95975232 L68.7461296,8.67801858 L68.188854,8.67801858 C67.1774971,6.67594458 66.1609954,5.10217291 65.1393184,3.95665635 C64.1176415,2.81113978 62.977302,2.23839009 61.7182658,2.23839009 C58.5603553,2.23839009 56.9814237,5.32401455 56.9814237,11.495356 L56.9814237,13.9411765 C56.9814237,17.0371672 57.3684167,19.3746051 58.1424144,20.9535604 C58.9164121,22.5325156 60.0257921,23.3219814 61.4705878,23.3219814 Z M81.2383895,23.9411765 C78.5758375,23.9411765 76.5789534,23.2549088 75.2476774,21.8823529 C73.9164014,20.5097971 73.2507734,18.6006314 73.2507734,16.1547988 C73.2507734,13.7089661 73.9989599,11.8359198 75.4953554,10.5356037 C76.9917509,9.23528762 78.8957567,8.58513932 81.2074297,8.58513932 C85.8926957,8.58513932 88.1424152,10.938057 87.9566557,15.6439628 L79.2260056,15.6439628 L79.2260056,16.8513932 C79.2260056,18.8741071 79.4840009,20.4014396 79.9999994,21.4334365 C80.5159978,22.4654334 81.4138217,22.9814241 82.6934978,22.9814241 C85.0877307,22.9814241 86.6563424,21.7017672 87.3993802,19.1424149 L87.9566557,19.2352941 C87.5644969,20.7213697 86.8575896,21.8771889 85.8359127,22.7027864 C84.8142358,23.5283839 83.2817433,23.9411765 81.2383895,23.9411765 Z M79.2569653,15.0247678 L82.4458198,15.0247678 L82.4458198,13.5077399 C82.4458198,11.835905 82.3477816,10.6955655 82.1517022,10.0866873 C81.9556228,9.47780913 81.5634698,9.17337461 80.9752316,9.17337461 C80.3869933,9.17337461 79.9535611,9.49844876 79.674922,10.1486068 C79.3962828,10.7987649 79.2569653,11.9184647 79.2569653,13.5077399 L79.2569653,15.0247678 Z M90.1393181,8.89473684 L97.6006184,8.89473684 L97.6006184,11.7430341 C97.9308574,10.7935969 98.4365283,10.0299307 99.1176463,9.45201238 C99.7987642,8.87409412 100.830746,8.58513932 102.213622,8.58513932 C105.412812,8.58513932 107.012383,10.3085483 107.012383,13.755418 L107.012383,23.0743034 L108.746129,23.0743034 L108.746129,23.6315789 L99.9845193,23.6315789 L99.9845193,23.0743034 L101.253869,23.0743034 L101.253869,13.0123839 C101.253869,11.7739876 101.171311,10.974202 101.006191,10.6130031 C100.841072,10.2518042 100.541797,10.0712074 100.108358,10.0712074 C99.4478803,10.0712074 98.8648108,10.5046396 98.3591324,11.371517 C97.8534539,12.2383944 97.6006184,13.2910155 97.6006184,14.5294118 L97.6006184,23.0743034 L98.9318878,23.0743034 L98.9318878,23.6315789 L90.1393181,23.6315789 L90.1393181,23.0743034 L91.8421045,23.0743034 L91.8421045,9.45201238 L90.1393181,9.45201238 L90.1393181,8.89473684 Z M114.705881,6.75851393 C113.611965,6.75851393 112.832819,6.47987895 112.36842,5.92260062 C111.904022,5.36532229 111.671826,4.67389474 111.671826,3.84829721 C111.671826,3.02269969 111.924661,2.34159195 112.43034,1.80495356 C112.936018,1.26831517 113.704844,1 114.736841,1 C115.768838,1 116.553144,1.24251563 117.089782,1.72755418 C117.626421,2.21259272 117.894736,2.90402028 117.894736,3.80185759 C117.894736,4.69969489 117.636741,5.41692198 117.120742,5.95356037 C116.604744,6.49019876 115.799798,6.75851393 114.705881,6.75851393 Z M110.030959,8.89473684 L117.616098,8.89473684 L117.616098,23.0743034 L119.349844,23.0743034 L119.349844,23.6315789 L110.154798,23.6315789 L110.154798,23.0743034 L111.857584,23.0743034 L111.857584,9.45201238 L110.030959,9.45201238 L110.030959,8.89473684 Z M128.405572,16.3560372 L129.303404,16.3560372 L129.303404,13.9721362 C129.303404,12.0113421 129.195046,10.6955658 128.978327,10.0247678 C128.761608,9.35396981 128.343655,9.01857585 127.724457,9.01857585 C127.352938,9.01857585 127.017544,9.11661409 126.718265,9.3126935 C126.418986,9.50877291 126.269349,9.77708808 126.269349,10.1176471 C126.269349,10.458206 126.331268,10.8039198 126.455107,11.1547988 L127.229101,11.1547988 C127.394221,11.5882375 127.476779,12.1093881 127.476779,12.7182663 C127.476779,13.3271444 127.218784,13.853455 126.702785,14.2972136 C126.186787,14.7409723 125.536639,14.9628483 124.752321,14.9628483 C122.977286,14.9628483 122.089782,14.1063037 122.089782,12.3931889 C122.089782,9.85447647 124.246623,8.58513932 128.56037,8.58513932 C131.016523,8.58513932 132.714133,9.0030918 133.65325,9.83900929 C134.592367,10.6749268 135.061918,12.2074192 135.061918,14.4365325 L135.061918,20.7213622 C135.061918,21.794639 135.361193,22.3312693 135.959751,22.3312693 C136.661509,22.3312693 137.074302,21.2683285 137.198141,19.1424149 L137.662538,19.1733746 C137.579978,20.9896892 137.239424,22.2383867 136.640866,22.9195046 C136.042308,23.6006226 135.061925,23.9411765 133.699689,23.9411765 C131.222897,23.9411765 129.798762,23.1775102 129.427243,21.6501548 C129.158924,22.4344724 128.756452,23.012382 128.219813,23.3839009 C127.683175,23.7554198 126.898869,23.9411765 125.866872,23.9411765 C122.812161,23.9411765 121.284829,22.6924789 121.284829,20.1950464 C121.284829,18.7296108 121.867898,17.7234289 123.034055,17.1764706 C124.200211,16.6295122 125.990699,16.3560372 128.405572,16.3560372 Z M127.167182,20.1640867 C127.167182,21.2373635 127.223941,21.928791 127.33746,22.2383901 C127.45098,22.5479892 127.667696,22.7027864 127.987615,22.7027864 C128.307534,22.7027864 128.606809,22.4396311 128.885448,21.9133127 C129.164087,21.3869943 129.303404,20.6594474 129.303404,19.7306502 L129.303404,16.8513932 L129.086686,16.8513932 C127.80701,16.8513932 127.167182,17.7904963 127.167182,19.6687307 L127.167182,20.1640867 Z M151.05263,2.23839009 C147.85344,2.23839009 146.253869,5.32401455 146.253869,11.495356 L146.253869,13.9411765 C146.253869,16.8720477 146.676981,19.1682063 147.523219,20.8297214 C148.369456,22.4912364 149.618154,23.3219814 151.269349,23.3219814 C153.539742,23.3219814 155.624344,21.1135412 157.523219,16.6965944 L158.080494,16.6965944 L157.863776,23.6006192 L157.523219,23.6006192 C157.399379,23.3735799 157.285861,23.2136228 157.182661,23.120743 C157.079462,23.0278633 156.929824,22.9814241 156.733745,22.9814241 C156.537665,22.9814241 155.789479,23.1413813 154.489163,23.4613003 C153.188847,23.7812193 151.867911,23.9411765 150.526315,23.9411765 C147.162005,23.9411765 144.556252,23.0330328 142.708977,21.2167183 C140.861703,19.4004037 139.938079,16.6708128 139.938079,13.0278638 C139.938079,9.38491471 140.902982,6.57276533 142.832816,4.59133127 C144.76265,2.60989721 147.358084,1.61919505 150.619194,1.61919505 C151.87823,1.61919505 153.111448,1.77915217 154.318884,2.09907121 C155.526321,2.41899025 156.233228,2.57894737 156.439627,2.57894737 C156.646027,2.57894737 156.800824,2.5325082 156.904024,2.43962848 C157.007223,2.34674876 157.120741,2.18679164 157.244581,1.95975232 L157.585138,1.95975232 L157.832816,8.67801858 L157.275541,8.67801858 C156.346743,6.59338483 155.392161,4.99897353 154.411763,3.89473684 C153.431366,2.79050015 152.311667,2.23839009 151.05263,2.23839009 Z M171.03715,17.5325077 L171.03715,14.9009288 C171.03715,12.8988548 170.928792,11.4386011 170.712073,10.5201238 C170.495354,9.60164659 169.994843,9.14241486 169.210525,9.14241486 C168.756446,9.14241486 168.390093,9.27141254 168.111454,9.52941176 C167.832815,9.78741099 167.631578,10.2156833 167.507739,10.8142415 C167.321979,11.7430387 167.229101,13.1568533 167.229101,15.0557276 L167.229101,17.4705882 C167.229101,19.7203415 167.29618,21.0722372 167.430339,21.5263158 C167.564499,21.9803944 167.703816,22.3519077 167.848296,22.6408669 C168.075335,23.1362254 168.519087,23.3839009 169.179565,23.3839009 C169.984523,23.3839009 170.510833,22.9195093 170.758513,21.9907121 C170.944272,21.3302341 171.03715,19.8441808 171.03715,17.5325077 Z M169.117646,23.9411765 C166.537653,23.9411765 164.587209,23.2807084 163.266252,21.9597523 C161.945296,20.6387963 161.284828,18.7451104 161.284828,16.2786378 C161.284828,13.8121652 161.991736,11.9133193 163.405571,10.5820433 C164.819407,9.25076734 166.805971,8.58513932 169.365324,8.58513932 C171.924676,8.58513932 173.833842,9.19916827 175.092878,10.4272446 C176.351914,11.6553209 176.981423,13.5283672 176.981423,16.0464396 C176.981423,21.3096238 174.36019,23.9411765 169.117646,23.9411765 Z M189.195045,9.76160991 C188.431367,9.76160991 187.760579,10.256961 187.182661,11.247678 C186.604743,12.238395 186.315788,13.4148539 186.315788,14.7770898 L186.315788,23.0743034 L188.51393,23.0743034 L188.51393,23.6315789 L178.854488,23.6315789 L178.854488,23.0743034 L180.557274,23.0743034 L180.557274,9.45201238 L178.854488,9.45201238 L178.854488,8.89473684 L186.315788,8.89473684 L186.315788,11.8668731 C186.584107,10.8142362 187.100098,10.0041308 187.863776,9.43653251 C188.627453,8.86893421 189.494318,8.58513932 190.464395,8.58513932 C191.434472,8.58513932 192.223938,8.8586144 192.832816,9.40557276 C193.441694,9.95253111 193.746128,10.7265172 193.746128,11.7275542 C193.746128,12.7285912 193.519093,13.4974173 193.065014,14.0340557 C192.610935,14.5706941 191.914348,14.8390093 190.975231,14.8390093 C190.036113,14.8390093 189.344686,14.5294149 188.900927,13.9102167 C188.457169,13.2910186 188.40041,12.434474 188.730649,11.3405573 L189.8452,11.3405573 C190.361198,10.2879204 190.144482,9.76160991 189.195045,9.76160991 Z M206.486066,15.3034056 C206.486066,13.177492 206.382868,11.7481977 206.176469,11.0154799 C205.97007,10.2827621 205.567597,9.91640867 204.969039,9.91640867 C204.37048,9.91640867 203.83385,10.3034017 203.359131,11.0773994 C202.884413,11.8513971 202.647057,12.8885384 202.647057,14.1888545 L202.647057,19.8544892 C202.647057,20.7420065 202.822494,21.4953529 203.173373,22.1145511 C203.524252,22.7337492 204.040243,23.0433437 204.721361,23.0433437 C205.402478,23.0433437 205.86687,22.5892718 206.114549,21.6811146 C206.362229,20.7729573 206.486066,19.1837059 206.486066,16.9133127 L206.486066,15.3034056 Z M202.585138,8.89473684 L202.585138,11.3405573 C203.390095,9.50360279 204.81423,8.58513932 206.857583,8.58513932 C208.632618,8.58513932 210.010313,9.2249678 210.99071,10.504644 C211.971107,11.7843201 212.461299,13.7244452 212.461299,16.3250774 C212.461299,18.9257096 211.929828,20.845195 210.866871,22.0835913 C209.803915,23.3219876 208.209503,23.9411765 206.08359,23.9411765 C205.092873,23.9411765 204.349846,23.8173387 203.854487,23.5696594 C203.359129,23.3219802 202.956656,22.9401471 202.647057,22.4241486 L202.647057,30.4427245 L206.640865,30.4427245 L206.640865,31 L195.185757,31 L195.185757,30.4427245 L196.888543,30.4427245 L196.888543,9.45201238 L195.247676,9.45201238 L195.247676,8.89473684 L202.585138,8.89473684 Z M218.142413,23.9411765 C217.254896,23.9411765 216.589268,23.6780212 216.145509,23.1517028 C215.70175,22.6253844 215.479874,21.9855559 215.479874,21.2321981 C215.479874,20.4788404 215.71207,19.8441718 216.176469,19.3281734 C216.640867,18.8121749 217.296176,18.5541796 218.142413,18.5541796 C218.98865,18.5541796 219.659438,18.7708957 220.154797,19.2043344 C220.650155,19.6377731 220.897831,20.2879214 220.897831,21.1547988 C220.897831,22.0216762 220.665635,22.7027839 220.201237,23.1981424 C219.736838,23.6935009 219.05057,23.9411765 218.142413,23.9411765 Z" id="BioGeniaCorp." fill="#0A203F"></path>
    </g>
</svg> */
}