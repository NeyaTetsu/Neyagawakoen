//-----上り-----
//（種別）0が普通、1が区間快速、2が通過（快速）
var sData2 = ['普通', '区快', '通過'];
//（列車データ）左から「種別」「時」「分」「行き先」
var trainData2 = new Array();
trainData2[0] = [sData2[1], 12, '松井山手'];
//終電
trainData2[1] = ['', 459, ''];
trainData2[2] = ['', 459, ''];
//初電
trainData2[3] = [sData2[0], 532, '木　津'];
trainData2[4] = [sData2[0], 549, '松井山手'];
trainData2[5] = [sData2[0], 556, '木　津'];
trainData2[6] = [sData2[0], 607, '松井山手'];
trainData2[7] = [sData2[0], 615, '木　津'];
trainData2[8] = [sData2[0], 622, '松井山手'];
trainData2[9] = [sData2[0], 633, '木　津'];
trainData2[10] = [sData2[0], 641, '松井山手'];
trainData2[11] = [sData2[0], 650, '木　津'];
trainData2[12] = [sData2[0], 659, '松井山手'];
trainData2[13] = [sData2[0], 704, '京田辺'];
trainData2[14] = [sData2[0], 711, '松井山手'];
trainData2[15] = [sData2[2], 716, ''];
trainData2[16] = [sData2[0], 721, '松井山手'];
trainData2[17] = [sData2[0], 725, '松井山手'];
trainData2[18] = [sData2[2], 733, ''];
trainData2[19] = [sData2[0], 738, '京田辺'];
trainData2[20] = [sData2[0], 746, '松井山手'];
trainData2[21] = [sData2[2], 752, ''];
trainData2[22] = [sData2[0], 756, '京田辺'];
trainData2[23] = [sData2[0], 803, '松井山手'];
trainData2[24] = [sData2[2], 809, ''];
trainData2[25] = [sData2[0], 814, '京田辺'];
trainData2[26] = [sData2[0], 823, '松井山手'];
trainData2[27] = [sData2[2], 832, ''];
trainData2[28] = [sData2[0], 837, '松井山手'];
trainData2[29] = [sData2[0], 845, '松井山手'];
trainData2[30] = [sData2[2], 852, ''];
trainData2[31] = [sData2[0], 856, '松井山手'];
trainData2[32] = [sData2[2], 909, ''];
trainData2[33] = [sData2[0], 915, '長　尾'];
trainData2[34] = [sData2[2], 926, ''];
trainData2[35] = [sData2[0], 930, '長　尾'];
trainData2[36] = [sData2[2], 940, ''];
trainData2[37] = [sData2[0], 945, '長　尾'];
trainData2[38] = [sData2[2], 956, ''];
trainData2[39] = [sData2[0], 1000, '長　尾'];
trainData2[40] = [sData2[2], 1010, ''];
trainData2[41] = [sData2[0], 1015, '長　尾'];
trainData2[42] = [sData2[2], 1023, ''];
trainData2[43] = [sData2[0], 1027, '松井山手'];
trainData2[44] = [sData2[2], 1038, ''];
trainData2[45] = [sData2[0], 1042, '松井山手'];
trainData2[46] = [sData2[1], 1056, '同志社前'];
trainData2[47] = [sData2[1], 1111, '木　津'];
trainData2[48] = [sData2[1], 1126, '同志社前'];
trainData2[49] = [sData2[1], 1141, '木　津'];
trainData2[50] = [sData2[1], 1156, '同志社前'];
trainData2[51] = [sData2[1], 1211, '木　津'];
trainData2[52] = [sData2[1], 1226, '同志社前'];
trainData2[53] = [sData2[1], 1241, '木　津'];
trainData2[54] = [sData2[1], 1256, '同志社前'];
trainData2[55] = [sData2[1], 1311, '木　津'];
trainData2[56] = [sData2[1], 1326, '同志社前'];
trainData2[57] = [sData2[1], 1341, '木　津'];
trainData2[58] = [sData2[1], 1356, '同志社前'];
trainData2[59] = [sData2[1], 1411, '木　津'];
trainData2[60] = [sData2[1], 1426, '同志社前'];
trainData2[61] = [sData2[1], 1441, '木　津'];
trainData2[62] = [sData2[1], 1456, '同志社前'];
trainData2[63] = [sData2[2], 1508, ''];
trainData2[64] = [sData2[0], 1514, '長　尾'];
trainData2[65] = [sData2[2], 1523, ''];
trainData2[66] = [sData2[0], 1527, '松井山手'];
trainData2[67] = [sData2[2], 1538, ''];
trainData2[68] = [sData2[0], 1542, '松井山手'];
trainData2[69] = [sData2[2], 1553, ''];
trainData2[70] = [sData2[0], 1557, '松井山手'];
trainData2[71] = [sData2[2], 1608, ''];
trainData2[72] = [sData2[0], 1612, '松井山手'];
trainData2[73] = [sData2[2], 1623, ''];
trainData2[74] = [sData2[0], 1627, '松井山手'];
trainData2[75] = [sData2[2], 1638, ''];
trainData2[76] = [sData2[0], 1642, '松井山手'];
trainData2[77] = [sData2[2], 1653, ''];
trainData2[78] = [sData2[0], 1657, '松井山手'];
trainData2[79] = [sData2[2], 1708, ''];
trainData2[80] = [sData2[0], 1712, '松井山手'];
trainData2[81] = [sData2[2], 1723, ''];
trainData2[82] = [sData2[0], 1727, '松井山手'];
trainData2[83] = [sData2[2], 1738, ''];
trainData2[84] = [sData2[0], 1742, '松井山手'];
trainData2[85] = [sData2[2], 1753, ''];
trainData2[86] = [sData2[0], 1757, '松井山手'];
trainData2[87] = [sData2[2], 1808, ''];
trainData2[88] = [sData2[0], 1812, '松井山手'];
trainData2[89] = [sData2[1], 1819, '京田辺'];
trainData2[90] = [sData2[2], 1824, ''];
trainData2[91] = [sData2[0], 1827, '松井山手'];
trainData2[92] = [sData2[2], 1838, ''];
trainData2[93] = [sData2[0], 1842, '松井山手'];
trainData2[94] = [sData2[1], 1849, '京田辺'];
trainData2[95] = [sData2[2], 1854, ''];
trainData2[96] = [sData2[0], 1857, '松井山手'];
trainData2[97] = [sData2[2], 1908, ''];
trainData2[98] = [sData2[0], 1912, '松井山手'];
trainData2[99] = [sData2[1], 1919, '京田辺'];
trainData2[100] = [sData2[2], 1924, ''];
trainData2[101] = [sData2[0], 1927, '松井山手'];
trainData2[102] = [sData2[2], 1938, ''];
trainData2[103] = [sData2[0], 1942, '松井山手'];
trainData2[104] = [sData2[1], 1949, '京田辺'];
trainData2[105] = [sData2[2], 1954, ''];
trainData2[106] = [sData2[0], 1957, '松井山手'];
trainData2[107] = [sData2[2], 2008, ''];
trainData2[108] = [sData2[0], 2012, '松井山手'];
trainData2[109] = [sData2[2], 2023, ''];
trainData2[110] = [sData2[0], 2027, '京田辺'];
trainData2[111] = [sData2[2], 2038, ''];
trainData2[112] = [sData2[0], 2042, '松井山手'];
trainData2[113] = [sData2[2], 2053, ''];
trainData2[114] = [sData2[0], 2057, '松井山手'];
trainData2[115] = [sData2[2], 2108, ''];
trainData2[116] = [sData2[0], 2112, '松井山手'];
trainData2[117] = [sData2[2], 2123, ''];
trainData2[118] = [sData2[0], 2127, '松井山手'];
trainData2[119] = [sData2[2], 2138, ''];
trainData2[120] = [sData2[0], 2142, '松井山手'];
trainData2[121] = [sData2[2], 2153, ''];
trainData2[122] = [sData2[0], 2157, '京田辺'];
trainData2[123] = [sData2[2], 2208, ''];
trainData2[124] = [sData2[0], 2212, '松井山手'];
trainData2[125] = [sData2[2], 2223, ''];
trainData2[126] = [sData2[0], 2227, '松井山手'];
trainData2[127] = [sData2[1], 2242, '同志社前'];
trainData2[128] = [sData2[1], 2252, '奈　良'];
trainData2[129] = [sData2[1], 2314, '木　津'];
trainData2[130] = [sData2[1], 2332, '京田辺'];
trainData2[131] = [sData2[1], 2352, '松井山手'];