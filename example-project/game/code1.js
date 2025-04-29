gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code = {};
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.localVariables = [];
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDNewTiledSpriteObjects1= [];
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDNewTiledSpriteObjects2= [];
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDNewTextObjects1= [];
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDNewTextObjects2= [];
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDBlackSquareDecoratedButtonObjects1= [];
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDBlackSquareDecoratedButtonObjects2= [];


gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackSquareDecoratedButton"), gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDBlackSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDBlackSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDBlackSquareDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDBlackSquareDecoratedButtonObjects1[k] = gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDBlackSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDBlackSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Безымянная сцена", false);
}}

}


};

gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDNewTextObjects1.length = 0;
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDNewTextObjects2.length = 0;
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDBlackSquareDecoratedButtonObjects2.length = 0;

gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.eventsList0(runtimeScene);
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDNewTextObjects1.length = 0;
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDNewTextObjects2.length = 0;
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code.GDBlackSquareDecoratedButtonObjects2.length = 0;


return;

}

gdjs['_1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code'] = gdjs._1085_1072_1083_1072_1096_1090_1091_1074_1072_1085_1085_1103Code;
