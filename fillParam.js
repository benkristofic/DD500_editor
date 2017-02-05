var modeMenu = ["Standard", "Tera echo", "Slow attack", "Filter", "Shimmer", "SFX", "Reverse", "Pattern",
"Dual", "Vintage digital", "Tape", "Analog"];

var noteMenu = ["16th", "8th triplet", 'dotted 16th',"8th", "quarter triplet", "dotted 8th", "quarter", "2nd triplet", "dotted quarter", "half", "whole triplet", "dotted half", "whole"];

var modulationRateMenu = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, "whole", "dotted half", "whole triplet", "half", "dotted quarter", "half triplet", "quarter", "dotted 8th", "quarter triplet", "8th", "dotted 16th", "8th triplet", "16th"]

var onoffMenu = ["Off","On"]; 

var lowCutFreqMenu = ["FLAT", "20.0Hz", "25.0Hz", "31.5Hz", "40.0Hz", "50.0Hz", "63.0Hz", "80.0Hz", "100Hz", "125Hz", "160Hz", "200Hz", "250Hz", "315Hz", "400Hz", "500Hz", "630Hz", "800Hz"];

var midFreqMenu = ["20.0Hz", "25.0Hz", "31.5Hz", "40.0Hz", "50.0Hz", "63.0Hz", "80.0Hz", "100Hz", "125Hz", "160Hz", "200Hz", "250Hz", "315Hz", "400Hz", "500Hz", "630Hz", "800Hz", "1.00kHz", "1.25kHz", "1.60kHz", "2.00kHz", "2.50kHz", "3.15kHz", "4.00kHz", "5.00kHz", "6.30kHz", "8.00kHz", "10.0kHz"]

var qMenu = [0.5, 1, 2, 4, 8, 16];

var highFreqMenu = ["630Hz", "800Hz", "1.00kHz", "1.25kHz", "1.60kHz", "2.00kHz", "2.50kHz", "3.15kHz", "4.00kHz", "5.00kHz", "6.30kHz", "8.00kHz", "10.0kHz", "12.5kHz", "FLAT"];

var lowDampFreqMenu = ["20.0Hz", "25.0Hz", "31.5Hz", "40.0Hz", "50.0Hz", "63.0Hz", "80.0Hz", "100Hz", "125Hz", "160Hz", "200Hz", "250Hz", "315Hz", "400Hz", "500Hz", "630Hz", "800Hz"];

var highDampFreqMenu = ["630Hz", '800Hz', "1.00kHz", "1.25kHz", "1.60kHz", "2.00kHz", "2.50kHz", "3.15kHz", "4.00kHz", "5.00kHz", "6.30kHz", "8.00kHz", "10.0kHz", "12.5kHz"];

var tapCtlMenu = ["TAP", "HOLD", "WARP", "TWIST", "MOMENT", "ROLL 1/2", "ROLL 1/4", "ROLL 1/8", "FADE IN", "FADE OUT", "ASSIGN"];

var ctlValMenu = ["OFF", "HOLD", "WARP", "TWIST", "MOMENTARY", "ROLL", "FADE IN/OUT"];

var ctlFunction = ["OFF", "TAP", "HOLD", "WARP", "TWIST", "MOMENTARY", "ROLL 1/2", "ROLL 1/4", "ROLL 1/8", "FADE IN", "FADE OUT", "EFFECT SW", "BANK UP", "BANK DOWN", "LOOPonOff", "LOOP CLR"];

var ctlMode = ["Moment","Toggle"];

var expMode = ["Off", "Time", "Feedback", "Tone", "E.Level", "mod depth", "Mod rate"]

//assign modes
var assSource = ["TAP/CTL", "EXP PDL", "CTL1 PDL", "CTL2 PDL", "INT PDL", "WAVE PDL", "INPUT", "CC#1", "CC#2", "CC#3", "CC#4", "CC#5", "CC#6", "CC#7", "CC#8", "CC#9", "CC#10", "CC#11", "CC#12", "CC#13", "CC#14", "CC#15", "CC#16", "CC#17", "CC#18", "CC#19", "CC#20", "CC#21", "CC#22", "CC#23", "CC#24", "CC#25", "CC#26", "CC#27", "CC#28", "CC#29", "CC#30", "CC#31", "CC#64", "CC#65", "CC#66", "CC#67", "CC#68", "CC#69", "CC#70", "CC#71", "CC#72", "CC#73", "CC#74", "CC#75", "CC#76", "CC#77", "CC#78", "CC#79", "CC#80", "CC#81", "CC#82", "CC#83", "CC#84", "CC#85", "CC#86", "CC#87", "CC#88", "CC#89", "CC#90", "CC#91", "CC#92", "CC#93", "CC#94", "CC#95"]

