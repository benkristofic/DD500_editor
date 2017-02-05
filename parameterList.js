var parameterList = [[0,16,1,"mode",0],
[0,17,4,"delayTime",0],
[0,21,6,"bpm",0],
[0,27,1,"note",0],
[0,28,1,"feedback",0],
[0,29,1,"tone",-50], 
[0,30,1,"effectLevel",0],
[0,31,1,"modulationDepth",0],
[0,32,1,"modulationRate",0],
[0,33,1,"carryover",0],
[0,34,1,"directLevel",0],
[0,35,1,"eqSw",0],
[0,36,1,"eqTotalLevel",-20],
[0,37,1,"eqLowCutFilterFreq",0],
[0,38,1,"eqLowGain",-20],
[0,39,1,"eqLowMidGain",-20],
[0,40,1,"eqLowMidFreq",0],
[0,41,1,"eqLowMidQ",0],
[0,42,1,"eqHighMidGain",-20],
[0,43,1,"eqHighMidFreq",0],
[0,44,1,"eqHighMidQ",0],
[0,45,1,"highEqGain",-20],
[0,46,1,"highCutFilterFreq",0],
[0,47,1,"lowDamp",-20],
[0,48,1,"lowDampFreq",0],
[0,49,1,"hiDampGain",-20],
[0,50,1,"hiDampFreq",0],
[0,51,1,"duckSens",0],
[0,52,1,"duckPreDepth",0],
[0,53,1,"duckPostDepth",0],
[0,54,1,"effectPan",-50],
[0,55,1,"directPan",-50],
[0,56,1,"tapCtlFunction",0],
[0,57,1,"ctlValue",0],
[0,58,1,"ctlOneFunction",0],
[0,59,1,"ctlOneMode",0],
[0,60,1,"ctlTwoFunction",0],
[0,61,1,"ctlTwoMode",0],
[0,62,1,"expPedalFunction",0],
[0,63,4,"expTargetMax",-100],
[0,67,4,"expTargetMin",-100],
[0,71,1,"assSw1",0],						//assign1
[0,72,1,"assSource1",0],
[0,73,1,"assSourceMode1",0],
[0,74,1,"assTarget1",0],
[0,75,6,"assTargetMin1",-100],
[0,81,6,"assTargetMax1",-100],
[0,87,1,"assActiveRangeLo1",0],
[0,88,1,"assActiveRangeHi1",0],
[0,89,1,"assWaveRate1",0],
[0,90,1,"assWaveForm1",0],
[0,91,1,"assIntPedalTrig1",0],
[0,92,1,"assIntPedalTime1",0],
[0,93,1,"assIntPedalCurve1",0],
[0,94,1,"assSw2",0],						//assign2
[0,95,1,"assSource2",0],
[0,96,1,"assSourceMode2",0],
[0,97,1,"assTarget2",0],
[0,98,6,"assTargetMin2",-100],
[0,104,6,"assTargetMax2",-100],
[0,110,1,"assActiveRangeLo2",0],
[0,111,1,"assActiveRangeHi2",0],
[0,112,1,"assWaveRate2",0],
[0,113,1,"assWaveForm2",0],
[0,114,1,"assIntPedalTrig2",0],
[0,115,1,"assIntPedalTime2",0],
[0,116,1,"assIntPedalCurve2",0],
[0,117,1,"assSw3",0],           //assign3               
[0,118,1,"assSource3",0],
[0,119,1,"assSourceMode3",0],
[0,120,1,"assTarget3",0],
[0,121,6,"assTargetMin3",-100],
[0,127,6,"assTargetMax3",-100],
[1,5,1,"assActiveRangeLo3",0],
[1,6,1,"assActiveRangeHi3",0],
[1,7,1,"assWaveRate3",0],
[1,8,1,"assWaveForm3",0],
[1,9,1,"assIntPedalTrig3",0],
[1,10,1,"assIntPedalTime3",0],
[1,11,1,"assIntPedalCurve3",0],
[1,12,1,"assSw4",0], 		 				//assign4
[1,13,1,"assSource4",0],
[1,14,1,"assSourceMode4",0],
[1,15,1,"assTarget4",0],
[1,16,6,"assTargetMin4",-100],
[1,22,6,"assTargetMax4",-100],
[1,28,1,"assActiveRangeLo4",0],
[1,29,1,"assActiveRangeHi4",0],
[1,30,1,"assWaveRate4",0],
[1,31,1,"assWaveForm4",0],
[1,32,1,"assIntPedalTrig4",0],
[1,33,1,"assIntPedalTime4",0],
[1,34,1,"assIntPedalCurve4",0],
[1,35,1,"assSw5",0],           	//assign5
[1,36,1,"assSource5",0],
[1,37,1,"assSourceMode5",0],
[1,38,1,"assTarget5",0],
[1,39,6,"assTargetMin5",-100],
[1,45,6,"assTargetMax5",-100],
[1,51,1,"assActiveRangeLo5",0],
[1,52,1,"assActiveRangeHi5",0],
[1,53,1,"assWaveRate5",0],
[1,54,1,"assWaveForm5",0],
[1,55,1,"assIntPedalTrig5",0],
[1,56,1,"assIntPedalTime5",0],
[1,57,1,"assIntPedalCurve5",0],
[1,58,1,"assSw6",0],							//assign6
[1,59,1,"assSource6",0],
[1,60,1,"assSourceMode6",0],
[1,61,1,"assTarget6",0],
[1,62,6,"assTargetMin6",-100],
[1,68,6,"assTargetMax6",-100],
[1,74,1,"assActiveRangeLo6",0],
[1,75,1,"assActiveRangeHi6",0],
[1,76,1,"assWaveRate6",0],
[1,77,1,"assWaveForm6",0],
[1,78,1,"assIntPedalTrig6",0],
[1,79,1,"assIntPedalTime6",0],
[1,80,1,"assIntPedalCurve6",0],
[1,81,1,"assSw7",0],							//assign 7
[1,82,1,"assSource7",0],
[1,83,1,"assSourceMode7",0],
[1,84,1,"assTarget7",0],
[1,85,6,"assTargetMin7",-100],
[1,91,6,"assTargetMax7",-100],
[1,97,1,"assActiveRangeLo7",0],
[1,98,1,"assActiveRangeHi7",0],
[1,99,1,"assWaveRate7",0],
[1,100,1,"assWaveForm7",0],
[1,101,1,"assIntPedalTrig7",0],
[1,102,1,"assIntPedalTime7",0],
[1,103,1,"assIntPedalCurve7",0],
[1,104,1,"assSw8",0],							//assign_8
[1,105,1,"assSource8",0],
[1,106,1,"assSourceMode8",0],
[1,107,1,"assTarget8",0],
[1,108,6,"assTargetMin8",-100],
[1,114,6,"assTargetMax8",-100],
[1,120,1,"assActiveRangeLo8",0],
[1,121,1,"assActiveRangeHi8",0],
[1,122,1,"assWaveRate8",0],
[1,123,1,"assWaveForm8",0],
[1,124,1,"assIntPedalTrig8",0],
[1,125,1,"assIntPedalTime8",0],
[1,126,1,"assIntPedalCurve8",0],
[16,0,1,"teResonance",0,0],////specific delay-options
[16,1,1,"saSens",0,1],//slow attack
[16,2,1,"saRiseTime",0,1],
[16,3,1,"fiLfoType",0,2],//filter
[16,4,1,"fiLfoRate",0,2],
[16,5,1,"fiLfoDepth",0,2],
[16,6,1,"fiType",0,2],
[16,7,1,"fiCutoff",0,2],
[16,8,1,"fiResonance",0,2],
[16,9,1,"fiPosition",0,2],
[16,10,1,"shPitch",-24,3],//shimmer
[16,11,1,"shFine",-50,3],
[16,12,1,"shBalance",0,3],
[16,13,1,"shFeedback",0,3],//sfx
[16,14,1,"sfBitDepth",0,4],
[16,15,1,"sfSampleRate",0,4],
[16,16,1,"sfBalance",0,4],
[16,17,1,"sfWave",0,4],
[16,18,1,"sfRate",0,4],
[16,19,1,"sfDepth",0,4],
[16,20,1,"sfPosition",0,4],//pattern
[16,21,1,"paType",0,5],
[16,22,2,"paTime1",0,5],
[16,24,1,"paLevel1",0,5],
[16,25,1,"paPan1",-50,5],
[16,26,2,"paTime2",0,5],
[16,28,1,"paLevel2",0,5],
[16,29,1,"paPan2",-50,5],
[16,30,2,"paTime3",0,5],
[16,32,1,"paLevel3",0,5],
[16,33,1,"paPan3",-50,5],
[16,34,2,"paTime4",0,5],
[16,36,1,"paLevel4",0,5],
[16,37,1,"paPan4",-50,5],
[16,38,2,"paTime5",0,5],
[16,40,1,"paLevel5",0,5],
[16,41,1,"paPan5",-50,5],
[16,42,2,"paTime6",0,5],
[16,44,1,"paLevel6",0,5],
[16,45,1,"paPan6",-50,5],
[16,46,2,"paTime7",0,5],
[16,48,1,"paLevel7",0,5],
[16,49,1,"paPan7",-50,5],
[16,50,2,"paTime8",0,5],
[16,52,1,"paLevel8",0,5],
[16,53,1,"paPan8",-50,5],
[16,54,2,"paTime9",0,5],
[16,56,1,"paLevel9",0,5],
[16,57,1,"paPan9",-50,5],
[16,58,2,"paTime10",0,5],
[16,60,1,"paLevel10",0,5],
[16,61,1,"paPan10",-50,5],
[16,62,2,"paTime11",0,5],
[16,64,1,"paLevel11",0,5],
[16,65,1,"paPan11",-50,5],
[16,66,2,"paTime12",0,5],
[16,68,1,"paLevel12",0,5],
[16,69,1,"paPan12",-50,5],
[16,70,2,"paTime13",0,5],
[16,72,1,"paLevel13",0,5],
[16,73,1,"paPan13",-50,5],
[16,74,2,"paTime14",0,5],
[16,76,1,"paLevel14",0,5],
[16,77,1,"paPan14",-50,5],
[16,78,2,"paTime15",0,5],
[16,80,1,"paLevel15",0,5],
[16,81,1,"paPan15",-50,5],
[16,82,2,"paTime16",0,5],
[16,84,1,"paLevel16",0,5],
[16,85,1,"paPan16",-50,5],
[16,86,1,"paNote",0,5],
[16,87,1,"duMode",0,6],//dual
[16,88,1,"duType",0,6],
[16,89,1,"duLevel1",0,6],
[16,90,1,"duLink",0,6],
[16,91,4,"duTime2Abs",0,6],
[16,95,1,"duTime2Rel",0,6],
[16,96,1,"duFeedback2Abs",0,6],
[16,97,1,"duFeedback2Rel",0,6],
[16,98,1,"duEffectLevel",0,6],
[16,99,1,"viType",0,7],//vintage delay
[16,100,1,"viFilterSwitch",0,7],
[16,101,1,"viTimeSwitch",0,7],
[16,102,1,"taType",0,8],//tape
[16,103,1,"anBbd",0,9],//analog
[16,104,1,"viDelayPhase",0,7],//vintage delay
[16,105,1,"viFeedbackPhase",0,7],
[16,106,1,"taHead",0,8]//tape
]