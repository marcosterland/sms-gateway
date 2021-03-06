var g_countryChannel = null;
var countryArray = null;
function getConfig(){
	getConfigData('config/wifi/countryChannel.xml', function($xml) {
		var i = 0;
        g_countryChannel = _xml2feature($xml);
		countryArray = [
			['AL', g_countryChannel.al, wlan_country_al],
			['DZ', g_countryChannel.dz, wlan_country_dz],
			['AR', g_countryChannel.ar, wlan_country_ar],
			['AM', g_countryChannel.am, wlan_country_am],
			['AU', g_countryChannel.au, wlan_country_au],
			['AT', g_countryChannel.at, wlan_country_at],
			['AZ', g_countryChannel.az, wlan_country_az],
			['BH', g_countryChannel.bh, wlan_country_bh],
			['BY', g_countryChannel.by, wlan_country_by],
			['BE', g_countryChannel.be, wlan_country_be],
			['BZ', g_countryChannel.bz, wlan_country_bz],
			['BO', g_countryChannel.bo, wlan_country_bo],
			['BR', g_countryChannel.br, wlan_country_br],
			['BN', g_countryChannel.bn, wlan_country_bn],
			['BG', g_countryChannel.bg, wlan_country_bg],
			['CA', g_countryChannel.ca, wlan_country_ca],
			['CL', g_countryChannel.cl, wlan_country_cl],
			['CN', g_countryChannel.cn, wlan_country_cn],
			['CO', g_countryChannel.co, wlan_country_co],
			['CR', g_countryChannel.cr, wlan_country_cr],
			['HR', g_countryChannel.hr, wlan_country_hr],
			['CY', g_countryChannel.cy, wlan_country_cy],
			['CZ', g_countryChannel.cz, wlan_country_cz],
			['DK', g_countryChannel.dk, wlan_country_dk],
			['DO', g_countryChannel.doy, wlan_country_do],
			['EC', g_countryChannel.ec, wlan_country_ec],
			['EG', g_countryChannel.eg, wlan_country_eg],
			['SV', g_countryChannel.sv, wlan_country_sv],
			['EE', g_countryChannel.ee, wlan_country_ee],
			['FI', g_countryChannel.fi, wlan_country_fi],
			['FR', g_countryChannel.fr, wlan_country_fr],
			['DE', g_countryChannel.de, wlan_country_de],
			['GE', g_countryChannel.ge, wlan_country_ge],
			['GR', g_countryChannel.gr, wlan_country_gr],
			['GT', g_countryChannel.gt, wlan_country_gt],
			['HN', g_countryChannel.hn, wlan_country_hn],
			['HK', g_countryChannel.hk, wlan_country_hk],
			['HU', g_countryChannel.hu, wlan_country_hu],
			['IS', g_countryChannel.is, wlan_country_is],
			['IN', g_countryChannel.ind, wlan_country_in],
			['ID', g_countryChannel.id, wlan_country_id],
			['IR', g_countryChannel.ir, wlan_country_ir],
			['IE', g_countryChannel.ie, wlan_country_ie],
			['IL', g_countryChannel.il, wlan_country_il],
			['IT', g_countryChannel.it, wlan_country_it],
			['JP', g_countryChannel.jr, wlan_country_jp],
			['JO', g_countryChannel.jo, wlan_country_jo],
			['KZ', g_countryChannel.kz, wlan_country_kz],
			['KR', g_countryChannel.kr, wlan_country_kr],
			['KP', g_countryChannel.kp, wlan_country_kp],
			['KW', g_countryChannel.kw, wlan_country_kw],
			['LB', g_countryChannel.lb, wlan_country_lb],
			['LV', g_countryChannel.lv, wlan_country_lv],
			['LI', g_countryChannel.li, wlan_country_li],
			['LT', g_countryChannel.lt, wlan_country_lt],
			['LU', g_countryChannel.lu, wlan_country_lu],
			['MA', g_countryChannel.ma, wlan_country_ma],
			['MK', g_countryChannel.mk, wlan_country_mk],
			['MY', g_countryChannel.my, wlan_country_my],
			['MO', g_countryChannel.mo, wlan_country_mo],
			['MX', g_countryChannel.mx, wlan_country_mx],
			['MC', g_countryChannel.mc, wlan_country_mc],
			['NL', g_countryChannel.nl, wlan_country_nl],
			['NZ', g_countryChannel.nz, wlan_country_nz],
			['NO', g_countryChannel.no, wlan_country_no],
			['OM', g_countryChannel.om, wlan_country_om],
			['PK', g_countryChannel.pk, wlan_country_pk],
			['PA', g_countryChannel.pa, wlan_country_pa],
			['PE', g_countryChannel.pe, wlan_country_pe],
			['PH', g_countryChannel.ph, wlan_country_ph],
			['PL', g_countryChannel.pl, wlan_country_pl],
			['PT', g_countryChannel.pt, wlan_country_pt],
			['PR', g_countryChannel.pr, wlan_country_pr],
			['QA', g_countryChannel.qa, wlan_country_qa],
			['RO', g_countryChannel.ro, wlan_country_ro],
			['RU', g_countryChannel.ru, wlan_country_ru],
			['SA', g_countryChannel.sa, wlan_country_sa],
			['SG', g_countryChannel.sg, wlan_country_sg],
			['SK', g_countryChannel.sk, wlan_country_sk],
			['SI', g_countryChannel.si, wlan_country_si],
			['ZA', g_countryChannel.za, wlan_country_za],
			['ES', g_countryChannel.es, wlan_country_es],
			['SE', g_countryChannel.se, wlan_country_se],
			['CH', g_countryChannel.ch, wlan_country_ch],
			['SY', g_countryChannel.sy, wlan_country_sy],
			['TW', g_countryChannel.tw, wlan_country_tw],
			['TH', g_countryChannel.th, wlan_country_th],
			['TT', g_countryChannel.tt, wlan_country_tt],
			['TN', g_countryChannel.tn, wlan_country_tn],
			['TR', g_countryChannel.tr, wlan_country_tr],
			['UA', g_countryChannel.ua, wlan_country_ua],
			['AE', g_countryChannel.ae, wlan_country_ae],
			['GB', g_countryChannel.gb, wlan_country_gb],
			['US', g_countryChannel.us, wlan_country_us],
			['UY', g_countryChannel.uy, wlan_country_uy],
			['UZ', g_countryChannel.uz, wlan_country_uz],
			['VE', g_countryChannel.ve, wlan_country_ve],
			['VN', g_countryChannel.vn, wlan_country_vn],
			['YE', g_countryChannel.ye, wlan_country_ye],
			['ZW', g_countryChannel.zw, wlan_country_zw]
];
    for(i;i < countryArray.length;i++)
    {
    	if(typeof(countryArray[i][1]) == 'undefined')
    	{
    		countryArray.splice(i,1); 
    		i--;
    	}
    }
    }, {
        sync: true
    });
}
getConfig();
