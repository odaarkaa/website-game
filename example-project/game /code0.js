gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDBasketObjects1= [];
gdjs.MainCode.GDBasketObjects2= [];
gdjs.MainCode.GDBackgorundObjects1= [];
gdjs.MainCode.GDBackgorundObjects2= [];
gdjs.MainCode.GDFruitObjects1= [];
gdjs.MainCode.GDFruitObjects2= [];
gdjs.MainCode.GDFruit2Objects1= [];
gdjs.MainCode.GDFruit2Objects2= [];
gdjs.MainCode.GDFruit3Objects1= [];
gdjs.MainCode.GDFruit3Objects2= [];
gdjs.MainCode.GDFruit4Objects1= [];
gdjs.MainCode.GDFruit4Objects2= [];
gdjs.MainCode.GDBombObjects1= [];
gdjs.MainCode.GDBombObjects2= [];
gdjs.MainCode.GDScoreTextObjects1= [];
gdjs.MainCode.GDScoreTextObjects2= [];
gdjs.MainCode.GDStartTextObjects1= [];
gdjs.MainCode.GDStartTextObjects2= [];
gdjs.MainCode.GDBomb2Objects1= [];
gdjs.MainCode.GDBomb2Objects2= [];
gdjs.MainCode.GDBottomObjects1= [];
gdjs.MainCode.GDBottomObjects2= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFruitObjects1ObjectsGDgdjs_9546MainCode_9546GDFruit2Objects1ObjectsGDgdjs_9546MainCode_9546GDFruit3Objects1ObjectsGDgdjs_9546MainCode_9546GDFruit4Objects1Objects = Hashtable.newFrom({"Fruit": gdjs.MainCode.GDFruitObjects1, "Fruit2": gdjs.MainCode.GDFruit2Objects1, "Fruit3": gdjs.MainCode.GDFruit3Objects1, "Fruit4": gdjs.MainCode.GDFruit4Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBasketObjects1Objects = Hashtable.newFrom({"Basket": gdjs.MainCode.GDBasketObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFruitObjects1ObjectsGDgdjs_9546MainCode_9546GDFruit2Objects1ObjectsGDgdjs_9546MainCode_9546GDFruit3Objects1ObjectsGDgdjs_9546MainCode_9546GDFruit4Objects1Objects = Hashtable.newFrom({"Fruit": gdjs.MainCode.GDFruitObjects1, "Fruit2": gdjs.MainCode.GDFruit2Objects1, "Fruit3": gdjs.MainCode.GDFruit3Objects1, "Fruit4": gdjs.MainCode.GDFruit4Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBombObjects1ObjectsGDgdjs_9546MainCode_9546GDBomb2Objects1Objects = Hashtable.newFrom({"Bomb": gdjs.MainCode.GDBombObjects1, "Bomb2": gdjs.MainCode.GDBomb2Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBasketObjects1Objects = Hashtable.newFrom({"Basket": gdjs.MainCode.GDBasketObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBombObjects1ObjectsGDgdjs_9546MainCode_9546GDBomb2Objects1Objects = Hashtable.newFrom({"Bomb": gdjs.MainCode.GDBombObjects1, "Bomb2": gdjs.MainCode.GDBomb2Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFruitObjects1ObjectsGDgdjs_9546MainCode_9546GDFruit2Objects1ObjectsGDgdjs_9546MainCode_9546GDFruit3Objects1ObjectsGDgdjs_9546MainCode_9546GDFruit4Objects1Objects = Hashtable.newFrom({"Fruit": gdjs.MainCode.GDFruitObjects1, "Fruit2": gdjs.MainCode.GDFruit2Objects1, "Fruit3": gdjs.MainCode.GDFruit3Objects1, "Fruit4": gdjs.MainCode.GDFruit4Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBottomObjects1Objects = Hashtable.newFrom({"Bottom": gdjs.MainCode.GDBottomObjects1});
gdjs.MainCode.asyncCallback9790996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.MainCode.asyncCallback9790996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Basket"), gdjs.MainCode.GDBasketObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBasketObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBasketObjects1[i].addPolarForce(0, 300, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Basket"), gdjs.MainCode.GDBasketObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBasketObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBasketObjects1[i].addPolarForce(0, -(300), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.MainCode.GDStartTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDStartTextObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDStartTextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDStartTextObjects1[k] = gdjs.MainCode.GDStartTextObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDStartTextObjects1.length = k;
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.MainCode.GDStartTextObjects1);
{for(var i = 0, len = gdjs.MainCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDStartTextObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "FruitsGenerateTimer", 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.MainCode.GDFruitObjects1.length = 0;

gdjs.MainCode.GDFruit2Objects1.length = 0;

gdjs.MainCode.GDFruit3Objects1.length = 0;

gdjs.MainCode.GDFruit4Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFruitObjects1ObjectsGDgdjs_9546MainCode_9546GDFruit2Objects1ObjectsGDgdjs_9546MainCode_9546GDFruit3Objects1ObjectsGDgdjs_9546MainCode_9546GDFruit4Objects1Objects, "Fruit" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 10)), gdjs.randomInRange(30, 610), -(100), "");
}{for(var i = 0, len = gdjs.MainCode.GDFruitObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruitObjects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.3));
}
for(var i = 0, len = gdjs.MainCode.GDFruit2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit2Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.3));
}
for(var i = 0, len = gdjs.MainCode.GDFruit3Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit3Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.3));
}
for(var i = 0, len = gdjs.MainCode.GDFruit4Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit4Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.3));
}
}{for(var i = 0, len = gdjs.MainCode.GDFruitObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruitObjects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.MainCode.GDFruit2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit2Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.MainCode.GDFruit3Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit3Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.MainCode.GDFruit4Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit4Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.MainCode.GDFruitObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruitObjects1[i].addPolarForce(90, 130, 1);
}
for(var i = 0, len = gdjs.MainCode.GDFruit2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit2Objects1[i].addPolarForce(90, 130, 1);
}
for(var i = 0, len = gdjs.MainCode.GDFruit3Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit3Objects1[i].addPolarForce(90, 130, 1);
}
for(var i = 0, len = gdjs.MainCode.GDFruit4Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit4Objects1[i].addPolarForce(90, 130, 1);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fruit"), gdjs.MainCode.GDFruitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fruit2"), gdjs.MainCode.GDFruit2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fruit3"), gdjs.MainCode.GDFruit3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fruit4"), gdjs.MainCode.GDFruit4Objects1);
{for(var i = 0, len = gdjs.MainCode.GDFruitObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruitObjects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDFruit2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit2Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDFruit3Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit3Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDFruit4Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit4Objects1[i].rotate(90, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Basket"), gdjs.MainCode.GDBasketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fruit"), gdjs.MainCode.GDFruitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fruit2"), gdjs.MainCode.GDFruit2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fruit3"), gdjs.MainCode.GDFruit3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fruit4"), gdjs.MainCode.GDFruit4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBasketObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFruitObjects1ObjectsGDgdjs_9546MainCode_9546GDFruit2Objects1ObjectsGDgdjs_9546MainCode_9546GDFruit3Objects1ObjectsGDgdjs_9546MainCode_9546GDFruit4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDFruitObjects1 */
/* Reuse gdjs.MainCode.GDFruit2Objects1 */
/* Reuse gdjs.MainCode.GDFruit3Objects1 */
/* Reuse gdjs.MainCode.GDFruit4Objects1 */
{for(var i = 0, len = gdjs.MainCode.GDFruitObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruitObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDFruit2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDFruit3Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDFruit4Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDFruit4Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.MainCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.MainCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDScoreTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Bomb", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.MainCode.GDBombObjects1.length = 0;

gdjs.MainCode.GDBomb2Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBombObjects1ObjectsGDgdjs_9546MainCode_9546GDBomb2Objects1Objects, "Bomb" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 10)), gdjs.randomInRange(30, 610), -(100), "");
}{for(var i = 0, len = gdjs.MainCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBombObjects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.3));
}
for(var i = 0, len = gdjs.MainCode.GDBomb2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDBomb2Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.3));
}
}{for(var i = 0, len = gdjs.MainCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBombObjects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.MainCode.GDBomb2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDBomb2Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.MainCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBombObjects1[i].addPolarForce(90, 130, 1);
}
for(var i = 0, len = gdjs.MainCode.GDBomb2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDBomb2Objects1[i].addPolarForce(90, 130, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Basket"), gdjs.MainCode.GDBasketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bomb"), gdjs.MainCode.GDBombObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bomb2"), gdjs.MainCode.GDBomb2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBasketObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBombObjects1ObjectsGDgdjs_9546MainCode_9546GDBomb2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBombObjects1 */
/* Reuse gdjs.MainCode.GDBomb2Objects1 */
{for(var i = 0, len = gdjs.MainCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDBomb2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDBomb2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bomb"), gdjs.MainCode.GDBombObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBombObjects1[i].rotate(90, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bottom"), gdjs.MainCode.GDBottomObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fruit"), gdjs.MainCode.GDFruitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fruit2"), gdjs.MainCode.GDFruit2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fruit3"), gdjs.MainCode.GDFruit3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fruit4"), gdjs.MainCode.GDFruit4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFruitObjects1ObjectsGDgdjs_9546MainCode_9546GDFruit2Objects1ObjectsGDgdjs_9546MainCode_9546GDFruit3Objects1ObjectsGDgdjs_9546MainCode_9546GDFruit4Objects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBottomObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9790508);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDBasketObjects1.length = 0;
gdjs.MainCode.GDBasketObjects2.length = 0;
gdjs.MainCode.GDBackgorundObjects1.length = 0;
gdjs.MainCode.GDBackgorundObjects2.length = 0;
gdjs.MainCode.GDFruitObjects1.length = 0;
gdjs.MainCode.GDFruitObjects2.length = 0;
gdjs.MainCode.GDFruit2Objects1.length = 0;
gdjs.MainCode.GDFruit2Objects2.length = 0;
gdjs.MainCode.GDFruit3Objects1.length = 0;
gdjs.MainCode.GDFruit3Objects2.length = 0;
gdjs.MainCode.GDFruit4Objects1.length = 0;
gdjs.MainCode.GDFruit4Objects2.length = 0;
gdjs.MainCode.GDBombObjects1.length = 0;
gdjs.MainCode.GDBombObjects2.length = 0;
gdjs.MainCode.GDScoreTextObjects1.length = 0;
gdjs.MainCode.GDScoreTextObjects2.length = 0;
gdjs.MainCode.GDStartTextObjects1.length = 0;
gdjs.MainCode.GDStartTextObjects2.length = 0;
gdjs.MainCode.GDBomb2Objects1.length = 0;
gdjs.MainCode.GDBomb2Objects2.length = 0;
gdjs.MainCode.GDBottomObjects1.length = 0;
gdjs.MainCode.GDBottomObjects2.length = 0;

