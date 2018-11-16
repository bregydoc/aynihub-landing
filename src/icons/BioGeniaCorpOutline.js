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
    <Svg fill={color} height={size} viewBox="0 0 177 32">
      <g id="Group-3">
        <path
          d="M9,6.70381837 L15.6630694,6.70381837 C17.7281113,6.70381837 19.2768695,6.98761326 20.3093904,7.55521156 C21.3419114,8.12280986 21.8581641,9.08014462 21.8581641,10.4272446 C21.8581641,12.5008704 20.6325281,13.742 18.1812194,14.1506708 L18.1812194,14.1960784 C21.1525027,14.5744773 22.638122,15.8912856 22.638122,18.1465428 C22.638122,19.7963619 22.0290181,20.9504611 20.810792,21.6088751 C19.5925658,22.2672892 17.839535,22.5964912 15.5516469,22.5964912 L9,22.5964912 L9,22.1651187 L10.4484934,22.1651187 L10.4484934,7.13519092 L9,7.13519092 L9,6.70381837 Z M14.7939734,14.5593395 L14.7939734,22.1651187 L15.8413455,22.1651187 C16.6584484,22.1651187 17.2304119,21.8775399 17.5572531,21.3023736 C17.8840942,20.7272073 18.0475123,19.8796066 18.0475123,18.7595459 L18.0475123,17.5562436 C18.0475123,16.5572705 17.8469537,15.808052 17.4458305,15.3085655 C17.0447072,14.809079 16.33161,14.5593395 15.3065172,14.5593395 L14.7939734,14.5593395 Z M14.7939734,7.13519092 L14.7939734,14.127967 L15.3733708,14.127967 C16.1459044,14.127967 16.6844414,13.8895793 16.988998,13.4127967 C17.2935545,12.9360141 17.4458305,12.2057153 17.4458305,11.2218782 L17.4458305,10.1547988 C17.4458305,9.03473812 17.3121247,8.25146422 17.0447092,7.80495356 C16.7772938,7.3584429 16.2647551,7.13519092 15.5070778,7.13519092 L14.7939734,7.13519092 Z M27.4404345,10.2229102 C26.6530445,10.2229102 26.0922231,10.0185779 25.7579538,9.60990712 C25.4236844,9.20123635 25.2565522,8.69418947 25.2565522,8.08875129 C25.2565522,7.48331311 25.4385406,6.9838341 25.8025228,6.59029928 C26.166505,6.19676446 26.7198982,6 27.462719,6 C28.2055399,6 28.7700752,6.1778448 29.156342,6.53353973 C29.5426089,6.88923466 29.7357394,7.39628154 29.7357394,8.05469556 C29.7357394,8.71310959 29.550037,9.23907612 29.1786265,9.63261094 C28.8072161,10.0261458 28.2278246,10.2229102 27.4404345,10.2229102 Z M24.075473,11.7894737 L29.5351788,11.7894737 L29.5351788,22.1878225 L30.7831115,22.1878225 L30.7831115,22.5964912 L24.1646111,22.5964912 L24.1646111,22.1878225 L25.3902593,22.1878225 L25.3902593,12.1981424 L24.075473,12.1981424 L24.075473,11.7894737 Z M39.1509461,18.123839 L39.1509461,16.1940144 C39.1509461,14.7258269 39.0729511,13.6549741 38.9169587,12.9814241 C38.7609663,12.3078742 38.4007036,11.9711042 37.8361598,11.9711042 C37.5093186,11.9711042 37.2456212,12.0657025 37.0450596,12.254902 C36.844498,12.4441014 36.6996501,12.7581677 36.6105116,13.1971104 C36.4768038,13.8782284 36.409951,14.9150257 36.409951,16.3075335 L36.409951,18.0784314 C36.409951,19.7282504 36.4582336,20.7196406 36.5548003,21.0526316 C36.651367,21.3856226 36.7516463,21.6580657 36.8556412,21.869969 C37.0190618,22.233232 37.33847,22.4148607 37.8138753,22.4148607 C38.3932755,22.4148607 38.7721085,22.0743068 38.9503855,21.3931889 C39.0840932,20.9088383 39.1509461,19.8190659 39.1509461,18.123839 Z M37.7693063,22.8235294 C35.9122542,22.8235294 34.5083439,22.3391861 33.5575333,21.370485 C32.6067226,20.4017839 32.1313244,19.0130809 32.1313244,17.2043344 C32.1313244,15.3955878 32.6401491,14.0031009 33.6578136,13.0268318 C34.6754781,12.0505627 36.1053867,11.5624355 37.9475824,11.5624355 C39.789778,11.5624355 41.1639759,12.0127234 42.0702173,12.9133127 C42.9764587,13.813902 43.4295726,15.1874693 43.4295726,17.0340557 C43.4295726,20.8937241 41.542836,22.8235294 37.7693063,22.8235294 Z M53.2459005,22.369453 C53.9738649,22.369453 54.438121,22.2332315 54.6386826,21.9607843 C54.8392442,21.6883371 54.9395235,21.2266974 54.9395235,20.5758514 L54.9395235,16.1713106 L53.5133147,16.1713106 L53.5133147,15.6718266 L59.9312545,15.6718266 L59.9312545,16.1713106 L59.0621585,16.1713106 L59.0621585,22.5737874 L58.7278908,22.5737874 C58.4604753,22.1953885 58.0816423,22.006192 57.5913806,22.006192 C57.3833908,22.006192 56.7631447,22.1424135 55.7306237,22.4148607 C54.6981028,22.6873079 53.8178733,22.8235294 53.0899089,22.8235294 C50.6683131,22.8235294 48.7927186,22.1575574 47.4630694,20.8255934 C46.1334201,19.4936294 45.4686054,17.4919294 45.4686054,14.8204334 C45.4686054,12.1489375 46.1631325,10.0866946 47.5522074,8.63364293 C48.9412823,7.18059129 50.8094487,6.45407637 53.1567625,6.45407637 C54.0630039,6.45407637 54.9729457,6.57137826 55.8866153,6.80598555 C56.8002849,7.04059285 57.3313939,7.15789474 57.479958,7.15789474 C57.6285222,7.15789474 57.7399436,7.12383935 57.8142257,7.05572755 C57.8885078,6.98761576 57.9702169,6.87031387 58.0593554,6.70381837 L58.304485,6.70381837 L58.4827611,11.630547 L58.0816399,11.630547 C57.3536755,10.1623594 56.6220079,9.00826013 55.8866153,8.16821465 C55.1512227,7.32816917 54.330418,6.90815273 53.4241766,6.90815273 C51.1511449,6.90815273 50.0146461,9.170944 50.0146461,13.6965944 L50.0146461,15.4901961 C50.0146461,17.7605893 50.2931998,19.4747104 50.8503154,20.6326109 C51.407431,21.7905115 52.2059514,22.369453 53.2459005,22.369453 Z M67.4745621,22.8235294 C65.5580844,22.8235294 64.1207476,22.3202665 63.1625088,21.3137255 C62.2042699,20.3071845 61.7251577,18.9071297 61.7251577,17.1135191 C61.7251577,15.3199085 62.2636947,13.9463412 63.3407849,12.9927761 C64.4178751,12.0392109 65.7883589,11.5624355 67.4522776,11.5624355 C70.8246841,11.5624355 72.4440092,13.2879084 72.3103014,16.7389061 L66.0260687,16.7389061 L66.0260687,17.624355 C66.0260687,19.1076786 66.2117711,20.2277224 66.5831815,20.9845201 C66.9545919,21.7413179 67.6008364,22.119711 68.5219342,22.119711 C70.2452785,22.119711 71.3743492,21.1812959 71.9091802,19.3044376 L72.3103014,19.372549 C72.0280295,20.4623378 71.5192049,21.3099385 70.7838123,21.9153767 C70.0484197,22.5208149 68.9453473,22.8235294 67.4745621,22.8235294 Z M66.0483532,16.2848297 L68.3436581,16.2848297 L68.3436581,15.1723426 C68.3436581,13.9463303 68.2730912,13.1100814 68.1319552,12.6635707 C67.9908192,12.21706 67.7085516,11.993808 67.2851437,11.993808 C66.8617358,11.993808 66.5497558,12.2321958 66.3491942,12.7089783 C66.1486325,13.1857609 66.0483532,14.0068741 66.0483532,15.1723426 L66.0483532,16.2848297 Z M73.8813595,11.7894737 L79.2519272,11.7894737 L79.2519272,13.878225 C79.4896298,13.1819711 79.8536066,12.6219491 80.3438683,12.1981424 C80.83413,11.7743357 81.5769397,11.5624355 82.5723196,11.5624355 C84.8750642,11.5624355 86.0264192,12.8262688 86.0264192,15.3539732 L86.0264192,22.1878225 L87.2743519,22.1878225 L87.2743519,22.5964912 L80.9678347,22.5964912 L80.9678347,22.1878225 L81.8814997,22.1878225 L81.8814997,14.8090815 C81.8814997,13.9009243 81.8220749,13.3144148 81.7032236,13.0495356 C81.5843723,12.7846564 81.3689575,12.6522188 81.0569727,12.6522188 C80.5815674,12.6522188 80.1618799,12.9700691 79.7978977,13.6057792 C79.4339155,14.2414892 79.2519272,15.0134114 79.2519272,15.9215686 L79.2519272,22.1878225 L80.2101612,22.1878225 L80.2101612,22.5964912 L73.8813595,22.5964912 L73.8813595,22.1878225 L75.1070077,22.1878225 L75.1070077,12.1981424 L73.8813595,12.1981424 L73.8813595,11.7894737 Z M91.5641206,10.2229102 C90.7767305,10.2229102 90.2159092,10.0185779 89.8816398,9.60990712 C89.5473704,9.20123635 89.3802383,8.69418947 89.3802383,8.08875129 C89.3802383,7.48331311 89.5622266,6.9838341 89.9262088,6.59029928 C90.290191,6.19676446 90.8435843,6 91.5864051,6 C92.3292259,6 92.8937612,6.1778448 93.2800281,6.53353973 C93.6662949,6.88923466 93.8594254,7.39628154 93.8594254,8.05469556 C93.8594254,8.71310959 93.673723,9.23907612 93.3023126,9.63261094 C92.9309022,10.0261458 92.3515106,10.2229102 91.5641206,10.2229102 Z M88.1991591,11.7894737 L93.6588648,11.7894737 L93.6588648,22.1878225 L94.9067975,22.1878225 L94.9067975,22.5964912 L88.2882971,22.5964912 L88.2882971,22.1878225 L89.5139453,22.1878225 L89.5139453,12.1981424 L88.1991591,12.1981424 L88.1991591,11.7894737 Z M101.425018,17.2610939 L102.071268,17.2610939 L102.071268,15.5128999 C102.071268,14.0749842 101.993273,13.1100816 101.837281,12.6181631 C101.681289,12.1262445 101.380451,11.880289 100.934758,11.880289 C100.667343,11.880289 100.42593,11.9521837 100.210512,12.0959752 C99.9950935,12.2397668 99.8873861,12.4365313 99.8873861,12.6862745 C99.8873861,12.9360178 99.9319547,13.1895412 100.021093,13.4468524 L100.578206,13.4468524 C100.697057,13.7647075 100.756482,14.1468846 100.756482,14.5933953 C100.756482,15.0399059 100.57078,15.425867 100.199369,15.75129 C99.8279589,16.076713 99.3599888,16.2394221 98.795445,16.2394221 C97.5177932,16.2394221 96.8789768,15.6112894 96.8789768,14.3550052 C96.8789768,12.4932827 98.4314491,11.5624355 101.53644,11.5624355 C103.304354,11.5624355 104.526276,11.868934 105.202242,12.4819401 C105.878209,13.0949463 106.216188,14.2187741 106.216188,15.8534572 L106.216188,20.4623323 C106.216188,21.2494019 106.431603,21.6429309 106.862439,21.6429309 C107.367557,21.6429309 107.664681,20.8634409 107.753819,19.3044376 L108.088087,19.3271414 C108.028661,20.6591054 107.783534,21.5748169 107.352698,22.0743034 C106.921862,22.5737899 106.216193,22.8235294 105.235669,22.8235294 C103.452899,22.8235294 102.427822,22.2635075 102.160406,21.1434469 C101.967273,21.7186131 101.677577,22.1424135 101.29131,22.4148607 C100.905044,22.6873079 100.340508,22.8235294 99.5976874,22.8235294 C97.3989378,22.8235294 96.2995795,21.9078179 96.2995795,20.0763674 C96.2995795,19.0017146 96.719267,18.2638479 97.5586545,17.8627451 C98.398042,17.4616423 99.6868168,17.2610939 101.425018,17.2610939 Z M100.533637,20.0536636 C100.533637,20.8407332 100.574492,21.3477801 100.656202,21.5748194 C100.737912,21.8018587 100.893902,21.9153767 101.124177,21.9153767 C101.354451,21.9153767 101.569866,21.7223962 101.770427,21.3364293 C101.970989,20.9504625 102.071268,20.4169281 102.071268,19.7358101 L102.071268,17.624355 L101.915277,17.624355 C100.994179,17.624355 100.533637,18.3130306 100.533637,19.6904025 L100.533637,20.0536636 Z M117.726139,6.90815273 C115.423394,6.90815273 114.272039,9.170944 114.272039,13.6965944 L114.272039,15.4901961 C114.272039,17.6395016 114.576591,19.3233513 115.185704,20.5417957 C115.794817,21.76024 116.693617,22.369453 117.88213,22.369453 C119.516336,22.369453 121.016812,20.7499302 122.383602,17.5108359 L122.784723,17.5108359 L122.628732,22.5737874 L122.383602,22.5737874 C122.294464,22.4072919 122.212754,22.28999 122.138472,22.2218782 C122.06419,22.1537664 121.956483,22.119711 121.815347,22.119711 C121.674211,22.119711 121.135674,22.2370129 120.19972,22.4716202 C119.263766,22.7062275 118.312969,22.8235294 117.347302,22.8235294 C114.925706,22.8235294 113.050112,22.1575574 111.720462,20.8255934 C110.390813,19.4936294 109.725999,17.4919294 109.725999,14.8204334 C109.725999,12.1489375 110.420526,10.0866946 111.809601,8.63364293 C113.198675,7.18059129 115.066842,6.45407637 117.414156,6.45407637 C118.320397,6.45407637 119.208055,6.57137826 120.077155,6.80598555 C120.946255,7.04059285 121.45508,7.15789474 121.603644,7.15789474 C121.752208,7.15789474 121.86363,7.12383935 121.937912,7.05572755 C122.012194,6.98761576 122.093903,6.87031387 122.183041,6.70381837 L122.428171,6.70381837 L122.606447,11.630547 L122.205326,11.630547 C121.536787,10.1018155 120.849688,8.93258059 120.144008,8.12280702 C119.438329,7.31303345 118.63238,6.90815273 117.726139,6.90815273 Z M132.110792,18.123839 L132.110792,16.1940144 C132.110792,14.7258269 132.032797,13.6549741 131.876805,12.9814241 C131.720812,12.3078742 131.360549,11.9711042 130.796006,11.9711042 C130.469164,11.9711042 130.205467,12.0657025 130.004905,12.254902 C129.804344,12.4441014 129.659496,12.7581677 129.570357,13.1971104 C129.43665,13.8782284 129.369797,14.9150257 129.369797,16.3075335 L129.369797,18.0784314 C129.369797,19.7282504 129.418079,20.7196406 129.514646,21.0526316 C129.611213,21.3856226 129.711492,21.6580657 129.815487,21.869969 C129.978908,22.233232 130.298316,22.4148607 130.773721,22.4148607 C131.353121,22.4148607 131.731954,22.0743068 131.910231,21.3931889 C132.043939,20.9088383 132.110792,19.8190659 132.110792,18.123839 Z M130.729152,22.8235294 C128.8721,22.8235294 127.46819,22.3391861 126.517379,21.370485 C125.566568,20.4017839 125.09117,19.0130809 125.09117,17.2043344 C125.09117,15.3955878 125.599995,14.0031009 126.617659,13.0268318 C127.635324,12.0505627 129.065233,11.5624355 130.907428,11.5624355 C132.749624,11.5624355 134.123822,12.0127234 135.030063,12.9133127 C135.936305,13.813902 136.389418,15.1874693 136.389418,17.0340557 C136.389418,20.8937241 134.502682,22.8235294 130.729152,22.8235294 Z M145.180659,12.4251806 C144.630971,12.4251806 144.148145,12.7884381 143.732165,13.5149639 C143.316186,14.2414897 143.108199,15.1042262 143.108199,16.1031992 L143.108199,22.1878225 L144.690399,22.1878225 L144.690399,22.5964912 L137.737631,22.5964912 L137.737631,22.1878225 L138.96328,22.1878225 L138.96328,12.1981424 L137.737631,12.1981424 L137.737631,11.7894737 L143.108199,11.7894737 L143.108199,13.9690402 C143.301332,13.1971066 143.672737,12.6030293 144.222425,12.1867905 C144.772112,11.7705518 145.396072,11.5624355 146.094324,11.5624355 C146.792575,11.5624355 147.360825,11.7629839 147.799089,12.1640867 C148.237353,12.5651895 148.456482,13.1327793 148.456482,13.8668731 C148.456482,14.6009669 148.293064,15.1647727 147.966223,15.5583075 C147.639382,15.9518424 147.137985,16.1486068 146.462018,16.1486068 C145.786051,16.1486068 145.288369,15.9215709 144.968956,15.4674923 C144.649543,15.0134136 144.608688,14.3852809 144.846391,13.5830753 L145.648634,13.5830753 C146.020044,12.8111417 145.864054,12.4251806 145.180659,12.4251806 Z M157.626559,16.4891641 C157.626559,14.9301608 157.552278,13.8820116 157.403714,13.3446852 C157.25515,12.8073589 156.965454,12.5386997 156.534618,12.5386997 C156.103782,12.5386997 155.717521,12.8224946 155.375823,13.3900929 C155.034126,13.9576912 154.86328,14.7182615 154.86328,15.6718266 L154.86328,19.8266254 C154.86328,20.4774714 154.989557,21.0299255 155.242116,21.4840041 C155.494675,21.9380828 155.86608,22.1651187 156.356342,22.1651187 C156.846604,22.1651187 157.180868,21.8321327 157.359145,21.1661507 C157.537422,20.5001687 157.626559,19.3347176 157.626559,17.6697626 L157.626559,16.4891641 Z M154.818711,11.7894737 L154.818711,13.5830753 C155.398111,12.2359754 156.423188,11.5624355 157.893973,11.5624355 C159.171625,11.5624355 160.163276,12.0316431 160.868956,12.9700722 C161.574636,13.9085014 161.92747,15.3312598 161.92747,17.2383901 C161.92747,19.1455204 161.544923,20.553143 160.779818,21.4613003 C160.014712,22.3694576 158.867071,22.8235294 157.336861,22.8235294 C156.623753,22.8235294 156.08893,22.732715 155.732376,22.5510836 C155.375822,22.3694521 155.086126,22.0894412 154.86328,21.7110423 L154.86328,27.5913313 L157.737982,27.5913313 L157.737982,28 L149.492712,28 L149.492712,27.5913313 L150.71836,27.5913313 L150.71836,12.1981424 L149.537281,12.1981424 L149.537281,11.7894737 L154.818711,11.7894737 Z M166.016678,22.8235294 C165.377852,22.8235294 164.89874,22.6305489 164.579327,22.244582 C164.259914,21.8586152 164.10021,21.3894076 164.10021,20.8369453 C164.10021,20.284483 164.267342,19.8190593 164.601612,19.4406605 C164.935881,19.0622616 165.407565,18.873065 166.016678,18.873065 C166.625791,18.873065 167.108618,19.0319902 167.465172,19.3498452 C167.821726,19.6677002 168,20.1444757 168,20.7801858 C168,21.4158959 167.832868,21.9153749 167.498598,22.2786378 C167.164329,22.6419007 166.670361,22.8235294 166.016678,22.8235294 Z"
          id="BioGeniaCorp."
          fill={props.color}
        />
        <rect
          id="Rectangle"
          stroke={props.color}
          x="0.5"
          y="0.5"
          width="176"
          height={props.size}
        />
      </g>
    </Svg>
  );
};

export default BioGeniaCorp;