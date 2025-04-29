gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code = {};
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.localVariables = [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDBlackSquareDecoratedButtonObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDBlackSquareDecoratedButtonObjects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSpriteObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSpriteObjects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSprite3Objects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSprite3Objects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDGreyButtonWithShadowObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDGreyButtonWithShadowObjects2= [];


gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.window.isFullScreen(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackSquareDecoratedButton"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDBlackSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDBlackSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDBlackSquareDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDBlackSquareDecoratedButtonObjects1[k] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDBlackSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDBlackSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13604636);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "гра", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDWhiteSquareDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13605492);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "налаштування", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDGreyButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDGreyButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDGreyButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDGreyButtonWithShadowObjects1[k] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDGreyButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDGreyButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13606716);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSprite3Objects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSprite3Objects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDGreyButtonWithShadowObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDGreyButtonWithShadowObjects2.length = 0;

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList0(runtimeScene);
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSprite3Objects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSprite3Objects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDGreyButtonWithShadowObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDGreyButtonWithShadowObjects2.length = 0;


return;

}

gdjs['_1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code'] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code;
