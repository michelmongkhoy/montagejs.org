"use strict";var Montage=require("montage").Montage,Semantics=Montage,logger=require("core/logger").logger("blueprint"),PropertyValidationSemantics=exports.PropertyValidationSemantics=Semantics.create(Semantics,{constructor:{value:function PropertyValidationSemantics(){this.super()}},initWithBlueprint:{value:function(e){return this._blueprint=e,this}},_blueprint:{value:null},blueprint:{get:function(){return this._blueprint}},compile:{value:function(e,n){Semantics.compile.call(this,e,n)}},operators:{value:{isBound:function(e){return!e}}},evaluators:{value:{isBound:function(e,n){var t=this;return function(s,a){return s=t.count(e(s,a)),n(s,a)}}}}});for(var operator in Semantics.operators)PropertyValidationSemantics.operators[operator]=Semantics.operators[operator];for(var evaluator in Semantics.evaluators)PropertyValidationSemantics.evaluators[evaluator]=Semantics.evaluators[evaluator];