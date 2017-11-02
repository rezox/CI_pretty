var configPDF = {
	ledger : {
		title :{
			main : {
				text : 'Ledger Nilai Aspek ==aspek==',
				fontSize: 18,
				bold: true,
				alignment: 'center',
			},
			second : {
				text : 'Kelas ==kelas== Semester ==semester== Tahun ==tahun==/==tahun+1==',
				fontSize: 15,
				bold: true,
				alignment: 'center',
			}
		}, 
		config : {
			orientation : 'landscape',
			rowhead : 2,
			widths : [20, 30, 40, 50],	
			pageSise : 'folio',
			margin : [30, 30, 30, 30],
		},
		head : {
			main : [
				{
					text : 'No',
					alignment : 'center',
					bold : true,
					rowSpan : 2,
					style: 'tableHeader',
				},
				{
					text : 'NIM',
					alignment : 'center',
					bold : true,
					rowSpan : 2,
					style: 'tableHeader',
				},
				{
					text : 'Nama Siswa',
					alignment : 'center',
					bold : true,
					rowSpan : 2,
					style: 'tableHeader',
				},
				{
					text : 'L/P',
					alignment : 'center',
					bold : true,
					rowSpan : 2,
					style: 'tableHeader',
				},
				{
					text : 'Komptensi Yang Menonjol',
					alignment : 'center',
					bold : true,
					colSpan : 2,
					style: 'tableHeader',
				},
				{},
				{
					text : 'Komptensi Yang Kurang Menonjol',
					alignment : 'center',
					bold : true,
					colSpan : 2,
					style: 'tableHeader',
				},
				{},
				{
					text : 'Rerata',
					alignment : 'center',
					bold : true,
					rowSpan : 2,
					style: 'tableHeader',
				},
				{
					text : 'Predikat',
					alignment : 'center',
					bold : true,
					rowSpan : 2,
					style: 'tableHeader',
				},
				{
					text : 'Deskripsi',
					alignment : 'center',
					bold : true,
					rowSpan : 2,
					style: 'tableHeader',
				},
			], 
			second : [
				'','','','',
				{
					text : 'Kompetensi',
					alignment : 'center',
					bold : true,
					style: 'tableHeader',
				},
				{
					text : 'Nilai',
					alignment : 'center',
					bold : true,
					style: 'tableHeader',
				},
				{
					text : 'Kompetensi',
					alignment : 'center',
					bold : true,
					style: 'tableHeader',
				},
				{
					text : 'Nilai',
					alignment : 'center',
					bold : true,
					style: 'tableHeader',
				},
				'','','',
			],
		},
		body : {
			dataKey: ['username','original_name','gender','great_topic','great','less_topic','less','mean','label','description'],
			alignment : ['center','left','center','justify','center','justify','center','center','center','justify'],
		},
	},
	report : {
		title :{
			main : {
				text : 'Raport Nilai Aspek ==aspek==',
				fontSize: 18,
				bold: true,
				alignment: 'center',
			},
			second : {
				text : 'Kelas ==kelas== Semester ==semester== Tahun ==tahun==/==tahun+1==',
				fontSize: 15,
				bold: true,
				alignment: 'center',
			}
		}, 
		config : {
			orientation : 'portrait',
			rowhead : 2,
			widths : [20, 30, 40, 50],	
			pageSise : 'folio',
			margin : [30, 30, 30, 30],
		},
		head : {
			main : [
				{
					text : 'No',
					alignment : 'center',
					bold : true,
					rowSpan : 2,
					style: 'tableHeader',
				},
				{
					text : 'Mata Pelajaran',
					alignment : 'center',
					bold : true,
					rowSpan : 2,
					style: 'tableHeader',
				},
				{
					text : 'Kompetensi Menonjol',
					alignment : 'center',
					bold : true,
					colSpan : 2,
					style: 'tableHeader',
				},
				'',
				{
					text : 'Kompetensi Kurang Menonjol',
					alignment : 'center',
					bold : true,
					colSpan : 2,
					style: 'tableHeader',
				},
				'',
				{
					text : 'Rerata',
					alignment : 'center',
					bold : true,
					rowSpan : 2,
					style: 'tableHeader',
				},
				{
					text : 'Label',
					alignment : 'center',
					bold : true,
					rowSpan : 2,
					style: 'tableHeader',
				},
				{
					text : 'Deskripsi',
					alignment : 'center',
					bold : true,
					rowSpan : 2,
					style: 'tableHeader',
				},
			], 
			second : [
				'','',
				{
					text : 'Kompetensi',
					alignment : 'center',
					bold : true,
					style: 'tableHeader',
				},
				{
					text : 'Nilai',
					alignment : 'center',
					bold : true,
					style: 'tableHeader',
				},
				{
					text : 'Kompetensi',
					alignment : 'center',
					bold : true,
					style: 'tableHeader',
				},
				{
					text : 'Nilai',
					alignment : 'center',
					bold : true,
					style: 'tableHeader',
				},
				'','','',
			],
		},
		body : {
			dataKey: ['title','great_topic','great','less_topic','less','mean','label','description'],
			alignment : ['left','justify','center','justify','center','center','center','justify'],
		},
	},
};