var assTarget = ["EFFECT SW", "MODE", "TIME", "BPM", "NOTE", "FEEDBACK", "TONE", "EFFECT LEVEL", "MOD DEPTH", "MOD RATE", "CARRYOVER", "DIRECT LEVEL", "INPUT LEVEL", "EQ SW", "EQ LEVEL", "EQ LO.CUT", "EQ LO.GAIN", "EQ LM.GAIN", "EQ LM.FREQ", "EQ LM.Q", "EQ HM.GAIN", "EQ HM.FREQ", "EQ HM.Q", "EQ HI.GAIN", "EQ HI.CUT", "LO DAMP", "LO DAMP F", "HI DAMP", "HI DAMP F", "DUCK SENS", "DUCK PreDepth", "DUCK PostDepth", "EFFECT PAN", "DIRECT PAN", "TERA RESO", "SLOW SENS", "SLOW RISE TIME", "LFO TYPE", "LFO RATE", "LFO DEPTH", "FILTER TYPE", "CUTOFF", "RESONANCE", "FILTER POS", "PITCH SHIFT", "PITCH FINE", "PITCH BAL", "DIRECT FB", "SFX LOFI BIT",
"SFX LOFI RATE", "SFX LOFI BAL", "SFX TREM WAVE", "SFX TREM RATE", "SFX TREM DEPTH", "SFX TREM POS", "PATTERN", "DELAY1 TIME", "DELAY1 LEVEL", "DELAY1 PAN", "DELAY2 TIME", "DELAY2 LEVEL", "DELAY2 PAN", "DELAY3 TIME", "DELAY3 LEVEL", "DELAY3 PAN", "DELAY4 TIME", "DELAY4 LEVEL", "DELAY4 PAN", "DELAY5 TIME", "DELAY5 LEVEL", "DELAY5 PAN", "DELAY6 TIME", "DELAY6 LEVEL", "DELAY6 PAN", "DELAY7 TIME", "DELAY7 LEVEL", "DELAY7 PAN", "DELAY8 TIME", "DELAY8 LEVEL", "DELAY8 PAN", "DELAY9 TIME", "DELAY9 LEVEL", "DELAY9 PAN", "DELAY10 TIME", "DELAY10 LEVEL", "DELAY10 PAN", "DELAY11 TIME", "DELAY11 LEVEL", "DELAY11 PAN",
"DELAY12 TIME", "DELAY12 LEVEL", "DELAY12 PAN", "DELAY13 TIME", "DELAY13 LEVEL", "DELAY13 PAN", "DELAY14 TIME", "DELAY14 LEVEL", "DELAY14 PAN", "DELAY15 TIME", "DELAY15 LEVEL", "DELAY15 PAN", "DELAY16 TIME", "DELAY16 LEVEL", "DELAY16 PAN", "DUAL MODE", "DUAL TYPE", "D1 E.LEVEL", "DUAL LINK", "D2 TIME", "D2 FEEDBACK",
"D2 TIME LINK", "D2 FB LINK", "D2 E.LEVEL", "V. DIGI TYPE", "FILTER", "TIMEx2",
"DELAY PHASE", "FEEDBACK PHASE", "TAPE TYPE", "TAPE HEAD", "STAGE", "TAP/CTL LED"];

var assWaveForm = ["SAW", "TRI", "SIN"];

var assIntPedalTrig = ["Patch Change", "Exp low", "Exp mid", "Exp high", "CTL1 PDL", "CTL2 PDL", "CC#1", "CC#2", "CC#3", "CC#4", "CC#5", "CC#6", "CC#7", "CC#8", "CC#9", "CC#10", "CC#11", "CC#12", "CC#13", "CC#14", "CC#15", "CC#16", "CC#17", "CC#18", "CC#19", "CC#20", "CC#21", "CC#22", "CC#23", "CC#24", "CC#25", "CC#26", "CC#27", "CC#28", "CC#29", "CC#30", "CC#31", "CC#64", "CC#65", "CC#66", "CC#67", "CC#68", "CC#69", "CC#70", "CC#71", "CC#72", "CC#73", "CC#74", "CC#75", "CC#76", "CC#77", "CC#78", "CC#79", "CC#80", "CC#81", "CC#82", "CC#83", "CC#84", "CC#85", "CC#86", "CC#87", "CC#88", "CC#89", "CC#90", "CC#91", "CC#92", "CC#93", "CC#94", "CC#95"];

