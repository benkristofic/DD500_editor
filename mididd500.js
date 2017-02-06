var midi = null;  // global MIDIAccess object
var pedalId = null; //Id from the DD-500
var base = [0xF0,0x41,0x10,0x00,0x00,0x00,0x1A];//default start of a sysEx message
var reqByte = 0x12; //request or send data (0x12 = send, 0x11 = request)
var address = [0,0,0,0]; //array for the address of the parameter
var checkSum = 0; // variable for checksum byte
var endByte = 0xF7; // default end of a sysEx message
var patchName = ""; // variable for storing the name of the patch
var value = []; //array (or loose variable) for the value to send
var receivedMessage = []; //sysEx message received from pedal
var availableId = []; 
var assTarget = 0;
var specialEffects = [1,2,3,4,5,7,8,9,10,11]; //0 = terra, 1 = slow, 2 = filter, 3 = shimmer, 4 = SFX, 5 = pattern, 6 = Dual, 7 = Vintage, 8 = Tape, 9 = Analog
var specialEffectId = ["terra","slow","filter","shimmer","sfx","pattern","dual","vintage","tape","analog"];
var selectedBank = [];
var presetTimer = 0;
var paramTimer = 0;
var arraySelection = [[0,41],[41,89],[89,145],[145,189],[189,233]];