gdjs.MainCode.eventsList1(runtimeScene);
gdjs.MainCode.GDBasketObjects1.length = 0;
gdjs.MainCode.GDBasketObjects2.length = 0;
gdjs.MainCode.GDBackgorundObjects1.length = 0;
gdjs.MainCode.GDBackgorundObjects2.length = 0;
gdjs.MainCode.GDFruitObjects1.length = 0;
gdjs.MainCode.GDFruitObjects2.length = 0;
gdjs.MainCode.GDFruit2Objects1.length = 0;
gdjs.MainCode.GDFruit2Objects2.length = 0;
gdjs.MainCode.GDFruit3Objects1.length = 0;
gdjs.MainCode.GDFruit3Objects2.length = 0;
gdjs.MainCode.GDFruit4Objects1.length = 0;
gdjs.MainCode.GDFruit4Objects2.length = 0;
gdjs.MainCode.GDBombObjects1.length = 0;
gdjs.MainCode.GDBombObjects2.length = 0;
gdjs.MainCode.GDScoreTextObjects1.length = 0;
gdjs.MainCode.GDScoreTextObjects2.length = 0;
gdjs.MainCode.GDStartTextObjects1.length = 0;
gdjs.MainCode.GDStartTextObjects2.length = 0;
gdjs.MainCode.GDBomb2Objects1.length = 0;
gdjs.MainCode.GDBomb2Objects2.length = 0;
gdjs.MainCode.GDBottomObjects1.length = 0;
gdjs.MainCode.GDBottomObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
