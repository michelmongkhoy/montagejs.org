montageDefine("1b6c26a","core/serialization/serializer/properties-serializer",{dependencies:["montage"],factory:function(e,n){var s=e("montage").Montage,a=s.specialize.call(Object,{_malker:{value:null},_visitor:{value:null},_object:{value:null},constructor:{value:function a(){}},initWithMalkerAndVisitorAndObject:{value:function(e,n,s){return this._malker=e,this._visitor=n,this._object=s,this}},addObject:{value:function(e){return"object"==typeof e?(this._malker.visit(e),e):void 0}},addObjectReference:{value:function(e){var n=this._visitor.builder,s=this._visitor.labeler,a=s.getObjectLabel(e),o=Object.create(t);return o.reference=n.createReference(a),o}},set:{value:function(e,n,s){this._visitor.setProperty(this._malker,e,n,s)}},setAll:{value:function(){this._visitor.setSerializableObjectProperties(this._malker,this._object)}}}),t={thisIsAReferenceCreatedByMontageSerializer:!0,reference:null};n.PropertiesSerializer=a}});