var assIntCurve = ["Linear", "Slow", "Fast"];

var filterLfoType = ["Triangle", "Sine", "Square"];

var filterType = ["LPF", "BPF", "HPF"]; 

var filterCutoff = ["100 Hz", "125 Hz", "160 Hz", "200 Hz", "250 Hz", "315 Hz", "400 Hz", "500 Hz", "630 Hz", "800 Hz", "1.00 kHz", "1.25 kHz", "1.60 kHz", "2.00 kHz", "2.50 kHz", "3.15 kHz", "4.00 kHz", "5.00 kHz", "6.30 kHz", "8.00 kHz"]

var filterPos = ["Pre", "Post"];

var bitDepth = ["Off", 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

var sampleRate = ["Off", "1/2", "1/3", "1/4", "1/5", "1/6", "1/7", "1/8", "1/9", "1/10", "1/11", "1/12", "1/13", "1/14", "1/15", "1/16", "1/17", "1/18", "1/19", "1/20", "1/21", "1/22", "1/23", "1/24", "1/25", "1/26", "1/27", "1/28", "1/29", "1/30", "1/31", "1/32"]

var patternType = ["Pattern 1", "Pattern 2", "Pattern 3", "Pattern 4", "Pattern 5", "Pattern 6", "Pattern 7", "Pattern 8", "Patterb 9", "Pattern 10", "User pattern"];

var patternDelay = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, "0/16", "1/16", "2/16", "3/16", "4/16", "5/16", "6/16", "7/16", "8/16", "9/16", "10/16", "11/16", "12/16", "13/16", "14/16", "15/16", "16/16", "0/12", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12", "12/12", "0/32", "1/32", "2/32", "3/32", "4/32", "5/32", "6/32", "7/32", "8/32", "9/32", "10/32", "11/32", "12/32", "13/32", "14/32", "15/32", "16/32", "17/32", "18/32", "19/32", "20/32", "21/32", "22/32", "23/32", "24/32", "25/32", "26/32", "27/32", "28/32", "29/32", "30/32", "31/32", "32/32", "0/24", "1/24", "2/24", "3/24", "4/24", "5/24", "6/24", "7/24", "8/24", "9/24", "10/24", "11/24", "12/24", "13/24", "14/24", "15/24", "16/24", "17/24", "18/24", "19/24", "20/24", "21/24", "22/24", "23/24", "24/24"]

var dualMode = ["Series", "Parallel"];

var dualType = ["standard", "Analog", "Tape"];

var vintageType = ['SDE-2000', "SDE-3000", "DD-2"];

var vintageNorInv = ["Normal", "Inverted"];

var tapeType = ["RE-201", "EchoP"];

var tapeHead = [1, 2, 3, "1+2", "1+3", "2+3", "1+2+3"];

var analogBbd = [4096, '4096x2', "4096x4"];

var assignSwitch = ["Assign 1","Assign 2","Assign 3","Assign 4","Assign 5","Assign 6","Assign 7","Assign 8"];

var menuOptions=[
[modeMenu,"mode"],
[noteMenu,"note"],
[modulationRateMenu,"modulationRate"],
[onoffMenu,"carryover"],
[onoffMenu,"eqSw"], 
[lowCutFreqMenu,"eqLowCutFilterFreq"], 
[midFreqMenu,"eqLowMidFreq"],
[midFreqMenu,"eqHighMidFreq"],
[qMenu,"eqLowMidQ"],
[qMenu,"eqHighMidQ"],
[highFreqMenu,"highCutFilterFreq"],
[lowDampFreqMenu,"lowDampFreq"],
[highDampFreqMenu,"hiDampFreq"],
[tapCtlMenu,"tapCtlFunction"],
[ctlValMenu,"ctlValue"],
[ctlFunction,"ctlOneFunction"],
[ctlFunction,"ctlTwoFunction"],
[ctlMode,"ctlOneMode"],
[ctlMode,"ctlTwoMode"],
[expMode,"expPedalFunction"], 
//assign1
[onoffMenu,"assSw1"],
[assSource,"assSource1"],
[ctlMode,"assSourceMode1"],
[assTarget,"assTarget1"],
[modulationRateMenu,"assWaveRate1"],
[assWaveForm,"assWaveForm1"],
[assIntPedalTrig,"assIntPedalTrig1"],
[assIntCurve,"assIntPedalCurve1"],
//assign2
[onoffMenu,"assSw2"],
[assSource,"assSource2"],
[ctlMode,"assSourceMode2"],
[assTarget,"assTarget2"],
[modulationRateMenu,"assWaveRate2"],
[assWaveForm,"assWaveForm2"],
[assIntPedalTrig,"assIntPedalTrig2"],
[assIntCurve,"assIntPedalCurve2"],
//assign3
[onoffMenu,"assSw3"],
[assSource,"assSource3"],
[ctlMode,"assSourceMode3"],
[assTarget,"assTarget3"],
[modulationRateMenu,"assWaveRate3"],
[assWaveForm,"assWaveForm3"],
[assIntPedalTrig,"assIntPedalTrig3"],
[assIntCurve,"assIntPedalCurve3"],
//assign4
[onoffMenu,"assSw4"],
[assSource,"assSource4"],
[ctlMode,"assSourceMode4"],
[assTarget,"assTarget4"],
[modulationRateMenu,"assWaveRate4"],
[assWaveForm,"assWaveForm4"],
[assIntPedalTrig,"assIntPedalTrig4"],
[assIntCurve,"assIntPedalCurve4"],
//assign5
[onoffMenu,"assSw5"],
[assSource,"assSource5"],
[ctlMode,"assSourceMode5"],
[assTarget,"assTarget5"],
[modulationRateMenu,"assWaveRate5"],
[assWaveForm,"assWaveForm5"],
[assIntPedalTrig,"assIntPedalTrig5"],
[assIntCurve,"assIntPedalCurve5"],
//assign6
[onoffMenu,"assSw6"],
[assSource,"assSource6"],
[ctlMode,"assSourceMode6"],
[assTarget,"assTarget6"],
[modulationRateMenu,"assWaveRate6"],
[assWaveForm,"assWaveForm6"],
[assIntPedalTrig,"assIntPedalTrig6"],
[assIntCurve,"assIntPedalCurve6"],
//assign7
[onoffMenu,"assSw7"],
[assSource,"assSource7"],
[ctlMode,"assSourceMode7"],
[assTarget,"assTarget7"],
[modulationRateMenu,"assWaveRate7"],
[assWaveForm,"assWaveForm7"],
[assIntPedalTrig,"assIntPedalTrig7"],
[assIntCurve,"assIntPedalCurve7"],
//assign8
[onoffMenu,"assSw8"],
[assSource,"assSource8"],
[ctlMode,"assSourceMode8"],
[assTarget,"assTarget8"],
[modulationRateMenu,"assWaveRate8"],
[assWaveForm,"assWaveForm8"],
[assIntPedalTrig,"assIntPedalTrig8"],
[assIntCurve,"assIntPedalCurve8"],

[filterLfoType,"fiLfoType"],
[modulationRateMenu,"fiLfoRate"],
[filterType,"fiType"],
[filterCutoff,"fiCutoff"],
[filterPos,"fiPosition"],
[bitDepth,"sfBitDepth"],
[sampleRate,"sfSampleRate"],
[modulationRateMenu,"sfRate"],
[filterPos,"sfPosition"],
[patternType,"paType"],
[patternDelay,"paTime1"],
[patternDelay,"paTime2"],
[patternDelay,"paTime3"],
[patternDelay,"paTime4"],
[patternDelay,"paTime5"],
[patternDelay,"paTime6"],
[patternDelay,"paTime7"],
[patternDelay,"paTime8"],
[patternDelay,"paTime9"],
[patternDelay,"paTime10"],
[patternDelay,"paTime11"],
[patternDelay,"paTime12"],
[patternDelay,"paTime13"],
[patternDelay,"paTime14"],
[patternDelay,"paTime15"],
[patternDelay,"paTime16"],
[noteMenu,"paNote"],
[dualMode,"duMode"],
[dualType,"duType"],
[onoffMenu,"duLink"],
[vintageType,"viType"],
[onoffMenu,"viFilterSwitch"],
[onoffMenu,"viTimeSwitch"],
[vintageNorInv,"viDelayPhase"],
[vintageNorInv,"viFeedbackPhase"],
[tapeType,"taType"],
[analogBbd,"anBbd"],
[tapeHead,"taHead"],
[assignSwitch,"assSwitch"],
]

function fillMenu(menu) {
	for (var i in menuOptions[menu][0]) {
		var opt = document.createElement("option");
		opt.text = menuOptions[menu][0][i];
		document.getElementById(menuOptions[menu][1]).add(opt);
	}
}

