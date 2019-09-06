function showMAP(data,mapid){
	   var lat            = 34.650402777;
	   var lon            = 135.4727;

   // 位置とズームを決めてマップを描画
   var map = L.map(mapid,{
       center:[lat, lon],
       zoom: 5
   });

   // OpenStreetMapを使うためのおまじない
   var tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
       attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   });

   //GoogleMapを使う場合
//   var tileLayer = L.tileLayer(
//			'http://mt{s}.google.com/vt/lyrs=m@121&hl=ja&x={x}&y={y}&z={z}',
//			{ subdomains: [0,1,2,3] }
//		).addTo(map);

   tileLayer.addTo(map);

   var icon_w = 21;//14;
   var icon_h = 30;//20;

   var userIcon = L.icon({
       iconUrl: 'icon/image001.png',
       iconSize:     [icon_w, icon_h], // size of the icon
       iconAnchor: [0, icon_h],
   });
   var userIcon2 = L.icon({
       iconUrl: 'icon/image002.png',
       iconSize:     [icon_w, icon_h], // size of the icon
       iconAnchor: [0, icon_h],
   });

   var today = new Date("2019-03-01T08:00:00Z");


   // 指定した位置にマーカーを置く
   for (var d = 0; d < data.length; d++) {
		var v_label = data[d]['sLabel'].value;
		//var v_cat = data[d]['pin'].value;
		var vp = data[d]['point'];
		if(vp!=null){
			var v_point = vp.value.replace("Point","").replace("(","").replace(")","");
			var point = v_point.split(" ");
			v_lat = point[1];
			v_long = point[0];

			var icon = userIcon;
	        
			var dateStr = '';
			if (data[d]['update'] != null) {
				var v_update = data[d]['update'].value;
				var ms = Date.parse(v_update);
				var date = new Date(ms); 
				dateStr = date.toString();
				if(today<date){
					icon = userIcon2;
				}
			}
			
		
		var mapMarker = L.marker([v_lat, v_long], {icon: icon});
	//	var mapMarker = L.marker([v_lat, v_long]);
		   mapMarker.addTo(map);
		   mapMarker.bindPopup('<b>'+v_label+'</b><br>'+v_lat +","+v_long
					+'<br>更新日:'+dateStr
				   );
	   }
	}
}