$(document).ready(function() {
	
	function onMIDISuccess(midiAccess) {
  	console.log( "MIDI ready!" );
  	midi = midiAccess;
		listInputsAndOutputs(midiAccess);
	}

	function onMIDIFailure(msg) {
  	console.log( "Failed to get MIDI access - " + msg );
	}

	function listInputsAndOutputs( midiAccess ) {
		midi = midiAccess;
		//set outputs;
		var outputs = midi.outputs.values();
 		for (var output = outputs.next();output && !output.done; output = outputs.next()) {
			listOutputs(output);
		}
		document.getElementById("outputportselector").selectedIndex = 4;
		pedalId = availableId[4];
	
		var inputs = midi.inputs.values();
		for (var input = inputs.next();input && !input.done; input = inputs.next()) {
			input.value.onmidimessage = onMIDIMessage;
		}
	
		//create bank-list with coreesponding address-values;
		createBankList();
	
		//fill all parameter menus
		for (var i in menuOptions) {
			fillMenu(i);
		}
	}

	function onMIDIMessage(message) {
		var data = message.data;
		if (data != 248) { //is not clock-message
			receivedMessage = []; //array for incomming data
		
			//select only address, value
			for (var i=10;i<data.length;i++) {
				receivedMessage.push(data[i]); 
			}
			receivedMessage.splice(receivedMessage.length-2,2)
		
			//in case of name:
			if (receivedMessage[0] == 0 && receivedMessage[1] < 16) {
				if (receivedMessage[1] == 0) {
					patchName = "";
				}
				patchName = patchName+String.fromCharCode(receivedMessage[2]);
				if (receivedMessage[1] == 15) {
					showPatchName();
				}
			}
		
			else {
				for (var i in parameterList) {
					if (parameterList[i][0] == receivedMessage[0] && parameterList[i][1] == receivedMessage[1]) {
						var result;
					
						//check if it's a assTarget
						if (parameterList[i][3].substr(0,9) == "assTarget") {
							assTarget = receivedMessage[2]+1;
						}
						//convert values
						if (receivedMessage.length == 4) {
							result = incomingMessage(receivedMessage.splice(2,2),2,1,parameterList[i][4]);
						}
						else if (receivedMessage.length == 6) {
							result = incomingMessage(receivedMessage.splice(2,4),4,1,parameterList[i][4])
						}
						else if (receivedMessage.length == 8) {
							if (assTarget == 4 || assTarget == 0) {
								result = incomingMessage(receivedMessage.splice(2,6),6,10,parameterList[i][4])
								assTarget = 0;
							}
							else {
								result = incomingMessage(receivedMessage.splice(2,6),6,1,parameterList[i][4]);
								assTarget = 0;
							}
						}
						else {
							result = receivedMessage[2]+parameterList[i][4];
						}
						//set values to menu or number-input;
						if (document.getElementById(parameterList[i][3]).type == 'select-one') {
						 	document.getElementById(parameterList[i][3]).selectedIndex=result;
						} 	
						else {
							document.getElementById(parameterList[i][3]).value=result;
						}
					
						//change things on certain results
						if (i == 0) {
							showSpecialEffects(result);
						}
					}
				}
			}
		}
	}

	function incomingMessage(message,length,devide,offset) {
		var value = 0;
		var key = []
		key[2] = [16,1];
		key[4] = [4096,256,16,1];
		key[6] = [1048576,65536,4096,256,16,1];
		for (var i in message) {
			value += message[i]*key[length][i];
		}
		return (value/devide)+offset;
	}

	function showPatchName() {
 		document.getElementById("patchName").value = patchName;
	}
  
	$("#outputportselector").change(function() {
		pedalId = $(this).val();
	})
  
  $("#Bankselector").change(function(){
		var bank = $(this).val();
		var bankNumber = $(this).prop('selectedIndex');
		address[0] = parseInt(bank.split(",")[0]);
 		address[1] = parseInt(bank.split(",")[1]);
		selectedBank = [address[0],address[1]];
 		setBankView(bankNumber-1)
    $("#waitDiv").show();
		getParameters();
		
	})
  
	$("#assSwitch").change(function() {
		var selected = $(this).prop('selectedIndex');
	 	for (var j in assignSwitch) {
				$("#assign"+(parseInt(j)+1)).hide();
				if (j == selected) {
					$("#assign"+(parseInt(j)+1)).show();
				}
			}	
	})

	function setBankView(nr) {
		var message = [176,0,parseInt(nr/128),176,32,0,192,nr%128]
		var output = midi.outputs.get(pedalId);
		output.send(message);
	}

	function getParameters() {
		reqByte = 0x11;
		paramTimer = 0;
		getName();
		var paramFunc = [];
		for (var i=0;i<6;i++) {
			paramFunc[i] = setTimeout(function() {
				getAllParams();
			},750*(i+1));
		}
	}

	function getAllParams() {
		if (paramTimer <5) {
			for (var i=arraySelection[paramTimer][0];i<arraySelection[paramTimer][1];i++) {
				address[2] = parameterList[i][0];
				address[3] = parameterList[i][1];
				value = [0,0,0,parameterList[i][2]];
				calculateChecksum();
				sendData();
			}
			paramTimer++;
		}
		else if (paramTimer == 5) {
			$("#waitDiv").hide();
		}
	}
	
	function getName() {
		address[2] = hexToDec("00");
		for (var i = 0;i<16;i++) {
			address[3] = i
			value = [0,0,0,1];
			calculateChecksum();
			sendData();
		}
	}

	function calculateChecksum() {
		totalArray = address.concat(value);
		var sumIn = sumArray(totalArray);
		checkSum = 128 - sumIn%128;
		if (checkSum == 128) checkSum = 0x00;
	}

	function sumArray(a) {
		var b = 0;
		for (var i in a) {
			b += parseInt(a[i]);
		}
		return b;
	}
  
	function sendName(nameArray) {
		reqByte = 0x12;
		for (var i in nameArray) {
			address[2] = 0
			address[3] = i
			value = nameArray[i]
			calculateChecksum();
			sendData();
			updateView();
		}
	}

	function sendData() {
		var message = base.concat(reqByte,address,value,checkSum,endByte);
		var output = midi.outputs.get(pedalId);
		output.send(message);
		// console.log("bericht:",message);
	}

	function sendNewValue(id,val) {
		reqByte = 0x12;
		address[2] = parameterList[id][0];
		address[3] = parameterList[id][1];
		value = val;
		calculateChecksum();
		sendData();
		updateView();
	}

	function updateView() {
		address[0] = 48;
		address[1] = 0;
		calculateChecksum();
		sendData();
		address[0] = selectedBank[0];
		address[1] = selectedBank[1];
	}

	function listOutputs(outputs) {
		var output = outputs.value;
		var opt = document.createElement("option");
		opt.text = output.name;
		opt.value = output.id;
		availableId.push(output.id);
		document.getElementById("outputportselector").add(opt);	
	}

	function createBankList() {
		opt = document.createElement("option");
		opt.text = "Temp";
		opt.value = [48,0];
		document.getElementById("Bankselector").add(opt);
		for (var i=0;i<297;i++) {
			var opt = document.createElement("option");
			var addChar, firstByte,secondByte;
			if (i % 3 == 0)addChar = 'A';
			if (i % 3 == 1)addChar = 'B';
			if (i % 3 == 2)addChar = 'C';
			opt.text = "" + parseInt((i/3)+1) + addChar;
			firstByte = parseInt(((i+1)/32)+48);
			secondByte = ((i+1)%32)*4;
			opt.value = [firstByte,secondByte];
			document.getElementById("Bankselector").add(opt);
		}
	}

	function decToHex(a) {
		var hex = parseInt(a).toString(16);
		if (hex.length == 1) hex = "0"+hex;
		return hex;
	}  

	function hexToDec(a) {
		var dec = parseInt(a,16);
		return dec;
	}

	function generateAssign() {
		var assign = [1,2,3,4,5,6,7,8];
		var volgorde = [0,1,2,3,4,10,16,17,18,19,20,21,22];
		var base = 71
		var lengte  = [1,1,1,1,1,6,6,1,1,1,1,1,1];
		var offset =  [0,0,0,0,0,-100,-100,0,0,0,0,0,0];
		var naam = ["assSw","assSource","assSourceMode","assTarget","assTargetMin","assTargetMax","assActiveRangeLo","assActiveRangeHi","assWaveRate","assWaveForm","assIntPedalTrig","assIntPedalTime","assIntPedalCurve"]
		for (var i in assign) {
			document.writeln("//assign"+assign[i]+"<br>");
			for (var j in volgorde) {
				var first =  parseInt(((base+(i*23)) + volgorde[j])/128);
				var second = parseInt(((base+(i*23)) + volgorde[j])%128);
				var third =  lengte[j];
				var fourth = naam[j]+""+assign[i];
				var fifth = offset[j];
				document.write('[' + first + ',' + second + ',' + third + ',' + '"' + fourth + '",' + fifth + '],<br>');
			}
			document.writeln("<br>");
		}
	}

	function convertNumber(val,len) {
		var valArr = val.split("");
		var result = [];
		for (var i=0;i<len;i++) {
			result[i] = "";
		}
		valArr = valArr.reverse();
		for (var i in valArr) {
			result[(len-1)-i] = hexToDec(valArr[i]);
		}
		for (var i=0;i<(len-1)-(valArr.length-1);i++) {
			result[i] = hexToDec(0);
		}
 		return result;
	}

	navigator.requestMIDIAccess( { sysex: true } ).then( onMIDISuccess, onMIDIFailure );
  $("#patchName").change( function() {
		var name = $(this).val();
 		var nameArray = []
		for (var i=0;i<16;i++) {
	  	if (i < name.length){
				nameArray.push(name.charCodeAt(i));
			}
			else {
				nameArray.push(32);
			}	
		}
		sendName(nameArray);
	})

	$.each(parameterList, function(i) {
		$("#"+parameterList[i][3]).change(function() { 

			//als het een getal-input is.
			if ($(this).is("input")) {
				var selected = $("#"+parameterList[i][3]).val();
			}

			//als het een select-ding is.
			if ($(this).is("select")) {
				var selected = $("#"+parameterList[i][3]).prop('selectedIndex');
			}
					  
			selected = parseInt(selected) - parameterList[i][4];
			//in special cases (like changing things when something is selected); 
			if (i == 0) {
				showSpecialEffects(selected);
			}
			
			if (parameterList[i][2] != 1) {
				var divide = 1;
				if (i == 2) divide = 10;
				selected = convertNumber(decToHex(selected*divide),parameterList[i][2]);
			}

				
			//send data
			sendNewValue(i,selected);
		});
	})
	
	function showSpecialEffects(sel) {
		for (var j in specialEffects) {
			$("#"+specialEffectId[j]).hide();
			if (sel == specialEffects[j]) {
				$("#"+specialEffectId[j]).show();
			}
		}
	}
	
	$("#close").click(function() {
		$("#infoDiv").hide();
	})
	
	$("#info").click(function() {
		$("#infoDiv").show();
	});
	
	$("#loadDiv").on("click","#importPatch",function() {
		var file = $('#fileInput').get(0).files[0];
		var data = {}
		if (file.type == "application/json") {
			var success = function (content) {
				data = JSON.parse(content);
				handlePreset(data);
			}
			var fileReader = new FileReader();
			fileReader.onload = function (e) { 
				success(e.target.result) 
			};
			var result = fileReader.readAsText(file);
		}
	});
	
	function sendPresetData(data) {
		if (presetTimer < 5) {
			for (var i=arraySelection[presetTimer][0];i<arraySelection[presetTimer][1];i++) {
				if ($("#"+i).is("input")) {
					$("#"+i).val(data[i]);
					$("#"+i).trigger("change");
				}
				else if ($("#"+i).is("select")) {
					$("#"+i+" option:eq("+data[i]+")").prop("selected",true);
					$("#"+i).trigger("change");
				}
			}
			presetTimer++;
		}
		else if (presetTimer == 5) {
			$("#loadDiv").hide();
		}
	}
	
	function handlePreset(data) {
		presetTimer = 0;
		$("#patchName").val(data.name);
		$("#patchName").trigger("change");
		var presetFunc = [];
		for (var i=0;i<6;i++) {
			presetFunc[i] = setTimeout(function() {
				sendPresetData(data);
			},750*(i+1));
		}		
	}//handlePreset;
	
	$("#loadDiv").on("click","#warningCancel",function() {
		$("#loadDiv").hide();
	})
	
	$("#textthing").on("click","#loadPatch",function() {
		$("#fileInput").trigger("click");
		$("#loadDiv").show();
	})
	
	$("#savePatch").click(function() {
		var preset = {};
		for (var i in parameterList) {
			var param = parameterList[i][3];
			if ($("#"+param).is("input")) {
				preset[param] = $("#"+param).val();
			}
			if ($("#"+param).is("select")) {
				preset[param] = $("#"+param).prop("selectedIndex");
			}
		}
		preset["name"] = $("#patchName").val();
		saveJson(JSON.stringify(preset));
	});
	
	function saveJson(preset) {
		var presetName = $("#patchName").val()
		var dataStr = "data:text/json;charset-utf-8,"+encodeURIComponent(preset);
		var dlElem = $("<a id='downloadPreset' href='"+dataStr+"' download='"+presetName.trim()+".json'>a</a>");
		$('#textthing').append(dlElem);
		$("#downloadPreset").get(0).click();
		$("#downloadPreset").remove();
	}
});